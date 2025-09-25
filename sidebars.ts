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
  // Main documentation sidebar matching WebHelp TOC structure
  // Only including files that actually exist to prevent build errors
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/system-requirements',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: true,
      items: [
        'administration/index',
        {
          type: 'category',
          label: 'User Management',
          items: [
            'administration/user-management/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Endpoint Protection',
      collapsed: true,
      items: [
        'endpoint-protection/index',
        {
          type: 'category',
          label: 'Anti-Malware',
          items: [
            'endpoint-protection/anti-malware/index',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Monitoring & Reporting',
      collapsed: true,
      items: [
        'monitoring-reporting/index',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: [
        'troubleshooting/index',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/index',
      ],
    },
  ],
};

export default sidebars;