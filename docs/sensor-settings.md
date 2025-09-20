---
slug: sensor-settings
title: Sensor Settings
---

Configure inactive endpoint removal and sensor download bandwidth settings.

You can access the Sensor Settings screen by going to **Endpoint Security → Endpoint Inventory** then clicking on the Default and Global Settings icon (![](/images/gear_icon=fc9a51ad-35af-4fe3-92c6-5e41b2dfc5d9.webp)) and selecting **Global Settings**.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 60%" />
</colgroup>
<thead>
<tr>
<th><p>Section</p></th>
<th><p>Setting</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3"><p>Inactive Endpoint Removal Settings</p>


:::note

<p>Inactive agent removal occurs daily beginning at 00:00 (UTC + 08:00).</p>


:::

</td>
<td><p>Automatically remove inactive Endpoint Sensor endpoints</p></td>
<td><p>Define the number of days that a "Sensor only" agent must remain disconnected from the system before automatically removing the endpoint entry from the inventory</p>


:::warning[Important]

<p>Removing the endpoint from the inventory list does not uninstall the agent program or disable any features. To restore an endpoint to the inventory, you must manually uninstall and then reinstall the agent program.</p>


:::

</td>
</tr>
<tr>
<td><p>Automatically remove inactive non-persistent virtual desktop Endpoint Sensor endpoints</p></td>
<td><p>Define the number of days that a "Sensor only" agent must remain disconnected from the system before automatically removing the endpoint entry from the inventory</p></td>
</tr>
<tr>
<td colspan="2"></td>
</tr>
<tr>
<td><p>Sensor Download Bandwidth</p></td>
<td><p>Apply bandwidth throttling when downloading Endpoint Sensor components</p></td>
<td><p>Limit the number of concurrent agent downloads to limit bandwidth usage and ensure that endpoints upgrades and component downloads do not slow your network</p>
<p>Select to enable the setting and specify the maximum number of allowed concurrent downloads. See the following <strong>Throttling Considerations</strong> table to estimate download usage.</p>


:::note

<ul>
<li><p>Linux agents do not support bandwidth throttling.</p></li>
<li><p>If you do not enable the setting, your agents follow the default limit of 11 concurrent downloads.</p></li>
<li><p>The limit applies to all endpoint download actions, including:</p>
<ul>
<li><p>Downloads for new agent deployments such as using the deployment script or retrieving required modules during the installation process</p></li>
<li><p>Agent updates</p></li>
<li><p>Endpoint assessments</p></li>
<li><p>Deploying and updating ZTSA</p></li>
<li><p>Solution Center deployments</p></li>
<li><p>Other agent actions which require downloading information</p></li>
</ul>
<p>Setting the limit too low might slow deployment, updates, and other endpoint commands. If your endpoints appear to be responding slowly, consider raising the limit.</p></li>
</ul>


:::

</td>
</tr>
</tbody>
</table>

The following table provides estimated bandwidth throttling settings to update all your endpoints within seven days using a 300 Mbps connection. The settings also affect agent deployment and configuration changes. You can adjust the settings to accelerate the speed based on your network bandwidth.

**Throttling Considerations**

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><p>Endpoint Count</p></th>
<th><p>Max Concurrent Agent Downloads</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>1,000</p></td>
<td><p>10</p></td>
</tr>
<tr>
<td><p>5,000</p></td>
<td><p>50</p></td>
</tr>
<tr>
<td><p>10,000</p></td>
<td><p>100</p></td>
</tr>
<tr>
<td><p>25,000</p></td>
<td><p>250</p></td>
</tr>
<tr>
<td><p>50,000</p></td>
<td><p>500</p></td>
</tr>
<tr>
<td><p>100,000</p></td>
<td><p>1000</p></td>
</tr>
<tr>
<td><p>150,000</p></td>
<td><p>1500</p></td>
</tr>
<tr>
<td><p>200,000</p></td>
<td><p>2000</p></td>
</tr>
</tbody>
</table>
