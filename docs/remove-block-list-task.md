---
slug: trend-vision-one-remove-block-list-task
title: Remove from Block List task
---

After determining that a blocked object or sender is no longer a risk, you can remove the object from the applicable blocked list using the **Response Management** app.

This task is supported by the following services:

- Apex One as a Service

  - Windows agent

- Trend Cloud One - Endpoint & Workload Security

  - Windows agent

  - Linux agent

- Cloud App Security

- Deep Discovery Inspector

- Deep Security Software

### Procedure {#procedure}

1.  In the **Response Management** app, find the blocked object and click the options button (![](/images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp)) at the right of the row.

2.  Click **Remove from Blocked List**.

    The **Remove from Blocked List Task** screen appears.

3.  Confirm the targets of the response.

4.  Specify a **Description** for the response or event.

5.  Click **Create**.

    Trend Vision One creates the task and displays the current task status in **Response Management**.

6.  Monitor the task status.

    1.  Open **Response Management**.

    2.  (Optional) Locate the task using the **Search** field or by selecting **Remove from Block List** from the **Action** drop-down list.

    3.  View the task status.

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): An error or time-out occurred when attempting to send the command to the managing server, the agent is offline for more than 24 hours, or the command execution timed out.

        :::warning[Important]
        The *Task Status* indicates whether the managing server was able to successfully receive the command but does not necessarily mean that the target servers already synchronized the User-Defined Suspicious Objects List to all related products.
        :::
