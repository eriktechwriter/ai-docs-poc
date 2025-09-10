# Trend Vision One POC - TOC Setup Guide

## 🎯 Focused Solution for Docusaurus + MDX + VS Code

For the Trend Vision One documentation POC, we use **two essential tools** that work perfectly together:

### 1. **Docusaurus Auto Sidebars Plugin** 
- **Purpose**: Automatically generates site navigation from folder structure
- **Perfect for**: Large documentation sites with many MDX files
- **Benefit**: Zero manual sidebar maintenance

### 2. **DocToc**
- **Purpose**: Generates table of contents within individual MDX files
- **Perfect for**: Long documentation pages that need internal navigation
- **Benefit**: GitHub-compatible TOCs that auto-update

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Auto Sidebars Plugin
```bash
cd ai-docs-poc
npm install docusaurus-plugin-auto-sidebars
```

### Step 2: Install DocToc Globally
```bash
npm install -g doctoc
```

### Step 3: Configure Docusaurus
Add to your `docusaurus.config.js`:
```javascript
module.exports = {
  plugins: [
    'docusaurus-plugin-auto-sidebars'
  ],
  // ... rest of config
};
```

### Step 4: Create Sidebar Configuration
Create `docs/sidebars.yaml`:
```yaml
# Trend Vision One Documentation Structure
- getting-started:
  - "Getting Started": 1
  - installation: "Installation Guide"
  - quickstart: "Quick Start Guide"
  
- user-guide:
  - "User Guide": 2
  - dashboard: "Dashboard Overview"
  - alerts: "Managing Alerts"
  - investigations: "Threat Investigations"
  - reports: "Reports & Analytics"
  
- api-reference:
  - "API Reference": 3
  - authentication: "Authentication"
  - endpoints: "API Endpoints"
  - examples: "Code Examples"
  
- troubleshooting:
  - "Troubleshooting": 4
  - common-issues: "Common Issues"
  - faq: "Frequently Asked Questions"
```

## 📝 Writer Workflow

### For Site Navigation (Auto Sidebars)
1. **Create folders** in `docs/` following your structure
2. **Add MDX files** with numeric prefixes for ordering:
   - `1.installation.mdx`
   - `2.quickstart.mdx`
   - `3.dashboard.mdx`
3. **Customize titles** in `sidebars.yaml` if needed
4. **Sidebar updates automatically** when you add/remove files

### For Page TOCs (DocToc)
1. **Add TOC placeholder** in your MDX file:
   ```markdown
   # Page Title
   
   Brief introduction...
   
   <!-- START doctoc -->
   <!-- END doctoc -->
   
   ## Section 1
   Content here...
   ```

2. **Generate TOC** for single file:
   ```bash
   doctoc docs/user-guide/dashboard.mdx --github
   ```

3. **Generate TOCs for all files**:
   ```bash
   doctoc docs/ --github --title "**Table of Contents**"
   ```

## 🔧 VS Code Integration

### Recommended Extensions
1. **Markdown All in One** - For manual TOC editing
2. **Auto Rename Tag** - For MDX component editing
3. **Docusaurus** - Syntax highlighting and snippets

### VS Code Tasks (Already Added)
- `Ctrl+Shift+P` → "Tasks: Run Task" → "Generate TOC for All Docs"
- `Ctrl+Shift+P` → "Tasks: Run Task" → "Update Existing TOCs"

### Package Scripts (Already Added)
```bash
npm run toc:generate    # Generate TOCs for all files
npm run toc:update      # Update existing TOCs only
npm run toc:validate    # Validate sidebar structure
```

## 📁 Recommended Folder Structure

```
docs/
├── sidebars.yaml                    # Auto sidebars configuration
├── getting-started/
│   ├── 1.installation.mdx          # Numeric ordering
│   ├── 2.quickstart.mdx
│   └── 3.first-steps.mdx
├── user-guide/
│   ├── 1.dashboard.mdx
│   ├── 2.alerts.mdx
│   ├── 3.investigations.mdx
│   └── 4.reports.mdx
├── api-reference/
│   ├── 1.authentication.mdx
│   ├── 2.endpoints.mdx
│   └── 3.examples.mdx
└── troubleshooting/
    ├── 1.common-issues.mdx
    └── 2.faq.mdx
```

## 🎯 Trend Vision One Specific Configuration

### Custom Sidebar Titles
```yaml
# docs/sidebars.yaml - Trend Vision One specific
- getting-started:
  - "Getting Started with Vision One": 1
  - installation: "Installation & Setup"
  - quickstart: "5-Minute Quick Start"
  
- threat-detection:
  - "Threat Detection": 2
  - alerts: "Security Alerts"
  - investigations: "Threat Investigations"
  - hunting: "Threat Hunting"
  
- response-automation:
  - "Response & Automation": 3
  - playbooks: "Response Playbooks"
  - automation: "Automated Actions"
  - workflows: "Custom Workflows"
```

### DocToc Configuration for Vision One
Create `.doctocrc`:
```json
{
  "title": "**Contents**",
  "maxlevel": 4,
  "mode": "github",
  "updateOnly": false
}
```

## 🔄 Daily Workflow

### Adding New Documentation
1. **Create MDX file** in appropriate folder with numeric prefix
2. **Add frontmatter**:
   ```yaml
   ---
   title: "Feature Name"
   description: "Brief description for SEO"
   sidebar_position: 3
   ---
   ```
3. **Add TOC placeholder** if page will be long
4. **Write content** using MDX components
5. **Generate TOC**: `npm run toc:generate`
6. **Preview**: `npm start`

### Updating Existing Documentation
1. **Edit MDX file** content
2. **Update TOC**: `npm run toc:update` (only updates existing TOCs)
3. **Validate structure**: `npm run toc:validate`
4. **Preview changes**: Hot reload shows updates immediately

## ✅ Benefits for Trend Vision One POC

### Auto Sidebars Plugin
- ✅ **Zero maintenance** - Sidebar updates automatically
- ✅ **Consistent structure** - Follows folder organization
- ✅ **Custom titles** - Professional naming via YAML
- ✅ **Ordering control** - Numeric prefixes for sequence

### DocToc
- ✅ **GitHub compatibility** - Works in GitHub, GitLab, etc.
- ✅ **Long page navigation** - Essential for detailed guides
- ✅ **Auto-updates** - Keeps TOCs current with content
- ✅ **Batch processing** - Handle all files at once

### Combined Benefits
- ✅ **Two-level navigation** - Site-wide + page-level TOCs
- ✅ **Writer-friendly** - Simple folder + file workflow
- ✅ **Automated** - Minimal manual maintenance
- ✅ **Professional** - Enterprise-ready documentation

## 🎉 Ready to Use

The setup is complete and ready for the Trend Vision One documentation team:

1. **Folder structure** guides site navigation
2. **YAML configuration** provides professional titles
3. **DocToc integration** handles page-level TOCs
4. **VS Code tasks** automate common operations
5. **Package scripts** provide CLI access

**Perfect fit** for the Docusaurus + MDX + VS Code workflow! 🚀