#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Configuration
const SOURCE_DIR = '../../source/vision-one-docusaurus/trend-vision-one-webhelp';
const DOCS_DIR = '../docs';

// Function to extract content from HTML file
function extractContentFromHTML(htmlPath) {
  try {
    if (!fs.existsSync(htmlPath)) {
      console.warn(`File not found: ${htmlPath}`);
      return null;
    }
    
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    
    // Extract title
    const titleElement = document.querySelector('title') || document.querySelector('h1');
    const title = titleElement ? titleElement.textContent.trim() : path.basename(htmlPath, '.html');
    
    // Extract main content - try different selectors
    let contentElement = document.querySelector('main') || 
                        document.querySelector('.content') ||
                        document.querySelector('#content') ||
                        document.querySelector('body');
    
    if (!contentElement) {
      console.warn(`No content found in ${htmlPath}`);
      return null;
    }
    
    // Convert HTML to markdown-like format
    let content = contentElement.textContent || '';
    content = content.replace(/\s+/g, ' ').trim();
    
    // Skip if content is too short (likely empty or error page)
    if (content.length < 50) {
      console.warn(`Content too short in ${htmlPath}, skipping`);
      return null;
    }
    
    // Generate slug from filename
    const slug = path.basename(htmlPath, '.html');
    
    return {
      title,
      slug,
      content,
      originalFile: htmlPath
    };
  } catch (error) {
    console.error(`Error processing ${htmlPath}:`, error.message);
    return null;
  }
}

// Function to generate markdown frontmatter and content
function generateMarkdownContent(docData) {
  const frontmatter = `---
id: ${docData.slug}
title: ${docData.title.replace(/"/g, '\\"')}
sidebar_label: ${docData.title.replace(/"/g, '\\"')}
description: ${docData.title.replace(/"/g, '\\"')}
tags:
  - endpoint-security
  - trend-vision-one
---

`;
  
  return frontmatter + docData.content;
}

// Function to generate AI-optimized metadata
function generateMetadata(docData) {
  const wordCount = docData.content.split(/\s+/).length;
  const complexity = wordCount > 1000 ? 'advanced' : wordCount > 500 ? 'intermediate' : 'beginner';
  
  // Simple tag generation based on content analysis
  const tags = ['endpoint-security', 'trend-vision-one'];
  
  // Add tags based on filename patterns
  if (docData.slug.includes('agent')) tags.push('agent');
  if (docData.slug.includes('policy')) tags.push('policy');
  if (docData.slug.includes('security')) tags.push('security');
  if (docData.slug.includes('config')) tags.push('configuration');
  if (docData.slug.includes('deploy')) tags.push('deployment');
  if (docData.slug.includes('install')) tags.push('installation');
  if (docData.slug.includes('troubleshoot')) tags.push('troubleshooting');
  
  return {
    tags,
    category: 'endpoint-security',
    audience: complexity,
    complexity: wordCount > 1000 ? 3 : wordCount > 500 ? 2 : 1,
    lastUpdated: new Date().toISOString(),
    aiOptimized: true
  };
}

// Main import function
async function importRemainingDocs() {
  console.log('Starting batch import of remaining Endpoint Security documentation...');
  
  const sourceDir = path.resolve(__dirname, SOURCE_DIR);
  const docsDir = path.resolve(__dirname, DOCS_DIR);
  
  console.log(`Looking for source directory at: ${sourceDir}`);
  console.log(`Target docs directory: ${docsDir}`);
  
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    console.error('Please ensure the source files are available at the expected location.');
    return;
  }
  
  if (!fs.existsSync(docsDir)) {
    console.error(`Docs directory not found: ${docsDir}`);
    console.error('Please ensure you are running this script from the correct location.');
    return;
  }
  
  // Get all HTML files from source
  const htmlFiles = fs.readdirSync(sourceDir)
    .filter(file => file.endsWith('.html'))
    .filter(file => !file.startsWith('__')) // Skip private files
    .map(file => path.join(sourceDir, file));
  
  console.log(`Found ${htmlFiles.length} HTML files in source directory`);
  
  // Get existing docs to avoid duplicates
  const existingDocs = fs.readdirSync(docsDir)
    .filter(file => file.endsWith('.md'))
    .map(file => path.basename(file, '.md'));
  
  console.log(`Found ${existingDocs.length} existing docs`);
  
  let importedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  const importReport = {
    imported: [],
    skipped: [],
    errors: []
  };
  
  // Process in smaller batches to avoid overwhelming output
  const BATCH_SIZE = 50;
  const totalBatches = Math.ceil(htmlFiles.length / BATCH_SIZE);
  
  for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
    const startIndex = batchIndex * BATCH_SIZE;
    const endIndex = Math.min(startIndex + BATCH_SIZE, htmlFiles.length);
    const batch = htmlFiles.slice(startIndex, endIndex);
    
    console.log(`Processing batch ${batchIndex + 1}/${totalBatches} (${batch.length} files)...`);
    
    for (const htmlFile of batch) {
      const slug = path.basename(htmlFile, '.html');
      
      // Skip if already exists
      if (existingDocs.includes(slug)) {
        skippedCount++;
        importReport.skipped.push(slug);
        continue;
      }
      
      // Extract content
      const docData = extractContentFromHTML(htmlFile);
      if (!docData) {
        errorCount++;
        importReport.errors.push(slug);
        continue;
      }
      
      // Generate metadata
      const metadata = generateMetadata(docData);
      
      // Generate markdown content
      const markdownContent = generateMarkdownContent(docData);
      
      // Write to docs directory
      const outputPath = path.join(docsDir, `${slug}.md`);
      try {
        fs.writeFileSync(outputPath, markdownContent, 'utf8');
        importedCount++;
        importReport.imported.push({
          slug,
          title: docData.title,
          metadata
        });
      } catch (error) {
        console.error(`Error writing ${outputPath}:`, error.message);
        errorCount++;
        importReport.errors.push(slug);
      }
    }
    
    console.log(`Batch ${batchIndex + 1} complete. Imported: ${importedCount}, Skipped: ${skippedCount}, Errors: ${errorCount}`);
  }
  
  // Generate comprehensive report
  const report = {
    summary: {
      totalSourceFiles: htmlFiles.length,
      existingDocs: existingDocs.length,
      imported: importedCount,
      skipped: skippedCount,
      errors: errorCount,
      totalDocsAfterImport: existingDocs.length + importedCount
    },
    details: importReport,
    timestamp: new Date().toISOString()
  };
  
  // Write report
  fs.writeFileSync(
    path.join(__dirname, 'import-report.json'),
    JSON.stringify(report, null, 2),
    'utf8'
  );
  
  console.log('\n=== IMPORT COMPLETE ===');
  console.log(`Total source files: ${htmlFiles.length}`);
  console.log(`Existing docs: ${existingDocs.length}`);
  console.log(`Imported: ${importedCount}`);
  console.log(`Skipped (already exist): ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Total docs after import: ${existingDocs.length + importedCount}`);
  console.log(`\nDetailed report saved to: import-report.json`);
  
  return report;
}

// Run the import
if (require.main === module) {
  importRemainingDocs().catch(console.error);
}

module.exports = { importRemainingDocs };