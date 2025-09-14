---
slug: trend-vision-one-identity-integration-gcp
title: Google Cloud Identity integration
---

Manage access permissions to your Google Cloud Identity data for use in Trend Vision One apps.

The **Google Cloud Identity** screen (**Workflow and Automation → Third-Party Integration**) provides an overview of permissions that Trend Vision One apps require to access data or trigger policy enforcement actions in Google Cloud Identity. Each app or group of apps is associated with a set of permissions that must be enabled within Google Cloud Identity to facilitate integration with Trend Vision One.

The following table describes the actions available in the **Google Cloud Identity** screen.

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
<td><p>Grant permissions</p></td>
<td><p>Connect Trend Vision One to Google Cloud Identity and grant permission to allow associated apps to access your Google Cloud Identity data in one or multiple tenants.</p>


:::note

<p><strong>Mobile Security</strong> can access your Google Cloud Identity data in one tenant only.</p>


:::

</td>
</tr>
<tr>
<td><p>View permission details</p></td>
<td><p>Click <strong>Details</strong> in the <strong>Permissions</strong> column of each permission set to view specific permissions required.</p>
<p>For more information about how Google Cloud Identity data is used in associated apps, see <a href="trend-vision-one-gcp-id-usage-associated-apps">Google Cloud Identity data usage in associated apps</a>.</p></td>
</tr>
<tr>
<td><p>View permission granting status</p></td>
<td><p>Check whether permissions are granted successfully or any warning or error has occurred in the <strong>Status</strong> column of each permission set.</p>
<p>Permission granting statuses include:</p>
<ul>
<li><p><img src="./images/FullPermissionsIcon=GUID-20220831165959.webp" />: All permissions in the permission set are granted.</p></li>
<li><p><img src="./images/PartialPermissionsIcon=GUID-20220831170000.webp" />: All permissions in the permission set are granted, but certain associated app requires additional settings in Google Cloud Identity to access more user data for greater insights or take specific policy enforcement actions.</p></li>
<li><p><img src="./images/warning=44ee8f55-ca2d-46c7-88cb-b6e4a4a47f6d.webp" />: All permissions in the permission set are granted, but Google Cloud Identity requires new or additional permissions for complete functionality of the associated app.</p></li>
<li><p><img src="./images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp" />: An error occurred during or after permission granting.</p></li>
</ul>
<p>To view permission error or warning details and available actions, click the status icon or <strong>Details</strong> next to each status.</p></td>
</tr>
<tr>
<td><p>Revoke permissions</p></td>
<td><p>If you no longer want to integrate Google Cloud Identity with a previously associated app or group of apps, click <strong>Revoke permissions</strong>.</p>
<p>For more information, see <a href="trend-vision-one-revoking-gcp-id-permissions">Revoking Google Cloud Identity permissions</a>.</p></td>
</tr>
<tr>
<td><p>Sync Google Cloud Identity data</p></td>
<td><p><strong>Third-Party Integration</strong> regularly syncs permission-related data in all Google Cloud Identity tenants.</p>
<p>To manually synchronize data in a tenant, click the sync icon (<img src="./images/Sync_icon=bc994a2c-3a6c-419b-a584-a12efb14eacc.webp" />) for the corresponding tenant. After syncing, the data updatesfor all associated apps with permissions granted.</p>


:::note

<p>Manual synchronization is not applicable to <strong>Email Asset Inventory</strong> and <strong>Cyber Risk Exposure Management</strong>.</p>


:::

</td>
</tr>
</tbody>
</table>

**Related information**

- [Overview of access permissions to Google Cloud Identity data](access-permissions-google-cloud-id.md "View a list of permissions that must be enabled within Google Cloud Identity to facilitate integration with Trend Vision One.")
- [Google Cloud Identity data usage in associated apps](gcp-id-usage-associated-apps.md "Understand how Google Cloud Identity data is used in associated apps after you grant access permissions.")
- [Configuring Google Cloud Identity integration](gcp-identity-integration.md "Grant Trend Micro permission to access your Google Cloud Identity data in one or multiple tenants for use in Trend Vision One apps.")
- [Revoking Google Cloud Identity permissions](revoking-gcp-id-permissions.md "Disconnect Google Cloud Identity from Trend Vision One apps by revoking permissions granted to an app or group of apps.")
