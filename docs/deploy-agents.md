---
slug: trend-vision-one-deploy-agents
title: Deploy Agents
---

After setting up your network environment, managing your endpoint groups, configuring proxies and configuring your default policies, you can begin deploying agents to more endpoints in your network. Review the agent configurations and ensure you install the correct agent package on your endpoints to maximize your protection.

Before deploying agents, make sure that you configure the following:

- [Agent installer proxy settings](agent-installer-proxy-settings.md)

- [Runtime proxy settings](runtime-proxy-settings.md)

- [Endpoint security policies](sensor-settings-policies.md)

- Version control policies

After deploying agents, ensure continued support by following the [agent support policy](extended-support-for-agents.md) for the type of agent installed.

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 42%" />
<col style="width: 27%" />
<col style="width: 19%" />
</colgroup>
<thead>
<tr>
<th><p>Agent configuration</p></th>
<th><p>Description</p></th>
<th><p>Supported operating systems</p></th>
<th><p>Agent package name</p></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3"><p>Endpoint Sensor</p></td>
<td rowspan="3"><p>Provides the detection and response features necessary to receive comprehensive Workbench alerts and XDR data correlation</p>
<p><a href="trend-vision-one-endpoint-sensor-agent-deployment">Endpoint Sensor Agent Deployment</a></p></td>
<td><ul>
<li><p>Windows: All currently supported versions based on <a href="https://learn.microsoft.com/en-us/lifecycle/products/">Microsoft's Lifecycle Policy</a>, including older versions supported through Microsoft's <a href="https://learn.microsoft.com/en-us/lifecycle/faq/extended-security-updates">Extended Security Update (ESU) program</a></p>
<ul>
<li><p>Trend Micro continues supporting older Windows versions for one year after official total end-of-support</p></li>
</ul></li>
</ul></td>
<td><p>EndpointBasecamp.exe</p></td>
</tr>
<tr>
<td><ul>
<li><p>macOS: Current version plus the <a href="https://support.apple.com/en-us/HT201260">last five version releases</a></p></li>
</ul></td>
<td><p>endpoint_basecamp.pkg</p></td>
</tr>
<tr>
<td><ul>
<li><p>Linux: All current vendor-supported versions</p>
<ul>
<li><p>Trend Micro continues supporting older Linux versions for one year after official vendor end-of-support</p></li>
</ul></li>
</ul></td>
<td><p>tmxbc</p></td>
</tr>
</tbody>
</table>

For deploying to VDI environments, see [Creating a golden image with the agent software](create-golden-agent-image.md).

For deploying using Microsoft central management tools, see [Deploying Agents with a Software Management System](deploy-agents-manage-system.md).

**Related information**

- [Endpoint Sensor Agent Deployment](endpoint-sensor-agent-deployment.md)
- [Using the Deployment Script](using-endpoint-deployment-script.md "Use a deployment script to download and install the agent on your endpoints.")
- [Deployment using a golden image](deployment-using-golden-image.md "Review information about deploying endpoint agents and sensors using system templates such as a golden image.")
- [Deploying Agents with a Software Management System](deploy-agents-manage-system.md "Use a software management system such as Microsoft Intune to deploy the agent installer to your managed endpoints.")
