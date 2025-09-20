#!/usr/bin/env node

/**
 * Fix Frontmatter YAML Issues
 * 
 * Fixes YAML parsing issues in document frontmatter by properly quoting values
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const grayMatter = require('gray-matter');

class FrontmatterFixer {
  constructor() {
    this.fixedCount = 0;
    this.errorCount = 0;
    this.processedCount = 0;
  }

  /**
   * Fix a single document's frontmatter
   */
  fixDocument(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Try to parse the frontmatter
      let matter;
      try {
        matter = grayMatter(content);
      } catch (error) {
        // If parsing fails, try to fix the YAML manually
        const fixedContent = this.fixYAMLSyntax(content);
        try {
          matter = grayMatter(fixedContent);
          // If successful, write the fixed content
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          this.fixedCount++;
          return { success: true, fixed: true };
        } catch (secondError) {
          console.error(chalk.red(`❌ Could not fix ${path.basename(filePath)}: ${secondError.message}`));
          this.errorCount++;
          return { success: false, error: secondError.message };
        }
      }
      
      // If parsing succeeded, check if we need to clean up the frontmatter
      const cleanedFrontmatter = this.cleanFrontmatter(matter.data);
      const hasChanges = JSON.stringify(cleanedFrontmatter) !== JSON.stringify(matter.data);
      
      if (hasChanges) {
        const newContent = grayMatter.stringify(matter.content, cleanedFrontmatter);
        fs.writeFileSync(filePath, newContent, 'utf8');
        this.fixedCount++;
        return { success: true, fixed: true };
      }
      
      return { success: true, fixed: false };
      
    } catch (error) {
      console.error(chalk.red(`❌ Error processing ${path.basename(filePath)}: ${error.message}`));
      this.errorCount++;
      return { success: false, error: error.message };
    }
  }

  /**
   * Fix YAML syntax issues manually
   */
  fixYAMLSyntax(content) {
    const lines = content.split('\n');
    const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line.trim() === '---');
    
    if (frontmatterEnd === -1) {
      return content; // No frontmatter found
    }
    
    const frontmatterLines = lines.slice(1, frontmatterEnd);
    const bodyLines = lines.slice(frontmatterEnd + 1);
    
    // Fix each frontmatter line
    const fixedFrontmatterLines = frontmatterLines.map(line => {
      // Skip empty lines and comments
      if (!line.trim() || line.trim().startsWith('#')) {
        return line;
      }
      
      // Skip array items
      if (line.trim().startsWith('-')) {
        return line;
      }
      
      // Fix key-value pairs
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) {
        return line;
      }
      
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      
      if (!value) {
        return line; // Empty value
      }
      
      // Check if value needs quoting
      const needsQuoting = this.needsQuoting(value);
      
      if (needsQuoting && !this.isAlreadyQuoted(value)) {
        const indent = line.match(/^\s*/)[0];
        return `${indent}${key}: "${value.replace(/"/g, '\\"')}"`;
      }
      
      return line;
    });
    
    return ['---', ...fixedFrontmatterLines, '---', ...bodyLines].join('\n');
  }

  /**
   * Check if a value needs quoting
   */
  needsQuoting(value) {
    // Values that need quoting
    const needsQuotingPatterns = [
      /^[0-9]/,           // Starts with number
      /:/,                // Contains colon
      /[{}[\]]/,          // Contains brackets or braces
      /^[!&*]/,           // Starts with YAML special chars
      /^\s/,              // Starts with whitespace
      /\s$/,              // Ends with whitespace
      /#/,                // Contains hash
      /\|/,               // Contains pipe
      />/,                // Contains greater than
      /@/,                // Contains at symbol
      /`/,                // Contains backtick
      /\n/,               // Contains newline
      /^(true|false|null|yes|no|on|off)$/i, // YAML boolean/null values
    ];
    
    return needsQuotingPatterns.some(pattern => pattern.test(value));
  }

  /**
   * Check if value is already quoted
   */
  isAlreadyQuoted(value) {
    return (value.startsWith('"') && value.endsWith('"')) ||
           (value.startsWith("'") && value.endsWith("'")) ||
           value.startsWith('|') ||
           value.startsWith('>');
  }

  /**
   * Clean frontmatter data
   */
  cleanFrontmatter(data) {
    const cleaned = { ...data };
    
    // Ensure required fields are properly formatted
    if (cleaned.tags && Array.isArray(cleaned.tags)) {
      cleaned.tags = cleaned.tags.filter(tag => tag && typeof tag === 'string');
    }
    
    // Clean up string fields
    ['title', 'description', 'sidebar_label'].forEach(field => {
      if (cleaned[field] && typeof cleaned[field] === 'string') {
        cleaned[field] = cleaned[field].trim();
      }
    });
    
    // Ensure dates are properly formatted
    if (cleaned.lastAnalyzed && typeof cleaned.lastAnalyzed === 'string') {
      try {
        const date = new Date(cleaned.lastAnalyzed);
        cleaned.lastAnalyzed = date.toISOString();
      } catch (error) {
        delete cleaned.lastAnalyzed;
      }
    }
    
    if (cleaned.lastUpdated && typeof cleaned.lastUpdated === 'string') {
      try {
        const date = new Date(cleaned.lastUpdated);
        cleaned.lastUpdated = date.toISOString();
      } catch (error) {
        delete cleaned.lastUpdated;
      }
    }
    
    return cleaned;
  }

  /**
   * Process all documents in a directory
   */
  async processDirectory(docsDir) {
    console.log(chalk.blue('🔧 Fixing frontmatter YAML issues...'));
    console.log(chalk.gray(`Directory: ${docsDir}`));
    
    const files = fs.readdirSync(docsDir)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(docsDir, file));
    
    console.log(chalk.cyan(`Found ${files.length} documents to process`));
    
    const BATCH_SIZE = 50;
    for (let i = 0; i < files.length; i += BATCH_SIZE) {
      const batch = files.slice(i, i + BATCH_SIZE);
      console.log(chalk.yellow(`Processing batch ${Math.floor(i/BATCH_SIZE) + 1}/${Math.ceil(files.length/BATCH_SIZE)}...`));
      
      for (const file of batch) {
        const result = this.fixDocument(file);
        this.processedCount++;
        
        if (result.success && result.fixed) {
          console.log(chalk.green(`  ✅ Fixed ${path.basename(file)}`));
        } else if (!result.success) {
          console.log(chalk.red(`  ❌ Error ${path.basename(file)}`));
        }
      }
    }
    
    this.displaySummary();
  }

  /**
   * Display processing summary
   */
  displaySummary() {
    console.log(chalk.blue('\n📊 Frontmatter Fix Summary'));
    console.log(chalk.gray('=' .repeat(35)));
    
    console.log(`${chalk.bold('Total Processed:')} ${this.processedCount}`);
    console.log(`${chalk.green('✅ Fixed:')} ${this.fixedCount}`);
    console.log(`${chalk.red('❌ Errors:')} ${this.errorCount}`);
    console.log(`${chalk.cyan('✨ Success Rate:')} ${Math.round((this.processedCount - this.errorCount) / this.processedCount * 100)}%`);
    
    console.log(chalk.green('\n✅ Frontmatter fixing complete!'));
  }
}

// CLI interface
async function main() {
  const fixer = new FrontmatterFixer();
  
  console.log(chalk.blue('🔧 Frontmatter YAML Fixer'));
  console.log(chalk.gray('Fix YAML parsing issues in document frontmatter\n'));
  
  const docsDir = path.resolve(__dirname, '..', 'docs');
  
  if (!fs.existsSync(docsDir)) {
    console.error(chalk.red(`❌ Docs directory not found: ${docsDir}`));
    process.exit(1);
  }
  
  try {
    await fixer.processDirectory(docsDir);
  } catch (error) {
    console.error(chalk.red('❌ Processing failed:'), error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}