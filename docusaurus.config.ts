import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkGridTable from "@adobe/remark-gridtables";

const productName: string = "Trend Vision One"; // The product name without any versions. For example: Deep Discovery Inspector
const mainUrl: string = "https://docs.trendmicro.com"; // Always `docs.trendmicro.com`

// Dropdowns

const config: Config = {
  title: `${productName} TechDocs | Trend Micro`, // Updated for TechDocs branding
  //tagline: 'Dinosaurs are cool',
  favicon: "brand/favicon.ico", // Do not edit this value

  // Set the production url of your site here
  url: "https://eriktechwriter.github.io",
  // Set for GitHub Pages deployment
  baseUrl: "/ai-docs-poc/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "eriktechwriter", // Usually your GitHub org/user name.
  projectName: "ai-docs-poc", // The repository name

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    format: "detect",
  },

  noIndex: false, // Adds <meta name="robots" content="noindex, nofollow"> to every page to avoid indexing

  //Add the required language codes in the locales array. Always leave en-us as the default locale
  i18n: {
    defaultLocale: "en-us",
    locales: ["en-us"],
    localeConfigs: {
      "en-us": {
        htmlLang: "en-us",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./toc.ts", // Do not edit this value
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [remarkGridTable],
          rehypePlugins: [rehypeUnwrapImages],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      style: "dark",
      title: "Trend Micro TechDocs", // The title that appears in the navbar
      logo: {
        alt: "Trend Micro TechDocs",
        src: "brand/t-ball.png",
      },
      items: [
        {
          type: 'dropdown',
          label: 'Trend Vision One',
          position: 'right',
          items: [
            {
              type: 'html',
              value: '<div class="dropdown-section"><h4>Core Solutions</h4></div>',
            },
            {
              label: 'Endpoint Security',
              to: '/endpoint-security-for-sep-swp',
            },
            {
              label: 'XDR and Agentic SIEM',
              href: '#xdr-siem',
            },
            {
              label: 'Cyber Risk Exposure Management',
              href: '#crem',
            },
            {
              type: 'html',
              value: '<div class="dropdown-section"><h4>Security Solutions</h4></div>',
            },
            {
              label: 'Network Security',
              href: '#network-security',
            },
            {
              label: 'Email Security',
              href: '#email-security',
            },
            {
              label: 'Cloud Security',
              href: '#cloud-security',
            },
            {
              type: 'html',
              value: '<div class="dropdown-section"><h4>Advanced Capabilities</h4></div>',
            },
            {
              label: 'Threat Intelligence',
              href: '#threat-intel',
            },
            {
              label: 'Vulnerability Management',
              href: '#vuln-mgmt',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Other Products',
          position: 'right',
          items: [
            {
              label: 'Deep Security',
              href: '#deep-security',
            },
            {
              label: 'Cloud One',
              href: '#cloud-one',
            },
            {
              label: 'Apex One',
              href: '#apex-one',
            },
            {
              label: 'Worry-Free Services',
              href: '#worry-free',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'right',
          items: [
            {
              label: 'API Documentation',
              href: 'https://automation.trendmicro.com/xdr/api-v3/',
            },
            {
              label: 'Technical Support',
              href: 'https://support.trendmicro.com',
            },
            {
              label: 'Training Materials',
              href: 'https://education.trendmicro.com',
            },
          ],
        },
        {
          type: "search", // Search bar
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `© ${new Date().getFullYear()}  Trend Micro Incorporated. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "bash", "batch"],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [require.resolve("docusaurus-lunr-search")],

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true, // required
    },
    experimental_faster: {
      ssgWorkerThreads: true,
    },
  },
};

export default config;
