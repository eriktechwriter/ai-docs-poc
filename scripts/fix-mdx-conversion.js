#!/usr/bin/env node

/**
 * Fix MDX Conversion Issues
 * 
 * This script fixes common issues from MD to MDX conversion:
 * - Missing H1 titles
 * - Broken ::: callout syntax
 * - Malformed frontmatter
 * - Content artifacts
 */

const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');
const { glob } = require('glob');
const chalk = require('chalk');

class MDXFixer {
  constructor(config = {}) {
    this.config = {
      sourceDir: config.sourceDir || 'ai-docs-poc/docs/converted',
      outputDir: config.outputDir || 'ai-docs-poc/docs/fixed',
      dryRun: config.dryRun || false,
      createBackup: config.createBackup !== false,
      ...config
    };
    
    this.stats = {
      filesProcessed: 0,
      filesFixed: 0,
      issuesFound: 0,
      issuesFixed: 0,
      errors: []
    };
    
    this.fixes = [
      { name: 'Missing H1 titles', fix: this.fixMissingH1.bind(this) },
      { name: 'Broken callout syntax', fix: this.fixCalloutSyntax.bind(this) },
      { name: 'Malformed frontmatter', fix: this.fixFrontmatter.bind(this) },
      { name: 'Content artifacts', fix: this.fixContentArtifacts.bind(this) },
      { name: 'Link formatting', fix: this.fixLinkFormatting.bind(this) },
      { name: 'Code block formatting', fix: this.fixCodeBlocks.bind(this) }
    ];
  }

  async fix() {
    console.log(chalk.blue.bold('🔧 MDX Conversion Fixer'));
    console.log(chalk.gray(`Source: ${this.config.sourceDir}`));
    console.log(chalk.gray(`Output: ${this.config.outputDir}`));
    console.log(chalk.gray(`Dry run: ${this.config.dryRun}\\n`));

    try {
      // Find all MDX files
      const mdxFiles = await this.findMDXFiles();
      console.log(chalk.cyan(`📁 Found ${mdxFiles.length} MDX files to check\\n`));

      if (mdxFiles.length === 0) {
        console.log(chalk.yellow('No MDX files found. Make sure the source directory is correct.'));
        return;
      }

      // Create output directory
      if (!this.config.dryRun) {
        await this.ensureDirectory(this.config.outputDir);
      }

      // Process each file
      for (let i = 0; i < mdxFiles.length; i++) {
        const filePath = mdxFiles[i];
        const progress = `(${i + 1}/${mdxFiles.length})`;
        
        console.log(chalk.blue(`${progress} Processing: ${path.basename(filePath)}`));
        await this.processFile(filePath);
        
        if ((i + 1) % 10 === 0 || i === mdxFiles.length - 1) {
          const percentage = Math.round(((i + 1) / mdxFiles.length) * 100);
          console.log(chalk.gray(`   Progress: ${percentage}%\\n`));
        }
      }

      // Display results
      this.displayResults();

    } catch (error) {
      console.error(chalk.red('❌ Fix operation failed:'), error.message);
      throw error;
    }
  }

  async findMDXFiles() {
    const pattern = path.join(this.config.sourceDir, '**/*.mdx');
    return await glob(pattern);
  }

  async processFile(filePath) {
    this.stats.filesProcessed++;
    
    try {
      // Read the file
      const content = await fs.readFile(filePath, 'utf8');
      
      // Parse frontmatter and content
      let parsed;
      try {
        parsed = matter(content);
      } catch (error) {
        console.log(chalk.red(`   ❌ Failed to parse frontmatter: ${error.message}`));
        this.stats.errors.push({
          file: filePath,
          error: `Frontmatter parsing failed: ${error.message}`
        });
        return;
      }

      let fixedContent = parsed.content;
      let fixedFrontmatter = { ...parsed.data };
      let fileIssuesFound = 0;
      let fileIssuesFixed = 0;

      // Apply all fixes
      for (const fixRule of this.fixes) {
        const result = await fixRule.fix(fixedContent, fixedFrontmatter, filePath);
        
        if (result.issuesFound > 0) {
          console.log(chalk.yellow(`   ⚠️  ${fixRule.name}: ${result.issuesFound} issues found`));
          fileIssuesFound += result.issuesFound;
        }
        
        if (result.issuesFixed > 0) {
          console.log(chalk.green(`   ✅ ${fixRule.name}: ${result.issuesFixed} issues fixed`));
          fileIssuesFixed += result.issuesFixed;
          fixedContent = result.content || fixedContent;
          fixedFrontmatter = result.frontmatter || fixedFrontmatter;
        }
      }

      // Save fixed file if changes were made
      if (fileIssuesFixed > 0) {
        const outputPath = this.generateOutputPath(filePath);
        const finalContent = matter.stringify(fixedContent, fixedFrontmatter);
        
        if (!this.config.dryRun) {
          await this.ensureDirectory(path.dirname(outputPath));
          await fs.writeFile(outputPath, finalContent, 'utf8');
        }
        
        this.stats.filesFixed++;
        console.log(chalk.green(`   💾 Fixed file saved${this.config.dryRun ? ' (dry run)' : ''}`));
      } else if (fileIssuesFound === 0) {
        console.log(chalk.gray(`   ✨ No issues found`));
      }

      this.stats.issuesFound += fileIssuesFound;
      this.stats.issuesFixed += fileIssuesFixed;

    } catch (error) {
      console.log(chalk.red(`   ❌ Error processing file: ${error.message}`));
      this.stats.errors.push({
        file: filePath,
        error: error.message
      });
    }
  }

  // Fix missing H1 titles
  async fixMissingH1(content, frontmatter, filePath) {
    let issuesFound = 0;
    let issuesFixed = 0;
    let fixedContent = content;

    // Check if there's already an H1
    const h1Match = content.match(/^#\\s+(.+)$/m);
    
    if (!h1Match) {
      issuesFound++;
      
      // Try to generate H1 from frontmatter title
      if (frontmatter.title) {
        fixedContent = `# ${frontmatter.title}\\n\\n${content}`;
        issuesFixed++;
      } else {
        // Generate from filename
        const filename = path.basename(filePath, '.mdx');
        const title = this.generateTitleFromFilename(filename);
        fixedContent = `# ${title}\\n\\n${content}`;
        
        // Also add to frontmatter
        frontmatter.title = title;
        issuesFixed++;
      }
    }

    return {
      issuesFound,
      issuesFixed,
      content: fixedContent,
      frontmatter
    };
  }

  // Fix broken callout syntax
  async fixCalloutSyntax(content, frontmatter, filePath) {
    let issuesFound = 0;
    let issuesFixed = 0;
    let fixedContent = content;

    // Find broken ::: callouts
    const calloutPattern = /:::(\\w+)\\s*([\\s\\S]*?):::/g;
    const matches = [...content.matchAll(calloutPattern)];

    if (matches.length > 0) {
      issuesFound = matches.length;

      // Replace with standard markdown blockquotes
      fixedContent = content.replace(calloutPattern, (match, type, content) => {
        const cleanContent = content.trim();
        const icon = this.getCalloutIcon(type);
        const label = this.getCalloutLabel(type);
        
        return `> **${icon} ${label}**  \\n> ${cleanContent.replace(/\\n/g, '\\n> ')}`;
      });

      issuesFixed = matches.length;
    }

    return {
      issuesFound,
      issuesFixed,
      content: fixedContent
    };
  }

  // Fix malformed frontmatter
  async fixFrontmatter(content, frontmatter, filePath) {
    let issuesFound = 0;
    let issuesFixed = 0;
    let fixedFrontmatter = { ...frontmatter };

    // Check for required fields
    if (!frontmatter.title) {
      issuesFound++;
      const filename = path.basename(filePath, '.mdx');
      fixedFrontmatter.title = this.generateTitleFromFilename(filename);
      issuesFixed++;
    }

    // Add description if missing
    if (!frontmatter.description) {
      issuesFound++;
      fixedFrontmatter.description = `Documentation for ${fixedFrontmatter.title || 'this feature'}`;
      issuesFixed++;
    }

    // Ensure sidebar_position is a number
    if (frontmatter.sidebar_position && typeof frontmatter.sidebar_position === 'string') {
      issuesFound++;
      const num = parseInt(frontmatter.sidebar_position, 10);
      if (!isNaN(num)) {
        fixedFrontmatter.sidebar_position = num;
        issuesFixed++;
      }
    }

    // Clean up invalid fields
    const invalidFields = ['last_updated', 'ai_context', 'conversion_status'];
    for (const field of invalidFields) {
      if (frontmatter[field]) {
        issuesFound++;
        delete fixedFrontmatter[field];
        issuesFixed++;
      }
    }

    return {
      issuesFound,
      issuesFixed,
      frontmatter: fixedFrontmatter
    };
  }

  // Fix content artifacts
  async fixContentArtifacts(content, frontmatter, filePath) {
    let issuesFound = 0;
    let issuesFixed = 0;
    let fixedContent = content;

    // Remove conversion artifacts
    const artifacts = [
      /<!--\\s*START\\s+doctoc\\s*-->[\\s\\S]*?<!--\\s*END\\s+doctoc\\s*-->/gi,
      /\\{\\{[^}]+\\}\\}/g, // Template variables
      /\\[\\[TOC\\]\\]/gi,  // TOC markers
      /^\\s*---\\s*$/gm,    // Stray horizontal rules
    ];

    for (const artifactPattern of artifacts) {
      const matches = content.match(artifactPattern);
      if (matches) {
        issuesFound += matches.length;
        fixedContent = fixedContent.replace(artifactPattern, '');
        issuesFixed += matches.length;
      }
    }

    // Clean up excessive whitespace
    const originalLength = fixedContent.length;
    fixedContent = fixedContent
      .replace(/\\n{4,}/g, '\\n\\n\\n')  // Max 3 consecutive newlines
      .replace(/[ \\t]+$/gm, '')        // Trailing whitespace
      .trim();                         // Leading/trailing whitespace

    if (fixedContent.length !== originalLength) {
      issuesFound++;
      issuesFixed++;
    }

    return {
      issuesFound,
      issuesFixed,
      content: fixedContent
    };
  }

  // Fix link formatting
  async fixLinkFormatting(content, frontmatter, filePath) {
    let issuesFound = 0;
    let issuesFixed = 0;
    let fixedContent = content;

    // Fix broken markdown links
    const brokenLinkPattern = /\\]\\(([^)]*)\\.md\\)/g;
    const matches = [...content.matchAll(brokenLinkPattern)];

    if (matches.length > 0) {
      issuesFound = matches.length;
      fixedContent = content.replace(brokenLinkPattern, '](\\$1.mdx)');
      issuesFixed = matches.length;
    }

    // Fix empty link text
    const emptyLinkPattern = /\\[\\s*\\]\\(([^)]+)\\)/g;
    const emptyMatches = [...fixedContent.matchAll(emptyLinkPattern)];

    if (emptyMatches.length > 0) {
      issuesFound += emptyMatches.length;
      fixedContent = fixedContent.replace(emptyLinkPattern, (match, url) => {
        const linkText = path.basename(url, path.extname(url));
        return `[${this.generateTitleFromFilename(linkText)}](${url})`;
      });
      issuesFixed += emptyMatches.length;
    }

    return {
      issuesFound,
      issuesFixed,
      content: fixedContent
    };
  }

  // Fix code block formatting
  async fixCodeBlocks(content, frontmatter, filePath) {
    let issuesFound = 0;
    let issuesFixed = 0;
    let fixedContent = content;

    // Fix code blocks without language specification
    const codeBlockPattern = /```\\n([\\s\\S]*?)```/g;
    const matches = [...content.matchAll(codeBlockPattern)];

    for (const match of matches) {
      const codeContent = match[1].trim();
      
      // Try to detect language
      let language = '';
      if (codeContent.includes('npm ') || codeContent.includes('node ')) {
        language = 'bash';
      } else if (codeContent.includes('const ') || codeContent.includes('function ')) {
        language = 'javascript';
      } else if (codeContent.includes('import ') || codeContent.includes('export ')) {
        language = 'javascript';
      } else if (codeContent.includes('<') && codeContent.includes('>')) {
        language = 'html';
      }

      if (language) {
        issuesFound++;
        fixedContent = fixedContent.replace(match[0], `\`\`\`${language}\\n${codeContent}\\n\`\`\``);
        issuesFixed++;
      }
    }

    return {
      issuesFound,
      issuesFixed,
      content: fixedContent
    };
  }

  // Helper methods
  generateTitleFromFilename(filename) {
    return filename
      .replace(/[-_]/g, ' ')
      .replace(/\\b\\w/g, l => l.toUpperCase())
      .trim();
  }

  getCalloutIcon(type) {
    const icons = {
      tip: '💡',
      warning: '⚠️',
      danger: '🚨',
      info: 'ℹ️',
      note: '📝',
      caution: '⚠️'
    };
    return icons[type.toLowerCase()] || '📝';
  }

  getCalloutLabel(type) {
    const labels = {
      tip: 'Pro Tip',
      warning: 'Warning',
      danger: 'Danger',
      info: 'Information',
      note: 'Note',
      caution: 'Caution'
    };
    return labels[type.toLowerCase()] || 'Note';
  }

  generateOutputPath(inputPath) {
    const relativePath = path.relative(this.config.sourceDir, inputPath);
    return path.join(this.config.outputDir, relativePath);
  }

  async ensureDirectory(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        throw error;
      }
    }
  }

  displayResults() {
    console.log(chalk.blue.bold('\\n📊 Fix Results Summary:'));
    console.log(chalk.gray('=' .repeat(40)));
    
    console.log(chalk.cyan(`Files processed: ${this.stats.filesProcessed}`));
    console.log(chalk.green(`Files fixed: ${this.stats.filesFixed}`));
    console.log(chalk.yellow(`Issues found: ${this.stats.issuesFound}`));
    console.log(chalk.green(`Issues fixed: ${this.stats.issuesFixed}`));
    
    if (this.stats.errors.length > 0) {
      console.log(chalk.red(`Errors: ${this.stats.errors.length}`));
      console.log(chalk.red('\\n❌ Errors encountered:'));
      this.stats.errors.forEach((error, index) => {
        console.log(chalk.red(`  ${index + 1}. ${path.basename(error.file)}: ${error.error}`));
      });
    }

    if (this.stats.issuesFixed > 0) {
      console.log(chalk.green('\\n✅ Conversion issues have been fixed!'));
      console.log(chalk.gray(`Fixed files are in: ${this.config.outputDir}`));
    } else {
      console.log(chalk.yellow('\\n⚠️  No issues found to fix.'));
    }
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const config = {};

  // Parse command line arguments
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i]?.replace(/^--/, '');
    const value = args[i + 1];

    switch (key) {
      case 'source':
        config.sourceDir = value;
        break;
      case 'output':
        config.outputDir = value;
        break;
      case 'dry-run':
        config.dryRun = true;
        i--; // No value for this flag
        break;
      case 'help':
        console.log(`
MDX Conversion Fixer

Usage:
  node fix-mdx-conversion.js [options]

Options:
  --source <dir>    Source directory with MDX files to fix (default: ai-docs-poc/docs/converted)
  --output <dir>    Output directory for fixed files (default: ai-docs-poc/docs/fixed)
  --dry-run         Show what would be fixed without making changes
  --help            Show this help message

Examples:
  # Fix converted MDX files
  node fix-mdx-conversion.js

  # Dry run to see what would be fixed
  node fix-mdx-conversion.js --dry-run

  # Fix files in custom directory
  node fix-mdx-conversion.js --source ./my-docs --output ./fixed-docs
        `);
        process.exit(0);
        break;
    }
  }

  const fixer = new MDXFixer(config);
  await fixer.fix();
}

if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('❌ Fix operation failed:'), error.message);
    process.exit(1);
  });
}

module.exports = MDXFixer;