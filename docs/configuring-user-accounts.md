---
slug: configuring-user-accounts
title: Configure user accounts
---

Create and manage accounts for authorized users to access the Trend Vision One console. Control or limit which screens and apps each account can access by assigning user roles and access levels.

SAML, single sign-on (SSO) accounts use your corporate account credentials to sign on to the Trend Vision One console as well as other services in Trend Vision One that require user authentication. Create an identity provider before creating a SAML account. [Learn more](identity-providers.md).

For more information on asset visibility scopes and permissions, see [User Roles (Foundation Services release)](user-roles-foundation-services.md).

### Procedure {#procedure}

1.  Go to **Administration → User Accounts**.

2.  Click **Add User Account**:

    - SAML Account

      :::note
      - You must configure an identity provider to create this account type.

      - The **Account** must match the SAML user name.
      :::

      1.  Enter an email address for the **Account**.

      2.  Select a **Role**.

          To create a custom user role, click **Create a custom role in User Roles**. For more information, see [Configure user roles](configuring-user-roles.md).

          :::note
          Creating a new custom role leaves the current screen and discards all changes made on the screen.
          :::

      3.  Click **Add**.

    - SAML Group

      :::note
      You must configure an identity provider to create this account type.
      :::

      1.  Enter a group distribution email for the **Account**.

      2.  Enter a name for the SAML Group Account.

      3.  Select a **Role**.

          To create a custom user role, click **Create a custom role in User Roles**. For more information, see [Configure user roles](configuring-user-roles.md).

          :::note
          Creating a new custom role leaves the current screen and discards all changes made on the screen.

          Microsoft Entra ID SAML groups need permission to read directory data before they can be added. Wait for the data sync to complete before adding a Microsoft Entra ID SAML group. [Learn more about access permissions for Microsoft Entra ID](integration-aad-third-party.md).
          :::

      4.  Click **Add**.

    - IdP-Only SAML Group Account

      1.  Enter a name for the IdP-Only SAML Group Account.

      2.  Select a **Role**.

          To create a custom user role, click **Create a custom role in User Roles**. For more information, see [Configure user roles](configuring-user-roles.md).

          :::note
          Creating a new custom role leaves the current screen and discards all changes made on the screen.
          :::

      3.  Select an IdP in which you want to add groups to access the Trend Vision One console.

      4.  Specify the name of the group to allow users of the group to access Trend Vision One. It maps to the value of the attribute in the SAML assertion you have specified for the **Group attribute** when configuring your IdP in Identity Providers.

      5.  Repeat steps c and d to add more groups in another IdP.

      6.  Click **Add**.

    - Local Account

      1.  Enter an email address for the **Account**.

      2.  Select a **Role**.

          To create a custom user role, click **Create a custom role in User Roles**. For more information, see [Configure user roles](configuring-user-roles.md).

          :::note
          Creating a new custom role leaves the current screen and discards all changes made on the screen.
          :::

      3.  Click **Add**.

3.  (For SAML Accounts, SAML Group Accounts, and Local Accounts) Ensure that users verify their email addresses and local users create a password.

    :::note
    The verification link expires after 24 hours. If the verification link expires, any account with the "Configure account settings" permission can resend the verification email.
    :::

4.  (Optional) When editing an account, enable or disable the account by clicking the **Status** toggle.
