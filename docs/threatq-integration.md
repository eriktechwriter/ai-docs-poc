---
slug: threatq-integration
title: ThreatQ integration
---

Set up the ThreatQ integration to allow ThreatQuotient to automatically send IoCs to Trend Vision One and add objects to the Suspicious Object List and the Exception List.

### Procedure {#procedure}

1.  In the Trend Vision One console, obtain the endpoint URL and authentication token.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  Click **ThreatQ**.

    3.  Click ![](/images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp) to copy the **Endpoint URL**.

    4.  Click **Generate** and copy the **Authentication token**.

2.  Download and install the Trend Vision One action bundle from [ThreatQ Marketplace](https://marketplace.threatq.com/details/trend-micro-vision-one-action-bundle).

3.  Use the endpoint URL and authentication token to configure the integration on the ThreatQ platform.

    :::note
    For more information on configuring the integration, sign in to ThreatQuotient and see the [integration documentation](https://helpcenter.threatq.com/Integration_Documentation/actions/Trend_Micro_Vision_One_Action_Bundle.htm).
    :::

    ThreatQuotient begins sending objects to Trend Vision One. ThreatQuotient can only send items collected after connecting to Trend Vision One. You might need to allow some time before new objects start to appear.
