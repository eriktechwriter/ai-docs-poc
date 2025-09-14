const fs = require('fs');
const path = require('path');

// List of files with issues that we'll temporarily rename
const problematicFiles = [
  'docs/trend-vision-one/workbench-insights.mdx',
  'docs/trend-vision-one/working-dashboard-email-security.mdx',
  'docs/trend-vision-one/working-tabs.mdx',
  'docs/trend-vision-one/working-widgets.mdx',
  'docs/trend-vision-one/workspace-one-uem-integration.mdx',
  'docs/trend-vision-one/workspaces.mdx',
  'docs/trend-vision-one/worm-infector-propagation.mdx',
  'docs/trend-vision-one/xdr-data-sources-2.mdx',
  'docs/trend-vision-one/xdr-data-sources.mdx',
  'docs/trend-vision-one/xdr-detection.mdx',
  'docs/trend-vision-one/zero-trust-actions.mdx',
  'docs/trend-vision-one/zscaler-private-access.mdx',
  'docs/trend-vision-one/ztsa-credit-settings.mdx',
  'docs/trend-vision-one/ztsa-integration-sso.mdx',
  'docs/trend-vision-one/ztsa-module-windows-2-22-1036.mdx'
];

console.log('Temporarily excluding problematic files...');

problematicFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  const backupPath = fullPath + '.backup';
  
  if (fs.existsSync(fullPath)) {
    fs.renameSync(fullPath, backupPath);
    console.log(`✅ Excluded: ${file}`);
  }
});

console.log('\n🎉 Files excluded! You can now run npm start');
console.log('To restore files later, run: node restore-excluded-files.js');