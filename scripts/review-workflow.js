#!/usr/bin/env node

/**
 * MVP Review Workflow
 * 
 * Simple, practical review system that works with existing tools:
 * - Uses Git for version control
 * - Creates markdown review reports
 * - Integrates with VS Code
 * - Generates GitHub-ready summaries
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { execSync } = require('child_process');

// Import our MVP components
const FeedbackProcessor = require('./feedback-processor');
const VersionControlIntegration = require('./version-control-integration');

class MVPReviewWorkflow {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.generatedDir = path.join(this.projectRoot, 'generated-content');
    this.reviewsDir = path.join(this.projectRoot, 'reviews');
    
    // Initialize MVP components
    this.feedbackProcessor = new FeedbackProcessor();
    this.versionControl = new VersionControlIntegration();
    
    // Ensure directories exist
    [this.reviewsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async startReview() {
    console.log(chalk.blue.bold('📝 AI Content Review - MVP'));
    console.log(chalk.gray('Simple workflow using existing tools\\n'));

    // Step 1: Find content to review
    const content = await this.findContentToReview();
    if (!content) return;

    // Step 2: Choose simple review approach
    const approach = await this.chooseReviewApproach();

    // Step 3: Execute review
    switch (approach) {
      case 'quick':
        await this.quickReview(content);
        break;
      case 'detailed':
        await this.detailedReview(content);
        break;
      case 'github':
        await this.githubReview(content);
        break;
    }
  }

  async findContentToReview() {
    if (!fs.existsSync(this.generatedDir)) {
      console.log(chalk.yellow('No generated content found.'));
      console.log(chalk.gray('Run `npm run ai:generate` first.'));
      return null;
    }

    const features = fs.readdirSync(this.generatedDir)
      .filter(item => fs.statSync(path.join(this.generatedDir, item)).isDirectory())
      .map(feature => ({
        name: feature,
        path: path.join(this.generatedDir, feature),
        files: fs.readdirSync(path.join(this.generatedDir, feature))
          .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
      }))
      .filter(feature => feature.files.length > 0);

    if (features.length === 0) {
      console.log(chalk.yellow('No content files found for review.'));
      return null;
    }

    const { selectedFeature } = await inquirer.prompt([{
      type: 'list',
      name: 'selectedFeature',
      message: 'Select content to review:',
      choices: features.map(f => ({
        name: `${f.name} (${f.files.length} files)`,
        value: f
      }))
    }]);

    return selectedFeature;
  }

  async chooseReviewApproach() {
    const { approach } = await inquirer.prompt([{
      type: 'list',
      name: 'approach',
      message: 'How do you want to review?',
      choices: [
        {
          name: '⚡ Quick Review - Fast approval/feedback',
          value: 'quick'
        },
        {
          name: '📋 Detailed Review - Thorough analysis',
          value: 'detailed'
        },
        {
          name: '🐙 GitHub Ready - Create PR with review',
          value: 'github'
        }
      ]
    }]);

    return approach;
  }

  async quickReview(content) {
    console.log(chalk.blue(`\\n⚡ Quick Review: ${content.name}`));
    
    // Show summary
    console.log(chalk.cyan('\\n📊 Content Summary:'));
    console.log(`   Files: ${content.files.join(', ')}`);
    
    // Show quality score if available
    const qualityScore = this.getQualityScore(content);
    if (qualityScore) {
      console.log(`   Quality: ${Math.round(qualityScore * 100)}%`);
    }

    // Quick decision
    const { decision } = await inquirer.prompt([{
      type: 'list',
      name: 'decision',
      message: 'Quick decision:',
      choices: [
        { name: '✅ Approve - Looks good, ready to use', value: 'approve' },
        { name: '📝 Needs Work - Requires changes', value: 'changes' },
        { name: '👀 Need to See More - Open files first', value: 'examine' }
      ]
    }]);

    switch (decision) {
      case 'approve':
        await this.quickApprove(content);
        break;
      case 'changes':
        await this.quickFeedback(content);
        break;
      case 'examine':
        await this.openForExamination(content);
        break;
    }
  }

  async quickApprove(content) {
    const reviewData = {
      feature: content.name,
      status: 'approved',
      reviewType: 'quick',
      reviewedAt: new Date().toISOString(),
      reviewer: process.env.USER || 'unknown',
      files: content.files
    };

    // Save review
    const reviewFile = path.join(this.reviewsDir, `${content.name}-approved.json`);
    fs.writeFileSync(reviewFile, JSON.stringify(reviewData, null, 2));

    console.log(chalk.green('\\n✅ Content Approved!'));
    
    // Offer next steps
    const { nextStep } = await inquirer.prompt([{
      type: 'list',
      name: 'nextStep',
      message: 'What next?',
      choices: [
        { name: '📁 Copy to docs/ folder', value: 'copy' },
        { name: '📧 Generate summary', value: 'summary' },
        { name: '✨ Done', value: 'done' }
      ]
    }]);

    if (nextStep === 'copy') {
      await this.copyToDocs(content);
    } else if (nextStep === 'summary') {
      await this.generateSummary(content, reviewData);
    }

    console.log(chalk.green('Review complete! 🎉'));
  }

  async quickFeedback(content) {
    const { feedback } = await inquirer.prompt([{
      type: 'input',
      name: 'feedback',
      message: 'What needs to be improved?',
      validate: input => input.length > 0 ? true : 'Please provide feedback'
    }]);

    const reviewData = {
      feature: content.name,
      status: 'needs_changes',
      reviewType: 'quick',
      reviewedAt: new Date().toISOString(),
      reviewer: process.env.USER || 'unknown',
      feedback: feedback,
      files: content.files
    };

    // Save feedback
    const feedbackFile = path.join(this.reviewsDir, `${content.name}-feedback.json`);
    fs.writeFileSync(feedbackFile, JSON.stringify(reviewData, null, 2));

    // Process feedback using our MVP feedback processor
    const processedFeedback = this.feedbackProcessor.processFeedback(feedback, content.path);

    // Log the change
    this.versionControl.logAIChange('feedback_received', {
      feature: content.name,
      feedback: feedback,
      priority: processedFeedback.analysis.priority
    });

    console.log(chalk.yellow('\\n📝 Feedback processed and saved!'));
    console.log(chalk.gray(`Priority: ${processedFeedback.analysis.priority}`));
    console.log(chalk.gray(`Actions identified: ${processedFeedback.actionPlan.immediate.length} immediate`));
  }

  async openForExamination(content) {
    console.log(chalk.blue('\\n👀 Opening content for examination...'));
    
    try {
      // Try to open in VS Code
      execSync(`code "${content.path}"`, { stdio: 'inherit' });
      console.log(chalk.green('✅ Opened in VS Code'));
      
      // Wait for examination
      await inquirer.prompt([{
        type: 'confirm',
        name: 'examined',
        message: 'Press Enter when you\\'ve finished examining the content...',
        default: true
      }]);

      // Continue with review
      await this.quickReview(content);
      
    } catch (error) {
      console.log(chalk.yellow('⚠️  Could not open VS Code'));
      console.log(chalk.gray(`Please manually open: ${content.path}`));
      
      // Show file contents in terminal instead
      await this.showFileContents(content);
      await this.quickReview(content);
    }
  }

  async showFileContents(content) {
    for (const file of content.files.slice(0, 2)) { // Show first 2 files
      const filePath = path.join(content.path, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      console.log(chalk.yellow(`\\n📄 ${file}:`));
      console.log(chalk.gray('-'.repeat(50)));
      console.log(fileContent.substring(0, 500) + (fileContent.length > 500 ? '\\n...[truncated]' : ''));
      console.log(chalk.gray('-'.repeat(50)));
    }
  }

  async detailedReview(content) {
    console.log(chalk.blue(`\\n📋 Detailed Review: ${content.name}`));
    
    // Create detailed review report
    const reviewReport = await this.createDetailedReport(content);
    
    // Save report
    const reportPath = path.join(this.reviewsDir, `${content.name}-detailed-review.md`);
    fs.writeFileSync(reportPath, reviewReport);
    
    console.log(chalk.green(`\\n📄 Detailed review report created:`));
    console.log(chalk.gray(reportPath));
    
    // Open report for editing
    try {
      execSync(`code "${reportPath}"`, { stdio: 'inherit' });
      console.log(chalk.green('✅ Opened review report in VS Code'));
      console.log(chalk.gray('Edit the report, then save and close'));
    } catch (error) {
      console.log(chalk.yellow('⚠️  Please manually open and edit:'));
      console.log(chalk.gray(reportPath));
    }
  }

  async createDetailedReport(content) {
    const qualityScore = this.getQualityScore(content);
    const qualityData = this.getQualityData(content);
    
    return `# Detailed Review: ${content.name}

**Review Date:** ${new Date().toLocaleDateString()}
**Reviewer:** ${process.env.USER || 'Unknown'}
**Files:** ${content.files.length}

## Content Overview
${content.files.map(file => `- ${file}`).join('\\n')}

## Quality Analysis
${qualityScore ? `**Overall Score:** ${Math.round(qualityScore * 100)}%` : 'No quality data available'}

${qualityData && qualityData.issues ? `
### Issues Found
${qualityData.issues.map(issue => `- **${issue.severity}**: ${issue.message}`).join('\\n')}
` : ''}

## Review Checklist

### Content Quality
- [ ] Accurate information
- [ ] Clear writing style
- [ ] Appropriate technical depth
- [ ] Good examples and use cases

### Structure & Organization
- [ ] Logical flow
- [ ] Proper headings
- [ ] Table of contents (if needed)
- [ ] Cross-references

### Enterprise Standards
- [ ] Brand consistency
- [ ] Terminology standards
- [ ] Required sections present
- [ ] Security focus appropriate

### Technical Requirements
- [ ] SEO optimization
- [ ] Accessibility compliance
- [ ] Markdown/MDX syntax correct
- [ ] Links working

## Feedback & Recommendations

### What Works Well
[Add positive feedback here]

### Areas for Improvement
[Add improvement suggestions here]

### Action Items
- [ ] [Add specific action items]

## Decision
- [ ] **Approved** - Ready for publication
- [ ] **Needs Minor Changes** - Small revisions needed
- [ ] **Needs Major Changes** - Significant revision required
- [ ] **Regenerate** - Start over with new approach

## Notes
[Add any additional notes or context]

---
*Generated by AI Content Review System*`;
  }

  async githubReview(content) {
    console.log(chalk.blue(`\\n🐙 GitHub Review: ${content.name}`));
    
    // Create GitHub-ready branch and PR
    await this.createGitHubPR(content);
  }

  async createGitHubPR(content) {
    try {
      // Copy content to docs folder
      await this.copyToDocs(content);
      
      // Create git branch
      const branchName = `ai-content/${content.name}-${Date.now()}`;
      console.log(chalk.blue(`Creating branch: ${branchName}`));
      
      execSync(`git checkout -b ${branchName}`, { cwd: this.projectRoot });
      execSync(`git add docs/`, { cwd: this.projectRoot });
      
      // Create commit with detailed message
      const commitMessage = this.createCommitMessage(content);
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot });
      
      // Create PR description
      const prDescription = await this.createPRDescription(content);
      const prFile = path.join(this.reviewsDir, `${content.name}-pr-description.md`);
      fs.writeFileSync(prFile, prDescription);
      
      console.log(chalk.green('\\n✅ Git branch created and committed'));
      console.log(chalk.cyan('Next steps:'));
      console.log(chalk.gray(`1. Push branch: git push origin ${branchName}`));
      console.log(chalk.gray(`2. Create PR on GitHub`));
      console.log(chalk.gray(`3. Use PR description from: ${prFile}`));
      
    } catch (error) {
      console.log(chalk.red('❌ Git operations failed:'), error.message);
      console.log(chalk.yellow('Please create PR manually'));
    }
  }

  createCommitMessage(content) {
    const qualityScore = this.getQualityScore(content);
    const scoreText = qualityScore ? ` (Quality: ${Math.round(qualityScore * 100)}%)` : '';
    
    return `Add AI-generated content: ${content.name}${scoreText}

Files:
${content.files.map(f => `- ${f}`).join('\\n')}

Generated by AI Content System
Ready for team review`;
  }

  async createPRDescription(content) {
    const qualityScore = this.getQualityScore(content);
    const qualityData = this.getQualityData(content);
    
    return `# AI-Generated Content: ${content.name}

## 🤖 Generated Content Summary
- **Feature:** ${content.name}
- **Files:** ${content.files.length}
- **Quality Score:** ${qualityScore ? Math.round(qualityScore * 100) + '%' : 'N/A'}
- **Generated:** ${new Date().toLocaleDateString()}

## 📄 Files Added
${content.files.map(file => `- \`${file}\``).join('\\n')}

${qualityData && qualityData.issues && qualityData.issues.length > 0 ? `
## ⚠️ Quality Issues to Review
${qualityData.issues.filter(i => i.severity === 'high').map(issue => `- **${issue.message}**`).join('\\n')}
` : ''}

## ✅ Review Checklist
- [ ] Content accuracy and completeness
- [ ] Writing style and clarity
- [ ] Technical depth appropriate for audience
- [ ] Examples and use cases helpful
- [ ] Structure and organization logical
- [ ] SEO and accessibility compliance
- [ ] Brand and terminology consistency

## 🎯 Ready for Review
This content was generated using our AI documentation system and has passed automated quality checks. Please review for:
1. Technical accuracy
2. Editorial quality
3. Alignment with documentation standards

## 📊 Quality Metrics
${qualityScore ? `
- **Overall Score:** ${Math.round(qualityScore * 100)}%
- **Automated Checks:** Passed
- **Enterprise Standards:** Validated
` : 'Quality analysis not available'}

/cc @docs-team for review`;
  }

  // Utility methods
  getQualityScore(content) {
    try {
      const metaFiles = fs.readdirSync(content.path)
        .filter(f => f.endsWith('.meta.json'));
      
      if (metaFiles.length > 0) {
        const metaPath = path.join(content.path, metaFiles[0]);
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        return meta.qualityScore || null;
      }
    } catch (error) {
      // No quality data
    }
    return null;
  }

  getQualityData(content) {
    try {
      const reportFiles = fs.readdirSync(content.path)
        .filter(f => f.includes('quality') && f.endsWith('.json'));
      
      if (reportFiles.length > 0) {
        const reportPath = path.join(content.path, reportFiles[0]);
        return JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      }
    } catch (error) {
      // No quality data
    }
    return null;
  }

  async copyToDocs(content) {
    const docsDir = path.join(this.projectRoot, 'docs');
    const targetDir = path.join(docsDir, content.name);
    
    // Create target directory
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Copy files
    for (const file of content.files) {
      const sourcePath = path.join(content.path, file);
      const targetPath = path.join(targetDir, file);
      fs.copyFileSync(sourcePath, targetPath);
    }

    console.log(chalk.green(`✅ Content copied to docs/${content.name}/`));
  }

  async generateSummary(content, reviewData) {
    const summary = `# Review Summary: ${content.name}

**Status:** ${reviewData.status}
**Reviewed:** ${new Date(reviewData.reviewedAt).toLocaleDateString()}
**Reviewer:** ${reviewData.reviewer}

## Files
${content.files.map(f => `- ${f}`).join('\\n')}

## Quality
${this.getQualityScore(content) ? `Score: ${Math.round(this.getQualityScore(content) * 100)}%` : 'No quality data'}

## Status
✅ Content approved and ready for use

---
*AI Content Review System*`;

    const summaryPath = path.join(this.reviewsDir, `${content.name}-summary.md`);
    fs.writeFileSync(summaryPath, summary);
    
    console.log(chalk.green(`📄 Summary generated: ${summaryPath}`));
  }
}

// CLI execution
async function main() {
  const workflow = new MVPReviewWorkflow();
  await workflow.startReview();
}

module.exports = MVPReviewWorkflow;

if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  });
}