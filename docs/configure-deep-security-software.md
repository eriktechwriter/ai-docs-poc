---
slug: trend-vision-one-configure-deep-security-software
title: Configuring Deep Security Software
---

To begin receiving the security events from your Deep Security software, you must first enroll your Deep Security software and configure specific product settings.

:::warning[Important]
The connection process only transfers information related to the product instance and base agents, but not existing XDR Endpoint Sensors. Contact your support representative to find out how to move Endpoint Sensor agents and any limitations that might impact your network.

Trend Micro recommends transferring all product and base agent information before contacting support to ensure that XDR Endpoint Sensor agents can be properly associated with endpoints.
:::

### Procedure {#procedure}

1.  Apply the latest software patches to Deep Security Manager.

2.  Copy the enrollment token from the Trend Vision One console.

    1.  On the Trend Vision One console, go to **Service Management → Product Instance**.

    2.  Click **Add Existing Product**.

    3.  Select **Trend Micro Deep Security**.

    4.  Click the **Click to generate the enrollment token** link.

    5.  Click the ![](/images/copy-icon-white=GUID-4dd3be76-c23d-48ed-8bbe-ae27229acb0e.webp) icon to copy and retain the enrollment token.

    6.  Click **Save**.

    7.  In the confirmation window that appears, click **Connect and Transfer**.

3.  Paste the enrollment token to the Deep Security software.

    1.  On the Deep Security software console, go to **Administration → System Settings → Trend Vision One**.

    2.  Under **Registration**, click **Registration enrollment token**.

    3.  In the dialog that appears, paste the enrollment token and click **Register**.

        Your Deep Security software automatically enables **Forward security events to Trend Vision One** and changes the enrollment status to **Registered**.
