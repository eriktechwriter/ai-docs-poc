---
slug: appliance-details
title: Appliance Details
---

Review information about your Deep Discovery Inspector appliance.

The **Appliance Details** screen provides a summary of information about your connected Deep Discovery Inspector appliance to help with managing your environment. Click the appliance identifier to view the appliance details.

The Appliance Details screen is divided into three tabs:

- System Information

- Virtual Analyzer

- System Settings

The **System Information** tab provides basic information about the Deep Discovery Inspector appliance.

**System Information**

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Field</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Connection status</p></td>
<td><p>The status of the connection between <strong>Network Inventory</strong> and the appliance</p></td>
</tr>
<tr>
<td><p>Appliance version</p></td>
<td><p>The Deep Discovery Inspector version</p>


:::note

<p>Some plans cannot execute if the target version is not compatible with source files or configurations.</p>


:::

</td>
</tr>
<tr>
<td><p>Bandwidth</p></td>
<td><p>The amount of bandwidth allocated to the appliance</p></td>
</tr>
<tr>
<td><p>Model</p></td>
<td><p>The appliance model for physical on-premises Deep Discovery Inspector appliances</p>
<p>This field appears if your connected Deep Discovery Inspector appliance is a physical appliance.</p></td>
</tr>
<tr>
<td><p>Platform</p></td>
<td><p>The hypervisor hosting the Deep Discovery Inspector virtual appliance</p>
<p>This field appears if your connected Deep Discovery Inspector appliance is a virtual appliance.</p></td>
</tr>
<tr>
<td><p>Build</p></td>
<td><p>Deep Discovery Inspector build number</p></td>
</tr>
<tr>
<td><p>GUID</p></td>
<td><p>Deep Discovery Inspector appliance GUID</p></td>
</tr>
<tr>
<td><p>License expiration date</p></td>
<td><p>The date when the current license expires</p></td>
</tr>
<tr>
<td><p>Language</p></td>
<td><p>The language version of Deep Discovery Inspector</p>


:::note

<p>Some plans cannot execute if the target language is not compatible with source files or configurations.</p>


:::

</td>
</tr>
<tr>
<td><p>Service Gateway</p></td>
<td><p>The Service Gateway the appliance is currently connected to</p>
<p>For more information, see <a href="trend-vision-one-configuring-ddi-connections">Configuring Deep Discovery Inspector connections</a>.</p></td>
</tr>
<tr>
<td><p>Update</p></td>
<td><p>The most recently deployed hotfix / critical patch and configuration replication plans</p>
<p>For more information about plans, see <a href="trend-vision-one-appliance-plans">Appliance Plans</a>.</p></td>
</tr>
</tbody>
</table>

The **Virtual Analyzer** tab displays the current Virtual Analyzer configuration.

**Virtual Analyzer**

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Field</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Type</p></td>
<td><p>Which Virtual Analyzer the Deep Discovery Inspector appliance is configured to use</p>
<ul>
<li><p><strong>Internal</strong>: The appliance uses the internal Virtual Analyzer.</p></li>
<li><p><strong>External</strong>: The appliance uses Deep Discovery Analyzer.</p></li>
<li><p><strong>Sandbox as a Service</strong>: The appliance uses Sandbox as a Service.</p></li>
<li><p><strong>Disabled</strong>: The appliance uses the <strong>Send to sandbox</strong> feature.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Maximum images</p></td>
<td><p>The maximum number of images Virtual Analyzer can use and the OS combination</p></td>
</tr>
<tr>
<td><p>Maximum instances</p></td>
<td><p>The maximum number of instances Virtual Analyzer can run</p></td>
</tr>
<tr>
<td><p>Images</p></td>
<td><p>A list of images deployed to Virtual Analyzer on the appliance</p></td>
</tr>
</tbody>
</table>

The **System Settings** tab provides options to help configure some of your Deep Discovery Inspector features. The System Settings tab is only available for connected appliances version 6.7 or later.

**System Settings**

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Setting</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>SSH access</p></td>
<td><p>Enable/disable SSH access</p>
<p>SSH access allows administrators to sign in remotely to manage sensors, execute commands, and copy or upload files to the sensor using an SSH client.</p></td>
</tr>
<tr>
<td><p>Detection mode</p></td>
<td><p>Set the sensor detection mode</p>
<p>Only available if you have enabled hypersensitive mode in Support Settings.</p></td>
</tr>
</tbody>
</table>
