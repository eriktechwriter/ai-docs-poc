---
slug: updating-agent-for-templates
title: Updating the agent for golden image templates
---

Update the agent program on virtual desktops created using a golden image.

Use the following steps to install the latest version of the agent program on your source desktop and export to an updated golden image.

:::warning[Important]
To update your golden image, you must have a snapshot of the source desktop created before running the Image Setup Tool and exporting the golden image. If you do not have a snapshot available, follow the steps in [Creating a golden image with the agent software](create-golden-agent-image.md) to create a new snapshot and golden image.

Trend Micro only maintains updates for six months. If it has been more than six months since you created or updated the golden image, you might have to create a new image using the most recent agent installer package.
:::

### Procedure {#procedure}

1.  Load, power on, or revert to the source desktop snapshot.

2.  Make sure the source desktop is able to connect to the internet and restart the source desktop virtual machine.

    The agent program automatically checks for updates on start up.

3.  Check the program logs to verify the update completed successfully.

    The logs are located in the Endpoint Basecamp installation folder.

4.  After the update completes successfully, create a new snapshot.

    :::warning[Important]
    The Image Setup Tool disables updates for the endpoint agent. To maintain the ability to update the agent program in the future, you must create a snapshot of the source desktop before installing and running the Image Setup Tool.
    :::

5.  Prepare and export the golden image as normal.

    - For Linux and macOS images, export the source desktop as a golden image template. Your template is now ready to deploy to your virtual machines. Do not continue the following steps.

      When signing into a desktop created using the golden image template, the newly-provisioned endpoint appears in the Endpoint Inventory list.

    - For Windows images, use the following steps to run the Image Setup Tool and then export the golden image template.

    :::warning[Important]
    The Image Setup Tool does not support Linux or macOS images. Continue only for Windows images.
    :::

6.  In the Trend Vision One console, go to **Endpoint Security Operations → Endpoint Inventory** and click **Agent Installer**.

7.  Click the **Download Image Setup Tool** icon (![](/images/ImageSetupToolIcon=GUID-4fdde7d3-cec0-4d8b-8400-f108bd98db23.webp)) for your agent type.

    The **Virtual Desktop Image Setup Tool** screen appears.

8.  Click **Download** to download the Image Setup Tool.

    :::warning[Important]
    The downloaded Image Setup Tool package is specific to your organization.
    :::

9.  Copy the **Admin token**.

    <figure>
    <img src="./images/vdiImageSetupToolAdminToken=20230629144444.webp" />
    </figure>

10. Extract the contents of the `ImageSetupTool.zip` package onto the source desktop.

11. Run `ImageSetupTool.exe` as an administrator on the source desktop to prepare the agent.

    :::warning[Important]
    You must specify if your cloned machine is physical/persistent or non-persistent.
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
    <td> </td>
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
    <td> </td>
    <td><ul>
    <li><p>Do not require a login for the newly provisioned machine</p></li>
    </ul></td>
    <td><ul>
    <li><p>Citrix ICA virtual channels</p></li>
    </ul></td>
    </tr>
    </tbody>
    </table>

12. Paste the admin token copied from the Endpoint Inventory app when prompted.

13. Delete the Image Setup Tool from the source desktop once image setup completes.

14. Export your source desktop as a golden image template.

    When signing into a desktop created using the golden image template, the newly-provisioned endpoint appears in the Endpoint Inventory list.
