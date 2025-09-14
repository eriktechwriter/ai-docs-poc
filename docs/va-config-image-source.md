---
slug: trend-vision-one-va-config-image-source
title: Configuring Virtual Analyzer Image Source
---

Configure a source SFTP server and add images to use with Virtual Analyzer image plans.

To access images for Virtual Analyzer image plans, you must first configure the Virtual Analyzer image source. Configure a source SFTP server and then add the file path for each image you want available to deploy.

:::note
- **Network Security** supports images prepared by the Virtual Analyzer Image Preparation Tool exported in .TAR format. For information on how to prepare images, view the [Virtual Analyzer Image Preparation Tool User's Guide](https://docs.trendmicro.com/en-us/documentation/virtual-analyzer-image-preparation/).

- **Network Security** does not download the prepared Virtual Analyzer images. Configuring the source SFTP server only provides links to the images for your Deep Discovery Inspector appliances to download directly from the source SFTP server.
:::

### Procedure {#procedure}

1.  Go to **Network Security → Network Inventory → Deep Discovery Inspector**.

2.  Click **Manage** and select **Virtual Analyzer image source**.

3.  Configure the SFTP server connection.

    1.  Specify the **Server address** by typing either the server IP address or FQDN.

    2.  Specify the **Port** used to access the SFTP server.

    3.  Specify the **User name** used to sign in to the SFTP server.

    4.  Specify the **Password** for the user name.

    5.  Click **Save**.

    Clicking **Save** closes the screen and returns to the Deep Discovery Inspector appliance list. Click **Manage** and select **Virtual Analyzer image source** to continue with configuration.

4.  Click **Add File Path**.

    The **File Path Settings** screen opens.

5.  Configure the file path settings for the image.

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 75%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Setting</p></th>
    <th><p>Description</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>File Path</p></td>
    <td><p>The full file path of the image located on the SFTP server</p>
    <p>The file path must include the image file name with file extension. You do not need to include the storage drive.</p>
    <p>For example: <code>/images/Win10image.tar</code></p></td>
    </tr>
    <tr>
    <td><p>Name</p></td>
    <td><p>The image name</p>
    <p>Provide a unique name to identify the image in Network Inventory.</p></td>
    </tr>
    <tr>
    <td><p>File hash</p></td>
    <td><p>The SHA-256 value of the image file</p>
    <p>The file hash value is provided by the Virtual Analyzer Image Preparation Tool.</p></td>
    </tr>
    <tr>
    <td><p>OS type</p></td>
    <td><p>The image operating system</p></td>
    </tr>
    <tr>
    <td><p>Description</p></td>
    <td><p>(Optional) A description of the image</p></td>
    </tr>
    </tbody>
    </table>

6.  Click **Save**.

7.  To edit an image, click the edit icon to open the **File Path Settings** screen.

8.  To finish, click **Save** in the **Virtual Analyzer Image Source** screen.

    :::warning[Important]
    Clicking **Cancel** in the **Virtual Analyzer Image Source** screen discards any changes or newly added image file paths. You must click **Save** both in the **File Path Settings** screen, and the **Virtual Analyzer Image Source** screen.
    :::

    Clicking **Save** closes the screen and returns to the Deep Discovery Inspector appliance list.
