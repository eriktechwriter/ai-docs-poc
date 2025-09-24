import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Main documentation sidebar matching WebHelp TOC structure
  endpointSecuritySidebar: [
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
            'administration/system-settings/global-settings',
            'administration/system-settings/notifications',
            'administration/system-settings/updates',
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
            'endpoint-protection/anti-malware/real-time-scan',
            'endpoint-protection/anti-malware/scheduled-scan',
            'endpoint-protection/anti-malware/manual-scan',
            'endpoint-protection/anti-malware/scan-exclusions',
          ],
        },
        {
          type: 'category',
          label: 'Firewall',
          items: [
            'endpoint-protection/firewall/index',
            'endpoint-protection/firewall/firewall-rules',
            'endpoint-protection/firewall/stateful-configuration',
            'endpoint-protection/firewall/events-logs',
          ],
        },
        {
          type: 'category',
          label: 'Intrusion Prevention',
          items: [
            'endpoint-protection/intrusion-prevention/index',
            'endpoint-protection/intrusion-prevention/ips-rules',
            'endpoint-protection/intrusion-prevention/configuration',
            'endpoint-protection/intrusion-prevention/events',
          ],
        },
        {
          type: 'category',
          label: 'Application Control',
          items: [
            'endpoint-protection/application-control/index',
            'endpoint-protection/application-control/trusted-programs',
            'endpoint-protection/application-control/blocked-programs',
            'endpoint-protection/application-control/events',
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
        'monitoring-reporting/dashboards',
        'monitoring-reporting/reports',
        'monitoring-reporting/events-logs',
        'monitoring-reporting/alerts-notifications',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      items: [
        'troubleshooting/index',
        'troubleshooting/common-issues',
        'troubleshooting/diagnostic-tools',
        'troubleshooting/log-analysis',
        'troubleshooting/support-resources',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/index',
        'reference/api-documentation',
        'reference/command-line-tools',
        'reference/configuration-files',
        'reference/glossary',
      ],
    },
  ],
};

export default sidebars;