#!/usr/bin/env node

/**
 * System Health Check
 * 
 * Quick diagnostic to ensure the AI documentation system is ready to use.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class SystemHealthCheck {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.checks = [];
  }

  async runHealthCheck() {
    console.log(chalk.blue.bold('🏥 AI Documentation System Health Check'));
    console.log(chalk.gray('Verifying system readiness...\n'));

    // Run all checks
    this.checkProjectStructure();
    this.checkDependencies();
    this.checkTemplates();
    this.checkScripts();
    this.checkConfiguration();
    this.checkDirectories();

    // Display results
    this.displayResults();
    
    // Provide recommendations
    this.provideRecommendations();
  }

  checkProjectStructure() {
    const requiredFiles = [
      'package.json',
      'QUICK-START-DEMO.md',
      '.kiro/steering/mvp-development-approach.md'
    ];

    let passed = 0;
    for (const file of requiredFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        passed++;
      } else {
        this.checks.push({
          category: 'Project Structure',
          name: `Missing ${file}`,
          status: 'fail',
          impact: 'medium'
        });
      }
    }

    this.checks.push({
      category: 'Project Structure',
      name: `Core files present (${passed}/${requiredFiles.length})`,
      status: passed === requiredFiles.length ? 'pass' : 'warn',
      impact: 'high'
    });
  }

  checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      
      const requiredDeps = ['chalk', 'inquirer', 'fs-extra'];
      const availableDeps = Object.keys(packageJson.dependencies || {}).concat(Object.keys(packageJson.devDependencies || {}));
      
      let foundDeps = 0;
      for (const dep of requiredDeps) {
        if (availableDeps.includes(dep)) {
          foundDeps++;
        }
      }

      this.checks.push({
        category: 'Dependencies',
        name: `Required packages (${foundDeps}/${requiredDeps.length})`,
        status: foundDeps >= 2 ? 'pass' : 'warn',
        impact: 'high'
      });

      // Check if node_modules exists
      const nodeModulesExists = fs.existsSync(path.join(this.projectRoot, 'node_modules'));
      this.checks.push({
        category: 'Dependencies',
        name: 'Node modules installed',
        status: nodeModulesExists ? 'pass' : 'fail',
        impact: 'high'
      });

    } catch (error) {
      this.checks.push({
        category: 'Dependencies',
        name: 'Package.json readable',
        status: 'fail',
        impact: 'high'
      });
    }
  }

  checkTemplates() {
    const templatesDir = path.join(this.projectRoot, 'templates');
    
    if (!fs.existsSync(templatesDir)) {
      this.checks.push({
        category: 'Templates',
        name: 'Templates directory missing',
        status: 'fail',
        impact: 'high'
      });
      return;
    }

    const templateFiles = fs.readdirSync(templatesDir).filter(f => f.endsWith('.mdx'));
    const expectedTemplates = [
      'security-feature-overview.mdx',
      'task-how-to.mdx',
      'task-tutorial.mdx',
      'integration-guide.mdx'
    ];

    let foundTemplates = 0;
    for (const template of expectedTemplates) {
      if (templateFiles.includes(template)) {
        foundTemplates++;
      }
    }

    this.checks.push({
      category: 'Templates',
      name: `Template files available (${foundTemplates}/${expectedTemplates.length})`,
      status: foundTemplates >= 3 ? 'pass' : 'warn',
      impact: 'high'
    });
  }

  checkScripts() {
    const scriptsDir = path.join(this.projectRoot, 'scripts');
    
    const requiredScripts = [
      'ai-content-planner.js',
      'generate-content.js',
      'review-workflow.js',
      'content-quality-analyzer.js'
    ];

    let foundScripts = 0;
    for (const script of requiredScripts) {
      const scriptPath = path.join(scriptsDir, script);
      if (fs.existsSync(scriptPath)) {
        foundScripts++;
      }
    }

    this.checks.push({
      category: 'Scripts',
      name: `Core scripts present (${foundScripts}/${requiredScripts.length})`,
      status: foundScripts >= 3 ? 'pass' : 'warn',
      impact: 'high'
    });

    // Check if scripts are executable
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const scripts = packageJson.scripts || {};
      
      const requiredCommands = ['ai:plan', 'ai:generate', 'ai:review'];
      let foundCommands = 0;
      
      for (const cmd of requiredCommands) {
        if (scripts[cmd]) {
          foundCommands++;
        }
      }

      this.checks.push({
        category: 'Scripts',
        name: `NPM commands configured (${foundCommands}/${requiredCommands.length})`,
        status: foundCommands >= 2 ? 'pass' : 'warn',
        impact: 'medium'
      });

    } catch (error) {
      this.checks.push({
        category: 'Scripts',
        name: 'NPM commands configuration',
        status: 'fail',
        impact: 'medium'
      });
    }
  }

  checkConfiguration() {
    // Check steering docs
    const steeringDir = path.join(this.projectRoot, '.kiro', 'steering');
    const steeringExists = fs.existsSync(steeringDir);
    
    this.checks.push({
      category: 'Configuration',
      name: 'Steering documents present',
      status: steeringExists ? 'pass' : 'warn',
      impact: 'low'
    });

    // Check brand standards config
    const configDir = path.join(this.projectRoot, 'config');
    const brandConfigExists = fs.existsSync(path.join(configDir, 'brand-standards.json'));
    
    this.checks.push({
      category: 'Configuration',
      name: 'Brand standards configuration',
      status: brandConfigExists ? 'pass' : 'info',
      impact: 'low'
    });
  }

  checkDirectories() {
    const requiredDirs = [
      'scripts',
      'templates',
      '.vscode'
    ];

    let foundDirs = 0;
    for (const dir of requiredDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        foundDirs++;
      }
    }

    this.checks.push({
      category: 'Directories',
      name: `Required directories (${foundDirs}/${requiredDirs.length})`,
      status: foundDirs === requiredDirs.length ? 'pass' : 'warn',
      impact: 'medium'
    });

    // Check if output directories can be created
    const testDir = path.join(this.projectRoot, 'test-write-permissions');
    try {
      fs.mkdirSync(testDir, { recursive: true });
      fs.rmSync(testDir, { recursive: true });
      
      this.checks.push({
        category: 'Directories',
        name: 'Write permissions available',
        status: 'pass',
        impact: 'high'
      });
    } catch (error) {
      this.checks.push({
        category: 'Directories',
        name: 'Write permissions available',
        status: 'fail',
        impact: 'high'
      });
    }
  }

  displayResults() {
    const categories = [...new Set(this.checks.map(c => c.category))];
    
    for (const category of categories) {
      console.log(chalk.cyan(`\n📋 ${category}:`));
      
      const categoryChecks = this.checks.filter(c => c.category === category);
      
      for (const check of categoryChecks) {
        const icon = this.getStatusIcon(check.status);
        const color = this.getStatusColor(check.status);
        
        console.log(`   ${icon} ${chalk[color](check.name)}`);
      }
    }

    // Overall summary
    const passed = this.checks.filter(c => c.status === 'pass').length;
    const total = this.checks.length;
    const percentage = Math.round((passed / total) * 100);

    console.log(chalk.cyan('\n📊 Overall Health:'));
    
    if (percentage >= 90) {
      console.log(chalk.green(`   🎉 Excellent (${percentage}%) - System ready for use!`));
    } else if (percentage >= 75) {
      console.log(chalk.yellow(`   ⚡ Good (${percentage}%) - Minor issues, mostly functional`));
    } else if (percentage >= 60) {
      console.log(chalk.yellow(`   ⚠️  Fair (${percentage}%) - Some issues need attention`));
    } else {
      console.log(chalk.red(`   🚨 Poor (${percentage}%) - Significant issues need fixing`));
    }
  }

  provideRecommendations() {
    const failures = this.checks.filter(c => c.status === 'fail');
    const warnings = this.checks.filter(c => c.status === 'warn');

    if (failures.length > 0) {
      console.log(chalk.red('\n🚨 Critical Issues to Fix:'));
      failures.forEach(check => {
        console.log(chalk.red(`   • ${check.name}`));
      });
    }

    if (warnings.length > 0) {
      console.log(chalk.yellow('\n⚠️  Recommended Improvements:'));
      warnings.forEach(check => {
        console.log(chalk.yellow(`   • ${check.name}`));
      });
    }

    // Provide next steps
    console.log(chalk.cyan('\n🚀 Next Steps:'));
    
    if (failures.length === 0) {
      console.log(chalk.green('   ✅ System is ready! Try: npm run ai:generate'));
    } else {
      console.log(chalk.yellow('   1. Fix critical issues above'));
      console.log(chalk.yellow('   2. Run: npm install'));
      console.log(chalk.yellow('   3. Re-run health check'));
    }

    console.log(chalk.gray('\n📖 For detailed setup instructions, see: QUICK-START-DEMO.md'));
  }

  getStatusIcon(status) {
    const icons = {
      'pass': '✅',
      'warn': '⚠️',
      'fail': '❌',
      'info': 'ℹ️'
    };
    return icons[status] || '❓';
  }

  getStatusColor(status) {
    const colors = {
      'pass': 'green',
      'warn': 'yellow',
      'fail': 'red',
      'info': 'blue'
    };
    return colors[status] || 'gray';
  }
}

// CLI execution
async function main() {
  const healthCheck = new SystemHealthCheck();
  await healthCheck.runHealthCheck();
}

module.exports = SystemHealthCheck;

if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('Health check failed:'), error.message);
    process.exit(1);
  });
}