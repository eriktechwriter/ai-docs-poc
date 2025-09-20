#!/usr/bin/env node

/**
 * Chroma Vector Database Setup
 * 
 * Task 4.1: Set up local Chroma vector database
 * - Install and configure Chroma database for local development
 * - Create document indexing system that processes MDX content into embeddings
 * - Implement content chunking strategy for optimal search performance
 * - Build database initialization and maintenance scripts
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { ChromaClient } = require('chromadb');
const grayMatter = require('gray-matter');

class VectorDatabaseManager {
  constructor(options = {}) {
    this.chromaUrl = options.chromaUrl || 'http://localhost:8000';
    this.collectionName = options.collectionName || 'documentation';
    this.chunkSize = options.chunkSize || 1000; // characters per chunk
    this.chunkOverlap = options.chunkOverlap || 200; // overlap between chunks
    this.client = null;
    this.collection = null;
  }

  /**
   * Initialize the Chroma client and collection
   */
  async initialize() {
    try {
      console.log(chalk.blue('🚀 Initializing Chroma vector database...'));
      
      // Initialize ChromaDB client
      this.client = new ChromaClient({
        path: this.chromaUrl
      });
      
      // Test connection
      await this.testConnection();
      
      // Create or get collection
      await this.setupCollection();
      
      console.log(chalk.green('✅ Vector database initialized successfully'));
      return true;
      
    } catch (error) {
      console.error(chalk.red('❌ Failed to initialize vector database:'), error.message);
      
      if (error.message.includes('ECONNREFUSED')) {
        console.log(chalk.yellow('\n💡 Tip: Make sure ChromaDB is running locally:'));
        console.log(chalk.gray('   pip install chromadb'));
        console.log(chalk.gray('   chroma run --host localhost --port 8000'));
        console.log(chalk.gray('\n   Or use the embedded version (no server required)'));
      }
      
      return false;
    }
  }

  /**
   * Test connection to ChromaDB
   */
  async testConnection() {
    try {
      const version = await this.client.version();
      console.log(chalk.cyan(`📡 Connected to ChromaDB version: ${version}`));
      return true;
    } catch (error) {
      // Try embedded mode if server connection fails
      console.log(chalk.yellow('⚠️  Server connection failed, trying embedded mode...'));
      
      try {
        // Use embedded ChromaDB (no server required)
        const { ChromaClient } = require('chromadb');
        this.client = new ChromaClient();
        const version = await this.client.version();
        console.log(chalk.cyan(`📡 Connected to embedded ChromaDB version: ${version}`));
        return true;
      } catch (embeddedError) {
        throw new Error(`Cannot connect to ChromaDB: ${error.message}`);
      }
    }
  }

  /**
   * Set up the document collection
   */
  async setupCollection() {
    try {
      // Try to get existing collection
      try {
        this.collection = await this.client.getCollection({
          name: this.collectionName
        });
        console.log(chalk.cyan(`📚 Using existing collection: ${this.collectionName}`));
        
        // Get collection info
        const count = await this.collection.count();
        console.log(chalk.gray(`   Documents in collection: ${count}`));
        
      } catch (error) {
        // Collection doesn't exist, create it
        console.log(chalk.yellow(`📚 Creating new collection: ${this.collectionName}`));
        
        this.collection = await this.client.createCollection({
          name: this.collectionName,
          metadata: {
            description: 'Trend Vision One documentation embeddings',
            created: new Date().toISOString()
          }
        });
        
        console.log(chalk.green(`✅ Collection created: ${this.collectionName}`));
      }
      
    } catch (error) {
      throw new Error(`Failed to setup collection: ${error.message}`);
    }
  }

  /**
   * Process and chunk document content
   */
  chunkDocument(content, metadata = {}) {
    const chunks = [];
    
    // Remove frontmatter for chunking
    const { content: bodyContent } = grayMatter(content);
    
    // Split content into sections by headings
    const sections = this.splitByHeadings(bodyContent);
    
    for (const section of sections) {
      // If section is small enough, use as single chunk
      if (section.content.length <= this.chunkSize) {
        chunks.push({
          content: section.content,
          metadata: {
            ...metadata,
            heading: section.heading,
            chunkType: 'section',
            chunkIndex: chunks.length
          }
        });
      } else {
        // Split large sections into smaller chunks
        const sectionChunks = this.splitLargeSection(section, metadata);
        chunks.push(...sectionChunks);
      }
    }
    
    return chunks;
  }

  /**
   * Split content by headings to preserve structure
   */
  splitByHeadings(content) {
    const sections = [];
    const lines = content.split('\n');
    let currentSection = { heading: '', content: '' };
    
    for (const line of lines) {
      if (line.match(/^#+\s+/)) {
        // Save previous section if it has content
        if (currentSection.content.trim()) {
          sections.push({
            heading: currentSection.heading,
            content: currentSection.content.trim()
          });
        }
        
        // Start new section
        currentSection = {
          heading: line.replace(/^#+\s+/, ''),
          content: line + '\n'
        };
      } else {
        currentSection.content += line + '\n';
      }
    }
    
    // Add final section
    if (currentSection.content.trim()) {
      sections.push({
        heading: currentSection.heading,
        content: currentSection.content.trim()
      });
    }
    
    return sections;
  }

  /**
   * Split large sections into smaller chunks with overlap
   */
  splitLargeSection(section, metadata) {
    const chunks = [];
    const content = section.content;
    let start = 0;
    let chunkIndex = 0;
    
    while (start < content.length) {
      let end = start + this.chunkSize;
      
      // If not at the end, try to break at a sentence or paragraph
      if (end < content.length) {
        const breakPoints = [
          content.lastIndexOf('\n\n', end),
          content.lastIndexOf('. ', end),
          content.lastIndexOf('.\n', end),
          content.lastIndexOf('\n', end)
        ];
        
        const bestBreak = breakPoints.find(bp => bp > start + this.chunkSize * 0.7);
        if (bestBreak && bestBreak > start) {
          end = bestBreak + 1;
        }
      }
      
      const chunkContent = content.substring(start, end).trim();
      
      if (chunkContent) {
        chunks.push({
          content: chunkContent,
          metadata: {
            ...metadata,
            heading: section.heading,
            chunkType: 'partial',
            chunkIndex: chunkIndex++,
            totalChunks: Math.ceil(content.length / this.chunkSize)
          }
        });
      }
      
      // Move start position with overlap
      start = Math.max(start + this.chunkSize - this.chunkOverlap, end);
    }
    
    return chunks;
  }

  /**
   * Index a single document
   */
  async indexDocument(filePath, content) {
    try {
      const filename = path.basename(filePath);
      const { data: frontmatter, content: bodyContent } = grayMatter(content);
      
      // Create document metadata
      const documentMetadata = {
        filename,
        filePath,
        title: frontmatter.title || filename,
        category: frontmatter.category || 'general',
        tags: frontmatter.tags || [],
        lastIndexed: new Date().toISOString()
      };
      
      // Chunk the document
      const chunks = this.chunkDocument(content, documentMetadata);
      
      if (chunks.length === 0) {
        console.log(chalk.yellow(`⚠️  No content to index in ${filename}`));
        return { filename, chunks: 0, success: false };
      }
      
      // Prepare data for ChromaDB
      const ids = chunks.map((_, index) => `${filename}_chunk_${index}`);
      const documents = chunks.map(chunk => chunk.content);
      const metadatas = chunks.map(chunk => ({
        ...chunk.metadata,
        // Convert arrays to strings for ChromaDB compatibility
        tags: Array.isArray(chunk.metadata.tags) ? chunk.metadata.tags.join(',') : chunk.metadata.tags
      }));
      
      // Add to collection
      await this.collection.add({
        ids,
        documents,
        metadatas
      });
      
      return { filename, chunks: chunks.length, success: true };
      
    } catch (error) {
      console.error(chalk.red(`❌ Error indexing ${path.basename(filePath)}:`), error.message);
      return { filename: path.basename(filePath), chunks: 0, success: false, error: error.message };
    }
  }

  /**
   * Batch index multiple documents
   */
  async batchIndexDocuments(docsDir, options = {}) {
    const {
      filePattern = '*.md',
      maxFiles = null,
      clearExisting = false
    } = options;
    
    console.log(chalk.blue('📚 Starting batch document indexing...'));
    console.log(chalk.gray(`Directory: ${docsDir}`));
    
    // Clear existing collection if requested
    if (clearExisting) {
      console.log(chalk.yellow('🗑️  Clearing existing collection...'));
      try {
        await this.client.deleteCollection({ name: this.collectionName });
        await this.setupCollection();
        console.log(chalk.green('✅ Collection cleared and recreated'));
      } catch (error) {
        console.log(chalk.red('❌ Failed to clear collection:', error.message));
      }
    }
    
    // Get all markdown files
    const files = fs.readdirSync(docsDir)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(docsDir, file));
    
    if (maxFiles) {
      files.splice(maxFiles);
    }
    
    console.log(chalk.cyan(`Found ${files.length} documents to index`));
    
    const results = {
      processed: [],
      errors: [],
      summary: {
        totalFiles: files.length,
        successCount: 0,
        errorCount: 0,
        totalChunks: 0,
        startTime: new Date().toISOString()
      }
    };
    
    // Process files in batches
    const BATCH_SIZE = 20;
    for (let i = 0; i < files.length; i += BATCH_SIZE) {
      const batch = files.slice(i, i + BATCH_SIZE);
      console.log(chalk.yellow(`Processing batch ${Math.floor(i/BATCH_SIZE) + 1}/${Math.ceil(files.length/BATCH_SIZE)}...`));
      
      for (const file of batch) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const result = await this.indexDocument(file, content);
          
          if (result.success) {
            results.processed.push(result);
            results.summary.successCount++;
            results.summary.totalChunks += result.chunks;
            console.log(chalk.green(`  ✅ ${result.filename} (${result.chunks} chunks)`));
          } else {
            results.errors.push(result);
            results.summary.errorCount++;
            console.log(chalk.red(`  ❌ ${result.filename}`));
          }
          
        } catch (error) {
          const filename = path.basename(file);
          results.errors.push({ filename, error: error.message, success: false });
          results.summary.errorCount++;
          console.log(chalk.red(`  ❌ ${filename}: ${error.message}`));
        }
      }
    }
    
    results.summary.endTime = new Date().toISOString();
    results.summary.duration = new Date(results.summary.endTime) - new Date(results.summary.startTime);
    
    // Generate report
    await this.generateIndexingReport(results, docsDir);
    this.displayIndexingSummary(results);
    
    return results;
  }

  /**
   * Search the vector database
   */
  async search(query, options = {}) {
    const {
      limit = 10,
      includeMetadata = true,
      includeDocuments = true,
      whereFilter = null
    } = options;
    
    try {
      const results = await this.collection.query({
        queryTexts: [query],
        nResults: limit,
        include: [
          ...(includeMetadata ? ['metadatas'] : []),
          ...(includeDocuments ? ['documents'] : []),
          'distances'
        ],
        where: whereFilter
      });
      
      // Format results
      const formattedResults = [];
      if (results.ids && results.ids[0]) {
        for (let i = 0; i < results.ids[0].length; i++) {
          formattedResults.push({
            id: results.ids[0][i],
            document: includeDocuments ? results.documents[0][i] : null,
            metadata: includeMetadata ? results.metadatas[0][i] : null,
            distance: results.distances[0][i],
            similarity: 1 - results.distances[0][i] // Convert distance to similarity
          });
        }
      }
      
      return formattedResults;
      
    } catch (error) {
      console.error(chalk.red('❌ Search failed:'), error.message);
      throw error;
    }
  }

  /**
   * Get collection statistics
   */
  async getStats() {
    try {
      const count = await this.collection.count();
      
      // Get sample of documents to analyze
      const sample = await this.collection.get({
        limit: 100,
        include: ['metadatas']
      });
      
      const stats = {
        totalDocuments: count,
        sampleSize: sample.ids.length,
        categories: {},
        avgChunksPerDoc: 0
      };
      
      // Analyze metadata
      if (sample.metadatas) {
        const docCounts = {};
        
        sample.metadatas.forEach(metadata => {
          // Count categories
          const category = metadata.category || 'unknown';
          stats.categories[category] = (stats.categories[category] || 0) + 1;
          
          // Count chunks per document
          const filename = metadata.filename;
          docCounts[filename] = (docCounts[filename] || 0) + 1;
        });
        
        // Calculate average chunks per document
        const totalDocs = Object.keys(docCounts).length;
        if (totalDocs > 0) {
          stats.avgChunksPerDoc = Math.round(sample.metadatas.length / totalDocs * 100) / 100;
        }
      }
      
      return stats;
      
    } catch (error) {
      console.error(chalk.red('❌ Failed to get stats:'), error.message);
      throw error;
    }
  }

  /**
   * Generate indexing report
   */
  async generateIndexingReport(results, docsDir) {
    const reportPath = path.join(path.dirname(docsDir), 'vector-indexing-report.json');
    
    const report = {
      summary: results.summary,
      stats: await this.getStats(),
      processed: results.processed.slice(0, 10), // First 10 for brevity
      errors: results.errors.slice(0, 10), // First 10 errors
      configuration: {
        chunkSize: this.chunkSize,
        chunkOverlap: this.chunkOverlap,
        collectionName: this.collectionName
      }
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
    console.log(chalk.cyan(`📊 Indexing report saved to: ${reportPath}`));
    
    return report;
  }

  /**
   * Display indexing summary
   */
  displayIndexingSummary(results) {
    console.log(chalk.blue('\n📊 Vector Database Indexing Summary'));
    console.log(chalk.gray('=' .repeat(45)));
    
    console.log(`${chalk.bold('Total Files:')} ${results.summary.totalFiles}`);
    console.log(`${chalk.green('✅ Successfully Indexed:')} ${results.summary.successCount}`);
    console.log(`${chalk.red('❌ Errors:')} ${results.summary.errorCount}`);
    console.log(`${chalk.cyan('📄 Total Chunks Created:')} ${results.summary.totalChunks}`);
    
    const duration = Math.round(results.summary.duration / 1000);
    console.log(`${chalk.yellow('⏱️  Duration:')} ${duration}s`);
    
    if (results.summary.successCount > 0) {
      const avgChunks = Math.round(results.summary.totalChunks / results.summary.successCount * 100) / 100;
      console.log(`${chalk.magenta('📈 Avg Chunks/Doc:')} ${avgChunks}`);
    }
    
    console.log(chalk.green('\n✅ Vector database indexing complete!'));
  }

  /**
   * Clean up resources
   */
  async cleanup() {
    // ChromaDB client doesn't require explicit cleanup
    console.log(chalk.gray('🧹 Cleanup complete'));
  }
}

// CLI interface
async function main() {
  const vectorDB = new VectorDatabaseManager();
  
  console.log(chalk.blue('🔍 Chroma Vector Database Setup'));
  console.log(chalk.gray('Set up local vector database for semantic search\n'));
  
  try {
    // Initialize database
    const initialized = await vectorDB.initialize();
    if (!initialized) {
      process.exit(1);
    }
    
    // Check if we should index documents
    const docsDir = path.resolve(__dirname, '..', 'docs');
    
    if (!fs.existsSync(docsDir)) {
      console.error(chalk.red(`❌ Docs directory not found: ${docsDir}`));
      process.exit(1);
    }
    
    // Get command line options
    const shouldIndex = process.argv.includes('--index');
    const clearExisting = process.argv.includes('--clear');
    const testMode = process.argv.includes('--test');
    
    if (shouldIndex) {
      console.log(chalk.blue('\n📚 Indexing documents...'));
      
      const results = await vectorDB.batchIndexDocuments(docsDir, {
        maxFiles: testMode ? 10 : null,
        clearExisting
      });
      
      // Test search if indexing was successful
      if (results.summary.successCount > 0) {
        console.log(chalk.blue('\n🔍 Testing search functionality...'));
        
        const searchResults = await vectorDB.search('endpoint security configuration', {
          limit: 3
        });
        
        console.log(chalk.cyan(`Found ${searchResults.length} results:`));
        searchResults.forEach((result, index) => {
          console.log(chalk.white(`  ${index + 1}. ${result.metadata.title || result.metadata.filename}`));
          console.log(chalk.gray(`     Similarity: ${Math.round(result.similarity * 100)}%`));
        });
      }
    } else {
      // Just show stats
      const stats = await vectorDB.getStats();
      console.log(chalk.cyan('\n📊 Database Statistics:'));
      console.log(chalk.white(`  Total Documents: ${stats.totalDocuments}`));
      console.log(chalk.white(`  Average Chunks per Document: ${stats.avgChunksPerDoc}`));
      
      if (Object.keys(stats.categories).length > 0) {
        console.log(chalk.white('  Categories:'));
        Object.entries(stats.categories)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 5)
          .forEach(([category, count]) => {
            console.log(chalk.gray(`    ${category}: ${count}`));
          });
      }
      
      console.log(chalk.yellow('\n💡 Use --index to index documents'));
      console.log(chalk.yellow('💡 Use --test to index only 10 documents'));
      console.log(chalk.yellow('💡 Use --clear to clear existing data'));
    }
    
    await vectorDB.cleanup();
    console.log(chalk.green('\n🎉 Vector database setup complete!'));
    
  } catch (error) {
    console.error(chalk.red('❌ Setup failed:'), error.message);
    process.exit(1);
  }
}

// Export for use as module
module.exports = VectorDatabaseManager;

// Run CLI if called directly
if (require.main === module) {
  main();
}