---
slug: api-keys-third-party-apps
title: Obtaining API keys for third-party apps
---

API keys allow third-party applications to access your Trend Vision One environment through authorized accounts.

To ensure that only authorized applications can gain access to your Trend Vision One data, you must create a user account specifically configured to allow API usage.

For a reference of the APIs available for Trend Vision One, see <https://automation.trendmicro.com/xdr/home>.

:::warning[Important]
- You must access the Trend Vision One console using an account with the *Master Administrator* role. If you require a new authentication token but do not have the necessary permissions to access the console, contact your administrator.

- The user role requires the necessary permissions to connect specific APIs. For a list of the necessary permissions, see <https://automation.trendmicro.com/xdr/Guides/Authentication>.
:::

### Procedure {#procedure}

1.  Access the Trend Vision One console using an account with the *Master Administrator* role and go to **Workflow and Automation → Third-Party Integration**.

2.  Click the third-party application or service that you want to access.

3.  Generate a new **Authentication token**.

    1.  Click **Generate** next to Authentication token.

    2.  Enter an expiration date, and then click **Add**.

    3.  Click **Copy and Save**.

    :::note
    - After you save and close the dialog, the authentication token is hidden and cannot be retrieved.

    - Trend Vision One does not automatically send the authentication token to the user. You must provide the token to the user manually.

    - Authentication tokens expire one year after generating. You can view the expiration date in the **Account Details** panel.

    - This new API key is shown on the API Keys app page.
    :::

4.  Click **Save**.

5.  Apply the authentication token in your third-party or in-house application.
