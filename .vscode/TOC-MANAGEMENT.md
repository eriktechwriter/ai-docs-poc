# Table of Contents Management

This project uses **ready-made VS Code extensions** instead of custom solutions for TOC management. This approach provides better reliability, maintenance, and user experience.

## Why Ready-Made Extensions?

✅ **Battle-tested** by millions of users  
✅ **Regular updates** and bug fixes  
✅ **Extensive documentation** and community support  
✅ **Integration** with VS Code ecosystem  
✅ **No maintenance overhead** for our team  
✅ **Familiar interface** for developers  

## Primary Extension: Markdown All in One

**Extension ID**: `yzhang.markdown-all-in-one`

### Key Features
- ✨ **Automatic TOC generation** and updates
- 🔄 **Auto-update on save** (configurable)
- 📝 **Drag-and-drop** list reordering
- 🔢 **Section numbering** support
- 🐙 **GitHub/GitLab compatible** TOC format
- 🎯 **Selective heading inclusion/exclusion**

### Quick Start
1. Open any `.md` or `.mdx` file
2. Press `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac)
3. Type "Create Table of Contents"
4. Select insertion point
5. TOC auto-updates when you save

### Configuration
```json
{
  "markdown.extension.toc.levels": "2..6",
  "markdown.extension.toc.updateOnSave": true,
  "markdown.extension.toc.slugifyMode": "github",
  "markdown.extension.toc.downcaseLink": true
}
```

## Supporting Extensions

### Bookmarks (`alefragnani.bookmarks`)
- 📌 Mark important sections for quick navigation
- 🔍 List all bookmarks across files
- ⚡ Jump between bookmarks with shortcuts

### TODO Tree (`gruntfuggly.todo-tree`)
- 📋 Track documentation tasks and improvements
- 🔍 Find TODO, FIXME, NOTE comments
- 📊 Visual task overview in sidebar

### Markdown Mermaid (`bierner.markdown-mermaid`)
- 📊 Visual diagrams in documentation
- 🎨 Flowcharts, sequence diagrams, etc.
- 🔄 Live preview in VS Code

### Built-in Outline View
- 🗂️ Document structure navigation
- 🔍 Quick jump to any heading
- 📱 Collapsible section view

## Commands Reference

| Command | Shortcut | Description |
|---------|----------|-------------|
| Create Table of Contents | `Ctrl+Shift+P` → "Create..." | Generate new TOC |
| Update Table of Contents | Auto on save | Refresh existing TOC |
| Add/Remove Section Numbers | `Ctrl+Shift+P` → "Add..." | Toggle section numbering |
| Go to Symbol in File | `Ctrl+Shift+O` | Navigate to heading |
| Go to Symbol in Workspace | `Ctrl+T` | Search headings across files |
| Toggle Bookmark | `Ctrl+Shift+F12` | Mark/unmark current line |
| List Bookmarks | `Ctrl+Shift+L` | Show all bookmarks |

## Advanced Features

### Exclude Headings from TOC
```markdown
## This heading will be in TOC

## This heading won't be in TOC <!-- omit from toc -->

### This subsection also excluded
```

### Section Numbering
Use the "Add/Remove Section Numbers" command to automatically number your sections:
```markdown
## 1. Introduction
## 2. Getting Started
### 2.1. Installation
### 2.2. Configuration
## 3. Advanced Topics
```

### Custom TOC Configuration
```json
{
  "markdown.extension.toc.omittedFromToc": {
    "README.md": [
      "# Introduction",
      "## Installation"
    ]
  }
}
```

## Best Practices

### 1. Structure Guidelines
- ✅ Use consistent heading hierarchy (H1 → H2 → H3)
- ✅ Limit TOC depth to 3-4 levels for readability
- ✅ Use descriptive, scannable headings
- ✅ Group related content under logical sections

### 2. Maintenance
- ✅ Enable auto-update on save for consistency
- ✅ Review TOC structure during content reviews
- ✅ Use "omit from toc" for meta headings
- ✅ Keep TOC at the top of long documents

### 3. Accessibility
- ✅ Use semantic heading levels (don't skip levels)
- ✅ Provide meaningful heading text
- ✅ Consider screen reader navigation
- ✅ Test TOC links work correctly

### 4. AI Integration
- ✅ Well-structured TOCs help AI understand content
- ✅ Use consistent terminology in headings
- ✅ Include context in heading names
- ✅ Structure supports automated content generation

## Troubleshooting

### TOC Not Updating
1. Check `markdown.extension.toc.updateOnSave` is `true`
2. Ensure the TOC marker comments are present
3. Try manually running "Update Table of Contents"

### Wrong TOC Format
1. Check `markdown.extension.toc.slugifyMode` setting
2. For GitHub: use `"github"`
3. For GitLab: use `"gitlab"`

### Missing Headings in TOC
1. Check heading levels with `markdown.extension.toc.levels`
2. Look for `<!-- omit from toc -->` comments
3. Verify heading syntax is correct

## Getting Help

- 📖 [Markdown All in One Documentation](https://github.com/yzhang-gh/vscode-markdown)
- 🐛 [Report Issues](https://github.com/yzhang-gh/vscode-markdown/issues)
- 💬 [VS Code Markdown Documentation](https://code.visualstudio.com/docs/languages/markdown)
- 🎯 Run `node scripts/setup-toc-extensions.js` for interactive guide

## Migration from Custom Solutions

If you have existing custom TOC management:

1. **Install recommended extensions** from `.vscode/extensions.json`
2. **Remove custom TOC scripts** (they're no longer needed)
3. **Use "Create Table of Contents"** command on existing files
4. **Configure auto-update** for maintenance-free TOCs
5. **Train team** on new commands and workflows

The ready-made extensions provide all the functionality of custom solutions with better reliability and user experience.