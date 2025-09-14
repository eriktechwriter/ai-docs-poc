---
slug: trend-vision-one-sweeping-types
title: Sweeping types
---

Trend Vision One provides two types of sweeping that allows you to search your environment for indicators of compromise.

:::note
Only Endpoint Activity Data, Email Activity Data, and Network Activity Data are supported for both types of sweeping.
:::

<table>
<colgroup>
<col style="width: 32%" />
<col style="width: 68%" />
</colgroup>
<thead>
<tr>
<th><p>Type</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Auto Sweeping</p></td>
<td><p>Auto Sweeping runs based on the following intelligence data:</p>
<ul>
<li><p>Intelligence reports</p>
<ul>
<li><p>By source type of curated reports</p>
<p>Trend Vision One generates a scheduled sweep and runs the sweep once every day for 7 consecutive days to search your environment for threat indicators based on incoming new reports from the selected source.</p></li>
<li><p>By a single curated or custom report</p>
<p>A scheduled sweep runs once every day during the specified period to search your environment for threat indicators extracted from the current report.</p></li>
</ul></li>
<li><p>Third-party intelligence</p>
<p>If you enable the <strong>Run an auto sweep</strong> option for a specific intelligence source, for example, a TAXII feed collection or a MISP event tag, a scheduled sweep will be generated and triggered within 24 hours to search your environment for indicators extracted from the source.</p>
<p>Third-party intelligence is processed to produce custom intelligence reports after successful data retrieval.</p></li>
</ul>
<p>Trend Vision One triggers Auto Sweeping tasks at the same scheduled time every day and calculates the total number of indicators applied for Auto Sweeping over the past 24 hours to track quota usage.</p>


:::note

<p>A maximum of 50,000 indicators is allowed per day for Auto Sweeping. The quota limit is shared by Auto Sweeping tasks triggered from both intelligence reports and third-party intelligence.</p>
<p>If the total number of indicators reaches the daily quota limit for Auto Sweeping, you can trigger Manual Sweeping when necessary.</p>


:::

</td>
</tr>
<tr>
<td><p>Manual Sweeping</p></td>
<td><p>You can select any intelligence report to initiate a manual sweep based on identified indicators.</p>


:::note

<p>A maximum of 10,000 indicators is allowed per day for Manual Sweeping.</p>


:::

</td>
</tr>
</tbody>
</table>
