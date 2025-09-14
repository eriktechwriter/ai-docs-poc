---
slug: trend-vision-one-submit-for-sandbox-analysis-task
title: Submit for Sandbox Analysis task
---

After identifying a suspicious file or URL object, you can submit the object for analysis in the Sandbox Analysis app using context menus on the Trend Vision One console.

This task is supported by the following services:

- Trend Vision One

  - Windows agent

  - Mac agent

- Apex One as a Service

  - Windows agent

  - Linux agent

- Trend Cloud One - Endpoint & Workload Security

  - Windows agent

  - Linux agent

  - Mac agent

- Deep Discovery Inspector

- Virtual Network Sensor

### Procedure {#procedure}

1.  After identifying the suspicious file or URL object, access the context or response menu and click **Submit for Sandbox Analysis**.

    The **Submit to Sandbox for Analysis Task** screen appears.

2.  Specify a **Description** for the response or event.

3.  (Optional) Specify the arguments that are used when the sandbox runs the submitted object.

    A maximum of 1,024 characters can be entered.

4.  Click **Create**.

    Trend Vision One creates the task and displays the current task status in **Response Management**.

5.  Monitor the task status.

    1.  Open **Response Management**.

    2.  (Optional) Locate the task using the **Search** field or by selecting **Submit for Sandbox Analysis** from the **Action** drop-down list.

    3.  View the task status.

        - *Pending approval* (![](/images/pending_approval=f0525c66-199a-46f5-b40a-902bd498cf53.webp)) (if applicable): The automated response task was created on the **Workbench** app and is waiting for approval

        - *Rejected* (![](/images/rejected=bd05fc87-5b5d-4d84-bfb1-3a6dc09ddac5.webp)) (if applicable): The automated response task created on the **Workbench** app was rejected

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Queued* (![](/images/queued=GUID-65C0DF81-E50D-4D51-9602-2E9B7A0E5F14=1=en-us=Low.webp)): The managing server queued the command because the agent was offline.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): An error or time-out occurred when attempting to send the command to the managing server, the Security Agent is offline for more than 12 hours, or the command execution timed out.

6.  Check the Sandbox Analysis by selecting **Check Sandbox Analysis** (![](/images/sandbox_analysis_threat_connect=GUID-5F89C25F-5693-4A7F-9844-10B64A9672A8=1=en-us=Low.webp)) to view the analysis result in the Sandbox Analysis app.

    For more information about the Sandbox Analysis app, see [Sandbox Analysis](sandbox-analysis.md)
