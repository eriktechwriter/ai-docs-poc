#!/usr/bin/env node

/**
 * Recommended TOC Tools Setup Script
 * 
 * Based on research of available tools, this script sets up the best
 * ready-made solutions for TOC management in documentation projects.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

class RecommendedTOCTools {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    
    // Research-based recommendations
    this.recommendedTools = {
      // High Priority - Essential Tools
      essential: [
        {
          name: 'Docusaurus Auto Sidebars Plugin',
          package: 'docusaurus-plugin-auto-sidebars',
          version: 'latest',
          description: 'Automatically generates sidebars from file structure',
          features: [
            'Auto-generation from folder structure',
            'YAML configuration for custom titles',
            'Numeric ordering support',
            'Subfolder organization'
          ],
          setup: 'docusaurus-plugin',
          documentation: 'https://www.npmjs.com/package/docusaurus-plugin-auto-sidebars'
        },
        {
          name: 'DocToc',
          package: 'doctoc',
          version: 'latest',
          description: 'CLI tool for generating TOC with multi-platform compatibility',
          features: [
            'GitHub/GitLab/Bitbucket compatibility',
            'Git hooks integration',
            'Custom TOC titles',
            'Maximum heading level control',
            'Batch processing'
          ],
          setup: 'global-cli',
          documentation: 'https://github.com/thlorenz/doctoc'
        },
        {
          name: 'Markdown TOC',
          package: 'markdown-toc',
          version: 'latest',
          description: 'Programmatic TOC generation with extensive customization',
          features: [
            'CLI and programmatic API',
            'Custom bullet styles',
            'Heading filtering',
            'Remarkable plugin support',
            'JSON output for custom rendering'
          ],
          setup: 'dev-dependency',
          documentation: 'https://github.com/jonschlinkert/markdown-toc'
        }
      ],
      
      // Medium Priority - Enhancement Tools
      enhancement: [
        {
          name: 'Remark TOC Plugin',
          package: 'remark-toc',
          version: 'latest',
          description: 'Unified ecosystem plugin for TOC generation',
          features: [
            'Unified/Remark ecosystem integration',
            'Customizable heading levels',
            'Tight/loose list formatting',
            'Heading ID customization'
          ],
          setup: 'dev-dependency',
          documentation: 'https://github.com/remarkjs/remark-toc'
        },
        {
          name: 'Remote Content Plugin',
          package: 'docusaurus-plugin-remote-content',
          version: 'latest',
          description: 'Sync content from remote sources',
          features: [
            'Remote content synchronization',
            'Content modification hooks',
            'CLI sync commands',
            'Image and asset support'
          ],
          setup: 'docusaurus-plugin',
          documentation: 'https://github.com/rdilweb/docusaurus-plugin-remote-content'
        }
      ],
      
      // Low Priority - Specialized Tools
      specialized: [
        {
          name: 'GitHub Codeblock Theme',
          package: '@saucelabs/theme-github-codeblock',
          version: 'latest',
          description: 'Reference code examples from GitHub repositories',
          features: [
            'GitHub repository integration',
            'Line range selection',
            'Automatic code synchronization',
            'Custom code block titles'
          ],
          setup: 'docusaurus-theme',
          documentation: 'https://github.com/saucelabs/docusaurus-theme-github-codeblock'
        }
      ]
    };
  }

  async setupTools(priority = 'essential') {
    console.log(chalk.blue('🔧 Setting up recommended TOC management tools\\n'));
    
    const toolsToSetup = priority === 'all' 
      ? [...this.recommendedTools.essential, ...this.recommendedTools.enhancement, ...this.recommendedTools.specialized]
      : this.recommendedTools[priority] || this.recommendedTools.essential;
    
    for (const tool of toolsToSetup) {
      await this.setupTool(tool);
    }
    
    await this.createConfigurations();
    await this.updatePackageScripts();
    
    console.log(chalk.green('\\n✅ TOC tools setup complete!'));
    this.showUsageInstructions();
  }

  async setupTool(tool) {
    console.log(chalk.cyan(`📦 Setting up ${tool.name}...`));
    
    try {
      switch (tool.setup) {
        case 'global-cli':
          console.log(chalk.yellow(`   Installing ${tool.package} globally...`));
          execSync(`npm install -g ${tool.package}@${tool.version}`, { stdio: 'inherit' });
          break;
          
        case 'dev-dependency':
          console.log(chalk.yellow(`   Installing ${tool.package} as dev dependency...`));
          execSync(`npm install --save-dev ${tool.package}@${tool.version}`, { 
            cwd: this.projectRoot,
            stdio: 'inherit' 
          });
          break;
          
        case 'docusaurus-plugin':
        case 'docusaurus-theme':
          console.log(chalk.yellow(`   Installing ${tool.package} for Docusaurus...`));
          execSync(`npm install --save ${tool.package}@${tool.version}`, { 
            cwd: this.projectRoot,
            stdio: 'inherit' 
          });
          break;
      }
      
      console.log(chalk.green(`   ✅ ${tool.name} installed successfully`));
      
    } catch (error) {
      console.log(chalk.red(`   ❌ Failed to install ${tool.name}: ${error.message}`));
    }
  }

  async createConfigurations() {
    console.log(chalk.cyan('\\n⚙️  Creating configuration files...'));
    
    // Create DocToc configuration
    await this.createDocTocConfig();
    
    // Create Markdown TOC configuration
    await this.createMarkdownTocConfig();
    
    // Create Auto Sidebars configuration
    await this.createAutoSidebarsConfig();
    
    // Update Docusaurus config
    await this.updateDocusaurusConfig();
    
    console.log(chalk.green('   ✅ Configuration files created'));
  }

  async createDocTocConfig() {
    const config = {
      title: '**Table of Contents**',
      maxlevel: 4,
      mode: 'github',
      updateOnly: false,
      stdout: false
    };
    
    const configPath = path.join(this.projectRoot, '.doctocrc');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    
    // Create .doctocignore file
    const ignoreContent = `# DocToc ignore patterns
node_modules/
.docusaurus/
build/
*.log
.DS_Store
`;
    
    fs.writeFileSync(path.join(this.projectRoot, '.doctocignore'), ignoreContent);
  }

  async createMarkdownTocConfig() {
    const configPath = path.join(this.projectRoot, '.markdown-toc.json');
    const config = {
      bullets: '*',
      maxdepth: 4,
      firsth1: false,
      stripHeadingTags: true,
      append: '',
      filter: function(str, ele, arr) {
        // Filter out headings that contain "omit from toc"
        return str.toLowerCase().indexOf('omit from toc') === -1;
      }
    };
    
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  }

  async createAutoSidebarsConfig() {
    // Create sidebars.yaml for auto-sidebars plugin
    const yamlConfig = `# Auto Sidebars Configuration
# This file controls how the auto-sidebars plugin generates navigation

# Folder configurations
- getting-started:
  - "Getting Started": 1
  - installation: "Installation Guide"
  - quickstart: "Quick Start"
  
- user-guide:
  - "User Guide": 2
  - dashboard: "Dashboard Overview"
  - alerts: "Managing Alerts"
  - reports: "Reports & Analytics"
  
- api-reference:
  - "API Reference": 3
  - authentication: "Authentication"
  - endpoints: "API Endpoints"
  - examples: "Code Examples"
  
- troubleshooting:
  - "Troubleshooting": 4
  - common-issues: "Common Issues"
  - faq: "FAQ"
`;
    
    const yamlPath = path.join(this.projectRoot, 'docs', 'sidebars.yaml');
    
    // Ensure docs directory exists
    const docsDir = path.dirname(yamlPath);
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }
    
    fs.writeFileSync(yamlPath, yamlConfig);
  }

  async updateDocusaurusConfig() {
    const configPath = path.join(this.projectRoot, 'docusaurus.config.js');
    
    if (!fs.existsSync(configPath)) {
      console.log(chalk.yellow('   ⚠️  docusaurus.config.js not found, skipping Docusaurus plugin configuration'));
      return;
    }
    
    // Create a backup
    const backupPath = configPath + '.backup.' + Date.now();
    fs.copyFileSync(configPath, backupPath);
    
    console.log(chalk.yellow(`   📄 Backup created: ${path.basename(backupPath)}`));
    console.log(chalk.yellow('   ℹ️  Please manually add the following plugins to your docusaurus.config.js:'));
    
    const pluginConfig = `
// Add these plugins to your docusaurus.config.js plugins array:

plugins: [
  // Auto-generate sidebars from file structure
  'docusaurus-plugin-auto-sidebars',
  
  // Optional: Remote content synchronization
  [
    'docusaurus-plugin-remote-content',
    {
      name: 'external-docs',
      sourceBaseUrl: 'https://your-external-docs-url/',
      outDir: 'docs/external',
      documents: ['README.md', 'CHANGELOG.md'],
      performCleanup: true,
      noRuntimeDownloads: false
    }
  ]
],

// Optional: GitHub codeblock theme
themes: [
  '@saucelabs/theme-github-codeblock'
],
`;
    
    console.log(chalk.cyan(pluginConfig));
  }

  async updatePackageScripts() {
    console.log(chalk.cyan('\\n📝 Adding package.json scripts...'));
    
    const packagePath = path.join(this.projectRoot, 'package.json');
    
    if (!fs.existsSync(packagePath)) {
      console.log(chalk.yellow('   ⚠️  package.json not found, skipping script updates'));
      return;
    }
    
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    // Add TOC management scripts
    packageJson.scripts = packageJson.scripts || {};
    
    const newScripts = {
      'toc:generate': 'doctoc docs/ --github --title "**Table of Contents**"',
      'toc:update': 'doctoc docs/ --update-only --github',
      'toc:markdown': 'markdown-toc -i docs/**/*.md',
      'toc:validate': 'node scripts/validate-sidebar.js',
      'toc:visual': 'code scripts/toc-visual-editor.html',
      'docs:sync-remote': 'docusaurus download-remote-external-docs',
      'docs:clear-remote': 'docusaurus clear-remote-external-docs'
    };
    
    Object.assign(packageJson.scripts, newScripts);
    
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
    console.log(chalk.green('   ✅ Package scripts updated'));
  }

  showUsageInstructions() {
    console.log(chalk.blue('\\n📚 Usage Instructions:\\n'));
    
    console.log(chalk.yellow('🚀 Quick Start Commands:'));
    console.log('   npm run toc:generate     # Generate TOC for all markdown files');
    console.log('   npm run toc:update       # Update existing TOCs only');
    console.log('   npm run toc:validate     # Validate sidebar structure');
    console.log('   npm run toc:visual       # Open visual TOC editor\\n');
    
    console.log(chalk.yellow('🔧 Tool-Specific Usage:'));
    console.log('   DocToc:');
    console.log('     doctoc docs/           # Generate TOC for docs folder');
    console.log('     doctoc README.md       # Generate TOC for single file');
    console.log('     doctoc --help          # Show all options\\n');
    
    console.log('   Markdown TOC:');
    console.log('     markdown-toc README.md # Generate TOC to stdout');
    console.log('     markdown-toc -i docs/  # Update TOC in-place');
    console.log('     markdown-toc --json    # Output as JSON\\n');
    
    console.log(chalk.yellow('⚙️  Configuration Files:'));
    console.log('   .doctocrc              # DocToc configuration');
    console.log('   .doctocignore          # Files to ignore');
    console.log('   .markdown-toc.json     # Markdown TOC settings');
    console.log('   docs/sidebars.yaml     # Auto sidebars configuration\\n');
    
    console.log(chalk.yellow('🎯 Best Practices:'));
    console.log('   • Use consistent heading hierarchy (H1 → H2 → H3)');
    console.log('   • Add "<!-- omit from toc -->" to exclude headings');
    console.log('   • Run toc:generate before committing changes');
    console.log('   • Use numeric prefixes for ordering (1.intro.md, 2.setup.md)');
    console.log('   • Keep TOC depth to 3-4 levels for readability\\n');
    
    console.log(chalk.green('🎉 All tools are now configured and ready to use!'));
    console.log(chalk.green('🎉 Check the documentation links for detailed usage instructions.'));
  }

  showToolComparison() {
    console.log(chalk.blue('\\n📊 Tool Comparison & Recommendations:\\n'));
    
    console.log(chalk.cyan('🥇 DocToc (Recommended for most users)'));
    console.log('   ✅ Best for: GitHub/GitLab documentation');
    console.log('   ✅ Features: Multi-platform, Git hooks, CLI');
    console.log('   ✅ Use case: Standard markdown documentation\\n');
    
    console.log(chalk.cyan('🥈 Auto Sidebars Plugin (Docusaurus specific)'));
    console.log('   ✅ Best for: Docusaurus sites');
    console.log('   ✅ Features: Automatic generation, YAML config');
    console.log('   ✅ Use case: Large documentation sites\\n');
    
    console.log(chalk.cyan('🥉 Markdown TOC (Programmatic control)'));
    console.log('   ✅ Best for: Custom build processes');
    console.log('   ✅ Features: API access, custom rendering');
    console.log('   ✅ Use case: Automated documentation pipelines\\n');
    
    console.log(chalk.yellow('💡 Recommendation Matrix:'));
    console.log('   Small projects:     DocToc');
    console.log('   Docusaurus sites:   Auto Sidebars Plugin + DocToc');
    console.log('   Custom builds:      Markdown TOC + Remark TOC');
    console.log('   Enterprise:         All tools for different use cases\\n');
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const setup = new RecommendedTOCTools();
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(chalk.blue('TOC Tools Setup Script\\n'));
    console.log('Usage:');
    console.log('  node setup-recommended-toc-tools.js [options]\\n');
    console.log('Options:');
    console.log('  --essential, -e     Install essential tools only (default)');
    console.log('  --all, -a          Install all recommended tools');
    console.log('  --enhancement      Install enhancement tools');
    console.log('  --specialized      Install specialized tools');
    console.log('  --compare, -c      Show tool comparison');
    console.log('  --help, -h         Show this help\\n');
    process.exit(0);
  }
  
  if (args.includes('--compare') || args.includes('-c')) {
    setup.showToolComparison();
    process.exit(0);
  }
  
  let priority = 'essential';
  if (args.includes('--all') || args.includes('-a')) priority = 'all';
  else if (args.includes('--enhancement')) priority = 'enhancement';
  else if (args.includes('--specialized')) priority = 'specialized';
  
  setup.setupTools(priority).catch(error => {
    console.error(chalk.red('❌ Setup failed:'), error);
    process.exit(1);
  });
}

module.exports = RecommendedTOCTools;