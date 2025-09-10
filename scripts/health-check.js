#!/usr/bin/env node

/**
 * Health Check Script
 * 
 * Verifies that the project setup is working correctly.
 * This script checks various aspects of the project configuration.
 */

const fs = require('fs-extra');
const path = require('path');

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

const REQUIRED_FILES = [
  'package.json',
  'docusaurus.config.ts',
  'sidebars.ts',
  'tsconfig.json',
  '.eslintrc.js',
  '.prettierrc',
  '.markdownlint.json',
  '.vale.ini',
];

const REQUIRED_DIRECTORIES = [
  'docs',
  'src',
  'static',
  'scripts',
  '.vscode',
  'data',
];

const REQUIRED_SCRIPTS = [
  'start',
  'build',
  'serve',
  'lint',
  'typecheck',
  'quality:check',
];

async function checkFiles() {
  console.log(chalk.blue('📁 Checking required files...'));
  let allFilesExist = true;
  
  for (const file of REQUIRED_FILES) {
    const exists = await fs.pathExists(file);
    if (exists) {
      console.log(chalk.green(`  ✅ ${file}`));
    } else {
      console.log(chalk.red(`  ❌ ${file} (missing)`));
      allFilesExist = false;
    }
  }
  
  return allFilesExist;
}

async function checkDirectories() {
  console.log(chalk.blue('\n📂 Checking required directories...'));
  let allDirsExist = true;
  
  for (const dir of REQUIRED_DIRECTORIES) {
    const exists = await fs.pathExists(dir);
    if (exists) {
      console.log(chalk.green(`  ✅ ${dir}/`));
    } else {
      console.log(chalk.red(`  ❌ ${dir}/ (missing)`));
      allDirsExist = false;
    }
  }
  
  return allDirsExist;
}

async function checkPackageScripts() {
  console.log(chalk.blue('\n📜 Checking package.json scripts...'));
  
  try {
    const packageJson = await fs.readJson('package.json');
    const scripts = packageJson.scripts || {};
    let allScriptsExist = true;
    
    for (const script of REQUIRED_SCRIPTS) {
      if (scripts[script]) {
        console.log(chalk.green(`  ✅ npm run ${script}`));
      } else {
        console.log(chalk.red(`  ❌ npm run ${script} (missing)`));
        allScriptsExist = false;
      }
    }
    
    return allScriptsExist;
  } catch (error) {
    console.log(chalk.red(`  ❌ Error reading package.json: ${error.message}`));
    return false;
  }
}

async function checkDependencies() {
  console.log(chalk.blue('\n📦 Checking dependencies...'));
  
  const nodeModulesExists = await fs.pathExists('node_modules');
  if (nodeModulesExists) {
    console.log(chalk.green('  ✅ node_modules directory exists'));
    
    // Check for key dependencies
    const keyDeps = ['@docusaurus/core', 'react', 'typescript'];
    let allDepsExist = true;
    
    for (const dep of keyDeps) {
      const depPath = path.join('node_modules', dep);
      const exists = await fs.pathExists(depPath);
      if (exists) {
        console.log(chalk.green(`  ✅ ${dep}`));
      } else {
        console.log(chalk.red(`  ❌ ${dep} (not installed)`));
        allDepsExist = false;
      }
    }
    
    return allDepsExist;
  } else {
    console.log(chalk.red('  ❌ node_modules directory missing'));
    console.log(chalk.yellow('     Run "npm install" to install dependencies'));
    return false;
  }
}

async function checkVSCodeConfig() {
  console.log(chalk.blue('\n🔧 Checking VS Code configuration...'));
  
  const vscodeDir = '.vscode';
  const vscodeFiles = ['extensions.json', 'settings.json', 'tasks.json', 'launch.json'];
  let allConfigsExist = true;
  
  for (const file of vscodeFiles) {
    const filePath = path.join(vscodeDir, file);
    const exists = await fs.pathExists(filePath);
    if (exists) {
      console.log(chalk.green(`  ✅ ${filePath}`));
    } else {
      console.log(chalk.red(`  ❌ ${filePath} (missing)`));
      allConfigsExist = false;
    }
  }
  
  return allConfigsExist;
}

async function main() {
  console.log(chalk.blue('🏥 AI Docs POC - Health Check\n'));
  
  const checks = [
    await checkFiles(),
    await checkDirectories(),
    await checkPackageScripts(),
    await checkDependencies(),
    await checkVSCodeConfig(),
  ];
  
  const allPassed = checks.every(Boolean);
  
  console.log(chalk.blue('\n📊 Health Check Summary:'));
  
  if (allPassed) {
    console.log(chalk.green('✅ All checks passed! The project setup is healthy.'));
    console.log(chalk.blue('\n🚀 You can now run:'));
    console.log(chalk.gray('  npm start    - Start development server'));
    console.log(chalk.gray('  npm run build - Build for production'));
  } else {
    console.log(chalk.red('❌ Some checks failed. Please review the issues above.'));
    console.log(chalk.yellow('\n💡 Common fixes:'));
    console.log(chalk.gray('  npm install  - Install missing dependencies'));
    console.log(chalk.gray('  npm run setup - Run full setup process'));
  }
  
  process.exit(allPassed ? 0 : 1);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main };