---
slug: trend-vision-one-isolate-endpoint-task
title: Isolate Endpoint task
---

You can take preventive isolation measures on compromised endpoints that may pose a security risk to your network using context menus on the Trend Vision One console.

The following services support this task:

- Trend Vision One

  - Windows agent

  - Linux agent

    :::tip
    Enable either *iptables* or *nftables* on Trend Vision One Linux agents to use the Isolate Endpoint response action.
    :::

  - Mac agent

- Apex One as a Service

  - Windows agent

- Trend Cloud One - Endpoint & Workload Security

  - Windows agent

  - Linux agent

  - Mac agent

:::note
Taking certain response actions on critical endpoints could obstruct key operations or services. For critical devices, Trend Micro recommends [excluding the endpoints](response-exclude-endpoints.md) from certain response actions instead.

To allow network traffic on isolated critical endpoints, such as DNS servers, proxy servers, or VPN routers, you can [add an inbound or outbound network traffic exception](allow-traffic-isolated-endpoints.md) for the IP addresses of the endpoints.
:::

### Procedure {#procedure}

1.  After identifying the endpoint to isolate, access the context or response menu and click **Isolate Endpoint**.

    The **Isolate Endpoint Task** screen appears.

2.  Confirm the targets of the response.

3.  Specify a **Description** for the response or event.

4.  Click **Create**.

    Trend Vision One creates the task and displays the current task status in **Response Management**.

5.  Monitor the task status.

    1.  Open **Response Management**.

    2.  Locate the task using the **Search** field or by selecting **Isolate Endpoint** from the **Action** dropdown list.

    3.  View the task status.

        - *Pending approval* (![](/images/pending_approval=f0525c66-199a-46f5-b40a-902bd498cf53.webp)) (if applicable): The automated response task was created on the **Workbench** app and is waiting for approval

        - *Rejected* (![](/images/rejected=bd05fc87-5b5d-4d84-bfb1-3a6dc09ddac5.webp)) (if applicable): The automated response task created on the **Workbench** app was rejected

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Queued* (![](/images/queued=GUID-65C0DF81-E50D-4D51-9602-2E9B7A0E5F14=1=en-us=Low.webp)): The managing server queued the command because the agent was offline.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): An error or time-out occurred when attempting to send the command to the managing server, the agent is offline for more than 24 hours, or the command execution timed out.

        :::warning[Important]
        The *Task status* indicates whether the managing server was able to successfully receive and execute the command. If the command target is a Security Agent, the *Task status* does not necessarily indicate whether the target Security Agent or object successfully executed the command.
        :::

    After resolving the security issue on the isolated endpoint, you can restore network connectivity using the options button (![](/images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp)) in the Response Management app.

    For more information, see [Restore Connection task](restore-connection-task.md).
