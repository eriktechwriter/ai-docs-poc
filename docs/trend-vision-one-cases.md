---
slug: trend-vision-one-trend-vision-one-cases
title: Trend Vision One cases
---

Open cases in Trend Vision One apps and manage your organization’s cases in **Case Management**.

The **Trend Vision One** section in **Case Management** (**Workflow and Automation → Case Management**) displays the cases opened by your organization's SOC team, IT operations team, or risk manager.

You can open Trend Vision One cases based on incidents, events, and alerts directly within Trend Vision One apps. Apps that currently support opening Trend Vision One cases include:

- Security Playbooks (using the Automated Response Playbook)

- Workbench

:::warning[Important]
Case Management automatically closes Trend Vision One cases that are inactive for 60 days. Learn more.
:::

The following table outlines the options available in **Workflow and Automation → Case Management**.

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
<td><p>Filter case data</p></td>
<td><p>Use the available menus to locate specific cases.</p>
<ul>
<li><p><strong>Status</strong>: The current status of a case.</p>
<p>Available statuses:</p>
<ul>
<li><p>Open (<img src="./images/case_Open=a774979f-2790-4cd1-8161-b5dc82579473.webp" />)</p></li>
<li><p>In progress (<img src="./images/case_InProgress=4a4e6461-7031-48c5-87b7-683b43ff9da4.webp" />)</p></li>
<li><p>Closed (<img src="./images/case_Closed=ba556e15-9f9e-4e7a-9007-12f89a447dd4.webp" />)</p></li>
</ul></li>
<li><p><strong>Findings</strong>: The findings of a case (only available for cases created in Workbench).</p>
<p>Available values:</p>
<ul>
<li><p><strong>True positive</strong>: The investigation confirmed the occurrence of threats or malicious activities.</p></li>
<li><p><strong>False positive</strong>: No malicious activity found.</p></li>
<li><p><strong>Benign true positive</strong>: The investigation confirmed the presence of a genuine threat that poses no risk to the organization.</p>
<p>Benign true positives are the result of penetration tests or other legitimate activities in your environment.</p></li>
<li><p><strong>Noteworthy</strong>: Trend Vision One detected unusual activity that requires more investigation.</p></li>
<li><p><strong>-</strong>: The investigation has no findings.</p></li>
</ul></li>
<li><p><strong>Priority</strong>: The priority the owner assigned to the case.</p>
<p>Available values:</p>
<ul>
<li><p><strong>P0</strong></p></li>
<li><p><strong>P1</strong></p></li>
<li><p><strong>P2</strong></p></li>
<li><p><strong>P3</strong></p></li>
</ul></li>
<li><p><strong>Owners</strong>: The Trend Vision One accounts assigned to the case.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Change the case status</p></td>
<td><p>Select one or more cases and click <strong>Change Status</strong> to update the progress of the case.</p></td>
</tr>
<tr>
<td><p>Change the case findings</p></td>
<td><p>Select one or more cases and click <strong>Change Findings</strong> to update the findings of the case.</p></td>
</tr>
<tr>
<td><p>Change the case priority</p></td>
<td><p>Select one or more cases and click <strong>Change Priority</strong> to update the priority of the case.</p></td>
</tr>
<tr>
<td>Attach files to a case</td>
<td><p>Click a case name to open the case details and click <strong>Attach Files</strong>.</p>
<p>Your organization can upload a maximum of one GB of attachment files across all cases in Case Management.</p></td>
</tr>
<tr>
<td><p>Assign owners</p></td>
<td><p>Select one or more alerts and click <strong>Assign Owners</strong> to assign accounts within your organization to the case.</p>


:::warning[Important]

<p>Assigning owners has the following limitations:</p>
<ul>
<li><p>For IdP-only SAML group users:</p>
<ul>
<li><p>You can only assign users who have signed in and are still cached in Trend Vision One.</p></li>
<li><p><a href="trend-vision-one-user-accounts-foundation-services">User Accounts</a> cannot list all users under the IdP-only SAML group.</p></li>
</ul></li>
<li><p><em>IdP-only SAML groups</em> and <em>IdP-only SAML group users</em> cannot get email notifications.</p></li>
</ul>


:::

</td>
</tr>
<tr>
<td><p>Open a sub case</p></td>
<td><p>Related cases are independent sub cases that give you the flexibility to divide a complex investigation into small sub cases. Related cases supply more information for the main case.</p>
<p>Locate a case, click the options icon (<img src="./images/options=ddb0b67f-0654-4aa5-8bc7-48ec554c5448.webp" />) at the end of the row, and click <strong>Open Related Case</strong>. The new case is automatically linked with the main case.</p></td>
</tr>
<tr>
<td><p>Enable integration with ServiceNow</p></td>
<td><p>Click the settings icon (<img src="./images/gear_icon=fc9a51ad-35af-4fe3-92c6-5e41b2dfc5d9.webp" />) in the upper-right corner and turn on the <a href="trend-vision-one-creating-ticket-profile">integration with ServiceNow</a>.</p>
<p>Integrate with ServiceNow to send Case Management tickets to ServiceNow ITSM to be managed in the ServiceNow portal. Only Workbench cases created from Automated Response Playbooks are supported.</p></td>
</tr>
<tr>
<td><p>Edit additional notifications</p></td>
<td><p>For cases created in Cyber Risk Exposure Management, click <strong>Edit</strong> under the additional notifications information to specify webhooks or email addresses to use when sending notifications about the case. Configure webhooks in <a href="trend-vision-one-managing-webhooks">Notifications</a>.</p></td>
</tr>
</tbody>
</table>

For actions available when opening a case, see

**Related information**

- [Create Trend Vision One Case Management ticket profiles](configure-ticket-profiles.md "Allow Trend Vision One to send tickets to ServiceNow ITSM to be managed in the ServiceNow portal.")
