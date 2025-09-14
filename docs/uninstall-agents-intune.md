---
slug: trend-vision-one-uninstall-agents-intune
title: Uninstall Windows Agents with Microsoft Intune
---

Create a Microsoft Intune app to deploy the uninstall tool and remove the agent program for your endpoints.

:::warning[Important]
The steps are valid for Microsoft Intune as of December, 2023.
:::

Before you get started, make sure to download and unzip the [Microsoft Win32 Content Prep Tool](https://github.com/Microsoft/Microsoft-Win32-Content-Prep-Tool).

### Procedure {#procedure}

1.  On the Trend Vision One console, go to **Endpoint Security → Endpoint Inventory**.

2.  Click **Agent Installer**.

3.  Click the **download the uninstall tool** link at the bottom of the **Agent Installer** screen.

    :::note
    If you do not see the link, you might not have permission to perform this action. Contact your system administrator.
    :::

4.  In the **Download Uninstall Tool** screen, locate **Windows (32-bit, 64-bit)** and click the **Download tool** button.

    :::note
    The downloaded uninstall tool expires after seven days.
    :::

5.  Unzip the uninstall tool package.

6.  Locate where you have downloaded and unzipped the [Microsoft Win32 Content Prep Tool](https://github.com/Microsoft/Microsoft-Win32-Content-Prep-Tool).

7.  Run `IntuneWinAppUtil.exe` and specify the information when prompted.

    <table>
    <colgroup>
    <col style="width: 50%" />
    <col style="width: 50%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Prompt</p></th>
    <th><p>Setting</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Source folder</p></td>
    <td><p>Specify the directory where the uninstall tool is located</p></td>
    </tr>
    <tr>
    <td><p>Setup file</p></td>
    <td><p>Type the full file path with <code>V1ESUninstallTool.exe</code></p></td>
    </tr>
    <tr>
    <td><p>Output folder</p></td>
    <td><p>Specify the destination for the created package</p></td>
    </tr>
    <tr>
    <td><p>Specify catalog folder</p></td>
    <td><p>Type <code>N</code></p></td>
    </tr>
    </tbody>
    </table>

    The tool creates a deployment package named `V1ESUninstallTool.intunewin`

8.  In Microsoft Intune, go to **Apps → All apps** and click **Add**.

    The **Select app type** window appears.

9.  Select **Windows app (Win32)**.

    The **Add App** window appears.

10. On the **App information** tab, click **Select app package file**.

11. In the **App package file** screen, click the folder icon to locate the `V1ESUninstallTool.intunewin` package.

12. Click **OK**.

13. Specify a unique **Name** for the app.

14. Specify a **Description** to easily identify the purpose of the app.

15. For **Publisher**, type `Trend Micro`.

16. Click **Next**.

17. Configure the **Program** tab and click **Next**.

    - **Install command**: Type `V1ESUninstallTool.exe`

    - **Uninstall command**: Type `V1ESUninstallTool.exe /qn`

18. Configure the **Requirements** tab and click **Next**.

    - **Operating system architecture**: Select **64-bit**.

    - **Minimum operating system**: Refer to the [Endpoint Agent System Requirements](endpoint-agent-system-requirements.md) for your agent and security environment needs.

19. Configure the **Detection rules** tab.

20. For **Rules format**, select **Manually configure detection rules**.

21. Click **Add** to add new detection rules.

    :::warning[Important]
    Only use the rules for the type of agent you want to uninstall. Adding rules for more than one agent type may cause the uninstall process to fail.
    :::

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 25%" />
    <col style="width: 50%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Agent Type</p></th>
    <th><p>Rule Type</p></th>
    <th><p>Settings</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td rowspan="2"><p>Endpoint Sensor</p></td>
    <td><p>File</p></td>
    <td><ul>
    <li><p><strong>Path</strong>: Type <code>%ProgramFiles (x86)%\Trend Micro\Endpoint Basecamp</code></p></li>
    <li><p><strong>File or folder</strong>: Type <code>EndpointBasecamp.exe</code></p></li>
    <li><p><strong>Detection method</strong>: Select <strong>File or folder does not exist</strong>.</p></li>
    </ul></td>
    </tr>
    <tr>
    <td><p>File</p></td>
    <td><ul>
    <li><p><strong>Path</strong>: Type <code>%ProgramFiles%\Trend Micro\</code></p></li>
    <li><p><strong>File or folder</strong>: Type <code>Cloud Endpoint</code></p></li>
    <li><p><strong>Detection method</strong>: Select <strong>File or folder does not exist</strong>.</p></li>
    </ul></td>
    </tr>
    </tbody>
    </table>

22. Click **Next**, then click **Next** again to go to the **Scope tags** tab.

23. Click **Select scope tags** to assign a scope tag for the agent installer.

24. Click **Next** to go to the **Assignments** tab.

25. Add the groups or users you wish to deploy the agent installer to, then click **Next**.

    Trend Micro recommends leveraging filters to select by specific user or machine to avoid any errors during the uninstalling process.

26. Review the settings and then click **Create**.

    Once the app runs, the agent is uninstalled from the target endpoints. Endpoint Inventory might take some time to update the information. Some endpoints might require you to manually update the endpoint lists. For more information, see [Cleaning Up Uninstalled Agents](cleaning-up-uninstalled-agents.md).
