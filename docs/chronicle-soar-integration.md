---
slug: chronicle-soar-integration
title: Chronicle SOAR (Siemplify) integration
---

Set up the Chronicle SOAR (formerly Siemplify) integration to enable Chronicle to enrich entities, execute custom scripts, isolate endpoints, and update Workbench alerts in the Trend Vision One platform.

### Procedure {#procedure}

1.  In the Trend Vision One console, obtain the endpoint URL and authentication token.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  Click **Chronicle SOAR (Siemplify)**.

    3.  Click ![](/images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp) to copy the **Endpoint URL**.

    4.  Click **Generate** and copy the **Authentication token**.

2.  Download and install the *Trend Vision One* integration from Google Cloud Marketplace.

    1.  Go to [Google Cloud Marketplace](https://console.cloud.google.com/marketplace?pli=1).

    2.  Search for and download *Trend Vision One*.

    3.  Install the integration.

3.  Configure the integration in a new instance in Chronicle SOAR.

    1.  In the Chronicle SOAR console, go to **Response → Integrations Setup**.

    2.  In the **Environments** list, select the environment in which to configure the integration.

    3.  Click **Create a new instance**.

    4.  Select the *Trend Vision One* integration and click **Save**.

    5.  In the **Trend Vision One - Configure Instance** window, configure the required parameters for the instance.

        You can click the **Use SSL** checkbox to verify the connection between the SSL certificate and the server.

    6.  Click **Save**.

        Chronicle SOAR begins accessing data from Trend Vision One. Chronicle SOAR can only access data generated after connecting to Trend Vision One. You might need to allow some time before new data or actions start to appear.
