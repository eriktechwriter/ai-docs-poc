---
slug: trend-vision-one-alerts-workbench-insights
title: Workbench Insights alerts
---

Check detailed information about a Workbench insight and the list of alerts included in the insight.

**Workbench Insights** **Alerts** displays the list of alerts associated with an insight and other details about the insight.

The following table outlines the available actions for **Alerts**.

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
<td><p>Change the alert status</p></td>
<td><p>Select one or more alerts and click <strong>Change Status</strong> to update the progress of alerts or investigations.</p>


:::note

<p>If you select <strong>Closed - false positive</strong>, you need to specify why you think this alert was false.</p>


:::

</td>
</tr>
<tr>
<td><p>Link alerts to an insight</p></td>
<td><p>After performing an alert investigation, select one or more alerts and click <strong>Associate with Insight</strong> to associate the selected alerts with the specified insight.</p>


:::note

<ul>
<li><p>If an alert is manually linked to an insight or unlinked from an insight, Trend Vision One does not correlate the alert if a new alert is received.</p></li>
<li><p>An alert can only be associated with one insight.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td><p>Remove alerts from an insight</p></td>
<td><p>After performing an alert investigation, select one or more alerts and click <strong>Remove from Insight</strong>.</p>


:::note

<p>If an alert is manually linked to an insight or unlinked from an insight, Trend Vision One does not correlate the alert if a new alert is received.</p>


:::

</td>
</tr>
<tr>
<td><p>Execute Automated Response Playbooks</p></td>
<td><p>Select one or more alerts and click <strong>Execute Playbook</strong> to execute Automated Response playbooks for the specified alerts.</p>


:::warning[Important]

<p>To initiate automated response for the selected alerts, <a href="trend-vision-one-create-automated-response-playbooks">configure Automated Response Playbooks</a> first.</p>


:::

</td>
</tr>
</tbody>
</table>
