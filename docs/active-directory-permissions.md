---
slug: trend-vision-one-active-directory-permissions
title: Active Directory permissions
---

Grant sufficient permissions in Active Directory to enable user access control in Trend Vision One.

### Permission Scope {#permission-scope}

The following table outlines the permission scope options available when [configuring the Active Directory (on-premises) connector](adfs-user-access-control.md) in Third-Party Integration.

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Permission Scope</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>Read</strong></p></td>
<td><p>Allows you to sync Active Directory data, such as user lists and group memberships.</p>


:::warning[Important]

<p>To use this permission scope, ensure you configure the Active Directory server connection using an Active Directory account with at least domain user permissions.</p>


:::

</td>
</tr>
<tr>
<td><p><strong>Read &amp; Write</strong></p></td>
<td><p>Allows you to:</p>
<ul>
<li><p>Sync Active Directory data.</p></li>
<li><p>Perform user access control response actions, such as disabling user accounts and forcing password reset.</p></li>
</ul>


:::warning[Important]

<p>To use this permission scope, ensure you configure the Active Directory server connection using an Active Directory account with sufficient read and write permissions</p>


:::

</td>
</tr>
</tbody>
</table>

### Granting the Necessary Permissions to a Service Account {#granting-the-necessary-permissions-to-a-service-account}

To enable user access control [response actions](response-actions-intro.md) on connected Active Directory accounts, you must [configure the Active Directory server connection](adfs-user-access-control.md) using a service account with sufficient permissions. You can grant the necessary permissions using one of the following three options.

- Option 1: Assign the service account to an Active Directory security group with sufficient permissions. The following groups have sufficient permissions:

  - Administrators

  - Domain Admins

  - Enterprise Admins

  - Account Operators

    :::tip
    Trend Micro does not recommend assigning the service account to the Account Operators group. Account Operators cannot manage users or groups such as *Administrators* or the *Server Operators* group. To prevent incorrect permissions settings for critical accounts and resources, keep the Account Operators group membership empty and avoid using the group for delegated administration.

    For more information, see [Microsoft documentation](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups).
    :::

- Option 2: Delegate the following Active Directory common task to the service account:

  - **Create, delete, and manage user accounts**

- Option 3: Configure the following permission settings in **Advanced Security Settings**:

  :::warning[Important]
  Trend Micro does not recommend this option because it may become invalid unexpectedly as new features are added to Trend Vision One.
  :::

  <table>
  <colgroup>
  <col style="width: 25%" />
  <col style="width: 75%" />
  </colgroup>
  <thead>
  <tr>
  <th><p>Setting</p></th>
  <th><p>Value</p></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><p>Principal</p></td>
  <td><p>Specify the service account used in Trend Vision One.</p></td>
  </tr>
  <tr>
  <td><p>Type</p></td>
  <td><p>Allow</p></td>
  </tr>
  <tr>
  <td><p>Applies to</p></td>
  <td><p>Descendant User objects</p></td>
  </tr>
  <tr>
  <td><p>Permissions</p></td>
  <td><p>Reset password</p></td>
  </tr>
  <tr>
  <td><p>Properties</p></td>
  <td><ul>
  <li>Read <code>pwdLastSet</code></li>
  <li>Write <code>pwdLastSet</code></li>
  <li>Read <code>userAccountControl</code></li>
  <li>Write <code>userAccountControl</code></li>
  </ul></td>
  </tr>
  </tbody>
  </table>
