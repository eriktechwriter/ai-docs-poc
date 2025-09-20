#!/usr/bin/env node

/**
 * Vector Search Test Interface
 * 
 * Simple CLI interface to test the vector database search functionality
 */

const chalk = require('chalk');
const LocalVectorDatabase = require('./local-vector-database');

class VectorSearchTest {
  constructor() {
    this.vectorDB = new LocalVectorDatabase();
  }

  async initialize() {
    const initialized = await this.vectorDB.initialize();
    if (!initialized) {
      throw new Error('Failed to initialize vector database');
    }
    return true;
  }

  async runSearchTests() {
    console.log(chalk.blue('🔍 Vector Search Test Suite'));
    console.log(chalk.gray('Testing semantic search functionality\n'));

    const testQueries = [
      {
        query: 'endpoint security configuration',
        description: 'Basic endpoint security search'
      },
      {
        query: 'threat detection and response',
        description: 'Security operations search'
      },
      {
        query: 'policy management administration',
        description: 'Administrative functions search'
      },
      {
        query: 'troubleshooting connection issues',
        description: 'Support and troubleshooting search'
      },
      {
        query: 'API integration development',
        description: 'Developer-focused search'
      },
      {
        query: 'zero trust secure access',
        description: 'Specific product feature search'
      }
    ];

    for (const test of testQueries) {
      console.log(chalk.cyan(`\n🔍 Testing: ${test.description}`));
      console.log(chalk.gray(`Query: "${test.query}"`));
      
      try {
        const results = await this.vectorDB.search(test.query, { limit: 5 });
        
        if (results.length === 0) {
          console.log(chalk.yellow('   No results found'));
          continue;
        }
        
        console.log(chalk.green(`   Found ${results.length} results:`));
        
        results.forEach((result, index) => {
          const similarity = Math.round(result.similarity * 100);
          const title = result.metadata.title || result.metadata.filename;
          const preview = result.content.substring(0, 100).replace(/\s+/g, ' ');
          
          console.log(chalk.white(`   ${index + 1}. ${title}`));
          console.log(chalk.gray(`      Similarity: ${similarity}% | Category: ${result.metadata.category}`));
          console.log(chalk.gray(`      Preview: ${preview}...`));
        });
        
      } catch (error) {
        console.log(chalk.red(`   Error: ${error.message}`));
      }
    }
  }

  async runCategoryFilterTests() {
    console.log(chalk.blue('\n📂 Category Filter Tests'));
    console.log(chalk.gray('Testing category-based filtering\n'));

    const stats = await this.vectorDB.getStats();
    const categories = Object.keys(stats.categories).slice(0, 3);

    for (const category of categories) {
      console.log(chalk.cyan(`\n📂 Testing category: ${category}`));
      
      try {
        const results = await this.vectorDB.search('configuration security', {
          limit: 3,
          categoryFilter: category
        });
        
        console.log(chalk.green(`   Found ${results.length} results in ${category}:`));
        
        results.forEach((result, index) => {
          const similarity = Math.round(result.similarity * 100);
          const title = result.metadata.title || result.metadata.filename;
          
          console.log(chalk.white(`   ${index + 1}. ${title} (${similarity}%)`));
        });
        
      } catch (error) {
        console.log(chalk.red(`   Error: ${error.message}`));
      }
    }
  }

  async runPerformanceTest() {
    console.log(chalk.blue('\n⚡ Performance Test'));
    console.log(chalk.gray('Testing search performance\n'));

    const queries = [
      'endpoint security',
      'threat detection',
      'policy configuration',
      'user management',
      'network security'
    ];

    const startTime = Date.now();
    let totalResults = 0;

    for (const query of queries) {
      const results = await this.vectorDB.search(query, { limit: 10 });
      totalResults += results.length;
    }

    const endTime = Date.now();
    const duration = endTime - startTime;
    const avgTime = Math.round(duration / queries.length);

    console.log(chalk.green(`✅ Performance Results:`));
    console.log(chalk.white(`   Total queries: ${queries.length}`));
    console.log(chalk.white(`   Total results: ${totalResults}`));
    console.log(chalk.white(`   Total time: ${duration}ms`));
    console.log(chalk.white(`   Average time per query: ${avgTime}ms`));
    console.log(chalk.white(`   Results per second: ${Math.round(totalResults / (duration / 1000))}`));
  }

  async displayDatabaseStats() {
    console.log(chalk.blue('\n📊 Database Statistics'));
    console.log(chalk.gray('Current vector database status\n'));

    try {
      const stats = await this.vectorDB.getStats();
      
      console.log(chalk.cyan('📈 Collection Overview:'));
      console.log(chalk.white(`   Total Documents: ${stats.totalDocuments}`));
      console.log(chalk.white(`   Total Chunks: ${stats.totalChunks}`));
      console.log(chalk.white(`   Indexed Files: ${stats.indexedFiles}`));
      console.log(chalk.white(`   Average Chunks per Document: ${stats.avgChunksPerDoc}`));
      console.log(chalk.white(`   Database Path: ${stats.databasePath}`));
      
      if (stats.lastUpdated) {
        const lastUpdated = new Date(stats.lastUpdated).toLocaleString();
        console.log(chalk.white(`   Last Updated: ${lastUpdated}`));
      }
      
      if (Object.keys(stats.categories).length > 0) {
        console.log(chalk.cyan('\n📂 Category Distribution:'));
        Object.entries(stats.categories)
          .sort(([,a], [,b]) => b - a)
          .forEach(([category, count]) => {
            const percentage = Math.round((count / stats.totalChunks) * 100);
            console.log(chalk.white(`   ${category}: ${count} chunks (${percentage}%)`));
          });
      }
      
    } catch (error) {
      console.log(chalk.red(`❌ Error getting stats: ${error.message}`));
    }
  }
}

// CLI interface
async function main() {
  const searchTest = new VectorSearchTest();
  
  try {
    await searchTest.initialize();
    
    // Display database stats first
    await searchTest.displayDatabaseStats();
    
    // Run search tests
    await searchTest.runSearchTests();
    
    // Run category filter tests
    await searchTest.runCategoryFilterTests();
    
    // Run performance test
    await searchTest.runPerformanceTest();
    
    console.log(chalk.green('\n🎉 All vector search tests completed successfully!'));
    
  } catch (error) {
    console.error(chalk.red('❌ Test failed:'), error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}