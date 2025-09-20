#!/usr/bin/env node

/**
 * Content Quality Analyzer
 * 
 * Comprehensive quality analysis system that evaluates documentation
 * against enterprise standards, accessibility guidelines, and best practices.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class ContentQualityAnalyzer {
  constructor() {
    this.qualityMetrics = this.initializeQualityMetrics();
    this.scoringWeights = this.initializeScoringWeights();
  }

  initializeQualityMetrics() {
    return {
      completeness: {
        name: 'Content Completeness',
        description: 'Measures how complete the content is',
        weight: 0.25
      },
      readability: {
        name: 'Readability',
        description: 'Measures how easy the content is to read',
        weight: 0.20
      },
      structure: {
        name: 'Document Structure',
        description: 'Measures document organization and hierarchy',
        weight: 0.15
      },
      seo: {
        name: 'SEO Optimization',
        description: 'Measures search engine optimization',
        weight: 0.15
      },
      accessibility: {
        name: 'Accessibility',
        description: 'Measures accessibility compliance',
        weight: 0.15
      },
      enterprise: {
        name: 'Enterprise Standards',
        description: 'Measures compliance with enterprise standards',
        weight: 0.10
      }
    };
  }

  initializeScoringWeights() {
    return {
      excellent: { min: 0.9, label: 'Excellent', color: 'green' },
      good: { min: 0.8, label: 'Good', color: 'cyan' },
      fair: { min: 0.7, label: 'Fair', color: 'yellow' },
      poor: { min: 0.6, label: 'Poor', color: 'magenta' },
      critical: { min: 0, label: 'Critical', color: 'red' }
    };
  }

  async analyzeContent(content, metadata = {}) {
    console.log(chalk.blue('🔍 Analyzing content quality...'));
    
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
    
    // Run all quality checks
    analysis.scores.completeness = await this.analyzeCompleteness(content, analysis);
    analysis.scores.readability = await this.analyzeReadability(content, analysis);
    analysis.scores.structure = await this.analyzeStructure(content, analysis);
    analysis.scores.seo = await this.analyzeSEO(content, analysis);
    analysis.scores.accessibility = await this.analyzeAccessibility(content, analysis);
    analysis.scores.enterprise = await this.analyzeEnterpriseStandards(content, analysis);
    
    // Calculate weighted overall score
    analysis.overallScore = this.calculateOverallScore(analysis.scores);
    
    // Generate summary
    analysis.summary = this.generateSummary(analysis);
    
    return analysis;
  }

  async analyzeCompleteness(content, analysis) {
    let score = 1.0;
    const issues = [];
    const suggestions = [];
    
    // Check for template placeholders
    const placeholders = content.match(/\{[^}]+\}/g) || [];
    if (placeholders.length > 0) {
      const placeholderPenalty = Math.min(0.8, placeholders.length * 0.1);
      score -= placeholderPenalty;
      
      issues.push({
        type: 'completeness',
        severity: 'high',
        message: `Found ${placeholders.length} unfilled template placeholders`,
        examples: placeholders.slice(0, 3)
      });
      
      suggestions.push({
        type: 'completeness',
        priority: 'high',
        message: 'Fill in all template placeholders with actual content'
      });
    }
    
    // Check for TODO markers
    const todos = content.match(/TODO|FIXME|XXX/gi) || [];
    if (todos.length > 0) {
      score -= todos.length * 0.05;
      
      issues.push({
        type: 'completeness',
        severity: 'medium',
        message: `Found ${todos.length} TODO/FIXME markers`,
        count: todos.length
      });
    }
    
    // Check for empty sections
    const emptySections = this.findEmptySections(content);
    if (emptySections.length > 0) {
      score -= emptySections.length * 0.1;
      
      issues.push({
        type: 'completeness',
        severity: 'medium',
        message: `Found ${emptySections.length} empty sections`,
        sections: emptySections
      });
    }
    
    // Check minimum content length
    const wordCount = this.countWords(content);
    if (wordCount < 300) {
      score -= 0.3;
      
      issues.push({
        type: 'completeness',
        severity: 'medium',
        message: `Content is quite short (${wordCount} words). Consider adding more detail.`
      });
      
      suggestions.push({
        type: 'completeness',
        priority: 'medium',
        message: 'Add more detailed explanations, examples, or use cases'
      });
    }
    
    analysis.issues.push(...issues);
    analysis.suggestions.push(...suggestions);
    
    return Math.max(0, Math.min(1, score));
  }

  async analyzeReadability(content, analysis) {
    let score = 1.0;
    const issues = [];
    const suggestions = [];
    
    // Analyze sentence length
    const sentences = this.extractSentences(content);
    const longSentences = sentences.filter(s => this.countWords(s) > 25);
    
    if (longSentences.length > 0) {
      const penalty = Math.min(0.4, longSentences.length * 0.05);
      score -= penalty;
      
      issues.push({
        type: 'readability',
        severity: 'medium',
        message: `Found ${longSentences.length} sentences longer than 25 words`,
        examples: longSentences.slice(0, 2).map(s => s.substring(0, 100) + '...')
      });
      
      suggestions.push({
        type: 'readability',
        priority: 'medium',
        message: 'Break long sentences into shorter, clearer statements'
      });
    }
    
    // Analyze paragraph length
    const paragraphs = content.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    const longParagraphs = paragraphs.filter(p => {
      const paragraphSentences = this.extractSentences(p);
      return paragraphSentences.length > 5;
    });
    
    if (longParagraphs.length > 0) {
      score -= longParagraphs.length * 0.05;
      
      issues.push({
        type: 'readability',
        severity: 'low',
        message: `Found ${longParagraphs.length} paragraphs with more than 5 sentences`
      });
    }
    
    // Check for passive voice (simplified detection)
    const passiveIndicators = content.match(/\b(was|were|been|being)\s+\w+ed\b/gi) || [];\n    if (passiveIndicators.length > sentences.length * 0.3) {\n      score -= 0.1;\n      \n      issues.push({\n        type: 'readability',\n        severity: 'low',\n        message: 'High use of passive voice detected. Consider using active voice.'\n      });\n      \n      suggestions.push({\n        type: 'readability',\n        priority: 'low',\n        message: 'Rewrite sentences in active voice for better clarity'\n      });\n    }\n    \n    // Check for jargon and complex terms\n    const complexTerms = this.detectComplexTerms(content);\n    if (complexTerms.length > 0) {\n      score -= Math.min(0.2, complexTerms.length * 0.02);\n      \n      suggestions.push({\n        type: 'readability',\n        priority: 'medium',\n        message: 'Consider defining or simplifying technical terms',\n        terms: complexTerms.slice(0, 5)\n      });\n    }\n    \n    analysis.issues.push(...issues);\n    analysis.suggestions.push(...suggestions);\n    \n    return Math.max(0, Math.min(1, score));\n  }\n\n  async analyzeStructure(content, analysis) {\n    let score = 1.0;\n    const issues = [];\n    const suggestions = [];\n    \n    // Check for frontmatter\n    if (!content.startsWith('---')) {\n      score -= 0.3;\n      \n      issues.push({\n        type: 'structure',\n        severity: 'high',\n        message: 'Missing frontmatter metadata'\n      });\n      \n      suggestions.push({\n        type: 'structure',\n        priority: 'high',\n        message: 'Add frontmatter with title, description, and tags'\n      });\n    }\n    \n    // Check heading hierarchy\n    const headings = content.match(/^#+\\s+.+$/gm) || [];\n    if (headings.length === 0) {\n      score -= 0.4;\n      \n      issues.push({\n        type: 'structure',\n        severity: 'high',\n        message: 'No headings found - document lacks structure'\n      });\n    } else {\n      // Check heading hierarchy\n      const headingLevels = headings.map(h => h.match(/^#+/)[0].length);\n      \n      // Check for H1\n      if (!headingLevels.includes(1)) {\n        score -= 0.2;\n        \n        issues.push({\n          type: 'structure',\n          severity: 'medium',\n          message: 'Missing main H1 heading'\n        });\n      }\n      \n      // Check for skipped levels\n      for (let i = 1; i < headingLevels.length; i++) {\n        if (headingLevels[i] > headingLevels[i-1] + 1) {\n          score -= 0.1;\n          \n          issues.push({\n            type: 'structure',\n            severity: 'medium',\n            message: 'Heading hierarchy skips levels',\n            location: `Heading: ${headings[i]}`\n          });\n        }\n      }\n    }\n    \n    // Check for table of contents\n    const hasTOC = content.includes('<!-- START doctoc -->') && content.includes('<!-- END doctoc -->');\n    if (!hasTOC && headings.length > 3) {\n      score -= 0.1;\n      \n      suggestions.push({\n        type: 'structure',\n        priority: 'medium',\n        message: 'Consider adding a table of contents for better navigation'\n      });\n    }\n    \n    // Check for code blocks formatting\n    const codeBlocks = content.match(/```[\\s\\S]*?```/g) || [];\n    const unformattedCode = content.match(/`[^`\\n]+`/g) || [];\n    \n    if (codeBlocks.length === 0 && unformattedCode.length > 5) {\n      suggestions.push({\n        type: 'structure',\n        priority: 'low',\n        message: 'Consider using code blocks for better formatting of code examples'\n      });\n    }\n    \n    analysis.issues.push(...issues);\n    analysis.suggestions.push(...suggestions);\n    \n    return Math.max(0, Math.min(1, score));\n  }\n\n  async analyzeSEO(content, analysis) {\n    let score = 1.0;\n    const issues = [];\n    const suggestions = [];\n    \n    // Extract frontmatter for SEO analysis\n    const frontmatterMatch = content.match(/^---\\n([\\s\\S]*?)\\n---/);\n    if (frontmatterMatch) {\n      const frontmatter = frontmatterMatch[1];\n      \n      // Check title\n      const titleMatch = frontmatter.match(/title:\\s*[\"']([^\"']+)[\"']/);\n      if (titleMatch) {\n        const title = titleMatch[1];\n        if (title.length < 30) {\n          score -= 0.2;\n          issues.push({\n            type: 'seo',\n            severity: 'medium',\n            message: `Title too short for SEO (${title.length} chars, recommended 30-60)`\n          });\n        } else if (title.length > 60) {\n          score -= 0.1;\n          issues.push({\n            type: 'seo',\n            severity: 'low',\n            message: `Title too long for SEO (${title.length} chars, recommended 30-60)`\n          });\n        }\n      } else {\n        score -= 0.3;\n        issues.push({\n          type: 'seo',\n          severity: 'high',\n          message: 'Missing title in frontmatter'\n        });\n      }\n      \n      // Check description\n      const descMatch = frontmatter.match(/description:\\s*[\"']([^\"']+)[\"']/);\n      if (descMatch) {\n        const description = descMatch[1];\n        if (description.length < 120) {\n          score -= 0.2;\n          issues.push({\n            type: 'seo',\n            severity: 'medium',\n            message: `Description too short for SEO (${description.length} chars, recommended 120-160)`\n          });\n        } else if (description.length > 160) {\n          score -= 0.1;\n          issues.push({\n            type: 'seo',\n            severity: 'low',\n            message: `Description too long for SEO (${description.length} chars, recommended 120-160)`\n          });\n        }\n      } else {\n        score -= 0.2;\n        issues.push({\n          type: 'seo',\n          severity: 'medium',\n          message: 'Missing description in frontmatter'\n        });\n      }\n      \n      // Check tags\n      const tagsMatch = frontmatter.match(/tags:\\s*\\[([^\\]]+)\\]/);\n      if (!tagsMatch) {\n        score -= 0.1;\n        suggestions.push({\n          type: 'seo',\n          priority: 'medium',\n          message: 'Add relevant tags for better categorization'\n        });\n      }\n    }\n    \n    // Check for internal links\n    const internalLinks = content.match(/\\]\\([^http][^)]+\\)/g) || [];\n    if (internalLinks.length === 0) {\n      score -= 0.1;\n      suggestions.push({\n        type: 'seo',\n        priority: 'medium',\n        message: 'Add internal links to related documentation'\n      });\n    }\n    \n    analysis.issues.push(...issues);\n    analysis.suggestions.push(...suggestions);\n    \n    return Math.max(0, Math.min(1, score));\n  }\n\n  async analyzeAccessibility(content, analysis) {\n    let score = 1.0;\n    const issues = [];\n    const suggestions = [];\n    \n    // Check images for alt text\n    const images = content.match(/!\\[([^\\]]*)\\]\\([^)]+\\)/g) || [];\n    const imagesWithoutAlt = images.filter(img => {\n      const altMatch = img.match(/!\\[([^\\]]*)\\]/);\n      return !altMatch || !altMatch[1] || altMatch[1].trim() === '';\n    });\n    \n    if (imagesWithoutAlt.length > 0) {\n      score -= imagesWithoutAlt.length * 0.2;\n      \n      issues.push({\n        type: 'accessibility',\n        severity: 'high',\n        message: `${imagesWithoutAlt.length} images missing alt text`,\n        examples: imagesWithoutAlt.slice(0, 2)\n      });\n      \n      suggestions.push({\n        type: 'accessibility',\n        priority: 'high',\n        message: 'Add descriptive alt text to all images for screen readers'\n      });\n    }\n    \n    // Check link text\n    const links = content.match(/\\[([^\\]]+)\\]\\([^)]+\\)/g) || [];\n    const genericLinks = links.filter(link => {\n      const textMatch = link.match(/\\[([^\\]]+)\\]/);\n      if (!textMatch) return false;\n      const linkText = textMatch[1].toLowerCase();\n      return ['click here', 'here', 'read more', 'link', 'more'].includes(linkText);\n    });\n    \n    if (genericLinks.length > 0) {\n      score -= genericLinks.length * 0.1;\n      \n      issues.push({\n        type: 'accessibility',\n        severity: 'medium',\n        message: `${genericLinks.length} links with generic text`,\n        examples: genericLinks.slice(0, 2)\n      });\n      \n      suggestions.push({\n        type: 'accessibility',\n        priority: 'medium',\n        message: 'Use descriptive link text that explains the destination'\n      });\n    }\n    \n    // Check color references\n    const colorReferences = content.match(/\\b(red|green|blue|yellow)\\b/gi) || [];\n    if (colorReferences.length > 0) {\n      suggestions.push({\n        type: 'accessibility',\n        priority: 'low',\n        message: 'Avoid relying solely on color to convey information'\n      });\n    }\n    \n    analysis.issues.push(...issues);\n    analysis.suggestions.push(...suggestions);\n    \n    return Math.max(0, Math.min(1, score));\n  }\n\n  async analyzeEnterpriseStandards(content, analysis) {\n    let score = 1.0;\n    const issues = [];\n    const suggestions = [];\n    \n    // Check for required sections\n    const requiredSections = ['Overview', 'Prerequisites'];\n    const missingSections = requiredSections.filter(section => {\n      const regex = new RegExp(`^#+\\s+${section}`, 'mi');\n      return !regex.test(content);\n    });\n    \n    if (missingSections.length > 0) {\n      score -= missingSections.length * 0.2;\n      \n      issues.push({\n        type: 'enterprise',\n        severity: 'medium',\n        message: `Missing required sections: ${missingSections.join(', ')}`\n      });\n    }\n    \n    // Check brand consistency\n    const brandInconsistencies = this.checkBrandConsistency(content);\n    if (brandInconsistencies.length > 0) {\n      score -= brandInconsistencies.length * 0.1;\n      \n      issues.push({\n        type: 'enterprise',\n        severity: 'low',\n        message: 'Brand name inconsistencies found',\n        examples: brandInconsistencies\n      });\n    }\n    \n    // Check for security focus\n    const securityTerms = ['security', 'threat', 'protection', 'detection', 'response'];\n    const hasSecurityFocus = securityTerms.some(term => \n      content.toLowerCase().includes(term)\n    );\n    \n    if (!hasSecurityFocus) {\n      suggestions.push({\n        type: 'enterprise',\n        priority: 'low',\n        message: 'Consider emphasizing security benefits and use cases'\n      });\n    }\n    \n    analysis.issues.push(...issues);\n    analysis.suggestions.push(...suggestions);\n    \n    return Math.max(0, Math.min(1, score));\n  }\n\n  // Helper methods\n  countWords(text) {\n    return text.trim().split(/\\s+/).filter(word => word.length > 0).length;\n  }\n\n  extractSentences(content) {\n    // Remove markdown formatting for sentence analysis\n    const plainText = content\n      .replace(/```[\\s\\S]*?```/g, '') // Remove code blocks\n      .replace(/`[^`]+`/g, '') // Remove inline code\n      .replace(/\\[([^\\]]+)\\]\\([^)]+\\)/g, '$1') // Replace links with text\n      .replace(/[#*_]/g, ''); // Remove markdown formatting\n    \n    return plainText.split(/[.!?]+/).filter(s => s.trim().length > 0);\n  }\n\n  findEmptySections(content) {\n    const sections = [];\n    const headingMatches = [...content.matchAll(/^(#+)\\s+(.+)$/gm)];\n    \n    for (let i = 0; i < headingMatches.length; i++) {\n      const currentHeading = headingMatches[i];\n      const nextHeading = headingMatches[i + 1];\n      \n      const startIndex = currentHeading.index + currentHeading[0].length;\n      const endIndex = nextHeading ? nextHeading.index : content.length;\n      \n      const sectionContent = content.substring(startIndex, endIndex).trim();\n      \n      if (sectionContent.length < 50) { // Less than 50 characters\n        sections.push(currentHeading[2]);\n      }\n    }\n    \n    return sections;\n  }\n\n  detectComplexTerms(content) {\n    const complexTerms = [\n      'API', 'SDK', 'JSON', 'XML', 'HTTP', 'HTTPS', 'REST', 'SOAP',\n      'authentication', 'authorization', 'encryption', 'decryption',\n      'algorithm', 'heuristic', 'metadata', 'schema'\n    ];\n    \n    const foundTerms = [];\n    \n    for (const term of complexTerms) {\n      const regex = new RegExp(`\\b${term}\\b`, 'gi');\n      if (regex.test(content)) {\n        foundTerms.push(term);\n      }\n    }\n    \n    return foundTerms;\n  }\n\n  checkBrandConsistency(content) {\n    const inconsistencies = [];\n    \n    const variations = [\n      'Trend Vision 1',\n      'TrendVision One',\n      'Trend VisionOne',\n      'Vision One'\n    ];\n    \n    for (const variation of variations) {\n      if (content.includes(variation)) {\n        inconsistencies.push(variation);\n      }\n    }\n    \n    return inconsistencies;\n  }\n\n  calculateOverallScore(scores) {\n    let weightedSum = 0;\n    let totalWeight = 0;\n    \n    for (const [metric, score] of Object.entries(scores)) {\n      if (this.qualityMetrics[metric]) {\n        const weight = this.qualityMetrics[metric].weight;\n        weightedSum += score * weight;\n        totalWeight += weight;\n      }\n    }\n    \n    return totalWeight > 0 ? weightedSum / totalWeight : 0;\n  }\n\n  generateSummary(analysis) {\n    const scoreLabel = this.getScoreLabel(analysis.overallScore);\n    const criticalIssues = analysis.issues.filter(issue => issue.severity === 'high').length;\n    const totalIssues = analysis.issues.length;\n    \n    return {\n      scoreLabel: scoreLabel.label,\n      scoreColor: scoreLabel.color,\n      criticalIssues,\n      totalIssues,\n      topRecommendations: analysis.suggestions\n        .filter(s => s.priority === 'high')\n        .slice(0, 3)\n        .map(s => s.message)\n    };\n  }\n\n  getScoreLabel(score) {\n    for (const [key, range] of Object.entries(this.scoringWeights)) {\n      if (score >= range.min) {\n        return range;\n      }\n    }\n    return this.scoringWeights.critical;\n  }\n\n  // Report generation\n  generateDetailedReport(analysis) {\n    const report = [];\n    \n    report.push(chalk.blue('\\n📊 Content Quality Analysis Report'));\n    report.push(chalk.gray('=' .repeat(50)));\n    \n    // Overall score\n    const scoreLabel = this.getScoreLabel(analysis.overallScore);\n    const scorePercentage = Math.round(analysis.overallScore * 100);\n    report.push(`\\n${chalk.bold('Overall Quality Score:')} ${chalk[scoreLabel.color](`${scorePercentage}% (${scoreLabel.label})`)}`);\n    \n    // Metadata\n    report.push(`\\n${chalk.bold('Document Info:')}`);\n    report.push(`  • File: ${analysis.metadata.filename}`);\n    report.push(`  • Word Count: ${analysis.metadata.wordCount}`);\n    report.push(`  • Analyzed: ${new Date(analysis.metadata.analyzedAt).toLocaleString()}`);\n    \n    // Individual scores\n    report.push(`\\n${chalk.bold('Quality Metrics:')}`);\n    for (const [metric, score] of Object.entries(analysis.scores)) {\n      const metricInfo = this.qualityMetrics[metric];\n      const percentage = Math.round(score * 100);\n      const color = score >= 0.8 ? 'green' : score >= 0.6 ? 'yellow' : 'red';\n      report.push(`  • ${metricInfo.name}: ${chalk[color](`${percentage}%`)}`);\n    }\n    \n    // Critical issues\n    const criticalIssues = analysis.issues.filter(issue => issue.severity === 'high');\n    if (criticalIssues.length > 0) {\n      report.push(`\\n${chalk.red.bold('🚨 Critical Issues:')}`);\n      criticalIssues.forEach(issue => {\n        report.push(`  • ${issue.message}`);\n      });\n    }\n    \n    // Top suggestions\n    const topSuggestions = analysis.suggestions\n      .filter(s => s.priority === 'high')\n      .slice(0, 5);\n    \n    if (topSuggestions.length > 0) {\n      report.push(`\\n${chalk.cyan.bold('💡 Top Recommendations:')}`);\n      topSuggestions.forEach(suggestion => {\n        report.push(`  • ${suggestion.message}`);\n      });\n    }\n    \n    return report.join('\\n');\n  }\n}\n\nmodule.exports = ContentQualityAnalyzer;