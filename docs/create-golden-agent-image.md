---
slug: trend-vision-one-create-golden-agent-image
title: Creating a golden image with the agent software
---

Prepare a template to easily deploy endpoint agents and sensors to cloned desktops on physical machines, as well as persistent and non-persistent virtual desktops.

:::warning[Important]
- Follow these instructions carefully. If you clone your own VDI machines, it causes agent IDs to be duplicated and deployed agents cannot perform response actions.

- The Image Setup Tool only supports Windows agents.

- Virtual desktops which are not powered on regularly are considered inactive and are removed automatically based on your agent settings. For more information about inactive agent removal, see [Deployment using a golden image](deployment-using-golden-image.md).

- Updating the agent program requires creating a snapshot image before running the Image Setup Tool. For more information about updating a golden image, see [Updating the agent for golden image templates](updating-agent-for-templates.md).
:::

Carefully review the [feature support and requirements](deployment-using-golden-image.md) for this deployment method before reviewing the steps.

### Procedure {#procedure}

1.  Power on and set up the source desktop you want to use to create the template, including configuring the operating system, VM settings, and software.

2.  Configure the software for a VDI or cloned environment, including any endpoint protection software.

3.  In the Trend Vision One console, go to **Endpoint Security Operations → Endpoint Inventory** and click **Agent Installer**.

4.  Download the Agent Installer package you want to use and install the agent on the source desktop.

    Follow the steps in the linked topics based on the agent type you wish to use to install the agent program on the source desktop:

    - [Endpoint Sensor Agent Deployment](endpoint-sensor-agent-deployment.md)

5.  After installation finishes, go to **Endpoint Security Operations → Endpoint Inventory** and locate the source desktop on the list.

6.  Verify that the desired endpoint policy settings are correct.

7.  If you want to facilitate future agent upgrades, create a snapshot of your source desktop.

    For more information, see [Updating the agent for golden image templates](updating-agent-for-templates.md).

    The following the steps detail how to download and run the Image Setup Tool. Trend Micro recommends using the Image Setup Tool for all of your template-based deployments.

    :::warning[Important]
    - The Image Setup Tool does not support Linux or macOS deployments. Skip ahead to complete the setup.

    - You must use the Image Setup Tool for deploying non-persistent Windows virtual desktops.

    - The Image Setup Tool disables updates for the endpoint agent. To maintain the ability to update the agent program in the future, you must create a snapshot of the source desktop before installing and running the Image Setup Tool.
    :::

8.  In the Trend Vision One console, go to **Endpoint Security Operations → Endpoint Inventory** and click **Agent Installer**.

9.  Click the **Download Image Setup Tool** icon (![](/images/ImageSetupToolIcon=GUID-4fdde7d3-cec0-4d8b-8400-f108bd98db23.webp)) for your agent type.

    The **Virtual Desktop Image Setup Tool** screen appears.

10. Click **Download** to download the Image Setup Tool.

    :::warning[Important]
    The downloaded Image Setup Tool package is specific to your organization.
    :::

11. Copy the **Admin token**.

    <figure>
    <img src="./images/vdiImageSetupToolAdminToken=20230629144444.webp" />
    </figure>

12. Extract the contents of the `ImageSetupTool.zip` package onto the source desktop.

13. Run `ImageSetupTool.exe` as an administrator on the source desktop to prepare the agent.

    :::warning[Important]
    Specify if your cloned machine is physical/persistent or non-persistent.
    :::

    <table>
    <colgroup>
    <col style="width: 50%" />
    <col style="width: 25%" />
    <col style="width: 25%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Command</p></th>
    <th><p>Use Case</p></th>
    <th><p>Supported Features</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p><code>ImageSetupTool.exe --persistent </code></p></td>
    <td><ul>
    <li><p>Persistent virtual desktops</p></li>
    <li><p>Physical desktop clones</p></li>
    </ul></td>
    <td><ul>
    <li><p>Standard agent auto-removal</p></li>
    <li><p>Vulnerability Assessment available</p></li>
    <li><p>In-place upgrades</p></li>
    </ul></td>
    </tr>
    <tr>
    <td><p><code>ImageSetupTool.exe --non-persistent </code></p></td>
    <td><ul>
    <li><p>Non-persistent virtual desktops</p></li>
    </ul></td>
    <td><ul>
    <li><p>Non-persistent agent auto-removal available from Endpoint Inventory</p></li>
    <li><p>Vulnerability Assessment disabled</p></li>
    <li><p>In-place upgrades disabled</p></li>
    </ul></td>
    </tr>
    <tr>
    <td><p><code>ImageSetupTool.exe --persistent --no-login</code></p>
    <p><code>ImageSetupTool.exe --non-persistent --no-login</code></p></td>
    <td><p>Do not require a login for the newly provisioned machine</p></td>
    <td><ul>
    <li><p>Citrix ICA virtual channels</p></li>
    </ul></td>
    </tr>
    </tbody>
    </table>

14. Paste the admin token copied from the Endpoint Inventory app when prompted.

15. Delete the Image Setup Tool from the source desktop once image setup completes.

16. Export your source desktop as a golden image template.

    When signing into a desktop created using the golden image template, the newly-provisioned endpoint appears in the Endpoint Inventory list.
