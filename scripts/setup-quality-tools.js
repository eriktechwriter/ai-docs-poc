#!/usr/bin/env node

/**
 * Quality Tools Setup Script
 * 
 * This script helps set up and configure quality assurance tools:
 * - CSpell for spell checking
 * - markdownlint for Markdown linting
 * - Vale for prose linting
 * - Custom content validation
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class QualityToolsSetup {
  constructor() {
    this.tools = [
      {
        name: 'CSpell',
        command: 'cspell',
        package: 'cspell',
        description: 'Spell checker for code and documentation',
        config: '.cspell.json'
      },
      {
        name: 'markdownlint',
        command: 'markdownlint',
        package: 'markdownlint-cli',
        description: 'Markdown linter and style checker',
        config: '.markdownlint.json'
      },
      {
        name: 'Vale',
        command: 'vale',
        package: null, // Vale needs to be installed separately
        description: 'Prose linter focused on editorial style',
        config: '.vale.ini'
      }
    ];
  }

  async setup() {
    console.log(chalk.blue('🔧 Setting up Quality Assurance Tools\n'));
    
    await this.checkNodeModules();
    await this.checkTools();
    await this.setupVale();
    await this.testTools();
    
    console.log(chalk.green('\n🎉 Quality tools setup complete!'));
    this.showUsageInstructions();
  }

  async checkNodeModules() {
    console.log(chalk.blue('📦 Checking Node.js packages...'));
    
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const devDeps = packageJson.devDependencies || {};
    
    const requiredPackages = ['markdownlint-cli'];
    const missingPackages = requiredPackages.filter(pkg => !devDeps[pkg]);
    
    if (missingPackages.length > 0) {
      console.log(chalk.yellow(`Installing missing packages: ${missingPackages.join(', ')}`));
      await this.runCommand('npm', ['install', '--save-dev', ...missingPackages]);
    }
    
    console.log(chalk.green('✅ Node.js packages ready\n'));
  }

  async checkTools() {
    console.log(chalk.blue('🔍 Checking tool availability...\n'));
    
    for (const tool of this.tools) {
      const available = await this.isCommandAvailable(tool.command);
      const configExists = fs.existsSync(tool.config);
      
      console.log(`${tool.name}:`);
      console.log(`  Command: ${available ? chalk.green('✅ Available') : chalk.red('❌ Not found')}`);
      console.log(`  Config: ${configExists ? chalk.green('✅ Present') : chalk.yellow('⚠️  Missing')}`);
      console.log(`  Description: ${tool.description}\n`);
      
      if (!available && tool.package) {
        console.log(chalk.yellow(`  Install with: npm install -g ${tool.package}\n`));
      }
    }
  }

  async setupVale() {
    console.log(chalk.blue('📝 Setting up Vale...'));
    
    const valeAvailable = await this.isCommandAvailable('vale');
    
    if (!valeAvailable) {
      console.log(chalk.yellow('Vale not found. Installation options:'));
      console.log('  • macOS: brew install vale');
      console.log('  • Windows: choco install vale');
      console.log('  • Linux: Download from https://github.com/errata-ai/vale/releases');
      console.log('  • Go: go install github.com/errata-ai/vale/v2/cmd/vale@latest\n');
      return;
    }
    
    // Create Vale styles directory if it doesn't exist
    const stylesDir = path.join('.vale', 'styles');
    if (!fs.existsSync(stylesDir)) {
      fs.mkdirSync(stylesDir, { recursive: true });
    }
    
    // Sync Vale packages
    try {
      console.log('Syncing Vale packages...');
      await this.runCommand('vale', ['sync']);
      console.log(chalk.green('✅ Vale packages synced\n'));
    } catch (error) {
      console.log(chalk.yellow('⚠️  Vale sync failed, continuing...\n'));
    }
  }

  async testTools() {
    console.log(chalk.blue('🧪 Testing tools...\n'));
    
    // Test CSpell
    try {
      await this.runCommand('npx', ['cspell', '--version']);
      console.log(chalk.green('✅ CSpell working'));
    } catch (error) {
      console.log(chalk.red('❌ CSpell test failed'));
    }
    
    // Test markdownlint
    try {
      await this.runCommand('npx', ['markdownlint', '--version']);
      console.log(chalk.green('✅ markdownlint working'));
    } catch (error) {
      console.log(chalk.red('❌ markdownlint test failed'));
    }
    
    // Test Vale
    try {
      await this.runCommand('vale', ['--version']);
      console.log(chalk.green('✅ Vale working'));
    } catch (error) {
      console.log(chalk.yellow('⚠️  Vale not available'));
    }
  }

  showUsageInstructions() {
    console.log(chalk.blue('\n📋 Usage Instructions:\n'));
    
    console.log(chalk.cyan('VS Code Integration:'));
    console.log('• Install recommended extensions from .vscode/extensions.json');
    console.log('• Quality issues will show as squiggly underlines');
    console.log('• Use Ctrl+Shift+P → "Problems" to see all issues\n');
    
    console.log(chalk.cyan('Command Line Usage:'));
    console.log('• npm run quality:spelling     # Check spelling');
    console.log('• npm run quality:markdown     # Check Markdown');
    console.log('• npm run quality:prose        # Check prose style');
    console.log('• npm run quality:comprehensive # Run all checks');
    console.log('• npm run quality:all          # Full quality suite\n');
    
    console.log(chalk.cyan('VS Code Tasks:'));
    console.log('• Ctrl+Shift+P → "Tasks: Run Task"');
    console.log('• Select "Quality Check All" for comprehensive check');
    console.log('• Individual tasks available for each tool\n');
    
    console.log(chalk.cyan('Configuration Files:'));
    console.log('• .cspell.json         # Spell checker settings');
    console.log('• .markdownlint.json   # Markdown linter rules');
    console.log('• .vale.ini            # Prose linter configuration');
    console.log('• .vale/styles/        # Custom Vale styles\n');
    
    console.log(chalk.yellow('💡 Tips:'));
    console.log('• Add custom words to .cspell.json');
    console.log('• Customize Markdown rules in .markdownlint.json');
    console.log('• Create custom Vale rules in .vale/styles/');
    console.log('• Use "<!-- markdownlint-disable -->" to disable rules');
    console.log('• Use "<!-- vale off -->" to disable Vale for sections\n');
  }

  async isCommandAvailable(command) {
    try {
      await this.runCommand(command, ['--version']);
      return true;
    } catch (error) {
      return false;
    }
  }

  async runCommand(command, args) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, {
        stdio: 'pipe',
        shell: process.platform === 'win32'
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

// CLI interface
if (require.main === module) {
  const setup = new QualityToolsSetup();
  setup.setup().catch(console.error);
}

module.exports = QualityToolsSetup;