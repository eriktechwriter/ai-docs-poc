---
slug: trend-vision-one-suspicious-object-actions
title: Suspicious object actions
---

You can specify actions for connected products to take after detecting specific suspicious objects.

Trend Vision One connects to different products and sends the Suspicious Objects List to the connected products for detection. The connected products then apply the specified action based on their capability.

:::note
Adding IP addresses to the Suspicious Object List does not disrupt the existing connection to the specified endpoints. Only new attempts to connect to the specified endpoints are blocked.
:::

The following table outlines the object types and actions supported by different products and applications.

<table>
<colgroup>
<col style="width: 24%" />
<col style="width: 28%" />
<col style="width: 48%" />
</colgroup>
<thead>
<tr>
<th><p>Product/Service</p></th>
<th>Object Type</th>
<th><p>Action</p></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="4"><p>Endpoint Sensor agent</p>
<p>(Windows, Mac)</p></td>
<td><p>File SHA-1</p></td>
<td rowspan="3"><p>Log, Block</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
</tr>
<tr>
<td><p>IP address</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<p>The Log and Block actions for File SHA-1 and File SHA-256 are only supported for PE, ELF, and MACH-O file formats.</p>


:::

</td>
</tr>
<tr>
<td rowspan="3"><p>Endpoint Sensor agent</p>
<p>(Linux)</p></td>
<td><p>File SHA-1</p></td>
<td rowspan="2"><p>Log, Block</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<p>The Log and Block actions for File SHA-1 and File SHA-256 are only supported for EXE file format.</p>


:::

</td>
</tr>
<tr>
<td rowspan="5"><p>Standard Endpoint Protection agent</p>
<p>(Windows)</p></td>
<td><p>IP address</p></td>
<td rowspan="4"><p>Log, Block</p></td>
</tr>
<tr>
<td><p>URL</p></td>
</tr>
<tr>
<td><p>Domain</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<ul>
<li><p>To take action on File SHA-1 objects, you must first activate Application Control for Standard Endpoint Protection.</p></li>
<li><p>The Log and Block actions for File SHA-1 are only supported for PE and ELF file formats.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td rowspan="6"><p>Service Gateway</p></td>
<td><p>IP address</p></td>
<td rowspan="5"><p>Log, Block</p></td>
</tr>
<tr>
<td><p>URL</p></td>
</tr>
<tr>
<td><p>Domain</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<p>The connected products of Service Gateway apply the specified action based on their capability.</p>


:::

</td>
</tr>
<tr>
<td rowspan="4"><p>Zero Trust Secure Access Internet Access</p></td>
<td><p>IP address</p></td>
<td rowspan="4"><p>Log, Block</p></td>
</tr>
<tr>
<td><p>URL</p></td>
</tr>
<tr>
<td><p>Domain</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td rowspan="5"><p>Trend Cloud One - Endpoint &amp; Workload Security (Windows)</p></td>
<td><p>IP address</p></td>
<td>Log</td>
</tr>
<tr>
<td><p>Domain</p></td>
<td>Log</td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
<td><p>Log, Block</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
<td><p>Log, Block</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<ul>
<li><p>Endpoint &amp; Workload Security supports the Log action for Deep Security Agent version 20.0.0-4185 or later for Windows.</p></li>
<li><p>The Log and Block actions for File SHA-1 and File SHA-256 are only supported for PE and ELF file formats.</p></li>
<li><p>You must enable Activity Monitoring and have an XDR add-on license for Trend Cloud One - Endpoint &amp; Workload Security in order to block and log suspicious objects.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td rowspan="5"><p>Trend Cloud One - Endpoint &amp; Workload Security (Linux)</p></td>
<td><p>IP address</p></td>
<td>Log</td>
</tr>
<tr>
<td><p>Domain</p></td>
<td>Log</td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
<td><p>Log, Block</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
<td><p>Log, Block</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<ul>
<li><p>Endpoint &amp; Workload Security supports the Log action for Deep Security Agent version 20.0.0-4185 or later for Linux.</p></li>
<li><p>The Log and Block actions for File SHA-1 and File SHA-256 are only supported for PE and ELF file formats.</p></li>
<li><p>You must enable Activity Monitoring and have an XDR add-on license for Trend Cloud One - Endpoint &amp; Workload Security in order to block and log suspicious objects.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td rowspan="6"><p>Trend Cloud One - Endpoint &amp; Workload Security (macOS)</p></td>
<td><p>IP address</p></td>
<td rowspan="5">Log, Block</td>
</tr>
<tr>
<td><p>Domain</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
</tr>
<tr>
<td><p>URL</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<ul>
<li><p>Endpoint &amp; Workload Security supports the Log and Block actions for Deep Security Agent version 20.0.0-198 or later for macOS.</p></li>
<li><p>The Log and Block actions for File SHA-1 and File SHA-256 are only supported for MACH-O file format.</p></li>
<li><p>You must enable Activity Monitoring and have an XDR add-on license for Trend Cloud One - Endpoint &amp; Workload Security in order to block and log suspicious objects.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td rowspan="5"><p>Trend Micro Apex One as a Service</p></td>
<td><p>IP address</p></td>
<td rowspan="4"><p>Log, Block</p></td>
</tr>
<tr>
<td><p>URL</p></td>
</tr>
<tr>
<td><p>Domain</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<ul>
<li><p>To take action on File SHA-1 objects, you must first activate Application Control for Apex One as a Service.</p></li>
<li><p>The Log and Block actions for File SHA-1 are only supported for PE and ELF file formats.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td rowspan="5"><p>Trend Micro Apex One (on-premises)</p></td>
<td><p>IP address</p></td>
<td rowspan="4"><p>Log, Block</p></td>
</tr>
<tr>
<td><p>URL</p></td>
</tr>
<tr>
<td><p>Domain</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<ul>
<li><p>To take action on File SHA-1 objects, you must first activate Application Control for Trend Micro Apex One (on-premises).</p></li>
<li><p>The Log and Block actions for File SHA-1 are only supported for PE and ELF file formats.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td rowspan="5"><p>Trend Micro Cloud App Security</p></td>
<td><p>URL</p></td>
<td rowspan="4"><p>Log, Quarantine</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
</tr>
<tr>
<td><p>Sender address</p></td>
</tr>
<tr>
<td colspan="2">

:::note

<p>After identifying a suspicious URL, file, or sender address in an email message, Cloud App Security quarantines the message from all supported mailboxes protected by Cloud App Security.</p>


:::

</td>
</tr>
<tr>
<td rowspan="4"><p>Trend Micro Deep Discovery Inspector version 6.7 SP1 or later</p></td>
<td><p>IP address</p></td>
<td rowspan="4"><p>Log</p></td>
</tr>
<tr>
<td><p>URL</p></td>
</tr>
<tr>
<td><p>Domain</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td><p>Trend Micro Deep Security</p></td>
<td><p>File SHA-1 from Sandbox</p>


:::note

<p>File SHA-1 objects added through third-party intelligence and manual operations are not supported.</p>


:::

</td>
<td><p>Log, Block</p></td>
</tr>
<tr>
<td rowspan="4"><p>Trend Micro Email Security</p></td>
<td><p>URL</p></td>
<td rowspan="3"><p>Log, Quarantine</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
</tr>
<tr>
<td><p>Sender address</p></td>
<td>Block</td>
</tr>
<tr>
<td rowspan="6"><p>TippingPoint Security Management System</p></td>
<td><p>IP address</p></td>
<td rowspan="5"><p>Log, Block</p></td>
</tr>
<tr>
<td><p>URL</p></td>
</tr>
<tr>
<td><p>Domain</p></td>
</tr>
<tr>
<td><p>File SHA-1</p></td>
</tr>
<tr>
<td><p>File SHA-256</p></td>
</tr>
<tr>
<td colspan="2">

:::warning[Important]

<p>TippingPoint Security Management Systems do not automatically apply actions provided by Trend Vision One. You must set up a profile in the TippingPoint Security Management System with a reputation filter that selects entries from the reputation database and specifies the action.</p>


:::

</td>
</tr>
</tbody>
</table>
