---
slug: trend-vision-one-snmp-defined-trap-messages
title: SNMP trap messages defined for Service Gateway
---

View a list of trap messages defined for Service Gateway.

**Standard Traps**

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><p>Trap Name</p></th>
<th><p>Object ID</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Cold Start Trap</p></td>
<td><p><code>1.3.6.1.6.3.1.1.5.1</code></p></td>
<td><p>The SNMP entity has started.</p></td>
</tr>
<tr>
<td><p>Warm Start Trap</p></td>
<td><p><code>1.3.6.1.6.3.1.1.5.2</code></p></td>
<td><p>The SNMP entity has restarted without losing its configuration.</p></td>
</tr>
<tr>
<td><p>Link Down Trap</p></td>
<td><p><code>1.3.6.1.6.3.1.1.5.3</code></p></td>
<td><p>A network interface has gone down.</p></td>
</tr>
<tr>
<td><p>Link Up Trap</p></td>
<td><p><code>1.3.6.1.6.3.1.1.5.4</code></p></td>
<td><p>A network interface has come up.</p></td>
</tr>
<tr>
<td><p>Authentication Failure Trap</p></td>
<td><p><code>1.3.6.1.6.3.1.1.5.5</code></p></td>
<td><p>An SNMP authentication failure has occurred.</p></td>
</tr>
</tbody>
</table>

**Service Gateway Monitoring**

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th><p>Trap Name</p></th>
<th><p>MIB Objects</p></th>
<th><p>Object ID</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>CPU Load High</p></td>
<td><p><code>HOST-RESOURCES-MIB::hrProcessorLoad</code></p></td>
<td><p><code>1.3.6.1.2.1.25.3.3.1.2</code></p></td>
<td><p>CPU usage exceeds 90%.</p></td>
</tr>
<tr>
<td><p>Memory Usage High</p></td>
<td><p><code>HOST-RESOURCES-MIB::hrStorageUsed.1</code></p></td>
<td><p><code>1.3.6.1.2.1.25.2.3.1.6.1</code></p></td>
<td><p>Used memory exceeds 90% of total physical memory.</p></td>
</tr>
<tr>
<td><p>Load Average Exceeded</p></td>
<td><p><code>UCD-SNMP-MIB::laNames</code></p>
<p><code>UCD-SNMP-MIB::laErrMessage</code></p></td>
<td><p><code>1.3.6.1.4.1.2021.10.1.2</code></p>
<p><code>1.3.6.1.4.1.2021.10.1.101</code></p></td>
<td><p>Load average exceeds specified threshold.</p></td>
</tr>
<tr>
<td><p>Disk Space Low</p></td>
<td><p><code>UCD-SNMP-MIB::dskErrorMsg</code></p></td>
<td><p><code>1.3.6.1.4.1.2021.9.1.101</code></p></td>
<td><p>Available space of any of the following partitions decreases below 10%.</p>
<ul>
<li><p><code>/</code></p></li>
<li><p><code>/back</code></p></li>
<li><p><code>/data</code></p></li>
<li><p><code>/image</code></p></li>
</ul></td>
</tr>
</tbody>
</table>
