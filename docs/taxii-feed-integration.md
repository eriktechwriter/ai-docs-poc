---
slug: trend-vision-one-taxii-feed-integration
title: TAXII feed integration
---

You can add or edit a TAXII feed you want to subscribe to.

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Third-Party Integration**.

2.  In the **Integration** column, click **TAXII Feeds**.

    The **TAXII Feeds** screen appears.

3.  Add or edit a TAXII feed.

    - To add a feed, click **Add**.

    - To edit a feed, click the feed name.

4.  In the **General** section, complete the following settings:

    1.  Select the TAXII server version for this feed.

        :::note
        TAXII 2.0 and 2.1 are supported. The TAXII server version cannot be modified once the feed has been added.
        :::

    2.  Type the discovery URL for this TAXII feed.

    3.  (Optional) Select **Use CA certificate** if the server uses it, and then click **Select** to locate the CA certificate file.

    4.  (Optional) Select **Specify authentication credentials** if the server requires it, and then type the user name and password used for authentication.

    5.  (Optional) Select **Server requires client authentication** if the server requires it, and then click **Select** to locate the client certificate file.

    6.  (Optional) Type the client certificate passphrase.

5.  In the **Collections** section, complete the following settings:

    1.  Click **Discover** to find and select one or more available collections.

    2.  For each selected collection, click the toggle to enable or disable the **Extract and block suspicious objects** option.

        If you enable the option, click ![](/images/edit_icon=e867c8bf-3c64-4b15-95f5-bf7a76d585ef.webp) and select one or more of the following suspicious object types to extract from the TAXII feed collections and add to the Suspicious Object List:

        - Domain

        - File SHA-1

        - File SHA-256

        - IP address

        - Sender address

        - URL

        By default, these suspicious objects are considered as high-risk objects that expire in 30 days. The connected products receive the new object information from Trend Vision One during the next synchronization, and will take the "Block/Quarantine" action after detecting those objects.

        :::note
        Only "indicator" type STIX objects that are not labeled as "anomalous-activity", "anonymization", "benign", "compromised", or "unknown", and that are not revoked will be added to the Suspicious Objects List.
        :::

    3.  For each selected collection, click the toggle to enable or disable the **Run an auto sweep** option.

        Enabling this option initiates a one-time sweeping task that runs right after successful subscription to search your historical data for any indicators extracted from the current collection. Only "report" type STIX objects are supported for sweeping.

6.  In the **Polling criteria** section, complete the following settings:

    1.  Select the frequency at which the TAXII feed is polled for information.

    2.  Select how far in the past you want to begin polling information from.

7.  Click **Save**.

    The TAXII feed appears on the **TAXII Feeds** screen and will be processed to produce custom intelligence reports. To further check the reports generated from your feed subscriptions, go to **Threat Intelligence → Intelligence Reports** and click the **Custom** tab.
