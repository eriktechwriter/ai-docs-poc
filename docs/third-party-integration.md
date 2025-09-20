---
slug: third-party-integration
title: Third-Party Integration
---

Trend Vision One enables integrations with key third-party applications and services, allowing you to analyze data from multiple sources and increase visibility into your security.

You can learn about the available integrations in the following locations:

- Trend Vision One console: The **Third-Party Integration** screen lists supported integrations that require setup on the console and provides links to their corresponding configuration screens.

- Trend Micro Automation Center: The **Third-Party Integration** screen lists applications that allow Trend Micro products and services to integrate with platforms such as Splunk and Azure Sentinel. For more information, see <https://automation.trendmicro.com/thirdparty>.

The following table outlines the information displayed for integrations that you can configure on the Trend Vision One console.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Column</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Integration</p></td>
<td><p>Third-party application or service that integrates with Trend Vision One</p></td>
</tr>
<tr>
<td><p>Vendor</p></td>
<td><p>Entity that develops or maintains the third-party application or service</p></td>
</tr>
<tr>
<td><p>Description</p></td>
<td><p>Specific actions or outcomes that the integration enables</p></td>
</tr>
<tr>
<td><p>Associated apps</p></td>
<td><p>Trend Vision One apps that consume data from or share data with the third-party application or service</p></td>
</tr>
<tr>
<td><p>Service Gateways</p></td>
<td><p>Devices that enable Trend Vision One to connect to a third-party application that is deployed in the corporate network</p>


:::warning[Important]

<p>You must enable third-party integration on each connected Service Gateway to allow data sharing between Trend Vision One and third-party applications.</p>


:::


<p>The Service Gateways column displays any of the following values:</p>
<ul>
<li><p>A list of connected and enabled Service Gateways for each integration</p></li>
<li><p><em>Disabled</em>: No Service Gateways are connected.</p></li>
<li><p><em>Not applicable</em>: The integration does not require a Service Gateway.</p></li>
<li><p><em>Required</em>: Third-party integration is disabled on all connected Service Gateways.</p></li>
</ul>
<p>For more information, see <a href="trend-vision-one-service-gateway-overview">Service Gateway overview</a>.</p></td>
</tr>
<tr>
<td><p>Connection</p></td>
<td><p>Date and time data was last synchronized between Trend Vision One and the third-party application or service</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Active Directory (on-premises) integration](ad-premises-integration.md "Synchronize objects and security event information from on-premises Active Directory servers for risk assessments and remediation actions.")
- [Cyber Risk Exposure Management for Splunk integration](asrm-splunk-integration.md "Set up the Cyber Risk Exposure Management for Splunk integration to allow Splunk to share website access logs and provide insights to Trend Vision One.")
- [AttackIQ BAS integration](attackiq-bas-integration.md "Configure the integration to allow AttackIQ Breach and Attack Simulation (BAS) to pull events from Trend Vision One to validate simulated attacks and generate reports.")
- [Check Point Open Platform for Security (OPSEC) integration](check-point-opsec-integration.md "Trend Vision One enables sharing of suspicious object data with Check Point Open Platform for Security (OPSEC) through a Service Gateway.")
- [Chronicle SOAR (Siemplify) integration](chronicle-soar-integration.md "Set up the Chronicle SOAR (formerly Siemplify) integration to enable Chronicle to enrich entities, execute custom scripts, isolate endpoints, and update Workbench alerts in the Trend Vision One platform.")
- [Cisco XDR integration](cisco-xdr-integration.md "Configure the integration to enable Cisco XDR to search Trend Vision One for security detections and take action on suspicious observables for faster and more effective incident response and threat investigation.")
- [Claroty xDome integration](medigate-integration.md "Gain detailed asset profile information by connecting your Claroty xDome data source with Trend Vision One.")
- [Cloud Pak for Security integration](cloud-pak-for-security-integration.md "Configure the IBM Cloud Pak for Security integration to enable Cloud Pak for Security to simulate attacks on endpoints and pull information from Trend Vision One.")
- [Cortex XSOAR integration](cortex-xsoar-integration.md "Set up the Cortex XSOAR connector to view Workbench alerts and automate incident response in the Cortex XSOAR console.")
- [Cyborg Security - HUNTER integration](cyborg-security-hunter-integration.md "Integrate Cyborg Security - HUNTER with Trend Vision One to send threat hunting queries directly to the Search app.")
- [Cymulate integration](cymulate-integration.md "Configure the integration to allow Cymulate to pull events from Trend Vision One, as well as to analyze logs and alerts and validate simulated attacks.")
- [D3 Security integration](d3-security-integration.md "Configure the integration to allow D3 Security to retrieve security events from Trend Vision One, enrich Workbench alerts, and automate response actions.")
- [Elastic integration](elastic-integration.md "Configure the Elastic integration to allow Elastic to collect alert, audit, and detection logs from Trend Vision One for analysis and correlation.")
- [FortiGate Next-Generation Firewall integration](fortigate-ng-firewall.md "Trend Vision One enables sharing of suspicious object data with FortiGate Next-Generation Firewall through a Service Gateway.")
- [Greenbone Integration](greenbone-integration.md "Integrate your Greenbone Enterprise Appliance with Trend Vision one through a Service Gateway to increase your visibility into vulnerabilities on your network.")
- [Google Cloud Identity integration](identity-integration-gcp.md "Manage access permissions to your Google Cloud Identity data for use in Trend Vision One apps.")
- [IBM SOAR integration](ibm-soar-integration.md "Set up the IBM SOAR integration to enable IBM to retrieve events and automate actions in Trend Vision One.")
- [Jira Service Management integration](jira-service-management-integration.md "Configure the Jira Service Management integration to allow Jira to create tickets based on Workbench alerts and synchronize ticket updates between the Trend Vision One and Jira platforms.")
- [Logpoint SIEM integration](logpoint-siem-integration.md "Allow Logpoint to collect alert and event data from Workbench and Observed Attack Techniques for analysis.")
- [Logpoint SOAR integration](logpoint-soar-integration.md "Allow Logpoint to collect event information, enrich Workbench alerts, and automate response actions in the Trend Vision One console.")
- [LogRhythm SIEM integration](logrhythm-siem-integration.md "Configure the integration to allow LogRhythm to receive alert and event information from Trend Vision One, as well as to create response actions and add notes to Workbench alerts.")
- [Microsoft Entra ID integration](integration-aad-third-party.md "Manage access permissions to your Microsoft Entra ID data in multiple tenants for use in Trend Vision One apps.")
- [Microsoft Power BI integration](microsoft-power-bi-integration.md "Allow Power BI to access and analyze data directly from the Trend Vision One platform via APIs.")
- [Microsoft Sentinel integration](microsoft-sentinel-integration.md "Configure the integration to view Trend Vision One Workbench alerts and Observed Attack Techniques events directly in the Microsoft Sentinel platform.")
- [MISP integration (via Service Gateway)](misp-integration.md "Trend Vision One enables transfer of suspicious object data and retrieval of threat intelligence data from the MISP threat sharing platform through a Service Gateway.")
- [MISP integration (via direct connection)](misp-integration-direct-connect.md "Trend Vision One enables transfer of suspicious object data and retrieval of threat intelligence data directly with the MISP threat sharing platform.")
- [Nessus Pro integration](nessus-pro-integration.md "Integrate your Nessus Pro server through a Service Gateway.")
- [Netskope CTE integration](netskope-cte-integration.md "Configure the integration to enable sharing of information about suspicious objects (IoC) between Netskope Cloud Threat Exchange (CTE) and Trend Vision One.")
- [Okta integration](okta-integration.md "Grant Trend Micro permission to access your Okta data for use in Trend Vision One apps.")
- [OpenLDAP integration](openldap-integration.md "Synchronize data from OpenLDAP servers through a Service Gateway.")
- [Palo Alto Panorama integration](palo-alto-panorama-integration.md "Trend Vision One enables sharing of suspicious object data with Palo Alto Panorama through a Service Gateway.")
- [Picus Security integration](picus-security-integration.md "Configure the integration to allow Picus Security to pull events from Trend Vision One, as well as to query logs and alerts to analyze and validate simulated attacks.")
- [Plain text (freetext) feed integration](plain-text-free-integration.md "Trend Vision One enables sharing of suspicious object data with any third-party apps and services that can import data from plain text files through a Service Gateway.")
- [ProxySG and Advanced Secure Gateway integration](proxysg-adv-secure-gateway.md "Trend Vision One enables sharing of suspicious object data with ProxySG and Advanced Secure Gateway through a Service Gateway.")
- [QRadar on Cloud with STIX-Shifter integration](qradar-cloud-stix-shifter.md "To allow Trend Vision One to receive data from QRadar on Cloud for collaborative threat analysis, you must enable the integration and configure the required STIX-Shifter connection settings.")
- [QRadar XDR integration](qradar-xdr-integration.md "Install the add-on to share and view XDR data in QRadar including Workbench alerts, Observed Attack Techniques, and Trend Micro product detections.")
- [Qualys integration](qualys-integrate.md "Gain insight into CVEs in your environment by connecting your Qualys data source with Trend Vision One.")
- [Rapid7 - InsightVM integration](rapid7-insighttvm-integrate.md "Gain insight into CVEs in your environment by connecting your Rapid7 - InsightVM data source with Trend Vision One.")
- [Rapid7 - Nexpose integration](rapid7-nexpose-integration.md "Integrate Rapid7 - Nexpose through a Service Gateway.")
- [ReliaQuest GreyMatter integration](reliaquest-greymatter-integration.md "Set up the integration to enable ReliaQuest to retrieve telemetry from Trend Vision One and integrate the information with other technologies and sources, as well as to automate response actions.")
- [Rescana integration](rescana-integration.md "Gain visibility into your internet-facing assets and assess your external attack surface by connecting your Rescana data source with Trend Vision One.")
- [SafeBreach BAS integration](safebreach-bas-integration.md "Configure the integration to allow the SafeBreach breach and attack simulation (BAS) platform to pull events from Trend Vision One to analyze simulated attacks and automate remediation actions.")
- [Salesforce integration](salesforce-integrate.md "Grant Trend Vision One access to Salesforce metadata and information on system misconfigurations for use in compliance and risk assessments.")
- [Securonix SIEM integration](securonix-siem-integration.md "Set up the Securonix SIEM integration to enable Securonix to collect alerts, events, and audit logs from Trend Vision One.")
- [ServiceNow ITSM integration (for Workbench)](servicenow-itsm-integration.md "The ServiceNow ITSM connector allows you to manage Trend Vision One Workbench alerts directly in ServiceNow.")
- [ServiceNow ticketing system integration (for Security Playbooks and Case Management)](servicenow-ticket-system-playbook.md "Use the ServiceNow ticketing system integration to sync case data between ServiceNow ITSM and Trend Vision One Security Playbooks and Case Management.")
- [Splunk HEC connector configuration](splunk-hec-connector-configuration.md "Configure the connector to enable sharing Trend Vision One XDR data with Splunk Cloud.")
- [Splunk SOAR integration](splunk-soar-integration.md "Configure the Splunk SOAR integration for Trend Vision One to view XDR data directly in Splunk SOAR.")
- [Splunk XDR integration](integration-splunk-addon.md "View all your XDR data directly on the Splunk dashboard.")
- [Syslog connector (on-premises) configuration](syslog-connector-premises.md "Share XDR data with your syslog server by configuring the generic syslog connector.")
- [Syslog connector (SaaS/cloud) configuration](syslog-connector-saas.md "Share XDR data with your syslog server by configuring the generic syslog connector.")
- [Syslog content mapping - CEF](syslog-content-mapping-cef.md "The following tables map syslog content between Trend Vision One log output and CEF syslog types.")
- [TAXII feed integration](taxii-feed-integration.md "You can add or edit a TAXII feed you want to subscribe to.")
- [Tanium Comply integration](tanium-comply-integrate.md "Gain insight into CVEs in your environment by connecting your Tanium Comply data source with Trend Vision One.")
- [Tenable Security Center integration](tenable-security-setup.md "Gain vulnerability insights by connecting your Tenable Security Center data source with Trend Vision One.")
- [Tenable Vulnerability Management integration](data-source-tenable-setup.md "Gain vulnerability insights by connecting your Tenable Vulnerability Management data source with Trend Vision One.")
- [ThreatQ integration](threatq-integration.md "Set up the ThreatQ integration to allow ThreatQuotient to automatically send IoCs to Trend Vision One and add objects to the Suspicious Object List and the Exception List.")
- [VirusTotal integration](virustotal-integration.md "Enrich your Trend Vision One detections with VirusTotal threat intelligence.")
- [VU integration](vu-integration.md "Allow VU to facilitate SAML single sign-on access to the Trend Vision One platform.")
- [Zscaler Internet Access integration](Zscaler-internet-access.md "Configure the Zscaler Internet Access (ZIA) integration to add Trend Vision One users with a high risk exposure to Zscaler-defined restricted user groups and apply Zscaler policies to those groups.")
- [Zscaler Private Access integration](zscaler-private-access.md "Configure the Zscaler Private Access (ZPA) integration to add Trend Vision One users with a high risk exposure to Zscaler-defined restricted user groups and apply Zscaler policies to those groups.")
