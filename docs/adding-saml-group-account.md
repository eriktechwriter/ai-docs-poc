---
slug: trend-vision-one-adding-saml-group-account
title: Adding a SAML Group Account
---

Invite multiple users in an assigned distribution list to sign in to the Trend Vision One console using your corporate identity provider (IdP) solution.

### Procedure {#procedure}

1.  Go to **Administration → User Accounts**.

2.  Click **Add User Account**.

3.  Select **SAML Group**.

4.  Enter the group distribution email address for the **Account**.

5.  Enter a name for the SAML Group Account.

6.  Select a **Role**.

    To create a custom user role, click **Create a custom role in User Roles**.

    :::note
    Creating a custom role leaves the current screen and discards all changes made in the screen.
    :::

7.  Click **Add**.

    :::warning[Important]
    Adding a SAML Group Account requires synchronizing the group's data with Microsoft Entra ID. Before adding a SAML Group Account, [configure Microsoft Entra ID](configuring-saml-ad.md), grant the group permission to read directory data, and wait for data synchronization to complete. For more information, see [Microsoft Entra ID integration](integration-aad-third-party.md).
    :::

8.  Make sure that group users verify their email addresses.

    :::note
    - Users must verify their email addresses to be able to sign in to Trend Vision One.

    - The verification link expires after 24 hours. If the verification link expires, any account with the **Configure account settings** permission can resend the verification email.

    - If one or more of your domains have been verified using [Domain Verification](domain-verification.md), all SAML users or user group members under a verified domain can be added directly without the need to verify email addresses.
    :::

9.  (Optional) When editing an account, enable or disable the account by clicking the **Status** toggle.
