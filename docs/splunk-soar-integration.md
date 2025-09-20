---
slug: splunk-soar-integration
title: Splunk SOAR integration
---

Configure the Splunk SOAR integration for Trend Vision One to view XDR data directly in Splunk SOAR.

### Procedure {#procedure}

1.  In the Trend Vision One console, obtain the endpoint URL and authentication token.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  Click **Splunk SOAR**.

    3.  Click ![](/images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp) to copy the **Endpoint URL**.

    4.  Click **Generate** and copy the **Authentication token**.

2.  Download and install the *Trend Vision One for Splunk SOAR* connector from Splunkbase.

    1.  Go to [Splunk](https://www.splunk.com) and select **Splunkbase** from the **Resources** drop-down.

    2.  Search for and download the *Trend Vision One for Splunk SOAR* connector.

    3.  Install the connector.

3.  Use the endpoint URL and authentication token to configure the integration in the Splunk console.

    :::note
    For more information on configuring the integration, see [Splunkbase - Trend Vision One for Splunk SOAR](https://splunkbase.splunk.com/app/6569).
    :::

    1.  In the Splunk console, go to **Apps → Trend Vision One for Splunk SOAR**.

    2.  Go to **Configuration → Application Settings**.

    3.  Paste the **Endpoint URL** and **Authentication token** copied from the Trend Vision One console.

    4.  Click **Save**.

        Splunk begins collecting XDR data from Trend Vision One. Splunk can only collect XDR data generated after connecting to Trend Vision One. You might need to allow some time before new XDR data starts to appear.
