---
slug: trend-vision-one-network-resources
title: Network Resources
---

Define your network topography to help your Network Sensors better detect threats and monitor critical resources.

**Network Resources** provides a set of lists you can use to define your network topography. Using these lists allows your connected appliances to better identify the source of threats and recognize which critical assets in your environment require additional monitoring. You can add network resources to each list, edit the lists, import files to configure each list, or export the lists to edit them.

You can create a Network Resource profile to define more than one set of lists. Apply profiles to your network asset groups to allow more flexible monitoring of different networks or locations. To create network asset groups, see [Network Inventory](network-inventory.md).

If you have not created a network resource profile, accessing Network Resources opens the Base Profile. The Base Profile is the default resource list set applied to any Network Sensor not assigned a resource profile. To create a profile, click **Create Network Resource Profile**.

After you have created a Network Resource profile, accessing Network Resources opens the Network Resource Profile List.

The following table details which actions you can take from the Network Resources screen.

:::warning[Important]
If your Trend Vision One account has limited visibility, you can only see assets you have permission to view. Editing a Network Resource profile might affect assets that are not visible to your account. Talk to your system administrator for assistance.
:::

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Screen</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Create a new Network Resource profile</p></td>
<td><p>Base Profile, Resource Profile List</p></td>
<td><p>Create a new set of Network Resource lists to apply to your connected Network Sensors</p>
<p>Click <strong>Create Network Resource Profile</strong> to get started.</p></td>
</tr>
<tr>
<td><p>Toggle central management of connected Deep Discovery Inspector appliances</p></td>
<td><p>Base Profile, Resource Profile List</p></td>
<td><p>Allow Trend Vision One to manage the resource lists in <strong>Network Assets</strong> on the Deep Discovery Inspector appliance</p>
<p>Select <strong>Central management of Deep Discovery Inspector resources</strong> to enable management.</p>


:::warning[Important]

<p>Enabling the feature overwrites the settings on all connected Deep Discovery Inspector appliances. Before enabling central management of Deep Discovery Inspector resources, Trend Micro recommends you export the Network Assets lists and settings in Deep Discovery Inspector to backup your configuration.</p>
<p>Overwritten data is permanently lost and cannot be recovered without backup files.</p>


:::

</td>
</tr>
<tr>
<td><p>Manage Network Resource Lists</p></td>
<td><p>Base Profile</p></td>
<td><p>Manage the objects added to the Network Resource Lists in the Base Profile</p>
<p>The available actions depend on which list you view.</p></td>
</tr>
<tr>
<td><p>Configure Network Resource profiles</p></td>
<td><p>Resource Profile List</p></td>
<td><p>Define the Network Resource Lists in a Network Resource profile</p>
<p>Click the profile name to access the profile screen to edit the Network Resource Lists. For more information, see <a href="trend-vision-one-network-resource-lists">Network Resource Lists</a>.</p></td>
</tr>
<tr>
<td>Manage Network Resource profiles</td>
<td><p>Resource Profile List</p></td>
<td><p>Edit or delete a Network Resource profile</p>
<p>Click the edit icon (<img src="./images/editIcon=71125946-2a6e-4cfa-ae3f-072292c400ae.webp" />) to change the profile name or assign network asset groups. Click the delete icon (<img src="./images/garbage_can_icon=GUID-20230329141313.webp" />) to remove the profile. You can also select profiles to delete.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Network Resource Lists](network-resource-lists.md "Configure your Network Resource Lists to define your network topography for your connected Network Sensors.")
