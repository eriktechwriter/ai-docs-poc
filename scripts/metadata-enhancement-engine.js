#!/usr/bin/env node

/**
 * AI-Powered Metadata Enhancement Engine
 * 
 * This system analyzes content and automatically generates enhanced metadata
 * including topics, complexity levels, audience targeting, and AI optimization markers.
 * 
 * Task 3.2: Build AI-powered metadata enhancement engine
 * - Create content analysis system that extracts topics, complexity, and audience level
 * - Implement automatic tag generation based on content analysis
 * - Build metadata validation and quality scoring system
 * - Create batch processing workflow for applying metadata to all documents
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const grayMatter = require('gray-matter');
const SimpleQualityAnalyzer = require('./simple-quality-analyzer');

class MetadataEnhancementEngine {
  constructor() {
    this.qualityAnalyzer = new SimpleQualityAnalyzer();
    this.topicKeywords = this.initializeTopicKeywords();
    this.complexityIndicators = this.initializeComplexityIndicators();
    this.audienceIndicators = this.initializeAudienceIndicators();
  }

  initializeTopicKeywords() {
    return {
      'endpoint-security': [
        'endpoint', 'agent', 'protection', 'security', 'threat', 'malware',
        'antivirus', 'firewall', 'intrusion', 'detection', 'prevention'
      ],
      'configuration': [
        'config', 'configure', 'setup', 'install', 'deployment', 'settings',
        'parameters', 'options', 'preferences', 'customize'
      ],
      'policy': [
        'policy', 'rule', 'compliance', 'governance', 'enforcement',
        'regulation', 'standard', 'guideline', 'requirement'
      ],
      'troubleshooting': [
        'troubleshoot', 'debug', 'error', 'issue', 'problem', 'fix',
        'resolve', 'solution', 'diagnostic', 'repair'
      ],
      'integration': [
        'integrate', 'api', 'connector', 'webhook', 'sync', 'import',
        'export', 'third-party', 'external', 'plugin'
      ],
      'monitoring': [
        'monitor', 'alert', 'notification', 'dashboard', 'report',
        'analytics', 'metrics', 'logging', 'audit'
      ],
      'administration': [
        'admin', 'manage', 'user', 'role', 'permission', 'access',
        'account', 'group', 'organization', 'tenant'
      ],
      'deployment': [
        'deploy', 'install', 'upgrade', 'migration', 'rollout',
        'implementation', 'provisioning', 'scaling'
      ]
    };
  }

  initializeComplexityIndicators() {
    return {
      beginner: {
        keywords: ['overview', 'introduction', 'getting started', 'basic', 'simple'],
        technicalTerms: 5,
        codeBlocks: 2,
        steps: 10
      },
      intermediate: {
        keywords: ['configure', 'customize', 'advanced', 'detailed'],
        technicalTerms: 15,
        codeBlocks: 5,
        steps: 20
      },
      advanced: {
        keywords: ['architecture', 'implementation', 'development', 'api', 'integration'],
        technicalTerms: 25,
        codeBlocks: 10,
        steps: 30
      }
    };
  }

  initializeAudienceIndicators() {
    return {
      'end-user': [
        'user', 'click', 'button', 'interface', 'screen', 'menu',
        'dashboard', 'view', 'navigate', 'access'
      ],
      'administrator': [
        'admin', 'configure', 'manage', 'policy', 'setting', 'control',
        'permission', 'role', 'organization', 'deployment'
      ],
      'developer': [
        'api', 'code', 'function', 'method', 'class', 'library',
        'framework', 'sdk', 'integration', 'development'
      ],
      'security-analyst': [
        'threat', 'vulnerability', 'incident', 'investigation', 'forensics',
        'analysis', 'detection', 'response', 'hunting', 'intelligence'
      ]
    };
  }

  /**
   * Analyze content and extract comprehensive metadata
   */
  async analyzeContent(content, filename = 'unknown') {
    console.log(chalk.blue(`🔍 Analyzing content: ${filename}`));
    
    const analysis = {
      filename,
      timestamp: new Date().toISOString(),
      content: {
        wordCount: this.countWords(content),
        readingTime: this.calculateReadingTime(content),
        structure: this.analyzeStructure(content)
      },
      topics: await this.extractTopics(content),
      complexity: await this.determineComplexity(content),
      audience: await this.identifyAudience(content),
      tags: await this.generateTags(content),
      quality: await this.qualityAnalyzer.analyzeContent(content, { filename }),
      aiOptimization: await this.generateAIOptimization(content)
    };

    return analysis;
  }

  /**
   * Extract topics from content using keyword analysis
   */
  async extractTopics(content) {
    const topics = [];
    const contentLower = content.toLowerCase();
    
    for (const [topic, keywords] of Object.entries(this.topicKeywords)) {
      let score = 0;
      let matchedKeywords = [];
      
      for (const keyword of keywords) {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        const matches = content.match(regex) || [];
        if (matches.length > 0) {
          score += matches.length;
          matchedKeywords.push(keyword);
        }
      }
      
      if (score > 0) {
        topics.push({
          topic,
          score,
          confidence: Math.min(1, score / 10), // Normalize to 0-1
          keywords: matchedKeywords.slice(0, 5) // Top 5 matched keywords
        });
      }
    }
    
    // Sort by score and return top topics
    return topics
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  /**
   * Determine content complexity level
   */
  async determineComplexity(content) {
    const metrics = {
      technicalTerms: this.countTechnicalTerms(content),
      codeBlocks: (content.match(/```[\s\S]*?```/g) || []).length,
      steps: this.countSteps(content),
      wordCount: this.countWords(content),
      headingDepth: this.getMaxHeadingDepth(content)
    };
    
    let complexityScore = 0;
    let level = 'beginner';
    
    // Score based on technical terms
    if (metrics.technicalTerms > 25) complexityScore += 3;
    else if (metrics.technicalTerms > 15) complexityScore += 2;
    else if (metrics.technicalTerms > 5) complexityScore += 1;
    
    // Score based on code blocks
    if (metrics.codeBlocks > 10) complexityScore += 3;
    else if (metrics.codeBlocks > 5) complexityScore += 2;
    else if (metrics.codeBlocks > 2) complexityScore += 1;
    
    // Score based on steps
    if (metrics.steps > 30) complexityScore += 3;
    else if (metrics.steps > 20) complexityScore += 2;
    else if (metrics.steps > 10) complexityScore += 1;
    
    // Score based on word count
    if (metrics.wordCount > 2000) complexityScore += 2;
    else if (metrics.wordCount > 1000) complexityScore += 1;
    
    // Score based on heading depth
    if (metrics.headingDepth > 4) complexityScore += 2;
    else if (metrics.headingDepth > 3) complexityScore += 1;
    
    // Check for complexity keywords
    for (const [levelName, indicators] of Object.entries(this.complexityIndicators)) {
      for (const keyword of indicators.keywords) {
        if (content.toLowerCase().includes(keyword)) {
          if (levelName === 'advanced') complexityScore += 2;
          else if (levelName === 'intermediate') complexityScore += 1;
        }
      }
    }
    
    // Determine final level
    if (complexityScore >= 8) level = 'advanced';
    else if (complexityScore >= 4) level = 'intermediate';
    else level = 'beginner';
    
    return {
      level,
      score: complexityScore,
      metrics,
      confidence: Math.min(1, complexityScore / 12) // Normalize to 0-1
    };
  }

  /**
   * Identify target audience
   */
  async identifyAudience(content) {
    const audiences = [];
    const contentLower = content.toLowerCase();
    
    for (const [audienceType, keywords] of Object.entries(this.audienceIndicators)) {
      let score = 0;
      let matchedKeywords = [];
      
      for (const keyword of keywords) {
        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
        const matches = content.match(regex) || [];
        if (matches.length > 0) {
          score += matches.length;
          matchedKeywords.push(keyword);
        }
      }
      
      if (score > 0) {
        audiences.push({
          type: audienceType,
          score,
          confidence: Math.min(1, score / 15), // Normalize to 0-1
          keywords: matchedKeywords.slice(0, 3)
        });
      }
    }
    
    // Sort by score and return primary audience
    const sortedAudiences = audiences.sort((a, b) => b.score - a.score);
    
    return {
      primary: sortedAudiences[0] || { type: 'general', score: 0, confidence: 0 },
      secondary: sortedAudiences.slice(1, 3),
      all: sortedAudiences
    };
  }

  /**
   * Generate comprehensive tags
   */
  async generateTags(content) {
    const tags = new Set();
    
    // Add topic-based tags
    const topics = await this.extractTopics(content);
    topics.forEach(topic => {
      if (topic.confidence > 0.3) {
        tags.add(topic.topic);
      }
    });
    
    // Add complexity tags
    const complexity = await this.determineComplexity(content);
    tags.add(complexity.level);
    
    // Add audience tags
    const audience = await this.identifyAudience(content);
    if (audience.primary.confidence > 0.3) {
      tags.add(audience.primary.type);
    }
    
    // Add content type tags
    if (content.includes('## Prerequisites') || content.includes('# Prerequisites')) {
      tags.add('tutorial');
    }
    if (content.includes('troubleshoot') || content.includes('error')) {
      tags.add('troubleshooting');
    }
    if (content.includes('api') || content.includes('```')) {
      tags.add('technical');
    }
    if (content.includes('overview') || content.includes('introduction')) {
      tags.add('overview');
    }
    
    // Always include base tags
    tags.add('trend-vision-one');
    tags.add('documentation');
    
    return Array.from(tags).slice(0, 10); // Limit to 10 tags
  }

  /**
   * Generate AI optimization metadata
   */
  async generateAIOptimization(content) {
    const optimization = {
      aiOptimized: true,
      optimizationScore: 0,
      features: [],
      suggestions: []
    };
    
    // Check for structured content
    if (content.includes('## ') || content.includes('### ')) {
      optimization.features.push('structured-headings');
      optimization.optimizationScore += 0.2;
    }
    
    // Check for code examples
    if (content.includes('```')) {
      optimization.features.push('code-examples');
      optimization.optimizationScore += 0.15;
    }
    
    // Check for lists
    if (content.includes('- ') || content.includes('1. ')) {
      optimization.features.push('structured-lists');
      optimization.optimizationScore += 0.1;
    }
    
    // Check for frontmatter
    if (content.startsWith('---')) {
      optimization.features.push('frontmatter-metadata');
      optimization.optimizationScore += 0.2;
    }
    
    // Check for internal links
    if (content.includes('](') && !content.includes('](http')) {
      optimization.features.push('internal-links');
      optimization.optimizationScore += 0.15;
    }
    
    // Generate suggestions for improvement
    if (!content.includes('## ')) {
      optimization.suggestions.push('Add structured headings for better organization');
    }
    if (!content.includes('```')) {
      optimization.suggestions.push('Add code examples or configuration snippets');
    }
    if (!content.startsWith('---')) {
      optimization.suggestions.push('Add frontmatter metadata for better categorization');
    }
    
    optimization.optimizationScore = Math.min(1, optimization.optimizationScore);
    
    return optimization;
  }

  /**
   * Generate enhanced frontmatter
   */
  generateEnhancedFrontmatter(analysis, existingFrontmatter = {}) {
    const enhanced = {
      ...existingFrontmatter,
      // Core metadata
      title: existingFrontmatter.title || this.generateTitle(analysis),
      description: existingFrontmatter.description || this.generateDescription(analysis),
      
      // AI-generated metadata
      tags: analysis.tags,
      category: analysis.topics[0]?.topic || 'general',
      audience: analysis.audience.primary.type,
      complexity: analysis.complexity.level,
      
      // Content metrics
      wordCount: analysis.content.wordCount,
      readingTime: analysis.content.readingTime,
      
      // AI optimization
      aiOptimized: analysis.aiOptimization.aiOptimized,
      optimizationScore: Math.round(analysis.aiOptimization.optimizationScore * 100),
      
      // Quality metrics
      qualityScore: Math.round(analysis.quality.overallScore * 100),
      
      // Timestamps
      lastAnalyzed: analysis.timestamp,
      lastUpdated: existingFrontmatter.lastUpdated || new Date().toISOString()
    };
    
    return enhanced;
  }

  /**
   * Process a single document file
   */
  async processDocument(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const matter = grayMatter(content);
      
      // Analyze content
      const analysis = await this.analyzeContent(matter.content, path.basename(filePath));
      
      // Generate enhanced frontmatter
      const enhancedFrontmatter = this.generateEnhancedFrontmatter(analysis, matter.data);
      
      // Create enhanced content
      const enhancedContent = grayMatter.stringify(matter.content, enhancedFrontmatter);
      
      return {
        filePath,
        analysis,
        enhancedFrontmatter,
        enhancedContent,
        originalWordCount: matter.content.split(/\s+/).length,
        success: true
      };
      
    } catch (error) {
      return {
        filePath,
        error: error.message,
        success: false
      };
    }
  }

  /**
   * Batch process all documents in a directory
   */
  async batchProcessDocuments(docsDir, options = {}) {
    const {
      dryRun = false,
      filePattern = '*.md',
      maxFiles = null,
      outputReport = true
    } = options;
    
    console.log(chalk.blue('🚀 Starting batch metadata enhancement...'));
    console.log(chalk.gray(`Directory: ${docsDir}`));
    console.log(chalk.gray(`Dry run: ${dryRun ? 'Yes' : 'No'}`));
    
    // Get all markdown files
    const files = fs.readdirSync(docsDir)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(docsDir, file));
    
    if (maxFiles) {
      files.splice(maxFiles);
    }
    
    console.log(chalk.cyan(`Found ${files.length} documents to process`));
    
    const results = {
      processed: [],
      errors: [],
      summary: {
        totalFiles: files.length,
        successCount: 0,
        errorCount: 0,
        startTime: new Date().toISOString()
      }
    };
    
    // Process files in batches
    const BATCH_SIZE = 10;
    for (let i = 0; i < files.length; i += BATCH_SIZE) {
      const batch = files.slice(i, i + BATCH_SIZE);
      console.log(chalk.yellow(`Processing batch ${Math.floor(i/BATCH_SIZE) + 1}/${Math.ceil(files.length/BATCH_SIZE)}...`));
      
      for (const file of batch) {
        const result = await this.processDocument(file);
        
        if (result.success) {
          results.processed.push(result);
          results.summary.successCount++;
          
          // Write enhanced content if not dry run
          if (!dryRun) {
            fs.writeFileSync(file, result.enhancedContent, 'utf8');
          }
          
          console.log(chalk.green(`  ✅ ${path.basename(file)} (Quality: ${result.analysis.quality.overallScore.toFixed(2)})`));
        } else {
          results.errors.push(result);
          results.summary.errorCount++;
          console.log(chalk.red(`  ❌ ${path.basename(file)}: ${result.error}`));
        }
      }
    }
    
    results.summary.endTime = new Date().toISOString();
    results.summary.duration = new Date(results.summary.endTime) - new Date(results.summary.startTime);
    
    // Generate report
    if (outputReport) {
      await this.generateBatchReport(results, docsDir);
    }
    
    this.displayBatchSummary(results);
    
    return results;
  }

  /**
   * Generate comprehensive batch processing report
   */
  async generateBatchReport(results, docsDir) {
    const reportPath = path.join(path.dirname(docsDir), 'metadata-enhancement-report.json');
    
    const report = {
      summary: results.summary,
      qualityDistribution: this.analyzeQualityDistribution(results.processed),
      topicDistribution: this.analyzeTopicDistribution(results.processed),
      complexityDistribution: this.analyzeComplexityDistribution(results.processed),
      audienceDistribution: this.analyzeAudienceDistribution(results.processed),
      recommendations: this.generateBatchRecommendations(results.processed),
      errors: results.errors.map(e => ({ file: e.filePath, error: e.error }))
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
    console.log(chalk.cyan(`📊 Detailed report saved to: ${reportPath}`));
    
    return report;
  }

  // Helper methods
  countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = this.countWords(content);
    return Math.ceil(wordCount / wordsPerMinute);
  }

  analyzeStructure(content) {
    const headings = content.match(/^#+\s+.+$/gm) || [];
    const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
    const lists = content.match(/^[\s]*[-*+]\s+/gm) || [];
    
    return {
      headingCount: headings.length,
      codeBlockCount: codeBlocks.length,
      listCount: lists.length,
      maxHeadingDepth: this.getMaxHeadingDepth(content)
    };
  }

  countTechnicalTerms(content) {
    const technicalTerms = [
      'API', 'SDK', 'JSON', 'XML', 'HTTP', 'HTTPS', 'REST', 'SOAP',
      'authentication', 'authorization', 'encryption', 'algorithm',
      'database', 'server', 'client', 'endpoint', 'webhook', 'token'
    ];
    
    let count = 0;
    for (const term of technicalTerms) {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      const matches = content.match(regex) || [];
      count += matches.length;
    }
    
    return count;
  }

  countSteps(content) {
    const numberedSteps = content.match(/^\s*\d+\.\s+/gm) || [];
    const bulletSteps = content.match(/^\s*[-*+]\s+/gm) || [];
    return numberedSteps.length + bulletSteps.length;
  }

  getMaxHeadingDepth(content) {
    const headings = content.match(/^#+/gm) || [];
    return Math.max(...headings.map(h => h.length), 0);
  }

  generateTitle(analysis) {
    const primaryTopic = analysis.topics[0]?.topic || 'Documentation';
    const complexity = analysis.complexity.level;
    
    return `${primaryTopic.charAt(0).toUpperCase() + primaryTopic.slice(1)} Guide`;
  }

  generateDescription(analysis) {
    const primaryTopic = analysis.topics[0]?.topic || 'feature';
    const audience = analysis.audience.primary.type;
    const complexity = analysis.complexity.level;
    
    return `${complexity.charAt(0).toUpperCase() + complexity.slice(1)} guide for ${audience}s covering ${primaryTopic} functionality.`;
  }

  analyzeQualityDistribution(processed) {
    const distribution = { excellent: 0, good: 0, fair: 0, poor: 0, critical: 0 };
    
    processed.forEach(result => {
      const score = result.analysis.quality.overallScore;
      if (score >= 0.9) distribution.excellent++;
      else if (score >= 0.8) distribution.good++;
      else if (score >= 0.7) distribution.fair++;
      else if (score >= 0.6) distribution.poor++;
      else distribution.critical++;
    });
    
    return distribution;
  }

  analyzeTopicDistribution(processed) {
    const topics = {};
    
    processed.forEach(result => {
      result.analysis.topics.forEach(topic => {
        topics[topic.topic] = (topics[topic.topic] || 0) + 1;
      });
    });
    
    return Object.entries(topics)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10);
  }

  analyzeComplexityDistribution(processed) {
    const distribution = { beginner: 0, intermediate: 0, advanced: 0 };
    
    processed.forEach(result => {
      distribution[result.analysis.complexity.level]++;
    });
    
    return distribution;
  }

  analyzeAudienceDistribution(processed) {
    const audiences = {};
    
    processed.forEach(result => {
      const audience = result.analysis.audience.primary.type;
      audiences[audience] = (audiences[audience] || 0) + 1;
    });
    
    return Object.entries(audiences)
      .sort(([,a], [,b]) => b - a);
  }

  generateBatchRecommendations(processed) {
    const recommendations = [];
    
    // Quality recommendations
    const lowQuality = processed.filter(r => r.analysis.quality.overallScore < 0.7);
    if (lowQuality.length > 0) {
      recommendations.push({
        type: 'quality',
        priority: 'high',
        message: `${lowQuality.length} documents have quality scores below 70% and need improvement`,
        files: lowQuality.map(r => path.basename(r.filePath)).slice(0, 5)
      });
    }
    
    // Missing metadata recommendations
    const missingMetadata = processed.filter(r => 
      !r.enhancedFrontmatter.description || r.enhancedFrontmatter.tags.length < 3
    );
    if (missingMetadata.length > 0) {
      recommendations.push({
        type: 'metadata',
        priority: 'medium',
        message: `${missingMetadata.length} documents need better metadata coverage`
      });
    }
    
    return recommendations;
  }

  displayBatchSummary(results) {
    console.log(chalk.blue('\n📊 Batch Processing Summary'));
    console.log(chalk.gray('=' .repeat(40)));
    
    console.log(`${chalk.bold('Total Files:')} ${results.summary.totalFiles}`);
    console.log(`${chalk.green('✅ Successful:')} ${results.summary.successCount}`);
    console.log(`${chalk.red('❌ Errors:')} ${results.summary.errorCount}`);
    
    const duration = Math.round(results.summary.duration / 1000);
    console.log(`${chalk.cyan('⏱️  Duration:')} ${duration}s`);
    
    if (results.summary.successCount > 0) {
      const avgQuality = results.processed.reduce((sum, r) => 
        sum + r.analysis.quality.overallScore, 0) / results.processed.length;
      console.log(`${chalk.yellow('📈 Avg Quality:')} ${Math.round(avgQuality * 100)}%`);
    }
    
    console.log(chalk.green('\n✅ Metadata enhancement complete!'));
  }
}

// CLI interface
async function main() {
  const engine = new MetadataEnhancementEngine();
  
  console.log(chalk.blue('🤖 AI-Powered Metadata Enhancement Engine'));
  console.log(chalk.gray('Automatically enhance documentation metadata with AI analysis\n'));
  
  const docsDir = path.resolve(__dirname, '..', 'docs');
  
  if (!fs.existsSync(docsDir)) {
    console.error(chalk.red(`❌ Docs directory not found: ${docsDir}`));
    process.exit(1);
  }
  
  try {
    const results = await engine.batchProcessDocuments(docsDir, {
      dryRun: process.argv.includes('--dry-run'),
      maxFiles: process.argv.includes('--test') ? 5 : null
    });
    
    console.log(chalk.green('\n🎉 All done! Check the generated report for detailed insights.'));
    
  } catch (error) {
    console.error(chalk.red('❌ Enhancement failed:'), error.message);
    process.exit(1);
  }
}

// Export for use as module
module.exports = MetadataEnhancementEngine;

// Run CLI if called directly
if (require.main === module) {
  main();
}