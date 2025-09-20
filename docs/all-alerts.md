---
slug: all-alerts
title: All Alerts
---

Investigate and understand the extent and severity of any alert to further decide response actions.

The **All Alerts** screen (**XDR Threat Investigation → Workbench**) displays all the standalone alerts triggered by detection models.

The following table outlines the actions available on the **Alert View** screen.

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
<td><p>Investigate an alert</p></td>
<td><p><a href="trend-vision-one-investigating-alert">Understand the extent and severity of any alert</a> to further decide response actions</p></td>
</tr>
<tr>
<td><p>Open a new case</p></td>
<td><p>Locate a Workbench alert and click <strong>Open new case</strong> to create a new case to handle the alert.</p>


:::warning[Important]

<p><a href="trend-vision-one-case-management">Opening a case</a> for standalone alerts disables the Workbench alert note functionality and transfers all related Workbench notes to the case.</p>
<p>You can only add new notes can directly to the case.</p>


:::

</td>
</tr>
<tr>
<td><p>View alert details</p></td>
<td><p>Click the ID of an alert to <a href="trend-vision-one-alert-details">view the summary, highlights and observable graph</a> of the alert.</p></td>
</tr>
<tr>
<td><p>Filter alert data</p></td>
<td><p>Use the search box and the dropdown lists to filter alert data.</p>
<ul>
<li><p><strong>Status</strong>: The current status of the alert or investigation triggered in <strong>Workbench</strong></p>
<ul>
<li><p><img src="./images/Workbench_status_new=GUID-ECE0863A-AFD9-43A7-9245-9ECD4E1D18AB=1=en-us=Low.webp" /> <strong>Open</strong>: The alert is new and not currently under investigation</p></li>
<li><p><img src="./images/Workbench_status_in_progress=GUID-E3AF045A-35FC-489C-A753-DE2960F7D022=1=en-us=Low.webp" /> <strong>In progress</strong>: The alert is under investigation.</p></li>
<li><p><img src="./images/Workbench_status_closed=GUID-25658551-3D98-49BC-AE83-48B6710C2065=1=en-us=Low.webp" /> <strong>Closed</strong>: The alert investigation is complete.</p></li>
</ul></li>
<li><p><strong>Created</strong>: The time when Trend Vision One generated the alert</p></li>
<li><p><strong>Model name</strong>: The detection model that triggered the alert</p></li>
<li><p><strong>Model type</strong>: Whether the detection model that triggered the alert is a custom model.</p></li>
<li><p><strong>Data source / processor</strong>: The product that sent the alert data to <strong>Workbench</strong></p></li>
<li><p><strong>Findings</strong>: The findings of the alert investigation.</p>
<p>Available values:</p>
<ul>
<li><p><strong>True positive</strong>: The investigation confirmed the occurrence of threats or malicious activities.</p></li>
<li><p><strong>False positive</strong>: No malicious activity found.</p></li>
<li><p><strong>Benign true positive</strong>: The investigation confirmed the presence of a genuine threat that poses no risk to the organization.</p>
<p>Benign true positives are the result of penetration tests or other legitimate activities in your environment.</p></li>
<li><p><strong>Noteworthy</strong>: Trend Vision One detected unusual activity that requires more investigation.</p></li>
<li><p><strong>-</strong>: The investigation has no findings.</p></li>
</ul></li>
<li><p><strong>Owners</strong>: Whether the alert has assigned owners.</p></li>
<li><p><strong>Case status</strong>: Whether you opened a case in Case Management to investigate the alert.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Change the view</p></td>
<td><p>Select an option from the <strong>View</strong> menu:</p>
<ul>
<li><p><strong>All</strong>: Shows all the alerts that match the filter criteria</p></li>
<li><p><strong>Group by</strong></p>
<ul>
<li><p><strong>Model</strong>: Groups the alerts by the detection model name</p></li>
<li><p><strong>Endpoint</strong>: Groups the alerts by the endpoint name</p></li>
</ul>


:::tip

<p>Click the right arrow (<img src="./images/Workbench_right_arrow=GUID-086A3484-09C5-4182-8C88-8B5D59C8E61F=1=en-us=Low.webp" />) of each row to expand the alerts grouped by a specific model or endpoint name.</p>


:::

</li>
</ul></td>
</tr>
<tr>
<td><p>Change the alert status</p></td>
<td><p>Select one or more alerts and click <strong>Change Status</strong> to update the progress of alerts or investigations.</p></td>
</tr>
<tr>
<td><p>Change alert findings</p></td>
<td><p>Select one or more alerts and click <strong>Change Findings</strong> to update the findings of the case.</p></td>
</tr>
<tr>
<td><p>Assign owner</p></td>
<td><p>Select one or more alerts and click <strong>Assign Owner</strong> to <a href="trend-vision-one-assigning-alerts">assign accounts within your organization to the alerts</a>.</p></td>
</tr>
<tr>
<td><p>Move alerts across Workbench insights</p></td>
<td><p>Select one or more alerts and select any of the following options:</p>
<ul>
<li><p><strong>Associate with insight</strong>: Moves the alerts to the specified Workbench insight.</p></li>
<li><p><strong>Remove from insight</strong>: Removes alerts from their current Workbench insights.</p></li>
</ul>


:::warning[Important]

<ul>
<li>Workbench no longer attempts to correlate the alerts you move with any new alerts.</li>
<li><p>Alerts can only belong to one Workbench insight.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td><p>See Automated Response Playbooks</p></td>
<td><p>Click <strong>Automated Response Playbooks</strong> to display the <a href="trend-vision-one-create-automated-response-playbooks">Automated Response playbooks</a> available in the <a href="trend-vision-one-security-playbooks">Security Playbooks</a> app</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Alert details](alert-details.md "Workbench provides detailed alert information for more effective investigations.")
- [Investigate an alert](investigating-alert.md "After a detection model triggers an alert, you can begin an in-depth investigation by drilling into the alert details.")
- [Add an exception from the context menu](adding-exception-context-menu-2.md "During alert investigation, you can exclude objects from future detections.")
- [Assign owners to Workbench alerts](assigning-alerts.md "Assign owners to your Workbench alerts so that your security team can track changes and receive notifications.")
