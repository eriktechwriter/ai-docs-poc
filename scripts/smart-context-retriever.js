#!/usr/bin/env node

/**
 * Smart Context Retriever
 * 
 * Solves the "1M context window limitation" by intelligently selecting
 * the most relevant documentation context for AI content planning.
 * 
 * Uses the documentation index to:
 * 1. Find semantically related content
 * 2. Identify content gaps and overlaps
 * 3. Recommend optimal placement for new content
 * 4. Provide focused context that fits in AI prompts
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class SmartContextRetriever {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.indexDir = path.join(this.projectRoot, '.docindex');
    this.indexPath = path.join(this.indexDir, 'documentation-index.json');
    
    this.index = null;
    this.loadIndex();
  }

  loadIndex() {
    if (!fs.existsSync(this.indexPath)) {
      throw new Error('Documentation index not found. Run: node scripts/documentation-indexer.js');
    }
    
    this.index = JSON.parse(fs.readFileSync(this.indexPath, 'utf8'));
    console.log(chalk.green(`✅ Loaded index with ${this.index.metadata.documentCount} documents`));
  }

  /**
   * Main method: Get smart context for a new feature
   * This is what the AI Content Planner will call
   */
  async getSmartContext(featureDescription, options = {}) {
    const {
      maxTokens = 50000,        // ~37,500 words, fits comfortably in 1M context
      includeRelated = true,
      includeSimilar = true,
      includeGaps = true,
      includeRecommendations = true
    } = options;

    console.log(chalk.blue('🧠 Analyzing feature against existing documentation...\\n'));

    // Step 1: Extract topics and keywords from feature description
    const featureAnalysis = this.analyzeFeatureDescription(featureDescription);
    console.log(chalk.cyan(`📝 Feature topics: ${featureAnalysis.topics.join(', ')}`));

    // Step 2: Find relevant existing documentation
    const relevantDocs = this.findRelevantDocuments(featureAnalysis);
    console.log(chalk.cyan(`📄 Found ${relevantDocs.length} relevant documents`));

    // Step 3: Identify content gaps and overlaps
    const gapAnalysis = this.analyzeContentGaps(featureAnalysis, relevantDocs);
    console.log(chalk.cyan(`🔍 Identified ${gapAnalysis.gaps.length} content gaps`));

    // Step 4: Generate placement recommendations
    const recommendations = this.generatePlacementRecommendations(featureAnalysis, relevantDocs);
    console.log(chalk.cyan(`💡 Generated ${recommendations.length} placement recommendations`));

    // Step 5: Build optimized context within token limit
    const context = this.buildOptimizedContext({
      featureAnalysis,
      relevantDocs,
      gapAnalysis,
      recommendations,
      maxTokens
    });

    console.log(chalk.green(`\\n✅ Smart context ready (${context.estimatedTokens} tokens)`));
    
    return context;
  }

  analyzeFeatureDescription(description) {
    // Extract semantic information from the feature description
    const topics = this.extractTopics(description);
    const keywords = this.extractKeywords(description);
    const entities = this.extractEntities(description);
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

  findRelevantDocuments(featureAnalysis, maxResults = 20) {
    const relevantDocs = [];
    
    // Score each document for relevance
    for (const [docId, doc] of Object.entries(this.index.documents)) {
      const relevanceScore = this.calculateRelevanceScore(featureAnalysis, doc);
      
      if (relevanceScore > 0.1) { // Minimum relevance threshold
        relevantDocs.push({
          ...doc,
          relevanceScore,
          relevanceReasons: this.explainRelevance(featureAnalysis, doc)
        });
      }
    }
    
    // Sort by relevance and return top results
    return relevantDocs
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, maxResults);
  }

  calculateRelevanceScore(featureAnalysis, doc) {
    let score = 0;
    
    // Topic overlap
    const sharedTopics = featureAnalysis.topics.filter(topic => 
      doc.topics.includes(topic)
    );
    score += sharedTopics.length * 0.3;
    
    // Keyword overlap
    const sharedKeywords = featureAnalysis.keywords.filter(keyword => 
      doc.keywords.includes(keyword)
    );
    score += sharedKeywords.length * 0.2;
    
    // Entity overlap
    const sharedEntities = featureAnalysis.entities.filter(entity => 
      doc.entities.includes(entity)
    );
    score += sharedEntities.length * 0.4;
    
    // Feature type relevance
    if (this.isFeatureTypeRelevant(featureAnalysis.featureType, doc)) {
      score += 0.3;
    }
    
    // Audience relevance
    if (this.isAudienceRelevant(featureAnalysis.audience, doc)) {
      score += 0.2;
    }
    
    return Math.min(score, 1.0); // Cap at 1.0
  }

  explainRelevance(featureAnalysis, doc) {
    const reasons = [];
    
    const sharedTopics = featureAnalysis.topics.filter(topic => 
      doc.topics.includes(topic)
    );
    if (sharedTopics.length > 0) {
      reasons.push(`Shared topics: ${sharedTopics.join(', ')}`);
    }
    
    const sharedEntities = featureAnalysis.entities.filter(entity => 
      doc.entities.includes(entity)
    );
    if (sharedEntities.length > 0) {
      reasons.push(`Shared entities: ${sharedEntities.join(', ')}`);
    }
    
    if (this.isFeatureTypeRelevant(featureAnalysis.featureType, doc)) {
      reasons.push(`Similar feature type`);
    }
    
    return reasons;
  }

  analyzeContentGaps(featureAnalysis, relevantDocs) {
    const gaps = [];
    const overlaps = [];
    const missingTopics = [];
    
    // Find topics in feature that aren't well covered in existing docs
    featureAnalysis.topics.forEach(topic => {
      const coveringDocs = relevantDocs.filter(doc => 
        doc.topics.includes(topic)
      );
      
      if (coveringDocs.length === 0) {
        gaps.push({
          type: 'missing_topic',
          topic: topic,
          description: `No existing documentation covers "${topic}"`
        });
        missingTopics.push(topic);
      } else if (coveringDocs.length === 1) {
        gaps.push({
          type: 'under_documented',
          topic: topic,
          description: `Only one document covers "${topic}": ${coveringDocs[0].title}`,
          existingDoc: coveringDocs[0]
        });
      }
    });
    
    // Find potential overlaps
    relevantDocs.forEach(doc => {
      const sharedTopics = featureAnalysis.topics.filter(topic => 
        doc.topics.includes(topic)
      );
      
      if (sharedTopics.length >= 3) {
        overlaps.push({
          document: doc,
          sharedTopics: sharedTopics,
          riskLevel: sharedTopics.length >= 5 ? 'high' : 'medium'
        });
      }
    });
    
    return {
      gaps,
      overlaps,
      missingTopics,
      summary: `Found ${gaps.length} content gaps and ${overlaps.length} potential overlaps`
    };
  }

  generatePlacementRecommendations(featureAnalysis, relevantDocs) {
    const recommendations = [];
    
    // Analyze document structure to suggest placement
    const sections = this.groupDocumentsBySection(relevantDocs);
    
    // Recommend section based on feature type and related content
    for (const [section, docs] of Object.entries(sections)) {
      const sectionScore = this.calculateSectionFit(featureAnalysis, docs);
      
      if (sectionScore > 0.3) {
        recommendations.push({
          type: 'section_placement',
          section: section,
          score: sectionScore,
          reasoning: this.explainSectionFit(featureAnalysis, section, docs),
          suggestedFilename: this.suggestFilename(featureAnalysis, section),
          relatedDocs: docs.slice(0, 3) // Top 3 related docs in section
        });
      }
    }
    
    // Recommend updates to existing documents
    relevantDocs.slice(0, 5).forEach(doc => {
      if (doc.relevanceScore > 0.5) {
        recommendations.push({
          type: 'document_update',
          document: doc,
          updateType: this.suggestUpdateType(featureAnalysis, doc),
          reasoning: `High relevance (${(doc.relevanceScore * 100).toFixed(0)}%) suggests this document should be updated`
        });
      }
    });
    
    // Sort recommendations by score/relevance
    return recommendations.sort((a, b) => {
      const scoreA = a.score || a.document?.relevanceScore || 0;
      const scoreB = b.score || b.document?.relevanceScore || 0;
      return scoreB - scoreA;
    });
  }

  buildOptimizedContext({ featureAnalysis, relevantDocs, gapAnalysis, recommendations, maxTokens }) {
    const context = {
      summary: this.generateContextSummary(featureAnalysis, relevantDocs),
      relevantDocuments: [],
      contentGaps: gapAnalysis,
      recommendations: recommendations,
      estimatedTokens: 0
    };
    
    // Start with summary and core data (always include)
    let currentTokens = this.estimateTokens(JSON.stringify({
      summary: context.summary,
      contentGaps: context.contentGaps,
      recommendations: context.recommendations
    }));
    
    // Add relevant documents until we approach token limit
    const tokenBudgetForDocs = maxTokens - currentTokens - 5000; // Reserve 5k tokens
    let docTokens = 0;
    
    for (const doc of relevantDocs) {
      const docContext = this.createDocumentContext(doc);
      const docTokenEstimate = this.estimateTokens(JSON.stringify(docContext));
      
      if (docTokens + docTokenEstimate <= tokenBudgetForDocs) {
        context.relevantDocuments.push(docContext);
        docTokens += docTokenEstimate;
      } else {
        break; // Stop adding documents
      }
    }
    
    context.estimatedTokens = currentTokens + docTokens;
    context.documentsIncluded = context.relevantDocuments.length;
    context.documentsSkipped = relevantDocs.length - context.relevantDocuments.length;
    
    return context;
  }

  generateContextSummary(featureAnalysis, relevantDocs) {
    const totalDocs = Object.keys(this.index.documents).length;
    const siteSummary = this.index.summaries.site;
    
    return {
      documentationOverview: {
        totalDocuments: totalDocs,
        sections: siteSummary.sections,
        topTopics: siteSummary.topTopics
      },
      featureAnalysis: {
        topics: featureAnalysis.topics,
        featureType: featureAnalysis.featureType,
        audience: featureAnalysis.audience
      },
      relevanceAnalysis: {
        relevantDocuments: relevantDocs.length,
        averageRelevance: relevantDocs.reduce((sum, doc) => sum + doc.relevanceScore, 0) / relevantDocs.length,
        topRelevantSections: this.getTopRelevantSections(relevantDocs)
      }
    };
  }

  createDocumentContext(doc) {
    // Create a condensed version of the document for context
    return {
      id: doc.id,
      title: doc.title,
      path: doc.path,
      description: doc.description,
      topics: doc.topics,
      keywords: doc.keywords.slice(0, 5), // Limit keywords
      headings: doc.headings.filter(h => h.level <= 3).map(h => h.text), // Main headings only
      summary: doc.summary,
      relevanceScore: doc.relevanceScore,
      relevanceReasons: doc.relevanceReasons,
      wordCount: doc.wordCount,
      lastModified: doc.lastModified
    };
  }

  // Utility methods for analysis
  extractTopics(text) {
    // Simple topic extraction - in production, use NLP
    const topics = new Set();
    
    // Extract from common patterns
    const words = text.toLowerCase()
      .replace(/[^a-z0-9\\s]/g, ' ')
      .split(/\\s+/)
      .filter(word => word.length > 3)
      .filter(word => !this.isStopWord(word));
    
    // Add significant words as topics
    words.forEach(word => topics.add(word));
    
    // Extract compound terms
    const phrases = text.match(/\\b[a-z]+\\s+[a-z]+\\b/gi) || [];
    phrases.forEach(phrase => {
      if (phrase.length > 6) {
        topics.add(phrase.toLowerCase());
      }
    });
    
    return Array.from(topics).slice(0, 20); // Limit topics
  }

  extractKeywords(text) {
    return this.extractTopics(text).slice(0, 10);
  }

  extractEntities(text) {
    const entities = new Set();
    const lowerText = text.toLowerCase();
    
    // Trend Vision One specific entities
    const trendEntities = [
      'vision one', 'trend micro', 'xdr', 'siem', 'soar',
      'endpoint', 'network', 'email', 'cloud', 'server',
      'alert', 'incident', 'threat', 'malware', 'ransomware',
      'api', 'integration', 'connector', 'webhook', 'syslog',
      'dashboard', 'report', 'analytics', 'investigation'
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

  isFeatureTypeRelevant(featureType, doc) {
    // Simple heuristic - in production, use more sophisticated matching
    return doc.topics.some(topic => {
      switch (featureType) {
        case 'security':
          return ['alert', 'threat', 'detection', 'security'].includes(topic);
        case 'analytics':
          return ['report', 'dashboard', 'analytics', 'metrics'].includes(topic);
        case 'integration':
          return ['api', 'integration', 'connector', 'webhook'].includes(topic);
        case 'configuration':
          return ['config', 'settings', 'admin', 'setup'].includes(topic);
        case 'ux':
          return ['ui', 'interface', 'user', 'workflow'].includes(topic);
        default:
          return false;
      }
    });
  }

  isAudienceRelevant(audience, doc) {
    // Check if document is relevant to the target audience
    const audienceKeywords = {
      developers: ['api', 'code', 'integration', 'sdk'],
      technical: ['admin', 'configuration', 'technical', 'setup'],
      business: ['user', 'guide', 'overview', 'getting started']
    };
    
    const keywords = audienceKeywords[audience] || [];
    return doc.topics.some(topic => keywords.includes(topic)) ||
           doc.keywords.some(keyword => keywords.includes(keyword));
  }

  groupDocumentsBySection(docs) {
    const sections = {};
    
    docs.forEach(doc => {
      const section = doc.path.split('/')[0] || 'root';
      if (!sections[section]) {
        sections[section] = [];
      }
      sections[section].push(doc);
    });
    
    return sections;
  }

  calculateSectionFit(featureAnalysis, docs) {
    // Calculate how well the feature fits in this section
    let score = 0;
    
    docs.forEach(doc => {
      score += doc.relevanceScore || 0;
    });
    
    return docs.length > 0 ? score / docs.length : 0;
  }

  explainSectionFit(featureAnalysis, section, docs) {
    const topDocs = docs.slice(0, 3).map(doc => doc.title);
    return `Section "${section}" contains related documents: ${topDocs.join(', ')}`;
  }

  suggestFilename(featureAnalysis, section) {
    const baseName = featureAnalysis.topics[0] || 'new-feature';
    const sanitized = baseName.replace(/[^a-z0-9]/g, '-').toLowerCase();
    return `${sanitized}.mdx`;
  }

  suggestUpdateType(featureAnalysis, doc) {
    if (doc.relevanceScore > 0.8) {
      return 'major_update';
    } else if (doc.relevanceScore > 0.5) {
      return 'section_addition';
    } else {
      return 'reference_addition';
    }
  }

  getTopRelevantSections(relevantDocs) {
    const sectionCounts = {};
    
    relevantDocs.forEach(doc => {
      const section = doc.path.split('/')[0];
      sectionCounts[section] = (sectionCounts[section] || 0) + 1;
    });
    
    return Object.entries(sectionCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([section, count]) => ({ section, count }));
  }

  estimateTokens(text) {
    // Rough token estimation: ~4 characters per token
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
}

// CLI interface for testing
if (require.main === module) {
  const retriever = new SmartContextRetriever();
  
  // Test with sample feature description
  const sampleFeature = `
    New Advanced Threat Detection Feature
    
    We're adding a new machine learning-based threat detection system that can identify 
    zero-day attacks in real-time. The system will integrate with existing alert workflows 
    and provide automated response capabilities.
    
    Key components:
    - ML-based detection engine
    - Real-time threat analysis
    - Integration with existing alert system
    - Automated response actions
    - Dashboard for threat visualization
    
    Target users: SOC analysts and security engineers
  `;
  
  retriever.getSmartContext(sampleFeature)
    .then(context => {
      console.log(chalk.blue('\\n📋 Smart Context Result:\\n'));
      console.log(JSON.stringify(context, null, 2));
    })
    .catch(error => {
      console.error(chalk.red('❌ Context retrieval failed:'), error);
    });
}

module.exports = SmartContextRetriever;