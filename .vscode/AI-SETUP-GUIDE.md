# AI-Enhanced Authoring Environment Setup Guide

This guide helps you configure the AI-enhanced authoring environment for the Agentic Docs POC.

## Prerequisites

1. **VS Code Extensions**: Install the recommended extensions from the Extensions panel
2. **Node.js 18+**: Required for running the development environment
3. **Company AI API Access**: Obtain API keys for company AI services
4. **GitHub Copilot**: Ensure you have access to GitHub Copilot

## Configuration Steps

### 1. Environment Variables

Create a `.env` file in the project root with your AI API credentials:

```bash
# Company AI API Configuration
COMPANY_AI_API_KEY=your_api_key_here
COMPANY_AI_API_BASE=https://your-company-ai-api.com/v1

# OpenAI Configuration (fallback)
OPENAI_API_KEY=your_openai_key_here

# Chroma Vector Database
CHROMA_HOST=localhost
CHROMA_PORT=8000
```

### 2. Roo Code (Continue) Setup

The Continue extension is configured to work with company AI APIs:

1. Open Command Palette (`Cmd+Shift+P`)
2. Run "Continue: Open Config"
3. The configuration is already set up in `.vscode/continue.json`
4. Ensure your API keys are properly set in the environment

### 3. GitHub Copilot Configuration

GitHub Copilot is enabled for all file types including Markdown and MDX:

- **Auto-completion**: Enabled for all supported languages
- **Chat**: Available via `Cmd+I` or the chat panel
- **Inline suggestions**: Enabled for documentation writing

### 4. Vector Database Setup

To enable semantic search capabilities:

1. Install Chroma locally: `pip install chromadb`
2. Run the indexing script: `npm run ai:index`
3. The vector database will be populated with existing documentation

## AI-Assisted Writing Features

### Content Generation

Use these custom commands in Continue:

- `/docs` - Generate technical documentation
- `/improve` - Improve content quality
- `/metadata` - Generate frontmatter metadata
- `/outline` - Create content outlines

### Real-time Assistance

- **Grammar and Style**: Automatic suggestions while typing
- **Content Completion**: AI-powered content suggestions
- **Metadata Generation**: Automatic frontmatter creation
- **Link Validation**: Real-time link checking

### Semantic Search

Once indexed, you can:

- Search for similar content across all documentation
- Get content recommendations based on context
- Find related topics automatically

## VS Code Tasks

Use these tasks from the Command Palette (`Cmd+Shift+P` → "Tasks: Run Task"):

- **AI: Index Content for Vector Search** - Build the semantic search index
- **AI: Enhance Metadata** - Automatically improve document metadata
- **Content: Import Documentation** - Import new documentation files
- **Full Development Setup** - Complete environment setup

## Keyboard Shortcuts

- `Cmd+I` - GitHub Copilot inline chat
- `Cmd+Shift+I` - GitHub Copilot chat panel
- `Ctrl+Shift+L` - Continue inline completion
- `Cmd+K Cmd+I` - Continue chat

## Troubleshooting

### API Connection Issues

1. Verify your API keys in the `.env` file
2. Check network connectivity to AI services
3. Ensure API quotas are not exceeded

### Extension Issues

1. Reload VS Code window (`Cmd+R`)
2. Check extension logs in the Output panel
3. Reinstall problematic extensions

### Vector Database Issues

1. Ensure Chroma is installed: `pip install chromadb`
2. Check if the database is running on the correct port
3. Re-run the indexing process: `npm run ai:index`

## Best Practices

1. **Regular Indexing**: Re-index content after major updates
2. **API Usage**: Monitor API usage to avoid quota limits
3. **Content Quality**: Use AI suggestions as starting points, not final content
4. **Version Control**: Commit AI-generated content after human review

## Support

For issues with this setup:

1. Check the troubleshooting section above
2. Review extension documentation
3. Contact the development team for company-specific AI API issues