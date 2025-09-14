---
slug: trend-vision-one-endpoint-inventory-intro-part
title: Endpoint Inventory
---

Manage, locate, and take action on any endpoint in your environment or download the agent installer packages to deploy on more endpoints.

Use the Endpoint Inventory to manage the endpoints in your environment. You can quickly find and take action on endpoints that have issues, view detailed information about endpoints with agents installed, and download new agent packages.

The following table lists the options available in Endpoint Inventory.

<table style="width:75%;">
<colgroup>
<col style="width: 25%" />
<col />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><p>Options</p></th>
<th>Location</th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td style="vertical-align: top"><p>Available Actions</p></td>
<td style="vertical-align: top"><figure>
<img src="./images/endpointInventoryFoundation=20230614092424.webp" />
</figure></td>
<td style="vertical-align: top"><p>Displays all discoverable endpoints that may require attention</p>
<p>Click any status to display a list of the affected endpoints. Click any endpoint to see recommended remediation actions. Endpoint Inventory automatically hides actions that have zero (0) matching endpoints.</p>
<ul>
<li><p><strong>Immediate action required</strong>: An issue occurred on the endpoint that requires user intervention</p></li>
<li><p><strong>Unmanaged endpoints</strong>: The endpoints are discoverable on your network but do not have any available protection or sensor agent program installed</p></li>
<li><p><strong>Sensor disabled</strong>: The endpoints have the Trend Vision One sensor installed but not enabled, either through the sensor or policy settings</p></li>
<li><p><strong>Sensor update recommended</strong>: The endpoint has an older version of the Endpoint Sensor component installed (including Activity Monitoring and Apex One Endpoint Sensor) and should update to the latest Trend Vision One version</p></li>
</ul></td>
</tr>
<tr>
<td style="vertical-align: top"><p>Security Deployment</p></td>
<td style="vertical-align: top"><figure>
<img src="./images/endpointInventorySecurityDeployment=20230614093333.webp" />
</figure></td>
<td style="vertical-align: top"><p>Displays all endpoints that have a protection or sensor agent installed</p>
<p>Click any status to view a list of all related endpoints. Click any endpoint to view detailed information about the endpoint and applied policies.</p>
<ul>
<li><p><strong>All managed endpoints</strong>: All endpoints on your network that have a protection or sensor agent installed</p></li>
<li><p><strong>Sensor only</strong>: All endpoints that only have the Sensor agent installed</p></li>
<li><p><strong>Connected Endpoint Protection</strong>: All endpoints that have protection or sensor agent installed from a connected product.</p></li>
</ul></td>
</tr>
<tr>
<td style="vertical-align: top"><p>Endpoint Management</p></td>
<td style="vertical-align: top"><figure>
<img src="./images/endpointInventoryEndpointManagement=20230614093535.webp" />
</figure></td>
<td style="vertical-align: top"><p>Displays your Protection Managers, Endpoint Group Managers, and all endpoint groups for your business</p>
<ul>
<li><p><strong>Connected Endpoint Protection Management</strong>: Your connected Trend Micro endpoint protection products.</p></li>
</ul>
<p>For more information, see <a href="trend-vision-one-endpoint-management">Endpoint Management</a>.</p>


:::note

<p>Sensor only endpoints are not included in any endpoint groups. Use the <strong>Add filters</strong> (<img src="./images/endpointSecurityFilterIcon=20230614105454.webp" />) button to locate the sensors you want to manage.</p>


:::

</td>
</tr>
<tr>
<td style="vertical-align: top"><p>Endpoint actions</p></td>
<td style="vertical-align: top"><figure>
<img src="./images/endpointInventoryEndpointActions=20230614113030.webp" />
</figure></td>
<td style="vertical-align: top"><p>After selecting an endpoint from the displayed list, you can take the following actions. The actions available may vary depending on your region and if you have chosen to opt-in to certain pre-release features.</p>


:::tip

<p>If you have a large number of connected endpoints, the <strong>select all</strong> option appears after selecting all endpoints on the current page, or at least 100 endpoints.</p>


:::


<ul>
<li><p><strong>Remove Endpoint</strong>: Remove the selected endpoints from Endpoint Inventory</p>
<p>Removing an endpoint does not uninstall the Trend Vision One Endpoint Security agent. If the endpoint reconnects to your Trend Vision One instance, the endpoint is added to the inventory again. To uninstall agents, see <a href="trend-vision-one-uninstalling-agents">Uninstalling Agents</a>.</p>
<p>For more information about removed endpoint behavior, see <a href="trend-vision-one-removed-endpoint-reconnects-faq">What happens when a removed endpoint reconnects to Trend Vision One Endpoint Security?</a>.</p></li>
<li><p><strong>Response</strong> actions: Create response tasks on specific endpoints and follow the task status using the Response Management app</p>
<ul>
<li><p><a href="trend-vision-one-isolate-endpoint-task">Isolate Endpoint</a></p></li>
<li><p><a href="trend-vision-one-run-remote-custom-script-task">Run Remote Custom Script</a></p></li>
<li><p><a href="trend-vision-one-start-remote-shell-session-task">Start Remote Shell Session</a></p></li>
</ul>


:::note

<p>If you isolate an endpoint using the Isolate Endpoint task, you must go to the Response Management app and find the Isolate Endpoint task to <a href="trend-vision-one-restore-connection-task">restore the connection</a>.</p>


:::

</li>
<li><p><strong>Endpoint security policy</strong>: override endpoint policies for the selected endpoints. Enable override to configure endpoint settings for specific endpoints that are different from the endpoint security policy assigned to the endpoint. You can configure the following overrides:</p>
<ul>
<li><p><strong>Endpoint sensor detection and response</strong>: Enable or disable the XDR sensor feature</p>


:::warning[Important]

<p>Enabling this feature disables Activity Monitoring on agents managed by Server &amp; Workload Protection. For more information, see <a href="trend-vision-one-auto-disable-activity-monitoring">Automatic disabling of Activity Monitoring after updating to Server &amp; Workload Protection</a></p>


:::

</li>
<li><p><strong>Monitoring level</strong>: change the monitoring level or enable <strong>hypersensitive mode</strong>.</p></li>
<li><p><strong>Data Detection and Response</strong>: Enable or disable the Data Security module feature</p></li>
<li><p><strong>Advanced risk telemetry</strong>: Analyzes endpoints for potential security posture weaknesses and performs vulnerability assessments for zero-day threats (Not supported on macOS or non-persistent virtual desktops; required for advanced Risk Insight analysis of endpoint and user behaviors)</p></li>
</ul>
<p>For more information about Endpoint security policies, see <a href="trend-vision-one-sensor-settings-policies">Endpoint Security Policies</a>.</p>


:::warning[Important]

<p>The <strong>Endpoint security policy</strong> has replaced <strong>Configure sensor policy</strong> in all regions as of January 15, 2025.</p>


:::

</li>
</ul></td>
</tr>
<tr>
<td style="vertical-align: top"><p>Agent Installer</p></td>
<td style="vertical-align: top"><figure>
<img src="./images/endpointInventoryAgentInstaller=20230614093636.webp" />
</figure></td>
<td style="vertical-align: top"><p>Opens the Agent Installer window, which provides access to the different installer packages</p>
<p>For more deployment options, see <a href="trend-vision-one-deploy-agents">Deploy Agents</a>.</p>
<p><a href="trend-vision-one-endpoint-agent-system-requirements">Endpoint Agent System Requirements</a></p></td>
</tr>
<tr>
<td style="vertical-align: top"><p>Global Settings (<img src="./images/eiDefaultGlobalIcon=20230614094040.webp" />)</p></td>
<td style="vertical-align: top"><figure>
<img src="./images/endpointInventoryDefaultGlobal=20230614093838.webp" />
</figure></td>
<td style="vertical-align: top"><p>Displays the option to configure your global agent settings</p>
<ul>
<li><p><a href="trend-vision-one-global-settings-endpoint-inventory">Global Settings</a>: A collection of sensor and proxy settings that apply to all endpoints in your environment</p></li>
</ul>


:::warning[Important]

<p>General Sensor Settings has been replaced by Endpoint Security Policies and removed in all regions as of January 15, 2025.</p>


:::

</td>
</tr>
<tr>
<td style="vertical-align: top"><p>Additional actions</p></td>
<td style="vertical-align: top"><figure>
<img src="./images/endpointInventoryAdditionalActions=20230614094343.webp" />
</figure></td>
<td style="vertical-align: top"><ul>
<li><p><strong>Add filters</strong> (<img src="./images/endpointSecurityFilterIcon=20230614105454.webp" />): Add filters to help locate endpoints based on criteria such as statuses, policies, operating systems, and more</p></li>
<li><p><strong>Display Guides</strong> (<img src="./images/displayEIGuideIcon=20230614105556.webp" />): Reopens the Getting Started Guide for Endpoint Inventory</p></li>
<li><p><strong>Manage Reports</strong>:</p>
<ul>
<li><p><strong>Export view to CSV</strong>: Exports all endpoints based on the current filters set in the current view</p></li>
<li><p><strong>Endpoint Inventory</strong>: Creates a one-time or recurring report based on endpoint data using the Endpoint Inventory report template</p></li>
</ul></li>
<li><p><strong>Show/Hide Columns</strong> (<img src="./images/columnDisplayIcon=20230614105421.webp" />): Customizes the columns that display in the list</p>
<p>For more information, see <a href="trend-vision-one-endpoint-inventory-table-columns">Endpoint Inventory table columns</a>.</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Related information**

- [Endpoint Management](endpoint-management.md "View and manage endpoint groups within your Protection Managers.")
- [Global Settings](global-settings-endpoint-inventory.md "Configure inactive agent removal, bandwidth throttling, and proxy settings that apply to all your deployed agents.")
- [Endpoint Agent System Requirements](endpoint-agent-system-requirements.md)
- [Endpoint Inventory table columns](endpoint-inventory-table-columns.md "Review the table columns available in Endpoint Inventory.")
- [Updating the agent on virtual desktops](update-agent-virtual-desktops.md "Update the agent program on virtual desktops created using a golden image.")
- [Uninstalling Agents](uninstalling-agents.md "Learn how to remove the Trend Vision One agent and components from your endpoint.")
- [Trend Vision One Endpoint Security Endpoint Inventory FAQ](endpoint-inventory-faq.md "Frequently asked questions about Endpoint Inventory and endpoint agents.")
