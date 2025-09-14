---
slug: trend-vision-one-suspicious-object-list
title: Suspicious Object List
---

Trend Vision One consolidates suspicious object information from different sources.

A suspicious object is a known malicious or potentially malicious domain, file SHA-1, file SHA-256, IP address, sender address, or URL.

You can add suspicious objects to the Suspicious Object List manually or though extraction from third-party intelligence. In addition, Sandbox Analysis adds suspicious objects to the list after determining possible threats for consolidation and synchronization. Sandbox Analysis then assigns risk level based on analysis results.

Trend Vision One can also connect to different products and send the Suspicious Object List to the connected products for detection. The connected products then apply the specified actions from Suspicious Object Management.

:::note
- For suspicious objects added manually or through third-party intelligence, the maximum limit is 10,000 for each object type.

- For suspicious objects added by Sandbox Analysis, the maximum limit is 25,000 for each object type.

- When the maximum number of suspicious objects is exceeded, the objects that are closest to expiration are removed.
:::

The following table outlines the actions available on the **Suspicious Object List** tab.

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
<td><p>Filter suspicious object data</p></td>
<td><p>Use the search field or the following drop-down lists to search specific object data:</p>
<ul>
<li><p><strong>Last updated</strong>: The time when a suspicious object was last updated</p></li>
<li><p><strong>Object type</strong>: The suspicious object type, such as domains, file SHA-1, file SHA-256, IP addresses, sender addresses, or URLs</p></li>
<li><p><strong>Source</strong>: The source of a suspicious object</p></li>
</ul></td>
</tr>
<tr>
<td><p>Add or import suspicious objects</p></td>
<td><p>Click <strong>Add</strong> to open the <strong>Add Suspicious Object</strong> screen.</p>
<p>For more information, see <a href="trend-vision-one-add-import-suspicious-objects">Adding or importing suspicious objects</a>.</p></td>
</tr>
<tr>
<td><p>View or edit suspicious object details</p></td>
<td><p>Click any object name to open the <strong>Suspicious Object Details</strong> panel.</p></td>
</tr>
<tr>
<td><p>Manage suspicious objects</p></td>
<td><p>Manage one or more suspicious objects. Options include:</p>
<ul>
<li><p>Delete objects: Select suspicious objects and click <strong>Delete</strong>.</p></li>
<li><p>Change the applied action: Select suspicious objects, click <strong>Change Action</strong>, and choose <strong>Log</strong> or <strong>Block/Quarantine</strong>.</p></li>
<li><p>Change expiration settings: Select suspicious objects and click <strong>Set to Never Expire</strong>.</p></li>
<li><p>Add one or multiple suspicious objects as exceptions: Click the options icon (<img src="./images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp" />) on an object and click <strong>Add to Exception List</strong>, or select one or more objects and click <strong>Add to Exception List</strong>.</p></li>
<li><p>Search a suspicious object: Click the options icon (<img src="./images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp" />) on the object and click <strong>New Search: match field and value</strong>.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Configure default settings</p></td>
<td><p>Click <img src="./images/Global_Settings=GUID-1E10BFBD-3AFF-46DD-B853-0438EC2FD3F9.webp" /> to specify the default actions to take on different types of objects at each risk level and the expiration settings for the objects.</p>


:::note

<p>Default actions apply to suspicious objects added by Sandbox Analysis. For objects from other sources, default settings apply if you have not specified action or expiration settings.</p>


:::

</td>
</tr>
<tr>
<td><p>Export object data</p></td>
<td><p>Click <img src="./images/export_button=GUID-C683DEEE-C19C-484D-A5B1-4CA9D1794756=1=en-us=Low.webp" /> to export the suspicious object data to a CSV file.</p></td>
</tr>
<tr>
<td><p>Refresh object data</p></td>
<td><p>Click <img src="./images/Refresh_icon_TI=GUID-8673A32A-9991-4025-8937-34633E90D9E1=1=en-us=Low.webp" /> to display the latest suspicious object data.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Adding or importing suspicious objects](add-import-suspicious-objects.md "You can directly add suspicious objects or import suspicious objects contained in CSV, OpenIOC, and STIX files to the Suspicious Object List.")
- [Suspicious object actions](suspicious-object-actions.md "You can specify actions for connected products to take after detecting specific suspicious objects.")
