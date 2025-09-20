---
slug: add-block-list-task
title: Add to Block List task
---

Take preventive blocking measures on suspicious objects that may pose a security risk to your network using context menus on the Trend Vision One console.

This task is supported by the following services:

- Apex One as a Service

  - Windows agent

- Trend Cloud One - Endpoint & Workload Security

  - Windows agent

  - Linux agent

- Cloud App Security

- Deep Discovery Inspector

- Deep Security Software

:::warning[Important]
Adding an object to the User-Defined Suspicious Objects List does not terminate any active processes or connections to the object. To terminate active processes, ensure that you also trigger the *Terminate* response.
:::

### Procedure {#procedure}

1.  After identifying the object to block, access the context or response menu and click **Add to Block List**.

    The **Add to Block List Task** screen appears.

2.  Confirm the targets of the response.

    Trend Vision One can add the following types of objects to the User-Defined Suspicious Objects List on selected servers:

    <table>
    <colgroup>
    <col style="width: 50%" />
    <col style="width: 50%" />
    </colgroup>
    <tbody>
    <tr>
    <td><ul>
    <li><p>File SHA-1</p></li>
    </ul></td>
    <td><ul>
    <li><p>IP address</p></li>
    </ul></td>
    </tr>
    <tr>
    <td><ul>
    <li><p>URL</p></li>
    </ul></td>
    <td><ul>
    <li><p>Domain</p></li>
    </ul></td>
    </tr>
    <tr>
    <td><ul>
    <li>Email address</li>
    </ul></td>
    <td> </td>
    </tr>
    </tbody>
    </table>

3.  Specify a **Description** for the response or event.

4.  Click **Create**.

    Trend Vision One creates the task and displays the current task status in **Response Management**.

5.  Monitor the task status.

    1.  Open **Response Management**.

    2.  (Optional) Locate the task using the **Search** field or by selecting **Add to Block List** from the **Action** drop-down list.

    3.  View the task status.

        - *Pending approval* (![](/images/pending_approval=f0525c66-199a-46f5-b40a-902bd498cf53.webp)) (if applicable): The automated response task was created on the **Workbench** app and is waiting for approval

        - *Rejected* (![](/images/rejected=bd05fc87-5b5d-4d84-bfb1-3a6dc09ddac5.webp)) (if applicable): The automated response task created on the **Workbench** app was rejected

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): An error or time-out occurred when attempting to send the command to the managing server, the agent is offline for more than 24 hours, or the command execution timed out.

        :::warning[Important]
        The *Task Status* indicates whether the managing server was able to successfully receive the command but does not necessarily mean that the target servers already synchronized the User-Defined Suspicious Objects List to all related products.

        Adding an object to the User-Defined Suspicious Objects List does not terminate any active processes or connections to the object. To terminate active processes, ensure that you also trigger the *Terminate* response.
        :::
