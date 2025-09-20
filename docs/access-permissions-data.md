---
slug: access-permissions-data
title: Overview of access permissions to Microsoft Entra ID data
---

View a list of permissions that must be enabled within Microsoft Entra ID to facilitate integration with Trend Vision One.

<table style="width:99%;">
<colgroup>
<col style="width: 14%" />
<col style="width: 56%" />
<col style="width: 28%" />
</colgroup>
<thead>
<tr>
<th><p>Permission set</p></th>
<th><p>Permissions</p></th>
<th><p>Associated apps</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Read directory data</p></td>
<td><ul>
<li><p>Read directory data (Directory.Read.All)</p></li>
<li><p>Read all groups (Group.Read.All)</p></li>
<li><p>Read group memberships (GroupMember.Read.All)</p></li>
<li><p>Sign in and read user profile (User.Read)</p></li>
</ul></td>
<td><ul>
<li><p>Mobile Security</p></li>
<li><p>Phishing Simulation Assessment</p></li>
<li><p>Zero Trust Secure Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>Read user and device information, cloud app data, and activity data</p></td>
<td><ul>
<li><p>Read directory data (Directory.Read.All)</p></li>
<li><p>Read all users' relevant people lists (People.Read.All)</p></li>
<li><p>Sign in and read user profile (User.Read)</p></li>
<li><p>Read all users' full profiles (User.Read.All)</p></li>
<li><p>Read items in all site collections (Sites.Read.All)</p></li>
<li><p>Read all groups (Group.Read.All)</p></li>
<li><p>Read all audit log data (AuditLog.Read.All)</p></li>
<li><p>Read identity risk event information (IdentityRiskEvent.Read.All)</p></li>
<li><p>Read all usage reports (Reports.Read.All)</p></li>
<li><p>Read your organization's security events (SecurityEvents.Read.All)</p></li>
<li><p>Read activity data for your organization (ActivityFeed.Read)</p></li>
<li><p>Read all user mailbox settings (MailboxSettings.Read)</p></li>
<li><p>Read organization information (Organization.Read.All)</p></li>
<li><p>Read all hidden memberships (Member.Read.Hidden)</p></li>
<li><p>Read threat assessment requests (ThreatAssessment.Read.All)</p></li>
<li><p>Read your organization's policies (Policy.Read.All)</p></li>
<li><p>Read users' authentication methods (UserAuthenticationMethod.Read.All)</p></li>
</ul></td>
<td><ul>
<li><p>Cyber Risk Exposure Management</p></li>
<li><p>Email Asset Inventory</p></li>
<li><p>Identity Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>Read directory data and perform account management actions</p></td>
<td><ul>
<li><p>Read and write all users' full profiles (User.ReadWrite.All)</p></li>
<li><p>Manage all user identities (User.ManageIdentities.All)</p></li>
<li><p>Read and write directory data (Directory.ReadWrite.All)</p></li>
</ul></td>
<td><ul>
<li><p>Cyber Risk Exposure Management</p></li>
<li><p>Identity Security</p></li>
<li><p>Observed Attack Techniques</p></li>
<li><p>Search</p></li>
<li><p>Workbench</p></li>
<li><p>Zero Trust Secure Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>Read protected content and sensitivity label information</p></td>
<td><ul>
<li><p>Read all protected content for this tenant (Content.SuperUser)</p></li>
<li><p>Read all published labels and label policies for an organization (InformationProtectionPolicy.Read.All)</p></li>
<li><p>Read organization information (Organization.Read.All)</p></li>
<li><p>Sign in and read user profile (User.Read)</p></li>
<li><p>Read all unified policies of the tenant (UnifiedPolicy.Tenant.Read?</p></li>
</ul></td>
<td><ul>
<li><p>Zero Trust Secure Access</p></li>
</ul></td>
</tr>
</tbody>
</table>
