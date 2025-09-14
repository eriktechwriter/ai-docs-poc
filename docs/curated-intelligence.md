---
slug: trend-vision-one-curated-intelligence
title: Curated intelligence
---

Trend Micro gathers and integrates curated threat intelligence from internal and external sources.

The following table outlines the actions available on the **Curated** screen.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Filter intelligence reports</p></td>
<td><p>Use the search text box and the following drop-down lists to filter curated intelligence reports:</p>
<ul>
<li><p><strong>Last updated</strong>: The last date and time Trend Vision One received the reports</p></li>
<li><p><strong>View</strong>: The option to show only specific reports or all reports</p></li>
<li><p><strong>Source</strong>: The source where the reports came from</p></li>
</ul></td>
</tr>
<tr>
<td><p>Turn on Auto Sweeping</p></td>
<td><ul>
<li><p>By curated report source type</p>
<ul>
<li><p>Click <strong>Auto Sweeping</strong> and turn on <strong>Auto Sweeping</strong> for certain sources.</p></li>
<li><p>Click the <em>Source</em> links and turn on <strong>Auto Sweeping</strong> for the current source.</p></li>
</ul>
<p>Trend Vision One generates a scheduled sweep and runs the sweep once every day for 7 consecutive days to search your environment for threat indicators based on incoming new reports from the selected source.</p></li>
<li><p>By a single report</p>
<p>Click the options button (<img src="./images/options=ddb0b67f-0654-4aa5-8bc7-48ec554c5448.webp" />) at the end of the row and choose <strong>Configure Auto Sweeping</strong>. Specify the period to run Auto Sweeping for the current report and click <strong>Submit</strong>.</p>
<p>A scheduled sweep runs once every day during the specified period to search your environment for threat indicators extracted from the current report.</p></li>
</ul>


:::note

<p>The auto-sweeping paused icon (<img src="./images/scanPaused_icon=GUID-f794bb0b-6abc-453b-bb50-f3b4eb31fa95.webp" />) indicates that the report has produced potential false positives and is currently being analyzed by Trend Micro threat experts. If false positives are confirmed, the IoCs that caused the false positives may be revoked from the report or added to global exceptions before restarting the sweep.</p>


:::

</td>
</tr>
<tr>
<td><p>Take additional actions</p></td>
<td><p>Click the options button (<img src="./images/options=ddb0b67f-0654-4aa5-8bc7-48ec554c5448.webp" />) at the end of the row and choose to take additional actions on the intelligence report:</p>
<ul>
<li><p><strong>Trend Micro Research</strong>: Click to access related blogs or articles from Trend Micro.</p></li>
<li><p><strong>External Reference</strong>: Click to access related blogs or articles from third parties.</p></li>
<li><p><strong>Start Sweeping</strong>: Click to trigger a Manual Sweeping task to search your environment for threat indicators.</p></li>
<li><p><strong>Configure Auto Sweeping</strong>: Click to turn on and specify the period to run Auto Sweeping for the current report and click <strong>Submit</strong>.</p></li>
<li><p><strong>Start Sweeping (STIX-Shifter)</strong>: Click to trigger a Manual Sweeping task to search other data sources you have configured in <strong>Third-Party Integration</strong> for threat indicators using STIX-Shifter.</p>
<p>For more information about STIX-Shifter connection settings, see <a href="trend-vision-one-third-party-integration">Third-Party Integration</a>.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Check matched sweeps</p></td>
<td><p>Under <strong>Matched sweeps</strong>, check the number of tasks that have indicator matches and the total number of sweeping tasks that have been created. For example, the message <strong>1 out of 7</strong> means one sweeping task has indicator matches among a total of seven sweeping tasks.</p>


:::note

<p>The message <strong>0 out of 0</strong> indicates that no sweeping task has been triggered.</p>
<p>In addition, Trend Vision One defines a 180-day data retention period for the sweeping task history. The message under<strong>Matched sweeps</strong> will be reset to <strong>0 out of 0</strong> once the retention period expires.</p>


:::

</td>
</tr>
<tr>
<td><p>View sweeping task details</p></td>
<td><p>Click the right arrow (<img src="./images/run_icon=cbe6ecd0-17e8-4e04-bef3-4efe4eb9c7e5.webp" />) at the beginning of the row to expand sweeping tasks and check the basic information about each task.</p>
<p>To further explore the tasks that have indicator matches, do the following:</p>
<ul>
<li><p>Click the links under <strong>Related links</strong> to open Workbench alerts or download sweeping results.</p></li>
<li><p>Click the <strong>Details</strong> icon (<img src="./images/details_icon=f45ada04-b746-40a7-a5f4-2166c059213c.webp" />) to check matched indicators and associated entities of the tasks.</p></li>
</ul></td>
</tr>
</tbody>
</table>
