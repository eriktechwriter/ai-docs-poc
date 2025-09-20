#!/usr/bin/env node

/**
 * Simple Content Quality Analyzer
 * 
 * A simplified version of the content quality analyzer that focuses on
 * the core functionality needed for metadata enhancement.
 */

const chalk = require('chalk');

class SimpleQualityAnalyzer {
  constructor() {
    this.qualityMetrics = {
      completeness: { name: 'Content Completeness', weight: 0.3 },
      structure: { name: 'Document Structure', weight: 0.3 },
      readability: { name: 'Readability', weight: 0.2 },
      metadata: { name: 'Metadata Quality', weight: 0.2 }
    };
  }

  async analyzeContent(content, metadata = {}) {
    const analysis = {
      metadata: {
        filename: metadata.filename || 'unknown',
        wordCount: this.countWords(content),
        analyzedAt: new Date().toISOString()
      },
      scores: {},
      issues: [],
      suggestions: [],
      overallScore: 0
    };
    
    // Run quality checks
    analysis.scores.completeness = this.analyzeCompleteness(content, analysis);
    analysis.scores.structure = this.analyzeStructure(content, analysis);
    analysis.scores.readability = this.analyzeReadability(content, analysis);
    analysis.scores.metadata = this.analyzeMetadata(content, analysis);
    
    // Calculate overall score
    analysis.overallScore = this.calculateOverallScore(analysis.scores);
    
    return analysis;
  }

  analyzeCompleteness(content, analysis) {
    let score = 1.0;
    
    // Check for template placeholders
    const placeholders = content.match(/\{[^}]+\}/g) || [];
    if (placeholders.length > 0) {
      score -= Math.min(0.5, placeholders.length * 0.1);
      analysis.issues.push({
        type: 'completeness',
        severity: 'high',
        message: `Found ${placeholders.length} unfilled template placeholders`
      });
    }
    
    // Check for TODO markers
    const todos = content.match(/TODO|FIXME|XXX/gi) || [];
    if (todos.length > 0) {
      score -= todos.length * 0.05;
      analysis.issues.push({
        type: 'completeness',
        severity: 'medium',
        message: `Found ${todos.length} TODO/FIXME markers`
      });
    }
    
    // Check minimum content length
    const wordCount = this.countWords(content);
    if (wordCount < 100) {
      score -= 0.4;
      analysis.issues.push({
        type: 'completeness',
        severity: 'high',
        message: `Content is very short (${wordCount} words)`
      });
    } else if (wordCount < 300) {
      score -= 0.2;
      analysis.suggestions.push({
        type: 'completeness',
        priority: 'medium',
        message: 'Consider adding more detailed content'
      });
    }
    
    return Math.max(0, Math.min(1, score));
  }

  analyzeStructure(content, analysis) {
    let score = 1.0;
    
    // Check for frontmatter
    if (!content.startsWith('---')) {
      score -= 0.3;
      analysis.issues.push({
        type: 'structure',
        severity: 'high',
        message: 'Missing frontmatter metadata'
      });
    }
    
    // Check for headings
    const headings = content.match(/^#+\s+.+$/gm) || [];
    if (headings.length === 0) {
      score -= 0.4;
      analysis.issues.push({
        type: 'structure',
        severity: 'high',
        message: 'No headings found - document lacks structure'
      });
    }
    
    // Check for lists or structure
    const lists = content.match(/^[\s]*[-*+]\s+/gm) || [];
    const numberedLists = content.match(/^\s*\d+\.\s+/gm) || [];
    if (lists.length === 0 && numberedLists.length === 0 && headings.length < 2) {
      score -= 0.2;
      analysis.suggestions.push({
        type: 'structure',
        priority: 'medium',
        message: 'Consider adding lists or more headings for better structure'
      });
    }
    
    return Math.max(0, Math.min(1, score));
  }

  analyzeReadability(content, analysis) {
    let score = 1.0;
    
    // Simple sentence length check
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const longSentences = sentences.filter(s => this.countWords(s) > 30);
    
    if (longSentences.length > sentences.length * 0.3) {
      score -= 0.3;
      analysis.issues.push({
        type: 'readability',
        severity: 'medium',
        message: 'Many sentences are quite long'
      });
    }
    
    // Check for code examples
    const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
    const inlineCode = content.match(/`[^`]+`/g) || [];
    
    if (codeBlocks.length > 0 || inlineCode.length > 0) {
      score += 0.1; // Bonus for having code examples
    }
    
    return Math.max(0, Math.min(1, score));
  }

  analyzeMetadata(content, analysis) {
    let score = 1.0;
    
    // Check frontmatter content
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      
      // Check for title
      if (!frontmatter.includes('title:')) {
        score -= 0.3;
        analysis.issues.push({
          type: 'metadata',
          severity: 'high',
          message: 'Missing title in frontmatter'
        });
      }
      
      // Check for description
      if (!frontmatter.includes('description:')) {
        score -= 0.2;
        analysis.issues.push({
          type: 'metadata',
          severity: 'medium',
          message: 'Missing description in frontmatter'
        });
      }
      
      // Check for tags
      if (!frontmatter.includes('tags:')) {
        score -= 0.1;
        analysis.suggestions.push({
          type: 'metadata',
          priority: 'medium',
          message: 'Consider adding tags for better categorization'
        });
      }
    }
    
    return Math.max(0, Math.min(1, score));
  }

  countWords(text) {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  calculateOverallScore(scores) {
    let weightedSum = 0;
    let totalWeight = 0;
    
    for (const [metric, score] of Object.entries(scores)) {
      if (this.qualityMetrics[metric]) {
        const weight = this.qualityMetrics[metric].weight;
        weightedSum += score * weight;
        totalWeight += weight;
      }
    }
    
    return totalWeight > 0 ? weightedSum / totalWeight : 0;
  }
}

module.exports = SimpleQualityAnalyzer;