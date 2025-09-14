---
slug: trend-vision-one-service-gateway-services
title: Service Gateway services
---

Install services on your Service Gateway appliance to connect or manage your on-premises or third-party products.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 40%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>Description</p></th>
<th><p>Additional Requirements</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>ActiveUpdate Service</p></td>
<td><p>Serves on-premises Trend Micro products as a local ActiveUpdate server to reduce outgoing internet traffic.</p></td>
<td><ul>
<li><p>Requires <a href="trend-vision-one-activeupdate-configuration">additional configuration steps</a> after installation.</p></li>
</ul></td>
</tr>
<tr>
<td><p><a href="trend-vision-one-forward-proxy-service">Forward Proxy Service</a></p></td>
<td><p>Allows on-premises Trend Micro products with no direct access to the internet to use the service gateway as a proxy to reach Trend Micro services.</p></td>
<td><p>Requires the Service Gateway API key.</p></td>
</tr>
<tr>
<td><p>Generic Caching Service</p></td>
<td>

:::warning[Important]

<p>The Generic Caching Service is not available in all regions. For more information on accessing this service, contact your service provider.</p>


:::


<p>Saves previously requested internet content for on-premises Trend Micro products to speed up access to data and reduce demand on bandwidth of your business.</p></td>
<td><p>Trend Micro recommends deploying the virtual appliance with the <a href="trend-vision-one-sizing-guide-sg-endpoints">standard image</a> specification, because at least 100 GB of storage must be free for this service.</p></td>
</tr>
<tr>
<td><p><a href="trend-vision-one-smart-protection-services">Smart Protection Services</a></p></td>
<td><p>Leverages file reputation and web reputation technology to detect security risks. On-premises Trend Micro products can perform queries against the Service Gateway virtual appliance, which provides Smart Protection either through the local Smart Protection Server on the virtual appliance or as a reverse proxy.</p></td>
<td><ul>
<li><p>Use the address information listed in the settings panel to configure connected products.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Suspicious Object Exchange Service</p></td>
<td><p>Enables sharing suspicious object data from Trend Vision One with third-party apps.</p></td>
<td><p>Service requires configuring third-party apps in <a href="trend-vision-one-third-party-integration">Third-Party Integration</a>.</p></td>
</tr>
<tr>
<td><p>Suspicious Object List Synchronization Service</p></td>
<td><p>Supports the sharing of Suspicious Object lists between Trend Vision One and on-premises Trend Micro products.</p></td>
<td><p>Requires the Service Gateway API key.</p></td>
</tr>
<tr>
<td><p>Syslog Connector</p></td>
<td><p>Enables sharing data from Trend Vision One with your local syslog server.</p></td>
<td><p>Service requires configuring third-party apps in <a href="trend-vision-one-third-party-integration">Third-Party Integration</a>.</p></td>
</tr>
</tbody>
</table>
