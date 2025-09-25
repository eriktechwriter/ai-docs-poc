import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Main documentation sidebar matching WebHelp TOC structure
  endpointSecuritySidebar: [
    'index',
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
            'administration/user-management/user-accounts',
            'administration/user-management/user-roles',
            'administration/user-management/permissions',
          ],
        },
        {
          type: 'category',
          label: 'Policy Management',
          items: [
            'administration/policy-management/index',
            'administration/policy-management/creating-policies',
            'administration/policy-management/policy-inheritance',
            'administration/policy-management/policy-deployment',
          ],
        },
        {
          type: 'category',
          label: 'System Settings',
          items: [
            'administration/system-settings/index',
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