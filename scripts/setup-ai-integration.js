#!/usr/bin/env node

/**
 * AI Integration Setup Script
 * 
 * This script helps configure AI assistants for the documentation workflow.
 * It supports multiple AI providers and can work with company API endpoints.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setupAIIntegration() {
  console.log('🤖 AI Integration Setup for Documentation Workflow\n');
  
  console.log('Available AI options:');
  console.log('1. Company API endpoints (Claude, GPT-4, etc.)');
  console.log('2. Codeium (free)');
  console.log('3. Local Ollama');
  console.log('4. GitHub Copilot (requires license)');
  console.log('5. Skip AI setup\n');
  
  const choice = await question('Select your preferred AI option (1-5): ');
  
  switch (choice) {
    case '1':
      await setupCompanyAPI();
      break;
    case '2':
      await setupCodeium();
      break;
    case '3':
      await setupOllama();
      break;
    case '4':
      await setupGitHubCopilot();
      break;
    case '5':
      console.log('Skipping AI setup. You can configure it later.');
      break;
    default:
      console.log('Invalid choice. Please run the script again.');
  }
  
  rl.close();
}

async function setupCompanyAPI() {
  console.log('\n📡 Setting up Company API Integration\n');
  
  const apiBase = await question('Enter your company API base URL: ');
  const apiKey = await question('Enter your API key (or environment variable name): ');
  
  console.log('\nAvailable models:');
  console.log('1. Claude 3.5 Sonnet');
  console.log('2. GPT-4 Turbo');
  console.log('3. GPT-4');
  console.log('4. Custom model');
  
  const modelChoice = await question('Select primary model (1-4): ');
  
  let modelName;
  switch (modelChoice) {
    case '1':
      modelName = 'claude-3-5-sonnet-20241022';
      break;
    case '2':
      modelName = 'gpt-4-turbo-preview';
      break;
    case '3':
      modelName = 'gpt-4';
      break;
    case '4':
      modelName = await question('Enter custom model name: ');
      break;
    default:
      modelName = 'claude-3-5-sonnet-20241022';
  }
  
  const config = {
    models: [
      {
        title: `${modelName} (Company API)`,
        provider: "openai",
        model: modelName,
        apiBase: apiBase,
        apiKey: apiKey.startsWith('$') ? apiKey : `$${apiKey}`,
        contextLength: modelName.includes('claude') ? 200000 : 128000,
        description: `${modelName} via company API - optimized for documentation tasks`
      }
    ],
    customCommands: getDocumentationCommands(),
    contextProviders: getContextProviders(),
    slashCommands: getSlashCommands(),
    docs: getDocumentationSources()
  };
  
  await saveContinueConfig(config);
  
  console.log('\n✅ Company API integration configured!');
  console.log(`📝 Remember to set your API key in environment variables:`);
  console.log(`   export ${apiKey.replace('$', '')}="your-actual-api-key"`);
}

async function setupCodeium() {
  console.log('\n🆓 Setting up Codeium (Free)\n');
  
  console.log('Codeium setup:');
  console.log('1. Install the Codeium extension in VS Code');
  console.log('2. Sign up for a free account at https://codeium.com');
  console.log('3. Follow the authentication flow in VS Code');
  
  const config = {
    models: [
      {
        title: "Codeium Chat",
        provider: "free-trial",
        model: "codeium"
      }
    ],
    tabAutocompleteModel: {
      title: "Codeium Autocomplete",
      provider: "free-trial", 
      model: "codeium"
    },
    customCommands: getDocumentationCommands(),
    contextProviders: getContextProviders(),
    slashCommands: getSlashCommands(),
    docs: getDocumentationSources()
  };
  
  await saveContinueConfig(config);
  
  console.log('\n✅ Codeium integration configured!');
  console.log('📝 Make sure to install and authenticate the Codeium extension.');
}

async function setupOllama() {
  console.log('\n🏠 Setting up Local Ollama\n');
  
  console.log('Ollama setup requires:');
  console.log('1. Install Ollama: https://ollama.ai');
  console.log('2. Pull a model: ollama pull codellama:13b');
  console.log('3. Start Ollama service: ollama serve');
  
  const proceed = await question('Have you completed these steps? (y/n): ');
  
  if (proceed.toLowerCase() !== 'y') {
    console.log('Please complete the Ollama setup first, then run this script again.');
    return;
  }
  
  const model = await question('Enter model name (default: codellama:13b): ') || 'codellama:13b';
  
  const config = {
    models: [
      {
        title: `${model} (Local)`,
        provider: "ollama",
        model: model,
        apiBase: "http://localhost:11434",
        contextLength: 16384,
        description: `Local ${model} model - free but requires local setup`
      }
    ],
    customCommands: getDocumentationCommands(),
    contextProviders: getContextProviders(),
    slashCommands: getSlashCommands(),
    docs: getDocumentationSources()
  };
  
  await saveContinueConfig(config);
  
  console.log('\n✅ Ollama integration configured!');
  console.log('📝 Make sure Ollama is running: ollama serve');
}

async function setupGitHubCopilot() {
  console.log('\n🐙 Setting up GitHub Copilot\n');
  
  console.log('GitHub Copilot requires:');
  console.log('1. GitHub Copilot subscription');
  console.log('2. GitHub Copilot extension in VS Code');
  console.log('3. Authentication with GitHub');
  
  // Update extensions.json to include Copilot
  const extensionsPath = path.join(__dirname, '../.vscode/extensions.json');
  const extensions = JSON.parse(fs.readFileSync(extensionsPath, 'utf8'));
  
  if (!extensions.recommendations.includes('github.copilot')) {
    extensions.recommendations.push('github.copilot', 'github.copilot-chat');
    fs.writeFileSync(extensionsPath, JSON.stringify(extensions, null, 2));
  }
  
  // Update settings.json
  const settingsPath = path.join(__dirname, '../.vscode/settings.json');
  const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
  
  settings['github.copilot.enable'] = {
    "*": true,
    "yaml": true,
    "plaintext": false,
    "markdown": true,
    "mdx": true
  };
  settings['github.copilot.editor.enableAutoCompletions'] = true;
  
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
  
  console.log('\n✅ GitHub Copilot configuration updated!');
  console.log('📝 Make sure to authenticate with GitHub in VS Code.');
}

function getDocumentationCommands() {
  return [
    {
      name: "docRewrite",
      prompt: "You are a technical documentation expert for Trend Vision One cybersecurity products. Rewrite the following content to be clearer, more concise, and follow our style guide:\n\n- Use active voice\n- Write in second person (you/your)\n- Use clear headings and bullet points\n- Include code examples where relevant\n- Ensure accuracy for cybersecurity terminology\n\nContent to rewrite:\n{{{ input }}}",
      description: "Rewrite documentation content following Trend Vision One style guidelines"
    },
    {
      name: "generateOutline",
      prompt: "You are a technical documentation expert. Create a comprehensive outline for documentation about: {{{ input }}}\n\nThe outline should include:\n- Clear hierarchical structure\n- Introduction and overview sections\n- Step-by-step procedures\n- Troubleshooting section\n- Related topics/see also\n\nFormat as markdown with proper heading levels.",
      description: "Generate a documentation outline for a given topic"
    },
    {
      name: "improveMetadata",
      prompt: "You are a documentation metadata expert. Analyze this MDX frontmatter and content, then suggest improvements to make it more discoverable and AI-friendly:\n\n{{{ input }}}\n\nProvide:\n1. Enhanced frontmatter with better tags, description, and SEO\n2. Suggested related topics\n3. Audience and difficulty level\n4. Estimated reading time\n\nReturn only the improved frontmatter in YAML format.",
      description: "Improve MDX frontmatter for better discoverability"
    }
  ];
}

function getContextProviders() {
  return [
    {
      name: "diff",
      params: {}
    },
    {
      name: "folder",
      params: {
        folders: ["docs", "data", "src"]
      }
    },
    {
      name: "codebase",
      params: {}
    }
  ];
}

function getSlashCommands() {
  return [
    {
      name: "edit",
      description: "Edit selected code with AI assistance"
    },
    {
      name: "comment", 
      description: "Add comments to selected code"
    },
    {
      name: "share",
      description: "Share code snippet with context"
    },
    {
      name: "cmd",
      description: "Generate terminal commands"
    }
  ];
}

function getDocumentationSources() {
  return [
    {
      title: "Trend Vision One Documentation",
      startUrl: "https://docs.trendmicro.com/en-us/enterprise/trend-vision-one.aspx",
      rootUrl: "https://docs.trendmicro.com/",
      faviconUrl: "https://docs.trendmicro.com/favicon.ico"
    },
    {
      title: "Docusaurus Documentation",
      startUrl: "https://docusaurus.io/docs",
      rootUrl: "https://docusaurus.io/",
      faviconUrl: "https://docusaurus.io/img/favicon.ico"
    }
  ];
}

async function saveContinueConfig(config) {
  const configDir = path.join(__dirname, '../.continue');
  const configPath = path.join(configDir, 'config.json');
  
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

// Run the setup
setupAIIntegration().catch(console.error);