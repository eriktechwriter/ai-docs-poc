import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

const config: Config = {
  title: 'AI-Enhanced Documentation POC',
  tagline: 'Demonstrating the future of technical documentation workflows',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'trendmicro',
  projectName: 'ai-docs-poc',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization config
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Markdown configuration for MDX support
  markdown: {
    mermaid: true,
    format: 'mdx',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Enable edit links
          editUrl: 'https://github.com/trendmicro/ai-docs-poc/tree/main/',
          // MDX support
          remarkPlugins: [remarkMath, remarkGfm],
          rehypePlugins: [rehypeKatex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/trendmicro/ai-docs-poc/tree/main/',
          remarkPlugins: [remarkMath, remarkGfm],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    // Social card image
    image: 'img/docusaurus-social-card.jpg',
    
    // Navbar configuration
    navbar: {
      title: 'AI Docs POC',
      logo: {
        alt: 'AI Docs POC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'AI Tools',
          position: 'left',
          items: [
            {
              label: 'Content Planner',
              href: '/ai/planner',
            },
            {
              label: 'Content Generator',
              href: '/ai/generator',
            },
            {
              label: 'Batch Operations',
              href: '/ai/batch',
            },
          ],
        },
        {
          href: 'https://github.com/trendmicro/ai-docs-poc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    // Footer configuration
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'AI Assistant Guide',
              to: '/docs/ai-assistant',
            },
            {
              label: 'Writer Workflows',
              to: '/docs/workflows',
            },
          ],
        },
        {
          title: 'AI Features',
          items: [
            {
              label: 'Content Planning',
              to: '/docs/ai/planning',
            },
            {
              label: 'Dynamic Content',
              to: '/docs/ai/dynamic-content',
            },
            {
              label: 'Quality Automation',
              to: '/docs/ai/quality',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/trendmicro/ai-docs-poc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trend Micro. Built with Docusaurus.`,
    },
    
    // Prism theme for code highlighting
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'typescript', 'jsx', 'tsx'],
    },
    
    // Search configuration (Algolia DocSearch)
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'ai-docs-poc',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
    
    // Color mode configuration
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    // Announcement bar for important updates
    announcementBar: {
      id: 'poc-announcement',
      content: '🚀 This is a POC demonstrating AI-enhanced documentation workflows. <a target="_blank" rel="noopener noreferrer" href="/docs/intro">Learn more</a>!',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,

  // Plugin configuration
  plugins: [
    // Custom plugins can be added here
  ],

  // Stylesheets
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  // Client modules
  clientModules: [
    // Custom client modules can be added here
  ],
};

export default config;