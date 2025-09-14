---
slug: trend-vision-one-simulations-deep-security-agents
title: Running simulations on Deep Security Agents endpoints with Activity Monitoring
---

Run simulations on connected on Deep Security Agents with Activity Monitoring enabled, and view the results in Trend Vision One.

:::warning[Important]
Simulations only supports running scripts on Windows endpoints.

The following steps detail how to connect Trend Cloud One - Endpoint & Workload Security instances, and run simulations on the Deep Security Agent. To run simulations on endpoints with a Trend Vision One Endpoint Security agent deployed to an endpoint manged by Trend Cloud One - Endpoint & Workload Security, see [Running simulations on endpoints manged by connected endpoint protection products](simulations-endpoint-sensor.md).

To run simulations on endpoints with a deployed Trend Vision One Endpoint Security agent with Standard Endpoint Protection or Server & Workload Protection, see [Running simulations with Trend Vision One Endpoint Security agents](running-simulations-endpoints-xdr.md).
:::

You can use the attack simulation scripts in the **Resource Center** to test detections and communication on endpoints managed by Trend Cloud One - Endpoint & Workload Security with the Deep Security Agent. Running a simulation requires enabling Activity Monitoring.

### Procedure {#procedure}

1.  Connect your Trend Cloud One - Endpoint & Workload Security instance in **Product Instance**.

    For more information, see [Connecting existing products to Product Instance](connect-exist-prod-instance.md) .

2.  Enable Activity Monitoring on Deep Security Agents.

    1.  In the Trend Cloud One - Endpoint & Workload Security console, go to **Policies**.

    2.  Double-click the policy you want to use to enable Activity Monitoring.

    3.  Go to **Activity Monitoring → General**.

    4.  Set the **Activity Monitoring State** to **On**.

    5.  Click **Save**.

3.  Download and run the simulation scripts.

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
