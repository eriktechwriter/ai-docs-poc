---
slug: trend-vision-one-collect-network-analysis-package
title: Collect Network Analysis Package task
---

After identifying a suspicious object that you want to investigate, you can collect the network analysis package (including an investigation package, a PCAP file, and a selected file detected by the network appliance) in a password-protected archive and download the file from the **Response Management** app.

This task is supported by the following services:

- Deep Discovery Inspector

:::danger[Warning]
Downloading suspicious samples may potentially harm your endpoint. Ensure that you take the necessary precautions before continuing. Trend Vision One automatically stores the collected samples in a password-protected ZIP archive.
:::

:::warning[Important]
To execute the Collect Network Analysis Package task, you must first enable the [Virtual Analyzer](https://docs.trendmicro.com/all/ent/ddi/v6.5/en-us/ddi_6.5_olh/virtualAnalyzer) and [packet capture](https://docs.trendmicro.com/all/ent/ddi/v6.5/en-us/ddi_6.5_olh/packetCapture) function in Deep Discovery Inspector.
:::

### Procedure {#procedure}

1.  After identifying the object that you want to collect, access the context or response menu and click **Collect Network Analysis Package**.

    The **Collect Network Analysis Package Task** screen appears.

2.  Specify a **Description** for the response or event.

3.  Click **Create**.

    Trend Vision One creates the task and displays the current task status in **Response Management**.

4.  Monitor the task status.

    1.  Open **Response Management**.

    2.  (Optional) Locate the task using the **Search** field or by selecting **Collect Network Analysis Package** from the **Action** drop-down list.

    3.  View the task status.

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Partially successful* (![](/images/partially_successful_icon=GUID-20230103030733.webp)): The collection of one or more files was unsuccessful

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): An error or time-out occurred when attempting to send the command to the managing server, the Security Agent is offline for more than 12 hours, or the command execution timed out.

5.  Download the network analysis package.

    1.  In the **Response Management** app, find the **Collect Network Analysis Package** task and click the options button (![](/images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp)) at the right of the row.

    2.  Click **Download Package**.

    3.  On the screen that appears, record the password for the archived sample.

    4.  Click **OK** to download the file.

        :::tip
        Use an external decompression program (such as 7-zip) to extract the file contents.
        :::
