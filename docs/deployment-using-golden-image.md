---
slug: deployment-using-golden-image
title: Deployment using a golden image
---

Review information about deploying endpoint agents and sensors using system templates such as a golden image.

:::warning[Important]
- Read these instructions carefully. Cloning your own VDI machines causes agent IDs to be duplicated and prevents deployed agents from performing response actions.

- The Image Setup Tool only supports Windows agents.
:::

Trend Vision One Endpoint Security supports deploying agents and sensors using VDI templates, golden images, or custom image templates (Azure). The Endpoint Security app automatically detects the endpoint when a user signs in and adds the desktop to the Endpoint Inventory list. You can download the Image Setup Tool from Endpoint Inventory to help configure the golden image or template for the following supported scenarios:

- Physical desktops configured using a golden image

- Persistent virtual desktops

- Non-persistent virtual desktops

The Image Setup Tool is an accurate and efficient tool designed specifically to configure the agent settings for your golden image. Trend Micro recommends using the Image Setup Tool to avoid errors in deployment regardless of the deployment type. Non-persistent virtual desktops must use the Image Setup Tool to configure the virtual desktop image template.

Feature support for persistent and non-persistent virtual desktops is different from physical endpoints. Refer to the following table for more information.

**Feature Support**

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 40%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th><p>Feature</p></th>
<th><p>Persistent</p></th>
<th><p>Non-persistent</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Sensor agent upgrade (in-place)</p></td>
<td><p>Supported</p></td>
<td><p>Not supported</p></td>
</tr>
<tr>
<td rowspan="2"><p>Sensor agent upgrade (template)</p></td>
<td><p>Supported</p></td>
<td><p>Supported</p></td>
</tr>
<tr>
<td colspan="2">

:::warning[Important]

<p>This feature requires creating a snapshot of the source desktop. You must create the snapshot before you run the Image Setup Tool.</p>


:::

</td>
</tr>
<tr>
<td><p>Vulnerability Assessment</p></td>
<td><p>Supported</p></td>
<td><p>Not supported</p></td>
</tr>
<tr>
<td><p>Zero Trust Secure Access</p></td>
<td><p>Supported</p></td>
<td><p>Supported</p></td>
</tr>
</tbody>
</table>

Endpoint Security offers separate settings for physical/persistent desktops and non-persistent desktops. Virtual desktops which are not turned on regularly are automatically removed based on the agent settings. The time interval is set separately for persistent and non-persistent desktops. For information regarding inactive agent removal, see the following topics:

- [Global Settings](global-settings-endpoint-inventory.md). Global Settings only affects Sensor Only deployments.

Trend Micro has tested virtual desktop deployment in the following environments, and only offers support for the listed platforms.

**Tested Environments**

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr>
<th><p>Provider</p></th>
<th><p>Supported Platforms</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>VMware</p></td>
<td><ul>
<li><p>VMware Horizon 8.3</p></li>
</ul></td>
</tr>
<tr>
<td><p>Microsoft</p></td>
<td><ul>
<li><p>Azure Virtual Desktop</p></li>
<li><p>Windows 365</p></li>
</ul></td>
</tr>
<tr>
<td><p>Citrix</p></td>
<td><ul>
<li><p>Citrix Virtual Desktops</p></li>
<li><p>Citrix Virtual Apps</p></li>
</ul></td>
</tr>
</tbody>
</table>

:::tip
Trend Vision One supports multi-session VDI solutions. Trend Vision One does not change or limit the functionality of your virtual desktop operating systems. The Endpoint Security VDI solution works by creating unique device IDs for each virtual desktop after provisioning.
:::

**Related information**

- [Creating a golden image with the agent software](create-golden-agent-image.md "Prepare a template to easily deploy endpoint agents and sensors to cloned desktops on physical machines, as well as persistent and non-persistent virtual desktops.")
- [Updating the agent for golden image templates](updating-agent-for-templates.md "Update the agent program on virtual desktops created using a golden image.")
