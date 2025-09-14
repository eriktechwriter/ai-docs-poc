---
slug: trend-vision-one-d3-security-integration
title: D3 Security integration
---

Configure the integration to allow D3 Security to retrieve security events from Trend Vision One, enrich Workbench alerts, and automate response actions.

### Procedure {#procedure}

1.  In the Trend Vision One console, obtain the endpoint URL and authentication token.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  Click **D3 Security**.

    3.  Click ![](/images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp) to copy the **Endpoint URL**.

    4.  Click **Generate** and copy the **Authentication token**.

2.  Configure the integration on the D3 Security platform.

    For more information, see the [integration demo video](https://youtu.be/5YBTkofvA4k) or [D3 Security documentation](https://docs.d3security.com/integration-docs/integration-docs/trend-micro-vision-one).

    1.  Sign in to the D3 Security console.

    2.  Go to the **Configuration** tab.

    3.  Search for and select the *Trend Micro Vision One* integration.

    4.  Click **+ Connection**

        The **New Connection** window appears.

    5.  Specify a name, site, and recipient site for the connection.

    6.  (Optional) Specify an agent name and description for the connection.

    7.  Select the **Active** checkbox.

    8.  Paste the endpoint URL and authentication token obtained from the Trend Vision One console into the **Server URL (domain level)** and **Authentication Token** fields, respectively.

    9.  Specify an **API Version**, or accept the default of *v2.0*.

    10. (Optional) Select the **Connection Health Check** checkbox and configure the related settings to schedule a health check.

    11. (Optional) Select a password vault connection to enable using your password vault.

    12. Click **Test Connection** to verify the integration settings.

        If the connect test succeeds, the **Test Connection Passed** alert window appears.

    13. Click **+ Add**.

        D3 Security begins collecting security event data from Trend Vision One. D3 Security can only access data generated after connecting to Trend Vision One. You might need to allow some time before new data or actions start to appear.
