---
slug: trend-vision-one-deploy-agents-gpo
title: Deploying Agents Using Group Policy Objects
---

Use the Active Directory Group Policy Management console to deploy the agent package to your managed endpoints.

:::warning[Important]
The steps contained in this topic reference Active Directory for Windows Server 2019 and are valid as of December, 2023. If you are using a different version of Active Directory or Windows Server, refer to the documentation for your version.

This deployment method only supports Windows agents.
:::

Configure your agent installation packages to ensure that your newly-deployed agents:

- Report to the correct Protection Manager or Endpoint Inventory

- Automatically apply the correct default settings

:::note
This method requires using a PowerShell script to execute the agent installer. For more information, see [Group Policy Object Sample Script](group-policy-object-sample-script.md).
:::

### Procedure {#procedure}

1.  Go to **Endpoint Security → Endpoint Inventory**.

2.  Click **Agent Installer**.

3.  Locate the Agent Installer type you want to use and select the **Windows** operating system.

4.  For **Endpoint Sensor**, specify the **OS architecture** and click the **Download installer** icon (![](/images/downloadInstaller=20230617123737.webp)).

5.  Unzip the Agent Package and move the contents to a directory that is accessible via UNC.

    You must specify the UNC path where the contents are located in the PowerShell script used to execute the installation.

6.  In the Group Policy Management console, right click **Group Policy Objects** and select **New**.

7.  In the **New GPO** window, specify a name and click **OK**.

    <figure>
    <img src="./images/GPO-NewName=GUID-e17d51e3-0664-4995-9482-ab00184d67c2.webp" />
    <figcaption>Step 9 Example</figcaption>
    </figure>

    In this example, the new GPO is named `(Demo) Deploy Agent`.

8.  Right click the GPO you created and select **Edit...**.

    <figure>
    <img src="./images/GPO-Edit=GUID-e789ec67-f13e-46c1-9c8d-91a7b8627a27.webp" />
    <figcaption>Step 10 Example</figcaption>
    </figure>

    In this example, the user right clicks `(Demo) Deploy Agent` and selects Edit...

9.  Go to **Computer Configuration → Preferences → Control Panel Settings → Scheduled Tasks**.

10. Right click the GPO you created, click **New**, and select **Scheduled Task (At least Windows 7)**.

    <figure>
    <img src="./images/GPO-NewTask=GUID-85a650e8-06bb-4a69-9fee-9cbc96e6cb42.webp" />
    <figcaption>Step 12 Example</figcaption>
    </figure>

    In this example, the user navigates to **Scheduled Tasks** and right clicks the GPO to add a new task.

    The deployment settings window appears.

11. Configure the **General** tab.

    <table>
    <colgroup>
    <col style="width: 33%" />
    <col style="width: 67%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Setting</p></th>
    <th><p>Configuration</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p><strong>Action</strong></p></td>
    <td><p>Select <strong>Update</strong></p></td>
    </tr>
    <tr>
    <td><p><strong>Name</strong></p></td>
    <td><p>The field should already show the name of the GPO you created</p>
    <p>If the field does not show the correct name, click the <strong>...</strong> button to select the correct GPO.</p></td>
    </tr>
    <tr>
    <td><p><strong>Security Options</strong></p></td>
    <td><ul>
    <li><p>Specify the user <code>NT AUTHORITY\System</code></p></li>
    <li><p>Select <strong>Run whether user is logged on or not</strong></p></li>
    <li><p>Select <strong>Run with highest privileges</strong></p></li>
    </ul></td>
    </tr>
    </tbody>
    </table>

    <figure>
    <img src="./images/GPO-GeneralTab=GUID-07010635-66e9-4c82-8d8b-7884e7370431.webp" />
    <figcaption>General Tab Example</figcaption>
    </figure>

12. On the **Triggers** tab, configure the time you want the deployment to occur.

13. On the **Actions** tab, click **New...**

14. Configure the settings in the **New Action** window.

    1.  For **Action**, select **Start a program**.

    2.  For **Program/script**, select the PowerShell script to execute the Agent Installer.

        Refer to the [sample PowerShell script](group-policy-object-sample-script.md) and modify the variables to match your environment.

    3.  For **Add arguments**, specify the UNC path where the PowerShell script is located.

        For example, `-file "\\serverName\demo\sample.ps1"`.

    <figure>
    <img src="./images/GPO-ActionsTab=GUID-97360839-6e2e-4e46-9b47-ceb3d336cfc0.webp" />
    <figcaption>Action Tab Example</figcaption>
    </figure>

15. Click **OK**.

16. Click **OK** to create the deployment.

**Related information**

- [Group Policy Object Sample Script](group-policy-object-sample-script.md "A sample PowerShell script to deploy the Agent Installer using the Active Directory Group Policy Management console.")
