#!/usr/bin/env node

/**
 * Simple MDX Cleanup Script for Docusaurus
 * 
 * Fixes specific syntax issues from MD to MDX conversion:
 * - Removes broken HTML role attributes
 * - Fixes incomplete code blocks
 * - Cleans up frontmatter artifacts
 * - Keeps Docusaurus admonitions (:::note, :::warning, etc.)
 */

const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');
const matter = require('gray-matter');
const chalk = require('chalk');

class MDXCleanup {
  constructor(config = {}) {
    this.config = {
      sourceDir: config.sourceDir || 'docs',
      dryRun: config.dryRun || false,
      ...config
    };
    
    this.stats = {
      filesProcessed: 0,
      filesFixed: 0,
      issuesFixed: 0
    };
  }

  async cleanup() {
    console.log(chalk.blue.bold('🧹 MDX Cleanup for Docusaurus'));
    console.log(chalk.gray(`Source: ${this.config.sourceDir}`));
    console.log(chalk.gray(`Dry run: ${this.config.dryRun}\n`));

    const mdxFiles = await this.findMDXFiles();
    console.log(chalk.cyan(`📁 Found ${mdxFiles.length} MDX files\n`));

    for (const filePath of mdxFiles) {
      await this.processFile(filePath);
    }

    this.displayResults();
  }

  async findMDXFiles() {
    const pattern = `${this.config.sourceDir}/**/*.mdx`;
    return await glob(pattern);
  }

  async processFile(filePath) {
    this.stats.filesProcessed++;
    const fileName = path.basename(filePath);
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const { data: frontmatter, content: body } = matter(content);
      
      let fixedBody = body;
      let fixedFrontmatter = { ...frontmatter };
      let issuesFixed = 0;

      // Fix 1: Remove broken HTML role attributes
      const roleAttributePattern = /::::\s*\{role="[^"]*"\}\s*\n?/g;
      const singleRolePattern = /:::\s*\{role="[^"]*"\}\s*\n?/g;
      
      if (roleAttributePattern.test(fixedBody) || singleRolePattern.test(fixedBody)) {
        fixedBody = fixedBody.replace(roleAttributePattern, '');
        fixedBody = fixedBody.replace(singleRolePattern, '');
        issuesFixed++;
      }

      // Fix 2: Fix incomplete code blocks
      const incompleteCodePattern = /```\s*codeblock\s*\n/g;
      if (incompleteCodePattern.test(fixedBody)) {
        fixedBody = fixedBody.replace(incompleteCodePattern, '```bash\n');
        issuesFixed++;
      }

      // Fix 3: Clean up conversion artifacts from frontmatter
      const artifactFields = ['ai_context', 'conversion_status', 'translation_ready', 'last_updated'];
      let frontmatterCleaned = false;
      
      artifactFields.forEach(field => {
        if (fixedFrontmatter[field]) {
          delete fixedFrontmatter[field];
          frontmatterCleaned = true;
        }
      });
      
      if (frontmatterCleaned) {
        issuesFixed++;
      }

      // Fix 4: Add H1 title if frontmatter has title but content doesn't
      if (fixedFrontmatter.title && !fixedBody.match(/^#\s+/m)) {
        fixedBody = `# ${fixedFrontmatter.title}\n\n${fixedBody}`;
        issuesFixed++;
      }

      // Fix 5: Clean up excessive whitespace
      const originalLength = fixedBody.length;
      fixedBody = fixedBody
        .replace(/\n{4,}/g, '\n\n\n')  // Max 3 consecutive newlines
        .replace(/[ \t]+$/gm, '')      // Trailing whitespace
        .trim();                       // Leading/trailing whitespace

      if (fixedBody.length !== originalLength) {
        issuesFixed++;
      }

      // Save if changes were made
      if (issuesFixed > 0) {
        const finalContent = matter.stringify(fixedBody, fixedFrontmatter);
        
        if (!this.config.dryRun) {
          await fs.writeFile(filePath, finalContent, 'utf8');
        }
        
        this.stats.filesFixed++;
        this.stats.issuesFixed += issuesFixed;
        
        console.log(chalk.green(`✅ ${fileName}: ${issuesFixed} issues fixed`));
      } else {
        console.log(chalk.gray(`✨ ${fileName}: No issues found`));
      }

    } catch (error) {
      console.log(chalk.red(`❌ ${fileName}: Error - ${error.message}`));
    }
  }

  displayResults() {
    console.log(chalk.blue.bold('\n📊 Cleanup Results:'));
    console.log(chalk.gray('=' .repeat(30)));
    
    console.log(chalk.cyan(`Files processed: ${this.stats.filesProcessed}`));
    console.log(chalk.green(`Files fixed: ${this.stats.filesFixed}`));
    console.log(chalk.green(`Total issues fixed: ${this.stats.issuesFixed}`));
    
    if (this.stats.filesFixed > 0) {
      console.log(chalk.green('\n🎉 MDX cleanup complete!'));
      if (this.config.dryRun) {
        console.log(chalk.yellow('Run without --dry-run to apply changes'));
      }
    } else {
      console.log(chalk.yellow('\n✨ No issues found to fix'));
    }
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const config = {};

  // Parse command line arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    switch (arg) {
      case '--source':
        config.sourceDir = args[i + 1];
        i++;
        break;
      case '--dry-run':
        config.dryRun = true;
        break;
      case '--help':
        console.log(`
MDX Cleanup Script for Docusaurus

Usage:
  node cleanup-mdx.js [options]

Options:
  --source <dir>    Source directory with MDX files (default: ai-docs-poc/docs)
  --dry-run         Show what would be fixed without making changes
  --help            Show this help message

Examples:
  # Clean up all MDX files
  node cleanup-mdx.js

  # Dry run to see what would be fixed
  node cleanup-mdx.js --dry-run

  # Clean up files in custom directory
  node cleanup-mdx.js --source ./my-docs
        `);
        process.exit(0);
        break;
    }
  }

  const cleanup = new MDXCleanup(config);
  await cleanup.cleanup();
}

if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('❌ Cleanup failed:'), error.message);
    process.exit(1);
  });
}

module.exports = MDXCleanup;