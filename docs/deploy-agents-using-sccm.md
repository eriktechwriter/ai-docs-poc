---
slug: deploy-agents-using-sccm
title: Deploying Agents Using Microsoft Endpoint Configuration Manager (SCCM)
---

Use Microsoft Endpoint Configuration Manager (SCCM) to deploy the agent package to your managed endpoints.

:::warning[Important]
The steps contained in this topic reference Configuration Manager version 2207 and are valid as of December, 2023. If you are using a different version of Configuration Manager, refer to the documentation for your version.

This deployment method only supports Windows agents.
:::

Configure your agent installation packages to ensure that your newly-deployed agents:

- Report to the correct Protection Manager or Endpoint Inventory

- Automatically apply the correct default settings

### Procedure {#procedure}

1.  Go to **Endpoint Security → Endpoint Inventory**.

2.  Click **Agent Installer**.

3.  Locate the Agent Installer type you want to use and select the **Windows** operating system.

4.  For **Endpoint Sensor**, specify the **OS architecture** and click the **Download installer** icon (![](/images/downloadInstaller=20230617123737.webp)).

5.  Unzip the Agent Package and move the contents to the Configuration Manager server.

6.  Create the package.

    1.  In the Configuration Manager console, go to **Software Library → Application Management**.

    2.  Right-click **Packages** and click **Create Package**.

        The **Create Package and Program Wizard** appears.

    3.  Configure the settings in the **Package** tab.

        - Provide a readable package name and description. Trend Micro recommends including the agent type in the package name.

        - Select **This package contains source files**.

        ![](/images/CPPW_PackageTab=GUID-82315f73-a237-4fc1-8368-d0f0e896b160.webp)

    4.  Next to the **Source folder** field, click **Browse...**.

    5.  Select **Local folder on site server** and click **Browse...**

    6.  Select the folder containing the Agent Package and click **OK**.

    7.  Click **Next**.

    8.  Select **Standard program** and click **Next**.

    9.  Configure the settings in the **Standard Program** tab.

        <table>
        <colgroup>
        <col style="width: 50%" />
        <col style="width: 50%" />
        </colgroup>
        <thead>
        <tr>
        <th><p>Setting</p></th>
        <th><p>Configuration</p></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><p><strong>Name</strong></p></td>
        <td><p>Provide a readable and descriptive software name</p>
        <p>This is not the same name you provided in the <strong>Package</strong> tab.</p></td>
        </tr>
        <tr>
        <td><p><strong>Command line</strong></p></td>
        <td><p>Click <strong>Browse...</strong> and select the installation program <code>EndpointBasecamp.exe</code></p></td>
        </tr>
        <tr>
        <td><p><strong>Startup folder</strong></p></td>
        <td><p>Leave blank</p></td>
        </tr>
        <tr>
        <td><p><strong>Run</strong></p></td>
        <td><p>Select <strong>Hidden</strong></p></td>
        </tr>
        <tr>
        <td><p><strong>Program can run</strong></p></td>
        <td><p>Select <strong>Whether or not a user is logged on</strong></p></td>
        </tr>
        <tr>
        <td><p><strong>Run mode</strong></p></td>
        <td><p>Select <strong>Run with administrative rights</strong></p></td>
        </tr>
        <tr>
        <td><p><strong>Drive mode</strong></p></td>
        <td><p>Select <strong>Runs with UNC name</strong></p></td>
        </tr>
        </tbody>
        </table>

        ![](/images/CPPW_StandardProgram=GUID-c43847bd-3abe-41d5-9a0c-674d724442b8.webp)

    10. Click **Next**.

    11. In the **Platform requirements** section, select **This program can run only on specified platforms**.

    12. Select the specified platforms based on the [system requirements](endpoint-agent-system-requirements.md) of the agent you are deploying and the needs of your security environment.

    13. Click **Next**.

    14. Review the settings and click **Next** to create the package.

    15. Once the wizard finishes creating the package, click **Close**.

7.  Upload the package to distribution points.

    1.  Right-click on the package you created and select **Distribute Content**.

        The **Distribute Content Wizard** appears.

    2.  Select the package name in the **Content** field.

        ![](/images/DCW_GeneralTab=GUID-c0680116-798b-4b3d-92d3-abee47a7d85b.webp)

    3.  Click **Next**.

    4.  Click **Add** and select **Distribution Point** to add distribution points to the **Content destination** list.

    5.  Click **Next**, and in the **Summary** screen, click **Next** again to process the task.

    6.  Click **Close** once the task completes.

8.  Deploy the package.

    1.  Right-click on the package you created and select **Deploy**.

        The **Deploy Software Wizard** appears.

    2.  Verify the software is already selected.

        The **Software** field should display `Package Name (Software Name)` based on the names you provided in the Create Package and Program Wizard.

        ![](/images/DSW_GeneralTabNameMarked=GUID-eff28d6d-0098-4d47-8ba0-9b63fc44a560.webp)

    3.  For **Collection**, click **Browse...**, then **Select Device Collections** and select the collection to deploy the agent installer to.

    4.  Click **OK**, then click **Next**.

    5.  In the **Content** screen, verify the content destination.

        If you want to add more distribution points, click **Add** and select **Distribution Point**.

    6.  Click **Next**.

    7.  In the **Deployment Settings** screen, select **Required** for **Purpose**.

    8.  Click **Next**.

    9.  In the **Scheduling** screen, click **New** to create the deployment schedule.

    10. Click **Next**.

    11. Review the **User Experience** screen and change the settings based on the best fit for your environment and users.

    12. Click **Next**.

    13. Configure settings in the **Distribution Points** screen.

        - For **Deployment options**, select **Download content from distribution point and run locally** for both scenarios.

        - Select **Allow clients to use distribution points from the default site boundary group**.

        ![](/images/DSW_DistributionPoints=GUID-2699e5e5-d2c6-4d72-bcee-ad85802ff67d.webp)

    14. Click **Next**.

    15. Review the **Summary** and click **Next** to create the deployment task.

    16. After the wizard completes, click **Close**.

    17. Go to **Assets and Compliance → Devices**.

    18. Right-click on the collection you selected to deploy to, select **Client Notification** and click **Download Computer Policy and Evaluate Application Deployments**.
