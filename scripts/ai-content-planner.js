#!/usr/bin/env node

/**
 * AI Content Planner - MVP Version
 * 
 * Simple chatbot interface for writers to paste feature descriptions
 * and get AI-powered documentation planning and content outlines.
 * 
 * Usage: Writers paste Jira tickets, meeting notes, Figma descriptions, etc.
 * Output: Structured documentation plans ready for content creation.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

// Import enterprise context retriever for thousands of documents
const EnterpriseContextRetriever = require('./enterprise-context-retriever');

class AIContentPlanner {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.outputDir = path.join(this.projectRoot, 'content-plans');
    this.templatesDir = path.join(this.projectRoot, 'templates');
    
    // Initialize enterprise context retriever for thousands of documents
    this.contextRetriever = null;
    
    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  async startPlanningSession() {
    console.log(chalk.blue('🤖 AI Content Planner - Trend Vision One Documentation\\n'));
    console.log(chalk.cyan('Paste your feature description below (Jira tickets, meeting notes, Figma descriptions, etc.)\\n'));
    
    const answers = await inquirer.prompt([
      {
        type: 'editor',
        name: 'featureDescription',
        message: 'Paste or type your feature description:',
        default: '# Feature Description\\n\\nPaste your content here...\\n\\n## Additional Context\\n\\n- Jira ticket: \\n- Meeting notes: \\n- Figma link: \\n- Other references: ',
        validate: (input) => {
          if (!input || input.trim().length < 10) {
            return 'Please provide a feature description (at least 10 characters)';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'featureType',
        message: 'What type of feature is this?',
        choices: [
          { name: '🔒 Security Feature (alerts, detection, response)', value: 'security' },
          { name: '📊 Analytics Feature (reports, dashboards, metrics)', value: 'analytics' },
          { name: '🔧 Configuration Feature (settings, admin, setup)', value: 'configuration' },
          { name: '🔌 Integration Feature (APIs, connectors, webhooks)', value: 'integration' },
          { name: '👤 User Experience Feature (UI, workflow, navigation)', value: 'ux' },
          { name: '🚀 Platform Feature (infrastructure, performance)', value: 'platform' },
          { name: '❓ Not sure / Mixed feature type', value: 'mixed' }
        ]
      },
      {
        type: 'list',
        name: 'audienceLevel',
        message: 'Who is the primary audience?',
        choices: [
          { name: '👨‍💼 Business Users (SOC analysts, security managers)', value: 'business' },
          { name: '🔧 Technical Users (IT admins, security engineers)', value: 'technical' },
          { name: '👨‍💻 Developers (API users, integration builders)', value: 'developers' },
          { name: '📚 Mixed Audience (needs multiple perspectives)', value: 'mixed' }
        ]
      },
      {
        type: 'list',
        name: 'urgency',
        message: 'Documentation urgency level?',
        choices: [
          { name: '🔥 High Priority (release blocker, customer-facing)', value: 'high' },
          { name: '⚡ Medium Priority (important but not blocking)', value: 'medium' },
          { name: '📝 Low Priority (nice to have, internal)', value: 'low' }
        ]
      },
      {
        type: 'input',
        name: 'featureName',
        message: 'Feature name (for file naming):',
        default: (answers) => this.extractFeatureName(answers.featureDescription),
        validate: (input) => {
          if (!input || input.trim().length < 3) {
            return 'Please provide a feature name (at least 3 characters)';
          }
          return true;
        }
      }
    ]);

    console.log(chalk.yellow('\\n🧠 Analyzing feature against existing documentation...\\n'));
    
    // Get smart context from enterprise documentation
    const enterpriseContext = await this.getEnterpriseContext(answers.featureDescription);
    
    console.log(chalk.yellow('\\n📊 Generating documentation plan with enterprise insights...\\n'));
    
    const analysis = await this.analyzeFeature(answers, enterpriseContext);
    const plan = await this.generateDocumentationPlan(analysis, enterpriseContext);
    
    await this.saveResults(answers.featureName, analysis, plan);
    
    console.log(chalk.green('\\n✅ Documentation plan generated successfully!'));
    console.log(chalk.cyan(`📁 Saved to: ${path.join(this.outputDir, this.sanitizeFilename(answers.featureName))}`));
    
    // Ask if they want to generate content immediately
    const generateNow = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'generateContent',
        message: 'Would you like to generate initial content now?',
        default: true
      }
    ]);
    
    if (generateNow.generateContent) {
      await this.generateInitialContent(plan, answers.featureName);
    }
    
    this.showNextSteps(answers.featureName);
    
    // Clean up enterprise context retriever
    if (this.contextRetriever) {
      this.contextRetriever.close();
    }
  }

  async getEnterpriseContext(featureDescription) {
    try {
      // Initialize enterprise context retriever if not already done
      if (!this.contextRetriever) {
        this.contextRetriever = new EnterpriseContextRetriever();
      }
      
      // Get smart context from thousands of documents
      const context = await this.contextRetriever.getEnterpriseContext(featureDescription, {
        maxTokens: 30000,  // Reserve tokens for other processing
        maxDocuments: 30,  // Limit for performance
        includeChunks: true,
        includeSummaries: true
      });
      
      console.log(chalk.green(`   ✅ Retrieved context from ${context.documentsIncluded} documents (${context.estimatedTokens} tokens)`));
      
      return context;
      
    } catch (error) {
      console.log(chalk.yellow(`   ⚠️  Enterprise context not available: ${error.message}`));
      console.log(chalk.yellow('   📝 Proceeding with basic analysis (run: node scripts/enterprise-doc-indexer.js)'));
      
      // Return empty context to allow basic functionality
      return {
        enterpriseOverview: { scale: 'basic', totalDocuments: 'unknown' },
        relevantDocuments: [],
        relevantChunks: [],
        contentGaps: { gaps: [], overlaps: [] },
        recommendations: []
      };
    }
  }

  extractFeatureName(description) {
    // Simple extraction of feature name from description
    const lines = description.split('\\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('#') && trimmed.length > 3) {
        return trimmed.replace(/^#+\\s*/, '').substring(0, 50);
      }
      if (trimmed.length > 10 && trimmed.length < 100) {
        return trimmed.substring(0, 50);
      }
    }
    return 'New Feature';
  }

  async analyzeFeature(answers, enterpriseContext = null) {
    // Enhanced analysis with enterprise context from thousands of documents
    const analysis = {
      featureName: answers.featureName,
      featureType: answers.featureType,
      audienceLevel: answers.audienceLevel,
      urgency: answers.urgency,
      rawDescription: answers.featureDescription,
      
      // Enhanced analysis with enterprise context
      keyComponents: this.extractKeyComponents(answers.featureDescription, answers.featureType),
      userStories: this.generateUserStories(answers.featureDescription, answers.audienceLevel),
      technicalRequirements: this.extractTechnicalRequirements(answers.featureDescription),
      documentationNeeds: this.assessDocumentationNeeds(answers),
      contentGaps: this.identifyContentGaps(answers, enterpriseContext),
      estimatedEffort: this.estimateEffort(answers),
      
      // Enterprise-specific analysis
      enterpriseInsights: this.analyzeEnterpriseInsights(enterpriseContext),
      existingContent: this.summarizeExistingContent(enterpriseContext),
      placementRecommendations: enterpriseContext?.recommendations || []
    };
    
    return analysis;
  }

  extractKeyComponents(description, featureType) {
    // Simulate component extraction based on feature type
    const componentMap = {
      security: ['Alert Rules', 'Detection Logic', 'Response Actions', 'Threat Intelligence'],
      analytics: ['Data Sources', 'Metrics', 'Visualizations', 'Export Options'],
      configuration: ['Settings Panel', 'Configuration Options', 'Validation Rules', 'Default Values'],
      integration: ['API Endpoints', 'Authentication', 'Data Format', 'Error Handling'],
      ux: ['User Interface', 'Navigation Flow', 'User Actions', 'Feedback Mechanisms'],
      platform: ['Infrastructure', 'Performance', 'Scalability', 'Monitoring'],
      mixed: ['Core Functionality', 'User Interface', 'Configuration', 'Integration Points']
    };
    
    return componentMap[featureType] || componentMap.mixed;
  }

  generateUserStories(description, audienceLevel) {
    // Generate user stories based on audience
    const storyTemplates = {
      business: [
        'As a SOC analyst, I want to quickly identify threats so that I can respond faster',
        'As a security manager, I want to see metrics and reports so that I can track our security posture',
        'As a business user, I want an intuitive interface so that I can work efficiently'
      ],
      technical: [
        'As a security engineer, I want to configure advanced settings so that I can customize the system',
        'As an IT admin, I want to integrate with existing tools so that I can maintain our workflow',
        'As a technical user, I want detailed logs and diagnostics so that I can troubleshoot issues'
      ],
      developers: [
        'As a developer, I want clear API documentation so that I can build integrations',
        'As an integration builder, I want code examples so that I can implement quickly',
        'As a developer, I want error handling guidance so that I can build robust solutions'
      ],
      mixed: [
        'As a user, I want clear guidance so that I can accomplish my goals',
        'As a stakeholder, I want to understand the value so that I can make informed decisions',
        'As a team member, I want consistent documentation so that I can collaborate effectively'
      ]
    };
    
    return storyTemplates[audienceLevel] || storyTemplates.mixed;
  }

  extractTechnicalRequirements(description) {
    // Extract technical requirements from description
    const requirements = [];
    
    if (description.toLowerCase().includes('api')) {
      requirements.push('API Documentation');
    }
    if (description.toLowerCase().includes('integration')) {
      requirements.push('Integration Guide');
    }
    if (description.toLowerCase().includes('config')) {
      requirements.push('Configuration Reference');
    }
    if (description.toLowerCase().includes('install')) {
      requirements.push('Installation Instructions');
    }
    if (description.toLowerCase().includes('troubleshoot')) {
      requirements.push('Troubleshooting Guide');
    }
    
    return requirements.length > 0 ? requirements : ['User Guide', 'Configuration Guide'];
  }

  assessDocumentationNeeds(answers) {
    const needs = {
      userGuide: true,
      apiDocs: answers.featureType === 'integration' || answers.audienceLevel === 'developers',
      configGuide: answers.featureType === 'configuration' || answers.featureType === 'platform',
      troubleshooting: answers.urgency === 'high',
      screenshots: answers.featureType === 'ux' || answers.audienceLevel === 'business',
      codeExamples: answers.audienceLevel === 'developers' || answers.featureType === 'integration',
      videoTutorial: answers.audienceLevel === 'business' && answers.urgency === 'high'
    };
    
    return needs;
  }

  identifyContentGaps(answers, enterpriseContext = null) {
    // Enhanced gap analysis using enterprise context
    const gaps = [];
    
    // Basic gap analysis
    if (answers.featureType === 'security' && !answers.featureDescription.toLowerCase().includes('alert')) {
      gaps.push('Alert configuration examples needed');
    }
    
    if (answers.audienceLevel === 'developers' && !answers.featureDescription.toLowerCase().includes('api')) {
      gaps.push('API integration examples needed');
    }
    
    if (answers.urgency === 'high' && answers.featureDescription.length < 200) {
      gaps.push('More detailed feature description needed');
    }
    
    // Enterprise-specific gap analysis
    if (enterpriseContext && enterpriseContext.contentGaps) {
      enterpriseContext.contentGaps.gaps.forEach(gap => {
        if (gap.severity === 'high') {
          gaps.push(`Enterprise gap: ${gap.description}`);
        }
      });
    }
    
    return gaps;
  }

  analyzeEnterpriseInsights(enterpriseContext) {
    if (!enterpriseContext || !enterpriseContext.enterpriseOverview) {
      return {
        scale: 'basic',
        insights: ['Enterprise context not available - using basic analysis']
      };
    }
    
    const insights = [];
    const overview = enterpriseContext.enterpriseOverview;
    
    if (overview.scale === 'enterprise') {
      insights.push(`Documentation scale: ${overview.totalDocuments} documents across enterprise`);
    }
    
    if (overview.siteInfo && overview.siteInfo.keyTopics) {
      insights.push(`Top documentation topics: ${overview.siteInfo.keyTopics.slice(0, 5).join(', ')}`);
    }
    
    if (enterpriseContext.documentsIncluded > 0) {
      insights.push(`Found ${enterpriseContext.documentsIncluded} highly relevant existing documents`);
    }
    
    if (enterpriseContext.contentGaps && enterpriseContext.contentGaps.gaps.length > 0) {
      const highSeverityGaps = enterpriseContext.contentGaps.gaps.filter(gap => gap.severity === 'high');
      if (highSeverityGaps.length > 0) {
        insights.push(`Identified ${highSeverityGaps.length} high-priority content gaps`);
      }
    }
    
    return {
      scale: overview.scale,
      insights: insights
    };
  }

  summarizeExistingContent(enterpriseContext) {
    if (!enterpriseContext || !enterpriseContext.relevantDocuments) {
      return {
        relevantDocuments: 0,
        summary: 'No existing content analysis available'
      };
    }
    
    const docs = enterpriseContext.relevantDocuments;
    const sections = [...new Set(docs.map(doc => doc.section))];
    const docTypes = [...new Set(docs.map(doc => doc.docType))];
    
    return {
      relevantDocuments: docs.length,
      sections: sections,
      documentTypes: docTypes,
      summary: `Found ${docs.length} relevant documents across ${sections.length} sections`,
      topRelevantDocs: docs.slice(0, 5).map(doc => ({
        title: doc.title,
        path: doc.path,
        relevanceScore: doc.relevanceScore
      }))
    };
  }

  estimateEffort(answers) {
    let baseHours = 4; // Base documentation effort
    
    // Adjust based on feature type
    const typeMultipliers = {
      security: 1.5,
      analytics: 1.3,
      configuration: 1.0,
      integration: 2.0,
      ux: 1.2,
      platform: 1.8,
      mixed: 1.4
    };
    
    // Adjust based on audience
    const audienceMultipliers = {
      business: 1.0,
      technical: 1.3,
      developers: 1.8,
      mixed: 1.5
    };
    
    const typeMultiplier = typeMultipliers[answers.featureType] || 1.0;
    const audienceMultiplier = audienceMultipliers[answers.audienceLevel] || 1.0;
    
    const estimatedHours = Math.ceil(baseHours * typeMultiplier * audienceMultiplier);
    
    return {
      hours: estimatedHours,
      complexity: estimatedHours <= 6 ? 'Low' : estimatedHours <= 12 ? 'Medium' : 'High',
      timeline: estimatedHours <= 6 ? '1-2 days' : estimatedHours <= 12 ? '3-5 days' : '1-2 weeks'
    };
  }

  async generateDocumentationPlan(analysis, enterpriseContext = null) {
    const plan = {
      metadata: {
        featureName: analysis.featureName,
        createdAt: new Date().toISOString(),
        estimatedEffort: analysis.estimatedEffort,
        priority: analysis.urgency
      },
      
      contentStructure: this.generateContentStructure(analysis),
      requiredSections: this.generateRequiredSections(analysis),
      suggestedTemplates: this.suggestTemplates(analysis),
      actionItems: this.generateActionItems(analysis, enterpriseContext),
      reviewChecklist: this.generateReviewChecklist(analysis),
      
      // Enterprise-specific planning
      enterpriseRecommendations: analysis.placementRecommendations,
      existingContentSummary: analysis.existingContent,
      enterpriseInsights: analysis.enterpriseInsights
    };
    
    return plan;
  }

  generateContentStructure(analysis) {
    const baseStructure = [
      {
        section: 'Overview',
        description: 'Feature introduction and value proposition',
        priority: 'high',
        estimatedWords: 200
      },
      {
        section: 'Getting Started',
        description: 'Quick start guide and prerequisites',
        priority: 'high',
        estimatedWords: 300
      }
    ];
    
    // Add sections based on feature type
    if (analysis.featureType === 'security') {
      baseStructure.push(
        {
          section: 'Alert Configuration',
          description: 'How to set up and configure alerts',
          priority: 'high',
          estimatedWords: 400
        },
        {
          section: 'Response Actions',
          description: 'Available response and remediation actions',
          priority: 'medium',
          estimatedWords: 300
        }
      );
    }
    
    if (analysis.audienceLevel === 'developers') {
      baseStructure.push(
        {
          section: 'API Reference',
          description: 'API endpoints and integration examples',
          priority: 'high',
          estimatedWords: 500
        },
        {
          section: 'Code Examples',
          description: 'Sample code and implementation patterns',
          priority: 'high',
          estimatedWords: 400
        }
      );
    }
    
    // Always add troubleshooting for high priority features
    if (analysis.urgency === 'high') {
      baseStructure.push({
        section: 'Troubleshooting',
        description: 'Common issues and solutions',
        priority: 'medium',
        estimatedWords: 250
      });
    }
    
    return baseStructure;
  }

  generateRequiredSections(analysis) {
    const sections = ['Overview', 'Getting Started'];
    
    if (analysis.documentationNeeds.apiDocs) {
      sections.push('API Reference', 'Authentication');
    }
    
    if (analysis.documentationNeeds.configGuide) {
      sections.push('Configuration', 'Settings Reference');
    }
    
    if (analysis.documentationNeeds.troubleshooting) {
      sections.push('Troubleshooting', 'FAQ');
    }
    
    return sections;
  }

  suggestTemplates(analysis) {
    const templates = [];
    
    // Good Docs Project-based template recommendations
    
    // Security feature templates
    if (analysis.featureType === 'security') {
      templates.push('security-feature-overview.mdx');
      if (analysis.documentationNeeds.userGuide) {
        templates.push('task-how-to.mdx');
      }
    }
    
    // Integration and developer templates (focus on user guides, not API docs)
    if (analysis.featureType === 'integration') {
      templates.push('task-tutorial.mdx');
      templates.push('task-how-to.mdx');
    }
    
    // Analytics and dashboard templates
    if (analysis.featureType === 'analytics') {
      templates.push('analytics-dashboard.mdx');
      templates.push('task-how-to.mdx');
    }
    
    // Configuration and admin templates
    if (analysis.featureType === 'configuration') {
      templates.push('task-how-to.mdx');
      templates.push('reference-general.mdx');
    }
    
    // UX and user interface templates
    if (analysis.featureType === 'ux') {
      templates.push('task-tutorial.mdx');
      templates.push('task-how-to.mdx');
    }
    
    // Audience-specific recommendations (focus on user documentation)
    if (analysis.audienceLevel === 'business') {
      templates.push('concept-overview.mdx');
      templates.push('task-quickstart.mdx');
    }
    
    if (analysis.audienceLevel === 'technical') {
      templates.push('task-how-to.mdx');
      templates.push('reference-troubleshooting.mdx');
    }
    
    if (analysis.audienceLevel === 'developers') {
      templates.push('task-tutorial.mdx');
      templates.push('integration-guide.mdx');
    }
    
    // Always include troubleshooting for high priority features
    if (analysis.urgency === 'high') {
      templates.push('reference-troubleshooting.mdx');
    }
    
    // Default fallback based on Good Docs Project core types
    if (templates.length === 0) {
      templates.push('concept-overview.mdx', 'task-how-to.mdx');
    }
    
    // Remove duplicates and limit to top 3 recommendations
    return [...new Set(templates)].slice(0, 3);
  }

  generateActionItems(analysis, enterpriseContext = null) {
    const items = [
      {
        task: 'Create initial content outline',
        assignee: 'Writer',
        priority: 'high',
        estimatedTime: '30 minutes'
      },
      {
        task: 'Gather screenshots and visuals',
        assignee: 'Writer/Designer',
        priority: 'medium',
        estimatedTime: '1 hour'
      }
    ];
    
    if (analysis.contentGaps.length > 0) {
      items.push({
        task: 'Address content gaps: ' + analysis.contentGaps.join(', '),
        assignee: 'Product Team',
        priority: 'high',
        estimatedTime: '2 hours'
      });
    }
    
    if (analysis.documentationNeeds.codeExamples) {
      items.push({
        task: 'Create code examples and API samples',
        assignee: 'Developer/Writer',
        priority: 'high',
        estimatedTime: '3 hours'
      });
    }
    
    // Enterprise-specific action items
    if (enterpriseContext && enterpriseContext.recommendations) {
      const highPriorityRecs = enterpriseContext.recommendations.filter(rec => 
        rec.priority === 'high' || rec.confidence === 'high'
      );
      
      highPriorityRecs.slice(0, 3).forEach(rec => {
        if (rec.type === 'document_update') {
          items.push({
            task: `Update existing document: ${rec.document.title}`,
            assignee: 'Writer',
            priority: 'medium',
            estimatedTime: '2 hours',
            reasoning: rec.reasoning
          });
        } else if (rec.type === 'section_placement') {
          items.push({
            task: `Consider placing content in "${rec.section}" section`,
            assignee: 'Writer',
            priority: 'medium',
            estimatedTime: '30 minutes',
            reasoning: rec.reasoning
          });
        }
      });
    }
    
    return items;
  }

  generateReviewChecklist(analysis) {
    const checklist = [
      'Content accuracy verified with product team',
      'Screenshots and visuals are current',
      'Links and references are working',
      'Content follows style guide',
      'SEO metadata is complete'
    ];
    
    if (analysis.documentationNeeds.apiDocs) {
      checklist.push('API examples tested and verified');
    }
    
    if (analysis.documentationNeeds.codeExamples) {
      checklist.push('Code examples run successfully');
    }
    
    return checklist;
  }

  async saveResults(featureName, analysis, plan) {
    const filename = this.sanitizeFilename(featureName);
    const outputPath = path.join(this.outputDir, filename);
    
    // Create directory for this feature
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    
    // Save analysis
    fs.writeFileSync(
      path.join(outputPath, 'analysis.json'),
      JSON.stringify(analysis, null, 2)
    );
    
    // Save plan
    fs.writeFileSync(
      path.join(outputPath, 'documentation-plan.json'),
      JSON.stringify(plan, null, 2)
    );
    
    // Save human-readable summary
    const summary = this.generateHumanReadableSummary(analysis, plan);
    fs.writeFileSync(
      path.join(outputPath, 'SUMMARY.md'),
      summary
    );
  }

  generateHumanReadableSummary(analysis, plan) {
    return `# Documentation Plan: ${analysis.featureName}

## 📋 Analysis Summary

**Feature Type**: ${analysis.featureType}
**Target Audience**: ${analysis.audienceLevel}
**Priority**: ${analysis.urgency}
**Estimated Effort**: ${analysis.estimatedEffort.hours} hours (${analysis.estimatedEffort.complexity} complexity)
**Timeline**: ${analysis.estimatedEffort.timeline}

## 🎯 Key Components

${analysis.keyComponents.map(comp => `- ${comp}`).join('\\n')}

## 👥 User Stories

${analysis.userStories.map(story => `- ${story}`).join('\\n')}

## 📚 Recommended Templates (Good Docs Project)

**Primary Template:** ${plan.suggestedTemplates[0] || 'concept-overview.mdx'}
- **Type:** ${this.getTemplateType(plan.suggestedTemplates[0])}
- **Purpose:** ${this.getTemplatePurpose(plan.suggestedTemplates[0])}

**Supporting Templates:**
${plan.suggestedTemplates.slice(1).map(template => 
  `- **${template}**: ${this.getTemplatePurpose(template)}`
).join('\\n') || '- No additional templates recommended'}

**Template Selection Reasoning:**
- Feature type "${analysis.featureType}" → ${this.explainTemplateChoice(analysis.featureType)}
- Audience "${analysis.audienceLevel}" → ${this.explainAudienceChoice(analysis.audienceLevel)}
- Priority "${analysis.urgency}" → ${this.explainPriorityChoice(analysis.urgency)}

## 📚 Content Structure

${plan.contentStructure.map(section => 
  `### ${section.section}
- **Description**: ${section.description}
- **Priority**: ${section.priority}
- **Estimated Words**: ${section.estimatedWords}
`).join('\\n')}

## ✅ Action Items

${plan.actionItems.map(item => 
  `- [ ] **${item.task}** (${item.assignee}, ${item.estimatedTime})`
).join('\\n')}

## 🔍 Content Gaps to Address

${analysis.contentGaps.length > 0 ? 
  analysis.contentGaps.map(gap => `- ${gap}`).join('\\n') : 
  '- No significant content gaps identified'
}

## 🏢 Enterprise Context Insights

**Documentation Scale**: ${analysis.enterpriseInsights.scale}
${analysis.enterpriseInsights.insights.map(insight => `- ${insight}`).join('\\n')}

## 📚 Existing Content Analysis

${analysis.existingContent.summary}

${analysis.existingContent.topRelevantDocs ? 
  '**Most Relevant Existing Documents:**\\n' + 
  analysis.existingContent.topRelevantDocs.map(doc => 
    `- [${doc.title}](${doc.path}) (${(doc.relevanceScore * 100).toFixed(0)}% relevant)`
  ).join('\\n') : ''
}

## 🎯 Enterprise Recommendations

${plan.enterpriseRecommendations.length > 0 ?
  plan.enterpriseRecommendations.slice(0, 5).map(rec => 
    `- **${rec.type}**: ${rec.reasoning || rec.description || 'See details'}`
  ).join('\\n') :
  '- No specific enterprise recommendations available'
}

## 📝 Review Checklist

${plan.reviewChecklist.map(item => `- [ ] ${item}`).join('\\n')}

## 🚀 Next Steps

1. Review this plan with the product team
2. Create initial content outline using suggested templates
3. Gather required assets (screenshots, code examples)
4. Begin content creation following the structure above
5. Schedule reviews at key milestones

---
*Generated on ${new Date().toLocaleString()} by AI Content Planner*
`;
  }

  async generateInitialContent(plan, featureName) {
    console.log(chalk.yellow('\\n📝 Generating initial content files...'));
    
    const filename = this.sanitizeFilename(featureName);
    const outputPath = path.join(this.outputDir, filename);
    
    // Generate initial MDX file
    const mdxContent = this.generateInitialMDX(plan);
    fs.writeFileSync(
      path.join(outputPath, `${filename}.mdx`),
      mdxContent
    );
    
    console.log(chalk.green(`✅ Initial MDX file created: ${filename}.mdx`));
  }

  generateInitialMDX(plan) {
    const sections = plan.contentStructure.map(section => 
      `## ${section.section}

<!-- ${section.description} -->
<!-- Estimated words: ${section.estimatedWords} -->

*Content to be added...*

`).join('\\n');

    return `---
title: "${plan.metadata.featureName}"
description: "Documentation for ${plan.metadata.featureName}"
sidebar_position: 1
---

# ${plan.metadata.featureName}

<!-- START doctoc -->
<!-- END doctoc -->

${sections}

## Additional Resources

- [Related Documentation](#)
- [API Reference](#)
- [Support](#)

---
*Last updated: ${new Date().toLocaleDateString()}*
`;
  }

  sanitizeFilename(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\\s-]/g, '')
      .replace(/\\s+/g, '-')
      .substring(0, 50);
  }

  getTemplateType(template) {
    const typeMap = {
      'security-feature-overview.mdx': 'Concept',
      'concept-overview.mdx': 'Concept',
      'concept-explanation.mdx': 'Concept',
      'task-how-to.mdx': 'Task',
      'task-tutorial.mdx': 'Task',
      'task-quickstart.mdx': 'Task',
      'reference-api.mdx': 'Reference',
      'reference-troubleshooting.mdx': 'Reference',
      'reference-general.mdx': 'Reference',
      'analytics-dashboard.mdx': 'Concept',
      'integration-api-guide.mdx': 'Reference'
    };
    return typeMap[template] || 'Mixed';
  }

  getTemplatePurpose(template) {
    const purposeMap = {
      'security-feature-overview.mdx': 'Explains what the security feature is and why it matters',
      'concept-overview.mdx': 'Provides high-level understanding of the topic',
      'concept-explanation.mdx': 'Gives detailed background and context',
      'task-how-to.mdx': 'Step-by-step instructions for specific tasks',
      'task-tutorial.mdx': 'Hands-on learning experience for beginners',
      'task-quickstart.mdx': 'Fastest way to get started',
      'reference-troubleshooting.mdx': 'Error solutions and diagnostic information',
      'reference-general.mdx': 'Structured reference information',
      'analytics-dashboard.mdx': 'Dashboard and reporting feature documentation',
      'integration-guide.mdx': 'User-focused integration setup and configuration'
    };
    return purposeMap[template] || 'General documentation template';
  }

  explainTemplateChoice(featureType) {
    const explanations = {
      'security': 'Security features need concept explanation + task guidance',
      'analytics': 'Analytics features benefit from overview + how-to approach',
      'integration': 'Integrations require reference docs + tutorials',
      'configuration': 'Configuration needs step-by-step task guidance',
      'ux': 'UX features work best with tutorials + how-to guides',
      'platform': 'Platform features need concept explanation + reference',
      'mixed': 'Mixed features benefit from concept + task combination'
    };
    return explanations[featureType] || 'Standard concept + task approach';
  }

  explainAudienceChoice(audience) {
    const explanations = {
      'business': 'Business users need concept overviews + quick start guides',
      'technical': 'Technical users prefer how-to guides + troubleshooting',
      'developers': 'Developers need integration tutorials + hands-on guides (API docs handled separately)',
      'mixed': 'Mixed audience requires multiple template types'
    };
    return explanations[audience] || 'General audience approach';
  }

  explainPriorityChoice(priority) {
    const explanations = {
      'high': 'High priority features need comprehensive coverage including troubleshooting',
      'medium': 'Medium priority features benefit from core templates',
      'low': 'Low priority features can use minimal template set'
    };
    return explanations[priority] || 'Standard template approach';
  }

  showNextSteps(featureName) {
    const filename = this.sanitizeFilename(featureName);
    
    console.log(chalk.blue('\\n🚀 Next Steps:\\n'));
    console.log(chalk.cyan('1. Review the generated plan:'));
    console.log(`   code ${path.join(this.outputDir, filename, 'SUMMARY.md')}`);
    console.log('\\n' + chalk.cyan('2. Start writing content:'));
    console.log(`   code ${path.join(this.outputDir, filename, filename + '.mdx')}`);
    console.log('\\n' + chalk.cyan('3. Move content to docs folder when ready:'));
    console.log(`   mv ${path.join(this.outputDir, filename, filename + '.mdx')} docs/`);
    console.log('\\n' + chalk.cyan('4. Generate TOC:'));
    console.log('   npm run toc:generate');
    console.log('\\n' + chalk.cyan('5. Preview in Docusaurus:'));
    console.log('   npm start');
  }
}

// CLI interface
if (require.main === module) {
  const planner = new AIContentPlanner();
  
  planner.startPlanningSession().catch(error => {
    console.error(chalk.red('❌ Planning session failed:'), error);
    process.exit(1);
  });
}

module.exports = AIContentPlanner;