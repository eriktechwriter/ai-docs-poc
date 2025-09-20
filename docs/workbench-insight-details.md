---
slug: workbench-insight-details
title: Workbench insight details
---

The following table describes the basic information **Workbench** provides about Workbench insights.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Element</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Score</p></td>
<td><p>The score that Trend Vision One assigns to the insight based on the total scores from related alerts</p></td>
</tr>
<tr>
<td><p>Insight ID</p></td>
<td><p>A unique identifier for the insight</p></td>
</tr>
<tr>
<td><p>Insight name</p></td>
<td><p>The name of the insight</p></td>
</tr>
<tr>
<td><p>Last updated</p></td>
<td><p>The date and time Trend Vision One last updated the insight and the last update status</p>
<ul>
<li><p><strong>New alert correlated</strong>: Trend Vision One correlated an alert with the insight.</p></li>
<li><p><strong>Insight merged</strong>: Trend Vision One merged multiple insights.</p></li>
<li><p><strong>Alert removed</strong>: A user manually removed one or more alerts from the insight.</p></li>
<li><p><strong>Alert added</strong>: Trend Vision One added one or more alerts to the insight.</p></li>
<li><p><strong>Older alert data no longer available</strong>: Trend Vision One removed one or more expired alerts (older than 180 days) from the data log.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Associated alerts</p></td>
<td><p>The total number of related alerts and the number of active alerts associated with the insight</p>


:::note

<p>An alert can only be associated with one insight.</p>


:::

</td>
</tr>
<tr>
<td><p>Impact scope</p></td>
<td><p>The number of entities that the insight affects within the company network</p></td>
</tr>
<tr>
<td><p>Created</p></td>
<td><p>The date and time Trend Vision One generated the insight</p></td>
</tr>
<tr>
<td><p>Owner</p></td>
<td><p>The Trend Vision One accounts in your organization assigned to the insight</p></td>
</tr>
</tbody>
</table>

The following table describes the alert information displayed on the alert details screen.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Element</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="trend-vision-one-alerts-workbench-insights">Workbench Insights alerts</a></td>
<td><p>Detailed information about the insight and the list of alerts included in the insight</p></td>
</tr>
<tr>
<td><p>Insight Timeline</p></td>
<td><p>Timeline of the insight as well as the <a href="trend-vision-one-insight-based-execution-profile">root cause, lifecycle, and impact scope of an insight</a></p></td>
</tr>
<tr>
<td><p>Impact Scope</p></td>
<td><p>List of entities affected by the insight</p></td>
</tr>
<tr>
<td><p>Highlighted Objects</p></td>
<td><p>Trend Vision One analyzes highlighted objects to correlate alerts.</p>
<p>Select one or more highlighted objects and choose a response action to take on the objects.</p>
<p>Gmail only supports the <em>Delete Message</em> response action.</p></td>
</tr>
<tr>
<td><p>Attack phase</p></td>
<td><p>MITRE tactics detected in the insight</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Workbench Insights alerts](alerts-workbench-insights.md "Check detailed information about a Workbench insight and the list of alerts included in the insight.")
- [Insight-Based Execution Profile](insight-based-execution-profile.md "The Insight-Based Execution Profile allows you to focus on objects and events across affected endpoints from a broader perspective, rather than isolated, discrete alerts that may point to the same underlying root cause.")
