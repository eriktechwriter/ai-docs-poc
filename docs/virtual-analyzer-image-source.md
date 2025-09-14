---
slug: trend-vision-one-virtual-analyzer-image-source
title: Virtual Analyzer Image Source
---

Configure and manage the SFTP source for your Virtual Analyzer images.

The **Virtual Analyzer Image Source** screen allows you to specify an SFTP server and manage the Virtual Analyzer images you want to deploy to Deep Discovery Inspector appliances with Virtual Analyzer image plans. When executing a Virtual Analyzer image deployment plan, your appliances connect directly with the configured SFTP server and download the images from the specified file paths. **Network Security** does not connect to the SFTP server or download the images.

**Network Security** supports images prepared by the Virtual Analyzer Image Preparation Tool exported in .TAR format. For information on how to prepare images, view the [Virtual Analyzer Image Preparation Tool User's Guide](https://docs.trendmicro.com/en-us/documentation/virtual-analyzer-image-preparation/).

You can perform the following actions on the **Virtual Analyzer Image Source** screen:

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Configure the source SFTP server</p></td>
<td><p>Specify the <strong>SFTP Sever Information</strong> and save the settings to configure an SFTP sever for appliances to connect.</p>
<p>For more information, see <a href="trend-vision-one-va-config-image-source">Configuring Virtual Analyzer Image Source</a>.</p>


:::note

<p>You can only configure one source SFTP server at a time.</p>


:::

</td>
</tr>
<tr>
<td><p>Add an image</p></td>
<td><p>Click <strong>Add File Path</strong> to specify a Virtual Analyzer image you want to use.</p>
<p>For more information, see <a href="trend-vision-one-va-config-image-source">Configuring Virtual Analyzer Image Source</a>.</p></td>
</tr>
<tr>
<td><p>Edit an image</p></td>
<td><p>Click the edit icon (<img src="./images/editIcon=71125946-2a6e-4cfa-ae3f-072292c400ae.webp" />) to edit the file path settings of the image.</p></td>
</tr>
<tr>
<td><p>Delete and image</p></td>
<td><p>Click the delete icon (<img src="./images/garbage_can_icon=GUID-20230329141313.webp" />) to delete an image.</p>


:::note

<p>Deleting an image from the Virtual Analyzer Image Source screen does not delete the image from your source SFTP server.</p>


:::

</td>
</tr>
</tbody>
</table>

**Related information**

- [Configuring Virtual Analyzer Image Source](va-config-image-source.md "Configure a source SFTP server and add images to use with Virtual Analyzer image plans.")
