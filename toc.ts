import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Main sidebar for Endpoint Security documentation
  endpointSecuritySidebar: [
    {
      type: 'doc',
      id: 'endpoint-security-for-sep-swp',
      label: 'Endpoint Security Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'get-start-endpoint-security',
        'setup-endpoint-security-for-new',
        'getting-started-trend-vision',
      ],
    },
    {
      type: 'category',
      label: 'Agent Deployment',
      items: [
        'manage-your-agent-deployments',
        'deploy-agents',
        'deploy-agents-gpo',
        'deploy-agents-ms-intune',
        'deploy-agents-using-sccm',
        'es-agent-deploy-intune',
        'using-endpoint-deployment-script',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'endpoint-security-configuration',
        'create-default-endpoint-policies',
        'configuring-endpoint-policies',
        'about-endpoint-security-policies',
        'sensor-settings-policies',
      ],
    },
    {
      type: 'category',
      label: 'Endpoint Management',
      items: [
        'endpoint-management',
        'endpoint-inventory-intro-part',
        'finding-endpoint-information',
        'endpoint-inventory-table-columns',
        'endpoint-inventory-faq',
      ],
    },
    {
      type: 'category',
      label: 'Response Actions',
      items: [
        'response-actions-intro',
        'response-actions-section',
        'isolate-endpoint-task',
        'restore-connection-task',
        'terminate-process-task',
        'collect-file-task',
        'scan-for-malware-task',
      ],
    },
    {
      type: 'category',
      label: 'Alerts & Investigation',
      items: [
        'workbench',
        'all-alerts',
        'investigating-alert',
        'workbench-insights',
        'alert-details',
      ],
    },
    {
      type: 'category',
      label: 'System Requirements',
      items: [
        'endpoint-agent-system-requirements',
        'es-agent-sys-reqs',
        'extended-support-for-agents',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting-faq',
        'self-diagnosis',
        'getting-help-troubleshooting',
        'troubleshooting-deployment-script',
      ],
    },
  ],
};

export default sidebars;