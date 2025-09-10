#!/usr/bin/env node

/**
 * Writer Review Interface - MVP
 * 
 * Simple CLI that leverages existing tools (Git, VS Code, GitHub) 
 * for reviewing AI-generated content. Focuses on practical workflow
 * integration rather than custom UI development.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { execSync } = require('child_process');

class WriterReviewInterface {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.reviewsDir = path.join(this.projectRoot, 'reviews');
    this.generatedDir = path.join(this.projectRoot, 'generated-content');
    
    // Ensure reviews directory exists
    if (!fs.existsSync(this.reviewsDir)) {
      fs.mkdirSync(this.reviewsDir, { recursive: true });
    }
  }

  async startReview() {
    console.log(chalk.blue.bold('📝 AI Content Review Interface'));
    console.log(chalk.gray('Review and iterate on AI-generated content\\n'));

    try {
      // Step 1: Detect available content for review
      const availableContent = await this.detectAvailableContent();
      
      if (availableContent.length === 0) {
        console.log(chalk.yellow('No AI-generated content found for review.'));
        console.log(chalk.gray('Run `npm run ai:generate` first to create content.'));
        return;
      }

      // Step 2: Select content to review
      const selectedContent = await this.selectContentForReview(availableContent);

      // Step 3: Choose review mode
      const reviewMode = await this.selectReviewMode();

      // Step 4: Execute review based on mode
      switch (reviewMode) {
        case 'vscode':
          await this.openInVSCode(selectedContent);
          break;
        case 'cli':
          await this.runCLIReview(selectedContent);
          break;
        case 'github':
          await this.createGitHubReview(selectedContent);
          break;
        case 'diff':
          await this.showDiffReview(selectedContent);
          break;
      }

    } catch (error) {
      console.error(chalk.red('❌ Review failed:'), error.message);
      process.exit(1);
    }
  }

  async detectAvailableContent() {
    const content = [];
    
    if (!fs.existsSync(this.generatedDir)) {
      return content;
    }

    const featureDirs = fs.readdirSync(this.generatedDir)
      .filter(item => fs.statSync(path.join(this.generatedDir, item)).isDirectory());

    for (const featureDir of featureDirs) {
      const featurePath = path.join(this.generatedDir, featureDir);
      const files = fs.readdirSync(featurePath)
        .filter(file => file.endsWith('.mdx') || file.endsWith('.md'));

      if (files.length > 0) {
        // Check for metadata and quality reports
        const metadataFiles = fs.readdirSync(featurePath)
          .filter(file => file.endsWith('.meta.json'));

        content.push({
          featureName: featureDir,
          path: featurePath,
          files: files,
          hasMetadata: metadataFiles.length > 0,
          lastModified: fs.statSync(featurePath).mtime,
          status: this.getReviewStatus(featurePath)
        });
      }
    }

    return content.sort((a, b) => b.lastModified - a.lastModified);
  }

  getReviewStatus(featurePath) {
    const reviewFile = path.join(featurePath, '.review-status.json');
    if (fs.existsSync(reviewFile)) {
      const status = JSON.parse(fs.readFileSync(reviewFile, 'utf8'));
      return status.status || 'pending';
    }
    return 'pending';
  }

  async selectContentForReview(availableContent) {
    const { selectedFeature } = await inquirer.prompt([{
      type: 'list',
      name: 'selectedFeature',
      message: 'Select content to review:',
      choices: availableContent.map(content => ({
        name: `${content.featureName} (${content.files.length} files, ${content.status})`,
        value: content
      }))
    }]);

    return selectedFeature;
  }

  async selectReviewMode() {
    const { mode } = await inquirer.prompt([{
      type: 'list',
      name: 'mode',
      message: 'How would you like to review the content?',
      choices: [
        {
          name: '🔧 VS Code - Open files in VS Code with review panel',
          value: 'vscode'
        },
        {
          name: '💻 CLI - Interactive command-line review',
          value: 'cli'
        },
        {
          name: '🔀 Diff - Show changes and comparisons',
          value: 'diff'
        },
        {
          name: '🐙 GitHub - Create pull request for team review',
          value: 'github'
        }
      ]
    }]);

    return mode;
  }

  async openInVSCode(content) {
    console.log(chalk.blue('\\n🔧 Opening in VS Code...'));
    
    try {
      // Create a review workspace
      const workspaceConfig = this.createVSCodeWorkspace(content);
      const workspacePath = path.join(content.path, 'review-workspace.code-workspace');
      
      fs.writeFileSync(workspacePath, JSON.stringify(workspaceConfig, null, 2));
      
      // Open VS Code with the workspace
      execSync(`code "${workspacePath}"`, { stdio: 'inherit' });
      
      console.log(chalk.green('✅ VS Code opened with review workspace'));
      console.log(chalk.gray('Review files are organized in the sidebar'));
      
      // Wait for review completion
      await this.waitForVSCodeReview(content);
      
    } catch (error) {
      console.log(chalk.yellow('⚠️  Could not open VS Code automatically'));
      console.log(chalk.gray(`Please open: ${content.path}`));
      await this.runCLIReview(content);
    }
  }

  createVSCodeWorkspace(content) {
    return {
      folders: [
        {
          name: "Generated Content",
          path: content.path
        },
        {
          name: "Templates",
          path: path.join(this.projectRoot, 'templates')
        },
        {
          name: "Documentation",
          path: path.join(this.projectRoot, 'docs')
        }
      ],
      settings: {
        "files.exclude": {
          "**/.git": true,
          "**/node_modules": true,
          "**/*.meta.json": false
        }
      },
      extensions: {
        recommendations: [
          "yzhang.markdown-all-in-one",
          "davidanson.vscode-markdownlint",
          "streetsidesoftware.code-spell-checker"
        ]
      }
    };
  }

  async waitForVSCodeReview(content) {
    console.log(chalk.cyan('\\n📝 Review the content in VS Code, then return here...'));
    
    const { reviewComplete } = await inquirer.prompt([{
      type: 'confirm',
      name: 'reviewComplete',
      message: 'Have you completed your review in VS Code?',
      default: false
    }]);

    if (reviewComplete) {
      await this.collectReviewFeedback(content);
    }
  }

  async runCLIReview(content) {
    console.log(chalk.blue(`\\n💻 CLI Review: ${content.featureName}`));
    console.log(chalk.gray('=' .repeat(50)));

    // Show content summary
    await this.showContentSummary(content);

    // Review each file
    for (const file of content.files) {
      await this.reviewFile(content, file);
    }

    // Collect overall feedback
    await this.collectReviewFeedback(content);
  }

  async showContentSummary(content) {
    console.log(chalk.cyan('\\n📊 Content Summary:'));
    console.log(`   • Feature: ${content.featureName}`);
    console.log(`   • Files: ${content.files.length}`);
    console.log(`   • Status: ${content.status}`);
    console.log(`   • Last Modified: ${content.lastModified.toLocaleString()}`);

    // Show quality scores if available
    const qualityData = this.getQualityData(content);
    if (qualityData) {
      console.log(`   • Quality Score: ${Math.round(qualityData.overallScore * 100)}%`);
      console.log(`   • Issues: ${qualityData.totalIssues}`);
    }
  }

  getQualityData(content) {
    try {
      const reportFiles = fs.readdirSync(content.path)
        .filter(file => file.includes('quality') && file.endsWith('.json'));
      
      if (reportFiles.length > 0) {
        const reportPath = path.join(content.path, reportFiles[0]);
        return JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      }
    } catch (error) {
      // No quality data available
    }
    return null;
  }

  async reviewFile(content, filename) {
    const filePath = path.join(content.path, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    console.log(chalk.yellow(`\\n📄 Reviewing: ${filename}`));
    console.log(chalk.gray('-'.repeat(30)));
    
    // Show file preview
    const preview = fileContent.substring(0, 300) + (fileContent.length > 300 ? '...' : '');
    console.log(preview);
    
    const { action } = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: `What would you like to do with ${filename}?`,
      choices: [
        { name: '✅ Approve - Content looks good', value: 'approve' },
        { name: '📝 Request Changes - Needs improvement', value: 'changes' },
        { name: '👀 View Full Content - See complete file', value: 'view' },
        { name: '⏭️  Skip - Review later', value: 'skip' }
      ]
    }]);

    switch (action) {
      case 'approve':
        await this.approveFile(content, filename);
        break;
      case 'changes':
        await this.requestChanges(content, filename);
        break;
      case 'view':
        console.log(chalk.gray('\\n' + '='.repeat(50)));
        console.log(fileContent);
        console.log(chalk.gray('='.repeat(50)));
        await this.reviewFile(content, filename); // Re-prompt after viewing
        break;
      case 'skip':
        console.log(chalk.gray('Skipped for now'));
        break;
    }
  }

  async approveFile(content, filename) {
    console.log(chalk.green(`✅ Approved: ${filename}`));
    
    // Record approval
    this.recordFileReview(content, filename, 'approved', null);
  }

  async requestChanges(content, filename) {
    const { feedback } = await inquirer.prompt([{
      type: 'input',
      name: 'feedback',
      message: 'What changes are needed?',
      validate: input => input.length > 0 ? true : 'Please provide feedback'
    }]);

    console.log(chalk.yellow(`📝 Changes requested for: ${filename}`));
    console.log(chalk.gray(`Feedback: ${feedback}`));
    
    // Record feedback
    this.recordFileReview(content, filename, 'changes_requested', feedback);
  }

  recordFileReview(content, filename, status, feedback) {
    const reviewFile = path.join(content.path, '.review-data.json');
    let reviewData = {};
    
    if (fs.existsSync(reviewFile)) {
      reviewData = JSON.parse(fs.readFileSync(reviewFile, 'utf8'));
    }
    
    if (!reviewData.files) {
      reviewData.files = {};
    }
    
    reviewData.files[filename] = {
      status: status,
      feedback: feedback,
      reviewedAt: new Date().toISOString(),
      reviewer: process.env.USER || 'unknown'
    };
    
    fs.writeFileSync(reviewFile, JSON.stringify(reviewData, null, 2));
  }

  async collectReviewFeedback(content) {
    console.log(chalk.cyan('\\n📋 Overall Review Feedback'));
    
    const questions = [
      {
        type: 'list',
        name: 'overallStatus',
        message: 'Overall content status:',
        choices: [
          { name: '✅ Approved - Ready to publish', value: 'approved' },
          { name: '📝 Needs Changes - Requires revision', value: 'needs_changes' },
          { name: '🔄 Needs Regeneration - Start over', value: 'regenerate' },
          { name: '⏸️  Pending - Review later', value: 'pending' }
        ]
      },
      {
        type: 'input',
        name: 'generalFeedback',
        message: 'General feedback or comments:',
        when: (answers) => answers.overallStatus !== 'approved'
      },
      {
        type: 'checkbox',
        name: 'improvementAreas',
        message: 'Areas for improvement:',
        choices: [
          'Content accuracy',
          'Writing style',
          'Technical depth',
          'Examples and use cases',
          'Structure and organization',
          'SEO optimization',
          'Accessibility'
        ],
        when: (answers) => answers.overallStatus === 'needs_changes'
      }
    ];

    const feedback = await inquirer.prompt(questions);
    
    // Save review summary
    await this.saveReviewSummary(content, feedback);
    
    // Handle next steps based on status
    await this.handleReviewOutcome(content, feedback);
  }

  async saveReviewSummary(content, feedback) {
    const reviewSummary = {
      featureName: content.featureName,
      reviewedAt: new Date().toISOString(),
      reviewer: process.env.USER || 'unknown',
      overallStatus: feedback.overallStatus,
      generalFeedback: feedback.generalFeedback,
      improvementAreas: feedback.improvementAreas || [],
      filesReviewed: content.files.length
    };

    // Save to reviews directory
    const reviewFileName = `${content.featureName}-review-${Date.now()}.json`;
    const reviewPath = path.join(this.reviewsDir, reviewFileName);
    fs.writeFileSync(reviewPath, JSON.stringify(reviewSummary, null, 2));

    // Update status file
    const statusPath = path.join(content.path, '.review-status.json');
    fs.writeFileSync(statusPath, JSON.stringify({
      status: feedback.overallStatus,
      lastReview: reviewSummary.reviewedAt,
      reviewer: reviewSummary.reviewer
    }, null, 2));

    console.log(chalk.green(`\\n✅ Review summary saved: ${reviewFileName}`));
  }

  async handleReviewOutcome(content, feedback) {
    switch (feedback.overallStatus) {
      case 'approved':
        await this.handleApproval(content);
        break;
      case 'needs_changes':
        await this.handleChangesNeeded(content, feedback);
        break;
      case 'regenerate':
        await this.handleRegeneration(content, feedback);
        break;
      case 'pending':
        console.log(chalk.yellow('📋 Review marked as pending'));
        break;
    }
  }

  async handleApproval(content) {
    console.log(chalk.green('\\n🎉 Content Approved!'));
    
    const { nextAction } = await inquirer.prompt([{
      type: 'list',
      name: 'nextAction',
      message: 'What would you like to do next?',
      choices: [
        { name: '📁 Copy to docs folder', value: 'copy' },
        { name: '🐙 Create pull request', value: 'pr' },
        { name: '📧 Generate summary email', value: 'email' },
        { name: '✨ Nothing - I\\'ll handle it manually', value: 'manual' }
      ]
    }]);

    switch (nextAction) {
      case 'copy':
        await this.copyToDocsFolder(content);
        break;
      case 'pr':
        await this.createPullRequest(content);
        break;
      case 'email':
        await this.generateSummaryEmail(content);
        break;
      case 'manual':
        console.log(chalk.gray('Content ready for manual handling'));
        break;
    }
  }

  async handleChangesNeeded(content, feedback) {
    console.log(chalk.yellow('\\n📝 Changes Needed'));
    
    const { iterationAction } = await inquirer.prompt([{
      type: 'list',
      name: 'iterationAction',
      message: 'How would you like to handle the changes?',
      choices: [
        { name: '🔄 Regenerate with feedback', value: 'regenerate' },
        { name: '✏️  Manual editing', value: 'manual' },
        { name: '👥 Assign to writer', value: 'assign' },
        { name: '📋 Create issue tracker', value: 'issue' }
      ]
    }]);

    switch (iterationAction) {
      case 'regenerate':
        await this.regenerateWithFeedback(content, feedback);
        break;
      case 'manual':
        console.log(chalk.gray('Opening files for manual editing...'));
        await this.openInVSCode(content);
        break;
      case 'assign':
        await this.assignToWriter(content, feedback);
        break;
      case 'issue':
        await this.createIssueTracker(content, feedback);
        break;
    }
  }

  async handleRegeneration(content, feedback) {
    console.log(chalk.blue('\\n🔄 Regenerating Content...'));
    
    // This would integrate with the AI content generator
    // to regenerate content based on feedback
    console.log(chalk.yellow('Regeneration feature would integrate with ai-content-generator.js'));
    console.log(chalk.gray('Feedback would be used to improve the next generation'));
  }

  async copyToDocsFolder(content) {
    const docsDir = path.join(this.projectRoot, 'docs');
    
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    const targetDir = path.join(docsDir, content.featureName);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    for (const file of content.files) {
      const sourcePath = path.join(content.path, file);
      const targetPath = path.join(targetDir, file);
      fs.copyFileSync(sourcePath, targetPath);
    }

    console.log(chalk.green(`✅ Content copied to docs/${content.featureName}/`));
  }

  async createPullRequest(content) {
    console.log(chalk.blue('\\n🐙 Creating Pull Request...'));
    
    try {
      // Copy content to docs folder first
      await this.copyToDocsFolder(content);
      
      // Create git branch and commit
      const branchName = `ai-content/${content.featureName}`;
      execSync(`git checkout -b ${branchName}`, { cwd: this.projectRoot });
      execSync(`git add docs/${content.featureName}/`, { cwd: this.projectRoot });
      execSync(`git commit -m "Add AI-generated content for ${content.featureName}"`, { cwd: this.projectRoot });
      
      console.log(chalk.green(`✅ Created branch: ${branchName}`));
      console.log(chalk.gray('Push the branch and create a PR on GitHub'));
      
    } catch (error) {
      console.log(chalk.yellow('⚠️  Could not create PR automatically'));
      console.log(chalk.gray('Please create the PR manually'));
    }
  }

  async generateSummaryEmail(content) {
    const emailSummary = this.createEmailSummary(content);
    const emailPath = path.join(this.reviewsDir, `${content.featureName}-summary.md`);
    
    fs.writeFileSync(emailPath, emailSummary);
    
    console.log(chalk.green(`\\n📧 Email summary generated: ${emailPath}`));
    console.log(chalk.gray('Copy and paste into your email client'));
  }

  createEmailSummary(content) {
    return `# AI Content Review Summary

**Feature:** ${content.featureName}
**Review Date:** ${new Date().toLocaleDateString()}
**Files Generated:** ${content.files.length}

## Content Overview
${content.files.map(file => `- ${file}`).join('\\n')}

## Review Status
✅ Content has been reviewed and approved

## Next Steps
- Content is ready for publication
- Files have been generated and optimized
- Quality checks have been completed

## Generated Files Location
\`generated-content/${content.featureName}/\`

---
*This summary was generated by the AI Content Review System*`;
  }

  async regenerateWithFeedback(content, feedback) {
    console.log(chalk.blue('\\n🔄 Regenerating with feedback...'));
    
    // Create feedback file for the AI generator
    const feedbackFile = path.join(content.path, '.feedback.json');
    const feedbackData = {
      generalFeedback: feedback.generalFeedback,
      improvementAreas: feedback.improvementAreas,
      requestedAt: new Date().toISOString()
    };
    
    fs.writeFileSync(feedbackFile, JSON.stringify(feedbackData, null, 2));
    
    console.log(chalk.yellow('Feedback saved for next generation cycle'));
    console.log(chalk.gray('Run `npm run ai:generate` with this feedback'));
  }

  async assignToWriter(content, feedback) {
    const { writerEmail } = await inquirer.prompt([{
      type: 'input',
      name: 'writerEmail',
      message: 'Writer email to assign:',
      validate: input => input.includes('@') ? true : 'Please enter a valid email'
    }]);

    const assignmentData = {
      assignedTo: writerEmail,
      assignedAt: new Date().toISOString(),
      feedback: feedback,
      contentPath: content.path
    };

    const assignmentFile = path.join(this.reviewsDir, `${content.featureName}-assignment.json`);
    fs.writeFileSync(assignmentFile, JSON.stringify(assignmentData, null, 2));

    console.log(chalk.green(`✅ Assigned to: ${writerEmail}`));
    console.log(chalk.gray(`Assignment details saved: ${assignmentFile}`));
  }

  async createIssueTracker(content, feedback) {
    const issueData = {
      title: `Content Review: ${content.featureName}`,
      description: feedback.generalFeedback,
      improvementAreas: feedback.improvementAreas,
      contentPath: content.path,
      createdAt: new Date().toISOString()
    };

    const issueFile = path.join(this.reviewsDir, `${content.featureName}-issues.json`);
    fs.writeFileSync(issueFile, JSON.stringify(issueData, null, 2));

    console.log(chalk.green(`✅ Issue tracker created: ${issueFile}`));
  }

  async showDiffReview(content) {
    console.log(chalk.blue('\\n🔀 Diff Review Mode'));
    
    // This would show differences between generated content and existing docs
    // For now, show a placeholder
    console.log(chalk.yellow('Diff review would show:'));
    console.log('- Changes from previous versions');
    console.log('- Differences from existing documentation');
    console.log('- Quality improvements made');
    
    await this.runCLIReview(content);
  }

  async createGitHubReview(content) {
    console.log(chalk.blue('\\n🐙 GitHub Review Mode'));
    
    // This would integrate with GitHub API to create review requests
    console.log(chalk.yellow('GitHub integration would:'));
    console.log('- Create pull request with generated content');
    console.log('- Add quality analysis as PR comments');
    console.log('- Request reviews from team members');
    console.log('- Track approval status');
    
    // Fallback to manual PR creation
    await this.createPullRequest(content);
  }
}

// CLI execution
async function main() {
  const reviewInterface = new WriterReviewInterface();
  await reviewInterface.startReview();
}

// Export for use as module
module.exports = WriterReviewInterface;

// Run CLI if called directly
if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('Fatal error:'), error.message);
    process.exit(1);
  });
}