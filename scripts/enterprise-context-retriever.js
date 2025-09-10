#!/usr/bin/env node

/**
 * Enterprise Smart Context Retriever
 * 
 * Handles THOUSANDS of documentation files efficiently.
 * Solves the "AI needs to understand existing docs" problem at enterprise scale.
 * 
 * Key Features:
 * 1. Fast SQL-based queries across thousands of documents
 * 2. Semantic similarity search using topic analysis
 * 3. Intelligent context selection within token limits
 * 4. Hierarchical content understanding
 * 5. Real-time relevance scoring
 * 
 * This provides the AI with the most relevant context from a massive corpus.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const Database = require('better-sqlite3');

class EnterpriseContextRetriever {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.indexDir = path.join(this.projectRoot, '.enterprise-index');
    this.dbPath = path.join(this.indexDir, 'docs.db');
    
    this.db = null;
    this.loadDatabase();
  }

  loadDatabase() {
    if (!fs.existsSync(this.dbPath)) {
      throw new Error('Enterprise index not found. Run: node scripts/enterprise-doc-indexer.js');
    }
    
    this.db = new Database(this.dbPath, { readonly: true });
    
    // Verify database structure
    const tableCount = this.db.prepare(`
      SELECT COUNT(*) as count FROM sqlite_master WHERE type='table'
    `).get();
    
    if (tableCount.count < 5) {
      throw new Error('Invalid database structure. Please rebuild the index.');
    }
    
    console.log(chalk.green('✅ Enterprise database loaded'));
  }

  /**
   * Main method: Get smart context for thousands of documents
   * Optimized for enterprise scale with fast SQL queries
   */
  async getEnterpriseContext(featureDescription, options = {}) {
    const {
      maxTokens = 50000,           // ~37,500 words
      maxDocuments = 50,           // Limit documents for performance
      includeChunks = true,        // Include document chunks for large docs
      includeSummaries = true,     // Include hierarchical summaries
      minRelevanceScore = 0.1      // Minimum relevance threshold
    } = options;

    console.log(chalk.blue('🏢 Enterprise Context Analysis - Thousands of Documents\\n'));

    const startTime = Date.now();

    // Step 1: Analyze feature description
    const featureAnalysis = this.analyzeFeatureDescription(featureDescription);
    console.log(chalk.cyan(`📝 Extracted ${featureAnalysis.topics.length} topics from feature description`));

    // Step 2: Fast topic-based document retrieval
    const relevantDocs = await this.findRelevantDocumentsFast(featureAnalysis, maxDocuments);
    console.log(chalk.cyan(`📄 Found ${relevantDocs.length} relevant documents (from thousands)`));

    // Step 3: Get document chunks for large documents
    const relevantChunks = includeChunks ? 
      await this.getRelevantChunks(relevantDocs, featureAnalysis) : [];
    console.log(chalk.cyan(`📝 Retrieved ${relevantChunks.length} relevant document chunks`));

    // Step 4: Get hierarchical summaries
    const summaries = includeSummaries ? 
      await this.getHierarchicalSummaries(featureAnalysis) : {};
    console.log(chalk.cyan(`📊 Retrieved ${Object.keys(summaries).length} hierarchical summaries`));

    // Step 5: Analyze content gaps at enterprise scale
    const gapAnalysis = await this.analyzeEnterpriseContentGaps(featureAnalysis, relevantDocs);
    console.log(chalk.cyan(`🔍 Identified ${gapAnalysis.gaps.length} content gaps`));

    // Step 6: Generate placement recommendations
    const recommendations = await this.generateEnterpriseRecommendations(
      featureAnalysis, relevantDocs, gapAnalysis
    );
    console.log(chalk.cyan(`💡 Generated ${recommendations.length} placement recommendations`));

    // Step 7: Build optimized context within token limits
    const context = this.buildEnterpriseContext({
      featureAnalysis,
      relevantDocs,
      relevantChunks,
      summaries,
      gapAnalysis,
      recommendations,
      maxTokens
    });

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log(chalk.green(`\\n✅ Enterprise context ready in ${duration}s (${context.estimatedTokens} tokens)`));
    
    return context;
  }

  analyzeFeatureDescription(description) {
    // Extract semantic information from feature description
    const topics = this.extractTopics(description);
    const keywords = this.extractKeywords(description);
    const entities = this.extractTrendEntities(description);
    const featureType = this.classifyFeatureType(description);
    const audience = this.identifyAudience(description);

    return {
      description,
      topics,
      keywords,
      entities,
      featureType,
      audience,
      wordCount: this.countWords(description)
    };
  }

  async findRelevantDocumentsFast(featureAnalysis, maxResults) {
    // Use SQL for fast retrieval across thousands of documents
    const topicPlaceholders = featureAnalysis.topics.map(() => '?').join(',');
    
    if (featureAnalysis.topics.length === 0) {
      // Fallback: get documents by feature type and audience
      return this.db.prepare(`
        SELECT d.*, 
               0.5 as relevance_score,
               'feature_type_match' as relevance_reason
        FROM documents d
        WHERE d.doc_type = ? OR d.audience = ?
        ORDER BY d.last_modified DESC
        LIMIT ?
      `).all(featureAnalysis.featureType, featureAnalysis.audience, maxResults);
    }

    // Fast topic-based relevance query
    const relevantDocs = this.db.prepare(`
      SELECT d.*,
             COUNT(DISTINCT dt.topic_id) as topic_matches,
             AVG(dt.relevance_score) as avg_relevance,
             GROUP_CONCAT(DISTINCT t.name) as matched_topics,
             (COUNT(DISTINCT dt.topic_id) * 1.0 / ?) as relevance_score
      FROM documents d
      JOIN document_topics dt ON d.id = dt.document_id
      JOIN topics t ON dt.topic_id = t.id
      WHERE t.name IN (${topicPlaceholders})
      GROUP BY d.id
      HAVING relevance_score >= 0.1
      ORDER BY relevance_score DESC, topic_matches DESC, d.last_modified DESC
      LIMIT ?
    `).all(featureAnalysis.topics.length, ...featureAnalysis.topics, maxResults);

    // Add relevance explanations
    return relevantDocs.map(doc => ({
      ...doc,
      relevanceReasons: [
        `${doc.topic_matches} topic matches: ${doc.matched_topics}`,
        `Relevance score: ${(doc.relevance_score * 100).toFixed(1)}%`
      ]
    }));
  }

  async getRelevantChunks(relevantDocs, featureAnalysis, maxChunks = 20) {
    if (relevantDocs.length === 0) return [];

    const docIds = relevantDocs.map(doc => doc.id);
    const docPlaceholders = docIds.map(() => '?').join(',');

    // Get chunks from relevant documents, prioritizing by heading relevance
    const chunks = this.db.prepare(`
      SELECT dc.*,
             d.title as document_title,
             d.path as document_path
      FROM document_chunks dc
      JOIN documents d ON dc.document_id = d.id
      WHERE dc.document_id IN (${docPlaceholders})
      ORDER BY dc.word_count DESC
      LIMIT ?
    `).all(...docIds, maxChunks);

    // Score chunks by topic relevance
    return chunks.map(chunk => ({
      ...chunk,
      relevanceScore: this.scoreChunkRelevance(chunk, featureAnalysis)
    })).sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  scoreChunkRelevance(chunk, featureAnalysis) {
    const chunkText = (chunk.heading + ' ' + chunk.content).toLowerCase();
    let score = 0;

    // Topic matches
    featureAnalysis.topics.forEach(topic => {
      if (chunkText.includes(topic.toLowerCase())) {
        score += 0.3;
      }
    });

    // Entity matches
    featureAnalysis.entities.forEach(entity => {
      if (chunkText.includes(entity.toLowerCase())) {
        score += 0.4;
      }
    });

    // Keyword matches
    featureAnalysis.keywords.forEach(keyword => {
      if (chunkText.includes(keyword.toLowerCase())) {
        score += 0.2;
      }
    });

    return Math.min(score, 1.0);
  }

  async getHierarchicalSummaries(featureAnalysis) {
    const summaries = {};

    // Get site-level summary
    const siteSummary = this.db.prepare(`
      SELECT * FROM summaries WHERE level = 'site' LIMIT 1
    `).get();
    
    if (siteSummary) {
      summaries.site = siteSummary;
    }

    // Get relevant section summaries
    const sectionSummaries = this.db.prepare(`
      SELECT s.* FROM summaries s
      WHERE s.level = 'section'
      ORDER BY s.document_count DESC
      LIMIT 10
    `).all();

    summaries.sections = sectionSummaries;

    // Get topic-based summaries if they exist
    if (featureAnalysis.topics.length > 0) {
      const topicSummaries = this.db.prepare(`
        SELECT s.* FROM summaries s
        WHERE s.level = 'topic' AND s.name IN (${featureAnalysis.topics.map(() => '?').join(',')})
        LIMIT 5
      `).all(...featureAnalysis.topics);

      summaries.topics = topicSummaries;
    }

    return summaries;
  }

  async analyzeEnterpriseContentGaps(featureAnalysis, relevantDocs) {
    const gaps = [];
    const overlaps = [];

    // Find topics not well covered in existing documentation
    for (const topic of featureAnalysis.topics) {
      const topicCoverage = this.db.prepare(`
        SELECT COUNT(DISTINCT d.id) as doc_count,
               AVG(dt.relevance_score) as avg_relevance
        FROM topics t
        JOIN document_topics dt ON t.id = dt.topic_id
        JOIN documents d ON dt.document_id = d.id
        WHERE t.name = ?
      `).get(topic);

      if (topicCoverage.doc_count === 0) {
        gaps.push({
          type: 'missing_topic',
          topic: topic,
          severity: 'high',
          description: `No existing documentation covers "${topic}"`
        });
      } else if (topicCoverage.doc_count < 3) {
        gaps.push({
          type: 'under_documented',
          topic: topic,
          severity: 'medium',
          description: `Only ${topicCoverage.doc_count} documents cover "${topic}"`,
          coverage: topicCoverage.doc_count
        });
      }
    }

    // Find potential content overlaps
    const highOverlapDocs = relevantDocs.filter(doc => doc.relevance_score > 0.7);
    if (highOverlapDocs.length > 3) {
      overlaps.push({
        type: 'high_overlap_risk',
        documents: highOverlapDocs.slice(0, 5),
        description: `${highOverlapDocs.length} documents have high topic overlap`
      });
    }

    // Analyze section coverage
    const sectionCoverage = this.db.prepare(`
      SELECT section, COUNT(*) as doc_count
      FROM documents
      GROUP BY section
      ORDER BY doc_count DESC
    `).all();

    const underRepresentedSections = sectionCoverage.filter(s => s.doc_count < 5);
    underRepresentedSections.forEach(section => {
      gaps.push({
        type: 'section_gap',
        section: section.section,
        severity: 'low',
        description: `Section "${section.section}" has only ${section.doc_count} documents`
      });
    });

    return {
      gaps,
      overlaps,
      summary: `Found ${gaps.length} content gaps and ${overlaps.length} overlap risks across enterprise documentation`
    };
  }

  async generateEnterpriseRecommendations(featureAnalysis, relevantDocs, gapAnalysis) {
    const recommendations = [];

    // Section placement recommendations based on existing content
    const sectionAnalysis = this.db.prepare(`
      SELECT d.section,
             COUNT(*) as doc_count,
             AVG(CASE WHEN dt.document_id IS NOT NULL THEN 1 ELSE 0 END) as topic_relevance
      FROM documents d
      LEFT JOIN document_topics dt ON d.id = dt.document_id
      LEFT JOIN topics t ON dt.topic_id = t.id AND t.name IN (${featureAnalysis.topics.map(() => '?').join(',')})
      GROUP BY d.section
      HAVING topic_relevance > 0
      ORDER BY topic_relevance DESC, doc_count DESC
      LIMIT 5
    `).all(...featureAnalysis.topics);

    sectionAnalysis.forEach(section => {
      recommendations.push({
        type: 'section_placement',
        section: section.section,
        score: section.topic_relevance,
        reasoning: `Section "${section.section}" has ${section.doc_count} documents with relevant topics`,
        confidence: section.topic_relevance > 0.5 ? 'high' : 'medium'
      });
    });

    // Document update recommendations
    const highRelevanceDocs = relevantDocs.filter(doc => doc.relevance_score > 0.6);
    highRelevanceDocs.slice(0, 5).forEach(doc => {
      recommendations.push({
        type: 'document_update',
        document: {
          id: doc.id,
          title: doc.title,
          path: doc.path,
          relevanceScore: doc.relevance_score
        },
        updateType: doc.relevance_score > 0.8 ? 'major_update' : 'section_addition',
        reasoning: `High relevance (${(doc.relevance_score * 100).toFixed(0)}%) suggests updating this document`
      });
    });

    // Gap-based recommendations
    const highSeverityGaps = gapAnalysis.gaps.filter(gap => gap.severity === 'high');
    highSeverityGaps.forEach(gap => {
      recommendations.push({
        type: 'new_content',
        topic: gap.topic,
        priority: 'high',
        reasoning: gap.description,
        suggestedSection: this.suggestSectionForTopic(gap.topic)
      });
    });

    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      const aPriority = priorityOrder[a.priority] || priorityOrder[a.confidence] || 1;
      const bPriority = priorityOrder[b.priority] || priorityOrder[b.confidence] || 1;
      return bPriority - aPriority;
    });
  }

  suggestSectionForTopic(topic) {
    // Simple heuristic for section suggestion
    const topicLower = topic.toLowerCase();
    
    if (topicLower.includes('api') || topicLower.includes('integration')) {
      return 'api-reference';
    }
    if (topicLower.includes('alert') || topicLower.includes('threat') || topicLower.includes('security')) {
      return 'threat-detection';
    }
    if (topicLower.includes('report') || topicLower.includes('dashboard') || topicLower.includes('analytics')) {
      return 'analytics';
    }
    if (topicLower.includes('config') || topicLower.includes('admin') || topicLower.includes('setup')) {
      return 'administration';
    }
    if (topicLower.includes('troubleshoot') || topicLower.includes('error') || topicLower.includes('issue')) {
      return 'troubleshooting';
    }
    
    return 'user-guide';
  }

  buildEnterpriseContext({ featureAnalysis, relevantDocs, relevantChunks, summaries, gapAnalysis, recommendations, maxTokens }) {
    const context = {
      enterpriseOverview: this.generateEnterpriseOverview(summaries),
      featureAnalysis: {
        topics: featureAnalysis.topics,
        entities: featureAnalysis.entities,
        featureType: featureAnalysis.featureType,
        audience: featureAnalysis.audience
      },
      relevantDocuments: [],
      relevantChunks: [],
      contentGaps: gapAnalysis,
      recommendations: recommendations,
      estimatedTokens: 0
    };

    // Calculate base token usage
    let currentTokens = this.estimateTokens(JSON.stringify({
      enterpriseOverview: context.enterpriseOverview,
      featureAnalysis: context.featureAnalysis,
      contentGaps: context.contentGaps,
      recommendations: context.recommendations
    }));

    // Reserve tokens for chunks and documents
    const remainingTokens = maxTokens - currentTokens - 2000; // Reserve 2k tokens
    const tokensForDocs = Math.floor(remainingTokens * 0.6);
    const tokensForChunks = Math.floor(remainingTokens * 0.4);

    // Add documents within token budget
    let docTokens = 0;
    for (const doc of relevantDocs) {
      const docContext = this.createEnterpriseDocContext(doc);
      const docTokenEstimate = this.estimateTokens(JSON.stringify(docContext));
      
      if (docTokens + docTokenEstimate <= tokensForDocs) {
        context.relevantDocuments.push(docContext);
        docTokens += docTokenEstimate;
      } else {
        break;
      }
    }

    // Add chunks within token budget
    let chunkTokens = 0;
    for (const chunk of relevantChunks) {
      const chunkContext = this.createChunkContext(chunk);
      const chunkTokenEstimate = this.estimateTokens(JSON.stringify(chunkContext));
      
      if (chunkTokens + chunkTokenEstimate <= tokensForChunks) {
        context.relevantChunks.push(chunkContext);
        chunkTokens += chunkTokenEstimate;
      } else {
        break;
      }
    }

    context.estimatedTokens = currentTokens + docTokens + chunkTokens;
    context.documentsIncluded = context.relevantDocuments.length;
    context.chunksIncluded = context.relevantChunks.length;
    context.documentsSkipped = relevantDocs.length - context.relevantDocuments.length;
    context.chunksSkipped = relevantChunks.length - context.relevantChunks.length;

    return context;
  }

  generateEnterpriseOverview(summaries) {
    const overview = {
      scale: 'enterprise',
      totalDocuments: 'thousands'
    };

    if (summaries.site) {
      overview.siteInfo = {
        summary: summaries.site.summary,
        documentCount: summaries.site.document_count,
        keyTopics: JSON.parse(summaries.site.key_topics || '[]').slice(0, 10)
      };
    }

    if (summaries.sections) {
      overview.sections = summaries.sections.map(section => ({
        name: section.name,
        documentCount: section.document_count,
        summary: section.summary
      }));
    }

    return overview;
  }

  createEnterpriseDocContext(doc) {
    return {
      id: doc.id,
      title: doc.title,
      path: doc.path,
      description: doc.description,
      section: doc.section,
      docType: doc.doc_type,
      audience: doc.audience,
      wordCount: doc.word_count,
      relevanceScore: doc.relevance_score,
      relevanceReasons: doc.relevanceReasons,
      lastModified: doc.last_modified,
      topicMatches: doc.topic_matches,
      matchedTopics: doc.matched_topics ? doc.matched_topics.split(',') : []
    };
  }

  createChunkContext(chunk) {
    return {
      id: chunk.id,
      documentTitle: chunk.document_title,
      documentPath: chunk.document_path,
      heading: chunk.heading,
      content: chunk.content.substring(0, 500) + (chunk.content.length > 500 ? '...' : ''),
      wordCount: chunk.word_count,
      relevanceScore: chunk.relevanceScore
    };
  }

  // Utility methods
  extractTopics(text) {
    const topics = new Set();
    
    const words = text.toLowerCase()
      .replace(/[^a-z0-9\\s]/g, ' ')
      .split(/\\s+/)
      .filter(word => word.length > 3)
      .filter(word => !this.isStopWord(word));
    
    words.forEach(word => topics.add(word));
    
    // Extract compound terms
    const phrases = text.match(/\\b[a-z]+\\s+[a-z]+\\b/gi) || [];
    phrases.forEach(phrase => {
      if (phrase.length > 6) {
        topics.add(phrase.toLowerCase());
      }
    });
    
    return Array.from(topics).slice(0, 20);
  }

  extractKeywords(text) {
    return this.extractTopics(text).slice(0, 10);
  }

  extractTrendEntities(text) {
    const entities = new Set();
    const lowerText = text.toLowerCase();
    
    const trendEntities = [
      'vision one', 'trend micro', 'xdr', 'siem', 'soar',
      'endpoint', 'network', 'email', 'cloud', 'server',
      'alert', 'incident', 'threat', 'malware', 'ransomware',
      'api', 'integration', 'connector', 'webhook', 'syslog',
      'dashboard', 'report', 'analytics', 'investigation',
      'detection', 'response', 'automation', 'playbook'
    ];
    
    trendEntities.forEach(entity => {
      if (lowerText.includes(entity)) {
        entities.add(entity);
      }
    });
    
    return Array.from(entities);
  }

  classifyFeatureType(text) {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('alert') || lowerText.includes('detection') || lowerText.includes('threat')) {
      return 'security';
    }
    if (lowerText.includes('report') || lowerText.includes('dashboard') || lowerText.includes('analytics')) {
      return 'analytics';
    }
    if (lowerText.includes('api') || lowerText.includes('integration') || lowerText.includes('connector')) {
      return 'integration';
    }
    if (lowerText.includes('config') || lowerText.includes('setting') || lowerText.includes('admin')) {
      return 'configuration';
    }
    if (lowerText.includes('ui') || lowerText.includes('interface') || lowerText.includes('user')) {
      return 'ux';
    }
    
    return 'mixed';
  }

  identifyAudience(text) {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('developer') || lowerText.includes('api') || lowerText.includes('code')) {
      return 'developers';
    }
    if (lowerText.includes('admin') || lowerText.includes('technical') || lowerText.includes('engineer')) {
      return 'technical';
    }
    if (lowerText.includes('user') || lowerText.includes('analyst') || lowerText.includes('manager')) {
      return 'business';
    }
    
    return 'mixed';
  }

  estimateTokens(text) {
    return Math.ceil(text.length / 4);
  }

  countWords(text) {
    return text.split(/\\s+/).filter(word => word.length > 0).length;
  }

  isStopWord(word) {
    const stopWords = new Set([
      'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
      'by', 'from', 'up', 'about', 'into', 'through', 'during', 'before',
      'after', 'above', 'below', 'between', 'among', 'this', 'that', 'these',
      'those', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have',
      'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'
    ]);
    return stopWords.has(word);
  }

  close() {
    if (this.db) {
      this.db.close();
    }
  }
}

// CLI interface for testing
if (require.main === module) {
  const retriever = new EnterpriseContextRetriever();
  
  const sampleFeature = `
    Advanced ML-based Threat Detection System
    
    We're implementing a new machine learning threat detection engine that can identify 
    zero-day attacks and advanced persistent threats in real-time. The system will:
    
    - Use behavioral analysis to detect anomalous activities
    - Integrate with existing SIEM and SOAR platforms
    - Provide automated threat response capabilities
    - Generate detailed threat intelligence reports
    - Support custom detection rules and playbooks
    
    This feature targets SOC analysts, security engineers, and threat hunters.
    It requires API integration, dashboard updates, and comprehensive documentation.
  `;
  
  retriever.getEnterpriseContext(sampleFeature)
    .then(context => {
      console.log(chalk.blue('\\n📋 Enterprise Context Result:\\n'));
      console.log(JSON.stringify(context, null, 2));
    })
    .catch(error => {
      console.error(chalk.red('❌ Enterprise context retrieval failed:'), error);
    })
    .finally(() => {
      retriever.close();
    });
}

module.exports = EnterpriseContextRetriever;