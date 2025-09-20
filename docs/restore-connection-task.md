---
slug: restore-connection-task
title: Restore Connection task
---

After resolving the security issue on an isolated endpoint, you can restore network connectivity using the **Response Management** app.

This task is supported by the following services:

- Trend Vision One

  - Windows agent

  - Linux agent

  - Mac agent

- Apex One as a Service

  - Windows agent

- Trend Cloud One - Endpoint & Workload Security

  - Windows agent

  - Linux agent

  - Mac agent

:::warning[Important]
The Restore Connection response action becomes available after you isolate an endpoint and resolve any security issues.

You can restore network connectivity on isolated endpoints by selecting **Restore Connection** from the options button (![](/images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp)) associated with the corresponding **Isolate Endpoint** task. You can also trigger **Restore Connection** tasks via the context menu in **Attack Surface Discovery**, **Workbench**, **Observed Attack Techniques**, and the **Search** app.
:::

### Procedure {#procedure}

1.  In the **Response Management** app, find the isolated endpoint and click the options button (![](/images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp)) or access the context menu.

2.  Click **Restore Connection**.

    The **Restore Connection Task** screen appears.

3.  Confirm the targets of the response.

4.  Specify a **Description** for the response or event.

5.  Click **Create**.

    Trend Vision One creates the task and displays the current task status in **Response Management**.

6.  Monitor the task status.

    1.  Open **Response Management**.

    2.  (Optional) Locate the task using the **Search** field or by selecting **Restore Connection** from the **Action** drop-down list.

    3.  View the task status.

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Queued* (![](/images/queued=GUID-65C0DF81-E50D-4D51-9602-2E9B7A0E5F14=1=en-us=Low.webp)): The managing server queued the command because the agent was offline.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): An error or time-out occurred when attempting to send the command to the managing server, the agent is offline for more than 24 hours, or the command execution timed out.

        :::warning[Important]
        The *Task status* indicates whether the managing server was able to successfully receive and execute the command. If the command target is a Security Agent, the *Task status* does not necessarily indicate whether the target Security Agent or object successfully executed the command.
        :::
