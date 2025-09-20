#!/usr/bin/env node

/**
 * Local Vector Database Implementation
 * 
 * Task 4.1: Set up local Chroma vector database
 * A simplified vector database that works locally without requiring a server.
 * Uses file-based storage and basic similarity search for development.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const grayMatter = require('gray-matter');

class LocalVectorDatabase {
  constructor(options = {}) {
    this.dbPath = options.dbPath || path.join(__dirname, '..', 'data', 'vector-db');
    this.collectionName = options.collectionName || 'documentation';
    this.chunkSize = options.chunkSize || 1000;
    this.chunkOverlap = options.chunkOverlap || 200;
    this.initialized = false;
    
    // Ensure database directory exists
    this.ensureDbDirectory();
  }

  /**
   * Ensure database directory exists
   */
  ensureDbDirectory() {
    if (!fs.existsSync(this.dbPath)) {
      fs.mkdirSync(this.dbPath, { recursive: true });
    }
  }

  /**
   * Initialize the database
   */
  async initialize() {
    try {
      console.log(chalk.blue('🚀 Initializing local vector database...'));
      
      this.ensureDbDirectory();
      
      // Create collection metadata file if it doesn't exist
      const metadataPath = path.join(this.dbPath, `${this.collectionName}_metadata.json`);
      if (!fs.existsSync(metadataPath)) {
        const metadata = {
          name: this.collectionName,
          created: new Date().toISOString(),
          documentCount: 0,
          chunkCount: 0,
          lastUpdated: new Date().toISOString()
        };
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
      }
      
      this.initialized = true;
      console.log(chalk.green('✅ Local vector database initialized'));
      console.log(chalk.gray(`   Database path: ${this.dbPath}`));
      
      return true;
      
    } catch (error) {
      console.error(chalk.red('❌ Failed to initialize database:'), error.message);
      return false;
    }
  }

  /**
   * Get collection metadata
   */
  getCollectionMetadata() {
    const metadataPath = path.join(this.dbPath, `${this.collectionName}_metadata.json`);
    if (fs.existsSync(metadataPath)) {
      return JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    }
    return null;
  }

  /**
   * Update collection metadata
   */
  updateCollectionMetadata(updates) {
    const metadataPath = path.join(this.dbPath, `${this.collectionName}_metadata.json`);
    const metadata = this.getCollectionMetadata() || {};
    
    const updatedMetadata = {
      ...metadata,
      ...updates,
      lastUpdated: new Date().toISOString()
    };
    
    fs.writeFileSync(metadataPath, JSON.stringify(updatedMetadata, null, 2));
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
        const sectionChunks = this.splitLargeSection(section, metadata);
        chunks.push(...sectionChunks);
      }
    }
    
    return chunks;
  }

  /**
   * Split content by headings
   */
  splitByHeadings(content) {
    const sections = [];
    const lines = content.split('\n');
    let currentSection = { heading: '', content: '' };
    
    for (const line of lines) {
      if (line.match(/^#+\s+/)) {
        if (currentSection.content.trim()) {
          sections.push({
            heading: currentSection.heading,
            content: currentSection.content.trim()
          });
        }
        
        currentSection = {
          heading: line.replace(/^#+\s+/, ''),
          content: line + '\n'
        };
      } else {
        currentSection.content += line + '\n';
      }
    }
    
    if (currentSection.content.trim()) {
      sections.push({
        heading: currentSection.heading,
        content: currentSection.content.trim()
      });
    }
    
    return sections;
  }

  /**
   * Split large sections into chunks
   */
  splitLargeSection(section, metadata) {
    const chunks = [];
    const content = section.content;
    let start = 0;
    let chunkIndex = 0;
    
    while (start < content.length) {
      let end = start + this.chunkSize;
      
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
            chunkIndex: chunkIndex++
          }
        });
      }
      
      start = Math.max(start + this.chunkSize - this.chunkOverlap, end);
    }
    
    return chunks;
  }

  /**
   * Create simple text embeddings using TF-IDF-like approach
   */
  createSimpleEmbedding(text) {
    // Simple word frequency-based embedding
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2);
    
    const wordFreq = {};
    words.forEach(word => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });
    
    // Create a simple vector representation
    const commonWords = [
      'security', 'endpoint', 'configuration', 'policy', 'agent', 'threat',
      'detection', 'protection', 'monitoring', 'administration', 'user',
      'system', 'network', 'data', 'access', 'control', 'management',
      'installation', 'deployment', 'troubleshooting', 'integration'
    ];
    
    const embedding = commonWords.map(word => wordFreq[word] || 0);
    
    // Add some basic text statistics
    embedding.push(words.length); // Total words
    embedding.push(new Set(words).size); // Unique words
    embedding.push(text.length); // Character count
    
    return embedding;
  }

  /**
   * Calculate cosine similarity between two embeddings
   */
  cosineSimilarity(a, b) {
    if (a.length !== b.length) return 0;
    
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    
    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    
    if (normA === 0 || normB === 0) return 0;
    
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  /**
   * Index a single document
   */
  async indexDocument(filePath, content) {
    try {
      const filename = path.basename(filePath);
      const { data: frontmatter, content: bodyContent } = grayMatter(content);
      
      const documentMetadata = {
        filename,
        filePath,
        title: frontmatter.title || filename,
        category: frontmatter.category || 'general',
        tags: frontmatter.tags || [],
        lastIndexed: new Date().toISOString()
      };
      
      const chunks = this.chunkDocument(content, documentMetadata);
      
      if (chunks.length === 0) {
        return { filename, chunks: 0, success: false };
      }
      
      // Create embeddings for each chunk
      const indexedChunks = chunks.map((chunk, index) => ({
        id: `${filename}_chunk_${index}`,
        content: chunk.content,
        metadata: chunk.metadata,
        embedding: this.createSimpleEmbedding(chunk.content)
      }));
      
      // Save to file
      const docPath = path.join(this.dbPath, `${filename}.json`);
      fs.writeFileSync(docPath, JSON.stringify(indexedChunks, null, 2));
      
      return { filename, chunks: chunks.length, success: true };
      
    } catch (error) {
      console.error(chalk.red(`❌ Error indexing ${path.basename(filePath)}:`), error.message);
      return { filename: path.basename(filePath), chunks: 0, success: false, error: error.message };
    }
  }

  /**
   * Batch index documents
   */
  async batchIndexDocuments(docsDir, options = {}) {
    const {
      maxFiles = null,
      clearExisting = false
    } = options;
    
    console.log(chalk.blue('📚 Starting batch document indexing...'));
    
    if (clearExisting) {
      console.log(chalk.yellow('🗑️  Clearing existing index...'));
      const files = fs.readdirSync(this.dbPath).filter(f => f.endsWith('.json') && f !== `${this.collectionName}_metadata.json`);
      files.forEach(file => fs.unlinkSync(path.join(this.dbPath, file)));
    }
    
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
    
    const BATCH_SIZE = 50;
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
    
    // Update collection metadata
    this.updateCollectionMetadata({
      documentCount: results.summary.successCount,
      chunkCount: results.summary.totalChunks
    });
    
    await this.generateIndexingReport(results, docsDir);
    this.displayIndexingSummary(results);
    
    return results;
  }

  /**
   * Search the database
   */
  async search(query, options = {}) {
    const { limit = 10, categoryFilter = null } = options;
    
    try {
      const queryEmbedding = this.createSimpleEmbedding(query);
      const results = [];
      
      // Read all indexed documents
      const indexFiles = fs.readdirSync(this.dbPath)
        .filter(f => f.endsWith('.json') && f !== `${this.collectionName}_metadata.json`);
      
      for (const indexFile of indexFiles) {
        const indexPath = path.join(this.dbPath, indexFile);
        const chunks = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
        
        for (const chunk of chunks) {
          // Apply category filter if specified
          if (categoryFilter && chunk.metadata.category !== categoryFilter) {
            continue;
          }
          
          const similarity = this.cosineSimilarity(queryEmbedding, chunk.embedding);
          
          results.push({
            id: chunk.id,
            content: chunk.content,
            metadata: chunk.metadata,
            similarity,
            distance: 1 - similarity
          });
        }
      }
      
      // Sort by similarity and return top results
      return results
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit);
      
    } catch (error) {
      console.error(chalk.red('❌ Search failed:'), error.message);
      throw error;
    }
  }

  /**
   * Get database statistics
   */
  async getStats() {
    try {
      const metadata = this.getCollectionMetadata();
      const indexFiles = fs.readdirSync(this.dbPath)
        .filter(f => f.endsWith('.json') && f !== `${this.collectionName}_metadata.json`);
      
      const categories = {};
      let totalChunks = 0;
      
      // Analyze a sample of documents
      const sampleSize = Math.min(10, indexFiles.length);
      for (let i = 0; i < sampleSize; i++) {
        const indexPath = path.join(this.dbPath, indexFiles[i]);
        const chunks = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
        totalChunks += chunks.length;
        
        chunks.forEach(chunk => {
          const category = chunk.metadata.category || 'unknown';
          categories[category] = (categories[category] || 0) + 1;
        });
      }
      
      return {
        totalDocuments: metadata?.documentCount || indexFiles.length,
        totalChunks: metadata?.chunkCount || totalChunks,
        indexedFiles: indexFiles.length,
        categories,
        avgChunksPerDoc: indexFiles.length > 0 ? Math.round(totalChunks / sampleSize * 100) / 100 : 0,
        databasePath: this.dbPath,
        lastUpdated: metadata?.lastUpdated
      };
      
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
      processed: results.processed.slice(0, 10),
      errors: results.errors.slice(0, 10),
      configuration: {
        chunkSize: this.chunkSize,
        chunkOverlap: this.chunkOverlap,
        collectionName: this.collectionName,
        databasePath: this.dbPath
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
}

// CLI interface
async function main() {
  const vectorDB = new LocalVectorDatabase();
  
  console.log(chalk.blue('🔍 Local Vector Database Setup'));
  console.log(chalk.gray('Set up local file-based vector database for semantic search\n'));
  
  try {
    const initialized = await vectorDB.initialize();
    if (!initialized) {
      process.exit(1);
    }
    
    const docsDir = path.resolve(__dirname, '..', 'docs');
    
    if (!fs.existsSync(docsDir)) {
      console.error(chalk.red(`❌ Docs directory not found: ${docsDir}`));
      process.exit(1);
    }
    
    const shouldIndex = process.argv.includes('--index');
    const clearExisting = process.argv.includes('--clear');
    const testMode = process.argv.includes('--test');
    
    if (shouldIndex) {
      console.log(chalk.blue('\n📚 Indexing documents...'));
      
      const results = await vectorDB.batchIndexDocuments(docsDir, {
        maxFiles: testMode ? 10 : null,
        clearExisting
      });
      
      if (results.summary.successCount > 0) {
        console.log(chalk.blue('\n🔍 Testing search functionality...'));
        
        const searchResults = await vectorDB.search('endpoint security configuration', {
          limit: 3
        });
        
        console.log(chalk.cyan(`Found ${searchResults.length} results:`));
        searchResults.forEach((result, index) => {
          console.log(chalk.white(`  ${index + 1}. ${result.metadata.title || result.metadata.filename}`));
          console.log(chalk.gray(`     Similarity: ${Math.round(result.similarity * 100)}%`));
          console.log(chalk.gray(`     Preview: ${result.content.substring(0, 100)}...`));
        });
      }
    } else {
      const stats = await vectorDB.getStats();
      console.log(chalk.cyan('\n📊 Database Statistics:'));
      console.log(chalk.white(`  Total Documents: ${stats.totalDocuments}`));
      console.log(chalk.white(`  Total Chunks: ${stats.totalChunks}`));
      console.log(chalk.white(`  Average Chunks per Document: ${stats.avgChunksPerDoc}`));
      console.log(chalk.white(`  Database Path: ${stats.databasePath}`));
      
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
    
    console.log(chalk.green('\n🎉 Local vector database setup complete!'));
    
  } catch (error) {
    console.error(chalk.red('❌ Setup failed:'), error.message);
    process.exit(1);
  }
}

module.exports = LocalVectorDatabase;

if (require.main === module) {
  main();
}