---
slug: trend-vision-one-about-endpoint-security-policies
title: About endpoint security policies
---

Centralize management of Trend Vision One Endpoint Security agent settings with endpoint security policies.

:::warning[Important]
- Endpoint security policies only support endpoints with the Trend Vision One Endpoint Security agent version October 2024 release or later installed.

- Certain settings require credits to enable.

- The first time you enable endpoint sensor detection and response, your currently deployed Trend Vision One Endpoint Security agent install the new Network Content Inspection Engine. For more information, see [Network Content Inspection Engine](network-content-inspection-engine.md).
:::

Endpoint security policies are a tool you can use to centrally manage endpoint settings for your connected Trend Vision One Endpoint Security agent, including agents with Standard Endpoint Protection and Server & Workload Protection installed. The table below details what settings and features you can configure using an endpoint security policy:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr>
<th><p>Setting</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>Endpoint sensor detection and response</strong></p></td>
<td><p>Sends activity data for state-of-the-art threat detection and alerts (required for advanced XDR detections and Workbench alerts)</p>
<p>The detection and response feature collects endpoint activity data that helps provide alerts and enhanced investigation data whenever a suspected attack occurs. The collected data is also used by Cyber Risk Exposure Management applications to help identify risky endpoint and user behavior, and to identify endpoint vulnerabilities.</p></td>
</tr>
<tr>
<td><p><strong>Monitoring level</strong></p></td>
<td><p>Controls the sensitivity of endpoint sensor detections</p>
<p>Requires enabling <strong>Endpoint sensor detection and response</strong>.</p>
<p>Raising the monitoring level increases the sensitivity of the endpoint sensor, which increases the number of detections and alerts. Higher levels allow for more strict monitoring to help with situations like on-going threat investigations, but might generate a large number of nonessential logs and impact endpoint performance. Some components used by higher monitoring levels are not available on all platforms.</p>
<p>The default setting is <strong>2 - Moderate</strong>. Trend Micro recommends using the default setting to balance more relevant data with minimal impact on your endpoints.</p>


:::warning[Important]

<p>Monitoring level only supports Windows endpoints.</p>


:::

</td>
</tr>
<tr>
<td><p><strong>Deepfake detector</strong></p></td>
<td><p>Analyzes ongoing video calls to determine if they contain synthesized images</p>
<p>Requires enabling <strong>Endpoint sensor detection and response</strong>.</p>


:::warning[Important]

<p>Deepfake detector only supports Windows endpoints.</p>


:::

</td>
</tr>
</tbody>
</table>

Additional settings for Standard Endpoint Protection and Server & Workload Protection can be configured in the Protection Managers. Central management of agent and component versions is coming soon.

The first time you access the **Endpoint Security Policies** screen, the system imports your sensor settings from Endpoint Inventory to create several general policies along with the Default Endpoint Policy. Your endpoints are automatically assigned to the general policies. You can edit, delete, or rename the general policies.

- For customers using the Trend Vision One Foundation Services release, the system creates the following policies.:

  - Standard Endpoint Protection General Policy

  - Server & Workload Protection General Policy

  - Sensor Only General Policy

  - Default Endpoint Policy

- For customers using Trend Vision One Legacy, the system creates the following policies:

  - Endpoint Sensor General Policy

  - Default Endpoint Policy
