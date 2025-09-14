---
slug: trend-vision-one-simulations-endpoint-sensor
title: Running simulations on endpoints manged by connected endpoint protection products
---

Run simulations with Trend Vision One Endpoint Security agents on endpoints managed by connected Trend Micro Apex One as a Service and Trend Cloud One - Endpoint & Workload Security instances.

:::warning[Important]
Simulations only supports running scripts on Windows endpoints.

The following steps detail how to connect Trend Micro Apex One as a Service and Trend Cloud One - Endpoint & Workload Security instances, and run simulations. To run simulations on endpoints with a deployed Trend Vision One Endpoint Security agent with Standard Endpoint Protection or Server & Workload Protection, see [Running simulations with Trend Vision One Endpoint Security agents](running-simulations-endpoints-xdr.md).

To run simulations on a Deep Security Agent without the Trend Vision One Endpoint Security agent, see [Running simulations on Deep Security Agents endpoints with Activity Monitoring](simulations-deep-security-agents.md).
:::

You can use the attack simulation scripts in the **Resource Center** to test detections and communication on endpoints managed by connected endpoint security products. Running a simulation requires deploying the Trend Vision One Endpoint Security agent and enabling Endpoint detection and response.

### Procedure {#procedure}

1.  Connect your endpoint protection management console in **Product Instance**.

    For more information, see [Connecting existing products to Product Instance](connect-exist-prod-instance.md) .

2.  Deploy the Trend Vision One Endpoint Security agent to connected endpoints.

    - For Trend Micro Apex One as a Service, your endpoints automatically download the Trend Vision One Endpoint Security agent with the Endpoint Sensor only configuration.

    - For Trend Cloud One - Endpoint & Workload Security, install the Trend Vision One Endpoint Security agent through the management console. For more information, see [Install Trend Vision One Endpoint Security agent via Deep Security Agent](https://cloudone.trendmicro.com/docs/workload-security/agent-v1-install/).

3.  Enable **Endpoint detection and response** on the endpoint.

    If you did not configure a policy for the target endpoint, you can use override settings in Endpoint Inventory to enable **Endpoint detection and response**.

    1.  Go to **Endpoint Security → Endpoint Inventory**.

    2.  Select the target endpoint.

    3.  Click **Endpoint security policy** and select **Override endpoint security policy**.

    4.  Enable **Endpoint detection and response**

        :::warning[Important]
        Enabling **Endpoint detection and response** requires allocating credits. Credits are not required during the trial period
        :::

    5.  Click **Next** and click **Apply Override**.

4.  Download and run the simulation scripts.

    1.  On the Trend Vision One console, click the **Resource Center** icon (![](/images/resourceCenter=73b1d431-813b-467c-8098-62f12bb6e2af.webp)).

    2.  Click **Simulations**.

    3.  Click **Endpoint Attack**.

        The **Endpoint Attack Simulations** window appears.

    4.  Click the right (![](/images/simulationsRightArrow=20220525102311.webp)) and left (![](/images/simulationsLeftArrow=20220525102211.webp)) arrows to browse available simulations.

    5.  Click **Download Demo Script** to download an archive file.

    6.  Extract the archive file on the target endpoint.

        :::note
        The archive file is password protected. Copy the password provided in the **Simulations** window.
        :::

    7.  Run the `.bat` demo script file on the target endpoint.

        The Windows Command Prompt opens.

    8.  Follow the instructions in the Command Prompt to execute the demonstration commands.

    9.  After executing the commands, go to the Trend Vision One console to view the expected results.

        :::note
        Results might take a few minutes to appear.
        :::
