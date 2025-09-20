---
slug: netskope-cte-integration
title: Netskope CTE integration
---

Configure the integration to enable sharing of information about suspicious objects (IoC) between Netskope Cloud Threat Exchange (CTE) and Trend Vision One.

### Procedure {#procedure}

1.  In the Trend Vision One console, obtain the authentication token.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  Click **Netskope CTE**.

    3.  Copy and save the **Authentication token**.

        - If no authentication token exists, click **Generate** and copy the new token. You can specify the expiration time in **Administration → API Keys**.

        - If the existing authentication token is expired, click **Revoke**, then generate and copy a new token.

2.  Download and configure the Trend Vision One integration.

    For more information, see the [integration demo video](https://youtu.be/EOxAFYuNerU) or [Netskope documentation](https://docs.netskope.com/en/netskope-help/integrations-439794/netskope-cloud-exchange/threat-exchange-module/configure-3rd-party-threat-exchange-plugins/trend-micro-vision-one-plugin-for-threat-exchange/).

    1.  In the Netskope console, go to **Plugins**.

    2.  Search for and select *Trend Micro v1.0.0*.

    3.  Under **Basic Information**, enter a **Configuration Name** and a **Sync Interval** and unit of time.

        Use the default settings for **Aging Criteria** and **Override Reputation**.

    4.  Click **Next**.

    5.  Under **Configuration Parameters**, select your region and paste the **Authentication Token** obtained from the Trend Vision One console.

        Use the default settings for **Enabling Polling** and **Initial Range (in days)**.

    6.  Click **Save**.

3.  Configure sharing of information between Netskope CTE and Trend Vision One.

    1.  Go to **Sharing**.

    2.  Click **Add Sharing Configuration**.

        The **Create Sharing Configuration** window appears.

    3.  Configure the following settings.

        <table>
        <colgroup>
        <col style="width: 25%" />
        <col style="width: 75%" />
        </colgroup>
        <thead>
        <tr>
        <th><p>Setting</p></th>
        <th><p>Description</p></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><p><strong>Source Configuration</strong></p></td>
        <td><p>Select <em>Netskope CTE</em>.</p></td>
        </tr>
        <tr>
        <td><p><strong>Business Rule</strong></p></td>
        <td><p>Select a previously defined business rule.</p>
        <p>If no valid Business Rule exists, go to <strong>Business Rules</strong> and create a rule.</p></td>
        </tr>
        <tr>
        <td><p><strong>Destination Configuration</strong></p></td>
        <td><p>Select <em>Trend Micro</em>.</p></td>
        </tr>
        <tr>
        <td><p><strong>Target</strong></p></td>
        <td><p>Select <em>Add to Suspicious Object List</em>.</p></td>
        </tr>
        <tr>
        <td><p><strong>Description</strong></p></td>
        <td><p>Enter a description of the configuration.</p></td>
        </tr>
        </tbody>
        </table>

    4.  Click **Save**.

    5.  Click **Sync**.

        The **Share existing IoCs** window appears.

    6.  Specify the **Time period (in days)**, then click **Fetch**.

    7.  Click **Sync**.

        Netskope and Trend Vision One begin sharing data on suspicious objects. Netskope and Trend Vision One can only collect data generated after configuring the integration. You might need to allow some time before new data starts to appear.
