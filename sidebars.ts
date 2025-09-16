import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Simplified TOC for Endpoint Security focused documentation
 * Removed: Dashboards and Reports, XDR Threat Investigation, Threat Intelligence, 
 * Workflow and Automation, Network Security, Service Management
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  tutorialSidebar: [
    {
      type: `doc`,
      id: `index`,
    },
    {
      type: `category`,
      label: `Privacy and personal data collection disclosure`,
      link: {
        type: `doc`,
        id: `ppdcd-trend-vision-one`,
      },
      items: [
        {
          type: `doc`,
          id: `pre-release-disclaimer`,
        },
        {
          type: `doc`,
          id: `pre-release-sub-feature-disclaimer`,
        },
      ],
    },
    {
      type: `doc`,
      id: `data-privacy-security-compliance`,
    },
    {
      type: `doc`,
      id: `pci-security-standards`,
    },
    {
      type: `category`,
      label: `Introduction`,
      link: {
        type: `doc`,
        id: `introduction-part-trend-vision-one`,
      },
      items: [
        {
          type: `category`,
          label: `Trend Vision One`,
          link: {
            type: `doc`,
            id: `trend-Vision-One-About`,
          },
          items: [
            {
              type: `doc`,
              id: `features-benefits-trend-vision-one`,
            },
            {
              type: `doc`,
              id: `supported-products`,
            },
            {
              type: `doc`,
              id: `platform-directory`,
            },
            {
              type: `doc`,
              id: `account-info-settings`,
            },
            {
              type: `doc`,
              id: `account-settings-foundation`,
            },
            {
              type: `doc`,
              id: `user-account-switch`,
            },
            {
              type: `doc`,
              id: `business-profile`,
            },
          ],
        },
        {
          type: `category`,
          label: `Trend Vision One Mobile`,
          link: {
            type: `doc`,
            id: `trend-vision-one-mobile`,
          },
          items: [
            {
              type: `doc`,
              id: `get-start-mobile`,
            },
            {
              type: `doc`,
              id: `receive-notifications-console`,
            },
          ],
        },
        {
          type: `category`,
          label: `Checking the Trend Vision One service status`,
          link: {
            type: `doc`,
            id: `checking-service-status`,
          },
          items: [
            {
              type: `doc`,
              id: `service-level-objectives`,
            },
          ],
        },
      ],
    },
    {
      type: `category`,
      label: `Getting started`,
      link: {
        type: `doc`,
        id: `getting-started-part`,
      },
      items: [
        {
          type: `category`,
          label: `Getting started with Trend Vision One`,
          link: {
            type: `doc`,
            id: `getting-started-trend-vision`,
          },
          items: [
            {
              type: `category`,
              label: `Accessing your Trend Vision One console`,
              link: {
                type: `doc`,
                id: `accessing-your-console`,
              },
              items: [
                {
                  type: `category`,
                  label: `Essential Access`,
                  link: {
                    type: `doc`,
                    id: `essential-access`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `activating-essential-access`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Advanced Access`,
                  link: {
                    type: `doc`,
                    id: `advanced-access`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `activating-advanced-access`,
                    },
                  ],
                },
              ],
            },
            {
              type: `category`,
              label: `Updating Trend Vision One to the Foundation Services release`,
              link: {
                type: `doc`,
                id: `update-foundation-services-release`,
              },
              items: [
                {
                  type: `doc`,
                  id: `foundation-update-consider`,
                },
                {
                  type: `doc`,
                  id: `foundation-services-update-impacts`,
                },
              ],
            },
            {
              type: `doc`,
              id: `connecting-your-idp-solutions`,
            },
            {
              type: `category`,
              label: `Configuring user roles and accounts`,
              link: {
                type: `doc`,
                id: `configuring-user-roles-accounts`,
              },
              items: [
                {
                  type: `doc`,
                  id: `configuring-user-roles`,
                },
                {
                  type: `doc`,
                  id: `configuring-user-accounts`,
                },
              ],
            },
            {
              type: `category`,
              label: `Firewall exception requirements for Trend Vision One`,
              link: {
                type: `doc`,
                id: `firewall-exception-requirements-for`,
              },
              items: [
                {
                  type: `category`,
                  label: `Americas - firewall exceptions`,
                  link: {
                    type: `doc`,
                    id: `americas-firewall-exceptions`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `firewall-americas-all-exceptions`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-americas-cloud-service`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-americas-hosted-service`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Australia - firewall exceptions`,
                  link: {
                    type: `doc`,
                    id: `australia-firewall-exceptions`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `firewall-australia-all-exceptions`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-australia-cloud-service`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-australia-hosted-service`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Europe - firewall exceptions`,
                  link: {
                    type: `doc`,
                    id: `europe-firewall-exceptions-part`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `firewall-europe-all-exceptions`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-europe-cloud-service`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-europe-hosted-service`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `India - firewall exceptions`,
                  link: {
                    type: `doc`,
                    id: `india-firewall-exceptions-section`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `firewall-india-all-exceptions`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-india-cloud-service`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-india-hosted-service`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Japan - firewall exceptions`,
                  link: {
                    type: `doc`,
                    id: `japan-firewall-exceptions-section`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `firewall-japan-all-exceptions`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-japan-cloud-service`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-japan-hosted-service`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Singapore - firewall exceptions`,
                  link: {
                    type: `doc`,
                    id: `singapore-firewall-section`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `firewall-singapore-all-global`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-singapore-cloud-service`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-singapore-hosted-service`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Middle East and Africa - firewall exceptions`,
                  link: {
                    type: `doc`,
                    id: `uae-firewall-exceptions`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `firewall-uae-all-exceptions`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-uae-cloud-service`,
                    },
                    {
                      type: `doc`,
                      id: `firewall-uae-hosted-service`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Legacy firewall exceptions`,
                  link: {
                    type: `doc`,
                    id: `legacy-firewall-exceptions`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `australia-firewall-exception-list`,
                    },
                    {
                      type: `doc`,
                      id: `europe-firewall-exceptions`,
                    },
                    {
                      type: `doc`,
                      id: `india-firewall-exceptions`,
                    },
                    {
                      type: `doc`,
                      id: `united-states-firewall-exceptions`,
                    },
                  ],
                },
              ],
            },
            {
              type: `doc`,
              id: `existing-products-instance`,
            },
          ],
        },
      ],
    },
    {
      type: `category`,
      label: `Endpoint Security (for Standard Endpoint and Server & Workload Protection)`,
      link: {
        type: `doc`,
        id: `get-start-endpoint-security`,
      },
      items: [
        {
          type: `category`,
          label: `Endpoint Inventory`,
          link: {
            type: `doc`,
            id: `endpoint-inventory-intro-part`,
          },
          items: [
            {
              type: `doc`,
              id: `endpoint-inventory-table-columns`,
            },
            {
              type: `doc`,
              id: `finding-endpoint-information`,
            },
            {
              type: `doc`,
              id: `global-settings-endpoint-inventory`,
            },
            {
              type: `category`,
              label: `Troubleshooting and FAQs`,
              link: {
                type: `doc`,
                id: `endpoint-inventory-faq`,
              },
              items: [
                {
                  type: `doc`,
                  id: `endpoint-list-faq`,
                },
                {
                  type: `doc`,
                  id: `removed-endpoint-reconnects-faq`,
                },
              ],
            },
          ],
        },
        {
          type: `category`,
          label: `Endpoint Management`,
          link: {
            type: `doc`,
            id: `endpoint-management`,
          },
          items: [
            {
              type: `category`,
              label: `Endpoint Sensor Agent Deployment`,
              link: {
                type: `doc`,
                id: `endpoint-sensor-agent-deployment`,
              },
              items: [
                {
                  type: `doc`,
                  id: `endpoint-agent-system-requirements`,
                },
                {
                  type: `category`,
                  label: `Deploy agents`,
                  link: {
                    type: `doc`,
                    id: `deploy-agents`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `deploy-agents-gpo`,
                    },
                    {
                      type: `doc`,
                      id: `deploy-agents-ms-intune`,
                    },
                    {
                      type: `doc`,
                      id: `deploy-agents-using-sccm`,
                    },
                    {
                      type: `doc`,
                      id: `deploy-agents-manage-system`,
                    },
                    {
                      type: `doc`,
                      id: `using-endpoint-deployment-script`,
                    },
                    {
                      type: `doc`,
                      id: `deployment-using-golden-image`,
                    },
                    {
                      type: `doc`,
                      id: `create-golden-agent-image`,
                    },
                  ],
                },
                {
                  type: `doc`,
                  id: `manage-your-agent-deployments`,
                },
                {
                  type: `category`,
                  label: `Uninstalling agents`,
                  link: {
                    type: `doc`,
                    id: `uninstalling-agents`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `uninstall-agents-intune`,
                    },
                    {
                      type: `doc`,
                      id: `uninstall-windows-agents-tool`,
                    },
                    {
                      type: `doc`,
                      id: `uninstall-macos-agents-tool`,
                    },
                  ],
                },
                {
                  type: `doc`,
                  id: `cleaning-up-uninstalled-agents`,
                },
                {
                  type: `doc`,
                  id: `extended-support-for-agents`,
                },
                {
                  type: `doc`,
                  id: `updating-agent-for-templates`,
                },
                {
                  type: `doc`,
                  id: `update-agent-virtual-desktops`,
                },
              ],
            },
            {
              type: `category`,
              label: `Endpoint Security Configuration`,
              link: {
                type: `doc`,
                id: `endpoint-security-configuration`,
              },
              items: [
                {
                  type: `category`,
                  label: `About endpoint security policies`,
                  link: {
                    type: `doc`,
                    id: `about-endpoint-security-policies`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `create-default-endpoint-policies`,
                    },
                    {
                      type: `doc`,
                      id: `configuring-endpoint-policies`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Sensor settings`,
                  link: {
                    type: `doc`,
                    id: `sensor-settings`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `sensor-settings-policies`,
                    },
                    {
                      type: `doc`,
                      id: `sensor-monitoring-level`,
                    },
                  ],
                },
              ],
            },
            {
              type: `category`,
              label: `Response Management`,
              link: {
                type: `doc`,
                id: `response-management`,
              },
              items: [
                {
                  type: `doc`,
                  id: `response-management-settings`,
                },
                {
                  type: `doc`,
                  id: `response-exclude-endpoints`,
                },
                {
                  type: `category`,
                  label: `Response actions`,
                  link: {
                    type: `doc`,
                    id: `response-actions-section`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `isolate-endpoint-task`,
                    },
                    {
                      type: `doc`,
                      id: `restore-connection-task`,
                    },
                    {
                      type: `doc`,
                      id: `terminate-process-task`,
                    },
                    {
                      type: `doc`,
                      id: `collect-file-task`,
                    },
                    {
                      type: `doc`,
                      id: `scan-for-malware-task`,
                    },
                    {
                      type: `doc`,
                      id: `add-block-list-task`,
                    },
                    {
                      type: `doc`,
                      id: `remove-block-list-task`,
                    },
                    {
                      type: `doc`,
                      id: `disable-user-account-task`,
                    },
                    {
                      type: `doc`,
                      id: `enable-user-account-task`,
                    },
                    {
                      type: `doc`,
                      id: `force-password-reset-task`,
                    },
                    {
                      type: `doc`,
                      id: `start-remote-shell-session-task`,
                    },
                    {
                      type: `doc`,
                      id: `run-remote-custom-script-task`,
                    },
                    {
                      type: `doc`,
                      id: `submit-for-sandbox-analysis-task`,
                    },
                  ],
                },
                {
                  type: `category`,
                  label: `Remote shell`,
                  link: {
                    type: `doc`,
                    id: `remote-shell-windows-endpoints`,
                  },
                  items: [
                    {
                      type: `doc`,
                      id: `remote-shell-linux-endpoints`,
                    },
                    {
                      type: `doc`,
                      id: `remote-shell-mac-endpoints`,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: `category`,
          label: `Connecting Endpoint Products`,
          link: {
            type: `doc`,
            id: `endpoint-security-for-sep-swp`,
          },
          items: [
            {
              type: `doc`,
              id: `setup-endpoint-security-for-new`,
            },
            {
              type: `doc`,
              id: `connecting-apex-one-saas`,
            },
            {
              type: `doc`,
              id: `configuring-apex-one-onprem`,
            },
            {
              type: `doc`,
              id: `sep-management`,
            },
            {
              type: `doc`,
              id: `swp-management`,
            },
            {
              type: `doc`,
              id: `configure-deep-security-software`,
            },
            {
              type: `doc`,
              id: `configuring-deep-security-software`,
            },
            {
              type: `doc`,
              id: `configure-trend-cloud-one`,
            },
            {
              type: `doc`,
              id: `configure-txone-edgeone`,
            },
            {
              type: `doc`,
              id: `configure-txone-stellarone`,
            },
            {
              type: `doc`,
              id: `configuring-txone-edgeone`,
            },
            {
              type: `doc`,
              id: `configuring-txone-stellarone`,
            },
          ],
        },
      ],
    },
    {
      type: `category`,
      label: `Administration`,
      link: {
        type: `doc`,
        id: `administration-setting`,
      },
      items: [
        {
          type: `category`,
          label: `User accounts and roles for Foundation Services`,
          link: {
            type: `doc`,
            id: `user-accounts-foundation-services`,
          },
          items: [
            {
              type: `category`,
              label: `User roles for Foundation Services`,
              link: {
                type: `doc`,
                id: `user-roles-foundation-services`,
              },
              items: [
                {
                  type: `doc`,
                  id: `predefined-roles-trend-vision-one`,
                },
                {
                  type: `doc`,
                  id: `custom-user-roles-trend-vision-one`,
                },
              ],
            },
            {
              type: `doc`,
              id: `adding-a-local-account`,
            },
            {
              type: `doc`,
              id: `adding-saml-account`,
            },
            {
              type: `doc`,
              id: `adding-saml-group-account`,
            },
            {
              type: `doc`,
              id: `adding-idp-only-saml-group-account`,
            },
            {
              type: `doc`,
              id: `primary-user-account`,
            },
            {
              type: `doc`,
              id: `transfer-primary-account`,
            },
            {
              type: `doc`,
              id: `assigning-password-admin-role`,
            },
          ],
        },
        {
          type: `category`,
          label: `Identity providers`,
          link: {
            type: `doc`,
            id: `identity-providers`,
          },
          items: [
            {
              type: `doc`,
              id: `configuring-adfs`,
            },
            {
              type: `doc`,
              id: `configuring-saml-ad`,
            },
            {
              type: `doc`,
              id: `configuring-okta-saml`,
            },
            {
              type: `doc`,
              id: `configuring-onelogin`,
            },
            {
              type: `doc`,
              id: `okta-integration`,
            },
            {
              type: `doc`,
              id: `openldap-integration`,
            },
          ],
        },
        {
          type: `category`,
          label: `Notifications`,
          link: {
            type: `doc`,
            id: `notifications`,
          },
          items: [
            {
              type: `doc`,
              id: `configure-admin-notifications`,
            },
            {
              type: `doc`,
              id: `alert-notifications`,
            },
            {
              type: `doc`,
              id: `notifications-workbench-alerts`,
            },
            {
              type: `doc`,
              id: `notifications-response-tasks`,
            },
            {
              type: `doc`,
              id: `notifications-risk-event`,
            },
            {
              type: `doc`,
              id: `notifications-new-assets`,
            },
          ],
        },
        {
          type: `category`,
          label: `Third-party integration`,
          link: {
            type: `doc`,
            id: `third-party-integration`,
          },
          items: [
            {
              type: `doc`,
              id: `microsoft-sentinel-integration`,
            },
            {
              type: `doc`,
              id: `splunk-soar-integration`,
            },
            {
              type: `doc`,
              id: `cortex-xsoar-integration`,
            },
            {
              type: `doc`,
              id: `ibm-soar-integration`,
            },
            {
              type: `doc`,
              id: `servicenow-itsm-integration`,
            },
            {
              type: `doc`,
              id: `jira-service-management-integration`,
            },
          ],
        },
        {
          type: `category`,
          label: `Platform API keys`,
          link: {
            type: `doc`,
            id: `platform-api-keys`,
          },
          items: [
            {
              type: `doc`,
              id: `api-keys-third-party-apps`,
            },
            {
              type: `doc`,
              id: `obtain-api-keys-third-party`,
            },
          ],
        },
        {
          type: `doc`,
          id: `console-settings`,
        },
        {
          type: `doc`,
          id: `audit-logs`,
        },
      ],
    },
    {
      type: `category`,
      label: `Getting Help and Troubleshooting`,
      link: {
        type: `doc`,
        id: `getting-help-troubleshooting`,
      },
      items: [
        {
          type: `doc`,
          id: `help-support`,
        },
        {
          type: `doc`,
          id: `creating-support-case`,
        },
        {
          type: `doc`,
          id: `troubleshooting-faq`,
        },
        {
          type: `doc`,
          id: `troubleshooting-connections`,
        },
        {
          type: `doc`,
          id: `troubleshooting-deployment-script`,
        },
        {
          type: `doc`,
          id: `running-diagnostic-tests`,
        },
        {
          type: `doc`,
          id: `self-diagnosis`,
        },
      ],
    },
  ],
};

export default sidebars;