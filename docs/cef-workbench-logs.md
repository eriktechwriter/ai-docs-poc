---
slug: cef-workbench-logs
title: CEF Workbench logs
---

<table>
<thead>
<tr>
<th><p>CEF Key</p></th>
<th><p>Description</p></th>
<th><p>Example</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Header (Device Event Class ID)</p></td>
<td><p>Unique identifier per event-type</p></td>
<td><ul>
<li><p><code>900001</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>Header (Device Product)</p></td>
<td><p>Product of sending device</p></td>
<td><ul>
<li><p><code>Trend Vision One</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>Header (Device Vendor)</p></td>
<td><p>Product vendor</p></td>
<td><ul>
<li><p><code>Trend Micro</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>Header (Device Version)</p></td>
<td><p>Service version</p></td>
<td><ul>
<li><p><code>1.0.0</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>Header (Name)</p></td>
<td><p>Category of the event</p></td>
<td><ul>
<li><p><code>Trend Vision One Workbench Alert</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>Header (Severity)</p></td>
<td><p>Importance of the event</p></td>
<td><ul>
<li><p><code>3: Low</code></p></li>
<li><p><code>5: Medium</code></p></li>
<li><p><code>7: High</code></p></li>
<li><p><code>9: Critical</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>Header (Version)</p></td>
<td><p>CEF format version</p></td>
<td><ul>
<li><p><code>CEF:0</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>externalId</p></td>
<td><p>Workbench ID</p></td>
<td><ul>
<li><p><code>WB-9002-20210519-00014</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>cat</p></td>
<td><p>Workbench name</p></td>
<td><ul>
<li><p><code>Possible APT Attack</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>cn1</p></td>
<td><p>Count of all impact scopes</p></td>
<td><ul>
<li><p><code>1</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>cn1Label</p></td>
<td><p>Corresponding label for the "cn1" field</p></td>
<td><ul>
<li><p><code>Impact Scope Count</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>cs1</p></td>
<td><p>Workbench link</p></td>
<td><ul>
<li><p><code>https://portal-int.visionone.trendmicro.com/index.html#/workbench?workbenchId=WB-9002-20210517-00001&amp;ref=0c12e642ca5b7ed4436e5f23f568ae10066608d3</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>cs1Label</p></td>
<td><p>Corresponding label for the "cs1" field</p></td>
<td><ul>
<li><p><code>Workbench link</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>msg</p></td>
<td><p>Description of the detection model</p></td>
<td><ul>
<li><p><code>A user bypassed higher-level permissions.</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>rt</p></td>
<td><p>Workbench complete time</p></td>
<td><ul>
<li><p><code>Dec 05 2022 05:26:45</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>sourceServiceName</p></td>
<td><p>Alert provider</p></td>
<td><ul>
<li><p><code>SAE</code></p></li>
<li><p><code>TI</code></p></li>
</ul></td>
</tr>
<tr>
<td><p>TrendMicroV1CompanyID</p></td>
<td><p>Company ID</p></td>
<td><ul>
<li><p><code>68960c94-9be6-4343-a4ca-6408de7aa331</code></p></li>
</ul></td>
</tr>
</tbody>
</table>
