---
slug: trend-vision-one-endpoint-inventory-table-columns
title: Endpoint Inventory table columns
---

Review the table columns available in Endpoint Inventory.

The Endpoint Inventory table contains a wide range of columns which you can choose to show or hide from view, or change the order of. You can also use the column names to create filters when searching for endpoints.

The following table lists the available columns in alphabetical order. The columns might appear in a different order when you access Endpoint Inventory.

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr>
<th><p>Column name</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Endpoint name</p></td>
<td><p>The name of the endpoint on your network</p>
<p>This column displays both endpoints with agents installed and unmanaged discoverable endpoints on your network. This column cannot be hidden.</p></td>
</tr>
<tr>
<td><p>Advanced risk telemetry</p></td>
<td><p>The advanced risk telemetry status of the endpoint</p>
<p>Displays the enabled or disabled status of the feature.</p></td>
</tr>
<tr>
<td><p>Agent policy</p></td>
<td><p>The policy name applied to the agent installed on the endpoint</p>
<p>Displays the name of the policy applied to the endpoint by the Protection Manager.</p></td>
</tr>
<tr>
<td><p>Agent program status</p></td>
<td><p>Indicates the connectivity status of the endpoint protection features, which shows whether features are currently online or offline</p>
<p>Displays the status of installed Standard Endpoint Protection and Server &amp; Workload Protection features.</p></td>
</tr>
<tr>
<td><p>Agent last connected</p></td>
<td><p>The most recent connection time for the endpoint protection agent</p>
<p>Displays when and how long since the agent last connected to the Protection Manager.</p></td>
</tr>
<tr>
<td><p>Agent update policy</p></td>
<td><p>The expected version of agent update and compliance status</p>
<p>Displays the assigned version rule. For example, n, n - 1, Fixed.</p></td>
</tr>
<tr>
<td><p>Agent update status</p></td>
<td><p>The status of the agent update schedule</p>
<p>Displays the Scheduled, Paused status for the agent update.</p></td>
</tr>
<tr>
<td><p>Agent version</p></td>
<td><p>The agent version installed on the endpoint</p></td>
</tr>
<tr>
<td><p>Component update policy</p></td>
<td><p>The expected version of component updates and compliance status</p>
<p>Displays the assigned version rule. For example, n, n - 1, n - 2.</p></td>
</tr>
<tr>
<td><p>Component update status</p></td>
<td><p>The status of the component update schedule</p>
<p>Displays the Scheduled, Paused status for the component update.</p></td>
</tr>
<tr>
<td><p>Credit allocation status</p></td>
<td><p>The paid endpoint security features applied to the endpoint</p>
<p>Displays which paid security features are applied to the endpoint. Credit allocation for each feature is normally determined by the number of endpoints with the feature enabled.</p>
<ul>
<li><p>Endpoint sensor detection and response</p></li>
<li><p>Advanced Endpoint Security</p></li>
<li><p>Advanced Server &amp; Workload Protection</p></li>
<li><p>SAP Scanner for Trend Vision One - Endpoint Security (Pro)</p></li>
</ul></td>
</tr>
<tr>
<td><p>CPU architecture</p></td>
<td><p>The CPU architecture running on the endpoint</p></td>
</tr>
<tr>
<td><p>Custom tags</p></td>
<td><p>The number of custom created tags assigned to the endpoint</p></td>
</tr>
<tr>
<td><p>Device services</p></td>
<td><p>Services detected on the endpoint</p></td>
</tr>
<tr>
<td><p>Display name</p></td>
<td><p>The display name on your network for the endpoint</p></td>
</tr>
<tr>
<td><p>Endpoint group</p></td>
<td><p>The group name or domain name that the endpoint belongs to</p></td>
</tr>
<tr>
<td><p>Endpoint GUID</p></td>
<td><p>The unique alphanumeric string that identifies the endpoint in Trend Vision One</p></td>
</tr>
<tr>
<td><p>Endpoint security policy</p></td>
<td><p>The endpoint security policy the endpoint is assigned to</p>
<p>Displays the name of the policy assigned in <strong>Endpoint Security Policies</strong>.</p></td>
</tr>
<tr>
<td><p>Endpoint sensor detection and response</p></td>
<td><p>The enabled/disabled status of the endpoint sensor detection and response feature</p>
<p>Configure endpoint sensor detection and response in <strong>Endpoint Security Policies</strong> or by using the policy override settings.</p></td>
</tr>
<tr>
<td><p>Endpoint Sensor version</p></td>
<td><p>The endpoint sensor version installed on the endpoint</p></td>
</tr>
<tr>
<td><p>Installed components</p></td>
<td><p>The compliance patterns reported from the endpoint protection product</p>
<p>Displays the components installed on Standard Endpoint Protection and Server &amp; Workload Protection managed endpoints.</p></td>
</tr>
<tr>
<td><p>IP address</p></td>
<td><p>The IP address of the endpoint</p></td>
</tr>
<tr>
<td><p>Isolation status</p></td>
<td><p>Indicates if an endpoint is isolated or not</p>
<p>Use Response Actions to isolate or restore endpoints.</p></td>
</tr>
<tr>
<td><p>Last IP used</p></td>
<td><p>The last IP address that logged on to the device</p></td>
</tr>
<tr>
<td><p>Last logged on user</p></td>
<td><p>The last user that logged on to the endpoint</p></td>
</tr>
<tr>
<td><p>Last scanned</p></td>
<td><p>The last time the endpoint protection features scanned the endpoint</p>
<p>Applies to Standard Endpoint Protection and Server &amp; Workload Protection managed endpoints.</p></td>
</tr>
<tr>
<td><p>Original endpoint group (deprecated)</p></td>
<td><p>The endpoint sensor group name before this endpoint was upgraded to Trend Vision One Endpoint Security</p></td>
</tr>
<tr>
<td><p>OS architecture</p></td>
<td><p>The operating system architecture running on the endpoint</p>
<p>Includes the common and specific name for the OS architecture. For example, <code>64-bit (x86-64)</code>.</p></td>
</tr>
<tr>
<td><p>OS kernel</p></td>
<td><p>The operating system kernel running on the endpoint</p>
<p>The specific Linux kernel. Only applies to Linux operating systems.</p></td>
</tr>
<tr>
<td><p>OS name</p></td>
<td><p>The name of the operating system running on the endpoint</p>
<p>For example, Windows 10, macOS Sonoma.</p></td>
</tr>
<tr>
<td><p>OS version</p></td>
<td><p>The version of the operating system running on the endpoint</p>
<p>The specific version and build number of the operating system. For example, a Windows 10 endpoint might display <code>10.0 (Build 19045)</code>.</p></td>
</tr>
<tr>
<td><p>Protection manager</p></td>
<td><p>The name of the Protection Manager instance that manages the agent installed on the endpoint</p>
<p>Endpoints not assigned to a Protection Manager instance, such as Endpoint Sensor only deployments, display a null (-) value.</p></td>
</tr>
<tr>
<td><p>Sensor connectivity</p></td>
<td><p>The connectivity of the sensor installed on the endpoint</p>
<p>Displays the connected or disconnected status of the endpoint sensor.</p></td>
</tr>
<tr>
<td><p>Sensor last connected</p></td>
<td><p>The last connection time that the sensor connected</p>
<p>Displays when and how long since the endpoint sensor last connected to Endpoint Inventory.</p></td>
</tr>
<tr>
<td><p>Service Gateway / proxy</p></td>
<td><p>The current connection method used by the endpoint</p></td>
</tr>
<tr>
<td><p>Version control policy</p></td>
<td><p>The name of the version control policy the endpoint is assigned to</p>
<p>Displays the name of the policy assigned in <strong>Version Control Policies</strong>.</p></td>
</tr>
</tbody>
</table>
