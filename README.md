# AI-Centric Docs-as-Code POC

This project demonstrates an AI-enhanced documentation workflow for technical writing teams, built on top of Docusaurus 3.x with MDX support.

## Overview

This POC transforms traditional documentation workflows by integrating AI assistance at every step:
- AI-powered content planning and generation
- Intelligent VS Code environment with contextual assistance
- Dynamic content capabilities with React components
- Automated quality assurance and CI/CD pipelines
- Context-aware help system for end users

## Quick Start

### Prerequisites

- Node.js 18+ 
- Git
- VS Code (recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

This starts the development server with hot reloading at `http://localhost:3000`.

### Build

```bash
npm run build
```

## Project Structure

```
ai-docs-poc/
├── docs/                   # Documentation content (MDX files)
├── src/                    # Custom React components and pages
├── static/                 # Static assets
├── scripts/                # Conversion and automation scripts
├── .vscode/               # VS Code configuration
├── data/                  # YAML data sources for dynamic content
└── docusaurus.config.ts   # Docusaurus configuration
```

## Features

- **MD to MDX Conversion**: Automated conversion of existing Markdown files
- **AI-Enhanced Writing**: Integrated AI assistance for content creation
- **Dynamic Content**: Data-driven tables and components
- **Live Preview**: Real-time preview with hot reloading
- **Quality Automation**: Automated linting, testing, and deployment
- **Context-Aware Help**: Adaptive documentation based on user context

## Documentation

See the [docs](./docs) directory for detailed documentation on:
- Setup and configuration
- AI assistant usage
- Content creation workflows
- Deployment and maintenance

## License

MIT License - see [LICENSE](./LICENSE) for details.