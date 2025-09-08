import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/configuration',
        'getting-started/first-steps',
      ],
    },
    {
      type: 'category',
      label: 'AI Assistant',
      items: [
        'ai-assistant/overview',
        'ai-assistant/content-planning',
        'ai-assistant/content-generation',
        'ai-assistant/batch-operations',
      ],
    },
    {
      type: 'category',
      label: 'Writer Workflows',
      items: [
        'workflows/vs-code-setup',
        'workflows/content-creation',
        'workflows/review-process',
        'workflows/publishing',
      ],
    },
    {
      type: 'category',
      label: 'Dynamic Content',
      items: [
        'dynamic-content/overview',
        'dynamic-content/components',
        'dynamic-content/data-sources',
        'dynamic-content/examples',
      ],
    },
    {
      type: 'category',
      label: 'Quality & Automation',
      items: [
        'quality/linting',
        'quality/testing',
        'quality/ci-cd',
        'quality/deployment',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Features',
      items: [
        'advanced/agentic-integration',
        'advanced/personalization',
        'advanced/analytics',
        'advanced/performance',
      ],
    },
  ],

  // Additional sidebars can be defined here
  apiSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/content-api',
        'api/ai-api',
        'api/webhooks',
      ],
    },
  ],
};

export default sidebars;