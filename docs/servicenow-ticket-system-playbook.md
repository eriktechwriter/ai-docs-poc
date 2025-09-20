---
slug: servicenow-ticket-system-playbook
title: ServiceNow ticketing system integration (for Security Playbooks and Case Management)
---

Use the ServiceNow ticketing system integration to sync case data between ServiceNow ITSM and Trend Vision One Security Playbooks and Case Management.

The Trend Vision One for ServiceNow Ticketing System integration allows for two-way sync of case data between ServiceNow ITSM tables and Trend Vision One Security Playbooks and Case Management. Configure ticket profiles to specify how to sync case data when opening a case.

For Case Management, you can choose whether to sync cases from:

- Workbench

To use the integration, you must configure your ServiceNow account to access Trend Vision One case data.

:::note
To learn how to manage Trend Vision One Workbench alerts in ServiceNow, see [ServiceNow ITSM integration (for Workbench)](servicenow-itsm-integration.md).
:::

The following table outlines the available actions in the main screen of the **ServiceNow Ticketing System** integration (**Workflow and Automation → Third-Party Integration → Trend Vision One for ServiceNow Ticketing System**).

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><a href="trend-vision-one-creating-ticket-profile">Create Trend Vision One ticket profiles</a></p></td>
<td><p>Configure profiles to allow Trend Vision One to sync case data to ServiceNow ITSM to be managed in the ServiceNow portal.</p></td>
</tr>
<tr>
<td><p>Obtain the API endpoint URL</p></td>
<td><p>Click <strong>Manage API Key</strong> and copy the endpoint URL.</p>


:::note

<p>This action is only required for the <a href="trend-vision-one-config-case-management-ticket">Trend Vision One Case Management ticket profile</a></p>


:::

</td>
</tr>
<tr>
<td><p>Obtain an authentication token</p></td>
<td><p>Go to <strong>Manage API Key → Generate Token</strong>, specify the API key settings and click <strong>Add</strong>.</p>


:::note

<p>This action is only required for the <a href="trend-vision-one-config-case-management-ticket">Trend Vision One Case Management ticket profile</a></p>


:::

</td>
</tr>
</tbody>
</table>

**Related information**

- [Configure ServiceNow ITSM to enable the Trend Vision One for ServiceNow Ticketing System](config-case-management-ticket.md "Configure ticket profiles to use when synchronizing tickets between ServiceNow ITSM and Trend Vision One apps.")
- [Create Trend Vision One Case Management ticket profiles](creating-ticket-profile.md "Allow Trend Vision One to send tickets to ServiceNow ITSM to be managed in the ServiceNow portal.")
