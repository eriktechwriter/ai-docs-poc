---
slug: foundation-services-update-impacts
title: Impacts of migrating user accounts from other Trend Micro products
---

Consider the impacts of migrating your local and SAML accounts from other Trend Micro products to Trend Vision One after updating to the Foundation Services release.

The following table outlines considerations you should be aware of before migrating your user accounts from Trend Cloud One - Endpoint & Workload Security, Trend Micro Apex One as a Service, Trend Micro Cloud App Security, and Trend Micro Email Security.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Updated product</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"><p>General considerations for all products</p></td>
<td><p>All user accounts migrated to Trend Vision One are assigned custom user roles with most of the same permissions and asset visibility scope as before migration.</p>


:::warning[Important]

<p>Role-based access control and license-related permissions are not carried over to Trend Vision One to avoid privilege escalation.</p>


:::


<p>For more information, see <a href="trend-vision-one-user-roles-foundation-services">User Roles (Foundation Services release)</a>.</p></td>
</tr>
<tr>
<td><p>If you need to migrate SAML Accounts and SAML Group Accounts from your other Trend Micro products to Trend Vision One, update to the Foundation Services release and configure the required identity providers in <strong>Identity Providers</strong> before migrating users.</p>
<p>SAML users with unverified email domains are required to verify their email addresses and update their accounts before signing in to Trend Vision One.</p></td>
</tr>
<tr>
<td rowspan="2"><p>Migrating Trend Micro Apex One as a Service user accounts to Trend Vision One <strong>Endpoint Security</strong></p></td>
<td><p>After updating to <strong>Endpoint Security</strong>, local account users must sign in to the Trend Micro Apex One as a Service console and update their sign-in email address and password before signing in to Trend Vision One.</p>


:::note

<p>If the email address associated with a Trend Vision One local account was previously registered with a Trend Cloud One account, the accounts and sign-in credentials merge. The user can sign in to Trend Vision One with the same credentials used to sign in to Trend Cloud One.</p>


:::

</td>
</tr>
<tr>
<td>

:::warning[Important]

<p>SAML Accounts and SAML Group Accounts without valid email addresses cannot be migrated to Trend Vision One.</p>


:::


<p>The membership of Trend Micro Apex One as a Service SAML Group Accounts remains exactly the same after migrating to Trend Vision One, and cannot be updated. If you need to update group membership after migration, you must create new SAML Group Accounts in <strong>User Accounts</strong>.</p></td>
</tr>
<tr>
<td><p>Updating Trend Micro Cloud App Security user accounts to Trend Vision One <strong>Email and Collaboration Security</strong></p></td>
<td><p>After updating to <strong>Email and Collaboration Security</strong>, all local account users receive an invitation email and must update their account before signing in to Trend Vision One.</p>
<p>Local account users can also sign in to the Trend Micro Cloud App Security console and follow the instructions to update their user account.</p>


:::note

<p>If a Trend Vision One local account's sign-in email address was previously registered with a Trend Cloud One account, the two accounts merge. The merged account user can sign in to both Trend Vision One and Trend Cloud One with the sign-in credentials previously used for Trend Cloud One.</p>


:::

</td>
</tr>
</tbody>
</table>
