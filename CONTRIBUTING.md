# Contributing to AI-Centric Docs-as-Code POC

Thank you for your interest in contributing to this project! This guide will help you get started with the development workflow.

## Prerequisites

- Node.js 18+ 
- Git
- VS Code (recommended)

## Quick Setup

1. Clone the repository
2. Run the setup script:
   ```bash
   npm run setup
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Development Workflow

### Writing Documentation

1. Create or edit `.mdx` files in the `docs/` directory
2. Use the live preview at `http://localhost:3000`
3. Follow the style guide and linting rules

### Code Changes

1. Make changes to components in `src/`
2. Run quality checks: `npm run quality:check`
3. Format code: `npm run format`
4. Test the build: `npm run build`

### AI-Assisted Workflows

This project includes AI assistance tools:

- **Content Planning**: `npm run ai:plan`
- **Content Generation**: `npm run ai:generate`
- **MD to MDX Conversion**: `npm run convert:md-to-mdx`

## Quality Standards

### Code Quality
- ESLint for JavaScript/TypeScript
- Prettier for code formatting
- TypeScript for type safety

### Content Quality
- Markdownlint for Markdown/MDX
- Vale for prose linting
- Custom validation scripts

### Testing
- Build validation
- Link checking
- Content structure validation

## VS Code Setup

Install recommended extensions:
- MDX support
- GitHub Copilot
- Spell checker
- Prettier
- ESLint

The workspace is pre-configured with optimal settings for technical writing.

## Project Structure

```
ai-docs-poc/
├── docs/                   # Documentation content (MDX)
├── src/                    # React components and pages
│   ├── components/         # Reusable components
│   ├── css/               # Custom styles
│   └── pages/             # Custom pages
├── static/                # Static assets
├── data/                  # YAML data sources
├── scripts/               # Automation scripts
├── .vscode/              # VS Code configuration
└── .github/              # CI/CD workflows
```

## Submitting Changes

1. Create a feature branch
2. Make your changes
3. Run quality checks: `npm run quality:all`
4. Commit with descriptive messages
5. Push and create a pull request

## Getting Help

- Check the documentation in `docs/`
- Review existing issues and discussions
- Use the AI assistance tools for content creation
- Ask questions in pull requests

## License

By contributing, you agree that your contributions will be licensed under the MIT License.