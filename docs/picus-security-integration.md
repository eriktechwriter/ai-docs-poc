---
slug: picus-security-integration
title: Picus Security integration
---

Configure the integration to allow Picus Security to pull events from Trend Vision One, as well as to query logs and alerts to analyze and validate simulated attacks.

### Procedure {#procedure}

1.  In the Trend Vision One console, obtain the endpoint URL and authentication token.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  Click **Picus Security**.

    3.  Click ![](/images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp) to copy and save the **Endpoint URL**.

    4.  Copy and save the **Authentication token**.

        - If no authentication token exists, click **Generate** and copy the new token. You can specify the expiration time in **Administration → API Keys**.

        - If the existing authentication token is expired, click **Revoke**, then generate and copy a new token.

2.  Configure the integration in the [Picus Security console](https://app.picussecurity.com/).

    For more information, see the [integration demo video](https://youtu.be/9Rvnco3aOPo).

    1.  Click **Integrations**.

    2.  Find the Trend Micro integration and use the edit icon to select **Edit Configuration**.

    3.  Paste the endpoint URL and authentication token obtained from the Trend Vision One console in the **Login Credentials** section.

    4.  (Optional) Configure your **Communication Preferences**.

    5.  Click **Login**.

    6.  On the **Log Analysis** tab, specify a **Delay Time (Seconds)** and an optional **Early Time (Seconds)** for the query interval.

    7.  (Optional) On the **Alert Analysis (optional)** tab, specify the starting and ending times of the alert analysis interval.

    8.  Click **Submit**.

        Picus Security begins collecting data from Trend Vision One and displaying information in the **Simulations** menu in the Picus console. Picus can only collect data generated after connecting to Trend Vision One. You might need to allow some time before new data starts to appear.
