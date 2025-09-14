const fs = require('fs');
const path = require('path');

// Create a new focused docs structure for Endpoint Security
const endpointSecurityFiles = [
  // Core endpoint security topics
  'about-endpoint-security-policies.mdx',
  'endpoint-security-policies.mdx',
  'endpoint-security-configuration.mdx',
  'endpoint-security-whats-new.mdx',
  'endpoint-security-agent-console.mdx',
  'endpoint-security-agent-releases.mdx',
  'endpoint-security-browser-extension.mdx',
  'endpoint-security-for-sep-swp.mdx',
  'endpoint-security-policies-preview.mdx',
  'endpoint-security-policy-resources.mdx',
  
  // Agent deployment and management
  'deploy-agents.mdx',
  'deploy-agents-gpo.mdx',
  'deploy-agents-manage-system.mdx',
  'deploy-agents-ms-intune.mdx',
  'deploy-agents-using-sccm.mdx',
  'agent-settings.mdx',
  'agent-events.mdx',
  'agent-console-notifications.mdx',
  'agent-initiated-activation.mdx',
  'agent-installer-proxy-settings.mdx',
  'agent-platform-compatibility.mdx',
  'agent-resource-monitoring.mdx',
  'agent-uninstall-tool.mdx',
  
  // Security policies and features
  'anti-malware.mdx',
  'anti-malware-scanning.mdx',
  'anti-malware-policy-settings.mdx',
  'anti-malware-events.mdx',
  'anti-malware-recommended-exclusions.mdx',
  'application-control.mdx',
  'application-control-overview.mdx',
  'application-control-policy-settings.mdx',
  'application-control-events.mdx',
  'device-control.mdx',
  'device-control-overview.mdx',
  'device-control-events.mdx',
  'firewall.mdx',
  'firewall-settings.mdx',
  'firewall-events.mdx',
  'intrusion-prevention.mdx',
  'intrusion-prevention-configuration.mdx',
  'intrusion-prevention-events.mdx',
  
  // Endpoint management
  'endpoint-inventory.mdx',
  'endpoint-management.mdx',
  'endpoint-details.mdx',
  'endpoint-agents-windows-server-2025.mdx',
  'endpoint-security-RH3L-9.mdx',
  'endpoint-support-debian-12-linux-os.mdx',
  'endpoint-inventory-enhancements.mdx',
  'endpoint-inventory-faq.mdx',
  'endpoint-inventory-intro-part.mdx',
  'endpoint-inventory-oct-enhancements.mdx',
  'endpoint-inventory-table-columns.mdx',
  'endpoint-inventory-updates-filters.mdx',
  'endpoint-inventory-updates.mdx',
  'endpoint-list-faq.mdx',
  'endpoint-table-enhancements.mdx',
  'endpoint-threat-widget.mdx',
  'endpoint-user-grouping.mdx',
  
  // Configuration and policies
  'configuring-endpoint-policies.mdx',
  'create-default-endpoint-policies.mdx',
  'create-endpoint-security-policy.mdx',
  'policies-endpoint-sensor.mdx',
  'policies-anti-malware.mdx',
  'policies-application-control.mdx',
  'policies-device-control.mdx',
  'policies-firewall.mdx',
  'policies-intrusion-prevention.mdx',
  'policies-exclusions.mdx',
  
  // Getting started and setup
  'get-start-endpoint-security.mdx',
  'get-started-endpoint-policies.mdx',
  'setup-endpoint-security-for-new.mdx',
  'evaluate-endpoint-security.mdx',
  'native-endpoint-security.mdx',
  'standard-endpoint-protection.mdx',
  'standard-endpoint-protection-faqs.mdx',
  'standard-endpoint-widgets.mdx',
  'standard-endpoint-rule-exceptions.mdx'
];

console.log('Creating focused Endpoint Security documentation site...');

// Create backup of current docs
const backupDir = `docs-backup-${Date.now()}`;
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Copy all current docs to backup
console.log('📦 Creating backup of all docs...');
const allFiles = fs.readdirSync('docs/trend-vision-one/');
allFiles.forEach(file => {
  if (file.endsWith('.mdx')) {
    fs.copyFileSync(
      `docs/trend-vision-one/${file}`,
      `${backupDir}/${file}`
    );
  }
});

// Create new focused docs directory
const focusedDir = 'docs/endpoint-security';
if (!fs.existsSync(focusedDir)) {
  fs.mkdirSync(focusedDir, { recursive: true });
}

// Copy only endpoint security files
let copiedCount = 0;
let notFoundCount = 0;

endpointSecurityFiles.forEach(file => {
  const sourcePath = `docs/trend-vision-one/${file}`;
  const destPath = `${focusedDir}/${file}`;
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    copiedCount++;
    console.log(`✅ Copied: ${file}`);
  } else {
    notFoundCount++;
    console.log(`❌ Not found: ${file}`);
  }
});

// Update docusaurus.config.ts to point to new docs directory
console.log('\n📝 Updating Docusaurus config...');

// Create a simple intro file for the focused site
const introContent = `---
title: Endpoint Security Documentation
description: Comprehensive guide to Trend Vision One Endpoint Security
---

# Endpoint Security Documentation

Welcome to the Trend Vision One Endpoint Security documentation. This focused documentation covers:

## Core Topics

- **Agent Deployment**: Installing and managing endpoint agents
- **Security Policies**: Configuring anti-malware, application control, and device control
- **Firewall & IPS**: Network protection and intrusion prevention
- **Endpoint Management**: Monitoring and managing protected endpoints
- **Configuration**: Setting up policies and exclusions

## Getting Started

1. [About Endpoint Security Policies](./about-endpoint-security-policies)
2. [Get Started with Endpoint Security](./get-start-endpoint-security)
3. [Deploy Agents](./deploy-agents)
4. [Configure Endpoint Policies](./configuring-endpoint-policies)

This is a focused proof-of-concept demonstrating AI-enhanced documentation workflows with MDX and Docusaurus.
`;

fs.writeFileSync(`${focusedDir}/intro.mdx`, introContent);

console.log(`\n🎉 Endpoint Security site created!`);
console.log(`📊 Results:`);
console.log(`   - Files copied: ${copiedCount}`);
console.log(`   - Files not found: ${notFoundCount}`);
console.log(`   - Backup created: ${backupDir}`);
console.log(`   - New docs location: ${focusedDir}`);
console.log(`\n📝 Next steps:`);
console.log(`   1. Update docusaurus.config.ts to use docs/endpoint-security`);
console.log(`   2. Run npm start to test the focused site`);
console.log(`   3. Fix any remaining broken links`);