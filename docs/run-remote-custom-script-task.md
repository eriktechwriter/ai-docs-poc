---
slug: run-remote-custom-script-task
title: Run Remote Custom Script task
---

Execute a PowerShell or Bash script on a target endpoint during an investigation.

Remote custom scripts allows Master Administrator and Security Analyst roles to directly access target endpoints to run a previously uploaded PowerShell and Bash script files.

This task is supported by the following services:

- Trend Vision One

  - Windows agent

  - Mac agent

  - Linux agent

- Trend Cloud One - Endpoint & Workload Security

  - Windows agent

  - Mac agent

  - Linux agent

:::warning[Important]
The following recommendations apply only to PowerShell scripts executed on Windows endpoints:

- The target endpoint's PowerShell execution policy must be set to `RemoteSigned`, otherwise the script may be blocked. RemoteSigned is the default execution policy.

- Trend Micro recommends you configure the PowerShell session language mode to `FullLanguage`, otherwise the script may be blocked. `FullLanguage` is the default language mode for default sessions on all versions of Windows except for Windows RT.

- The script file must not include interactive functions. Because scripts run in silent mode, interactive functions will cause scripts to time out.

- For an example of a signed script, see [Sample signed PowerShell script](sample-signed-powershell-script.md).

To learn more about the above settings, please consult the Microsoft PowerShell official documentation site.
:::

### Procedure {#procedure}

1.  After identifying the endpoint to investigate, access the context or response menu and click **Run Remote Custom Script**.

    The **Run Remote Custom Script Task** screen appears and Trend Vision One attempts to connect to the endpoint.

    :::note
    Trend Vision One only permits you to execute one custom script file per session. The target endpoint must be online in order to connect successfully.
    :::

2.  Select the previously uploaded custom script file from the drop-down list.

    To add a new custom script, go to **Custom Scripts** on the **Response Scripts** tab of Response Management. Click **Add script** to upload a new script file.

3.  (Optional) Specify the arguments that are added onto the script during script execution.

    :::note
    You can specify a maximum of 8,000 characters.
    :::

4.  Specify a **Description** for the response or event.

5.  Click **Create**.

    Trend Vision One creates the task and displays the current task status in **Response Management**.

6.  Monitor the task status.

    1.  Open **Response Management**.

    2.  (Optional) Locate the task using the **Search** field or by selecting **Run Remote Custom Script** from the **Action** drop-down list.

    3.  View the task status.

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): An error or time-out occurred when attempting to send the command to the managing server, the Security Agent is offline for more than 12 hours, or the command execution timed out.

    4.  Click the *Task ID* to open the Details panel and **Download** the session history.

        :::note
        Use an external decompression program (such as 7-zip) to extract the file contents.
        :::

**Related information**

- [Sample signed PowerShell script](sample-signed-powershell-script.md "Refer to the following sample signed PowerShell script for the Run Remote Custom Script response action.")
