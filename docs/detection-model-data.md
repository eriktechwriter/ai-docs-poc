---
slug: detection-model-data
title: Detection model data
---

Each detection model specializes in discovering a particular type of threat.

The following table outlines the information available for each detection model.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Column</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Severity</p></td>
<td><p>The severity level Trend Vision One assigns to the model depending on the type of event and MITRE information:</p>
<ul>
<li><p><img src="./images/model_severity_critical=GUID-5E6F28D2-EB89-437D-96B7-41EF802ABF2C=1=en-us=Low.webp" /> <strong>Critical</strong>: Exhibits strong evidence of compromise for targeted attacks, Advanced Persistent Threats (APTs), or cybercrime operations</p></li>
<li><p><img src="./images/model_severity_high=GUID-9798A05B-B343-40D3-8E69-5855B30FC1F7=1=en-us=Low.webp" /> <strong>High</strong>: Exhibits highly suspicious indicators associated with targeted attacks, APTs, or cybercrime operations</p></li>
<li><p><img src="./images/model_severity_medium=GUID-0C89A6A7-0CA7-4A54-8151-2E2B221396D1=1=en-us=Low.webp" /> <strong>Medium</strong>: Exhibits suspicious indicators possibly associated with malware infections, policy violations, or cybercrime operations</p></li>
<li><p><img src="./images/model_severity_low=GUID-7B6FE133-F868-4AAE-8494-17D690ABE473=1=en-us=Low.webp" /> <strong>Low</strong>: Exhibits mildly suspicious indicators useful for security monitoring or threat hunting</p></li>
</ul></td>
</tr>
<tr>
<td><p>Model</p></td>
<td><p>The name of the model, defining the type of threat to detect</p></td>
</tr>
<tr>
<td><p>Description</p></td>
<td><p>The description of the model, further explaining the type of threat to detect</p></td>
</tr>
<tr>
<td><p>Applicable products</p></td>
<td><p>The products that can apply the model for alert triggering</p></td>
</tr>
<tr>
<td><p>Last updated</p></td>
<td><p>The date and time Trend Micro last updated the model</p></td>
</tr>
<tr>
<td><p>Status</p></td>
<td><p>Whether Trend Vision One triggers alerts for the model</p></td>
</tr>
</tbody>
</table>

If you enable an alert trigger, Trend Vision One starts to collect activity data from your supported products. To further check the alerts triggered by detection models, go to [Workbench](workbench.md).
