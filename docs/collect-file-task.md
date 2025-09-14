---
slug: trend-vision-one-collect-file-task
title: Collect File task
---

After identifying a suspicious file object that you want to investigate in your local environment, you can collect the file in a password-protected archive and download the file from the **Response Management** app.

This task is supported by the following services:

- Deep Discovery Inspector

- Virtual Network Sensor

:::danger[Warning]
Downloading suspicious samples may potentially harm your endpoint. Ensure that you take the necessary precautions before continuing. Trend Vision One automatically stores the collected samples in a password-protected ZIP archive.
:::

### Procedure {#procedure}

1.  After identifying the object that you want to collect, access the context or response menu and click **Collect File**.

    The **Collect File Task** screen appears.

    :::note
    The Collect File task does not support collecting the following files:

    - Files larger than 4 GB

    - Protected Windows files

    UNC paths for file objects are not supported.
    :::

2.  Specify a **Description** for the response or event.

3.  Click **Create**.

    Trend Vision One creates the task and displays the current task status in **Response Management**.

4.  Monitor the task status.

    1.  Open **Response Management**.

    2.  (Optional) Locate the task using the **Search** field or by selecting **Collect File** from the **Action** drop-down list.

    3.  View the task status.

        - *Pending approval* (![](/images/pending_approval=f0525c66-199a-46f5-b40a-902bd498cf53.webp)) (if applicable): The automated response task was created on the **Workbench** app and is waiting for approval

        - *Rejected* (![](/images/rejected=bd05fc87-5b5d-4d84-bfb1-3a6dc09ddac5.webp)) (if applicable): The automated response task created on the **Workbench** app was rejected

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Queued* (![](/images/queued=GUID-65C0DF81-E50D-4D51-9602-2E9B7A0E5F14=1=en-us=Low.webp)): The managing server queued the command because the agent was offline.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): An error or time-out occurred when attempting to send the command to the managing server, the Security Agent is offline for more than 12 hours, or the command execution timed out.

5.  Download the sample file.

    1.  In the **Response Management** app, find the **Collect File** task and click the options button (![](/images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp)) at the right of the row.

    2.  Click **Download File**.

    3.  On the screen that appears, record the password for the archived sample.

    4.  Click **OK** to download the file.

        :::danger[Warning]
        Downloading suspicious samples may potentially harm your endpoint. Ensure that you take the necessary precautions before continuing. Trend Vision One automatically stores the collected samples in a password-protected ZIP archive.

        Use an external decompression program (such as 7-zip) to extract the file contents.
        :::
