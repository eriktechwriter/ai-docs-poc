#!/usr/bin/env node

/**
 * Development Environment Setup Script
 * 
 * This script helps set up the development environment for new contributors.
 * It checks for required tools and provides setup guidance.
 */

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Handle chalk import - fallback to basic colors if chalk fails
let chalk;
try {
  chalk = require('chalk');
} catch (error) {
  // Fallback color functions if chalk fails
  chalk = {
    blue: (text) => `\x1b[34m${text}\x1b[0m`,
    green: (text) => `\x1b[32m${text}\x1b[0m`,
    red: (text) => `\x1b[31m${text}\x1b[0m`,
    yellow: (text) => `\x1b[33m${text}\x1b[0m`,
    gray: (text) => `\x1b[90m${text}\x1b[0m`,
  };
}

const REQUIRED_NODE_VERSION = '18.0.0';
const RECOMMENDED_EXTENSIONS = [
  'unifiedjs.vscode-mdx',
  'github.copilot',
  'streetsidesoftware.code-spell-checker',
  'esbenp.prettier-vscode',
  'ms-vscode.vscode-eslint'
];

function checkNodeVersion() {
  const currentVersion = process.version.slice(1); // Remove 'v' prefix
  const [currentMajor] = currentVersion.split('.').map(Number);
  const [requiredMajor] = REQUIRED_NODE_VERSION.split('.').map(Number);
  
  if (currentMajor < requiredMajor) {
    console.log(chalk.red(`❌ Node.js ${REQUIRED_NODE_VERSION}+ required. Current: ${currentVersion}`));
    return false;
  }
  
  console.log(chalk.green(`✅ Node.js ${currentVersion} (meets requirement)`));
  return true;
}

function checkGit() {
  try {
    execSync('git --version', { stdio: 'ignore' });
    console.log(chalk.green('✅ Git is installed'));
    return true;
  } catch (error) {
    console.log(chalk.red('❌ Git is not installed'));
    return false;
  }
}

function checkVSCode() {
  try {
    execSync('code --version', { stdio: 'ignore' });
    console.log(chalk.green('✅ VS Code is installed'));
    return true;
  } catch (error) {
    console.log(chalk.yellow('⚠️  VS Code not found in PATH (optional but recommended)'));
    return false;
  }
}

function checkDependencies() {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
  
  if (!fs.existsSync(nodeModulesPath)) {
    console.log(chalk.yellow('⚠️  Dependencies not installed'));
    return false;
  }
  
  console.log(chalk.green('✅ Dependencies are installed'));
  return true;
}

function displayRecommendations() {
  console.log(chalk.blue('\n📋 Recommendations:'));
  
  console.log(chalk.gray('VS Code Extensions:'));
  RECOMMENDED_EXTENSIONS.forEach(ext => {
    console.log(chalk.gray(`  - ${ext}`));
  });
  
  console.log(chalk.gray('\nUseful Commands:'));
  console.log(chalk.gray('  npm start          - Start development server'));
  console.log(chalk.gray('  npm run build      - Build for production'));
  console.log(chalk.gray('  npm run quality:check - Run quality checks'));
  console.log(chalk.gray('  npm run format     - Format code'));
}

async function main() {
  console.log(chalk.blue('🚀 AI Docs POC - Development Environment Setup\n'));
  
  const checks = [
    checkNodeVersion(),
    checkGit(),
    checkVSCode(),
    checkDependencies()
  ];
  
  const allPassed = checks.every(Boolean);
  
  if (allPassed) {
    console.log(chalk.green('\n✅ Environment setup complete!'));
  } else {
    console.log(chalk.yellow('\n⚠️  Some requirements are missing. Please install them and run this script again.'));
  }
  
  displayRecommendations();
  
  console.log(chalk.blue('\n📚 Next steps:'));
  console.log(chalk.gray('1. Install recommended VS Code extensions'));
  console.log(chalk.gray('2. Run "npm start" to start the development server'));
  console.log(chalk.gray('3. Open http://localhost:3000 in your browser'));
  console.log(chalk.gray('4. Start editing files in the docs/ directory'));
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };