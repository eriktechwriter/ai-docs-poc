#!/usr/bin/env node

/**
 * Documentation Indexer - Smart Context System
 * 
 * Solves the "documentation codebase understanding" problem by:
 * 1. Creating semantic index of all documentation
 * 2. Building document relationship graph
 * 3. Generating hierarchical summaries
 * 4. Enabling smart context retrieval for AI planning
 * 
 * This allows AI to understand existing docs and make intelligent
 * recommendations about where and how to update content.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const crypto = require('crypto');

class DocumentationIndexer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.docsDir = path.join(this.projectRoot, 'docs');
    this.indexDir = path.join(this.projectRoot, '.docindex');
    
    // Ensure index directory exists
    if (!fs.existsSync(this.indexDir)) {
      fs.mkdirSync(this.indexDir, { recursive: true });
    }
    
    this.documentIndex = new Map();
    this.relationshipGraph = new Map();
    this.topicClusters = new Map();
    this.summaryHierarchy = new Map();
  }

  async buildFullIndex() {
    console.log(chalk.blue('🔍 Building documentation index for AI context system\\n'));
    
    // Step 1: Scan and parse all documentation
    console.log(chalk.cyan('📄 Scanning documentation files...'));
    await this.scanDocumentation();
    
    // Step 2: Extract semantic information
    console.log(chalk.cyan('🧠 Extracting semantic information...'));
    await this.extractSemanticInfo();
    
    // Step 3: Build relationship graph
    console.log(chalk.cyan('🕸️  Building document relationship graph...'));
    await this.buildRelationshipGraph();
    
    // Step 4: Create topic clusters
    console.log(chalk.cyan('📊 Creating topic clusters...'));
    await this.createTopicClusters();
    
    // Step 5: Generate hierarchical summaries
    console.log(chalk.cyan('📋 Generating hierarchical summaries...'));
    await this.generateHierarchicalSummaries();
    
    // Step 6: Save index to disk
    console.log(chalk.cyan('💾 Saving index to disk...'));
    await this.saveIndex();
    
    console.log(chalk.green('\\n✅ Documentation index built successfully!'));
    this.showIndexStats();
  }

  async scanDocumentation() {
    const scanDir = (dir, relativePath = '') => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relPath = path.join(relativePath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath, relPath);
        } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
          this.indexDocument(fullPath, relPath);
        }
      }
    };
    
    scanDir(this.docsDir);
    console.log(chalk.green(`   Found ${this.documentIndex.size} documentation files`));
  }

  indexDocument(fullPath, relativePath) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const stats = fs.statSync(fullPath);
    
    // Parse frontmatter and content
    const { frontmatter, body } = this.parseFrontmatter(content);
    
    // Extract structural information
    const structure = this.analyzeDocumentStructure(body);
    
    // Generate document fingerprint for change detection
    const fingerprint = crypto.createHash('md5').update(content).digest('hex');
    
    const docInfo = {
      id: this.generateDocId(relativePath),
      path: relativePath,
      fullPath: fullPath,
      title: frontmatter.title || this.extractTitleFromContent(body),
      description: frontmatter.description || this.extractDescription(body),
      tags: frontmatter.tags || [],
      sidebarPosition: frontmatter.sidebar_position,
      lastModified: stats.mtime,
      fingerprint: fingerprint,
      
      // Content analysis
      wordCount: this.countWords(body),
      headings: structure.headings,
      sections: structure.sections,
      codeBlocks: structure.codeBlocks,
      links: structure.links,
      images: structure.images,
      
      // Semantic information (to be filled later)
      topics: [],
      keywords: [],
      entities: [],
      summary: '',
      
      // Relationship information
      inboundLinks: [],
      outboundLinks: [],
      relatedDocs: [],
      parentDocs: [],
      childDocs: []
    };
    
    this.documentIndex.set(docInfo.id, docInfo);
  }

  parseFrontmatter(content) {
    const frontmatterMatch = content.match(/^---\\n([\\s\\S]*?)\\n---/);
    if (!frontmatterMatch) {
      return { frontmatter: {}, body: content };
    }
    
    try {
      const yaml = require('yaml');
      const frontmatter = yaml.parse(frontmatterMatch[1]);
      const body = content.substring(frontmatterMatch[0].length).trim();
      return { frontmatter, body };
    } catch (error) {
      return { frontmatter: {}, body: content };
    }
  }

  analyzeDocumentStructure(content) {
    const structure = {
      headings: [],
      sections: [],
      codeBlocks: [],
      links: [],
      images: []
    };
    
    const lines = content.split('\\n');
    let currentSection = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Extract headings
      const headingMatch = line.match(/^(#{1,6})\\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        const heading = { level, text, line: i + 1 };
        
        structure.headings.push(heading);
        
        // Start new section
        if (currentSection) {
          structure.sections.push(currentSection);
        }
        currentSection = {
          heading: heading,
          content: [],
          startLine: i + 1
        };
      } else if (currentSection) {
        currentSection.content.push(line);
      }
      
      // Extract code blocks
      if (line.startsWith('```')) {
        const language = line.substring(3).trim();
        const codeBlock = { language, line: i + 1, content: [] };
        
        // Find end of code block
        for (let j = i + 1; j < lines.length; j++) {
          if (lines[j].startsWith('```')) {
            codeBlock.endLine = j + 1;
            break;
          }
          codeBlock.content.push(lines[j]);
        }
        
        structure.codeBlocks.push(codeBlock);
      }
      
      // Extract links
      const linkMatches = line.matchAll(/\\[([^\\]]+)\\]\\(([^)]+)\\)/g);
      for (const match of linkMatches) {
        structure.links.push({
          text: match[1],
          url: match[2],
          line: i + 1
        });
      }
      
      // Extract images
      const imageMatches = line.matchAll(/!\\[([^\\]]*)\\]\\(([^)]+)\\)/g);
      for (const match of imageMatches) {
        structure.images.push({
          alt: match[1],
          src: match[2],
          line: i + 1
        });
      }
    }
    
    // Add final section
    if (currentSection) {
      structure.sections.push(currentSection);
    }
    
    return structure;
  }

  async extractSemanticInfo() {
    for (const [docId, doc] of this.documentIndex) {
      // Extract topics from headings and content
      doc.topics = this.extractTopics(doc);
      
      // Extract keywords
      doc.keywords = this.extractKeywords(doc);
      
      // Extract entities (product names, features, etc.)
      doc.entities = this.extractEntities(doc);
      
      // Generate summary
      doc.summary = this.generateDocumentSummary(doc);
    }
  }

  extractTopics(doc) {
    const topics = new Set();
    
    // Extract from title and headings
    const titleWords = this.extractSignificantWords(doc.title);
    titleWords.forEach(word => topics.add(word));
    
    doc.headings.forEach(heading => {
      const headingWords = this.extractSignificantWords(heading.text);
      headingWords.forEach(word => topics.add(word));
    });
    
    // Extract from tags
    doc.tags.forEach(tag => topics.add(tag.toLowerCase()));
    
    // Extract from file path
    const pathParts = doc.path.split('/').filter(part => 
      part !== '' && !part.endsWith('.md') && !part.endsWith('.mdx')
    );
    pathParts.forEach(part => topics.add(part.replace(/-/g, ' ')));
    
    return Array.from(topics);
  }

  extractKeywords(doc) {
    // Simple keyword extraction - in production, use NLP libraries
    const text = doc.title + ' ' + doc.description + ' ' + 
                 doc.headings.map(h => h.text).join(' ');
    
    const words = text.toLowerCase()
      .replace(/[^a-z0-9\\s]/g, ' ')
      .split(/\\s+/)
      .filter(word => word.length > 3)
      .filter(word => !this.isStopWord(word));
    
    // Count frequency and return top keywords
    const frequency = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    
    return Object.entries(frequency)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  }

  extractEntities(doc) {
    const entities = new Set();
    
    // Trend Vision One specific entities
    const trendEntities = [
      'vision one', 'trend micro', 'xdr', 'siem', 'soar',
      'endpoint', 'network', 'email', 'cloud', 'server',
      'alert', 'incident', 'threat', 'malware', 'ransomware',
      'api', 'integration', 'connector', 'webhook', 'syslog'
    ];
    
    const text = (doc.title + ' ' + doc.description).toLowerCase();
    
    trendEntities.forEach(entity => {
      if (text.includes(entity)) {
        entities.add(entity);
      }
    });
    
    return Array.from(entities);
  }

  generateDocumentSummary(doc) {
    // Generate a concise summary for context inclusion
    const parts = [];
    
    if (doc.title) parts.push(`Title: ${doc.title}`);
    if (doc.description) parts.push(`Description: ${doc.description}`);
    if (doc.topics.length > 0) parts.push(`Topics: ${doc.topics.slice(0, 5).join(', ')}`);
    if (doc.headings.length > 0) {
      const mainHeadings = doc.headings
        .filter(h => h.level <= 3)
        .map(h => h.text)
        .slice(0, 5);
      parts.push(`Sections: ${mainHeadings.join(', ')}`);
    }
    
    return parts.join(' | ');
  }

  async buildRelationshipGraph() {
    // Build relationships between documents
    for (const [docId, doc] of this.documentIndex) {
      this.relationshipGraph.set(docId, {
        inbound: new Set(),
        outbound: new Set(),
        related: new Set()
      });
    }
    
    // Analyze links between documents
    for (const [docId, doc] of this.documentIndex) {
      const relationships = this.relationshipGraph.get(docId);
      
      doc.links.forEach(link => {
        const targetDocId = this.resolveInternalLink(link.url);
        if (targetDocId && this.documentIndex.has(targetDocId)) {
          relationships.outbound.add(targetDocId);
          this.relationshipGraph.get(targetDocId).inbound.add(docId);
        }
      });
      
      // Find related documents by topic similarity
      const relatedDocs = this.findRelatedDocuments(doc);
      relatedDocs.forEach(relatedId => {
        relationships.related.add(relatedId);
      });
    }
  }

  findRelatedDocuments(doc, maxResults = 5) {
    const related = [];
    
    for (const [otherId, otherDoc] of this.documentIndex) {
      if (otherId === doc.id) continue;
      
      const similarity = this.calculateSimilarity(doc, otherDoc);
      if (similarity > 0.3) { // Threshold for relatedness
        related.push({ id: otherId, similarity });
      }
    }
    
    return related
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, maxResults)
      .map(item => item.id);
  }

  calculateSimilarity(doc1, doc2) {
    // Simple similarity calculation based on shared topics and keywords
    const topics1 = new Set(doc1.topics);
    const topics2 = new Set(doc2.topics);
    const keywords1 = new Set(doc1.keywords);
    const keywords2 = new Set(doc2.keywords);
    
    const sharedTopics = new Set([...topics1].filter(x => topics2.has(x)));
    const sharedKeywords = new Set([...keywords1].filter(x => keywords2.has(x)));
    
    const totalTopics = new Set([...topics1, ...topics2]).size;
    const totalKeywords = new Set([...keywords1, ...keywords2]).size;
    
    const topicSimilarity = totalTopics > 0 ? sharedTopics.size / totalTopics : 0;
    const keywordSimilarity = totalKeywords > 0 ? sharedKeywords.size / totalKeywords : 0;
    
    return (topicSimilarity + keywordSimilarity) / 2;
  }

  async createTopicClusters() {
    // Group documents by topic similarity
    const topics = new Map();
    
    // Collect all topics
    for (const [docId, doc] of this.documentIndex) {
      doc.topics.forEach(topic => {
        if (!topics.has(topic)) {
          topics.set(topic, new Set());
        }
        topics.get(topic).add(docId);
      });
    }
    
    // Create clusters for topics with multiple documents
    for (const [topic, docIds] of topics) {
      if (docIds.size > 1) {
        this.topicClusters.set(topic, {
          documents: Array.from(docIds),
          size: docIds.size,
          summary: this.generateTopicSummary(topic, docIds)
        });
      }
    }
  }

  generateTopicSummary(topic, docIds) {
    const docs = Array.from(docIds).map(id => this.documentIndex.get(id));
    const titles = docs.map(doc => doc.title).join(', ');
    return `Topic "${topic}" covers: ${titles}`;
  }

  async generateHierarchicalSummaries() {
    // Create different levels of summaries for context management
    
    // Level 1: Full site summary
    this.summaryHierarchy.set('site', this.generateSiteSummary());
    
    // Level 2: Section summaries (by folder)
    const sections = this.groupDocumentsBySection();
    for (const [section, docs] of sections) {
      this.summaryHierarchy.set(`section:${section}`, 
        this.generateSectionSummary(section, docs));
    }
    
    // Level 3: Topic cluster summaries
    for (const [topic, cluster] of this.topicClusters) {
      this.summaryHierarchy.set(`topic:${topic}`, cluster.summary);
    }
  }

  generateSiteSummary() {
    const totalDocs = this.documentIndex.size;
    const sections = this.groupDocumentsBySection();
    const topTopics = Array.from(this.topicClusters.keys()).slice(0, 10);
    
    return {
      totalDocuments: totalDocs,
      sections: Array.from(sections.keys()),
      topTopics: topTopics,
      lastUpdated: new Date().toISOString(),
      summary: `Trend Vision One documentation with ${totalDocs} documents across ${sections.size} sections, covering topics: ${topTopics.join(', ')}`
    };
  }

  generateSectionSummary(section, docs) {
    const titles = docs.map(doc => doc.title);
    const topics = [...new Set(docs.flatMap(doc => doc.topics))];
    
    return {
      section: section,
      documentCount: docs.length,
      documents: titles,
      topics: topics.slice(0, 10),
      summary: `Section "${section}" contains ${docs.length} documents covering: ${topics.slice(0, 5).join(', ')}`
    };
  }

  groupDocumentsBySection() {
    const sections = new Map();
    
    for (const [docId, doc] of this.documentIndex) {
      const section = doc.path.split('/')[0] || 'root';
      if (!sections.has(section)) {
        sections.set(section, []);
      }
      sections.get(section).push(doc);
    }
    
    return sections;
  }

  async saveIndex() {
    // Save all index data to disk for fast loading
    const indexData = {
      documents: Object.fromEntries(this.documentIndex),
      relationships: Object.fromEntries(
        Array.from(this.relationshipGraph.entries()).map(([key, value]) => [
          key,
          {
            inbound: Array.from(value.inbound),
            outbound: Array.from(value.outbound),
            related: Array.from(value.related)
          }
        ])
      ),
      topicClusters: Object.fromEntries(this.topicClusters),
      summaries: Object.fromEntries(this.summaryHierarchy),
      metadata: {
        createdAt: new Date().toISOString(),
        version: '1.0.0',
        documentCount: this.documentIndex.size
      }
    };
    
    fs.writeFileSync(
      path.join(this.indexDir, 'documentation-index.json'),
      JSON.stringify(indexData, null, 2)
    );
    
    // Save human-readable summary
    const summary = this.generateIndexSummary();
    fs.writeFileSync(
      path.join(this.indexDir, 'INDEX-SUMMARY.md'),
      summary
    );
  }

  generateIndexSummary() {
    const siteSummary = this.summaryHierarchy.get('site');
    const sections = this.groupDocumentsBySection();
    
    return `# Documentation Index Summary

## 📊 Overview

- **Total Documents**: ${siteSummary.totalDocuments}
- **Sections**: ${siteSummary.sections.length}
- **Topic Clusters**: ${this.topicClusters.size}
- **Last Updated**: ${siteSummary.lastUpdated}

## 📁 Sections

${Array.from(sections.entries()).map(([section, docs]) => 
  `### ${section}
- **Documents**: ${docs.length}
- **Files**: ${docs.map(d => d.title).join(', ')}`
).join('\\n\\n')}

## 🏷️ Top Topics

${Array.from(this.topicClusters.entries())
  .sort(([,a], [,b]) => b.size - a.size)
  .slice(0, 10)
  .map(([topic, cluster]) => `- **${topic}**: ${cluster.size} documents`)
  .join('\\n')}

## 🔗 Relationship Stats

${Array.from(this.documentIndex.values())
  .map(doc => {
    const relationships = this.relationshipGraph.get(doc.id);
    return `- **${doc.title}**: ${relationships.outbound.size} outbound, ${relationships.inbound.size} inbound, ${relationships.related.size} related`;
  })
  .slice(0, 10)
  .join('\\n')}

---
*Generated by Documentation Indexer*
`;
  }

  showIndexStats() {
    const siteSummary = this.summaryHierarchy.get('site');
    
    console.log(chalk.blue('\\n📊 Index Statistics:\\n'));
    console.log(chalk.cyan(`📄 Documents indexed: ${siteSummary.totalDocuments}`));
    console.log(chalk.cyan(`📁 Sections found: ${siteSummary.sections.length}`));
    console.log(chalk.cyan(`🏷️  Topic clusters: ${this.topicClusters.size}`));
    console.log(chalk.cyan(`🔗 Relationships mapped: ${Array.from(this.relationshipGraph.values()).reduce((sum, rel) => sum + rel.outbound.size, 0)}`));
    
    console.log(chalk.blue('\\n🎯 Usage:\\n'));
    console.log(chalk.yellow('• Use this index to provide smart context to AI'));
    console.log(chalk.yellow('• Find related documents for content planning'));
    console.log(chalk.yellow('• Identify content gaps and overlaps'));
    console.log(chalk.yellow('• Recommend where to place new content'));
  }

  // Utility methods
  generateDocId(relativePath) {
    return relativePath.replace(/\\.(md|mdx)$/, '').replace(/\\\\/g, '/');
  }

  extractTitleFromContent(content) {
    const firstHeading = content.match(/^#\\s+(.+)$/m);
    return firstHeading ? firstHeading[1].trim() : 'Untitled';
  }

  extractDescription(content) {
    const lines = content.split('\\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('<!--') && trimmed.length > 20) {
        return trimmed.substring(0, 200) + (trimmed.length > 200 ? '...' : '');
      }
    }
    return '';
  }

  countWords(text) {
    return text.split(/\\s+/).filter(word => word.length > 0).length;
  }

  extractSignificantWords(text) {
    return text.toLowerCase()
      .replace(/[^a-z0-9\\s]/g, ' ')
      .split(/\\s+/)
      .filter(word => word.length > 2)
      .filter(word => !this.isStopWord(word));
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

  resolveInternalLink(url) {
    // Simple internal link resolution - enhance as needed
    if (url.startsWith('http') || url.startsWith('mailto')) {
      return null; // External link
    }
    
    // Remove anchors and resolve relative paths
    const cleanUrl = url.split('#')[0];
    if (cleanUrl.endsWith('.md') || cleanUrl.endsWith('.mdx')) {
      return cleanUrl.replace(/\\.(md|mdx)$/, '');
    }
    
    return cleanUrl;
  }
}

// CLI interface
if (require.main === module) {
  const indexer = new DocumentationIndexer();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(chalk.blue('Documentation Indexer\\n'));
    console.log('Usage:');
    console.log('  node documentation-indexer.js [options]\\n');
    console.log('Options:');
    console.log('  --rebuild, -r    Force rebuild of entire index');
    console.log('  --stats, -s      Show index statistics only');
    console.log('  --help, -h       Show this help\\n');
    process.exit(0);
  }
  
  if (args.includes('--stats') || args.includes('-s')) {
    // Load existing index and show stats
    const indexPath = path.join(indexer.indexDir, 'documentation-index.json');
    if (fs.existsSync(indexPath)) {
      const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
      console.log(chalk.blue('📊 Current Index Statistics:\\n'));
      console.log(chalk.cyan(`📄 Documents: ${indexData.metadata.documentCount}`));
      console.log(chalk.cyan(`🏷️  Topics: ${Object.keys(indexData.topicClusters).length}`));
      console.log(chalk.cyan(`📅 Last Updated: ${indexData.metadata.createdAt}`));
    } else {
      console.log(chalk.yellow('No index found. Run without --stats to build index.'));
    }
    process.exit(0);
  }
  
  indexer.buildFullIndex().catch(error => {
    console.error(chalk.red('❌ Indexing failed:'), error);
    process.exit(1);
  });
}

module.exports = DocumentationIndexer;