#!/usr/bin/env node

/**
 * Content Generation CLI
 * 
 * Main CLI interface that orchestrates the entire content generation
 * and optimization pipeline.
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

// Import our content generation system
const AIContentGenerator = require('./ai-content-generator');
const ContentOptimizer = require('./content-optimizer');
const ContentQualityAnalyzer = require('./content-quality-analyzer');

class ContentGenerationCLI {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.generator = new AIContentGenerator();
    this.optimizer = new ContentOptimizer();
    this.analyzer = new ContentQualityAnalyzer();
  }

  async run() {
    console.log(chalk.blue.bold('🚀 AI-Powered Content Generation System'));
    console.log(chalk.gray('Generate, optimize, and analyze documentation content\\n'));

    try {
      // Step 1: Get generation mode
      const mode = await this.selectGenerationMode();
      
      if (mode === 'exit') {
        console.log(chalk.yellow('Goodbye! 👋'));
        return;
      }

      // Step 2: Execute based on mode
      switch (mode) {
        case 'full_pipeline':
          await this.runFullPipeline();
          break;
        case 'generate_only':
          await this.runGenerationOnly();
          break;
        case 'optimize_existing':
          await this.optimizeExistingContent();
          break;
        case 'analyze_quality':
          await this.analyzeContentQuality();
          break;
        case 'batch_process':
          await this.batchProcessContent();
          break;
      }

    } catch (error) {
      console.error(chalk.red('❌ Operation failed:'), error.message);
      if (process.env.DEBUG) {
        console.error(error.stack);
      }
      process.exit(1);
    }
  }

  async selectGenerationMode() {
    const { mode } = await inquirer.prompt([{
      type: 'list',
      name: 'mode',
      message: 'What would you like to do?',
      choices: [
        {
          name: '🔄 Full Pipeline - Generate, optimize, and analyze content',
          value: 'full_pipeline'
        },
        {
          name: '📝 Generate Only - Create content from templates',
          value: 'generate_only'
        },
        {
          name: '⚡ Optimize Existing - Improve existing content',
          value: 'optimize_existing'
        },
        {
          name: '🔍 Analyze Quality - Check content quality',
          value: 'analyze_quality'
        },
        {
          name: '📦 Batch Process - Process multiple files',
          value: 'batch_process'
        },
        {
          name: '🚪 Exit',
          value: 'exit'
        }
      ]
    }]);

    return mode;
  }

  async runFullPipeline() {
    console.log(chalk.cyan('\\n🔄 Running Full Content Generation Pipeline\\n'));

    // Step 1: Get planning data
    const planningData = await this.getPlanningData();
    if (!planningData) return;

    // Step 2: Generate content
    console.log(chalk.blue('📝 Step 1: Generating content...'));
    const generationResult = await this.generator.generateContent(planningData);

    // Step 3: Optimize content
    console.log(chalk.blue('\\n⚡ Step 2: Optimizing content...'));
    const optimizedContent = [];
    
    for (const contentItem of generationResult.generatedContent) {
      console.log(chalk.yellow(`   Optimizing ${contentItem.filename}...`));
      
      const optimizationResult = await this.optimizer.optimizeContent(
        contentItem.content,
        contentItem.metadata
      );
      
      optimizedContent.push({
        ...contentItem,
        content: optimizationResult.content,
        optimizations: optimizationResult.optimizations,
        metrics: optimizationResult.metrics
      });
    }

    // Step 4: Analyze quality
    console.log(chalk.blue('\\n🔍 Step 3: Analyzing content quality...'));
    const qualityReports = [];
    
    for (const contentItem of optimizedContent) {
      console.log(chalk.yellow(`   Analyzing ${contentItem.filename}...`));
      
      const qualityReport = await this.analyzer.analyzeContent(
        contentItem.content,
        { filename: contentItem.filename }
      );
      
      qualityReports.push(qualityReport);
    }

    // Step 5: Save final content
    console.log(chalk.blue('\\n💾 Step 4: Saving optimized content...'));
    const savedFiles = await this.saveFinalContent(optimizedContent, planningData.featureName);

    // Step 6: Generate comprehensive report
    console.log(chalk.blue('\\n📊 Step 5: Generating reports...'));
    await this.generateComprehensiveReport({
      planningData,
      generationResult,
      optimizedContent,
      qualityReports,
      savedFiles
    });

    console.log(chalk.green.bold('\\n🎉 Full pipeline completed successfully!'));
    this.displayPipelineResults(qualityReports, savedFiles);
  }

  async runGenerationOnly() {
    console.log(chalk.cyan('\\n📝 Content Generation Only\\n'));

    const planningData = await this.getPlanningData();
    if (!planningData) return;

    const result = await this.generator.generateContent(planningData);
    
    console.log(chalk.green('\\n✅ Content generation completed!'));
    this.displayGenerationResults(result);
  }

  async optimizeExistingContent() {
    console.log(chalk.cyan('\\n⚡ Optimize Existing Content\\n'));

    // Select files to optimize
    const files = await this.selectContentFiles();
    if (files.length === 0) return;

    const results = [];

    for (const filePath of files) {
      console.log(chalk.blue(`\\nOptimizing ${path.basename(filePath)}...`));
      
      const content = fs.readFileSync(filePath, 'utf8');
      const result = await this.optimizer.optimizeContent(content, {
        filename: path.basename(filePath)
      });

      // Save optimized version
      const optimizedPath = filePath.replace(/\\.mdx?$/, '.optimized.mdx');
      fs.writeFileSync(optimizedPath, result.content);

      results.push({
        originalFile: filePath,
        optimizedFile: optimizedPath,
        optimizations: result.optimizations,
        metrics: result.metrics
      });

      console.log(chalk.green(`   ✅ Saved optimized version: ${path.basename(optimizedPath)}`));
    }

    this.displayOptimizationResults(results);
  }

  async analyzeContentQuality() {
    console.log(chalk.cyan('\\n🔍 Content Quality Analysis\\n'));

    const files = await this.selectContentFiles();
    if (files.length === 0) return;

    const reports = [];

    for (const filePath of files) {
      console.log(chalk.blue(`\\nAnalyzing ${path.basename(filePath)}...`));
      
      const content = fs.readFileSync(filePath, 'utf8');
      const report = await this.analyzer.analyzeContent(content, {
        filename: path.basename(filePath)
      });

      reports.push(report);

      // Display individual report
      console.log(this.analyzer.generateDetailedReport(report));
    }

    // Generate summary report
    if (reports.length > 1) {
      this.displayQualitySummary(reports);
    }
  }

  async batchProcessContent() {
    console.log(chalk.cyan('\\n📦 Batch Process Content\\n'));

    const { directory } = await inquirer.prompt([{
      type: 'input',
      name: 'directory',
      message: 'Enter directory path to process:',
      default: './docs',
      validate: input => {
        const fullPath = path.resolve(input);
        return fs.existsSync(fullPath) ? true : 'Directory does not exist';
      }
    }]);

    const { operations } = await inquirer.prompt([{
      type: 'checkbox',
      name: 'operations',
      message: 'Select operations to perform:',
      choices: [
        { name: 'Generate content from templates', value: 'generate' },
        { name: 'Optimize existing content', value: 'optimize' },
        { name: 'Analyze content quality', value: 'analyze' }
      ],
      validate: input => input.length > 0 ? true : 'Select at least one operation'
    }]);

    await this.processBatchOperations(directory, operations);
  }

  // Helper methods
  async getPlanningData() {
    // Check for existing planning data
    const planningFile = path.join(this.projectRoot, 'planning-output.json');
    
    if (fs.existsSync(planningFile)) {
      const { useExisting } = await inquirer.prompt([{
        type: 'confirm',
        name: 'useExisting',
        message: 'Found existing planning data. Use it?',
        default: true
      }]);
      
      if (useExisting) {
        return JSON.parse(fs.readFileSync(planningFile, 'utf8'));
      }
    }

    // Get planning data interactively
    return await this.getInteractivePlanningData();
  }

  async getInteractivePlanningData() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'featureName',
        message: 'Feature name:',
        validate: input => input.length > 0 ? true : 'Feature name is required'
      },
      {
        type: 'input',
        name: 'featureDescription',
        message: 'Feature description:',
        validate: input => input.length > 0 ? true : 'Feature description is required'
      },
      {
        type: 'list',
        name: 'featureType',
        message: 'Feature type:',
        choices: [
          { name: '🛡️  Security Feature', value: 'security' },
          { name: '📊 Analytics Feature', value: 'analytics' },
          { name: '🔗 Integration Feature', value: 'integration' },
          { name: '⚙️  Configuration Feature', value: 'configuration' }
        ]
      },
      {
        type: 'list',
        name: 'audienceLevel',
        message: 'Primary audience:',
        choices: [
          { name: '👔 Business Users', value: 'business' },
          { name: '🔧 Technical Users', value: 'technical' },
          { name: '💻 Developers', value: 'developers' }
        ]
      },
      {
        type: 'checkbox',
        name: 'suggestedTemplates',
        message: 'Select templates to generate:',
        choices: [
          { name: 'Security Feature Overview', value: 'security-feature-overview.mdx' },
          { name: 'How-To Guide', value: 'task-how-to.mdx' },
          { name: 'Tutorial', value: 'task-tutorial.mdx' },
          { name: 'Integration Guide', value: 'integration-guide.mdx' },
          { name: 'Troubleshooting Reference', value: 'reference-troubleshooting.mdx' }
        ],
        validate: input => input.length > 0 ? true : 'Select at least one template'
      }
    ]);

    return answers;
  }

  async selectContentFiles() {
    const { searchPattern } = await inquirer.prompt([{
      type: 'input',
      name: 'searchPattern',
      message: 'Enter file pattern or directory:',
      default: './docs/**/*.md*'
    }]);

    // Simple file discovery (in a real implementation, use glob)
    const files = [];
    const searchDir = searchPattern.includes('*') ? './docs' : searchPattern;
    
    if (fs.existsSync(searchDir)) {
      if (fs.statSync(searchDir).isDirectory()) {
        const dirFiles = fs.readdirSync(searchDir)
          .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
          .map(file => path.join(searchDir, file));
        files.push(...dirFiles);
      } else {
        files.push(searchDir);
      }
    }

    if (files.length === 0) {
      console.log(chalk.yellow('No content files found.'));
      return [];
    }

    const { selectedFiles } = await inquirer.prompt([{
      type: 'checkbox',
      name: 'selectedFiles',
      message: 'Select files to process:',
      choices: files.map(file => ({
        name: path.basename(file),
        value: file
      })),
      validate: input => input.length > 0 ? true : 'Select at least one file'
    }]);

    return selectedFiles;
  }

  async saveFinalContent(optimizedContent, featureName) {
    const outputDir = path.join(this.projectRoot, 'generated-content', this.slugify(featureName));
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const savedFiles = [];

    for (const contentItem of optimizedContent) {
      const filePath = path.join(outputDir, contentItem.filename);
      
      // Save content
      fs.writeFileSync(filePath, contentItem.content);
      
      // Save metadata
      const metadataPath = filePath.replace(/\\.mdx?$/, '.meta.json');
      fs.writeFileSync(metadataPath, JSON.stringify({
        ...contentItem.metadata,
        optimizations: contentItem.optimizations,
        metrics: contentItem.metrics,
        processedAt: new Date().toISOString()
      }, null, 2));

      savedFiles.push({
        contentFile: filePath,
        metadataFile: metadataPath,
        wordCount: contentItem.metadata.wordCount
      });
    }

    return savedFiles;
  }

  async generateComprehensiveReport(data) {
    const reportDir = path.join(this.projectRoot, 'reports');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(reportDir, `content-generation-report-${timestamp}.json`);

    const report = {
      timestamp: new Date().toISOString(),
      planningData: data.planningData,
      generation: {
        templatesUsed: data.generationResult.generatedContent.length,
        totalWordCount: data.generationResult.generatedContent.reduce((sum, item) => 
          sum + item.metadata.wordCount, 0)
      },
      optimization: {
        totalOptimizations: data.optimizedContent.reduce((sum, item) => 
          sum + (item.optimizations?.length || 0), 0)
      },
      quality: {
        averageScore: data.qualityReports.reduce((sum, report) => 
          sum + report.overallScore, 0) / data.qualityReports.length,
        criticalIssues: data.qualityReports.reduce((sum, report) => 
          sum + report.issues.filter(issue => issue.severity === 'high').length, 0)
      },
      files: data.savedFiles
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(chalk.green(`   ✅ Comprehensive report saved: ${path.basename(reportPath)}`));
  }

  // Display methods
  displayPipelineResults(qualityReports, savedFiles) {
    console.log(chalk.cyan('\\n📊 Pipeline Results Summary:'));
    
    const avgScore = qualityReports.reduce((sum, report) => 
      sum + report.overallScore, 0) / qualityReports.length;
    const totalIssues = qualityReports.reduce((sum, report) => 
      sum + report.issues.length, 0);
    
    console.log(`   • Files Generated: ${savedFiles.length}`);
    console.log(`   • Average Quality Score: ${Math.round(avgScore * 100)}%`);
    console.log(`   • Total Issues Found: ${totalIssues}`);
    console.log(`   • Output Directory: ${path.dirname(savedFiles[0]?.contentFile || 'N/A')}`);
  }

  displayGenerationResults(result) {
    console.log(chalk.cyan('\\n📄 Generated Files:'));
    result.savedFiles.forEach(file => {
      console.log(`   • ${path.basename(file.contentFile)} (${file.wordCount} words)`);
    });
    
    if (result.enterpriseContext?.enterpriseOverview) {
      console.log(chalk.cyan(`\\n🏢 Enterprise Context: ${result.enterpriseContext.enterpriseOverview.totalDocuments} documents analyzed`));
    }
  }

  displayOptimizationResults(results) {
    console.log(chalk.cyan('\\n⚡ Optimization Results:'));
    
    results.forEach(result => {
      console.log(`\\n   📄 ${path.basename(result.originalFile)}:`);
      console.log(`      • Optimizations Applied: ${result.optimizations.length}`);
      console.log(`      • Word Count Change: ${result.metrics.originalWordCount} → ${result.metrics.optimizedWordCount}`);
      console.log(`      • Optimized File: ${path.basename(result.optimizedFile)}`);
    });
  }

  displayQualitySummary(reports) {
    console.log(chalk.cyan('\\n📊 Quality Analysis Summary:'));
    
    const avgScore = reports.reduce((sum, report) => sum + report.overallScore, 0) / reports.length;
    const totalIssues = reports.reduce((sum, report) => sum + report.issues.length, 0);
    const criticalIssues = reports.reduce((sum, report) => 
      sum + report.issues.filter(issue => issue.severity === 'high').length, 0);
    
    console.log(`   • Files Analyzed: ${reports.length}`);
    console.log(`   • Average Score: ${Math.round(avgScore * 100)}%`);
    console.log(`   • Total Issues: ${totalIssues}`);
    console.log(`   • Critical Issues: ${criticalIssues}`);
  }

  async processBatchOperations(directory, operations) {
    console.log(chalk.blue(`\\nProcessing directory: ${directory}`));
    console.log(chalk.gray(`Operations: ${operations.join(', ')}\\n`));

    // Implementation would process files in the directory
    // based on selected operations
    console.log(chalk.yellow('Batch processing implementation would go here...'));
  }

  slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
}

// CLI execution
async function main() {
  const cli = new ContentGenerationCLI();
  await cli.run();
}

// Export for use as module
module.exports = ContentGenerationCLI;

// Run CLI if called directly
if (require.main === module) {
  main().catch(error => {
    console.error(chalk.red('Fatal error:'), error.message);
    process.exit(1);
  });
}