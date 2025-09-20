---
slug: create-default-endpoint-policies
title: Configure endpoint proxies and policies
---

Configure your endpoint policies to ensure your deployed agents automatically apply the correct protection and detection features to provide security for your network and connect to Trend Vision One successfully. Trend Micro recommends configuring your proxy and default policies before deploying new agents.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr>
<th><p>Policy type</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Agent installer proxy</p></td>
<td><p>Configure the connection settings for the agent package to use during initial download and installation</p>
<p>Go to <strong>Endpoint Security → Endpoint Inventory</strong>, click the <strong>Global Settings</strong> icon (<img src="./images/eiDefaultGlobalIcon=20230614094040.webp" />). Go to <strong>Agent Installer Proxy</strong> and configure your proxy settings.</p>
<p>For more information, see <a href="trend-vision-one-agent-installer-proxy-settings">Agent Installer Proxy Settings</a>.</p></td>
</tr>
<tr>
<td><p>Runtime proxy policies</p></td>
<td><p>Configure the connection settings for the Trend Vision One Endpoint Security agent to use to communicate with Trend Vision One after deployment</p>
<p>Go to <strong>Endpoint Security → Endpoint Inventory</strong>, click the <strong>Global Settings</strong> icon (<img src="./images/eiDefaultGlobalIcon=20230614094040.webp" />). Go to <strong>Runtime Proxy Settings</strong> and configure your proxy settings.</p>
<p>For more information, see <a href="trend-vision-one-runtime-proxy-settings">Runtime Proxy Settings</a>.</p></td>
</tr>
<tr>
<td><p>Endpoint security policies</p></td>
<td><p>Use policies to manage agent configurations, such as enabling the endpoint detection and response feature</p>
<p>Go to <strong>Endpoint Security → Endpoint Security Configuration → Endpoint Security Policies</strong> to create and manage your policies.</p>
<p>For more information, see <a href="trend-vision-one-sensor-settings-policies">Endpoint Security Policies</a>.</p></td>
</tr>
<tr>
<td><p>Version control policies</p></td>
<td><p>Use policies to manage agent update settings</p>
<p>Go to <strong>Endpoint Security → Endpoint Security Configuration → Version Control Policies</strong> to create and manage your version control policies.</p></td>
</tr>
</tbody>
</table>
