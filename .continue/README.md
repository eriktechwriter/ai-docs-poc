# AI Integration Setup Guide

This directory contains configuration for AI-powered documentation assistance using Continue and other VS Code extensions.

## Quick Setup

Run the interactive setup script:
```bash
node scripts/setup-ai-integration.js
```

## Manual Configuration Options

### Option 1: Company API Endpoints (Recommended)

If your company provides API access to Claude, GPT-4, or other models:

1. **Update `.continue/config.json`** with your API details:
```json
{
  "models": [
    {
      "title": "Claude 3.5 Sonnet (Company API)",
      "provider": "openai",
      "model": "claude-3-5-sonnet-20241022", 
      "apiBase": "https://your-company-api.com/v1",
      "apiKey": "$COMPANY_API_KEY",
      "contextLength": 200000
    }
  ]
}
```

2. **Set environment variable**:
```bash
export COMPANY_API_KEY="your-actual-api-key"
```

### Option 2: Codeium (Free)

1. **Install Codeium extension** in VS Code
2. **Sign up** at https://codeium.com
3. **Authenticate** through VS Code
4. **No additional configuration needed** - works out of the box

### Option 3: Local Ollama

1. **Install Ollama**: https://ollama.ai
2. **Pull a model**:
```bash
ollama pull codellama:13b
# or for better performance with more VRAM:
ollama pull codellama:34b
```
3. **Start Ollama**:
```bash
ollama serve
```

### Option 4: GitHub Copilot (Requires License)

1. **Purchase GitHub Copilot** subscription
2. **Install extensions**:
   - GitHub Copilot
   - GitHub Copilot Chat
3. **Authenticate** with GitHub in VS Code

## Custom Commands for Documentation

The configuration includes specialized commands for documentation tasks:

### `/docRewrite`
Rewrites content following Trend Vision One style guidelines:
- Active voice
- Second person (you/your)
- Clear structure
- Cybersecurity terminology

### `/generateOutline`
Creates comprehensive documentation outlines with:
- Hierarchical structure
- Procedures and troubleshooting
- Related topics

### `/improveMetadata`
Enhances MDX frontmatter for better:
- SEO and discoverability
- AI optimization
- Content categorization

### `/createTable`
Converts unstructured data into properly formatted markdown tables.

### `/explainCode`
Explains code snippets in cybersecurity context with:
- Functionality description
- Use cases
- Security considerations

### `/troubleshootingSteps`
Generates structured troubleshooting guides with:
- Problem description
- Symptoms and causes
- Step-by-step solutions
- Verification steps

## Context Providers

The AI has access to:
- **Current diff**: Recent changes you're making
- **Folder context**: Content from docs, data, and src folders
- **Codebase**: Full repository context for better suggestions

## Documentation Sources

The AI can reference:
- Trend Vision One official documentation
- Docusaurus documentation
- MDX documentation

## Environment Variables

Create a `.env` file in the project root:
```bash
# Company API (if using)
COMPANY_API_KEY=your-api-key-here
COMPANY_API_BASE=https://your-company-api.com/v1

# OpenAI (if using directly)
OPENAI_API_KEY=your-openai-key

# Anthropic (if using directly)  
ANTHROPIC_API_KEY=your-anthropic-key
```

## Troubleshooting

### Continue Extension Not Working
1. Restart VS Code
2. Check the Continue extension is installed and enabled
3. Verify your configuration in `.continue/config.json`
4. Check the Continue output panel for errors

### API Authentication Issues
1. Verify your API key is correct
2. Check environment variables are set
3. Ensure your company API endpoint is accessible
4. Test the API endpoint with curl:
```bash
curl -H "Authorization: Bearer $COMPANY_API_KEY" \
     -H "Content-Type: application/json" \
     https://your-company-api.com/v1/models
```

### Slow Response Times
1. Try a smaller model (e.g., GPT-3.5 instead of GPT-4)
2. Reduce context length in configuration
3. Use local Ollama for faster responses (but lower quality)

### Codeium Not Activating
1. Sign up at https://codeium.com
2. Install the Codeium extension
3. Follow the authentication flow in VS Code
4. Check the Codeium status in the status bar

## Best Practices

1. **Start with simple prompts** and iterate
2. **Provide context** about what you're trying to achieve
3. **Review AI suggestions** before accepting them
4. **Use custom commands** for common documentation tasks
5. **Combine AI assistance** with your domain expertise
6. **Keep security in mind** - don't share sensitive information with external APIs

## Getting Help

- Check the Continue documentation: https://continue.dev/docs
- Review VS Code AI extension documentation
- Ask in the team chat for company-specific API setup
- File issues in this repository for configuration problems