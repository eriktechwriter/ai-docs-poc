#!/usr/bin/env node

/**
 * Comprehensive Quality Assurance Script
 * 
 * This script runs all quality checks on documentation files:
 * - Spell checking with CSpell
 * - Markdown linting with markdownlint
 * - Prose linting with Vale
 * - Content validation
 * - Link checking
 * - Accessibility checks
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class QualityChecker {
  constructor() {
    this.results = {
      spelling: { passed: 0, failed: 0, errors: [] },
      markdown: { passed: 0, failed: 0, errors: [] },
      prose: { passed: 0, failed: 0, errors: [] },
      content: { passed: 0, failed: 0, errors: [] },
      links: { passed: 0, failed: 0, errors: [] },
      accessibility: { passed: 0, failed: 0, errors: [] }
    };
    this.startTime = Date.now();
  }

  async runAllChecks() {
    console.log(chalk.blue('🔍 Running Comprehensive Quality Checks\n'));
    
    try {
      await this.checkSpelling();
      await this.checkMarkdown();
      await this.checkProse();
      await this.checkContent();
      await this.checkLinks();
      await this.checkAccessibility();
      
      this.showSummary();
      
    } catch (error) {
      console.error(chalk.red('❌ Quality check failed:'), error.message);
      process.exit(1);
    }
  }

  async checkSpelling() {
    console.log(chalk.blue('📝 Checking spelling with CSpell...'));
    
    try {
      const result = await this.runCommand('npx', [
        'cspell',
        'docs/**/*.{md,mdx}',
        'src/**/*.{js,jsx,ts,tsx}',
        '--config',
        '.cspell.json',
        '--no-progress',
        '--show-context'
      ]);
      
      if (result.code === 0) {
        this.results.spelling.passed++;
        console.log(chalk.green('✅ Spelling check passed\n'));
      } else {
        this.results.spelling.failed++;
        this.results.spelling.errors.push(result.stderr);
        console.log(chalk.red('❌ Spelling errors found\n'));
      }
    } catch (error) {
      this.results.spelling.failed++;
      this.results.spelling.errors.push(error.message);
      console.log(chalk.yellow('⚠️  CSpell not available, skipping spelling check\n'));
    }
  }

  async checkMarkdown() {
    console.log(chalk.blue('📋 Checking Markdown with markdownlint...'));
    
    try {
      const result = await this.runCommand('npx', [
        'markdownlint',
        'docs/**/*.{md,mdx}',
        '--config',
        '.markdownlint.json',
        '--ignore',
        'node_modules'
      ]);
      
      if (result.code === 0) {
        this.results.markdown.passed++;
        console.log(chalk.green('✅ Markdown linting passed\n'));
      } else {
        this.results.markdown.failed++;
        this.results.markdown.errors.push(result.stdout);
        console.log(chalk.red('❌ Markdown linting issues found\n'));
      }
    } catch (error) {
      this.results.markdown.failed++;
      this.results.markdown.errors.push(error.message);
      console.log(chalk.yellow('⚠️  markdownlint not available, skipping markdown check\n'));
    }
  }

  async checkProse() {
    console.log(chalk.blue('✍️  Checking prose with Vale...'));
    
    try {
      const result = await this.runCommand('vale', [
        'docs/',
        '--config',
        '.vale.ini',
        '--output',
        'line'
      ]);
      
      if (result.code === 0) {
        this.results.prose.passed++;
        console.log(chalk.green('✅ Prose linting passed\n'));
      } else {
        this.results.prose.failed++;
        this.results.prose.errors.push(result.stdout);
        console.log(chalk.red('❌ Prose linting issues found\n'));
      }
    } catch (error) {
      this.results.prose.failed++;
      this.results.prose.errors.push(error.message);
      console.log(chalk.yellow('⚠️  Vale not available, skipping prose check\n'));
    }
  }

  async checkContent() {
    console.log(chalk.blue('🔍 Validating content structure...'));
    
    try {
      const result = await this.runCommand('node', ['scripts/validate-content.js']);
      
      if (result.code === 0) {
        this.results.content.passed++;
        console.log(chalk.green('✅ Content validation passed\n'));
      } else {
        this.results.content.failed++;
        this.results.content.errors.push(result.stdout);
        console.log(chalk.red('❌ Content validation issues found\n'));
      }
    } catch (error) {
      this.results.content.failed++;
      this.results.content.errors.push(error.message);
      console.log(chalk.yellow('⚠️  Content validator not available, skipping content check\n'));
    }
  }

  async checkLinks() {
    console.log(chalk.blue('🔗 Checking links...'));
    
    try {
      // Simple link check - in production, use a proper link checker
      const files = await this.findMarkdownFiles();
      let brokenLinks = 0;
      
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const links = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
        
        for (const link of links) {
          const url = link.match(/\]\(([^)]+)\)/)[1];
          
          // Check internal links
          if (url.startsWith('./') || url.startsWith('../') || url.startsWith('/')) {
            const linkPath = path.resolve(path.dirname(file), url);
            if (!fs.existsSync(linkPath)) {
              brokenLinks++;
              this.results.links.errors.push(`Broken link in ${file}: ${url}`);
            }
          }
        }
      }
      
      if (brokenLinks === 0) {
        this.results.links.passed++;
        console.log(chalk.green('✅ Link check passed\n'));
      } else {
        this.results.links.failed++;
        console.log(chalk.red(`❌ Found ${brokenLinks} broken links\n`));
      }
    } catch (error) {
      this.results.links.failed++;
      this.results.links.errors.push(error.message);
      console.log(chalk.yellow('⚠️  Link checking failed\n'));
    }
  }

  async checkAccessibility() {
    console.log(chalk.blue('♿ Checking accessibility...'));
    
    try {
      const files = await this.findMarkdownFiles();
      let accessibilityIssues = 0;
      
      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for images without alt text
        const images = content.match(/!\[([^\]]*)\]\([^)]+\)/g) || [];
        for (const img of images) {
          const altText = img.match(/!\[([^\]]*)\]/)[1];
          if (!altText.trim()) {
            accessibilityIssues++;
            this.results.accessibility.errors.push(`Missing alt text in ${file}: ${img}`);
          }
        }
        
        // Check for proper heading hierarchy
        const headings = content.match(/^#{1,6}\s+.+$/gm) || [];
        let lastLevel = 0;
        for (const heading of headings) {
          const level = heading.match(/^(#{1,6})/)[1].length;
          if (level > lastLevel + 1) {
            accessibilityIssues++;
            this.results.accessibility.errors.push(`Heading hierarchy skip in ${file}: ${heading.trim()}`);
          }
          lastLevel = level;
        }
      }
      
      if (accessibilityIssues === 0) {
        this.results.accessibility.passed++;
        console.log(chalk.green('✅ Accessibility check passed\n'));
      } else {
        this.results.accessibility.failed++;
        console.log(chalk.red(`❌ Found ${accessibilityIssues} accessibility issues\n`));
      }
    } catch (error) {
      this.results.accessibility.failed++;
      this.results.accessibility.errors.push(error.message);
      console.log(chalk.yellow('⚠️  Accessibility checking failed\n'));
    }
  }

  async findMarkdownFiles() {
    const files = [];
    const docsDir = path.join(__dirname, '../docs');
    
    if (!fs.existsSync(docsDir)) {
      return files;
    }
    
    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath);
        } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
          files.push(fullPath);
        }
      }
    };
    
    scanDir(docsDir);
    return files;
  }

  async runCommand(command, args) {
    return new Promise((resolve) => {
      const child = spawn(command, args, {
        stdio: ['inherit', 'pipe', 'pipe'],
        shell: process.platform === 'win32'
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('exit', (code) => {
        resolve({ code, stdout, stderr });
      });

      child.on('error', (error) => {
        resolve({ code: 1, stdout: '', stderr: error.message });
      });
    });
  }

  showSummary() {
    const duration = Math.round((Date.now() - this.startTime) / 1000);
    
    console.log(chalk.blue('📊 Quality Check Summary\n'));
    console.log(chalk.gray(`Duration: ${duration}s\n`));
    
    const categories = [
      { name: 'Spelling', key: 'spelling', icon: '📝' },
      { name: 'Markdown', key: 'markdown', icon: '📋' },
      { name: 'Prose', key: 'prose', icon: '✍️' },
      { name: 'Content', key: 'content', icon: '🔍' },
      { name: 'Links', key: 'links', icon: '🔗' },
      { name: 'Accessibility', key: 'accessibility', icon: '♿' }
    ];
    
    let totalPassed = 0;
    let totalFailed = 0;
    
    for (const category of categories) {
      const result = this.results[category.key];
      totalPassed += result.passed;
      totalFailed += result.failed;
      
      const status = result.failed === 0 ? chalk.green('✅ PASS') : chalk.red('❌ FAIL');
      console.log(`${category.icon} ${category.name}: ${status}`);
      
      if (result.errors.length > 0) {
        for (const error of result.errors.slice(0, 3)) { // Show first 3 errors
          console.log(chalk.gray(`   ${error.split('\n')[0]}`));
        }
        if (result.errors.length > 3) {
          console.log(chalk.gray(`   ... and ${result.errors.length - 3} more`));
        }
      }
    }
    
    console.log('\n' + '='.repeat(50));
    
    if (totalFailed === 0) {
      console.log(chalk.green(`🎉 All quality checks passed! (${totalPassed} checks)`));
      process.exit(0);
    } else {
      console.log(chalk.red(`❌ ${totalFailed} quality checks failed, ${totalPassed} passed`));
      console.log(chalk.yellow('\n💡 Run individual tools for detailed output:'));
      console.log('   npx cspell docs/**/*.mdx');
      console.log('   npx markdownlint docs/**/*.mdx');
      console.log('   vale docs/');
      console.log('   node scripts/validate-content.js');
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const checker = new QualityChecker();
  checker.runAllChecks().catch(console.error);
}

module.exports = QualityChecker;