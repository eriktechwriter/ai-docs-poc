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

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Development server configuration for optimal live preview
  future: {
    experimental_faster: true,
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  // Webpack configuration for better development experience
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

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
          // MDX support with enhanced configuration
          remarkPlugins: [remarkMath, remarkGfm],
          rehypePlugins: [rehypeKatex],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Enhanced development experience
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          // Live reload configuration
          watchIgnore: [
            '**/node_modules/**',
            '**/.docusaurus/**',
            '**/build/**',
            '**/.git/**',
          ],
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
        // Additional navigation items will be added as features are implemented
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
            // Additional documentation links will be added as content is created
          ],
        },
        {
          title: 'More',
          items: [
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