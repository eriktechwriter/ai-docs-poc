#!/usr/bin/env node

/**
 * TOC Extensions Setup Guide
 * 
 * This script helps users understand and configure the ready-made extensions
 * for table of contents management instead of building custom solutions.
 */

const chalk = require('chalk');

function showTOCExtensionsGuide() {
  console.log(chalk.blue('📚 Table of Contents Management - Using Ready-Made Extensions\n'));
  
  console.log(chalk.green('✅ We use proven VS Code extensions instead of custom solutions:\n'));
  
  console.log(chalk.cyan('🔧 Primary Extension: Markdown All in One'));
  console.log('   • Automatic TOC generation and updates');
  console.log('   • Drag-and-drop list reordering');
  console.log('   • Section numbering');
  console.log('   • GitHub/GitLab compatible TOC');
  console.log('   • Command: "Markdown All in One: Create Table of Contents"');
  console.log('   • Auto-updates on save (configurable)\n');
  
  console.log(chalk.cyan('📖 Supporting Extensions:'));
  console.log('   • Bookmarks - Mark important sections for quick navigation');
  console.log('   • TODO Tree - Track documentation tasks and improvements');
  console.log('   • Mermaid - Visual diagrams in documentation');
  console.log('   • Built-in Outline View - Document structure navigation\n');
  
  console.log(chalk.yellow('🚀 Quick Start:'));
  console.log('1. Open any .md or .mdx file');
  console.log('2. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)');
  console.log('3. Type "Create Table of Contents"');
  console.log('4. Select where to insert the TOC');
  console.log('5. TOC will auto-update when you save the file\n');
  
  console.log(chalk.yellow('⚙️  Configuration Options:'));
  console.log('• TOC depth levels: markdown.extension.toc.levels');
  console.log('• Auto-update on save: markdown.extension.toc.updateOnSave');
  console.log('• GitHub compatibility: markdown.extension.toc.slugifyMode');
  console.log('• Exclude headings: markdown.extension.toc.omittedFromToc\n');
  
  console.log(chalk.yellow('🎯 Advanced Features:'));
  console.log('• Add "<!-- omit from toc -->" to exclude specific headings');
  console.log('• Use section numbering commands for auto-numbering');
  console.log('• Drag and drop list items to reorder');
  console.log('• Use bookmarks to mark important sections\n');
  
  console.log(chalk.green('💡 Benefits of Using Ready-Made Extensions:'));
  console.log('• ✅ Battle-tested by millions of users');
  console.log('• ✅ Regular updates and bug fixes');
  console.log('• ✅ Extensive documentation and community support');
  console.log('• ✅ Integration with VS Code ecosystem');
  console.log('• ✅ No maintenance overhead for our team');
  console.log('• ✅ Familiar interface for developers\n');
  
  console.log(chalk.blue('📋 Key Commands:'));
  console.log('• Ctrl+Shift+P → "Create Table of Contents"');
  console.log('• Ctrl+Shift+P → "Update Table of Contents"');
  console.log('• Ctrl+Shift+P → "Add/Remove Section Numbers"');
  console.log('• Ctrl+Shift+O → Navigate to heading in current file');
  console.log('• Ctrl+T → Search headings across all files');
  console.log('• Ctrl+Shift+F12 → Toggle bookmark');
  console.log('• Ctrl+Shift+L → List all bookmarks\n');
  
  console.log(chalk.magenta('🔗 Extension Links:'));
  console.log('• Markdown All in One: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one');
  console.log('• Bookmarks: https://marketplace.visualstudio.com/items?itemName=alefragnani.bookmarks');
  console.log('• TODO Tree: https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree');
  console.log('• Markdown Mermaid: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid\n');
  
  console.log(chalk.green('🎉 All extensions are pre-configured in .vscode/extensions.json'));
  console.log(chalk.green('🎉 Settings are optimized in .vscode/settings.json'));
  console.log(chalk.green('🎉 Just install the recommended extensions and start writing!\n'));
}

function showTOCBestPractices() {
  console.log(chalk.blue('📝 TOC Best Practices for Documentation:\n'));
  
  console.log(chalk.yellow('1. Structure Guidelines:'));
  console.log('   • Use consistent heading hierarchy (H1 → H2 → H3)');
  console.log('   • Limit TOC depth to 3-4 levels for readability');
  console.log('   • Use descriptive, scannable headings');
  console.log('   • Group related content under logical sections\n');
  
  console.log(chalk.yellow('2. Maintenance:'));
  console.log('   • Enable auto-update on save for consistency');
  console.log('   • Review TOC structure during content reviews');
  console.log('   • Use "omit from toc" for meta headings');
  console.log('   • Keep TOC at the top of long documents\n');
  
  console.log(chalk.yellow('3. Accessibility:'));
  console.log('   • Use semantic heading levels (don\'t skip levels)');
  console.log('   • Provide meaningful heading text');
  console.log('   • Consider screen reader navigation');
  console.log('   • Test TOC links work correctly\n');
  
  console.log(chalk.yellow('4. Integration with AI:'));
  console.log('   • Well-structured TOCs help AI understand content');
  console.log('   • Use consistent terminology in headings');
  console.log('   • Include context in heading names');
  console.log('   • Structure supports automated content generation\n');
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--best-practices') || args.includes('-bp')) {
    showTOCBestPractices();
  } else {
    showTOCExtensionsGuide();
  }
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(chalk.blue('\nUsage:'));
    console.log('  node scripts/setup-toc-extensions.js           # Show extension guide');
    console.log('  node scripts/setup-toc-extensions.js -bp      # Show best practices');
    console.log('  node scripts/setup-toc-extensions.js --help   # Show this help\n');
  }
}

module.exports = {
  showTOCExtensionsGuide,
  showTOCBestPractices
};