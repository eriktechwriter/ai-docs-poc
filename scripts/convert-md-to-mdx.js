#!/usr/bin/env node

/**
 * MD to MDX Conversion Script
 * 
 * This script converts Markdown (.md) files to MDX (.mdx) format with enhanced metadata
 * and validates asset paths and internal links.
 */

const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');
const { glob } = require('glob');

class MDXConverter {
  constructor(config = {}) {
    this.config = {
      sourceDir: config.sourceDir || 'source/trend-vision-one-md/docs',
      outputDir: config.outputDir || 'ai-docs-poc/docs/converted',
      preserveOriginal: config.preserveOriginal !== false,
      enhanceMetadata: config.enhanceMetadata !== false,
      validateAssets: config.validateAssets !== false,
      dryRun: config.dryRun || false,
      enableRollback: config.enableRollback !== false,
      backupDir: config.backupDir || 'ai-docs-poc/backups',
      ...config
    };
    
    this.stats = {
      filesProcessed: 0,
      filesConverted: 0,
      filesSkipped: 0,
      errors: [],
      warnings: [],
      validationResults: [],
      startTime: Date.now(),
      processedFiles: new Map(),
      backupCreated: false
    };
    
    this.validationRules = [
      { name: 'frontmatter_syntax', validator: this.validateFrontmatterSyntax.bind(this) },
      { name: 'mdx_syntax', validator: this.validateMDXSyntax.bind(this) },
      { name: 'internal_links', validator: this.validateInternalLinks.bind(this) },
      { name: 'asset_references', validator: this.validateAssetReferences.bind(this) },
      { name: 'metadata_completeness', validator: this.validateMetadataCompleteness.bind(this) }
    ];
  }

  /**
   * Main conversion method
   */
  async convert() {
    console.log('🚀 Starting MD to MDX conversion...');
    console.log(`Source: ${this.config.sourceDir}`);
    console.log(`Output: ${this.config.outputDir}`);
    console.log(`Dry run: ${this.config.dryRun}`);
    
    try {
      // Create backup if rollback is enabled
      if (this.config.enableRollback && !this.config.dryRun) {
        await this.createBackup();
      }
      
      // Find all .md files
      const mdFiles = await this.findMarkdownFiles();
      console.log(`📁 Found ${mdFiles.length} Markdown files`);
      
      // Create output directory
      if (!this.config.dryRun) {
        await this.ensureDirectory(this.config.outputDir);
      }
      
      // Process each file with progress tracking
      console.log('📝 Processing files...');
      for (let i = 0; i < mdFiles.length; i++) {
        const filePath = mdFiles[i];
        const progress = `(${i + 1}/${mdFiles.length})`;
        console.log(`${progress} Processing: ${path.relative(process.cwd(), filePath)}`);
        
        await this.processFile(filePath);
        
        // Show progress every 10 files or at the end
        if ((i + 1) % 10 === 0 || i === mdFiles.length - 1) {
          const percentage = Math.round(((i + 1) / mdFiles.length) * 100);
          console.log(`📊 Progress: ${percentage}% (${i + 1}/${mdFiles.length} files)`);
        }
      }
      
      // Run validation on converted files
      if (!this.config.dryRun) {
        console.log('🔍 Running validation...');
        await this.runValidation();
      }
      
      // Generate report
      const report = this.generateReport();
      await this.saveReport(report);
      
      // Check if conversion was successful
      const hasErrors = this.stats.errors.length > 0;
      const hasCriticalWarnings = this.stats.warnings.some(w => w.severity === 'critical');
      
      if (hasErrors || hasCriticalWarnings) {
        console.log('⚠️  Conversion completed with issues!');
        if (hasErrors) {
          console.log(`❌ Errors: ${this.stats.errors.length}`);
        }
        if (hasCriticalWarnings) {
          console.log(`🚨 Critical warnings: ${this.stats.warnings.filter(w => w.severity === 'critical').length}`);
        }
        
        if (this.config.enableRollback && !this.config.dryRun) {
          console.log('💡 Use --rollback to revert changes if needed');
        }
      } else {
        console.log('✅ Conversion completed successfully!');
      }
      
      console.log(`📊 Summary: ${this.stats.filesProcessed} processed, ${this.stats.filesConverted} converted, ${this.stats.filesSkipped} skipped`);
      
      return report;
      
    } catch (error) {
      console.error('❌ Conversion failed:', error.message);
      
      // Attempt rollback if enabled
      if (this.config.enableRollback && !this.config.dryRun && this.stats.backupCreated) {
        console.log('🔄 Attempting automatic rollback...');
        try {
          await this.rollback();
          console.log('✅ Rollback completed successfully');
        } catch (rollbackError) {
          console.error('❌ Rollback failed:', rollbackError.message);
        }
      }
      
      throw error;
    }
  }

  /**
   * Find all Markdown files in the source directory
   */
  async findMarkdownFiles() {
    const pattern = path.join(this.config.sourceDir, '**/*.md');
    return await glob(pattern);
  }

  /**
   * Process a single Markdown file
   */
  async processFile(filePath) {
    this.stats.filesProcessed++;
    
    try {
      console.log(`📝 Processing: ${path.relative(process.cwd(), filePath)}`);
      
      // Read the file
      const content = await fs.readFile(filePath, 'utf8');
      
      // Parse frontmatter and content
      const parsed = matter(content);
      
      // Enhance metadata
      const enhancedFrontmatter = this.enhanceMetadata(parsed.data, filePath);
      
      // Process content
      const processedContent = await this.processContent(parsed.content, filePath);
      
      // Generate output path
      const outputPath = this.generateOutputPath(filePath);
      
      // Create MDX content
      const mdxContent = matter.stringify(processedContent, enhancedFrontmatter);
      
      if (!this.config.dryRun) {
        // Ensure output directory exists
        await this.ensureDirectory(path.dirname(outputPath));
        
        // Write the converted file
        await fs.writeFile(outputPath, mdxContent, 'utf8');
      }
      
      this.stats.filesConverted++;
      
    } catch (error) {
      this.stats.errors.push({
        type: 'PROCESSING_ERROR',
        file: filePath,
        message: error.message,
        autoFixable: false
      });
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  /**
   * Enhance frontmatter with AI-optimized metadata
   */
  enhanceMetadata(originalData, filePath) {
    if (!this.config.enhanceMetadata) {
      return originalData;
    }

    const fileName = path.basename(filePath, '.md');
    const relativePath = path.relative(this.config.sourceDir, filePath);
    
    // Generate enhanced metadata
    const enhanced = {
      ...originalData,
      // Preserve existing title or generate from filename
      title: originalData.title || this.generateTitleFromFilename(fileName),
      // Add slug if not present
      slug: originalData.slug || this.generateSlug(fileName),
      // Add last updated timestamp
      last_updated: new Date().toISOString().split('T')[0],
      // Add AI context metadata
      ai_context: {
        source_file: relativePath,
        conversion_date: new Date().toISOString(),
        ...originalData.ai_context
      },
      // Mark as conversion ready
      conversion_status: 'converted',
      // Add translation readiness flag
      translation_ready: originalData.translation_ready !== false
    };

    // Add estimated reading time if content is available
    if (originalData.content) {
      enhanced.estimated_reading_time = this.estimateReadingTime(originalData.content);
    }

    return enhanced;
  }

  /**
   * Process content to update links and validate assets
   */
  async processContent(content, filePath) {
    let processedContent = content;
    
    // Update internal links from .md to .mdx
    processedContent = this.updateInternalLinks(processedContent, filePath);
    
    // Validate and correct asset paths
    if (this.config.validateAssets) {
      processedContent = await this.validateAssetPaths(processedContent, filePath);
    }
    
    return processedContent;
  }

  /**
   * Update internal links from .md to .mdx extensions
   */
  updateInternalLinks(content, filePath) {
    // Pattern to match markdown links: [text](path.md) or [text](path.md#anchor)
    const linkPattern = /\[([^\]]*)\]\(([^)]*\.md)(#[^)]*)?\)/g;
    
    return content.replace(linkPattern, (match, text, linkPath, anchor) => {
      // Convert .md to .mdx
      const mdxPath = linkPath.replace(/\.md$/, '.mdx');
      const newLink = `[${text}](${mdxPath}${anchor || ''})`;
      
      // Log the change
      console.log(`  🔗 Updated link: ${linkPath} → ${mdxPath}`);
      
      return newLink;
    });
  }

  /**
   * Validate and correct asset paths
   */
  async validateAssetPaths(content, filePath) {
    // Pattern to match image references: ![alt](path) or <img src="path">
    const imagePatterns = [
      /!\[([^\]]*)\]\(([^)]+)\)/g,  // Markdown images
      /<img[^>]+src=["']([^"']+)["'][^>]*>/g  // HTML images
    ];
    
    let processedContent = content;
    const fileDir = path.dirname(filePath);
    
    for (const pattern of imagePatterns) {
      processedContent = processedContent.replace(pattern, (match, ...groups) => {
        // Extract the image path (different position based on pattern)
        const imagePath = groups.length === 2 ? groups[1] : groups[0];
        
        // Skip external URLs
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
          return match;
        }
        
        // Validate the asset path
        const fullAssetPath = path.resolve(fileDir, imagePath);
        
        // Check if file exists (in dry run, we'll just warn)
        if (this.config.dryRun || !this.fileExists(fullAssetPath)) {
          this.stats.warnings.push({
            type: 'MISSING_ASSET',
            file: filePath,
            asset: imagePath,
            message: `Asset not found: ${imagePath}`,
            autoFixable: false
          });
        }
        
        return match; // Return unchanged for now
      });
    }
    
    return processedContent;
  }

  /**
   * Generate output path for converted file
   */
  generateOutputPath(inputPath) {
    const relativePath = path.relative(this.config.sourceDir, inputPath);
    const outputPath = path.join(this.config.outputDir, relativePath);
    return outputPath.replace(/\.md$/, '.mdx');
  }

  /**
   * Generate title from filename
   */
  generateTitleFromFilename(filename) {
    return filename
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
      .trim();
  }

  /**
   * Generate URL-friendly slug
   */
  generateSlug(filename) {
    return filename
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /**
   * Estimate reading time based on word count
   */
  estimateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  }

  /**
   * Check if file exists
   */
  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
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

  /**
   * Generate conversion report
   */
  generateReport() {
    const duration = Date.now() - this.stats.startTime;
    
    return {
      summary: {
        filesProcessed: this.stats.filesProcessed,
        filesConverted: this.stats.filesConverted,
        errors: this.stats.errors.length,
        warnings: this.stats.warnings.length,
        duration: `${(duration / 1000).toFixed(2)}s`
      },
      errors: this.stats.errors,
      warnings: this.stats.warnings,
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Save conversion report
   */
  async saveReport(report) {
    const reportPath = path.join(this.config.outputDir, 'conversion-report.json');
    const htmlReportPath = path.join(this.config.outputDir, 'conversion-report.html');
    
    if (!this.config.dryRun) {
      // Save JSON report
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2), 'utf8');
      console.log(`📋 Report saved to: ${reportPath}`);
      
      // Generate HTML report for better readability
      const htmlReport = this.generateHTMLReport(report);
      await fs.writeFile(htmlReportPath, htmlReport, 'utf8');
      console.log(`📋 HTML report saved to: ${htmlReportPath}`);
    } else {
      console.log('📋 Conversion Report (Dry Run):');
      console.log(JSON.stringify(report.summary, null, 2));
      
      if (report.errors.length > 0) {
        console.log('\n❌ Errors:');
        report.errors.forEach((error, index) => {
          console.log(`  ${index + 1}. ${error.file}: ${error.message}`);
        });
      }
      
      if (report.warnings.length > 0) {
        console.log('\n⚠️  Warnings:');
        report.warnings.forEach((warning, index) => {
          console.log(`  ${index + 1}. ${warning.file}: ${warning.message}`);
        });
      }
    }
  }

  /**
   * Generate HTML report for better readability
   */
  generateHTMLReport(report) {
    const { summary, errors, warnings, validationResults } = report;
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MD to MDX Conversion Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 40px; }
        .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e9ecef; text-align: center; }
        .stat-value { font-size: 2em; font-weight: bold; color: #495057; }
        .stat-label { color: #6c757d; margin-top: 5px; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #495057; border-bottom: 2px solid #e9ecef; padding-bottom: 10px; }
        .error { background: #f8d7da; border: 1px solid #f5c6cb; padding: 10px; border-radius: 4px; margin-bottom: 10px; }
        .warning { background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 4px; margin-bottom: 10px; }
        .success { color: #28a745; }
        .error-text { color: #721c24; }
        .warning-text { color: #856404; }
        .file-path { font-family: monospace; background: #f8f9fa; padding: 2px 6px; border-radius: 3px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>MD to MDX Conversion Report</h1>
        <p>Generated on ${new Date(report.timestamp).toLocaleString()}</p>
        <p>Duration: ${summary.duration}</p>
    </div>

    <div class="summary">
        <div class="stat">
            <div class="stat-value ${summary.filesProcessed > 0 ? 'success' : ''}">${summary.filesProcessed}</div>
            <div class="stat-label">Files Processed</div>
        </div>
        <div class="stat">
            <div class="stat-value ${summary.filesConverted > 0 ? 'success' : ''}">${summary.filesConverted}</div>
            <div class="stat-label">Files Converted</div>
        </div>
        <div class="stat">
            <div class="stat-value ${summary.errors === 0 ? 'success' : 'error-text'}">${summary.errors}</div>
            <div class="stat-label">Errors</div>
        </div>
        <div class="stat">
            <div class="stat-value ${summary.warnings === 0 ? 'success' : 'warning-text'}">${summary.warnings}</div>
            <div class="stat-label">Warnings</div>
        </div>
    </div>

    ${errors.length > 0 ? `
    <div class="section">
        <h2>❌ Errors (${errors.length})</h2>
        ${errors.map(error => `
            <div class="error">
                <strong>File:</strong> <span class="file-path">${error.file}</span><br>
                <strong>Type:</strong> ${error.type}<br>
                <strong>Message:</strong> <span class="error-text">${error.message}</span>
                ${error.line ? `<br><strong>Line:</strong> ${error.line}` : ''}
                ${error.suggestion ? `<br><strong>Suggestion:</strong> ${error.suggestion}` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${warnings.length > 0 ? `
    <div class="section">
        <h2>⚠️ Warnings (${warnings.length})</h2>
        ${warnings.map(warning => `
            <div class="warning">
                <strong>File:</strong> <span class="file-path">${warning.file}</span><br>
                <strong>Type:</strong> ${warning.type}<br>
                <strong>Message:</strong> <span class="warning-text">${warning.message}</span>
                ${warning.severity ? `<br><strong>Severity:</strong> ${warning.severity}` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${validationResults.length > 0 ? `
    <div class="section">
        <h2>🔍 Validation Results</h2>
        ${validationResults.map(result => `
            <div class="${result.status === 'pass' ? 'success' : result.status === 'fail' ? 'error' : 'warning'}">
                <strong>${result.rule}:</strong> ${result.status.toUpperCase()}
                ${result.details ? `<br>${result.details}` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}

</body>
</html>`;
  }

  /**
   * Create backup of existing files
   */
  async createBackup() {
    if (await this.fileExists(this.config.outputDir)) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(this.config.backupDir, `backup-${timestamp}`);
      
      console.log(`💾 Creating backup at: ${backupPath}`);
      
      await this.ensureDirectory(this.config.backupDir);
      await this.copyDirectory(this.config.outputDir, backupPath);
      
      this.stats.backupCreated = true;
      this.stats.backupPath = backupPath;
      
      console.log('✅ Backup created successfully');
    }
  }

  /**
   * Rollback to previous state
   */
  async rollback() {
    if (!this.stats.backupCreated || !this.stats.backupPath) {
      throw new Error('No backup available for rollback');
    }
    
    console.log(`🔄 Rolling back from: ${this.stats.backupPath}`);
    
    // Remove current output directory
    if (await this.fileExists(this.config.outputDir)) {
      await this.removeDirectory(this.config.outputDir);
    }
    
    // Restore from backup
    await this.copyDirectory(this.stats.backupPath, this.config.outputDir);
    
    console.log('✅ Rollback completed');
  }

  /**
   * Run validation on converted files
   */
  async runValidation() {
    console.log('🔍 Running post-conversion validation...');
    
    const mdxFiles = await glob(path.join(this.config.outputDir, '**/*.mdx'));
    
    if (!mdxFiles || mdxFiles.length === 0) {
      console.log('⚠️  No MDX files found for validation');
      return;
    }
    
    console.log(`📁 Found ${mdxFiles.length} MDX files for validation`);
    
    for (const rule of this.validationRules) {
      console.log(`  Validating: ${rule.name}`);
      
      for (const filePath of mdxFiles) {
        try {
          const result = await rule.validator(filePath);
          if (result) {
            this.stats.validationResults.push({
              rule: rule.name,
              file: filePath,
              ...result
            });
          }
        } catch (error) {
          this.stats.errors.push({
            type: 'VALIDATION_ERROR',
            file: filePath,
            rule: rule.name,
            message: error.message,
            autoFixable: false
          });
        }
      }
    }
  }

  /**
   * Validation rules
   */
  async validateFrontmatterSyntax(filePath) {
    const content = await fs.readFile(filePath, 'utf8');
    
    try {
      matter(content);
      return { status: 'pass', details: 'Frontmatter syntax is valid' };
    } catch (error) {
      return { 
        status: 'fail', 
        details: `Invalid frontmatter syntax: ${error.message}`,
        autoFixable: false
      };
    }
  }

  async validateMDXSyntax(filePath) {
    const content = await fs.readFile(filePath, 'utf8');
    const parsed = matter(content);
    
    // Basic MDX syntax validation
    const mdxContent = parsed.content;
    
    // Check for unclosed JSX tags
    const jsxTagPattern = /<(\w+)(?:\s[^>]*)?(?:\s*\/>|>.*?<\/\1>)/gs;
    const openTagPattern = /<(\w+)(?:\s[^>]*)?>/g;
    const closeTagPattern = /<\/(\w+)>/g;
    
    const openTags = [...mdxContent.matchAll(openTagPattern)].filter(match => !match[0].endsWith('/>'));
    const closeTags = [...mdxContent.matchAll(closeTagPattern)];
    
    if (openTags.length !== closeTags.length) {
      return {
        status: 'fail',
        details: 'Mismatched JSX tags detected',
        autoFixable: false
      };
    }
    
    return { status: 'pass', details: 'MDX syntax appears valid' };
  }

  async validateInternalLinks(filePath) {
    const content = await fs.readFile(filePath, 'utf8');
    const parsed = matter(content);
    
    const linkPattern = /\[([^\]]*)\]\(([^)]*\.mdx)(#[^)]*)?\)/g;
    const links = [...parsed.content.matchAll(linkPattern)];
    
    let brokenLinks = 0;
    
    for (const link of links) {
      const linkPath = link[2];
      const fullPath = path.resolve(path.dirname(filePath), linkPath);
      
      if (!(await this.fileExists(fullPath))) {
        brokenLinks++;
      }
    }
    
    if (brokenLinks > 0) {
      return {
        status: 'warning',
        details: `${brokenLinks} potentially broken internal links found`,
        autoFixable: false
      };
    }
    
    return { status: 'pass', details: 'All internal links appear valid' };
  }

  async validateAssetReferences(filePath) {
    const content = await fs.readFile(filePath, 'utf8');
    const parsed = matter(content);
    
    const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const images = [...parsed.content.matchAll(imagePattern)];
    
    let missingAssets = 0;
    
    for (const image of images) {
      const imagePath = image[2];
      
      // Skip external URLs
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        continue;
      }
      
      const fullPath = path.resolve(path.dirname(filePath), imagePath);
      
      if (!(await this.fileExists(fullPath))) {
        missingAssets++;
      }
    }
    
    if (missingAssets > 0) {
      return {
        status: 'warning',
        details: `${missingAssets} missing asset references found`,
        autoFixable: false
      };
    }
    
    return { status: 'pass', details: 'All asset references appear valid' };
  }

  async validateMetadataCompleteness(filePath) {
    const content = await fs.readFile(filePath, 'utf8');
    const parsed = matter(content);
    
    const requiredFields = ['title'];
    const recommendedFields = ['description', 'slug'];
    
    const missing = requiredFields.filter(field => !parsed.data[field]);
    const missingRecommended = recommendedFields.filter(field => !parsed.data[field]);
    
    if (missing.length > 0) {
      return {
        status: 'fail',
        details: `Missing required metadata fields: ${missing.join(', ')}`,
        autoFixable: true
      };
    }
    
    if (missingRecommended.length > 0) {
      return {
        status: 'warning',
        details: `Missing recommended metadata fields: ${missingRecommended.join(', ')}`,
        autoFixable: true
      };
    }
    
    return { status: 'pass', details: 'Metadata is complete' };
  }

  /**
   * Utility methods for file operations
   */
  async copyDirectory(src, dest) {
    await this.ensureDirectory(dest);
    const entries = await fs.readdir(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        await this.copyDirectory(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  async removeDirectory(dirPath) {
    if (await this.fileExists(dirPath)) {
      await fs.rm(dirPath, { recursive: true, force: true });
    }
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const config = {};
  let isRollback = false;
  
  // Handle positional arguments first
  if (args.length >= 2 && !args[0].startsWith('--') && !args[1].startsWith('--')) {
    config.sourceDir = args[0];
    config.outputDir = args[1];
    // Remove positional args from the array
    args.splice(0, 2);
  }
  
  // Parse command line arguments
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    const value = args[i + 1];
    
    switch (key) {
      case 'source':
        config.sourceDir = value;
        break;
      case 'output':
        config.outputDir = value;
        break;
      case 'backup-dir':
        config.backupDir = value;
        break;
      case 'dry-run':
        config.dryRun = true;
        i--; // No value for this flag
        break;
      case 'no-enhance':
        config.enhanceMetadata = false;
        i--; // No value for this flag
        break;
      case 'no-validate':
        config.validateAssets = false;
        i--; // No value for this flag
        break;
      case 'no-rollback':
        config.enableRollback = false;
        i--; // No value for this flag
        break;
      case 'rollback':
        isRollback = true;
        i--; // No value for this flag
        break;
      case 'help':
        console.log(`
MD to MDX Conversion Script

Usage:
  node convert-md-to-mdx.js [options]

Options:
  --source <dir>        Source directory containing .md files (default: source/trend-vision-one-md/docs)
  --output <dir>        Output directory for .mdx files (default: ai-docs-poc/docs/converted)
  --backup-dir <dir>    Backup directory for rollback (default: ai-docs-poc/backups)
  --dry-run             Run without making changes
  --no-enhance          Skip metadata enhancement
  --no-validate         Skip asset validation
  --no-rollback         Disable rollback capability
  --rollback            Rollback to previous backup
  --help                Show this help message

Examples:
  # Basic conversion
  node convert-md-to-mdx.js

  # Dry run to see what would be converted
  node convert-md-to-mdx.js --dry-run

  # Convert with custom directories
  node convert-md-to-mdx.js --source ./docs --output ./converted

  # Rollback to previous state
  node convert-md-to-mdx.js --rollback
        `);
        process.exit(0);
        break;
    }
  }
  
  const converter = new MDXConverter(config);
  
  if (isRollback) {
    // Perform rollback
    converter.rollback().then(() => {
      console.log('✅ Rollback completed successfully');
    }).catch(error => {
      console.error('❌ Rollback failed:', error.message);
      process.exit(1);
    });
  } else {
    // Perform conversion
    converter.convert().catch(error => {
      console.error('❌ Conversion failed:', error.message);
      process.exit(1);
    });
  }
}

module.exports = MDXConverter;