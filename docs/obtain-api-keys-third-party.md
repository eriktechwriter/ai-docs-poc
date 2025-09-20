---
slug: obtain-api-keys-third-party
title: Obtaining API keys for third-party auditors
---

Authentication tokens (API keys) allow third parties to audit your Trend Vision One environment through authorized accounts.

:::warning[Important]
- You must access the Trend Vision One console using an account with the *Master Administrator* role. If you require a new authentication token but do not have the necessary permissions to access the console, contact your administrator.
:::

### Procedure {#procedure}

1.  Add a custom role for the third party auditor.

    1.  Go to **Administration → User Roles**.

    2.  Add a custom user role by clicking **+ Add Role**.

    3.  On the **Custom Role Setting** panel, on the **General** tab, specify the role name and description.

    4.  On the **Permissions** tab, under **Report Management** select the permission **Third-party auditing (API only)**.

    5.  Click **Submit**.

2.  Add an account for the third-party auditor.

    1.  Click **+ Add Account**.

    2.  Specify an email address for the account.

    3.  Select an **Account type**.

    4.  Under **Role:** select the custom user role you added in Step 1.

    5.  Under **Access level:** select **APIs only**.

    6.  Specify a given name, surname, and description for the account.

    7.  Click **Add**.

3.  Generate an authentication token (API key) for the third-party auditor.

    1.  Go to **Administration → User Accounts**.

    2.  Click the account you added in Step 2.

    3.  On the **Account Details** panel, click **Generate new authentication token** and follow the instructions to generate an authentication token.

        :::note
        - If there is a previously generated authentication token, delete the token before generating a new one.

        - After you save and close the dialog, the authentication token is hidden and cannot be retrieved.

        - Trend Vision One does not automatically send the authentication token to the user. You must provide the token to the user manually.

        - You can view the expiration date in the **Account Details** panel.
        :::

    4.  Close the panel.

    5.  Provide the authentication token to the third-party auditor.
