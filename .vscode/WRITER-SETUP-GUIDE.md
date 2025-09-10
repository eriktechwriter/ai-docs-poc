# VS Code Setup Guide for Documentation Writers

## 🎯 **Complete Writer Workflow Setup**

This guide covers everything you need to set up VS Code for professional documentation writing, including MDX editing, quality tools, and AI system integration.

---

## **Step 1: Essential VS Code Extensions**

### **Core Documentation Extensions**

Install these extensions for the best writing experience:

```bash
# Open VS Code and install these extensions:
# (Go to Extensions panel: Ctrl+Shift+X / Cmd+Shift+X)
```

#### **1. Markdown Support**
- **Markdown All in One** (`yzhang.markdown-all-in-one`)
  - Table of contents generation
  - Keyboard shortcuts
  - Live preview
  - Math support

#### **2. MDX Support** 
- **MDX** (`silvenon.mdx`)
  - Syntax highlighting for MDX files
  - IntelliSense for React components
  - Error detection

#### **3. Writing Quality Tools**
- **Code Spell Checker** (`streetsidesoftware.code-spell-checker`)
  - Real-time spell checking
  - Custom dictionaries
  - Technical term support

- **markdownlint** (`davidanson.vscode-markdownlint`)
  - Markdown style and syntax checking
  - Consistent formatting
  - Best practices enforcement

- **Vale** (`errata-ai.vale-server`)
  - Advanced prose linting
  - Style guide enforcement
  - Custom rules support

#### **4. Productivity Extensions**
- **Paste Image** (`mushan.vscode-paste-image`)
  - Paste screenshots directly into markdown
  - Automatic image optimization
  - Path management

- **Markdown Table Editor** (`takumisoft68.markdown-table-editor`)
  - Visual table editing
  - Easy formatting
  - CSV import/export

- **Auto Rename Tag** (`formulahendry.auto-rename-tag`)
  - Automatically rename paired HTML/JSX tags
  - Useful for MDX components

#### **5. Git Integration**
- **GitLens** (`eamodio.gitlens`)
  - Enhanced Git capabilities
  - Blame annotations
  - History exploration

---

## **Step 2: Workspace Configuration**

### **Open the Project Properly**

1. **Open VS Code**
2. **File → Open Folder** (or `Ctrl+K Ctrl+O` / `Cmd+K Cmd+O`)
3. **Navigate to and select** the `ai-docs-poc` folder
4. **Click "Open"**

This ensures VS Code recognizes the project structure and configurations.

### **Verify Workspace Setup**

You should see this folder structure in the Explorer panel (your actual structure):
```
ai-docs-poc/
├── .continue/         # Continue AI configuration
├── .github/           # GitHub workflows and templates
├── .vale/             # Vale prose linting configuration
├── .vscode/           # VS Code configurations (settings, tasks, etc.)
├── ai-docs-poc/       # Main project folder
├── config/            # Configuration files
├── data/              # Data files and databases
├── docs/              # Published documentation
├── scripts/           # AI system scripts
├── src/               # Source code (if any)
├── static/            # Static assets
├── templates/         # Content templates
├── vscode-extension/  # VS Code extension files
├── .cspell.json       # Spell checker configuration
├── .doctocrc          # Table of contents configuration
├── .env.example       # Environment variables template
├── .eslintrc.js       # ESLint configuration
├── .gitignore         # Git ignore rules
├── .markdownlint.json # Markdown linting rules
├── .prettierrc        # Prettier formatting rules
├── .vale.ini          # Vale configuration
├── docusaurus.config.ts # Docusaurus configuration
├── package.json       # Project dependencies and scripts
├── README.md          # Project documentation
└── QUICK-START-DEMO.md # Demo guide
```

**Key folders for writers:**
- **`docs/`** - Your published documentation files
- **`templates/`** - Content templates for different document types
- **`scripts/`** - AI system scripts you'll use
- **`.vscode/`** - VS Code configurations (already set up)
- **`generated-content/`** - Will be created when you generate AI content

---

## **Step 3: Configure Settings for Writing**

### **Create Writer-Optimized Settings**

VS Code should automatically use the `.vscode/settings.json` file, but here are key settings for writers:

```json
{
  // Editor settings for writing
  "editor.wordWrap": "on",
  "editor.lineNumbers": "on",
  "editor.rulers": [80, 120],
  "editor.minimap.enabled": false,
  
  // Markdown-specific settings
  "markdown.preview.fontSize": 14,
  "markdown.preview.lineHeight": 1.6,
  "markdown.extension.toc.levels": "2..6",
  
  // Spell checker settings
  "cSpell.enabled": true,
  "cSpell.language": "en",
  "cSpell.words": [
    "Trend",
    "Vision",
    "Docusaurus",
    "MDX",
    "cybersecurity"
  ],
  
  // File associations
  "files.associations": {
    "*.mdx": "mdx"
  }
}
```

---

## **Step 4: Understanding the File Structure**

### **Where to Find Documentation Files**

#### **Published Documentation (docs/ folder)**
This is where your final documentation lives:
```
docs/
├── sample-document.mdx          # Test document (I created this)
└── [your documentation files]   # Your actual docs will go here
```

#### **AI-Generated Content (created when you generate)**
```
generated-content/              # Created automatically
├── feature-name/
│   ├── feature-overview.mdx    # Main feature documentation
│   ├── how-to-feature.mdx      # Step-by-step guides
│   ├── feature-tutorial.mdx    # Learning-oriented content
│   └── *.meta.json            # Quality and metadata files
```

#### **Templates (templates/ folder)**
```
templates/
├── security-feature-overview.mdx
├── task-how-to.mdx
├── task-tutorial.mdx
├── integration-guide.mdx
└── README.md                   # Template documentation
```

#### **Configuration Files (you can ignore most of these)**
- **`.vscode/`** - VS Code settings (already configured)
- **`.vale/`** - Writing style rules
- **`config/`** - System configuration
- **`scripts/`** - AI system scripts
- **`.cspell.json`** - Spell checker dictionary
- **`.markdownlint.json`** - Markdown style rules

---

## **Step 5: Normal Writer Workflow**

### **For Manual Documentation Writing**

#### **1. Create New Documentation**
In VS Code Explorer:
1. **Right-click on `docs/` folder**
2. **Select "New File"**
3. **Name it** `your-feature.mdx`
4. **Start writing** with proper frontmatter

#### **2. Use MDX Template Structure**
```mdx
---
title: "Feature Name"
description: "Brief description for SEO and navigation"
sidebar_position: 10
tags: [feature-type, audience]
---

# Feature Name

Brief introduction paragraph.

## Overview

Main content here...

## Prerequisites

- Requirement 1
- Requirement 2

## How to Use

Step-by-step instructions...

## Related Resources

- [Link to related docs](./related-doc.mdx)
```

#### **3. Writing Best Practices**
- **Use heading hierarchy**: H1 → H2 → H3 (don't skip levels)
- **Add alt text to images**: `![Alt text description](image.png)`
- **Use descriptive link text**: `[Configure security settings](./security.mdx)` not `[click here](./security.mdx)`
- **Include table of contents**: For documents with 4+ sections

### **For Editing AI-Generated Content**

#### **1. Review Generated Content**
```bash
# Generate content first
npm run ai:generate

# Open for review
npm run ai:review
# Select "Need to See More" → Opens in VS Code
```

#### **2. Edit in VS Code**
- **Content opens automatically** in VS Code workspace
- **Quality metadata** available in `.meta.json` files
- **Review checklist** provided in generated reports

#### **3. Common Editing Tasks**
- **Fix placeholder content**: Replace `{placeholder}` with actual content
- **Improve examples**: Add specific, relevant examples
- **Adjust tone**: Match your organization's voice
- **Add screenshots**: Use Paste Image extension
- **Update cross-references**: Link to related documentation

---

## **Step 6: Quality Tools Integration**

### **Real-Time Quality Checking**

#### **Spell Checking**
- **Red underlines**: Spelling errors
- **Right-click**: See suggestions
- **Add to dictionary**: For technical terms

#### **Markdown Linting**
- **Yellow underlines**: Style issues
- **Problems panel**: View all issues
- **Auto-fix**: Many issues can be fixed automatically

#### **Vale Prose Linting**
- **Blue underlines**: Style guide violations
- **Hover for details**: See specific rule violations
- **Custom rules**: Configured for Trend Vision One style

### **Manual Quality Checks**

#### **Run Quality Tools**
```bash
# Comprehensive quality check
npm run quality:comprehensive

# Individual tools
npm run quality:spelling
npm run quality:markdown
npm run quality:prose
```

#### **Preview Documentation**
```bash
# Start Docusaurus development server
npm run start

# View at: http://localhost:3000
```

---

## **Step 7: Working with MDX Files**

### **MDX Syntax Basics**

#### **Standard Markdown**
```mdx
# Heading
**Bold text**
*Italic text*
[Link](./other-doc.mdx)
![Image](./image.png)
```

#### **React Components in MDX**
```mdx
import { Callout } from '@/components/Callout';

<Callout type="warning">
This is a warning callout component.
</Callout>
```

#### **Code Blocks with Syntax Highlighting**
```mdx
```javascript
const example = "syntax highlighted code";
```
```

#### **Frontmatter (Document Metadata)**
```mdx
---
title: "Document Title"
description: "SEO description"
sidebar_position: 10
tags: [security, tutorial]
---
```

### **MDX Best Practices**

#### **1. Frontmatter Requirements**
- **Always include**: title, description
- **Use sidebar_position**: For navigation order
- **Add relevant tags**: For categorization

#### **2. Component Usage**
- **Import at top**: All React components
- **Use semantic components**: Callouts, tabs, code blocks
- **Test components**: Ensure they render correctly

#### **3. File Organization**
- **Descriptive filenames**: `threat-detection-setup.mdx`
- **Logical folder structure**: Group related content
- **Consistent naming**: Use kebab-case

---

## **Step 8: Keyboard Shortcuts for Writers**

### **Essential Shortcuts**

#### **Navigation**
- `Ctrl+P` / `Cmd+P`: Quick file open
- `Ctrl+Shift+E` / `Cmd+Shift+E`: Explorer panel
- `Ctrl+Shift+F` / `Cmd+Shift+F`: Search across files
- `Ctrl+G` / `Cmd+G`: Go to line

#### **Editing**
- `Ctrl+D` / `Cmd+D`: Select next occurrence
- `Alt+Up/Down` / `Option+Up/Down`: Move line up/down
- `Ctrl+/` / `Cmd+/`: Toggle comment
- `Ctrl+Shift+K` / `Cmd+Shift+K`: Delete line

#### **Markdown Specific**
- `Ctrl+Shift+V` / `Cmd+Shift+V`: Preview markdown
- `Ctrl+K V` / `Cmd+K V`: Preview to side
- `Ctrl+B` / `Cmd+B`: Toggle bold
- `Ctrl+I` / `Cmd+I`: Toggle italic

---

## **Step 9: Troubleshooting Common Issues**

### **Extension Issues**

#### **MDX Not Highlighting**
1. Check file extension is `.mdx`
2. Verify MDX extension is installed
3. Reload VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"

#### **Spell Checker Not Working**
1. Check Code Spell Checker is enabled
2. Verify language setting: `cSpell.language: "en"`
3. Add custom words to workspace dictionary

#### **Preview Not Working**
1. Ensure Markdown All in One is installed
2. Try `Ctrl+Shift+V` for preview
3. Check file is saved (unsaved changes may not preview)

### **File Access Issues**

#### **Can't Find Generated Content**
1. Verify content was generated: `ls generated-content/`
2. Check VS Code workspace includes project root
3. Refresh Explorer panel: `F5`

#### **Templates Not Loading**
1. Verify templates exist: `ls templates/`
2. Check file permissions
3. Ensure VS Code opened project folder, not individual files

---

## **Step 10: Writer Workflow Summary**

### **Daily Writing Workflow**

#### **1. Start Writing Session**
```bash
# Open VS Code to project folder
code ai-docs-poc

# Check system health
npm run system:health

# Start development server (optional)
npm run start
```

#### **2. Create or Edit Content**
- **New content**: Create in `docs/` folder
- **AI-generated content**: Edit in `generated-content/`
- **Use templates**: Copy from `templates/` folder

#### **3. Quality Check**
- **Real-time**: VS Code extensions highlight issues
- **Manual check**: `npm run quality:comprehensive`
- **Preview**: `npm run start` and view in browser

#### **4. Review and Publish**
- **Self-review**: Use quality tools and preview
- **Team review**: Commit to Git, create PR
- **Publish**: Merge to main branch

### **AI-Assisted Workflow**

#### **1. Generate Content**
```bash
npm run ai:generate
```

#### **2. Review Generated Content**
```bash
npm run ai:review
# Select "Need to See More" to open in VS Code
```

#### **3. Edit and Improve**
- **Fix placeholders**: Replace with actual content
- **Add examples**: Include relevant use cases
- **Adjust style**: Match organizational voice
- **Improve quality**: Address quality analysis suggestions

#### **4. Final Review**
```bash
npm run ai:review
# Approve when satisfied
```

---

## **🎯 Quick Start Checklist**

### **Setup Verification**
- [ ] VS Code installed with recommended extensions
- [ ] Project folder opened in VS Code (not individual files)
- [ ] Extensions working (spell check, markdown preview)
- [ ] Can navigate file structure in Explorer panel
- [ ] Can preview MDX files (`Ctrl+Shift+V`)

### **First Document Test**
- [ ] Create test MDX file in `docs/` folder
- [ ] Add frontmatter (title, description)
- [ ] Write sample content with headings
- [ ] Preview document
- [ ] Run quality check: `npm run quality:comprehensive`

### **AI Integration Test**
- [ ] Generate sample content: `npm run ai:generate`
- [ ] Review opens content in VS Code: `npm run ai:review`
- [ ] Can edit generated content
- [ ] Quality analysis shows in problems panel

---

## **🚀 You're Ready!**

With this setup, you have:
- **Professional writing environment** with quality tools
- **MDX editing capabilities** for modern documentation
- **AI system integration** for enhanced productivity
- **Quality assurance** built into your workflow
- **Team collaboration** through Git integration

**Next step**: Try generating your first AI content with `npm run ai:generate` and see how it opens in your configured VS Code environment!

---

*This setup guide ensures you have the optimal environment for both manual documentation writing and AI-assisted content creation.*