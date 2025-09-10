#!/usr/bin/env node

/**
 * Content Validation Script
 * 
 * Validates MDX files for syntax, structure, and content quality
 */

const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');
const { glob } = require('glob');

class ContentValidator {
  constructor(config = {}) {
    this.config = {
      contentDir: config.contentDir || 'ai-docs-poc/docs',
      outputDir: config.outputDir || 'ai-docs-poc/validation-reports',
      rules: config.rules || 'all',
      severity: config.severity || 'warning', // error, warning, info
      ...config
    };
    
    this.stats = {
      filesValidated: 0,
      errors: [],
      warnings: [],
      info: [],
      startTime: Date.now()
    };
    
    this.validationRules = [
      { name: 'frontmatter_required', severity: 'error', validator: this.validateRequiredFrontmatter.bind(this) },
      { name: 'frontmatter_schema', severity: 'warning', validator: this.validateFrontmatterSchema.bind(this) },
      { name: 'content_structure', severity: 'warning', validator: this.validateContentStructure.bind(this) },
      { name: 'internal_links', severity: 'error', validator: this.validateInternalLinks.bind(this) },
      { name: 'external_links', severity: 'info', validator: this.validateExternalLinks.bind(this) },
      { name: 'image_references', severity: 'warning', validator: this.validateImageReferences.bind(this) },
      { name: 'mdx_syntax', severity: 'error', validator: this.validateMDXSyntax.bind(this) },
      { name: 'content_quality', severity: 'info', validator: this.validateContentQuality.bind(this) },
      { name: 'accessibility', severity: 'warning', validator: this.validateAccessibility.bind(this) }
    ];
  }

  /**
   * Main validation method
   */
  async validate() {
    console.log('🔍 Starting content validation...');
    console.log(`Content directory: ${this.config.contentDir}`);
    console.log(`Minimum severity: ${this.config.severity}`);
    
    try {
      // Find all MDX files
      const mdxFiles = await this.findMDXFiles();
      console.log(`📁 Found ${mdxFiles.length} MDX files`);
      
      // Validate each file
      for (const filePath of mdxFiles) {
        await this.validateFile(filePath);
      }
      
      // Generate report
      const report = this.generateReport();
      await this.saveReport(report);
      
      // Summary
      const totalIssues = this.stats.errors.length + this.stats.warnings.length + this.stats.info.length;
      console.log(`\n📊 Validation Summary:`);
      console.log(`  Files validated: ${this.stats.filesValidated}`);
      console.log(`  Errors: ${this.stats.errors.length}`);
      console.log(`  Warnings: ${this.stats.warnings.length}`);
      console.log(`  Info: ${this.stats.info.length}`);
      console.log(`  Total issues: ${totalIssues}`);
      
      if (this.stats.errors.length > 0) {
        console.log('\n❌ Validation failed with errors!');
        process.exit(1);
      } else if (this.stats.warnings.length > 0) {
        console.log('\n⚠️  Validation completed with warnings');
      } else {
        console.log('\n✅ All files passed validation!');
      }
      
      return report;
      
    } catch (error) {
      console.error('❌ Validation failed:', error.message);
      throw error;
    }
  }

  /**
   * Find all MDX files
   */
  async findMDXFiles() {
    const pattern = path.join(this.config.contentDir, '**/*.mdx');
    return await glob(pattern);
  }

  /**
   * Validate a single file
   */
  async validateFile(filePath) {
    this.stats.filesValidated++;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const parsed = matter(content);
      
      // Run all validation rules
      for (const rule of this.validationRules) {
        if (this.shouldRunRule(rule)) {
          try {
            const results = await rule.validator(filePath, parsed);
            if (results && results.length > 0) {
              this.addIssues(results, rule.severity, filePath);
            }
          } catch (error) {
            this.addIssue({
              rule: rule.name,
              message: `Validation rule failed: ${error.message}`,
              file: filePath,
              severity: 'error'
            });
          }
        }
      }
      
    } catch (error) {
      this.addIssue({
        rule: 'file_access',
        message: `Cannot read file: ${error.message}`,
        file: filePath,
        severity: 'error'
      });
    }
  }

  /**
   * Check if rule should run based on configuration
   */
  shouldRunRule(rule) {
    if (this.config.rules === 'all') return true;
    if (Array.isArray(this.config.rules)) {
      return this.config.rules.includes(rule.name);
    }
    return false;
  }

  /**
   * Add validation issues
   */
  addIssues(issues, severity, filePath) {
    issues.forEach(issue => {
      this.addIssue({
        ...issue,
        file: filePath,
        severity: severity
      });
    });
  }

  /**
   * Add single validation issue
   */
  addIssue(issue) {
    switch (issue.severity) {
      case 'error':
        this.stats.errors.push(issue);
        break;
      case 'warning':
        this.stats.warnings.push(issue);
        break;
      case 'info':
        this.stats.info.push(issue);
        break;
    }
  }

  /**
   * Validation Rules
   */
  
  async validateRequiredFrontmatter(filePath, parsed) {
    const issues = [];
    const required = ['title'];
    
    for (const field of required) {
      if (!parsed.data[field]) {
        issues.push({
          rule: 'frontmatter_required',
          message: `Missing required frontmatter field: ${field}`,
          line: 1,
          autoFixable: true
        });
      }
    }
    
    return issues;
  }

  async validateFrontmatterSchema(filePath, parsed) {
    const issues = [];
    const recommended = ['description', 'slug', 'sidebar_position'];
    
    for (const field of recommended) {
      if (!parsed.data[field]) {
        issues.push({
          rule: 'frontmatter_schema',
          message: `Missing recommended frontmatter field: ${field}`,
          line: 1,
          autoFixable: true
        });
      }
    }
    
    // Validate field types
    if (parsed.data.sidebar_position && typeof parsed.data.sidebar_position !== 'number') {
      issues.push({
        rule: 'frontmatter_schema',
        message: 'sidebar_position should be a number',
        line: 1,
        autoFixable: false
      });
    }
    
    return issues;
  }

  async validateContentStructure(filePath, parsed) {
    const issues = [];
    const content = parsed.content;
    
    // Check for proper heading structure
    const headings = content.match(/^#{1,6}\s+.+$/gm) || [];
    
    if (headings.length === 0) {
      issues.push({
        rule: 'content_structure',
        message: 'No headings found in content',
        autoFixable: false
      });
    }
    
    // Check for H1 usage (should be avoided in favor of frontmatter title)
    const h1Headings = headings.filter(h => h.startsWith('# '));
    if (h1Headings.length > 0) {
      issues.push({
        rule: 'content_structure',
        message: 'Avoid H1 headings, use frontmatter title instead',
        autoFixable: false
      });
    }
    
    // Check content length
    const wordCount = content.split(/\s+/).length;
    if (wordCount < 50) {
      issues.push({
        rule: 'content_structure',
        message: 'Content appears too short (less than 50 words)',
        autoFixable: false
      });
    }
    
    return issues;
  }

  async validateInternalLinks(filePath, parsed) {
    const issues = [];
    const content = parsed.content;
    const linkPattern = /\[([^\]]*)\]\(([^)]*\.mdx?)(#[^)]*)?\)/g;
    const links = [...content.matchAll(linkPattern)];
    
    for (const link of links) {
      const linkPath = link[2];
      const fullPath = path.resolve(path.dirname(filePath), linkPath);
      
      try {
        await fs.access(fullPath);
      } catch {
        issues.push({
          rule: 'internal_links',
          message: `Broken internal link: ${linkPath}`,
          autoFixable: false
        });
      }
    }
    
    return issues;
  }

  async validateExternalLinks(filePath, parsed) {
    const issues = [];
    const content = parsed.content;
    const linkPattern = /\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;
    const links = [...content.matchAll(linkPattern)];
    
    // Note: We're not actually checking if external links work (would be slow)
    // Just validating format and flagging for manual review
    for (const link of links) {
      const url = link[2];
      
      // Check for common issues
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        issues.push({
          rule: 'external_links',
          message: `External link points to localhost: ${url}`,
          autoFixable: false
        });
      }
      
      if (!url.startsWith('https://') && url.startsWith('http://')) {
        issues.push({
          rule: 'external_links',
          message: `Consider using HTTPS: ${url}`,
          autoFixable: true
        });
      }
    }
    
    return issues;
  }

  async validateImageReferences(filePath, parsed) {
    const issues = [];
    const content = parsed.content;
    const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const images = [...content.matchAll(imagePattern)];
    
    for (const image of images) {
      const imagePath = image[2];
      const altText = image[1];
      
      // Skip external URLs
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        continue;
      }
      
      // Check if image file exists
      const fullPath = path.resolve(path.dirname(filePath), imagePath);
      try {
        await fs.access(fullPath);
      } catch {
        issues.push({
          rule: 'image_references',
          message: `Missing image file: ${imagePath}`,
          autoFixable: false
        });
      }
      
      // Check for alt text
      if (!altText || altText.trim() === '') {
        issues.push({
          rule: 'image_references',
          message: `Image missing alt text: ${imagePath}`,
          autoFixable: false
        });
      }
    }
    
    return issues;
  }

  async validateMDXSyntax(filePath, parsed) {
    const issues = [];
    const content = parsed.content;
    
    // Check for unclosed JSX tags
    const jsxTagPattern = /<(\w+)(?:\s[^>]*)?(?:\s*\/>|>.*?<\/\1>)/gs;
    const openTagPattern = /<(\w+)(?:\s[^>]*)?>/g;
    const closeTagPattern = /<\/(\w+)>/g;
    
    const openTags = [...content.matchAll(openTagPattern)]
      .filter(match => !match[0].endsWith('/>'))
      .map(match => match[1]);
    
    const closeTags = [...content.matchAll(closeTagPattern)]
      .map(match => match[1]);
    
    // Simple tag matching (doesn't handle nesting properly, but catches basic issues)
    const openTagCounts = {};
    const closeTagCounts = {};
    
    openTags.forEach(tag => {
      openTagCounts[tag] = (openTagCounts[tag] || 0) + 1;
    });
    
    closeTags.forEach(tag => {
      closeTagCounts[tag] = (closeTagCounts[tag] || 0) + 1;
    });
    
    for (const tag in openTagCounts) {
      if (openTagCounts[tag] !== (closeTagCounts[tag] || 0)) {
        issues.push({
          rule: 'mdx_syntax',
          message: `Mismatched JSX tags for: ${tag}`,
          autoFixable: false
        });
      }
    }
    
    return issues;
  }

  async validateContentQuality(filePath, parsed) {
    const issues = [];
    const content = parsed.content;
    
    // Check for common quality issues
    if (content.includes('TODO') || content.includes('FIXME')) {
      issues.push({
        rule: 'content_quality',
        message: 'Content contains TODO or FIXME markers',
        autoFixable: false
      });
    }
    
    // Check for placeholder text
    const placeholders = ['Lorem ipsum', 'placeholder', 'TBD', 'Coming soon'];
    for (const placeholder of placeholders) {
      if (content.toLowerCase().includes(placeholder.toLowerCase())) {
        issues.push({
          rule: 'content_quality',
          message: `Content contains placeholder text: ${placeholder}`,
          autoFixable: false
        });
      }
    }
    
    return issues;
  }

  async validateAccessibility(filePath, parsed) {
    const issues = [];
    const content = parsed.content;
    
    // Check for images without alt text (already covered in image validation)
    // Check for proper heading hierarchy
    const headings = content.match(/^(#{1,6})\s+.+$/gm) || [];
    let previousLevel = 0;
    
    for (const heading of headings) {
      const level = heading.match(/^#+/)[0].length;
      
      if (level > previousLevel + 1) {
        issues.push({
          rule: 'accessibility',
          message: `Heading hierarchy skip detected (H${previousLevel} to H${level})`,
          autoFixable: false
        });
      }
      
      previousLevel = level;
    }
    
    return issues;
  }

  /**
   * Generate validation report
   */
  generateReport() {
    const duration = Date.now() - this.stats.startTime;
    
    return {
      summary: {
        filesValidated: this.stats.filesValidated,
        totalIssues: this.stats.errors.length + this.stats.warnings.length + this.stats.info.length,
        errors: this.stats.errors.length,
        warnings: this.stats.warnings.length,
        info: this.stats.info.length,
        duration: `${(duration / 1000).toFixed(2)}s`
      },
      issues: {
        errors: this.stats.errors,
        warnings: this.stats.warnings,
        info: this.stats.info
      },
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Save validation report
   */
  async saveReport(report) {
    await this.ensureDirectory(this.config.outputDir);
    
    const reportPath = path.join(this.config.outputDir, 'validation-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2), 'utf8');
    console.log(`📋 Validation report saved to: ${reportPath}`);
  }

  /**
   * Ensure directory exists
   */
  async ensureDirectory(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
      if (error.code !== 'EEXIST') {
        throw error;
      }
    }
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const config = {};
  
  // Parse command line arguments
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    const value = args[i + 1];
    
    switch (key) {
      case 'content-dir':
        config.contentDir = value;
        break;
      case 'output-dir':
        config.outputDir = value;
        break;
      case 'rules':
        config.rules = value.split(',');
        break;
      case 'severity':
        config.severity = value;
        break;
      case 'help':
        console.log(`
Content Validation Script

Usage:
  node validate-content.js [options]

Options:
  --content-dir <dir>   Directory containing MDX files (default: ai-docs-poc/docs)
  --output-dir <dir>    Output directory for reports (default: ai-docs-poc/validation-reports)
  --rules <rules>       Comma-separated list of rules to run (default: all)
  --severity <level>    Minimum severity level (error, warning, info) (default: warning)
  --help                Show this help message

Available Rules:
  - frontmatter_required
  - frontmatter_schema
  - content_structure
  - internal_links
  - external_links
  - image_references
  - mdx_syntax
  - content_quality
  - accessibility

Examples:
  # Validate all files with default settings
  node validate-content.js

  # Validate specific directory
  node validate-content.js --content-dir ./docs

  # Run only specific rules
  node validate-content.js --rules frontmatter_required,internal_links

  # Show only errors
  node validate-content.js --severity error
        `);
        process.exit(0);
        break;
    }
  }
  
  const validator = new ContentValidator(config);
  validator.validate().catch(error => {
    console.error('❌ Validation failed:', error.message);
    process.exit(1);
  });
}

module.exports = ContentValidator;