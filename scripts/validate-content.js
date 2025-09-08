#!/usr/bin/env node

/**
 * Content Validation Script
 * 
 * This script validates the structure and quality of documentation content.
 * Basic validation is implemented here, with full features coming in later tasks.
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const glob = require('glob');

async function validateContent() {
  console.log(chalk.blue('🔍 Content Validation'));
  
  const docsDir = path.join(__dirname, '..', 'docs');
  const errors = [];
  const warnings = [];
  
  try {
    // Check if docs directory exists
    if (!await fs.pathExists(docsDir)) {
      errors.push('docs/ directory not found');
      return { errors, warnings };
    }
    
    // Find all MDX files
    const mdxFiles = glob.sync('**/*.mdx', { cwd: docsDir });
    console.log(chalk.gray(`Found ${mdxFiles.length} MDX files`));
    
    // Basic validation for each file
    for (const file of mdxFiles) {
      const filePath = path.join(docsDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      
      // Check for frontmatter
      if (!content.startsWith('---')) {
        warnings.push(`${file}: Missing frontmatter`);
      }
      
      // Check for title
      if (!content.includes('title:')) {
        warnings.push(`${file}: Missing title in frontmatter`);
      }
      
      // Check for description
      if (!content.includes('description:')) {
        warnings.push(`${file}: Missing description in frontmatter`);
      }
    }
    
    return { errors, warnings };
    
  } catch (error) {
    errors.push(`Validation failed: ${error.message}`);
    return { errors, warnings };
  }
}

async function main() {
  const { errors, warnings } = await validateContent();
  
  if (errors.length > 0) {
    console.log(chalk.red('❌ Errors found:'));
    errors.forEach(error => console.log(chalk.red(`  - ${error}`)));
  }
  
  if (warnings.length > 0) {
    console.log(chalk.yellow('⚠️  Warnings:'));
    warnings.forEach(warning => console.log(chalk.yellow(`  - ${warning}`)));
  }
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log(chalk.green('✅ Content validation passed'));
  }
  
  // Exit with error code if there are errors
  process.exit(errors.length > 0 ? 1 : 0);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { validateContent, main };