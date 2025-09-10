#!/usr/bin/env node

/**
 * Enhanced Development Server for AI Docs POC
 * 
 * This script provides an optimized development experience with:
 * - Fast hot reloading for MDX files
 * - Live preview with automatic browser refresh
 * - Performance monitoring
 * - Error handling and recovery
 */

const { spawn } = require('child_process');
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

class DevServer {
  constructor() {
    this.docusaurusProcess = null;
    this.isRestarting = false;
    this.lastRestart = 0;
    this.restartThrottle = 2000; // 2 seconds
    this.startTime = Date.now();
  }

  async start() {
    console.log(chalk.blue('🚀 Starting AI Docs POC Development Server...\n'));
    
    // Check if dependencies are installed
    await this.checkDependencies();
    
    // Start Docusaurus development server
    await this.startDocusaurus();
    
    // Set up file watchers for enhanced hot reloading
    this.setupFileWatchers();
    
    // Set up graceful shutdown
    this.setupGracefulShutdown();
    
    console.log(chalk.green('\n✅ Development server is ready!'));
    console.log(chalk.cyan('📖 Documentation: http://localhost:3000'));
    console.log(chalk.cyan('🔧 VS Code: Open the workspace file for optimal experience'));
    console.log(chalk.yellow('\n💡 Tips:'));
    console.log('  - Edit MDX files for instant preview updates');
    console.log('  - Use Ctrl+C to stop the server');
    console.log('  - Check the terminal for build errors and warnings\n');
  }

  async checkDependencies() {
    const packageJsonPath = path.join(__dirname, '../package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      console.log(chalk.red('❌ package.json not found. Please run from the project root.'));
      process.exit(1);
    }

    const nodeModulesPath = path.join(__dirname, '../node_modules');
    if (!fs.existsSync(nodeModulesPath)) {
      console.log(chalk.yellow('📦 Installing dependencies...'));
      await this.runCommand('npm', ['install']);
    }
  }

  async startDocusaurus() {
    return new Promise((resolve, reject) => {
      console.log(chalk.blue('🔧 Starting Docusaurus development server...'));
      
      this.docusaurusProcess = spawn('npm', ['run', 'start', '--', '--port', '3000', '--host', 'localhost'], {
        cwd: path.join(__dirname, '..'),
        stdio: ['inherit', 'pipe', 'pipe'],
        shell: process.platform === 'win32'
      });

      let serverReady = false;

      this.docusaurusProcess.stdout.on('data', (data) => {
        const output = data.toString();
        process.stdout.write(output);
        
        // Check if server is ready
        if (output.includes('Local:') || output.includes('localhost:3000')) {
          if (!serverReady) {
            serverReady = true;
            resolve();
          }
        }
      });

      this.docusaurusProcess.stderr.on('data', (data) => {
        const output = data.toString();
        
        // Filter out common warnings that don't affect functionality
        if (!this.isIgnorableWarning(output)) {
          process.stderr.write(chalk.yellow(output));
        }
      });

      this.docusaurusProcess.on('error', (error) => {
        console.error(chalk.red('❌ Failed to start Docusaurus:'), error);
        reject(error);
      });

      this.docusaurusProcess.on('exit', (code) => {
        if (code !== 0 && !this.isRestarting) {
          console.error(chalk.red(`❌ Docusaurus exited with code ${code}`));
        }
      });

      // Timeout fallback
      setTimeout(() => {
        if (!serverReady) {
          console.log(chalk.yellow('⏱️  Server taking longer than expected to start...'));
          resolve(); // Continue anyway
        }
      }, 30000);
    });
  }

  setupFileWatchers() {
    console.log(chalk.blue('👀 Setting up file watchers for enhanced hot reloading...'));
    
    // Watch for MDX and configuration changes
    const watcher = chokidar.watch([
      'docs/**/*.{md,mdx}',
      'src/**/*.{js,jsx,ts,tsx}',
      'data/**/*.{yaml,yml,json}',
      'docusaurus.config.ts',
      'sidebars.ts',
      '.continue/**/*.{json,md}'
    ], {
      ignored: [
        '**/node_modules/**',
        '**/.docusaurus/**',
        '**/build/**',
        '**/.git/**'
      ],
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', (filePath) => {
      const relativePath = path.relative(process.cwd(), filePath);
      console.log(chalk.green(`📝 File changed: ${relativePath}`));
      
      // Handle configuration changes that require restart
      if (this.requiresRestart(filePath)) {
        this.throttledRestart(`Configuration file changed: ${relativePath}`);
      }
    });

    watcher.on('add', (filePath) => {
      const relativePath = path.relative(process.cwd(), filePath);
      console.log(chalk.blue(`➕ File added: ${relativePath}`));
    });

    watcher.on('unlink', (filePath) => {
      const relativePath = path.relative(process.cwd(), filePath);
      console.log(chalk.red(`🗑️  File removed: ${relativePath}`));
    });

    watcher.on('error', (error) => {
      console.error(chalk.red('❌ File watcher error:'), error);
    });

    this.watcher = watcher;
  }

  requiresRestart(filePath) {
    const restartFiles = [
      'docusaurus.config.ts',
      'docusaurus.config.js',
      'sidebars.ts',
      'sidebars.js',
      'package.json'
    ];
    
    return restartFiles.some(file => filePath.endsWith(file));
  }

  throttledRestart(reason) {
    const now = Date.now();
    if (now - this.lastRestart < this.restartThrottle) {
      console.log(chalk.yellow('⏳ Restart throttled, waiting...'));
      return;
    }

    this.lastRestart = now;
    this.restartServer(reason);
  }

  async restartServer(reason) {
    if (this.isRestarting) {
      return;
    }

    this.isRestarting = true;
    console.log(chalk.yellow(`🔄 Restarting server: ${reason}`));

    if (this.docusaurusProcess) {
      this.docusaurusProcess.kill('SIGTERM');
      
      // Wait for process to exit
      await new Promise((resolve) => {
        this.docusaurusProcess.on('exit', resolve);
        setTimeout(resolve, 5000); // Timeout after 5 seconds
      });
    }

    try {
      await this.startDocusaurus();
      console.log(chalk.green('✅ Server restarted successfully'));
    } catch (error) {
      console.error(chalk.red('❌ Failed to restart server:'), error);
    } finally {
      this.isRestarting = false;
    }
  }

  isIgnorableWarning(output) {
    const ignorablePatterns = [
      'webpack compiled with warnings',
      'asset size limit',
      'entrypoint size limit',
      'You can limit the size of your bundles'
    ];
    
    return ignorablePatterns.some(pattern => 
      output.toLowerCase().includes(pattern.toLowerCase())
    );
  }

  setupGracefulShutdown() {
    const shutdown = (signal) => {
      console.log(chalk.yellow(`\n🛑 Received ${signal}, shutting down gracefully...`));
      
      if (this.watcher) {
        this.watcher.close();
      }
      
      if (this.docusaurusProcess) {
        this.docusaurusProcess.kill('SIGTERM');
      }
      
      const uptime = Math.round((Date.now() - this.startTime) / 1000);
      console.log(chalk.blue(`📊 Server ran for ${uptime} seconds`));
      console.log(chalk.green('👋 Goodbye!'));
      
      process.exit(0);
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
    
    // Handle Windows Ctrl+C
    if (process.platform === 'win32') {
      const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      rl.on('SIGINT', () => shutdown('SIGINT'));
    }
  }

  async runCommand(command, args, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, {
        stdio: 'inherit',
        shell: process.platform === 'win32',
        ...options
      });

      child.on('exit', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Command failed with exit code ${code}`));
        }
      });

      child.on('error', reject);
    });
  }
}

// Start the development server
if (require.main === module) {
  const server = new DevServer();
  server.start().catch((error) => {
    console.error(chalk.red('❌ Failed to start development server:'), error);
    process.exit(1);
  });
}

module.exports = DevServer;