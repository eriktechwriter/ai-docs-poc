#!/usr/bin/env node

/**
 * Feedback Processor - MVP
 * 
 * Simple system to process natural language feedback and convert it
 * into actionable improvements for content regeneration.
 * 
 * Follows MVP approach: simple, practical, leverages existing tools.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class FeedbackProcessor {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.reviewsDir = path.join(this.projectRoot, 'reviews');
    
    // Simple feedback patterns for MVP
    this.feedbackPatterns = {
      content: {
        'too short': { action: 'expand', priority: 'medium' },
        'needs more detail': { action: 'expand', priority: 'medium' },
        'add examples': { action: 'add_examples', priority: 'high' },
        'unclear': { action: 'clarify', priority: 'high' },
        'confusing': { action: 'clarify', priority: 'high' },
        'missing': { action: 'add_content', priority: 'high' }
      },
      structure: {
        'poor organization': { action: 'restructure', priority: 'medium' },
        'wrong order': { action: 'reorder', priority: 'medium' },
        'missing headings': { action: 'add_headings', priority: 'low' },
        'too many sections': { action: 'consolidate', priority: 'low' }
      },
      style: {
        'too technical': { action: 'simplify', priority: 'medium' },
        'too simple': { action: 'add_depth', priority: 'medium' },
        'wrong tone': { action: 'adjust_tone', priority: 'low' },
        'inconsistent': { action: 'standardize', priority: 'medium' }
      }
    };
  }

  processFeedback(feedbackText, contentPath) {
    console.log(chalk.blue('🔄 Processing feedback...'));
    
    const analysis = this.analyzeFeedback(feedbackText);
    const actionPlan = this.createActionPlan(analysis);
    const regenerationHints = this.createRegenerationHints(actionPlan);
    
    // Save processed feedback
    const processedFeedback = {
      originalFeedback: feedbackText,
      analysis: analysis,
      actionPlan: actionPlan,
      regenerationHints: regenerationHints,
      processedAt: new Date().toISOString()
    };
    
    const feedbackFile = path.join(contentPath, '.processed-feedback.json');
    fs.writeFileSync(feedbackFile, JSON.stringify(processedFeedback, null, 2));
    
    console.log(chalk.green('✅ Feedback processed and saved'));
    return processedFeedback;
  }

  analyzeFeedback(feedbackText) {
    const analysis = {
      categories: [],
      actions: [],
      priority: 'medium',
      sentiment: 'neutral'
    };
    
    const lowerFeedback = feedbackText.toLowerCase();
    
    // Categorize feedback using simple pattern matching
    for (const [category, patterns] of Object.entries(this.feedbackPatterns)) {
      for (const [pattern, config] of Object.entries(patterns)) {
        if (lowerFeedback.includes(pattern)) {
          analysis.categories.push(category);
          analysis.actions.push({
            action: config.action,
            priority: config.priority,
            pattern: pattern
          });
        }
      }
    }
    
    // Determine overall priority
    const priorities = analysis.actions.map(a => a.priority);
    if (priorities.includes('high')) {
      analysis.priority = 'high';
    } else if (priorities.includes('medium')) {
      analysis.priority = 'medium';
    } else {
      analysis.priority = 'low';
    }
    
    // Simple sentiment analysis
    const positiveWords = ['good', 'great', 'excellent', 'clear', 'helpful'];
    const negativeWords = ['bad', 'poor', 'unclear', 'confusing', 'missing'];
    
    const positiveCount = positiveWords.filter(word => lowerFeedback.includes(word)).length;
    const negativeCount = negativeWords.filter(word => lowerFeedback.includes(word)).length;
    
    if (positiveCount > negativeCount) {
      analysis.sentiment = 'positive';
    } else if (negativeCount > positiveCount) {
      analysis.sentiment = 'negative';
    }
    
    return analysis;
  }

  createActionPlan(analysis) {
    const actionPlan = {
      immediate: [],
      shortTerm: [],
      longTerm: []
    };
    
    // Sort actions by priority
    const highPriorityActions = analysis.actions.filter(a => a.priority === 'high');
    const mediumPriorityActions = analysis.actions.filter(a => a.priority === 'medium');
    const lowPriorityActions = analysis.actions.filter(a => a.priority === 'low');
    
    actionPlan.immediate = highPriorityActions.map(a => this.actionToDescription(a));
    actionPlan.shortTerm = mediumPriorityActions.map(a => this.actionToDescription(a));
    actionPlan.longTerm = lowPriorityActions.map(a => this.actionToDescription(a));
    
    return actionPlan;
  }

  actionToDescription(action) {
    const descriptions = {
      'expand': 'Add more detailed content and explanations',
      'add_examples': 'Include practical examples and use cases',
      'clarify': 'Improve clarity and remove ambiguous language',
      'add_content': 'Add missing information or sections',
      'restructure': 'Reorganize content for better flow',
      'reorder': 'Adjust section order for logical progression',
      'add_headings': 'Add clear headings and subheadings',
      'consolidate': 'Combine related sections to reduce complexity',
      'simplify': 'Use simpler language and reduce technical jargon',
      'add_depth': 'Provide more technical detail and depth',
      'adjust_tone': 'Modify writing tone to match audience',
      'standardize': 'Ensure consistent style and formatting'
    };
    
    return {
      action: action.action,
      description: descriptions[action.action] || 'Address feedback concern',
      priority: action.priority,
      pattern: action.pattern
    };
  }

  createRegenerationHints(actionPlan) {
    const hints = {
      templateModifications: [],
      contentFocus: [],
      styleAdjustments: []
    };
    
    // Convert action plan to regeneration hints
    const allActions = [
      ...actionPlan.immediate,
      ...actionPlan.shortTerm,
      ...actionPlan.longTerm
    ];
    
    for (const actionItem of allActions) {
      switch (actionItem.action) {
        case 'expand':
        case 'add_content':
          hints.contentFocus.push('Increase content depth and detail');
          break;
        case 'add_examples':
          hints.contentFocus.push('Include more practical examples');
          break;
        case 'clarify':
          hints.styleAdjustments.push('Focus on clarity and simplicity');
          break;
        case 'restructure':
        case 'reorder':
          hints.templateModifications.push('Improve content organization');
          break;
        case 'simplify':
          hints.styleAdjustments.push('Use simpler language');
          break;
        case 'add_depth':
          hints.contentFocus.push('Provide more technical detail');
          break;
      }
    }
    
    // Remove duplicates
    hints.templateModifications = [...new Set(hints.templateModifications)];
    hints.contentFocus = [...new Set(hints.contentFocus)];
    hints.styleAdjustments = [...new Set(hints.styleAdjustments)];
    
    return hints;
  }

  // Process feedback from review files
  async processPendingFeedback() {
    console.log(chalk.blue('🔍 Looking for pending feedback...'));
    
    if (!fs.existsSync(this.reviewsDir)) {
      console.log(chalk.yellow('No reviews directory found'));
      return;
    }
    
    const reviewFiles = fs.readdirSync(this.reviewsDir)
      .filter(file => file.endsWith('-feedback.json'));
    
    if (reviewFiles.length === 0) {
      console.log(chalk.yellow('No pending feedback found'));
      return;
    }
    
    console.log(chalk.cyan(`Found ${reviewFiles.length} feedback files to process`));
    
    for (const reviewFile of reviewFiles) {
      const reviewPath = path.join(this.reviewsDir, reviewFile);
      const reviewData = JSON.parse(fs.readFileSync(reviewPath, 'utf8'));
      
      if (reviewData.feedback && reviewData.status === 'needs_changes') {
        console.log(chalk.yellow(`\\nProcessing: ${reviewData.feature}`));
        
        // Find the content path
        const generatedDir = path.join(this.projectRoot, 'generated-content');
        const contentPath = path.join(generatedDir, reviewData.feature);
        
        if (fs.existsSync(contentPath)) {
          const processed = this.processFeedback(reviewData.feedback, contentPath);
          
          console.log(chalk.green(`✅ Processed feedback for ${reviewData.feature}`));
          console.log(chalk.gray(`   Priority: ${processed.analysis.priority}`));
          console.log(chalk.gray(`   Actions: ${processed.actionPlan.immediate.length} immediate, ${processed.actionPlan.shortTerm.length} short-term`));
        }
      }
    }
  }

  // Generate summary report of all processed feedback
  generateFeedbackSummary() {
    console.log(chalk.blue('📊 Generating feedback summary...'));
    
    const generatedDir = path.join(this.projectRoot, 'generated-content');
    if (!fs.existsSync(generatedDir)) {
      console.log(chalk.yellow('No generated content found'));
      return;
    }
    
    const summary = {
      totalFeedback: 0,
      byPriority: { high: 0, medium: 0, low: 0 },
      commonActions: {},
      features: []
    };
    
    const featureDirs = fs.readdirSync(generatedDir)
      .filter(item => fs.statSync(path.join(generatedDir, item)).isDirectory());
    
    for (const featureDir of featureDirs) {
      const feedbackFile = path.join(generatedDir, featureDir, '.processed-feedback.json');
      
      if (fs.existsSync(feedbackFile)) {
        const feedback = JSON.parse(fs.readFileSync(feedbackFile, 'utf8'));
        summary.totalFeedback++;
        summary.byPriority[feedback.analysis.priority]++;
        
        // Count common actions
        for (const action of feedback.analysis.actions) {
          summary.commonActions[action.action] = (summary.commonActions[action.action] || 0) + 1;
        }
        
        summary.features.push({
          name: featureDir,
          priority: feedback.analysis.priority,
          actionsCount: feedback.analysis.actions.length,
          processedAt: feedback.processedAt
        });
      }
    }
    
    // Save summary
    const summaryPath = path.join(this.reviewsDir, 'feedback-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    // Display summary
    console.log(chalk.cyan('\\n📋 Feedback Summary:'));
    console.log(`   Total Feedback: ${summary.totalFeedback}`);
    console.log(`   High Priority: ${summary.byPriority.high}`);
    console.log(`   Medium Priority: ${summary.byPriority.medium}`);
    console.log(`   Low Priority: ${summary.byPriority.low}`);
    
    if (Object.keys(summary.commonActions).length > 0) {
      console.log(chalk.cyan('\\n🔄 Most Common Actions:'));
      const sortedActions = Object.entries(summary.commonActions)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);
      
      for (const [action, count] of sortedActions) {
        console.log(`   ${action}: ${count} times`);
      }
    }
    
    console.log(chalk.green(`\\n✅ Summary saved: ${summaryPath}`));
  }
}

// CLI execution
async function main() {
  const processor = new FeedbackProcessor();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--pending')) {
    await processor.processPendingFeedback();
  } else if (args.includes('--summary')) {
    processor.generateFeedbackSummary();
  } else {
    console.log(chalk.blue('🔄 Feedback Processor'));
    console.log(chalk.gray('Process natural language feedback for content improvement\\n'));
    console.log('Usage:');
    console.log('  --pending   Process pending feedback from reviews');
    console.log('  --summary   Generate feedback summary report');
  }
}

module.exports = FeedbackProcessor;

if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  });
}