---
slug: trend-vision-one-attackiq-bas-integration
title: AttackIQ BAS integration
---

Configure the integration to allow AttackIQ Breach and Attack Simulation (BAS) to pull events from Trend Vision One to validate simulated attacks and generate reports.

### Procedure {#procedure}

1.  In the Trend Vision One console, obtain the endpoint URL and authentication token.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  Click **AttackIQ BAS**.

    3.  Click ![](/images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp) to copy and save the **Endpoint URL**.

    4.  Copy and save the **Authentication token**.

        - If no authentication token exists, click **Generate** and copy the new token. You can specify the expiration time in **Administration → API Keys**.

        - If the existing authentication token is expired, click **Revoke**, then generate and copy a new token.

2.  In the AttackIQ console, download and install the Trend Vision One integration.

3.  Using the endpoint URL and authentication token obtained from the Trend Vision One console, configure the integration in the AttackIQ console.

    For more information, see [AttackIQ](https://www.attackiq.com).

    AttackIQ begins collecting data from Trend Vision One. AttackIQ can only collect data generated after connecting to Trend Vision One. You might need to allow some time before new data starts to appear.
