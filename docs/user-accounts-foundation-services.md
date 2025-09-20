---
slug: user-accounts-foundation-services
title: User Accounts (Foundation Services release)
---

Create and manage accounts for authorized users to access the Trend Vision One console.

:::note
Only customers that have updated to the [Foundation Services release](update-foundation-services-release.md) have access to the feature.
:::

User accounts allow you to control access to the Trend Vision One console by managing accounts for authorized users. Control or limit which screens and apps each account can access by assigning User Roles to your accounts.

:::note
Only user accounts with the role permission "Configure account settings" can add, modify, or delete other user accounts.
:::

The following information is relevant for users that have updated to the Foundation Services release of Trend Vision One.

- SAML connections are recreated in Trend Vision One for users that updated from the following:

  - Apex One as a Service

  - Cloud One - Endpoint & Workload Security

- Existing Cloud One SAML users with email address-based identifiers who have logged into Cloud One within the last month can start using Trend Vision One Endpoint Security after verifying their Trend Vision One SAML log in email address.

The following table outlines the actions available in the **User Accounts** screen (**Administration → User Accounts**).

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
<td><p>Add an account</p></td>
<td><p>Click <strong>Add User Account</strong> to create a new user account.</p>
<p>For more information, see <a href="trend-vision-one-configure-vision-accounts">Configuring accounts</a>.</p></td>
</tr>
<tr>
<td><p>Edit an account</p></td>
<td><p>Click an <strong>Account</strong> to modify account details such as role and description.</p>
<p>For more information, see <a href="trend-vision-one-configure-vision-accounts">Configuring accounts</a>.</p></td>
</tr>
<tr>
<td><p>Delete accounts</p></td>
<td><p>Select one or more accounts and click <strong>Delete</strong> to remove the selected accounts.</p></td>
</tr>
<tr>
<td><p>Enable or disable multi-factor authentication (MFA)</p></td>
<td><p>Click <strong>Multi-factor authentication</strong> and click the toggle to enable or disable MFA. Once MFA is enabled and properly configured, a verification code will be needed in the following scenarios:</p>
<ul>
<li><p>Local accounts sign in to Trend Vision One</p></li>
<li><p>All accounts perform specified operations in Trend Vision One</p></li>
</ul>
<p>For more information, see <a href="trend-vision-one-enable-confige-mfa">Enabling and configuring multi-factor authentication</a>.</p></td>
</tr>
<tr>
<td><p>Enable or disable an account</p></td>
<td><p>Click the toggle in the <strong>Status</strong> column to enable or disable the account.</p></td>
</tr>
</tbody>
</table>

The following table outlines the different User Account types.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Account Type</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>SAML Account</p></td>
<td><p>Allows you to invite individual SAML users to sign in to the Trend Vision One console using your corporate identity provider solution.</p></td>
</tr>
<tr>
<td><p>SAML Group Account</p></td>
<td><p>Allows you to invite multiple users in an assigned distribution list to sign in to the Trend Vision One console using your corporate identity provider (IdP) solution.</p>
<p>Adding SAML Group Account users requires group information synchronization with your IdP, and users must verify their email addresses before they can sign in to Trend Vision One.</p></td>
</tr>
<tr>
<td><p>IdP-Only SAML Group Account</p></td>
<td><p>Allows you to add multiple users in an assigned group to sign in to the Trend Vision One console using your corporate identity provider (IdP) solution.</p>
<p>An IdP-Only SAML Group Account is a specialized group account utilized in Trend Vision One that only requires your configured IdP to share the SAML group attribution with Trend Vision One, which only allows users assigned with the group attribution to access the Trend Vision One platform based on the configured group's role settings.</p>
<p>Because the IdP-Only SAML Group Account does not require sharing or synchronizing other data related to the configured user list, Trend Vision One might not have access to individual user information, and cannot send email notifications to users within the IdP-Only SAML Group Account.</p>
<p>For more information, see <a href="trend-vision-one-adding-idp-only-saml-group-account">Adding an IdP-Only SAML Group Account</a>.</p></td>
</tr>
<tr>
<td><p>Local Account</p></td>
<td><p>Allows you to invite users to sign in to the Trend Vision One console with their email address and password.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Primary User Account](primary-user-account.md)
- [Configuring accounts](configure-vision-accounts.md "Create and manage Trend Vision One user accounts to allow authorized users to access the console.")
- [Enabling and configuring multi-factor authentication](enable-confige-mfa.md "Enforce multi-factor authentication (MFA) to enhance account security and prevent attackers from exploiting critical actions for malicious activities.")
