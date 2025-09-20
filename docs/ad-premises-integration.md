---
slug: ad-premises-integration
title: Active Directory (on-premises) integration
---

Synchronize objects and security event information from on-premises Active Directory servers for risk assessments and remediation actions.

This integration supports the following Windows operating systems:

- Windows Server 2022

- Windows Server 2019

- Windows Server 2016

- Windows Server 2012

:::note
The integration also supports AWS Managed Microsoft AD for Data Synchronization and User Access Control. The integration does not support security event forwarding for AWS Managed Microsoft AD.
:::

The following table describes the actions available in the **Active Directory (on-premises)** screen.

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
<td><p>Enable/Disable integration</p></td>
<td><p>Select <strong>Enable Active Directory integration</strong> to turn the integration on or off.</p></td>
</tr>
<tr>
<td><p>Configure data synchronization and user access</p></td>
<td><p><a href="trend-vision-one-adfs-user-access-control">Connect Active Directory servers</a> to enable sharing of data (such as user lists and group memberships) and to allow Trend Vision One to perform <a href="trend-vision-one-response-actions-intro">response actions</a> such as disabling user accounts and forcing password reset.</p></td>
</tr>
<tr>
<td><p>Deploy the forwarding agent</p></td>
<td><p>Download the agent installation package to enable <a href="trend-vision-one-security-event-forwarding">sharing of security event information using a forwarding agent</a>.</p></td>
</tr>
<tr>
<td><p>View connected server status</p></td>
<td><p>View Active Directory server information and last sync time.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Active Directory data usage in associated apps](ad-data-usage-associated-apps.md "Understand how Active Directory data is used in associated apps after integration.")
- [Configuring data synchronization and user access control](adfs-user-access-control.md "Synchronize data from an on-premises Active Directory server through a Service Gateway.")
- [Security event forwarding](security-event-forwarding.md "Enable sharing security event information from an on-premises Active Directory server with Cyber Risk Exposure Management.")
