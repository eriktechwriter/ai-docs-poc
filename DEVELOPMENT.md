# Development Guide

This guide covers the technical aspects of developing with the AI-Centric Docs-as-Code POC.

## Architecture Overview

The project is built on:
- **Docusaurus 3.x**: Static site generator with MDX support
- **React 18**: Component framework
- **TypeScript**: Type safety and better developer experience
- **MDX**: Markdown with JSX components

## Key Features

### 1. MDX Support
- Write documentation in Markdown with React components
- Dynamic content through YAML data sources
- Mermaid diagrams and mathematical expressions

### 2. AI Integration
- Content planning and generation scripts
- VS Code AI assistance configuration
- Automated content enhancement

### 3. Quality Automation
- ESLint for code quality
- Prettier for formatting
- Markdownlint for Markdown
- Vale for prose quality

### 4. CI/CD Pipeline
- Automated testing and linting
- Preview deployments for PRs
- Production deployment to GitHub Pages

## Development Commands

### Core Commands
```bash
npm start              # Development server with hot reload
npm run build          # Production build
npm run serve          # Serve built site locally
npm run clear          # Clear Docusaurus cache
```

### Quality Commands
```bash
npm run lint           # ESLint check
npm run lint:fix       # Fix ESLint issues
npm run typecheck      # TypeScript check
npm run format         # Format with Prettier
npm run quality:all    # Run all quality checks
```

### AI Commands
```bash
npm run ai:plan        # AI content planning
npm run ai:generate    # AI content generation
npm run convert:md-to-mdx  # Convert MD to MDX
```

### Utility Commands
```bash
npm run setup          # Full environment setup
npm run setup:env      # Check environment requirements
npm run validate:content   # Validate content structure
```

## Configuration Files

### Core Configuration
- `docusaurus.config.ts` - Main Docusaurus configuration
- `sidebars.ts` - Navigation structure
- `package.json` - Dependencies and scripts

### Quality Configuration
- `.eslintrc.js` - ESLint rules
- `.prettierrc` - Prettier formatting
- `.markdownlint.json` - Markdown linting
- `.vale.ini` - Prose linting
- `tsconfig.json` - TypeScript configuration

### VS Code Configuration
- `.vscode/extensions.json` - Recommended extensions
- `.vscode/settings.json` - Workspace settings
- `.vscode/tasks.json` - Build tasks
- `.vscode/launch.json` - Debug configurations

## Directory Structure

### Source Code
```
src/
├── components/         # Reusable React components
│   ├── DynamicTable.tsx   # Data-driven tables
│   └── ...
├── css/               # Custom CSS styles
├── pages/             # Custom pages (optional)
└── theme/             # Theme customizations (optional)
```

### Documentation
```
docs/
├── getting-started/   # Getting started guides
├── intro.mdx         # Main introduction
└── ...               # Feature documentation
```

### Data Sources
```
data/
├── feature-matrix.yaml    # Feature comparison data
└── ...                   # Other YAML data files
```

### Scripts
```
scripts/
├── convert-md-to-mdx.js      # MD to MDX conversion
├── ai-content-planner.js     # AI content planning
├── ai-content-generator.js   # AI content generation
├── validate-content.js       # Content validation
└── setup-dev-env.js         # Environment setup
```

## Adding New Features

### 1. React Components
Create reusable components in `src/components/`:

```tsx
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

export default function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="my-component">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
```

### 2. MDX Content
Use components in MDX files:

```mdx
---
title: My Page
description: Example page with components
---

# My Page

<MyComponent title="Example">
  This is content inside the component.
</MyComponent>
```

### 3. Dynamic Data
Create YAML data files in `data/` and use them in components:

```yaml
# data/example.yaml
items:
  - name: Item 1
    value: 100
  - name: Item 2
    value: 200
```

## Debugging

### Development Server Issues
1. Clear cache: `npm run clear`
2. Reinstall dependencies: `npm run reinstall`
3. Check Node.js version: `node --version`

### Build Issues
1. Run TypeScript check: `npm run typecheck`
2. Check for linting errors: `npm run lint`
3. Validate content: `npm run validate:content`

### VS Code Issues
1. Reload window: Cmd/Ctrl + Shift + P → "Developer: Reload Window"
2. Check extension recommendations
3. Verify workspace settings

## Performance Considerations

### Build Performance
- Use incremental builds when possible
- Optimize images and assets
- Minimize bundle size

### Runtime Performance
- Lazy load components when appropriate
- Optimize search indexing
- Use efficient data structures

## Security

### Content Security
- Sanitize user inputs
- Validate MDX content
- Use secure dependencies

### CI/CD Security
- Protect sensitive environment variables
- Use secure deployment methods
- Regular dependency updates

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Module not found**
   ```bash
   # Clear cache and reinstall
   npm run reinstall
   ```

3. **TypeScript errors**
   ```bash
   # Check configuration
   npm run typecheck
   ```

4. **Linting errors**
   ```bash
   # Auto-fix issues
   npm run lint:fix
   npm run format
   ```

### Getting Help

1. Check the console for error messages
2. Review the build logs
3. Validate your configuration files
4. Check the GitHub issues for similar problems
5. Use the AI assistance tools for guidance