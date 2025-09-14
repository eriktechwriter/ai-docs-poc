---
slug: trend-vision-one-deep-discovery-inspector-appliances
title: Deep Discovery Inspector appliances
---

Monitor and configure connected Deep Discovery Inspector appliances from Network Inventory.

The **Deep Discovery Inspector Appliances** inventory on the **Network Inventory** screen provides an overview of connected Deep Discovery Inspector appliances within your environment. Deep Discovery Inspector appliances provide **Network Security** with network activity data, allowing for analysis, reporting, and sharing of detected suspicious objects. You can take several actions to manage and configure your environment.

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 68%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Connect a Deep Discovery Inspector appliance</p></td>
<td><p>Connect a Deep Discovery Inspector appliance</p>
<p>Click <strong>Connect Appliance</strong> to <a href="trend-vision-one-ddi-connection-deployment">connect a deployed appliance</a>.</p></td>
</tr>
<tr>
<td><p>Manage plans and Virtual Analyzer images</p></td>
<td><p>Manage appliance plans and configure to an SFTP source to manage Virtual Analyzer images</p>
<p>Click the <strong>Manage</strong> drop-down and select one of the following:</p>
<ul>
<li><p><a href="trend-vision-one-appliance-plans">Appliance plans</a>: Create or manage plans.</p></li>
<li><p><a href="trend-vision-one-virtual-analyzer-image-source">Virtual Analyzer image source</a>: Configure an SFTP source and manage available images to deploy to the Deep Discovery Inspector appliance Virtual Analyzer.</p></li>
</ul></td>
</tr>
<tr>
<td><p>View appliance details</p></td>
<td><p>View detailed information about the appliance including plans and Virtual Analyzer configuration</p>
<p>Click the appliance identifier to view the <a href="trend-vision-one-appliance-details">Appliance Details</a> screen.</p></td>
</tr>
<tr>
<td><p>Access the Deep Discovery Inspector console</p></td>
<td><p>Access the appliance console to manage the console directly</p>
<p>Click <strong>Access</strong> under the <strong>Access console</strong> column to open the Deep Discovery Inspector console for the chosen appliance.</p>


:::warning[Important]

<p>You can only access appliances that are part of your corporate network or that you can reach directly. Connect to the network the appliance is deployed on before attempting to access.</p>


:::

</td>
</tr>
<tr>
<td><p>Disconnect a Deep Discovery Inspector appliance</p></td>
<td><p>Disconnect an appliance</p>
<p>Click <img src="./images/garbage_can_icon=GUID-20230329141313.webp" /> to disconnect a Deep Discovery Inspector appliance from <strong>Network Security</strong>.</p></td>
</tr>
<tr>
<td><p>Enable or disable Send to sandbox</p></td>
<td><p>Manage whether to send files to a virtual sandbox managed by Trend Vision One for analysis</p>
<p>Turn on <em>send to sandbox</em> to enable the Deep Discovery Inspector appliance to submit suspicious files and other objects to a virtual sandbox for analysis. You can view the results in the Sandbox Analysis app. You can select multiple appliances to configure more than one at a time.</p>
<p>For more information about integrating your Deep Discovery Inspector sandbox functions with Trend Vision One, see <a href="trend-vision-one-sandbox-deep-discovery-inspector">Sandbox options for connected Deep Discovery Inspector appliances</a>.</p>


:::warning[Important]

<p>Send to sandbox only supports Deep Discovery Inspector appliance version 6.8 or later.</p>
<p>You cannot have any other sandbox solution configured on the appliance you want to enable Send to sandbox.</p>


:::

</td>
</tr>
<tr>
<td><p>Configure your connection method or connect to a Service Gateway</p></td>
<td><p>Change how your Deep Discovery Inspector appliances connect to <strong>Network Security</strong> and whether to connect to a Service Gateway as a source for services such as ActiveUpdate</p>
<p>Select one or more appliances and click the <strong>Configure Connection Settings</strong> button.</p>
<p>For more information, see <a href="trend-vision-one-configuring-ddi-connections">Configuring Deep Discovery Inspector connections</a>.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Appliance Details](appliance-details.md "Review information about your Deep Discovery Inspector appliance.")
- [Appliance Plans](appliance-plans.md "Create and manage appliance plans to automate tasks such as hotfix and critical patch deployment.")
- [Virtual Analyzer Image Source](virtual-analyzer-image-source.md "Configure and manage the SFTP source for your Virtual Analyzer images.")
- [Ports and URLs used by Deep Discovery Inspector](ports-urls-used-ddi.md "Use these settings to configure your firewall and connected products.")
