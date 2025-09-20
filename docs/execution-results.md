---
slug: execution-results
title: Execution results
---

Check overall execution status and execution results of playbooks.

After a security playbook executes, you can view the execution results and any pending actions on the **Execution Results** tab. Be aware that these results will only be retained for a period of 180 days.

:::warning[Important]
For customers that have updated to the [Foundation Services release](update-foundation-services-release.md), execution results might not be visible if there are no endpoints within the asset visibility scope of the user who executed the playbook.
:::

The following table outlines the actions available on the **Execution Results** tab.

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
<td><p>Filter executed playbook data</p></td>
<td><p>Use the <strong>Search</strong> field and drop-down lists to locate specific task data.</p>
<ul>
<li><p><strong>Type</strong>: The current status of the executed playbook</p>
<p>There are six possible playbook execution statuses:</p>
<ul>
<li><p><em>Pending approval</em> (<img src="./images/pending_approval=7ad48a47-cb38-4fff-9dee-cceb77d9c5c1.webp" />) (if applicable): Some playbook actions waiting for approval</p></li>
<li><p><em>In progress...</em> (<img src="./images/in_progress=51020eba-8ed4-4fca-9bdd-73158770bb4d.webp" />): Playbook executing</p></li>
<li><p><em>Successful</em> (<img src="./images/successful=9cb8192f-f627-4fa2-b6dc-f77c09ac5d18.webp" />): All playbook actions executed successfully</p></li>
<li><p><em>Partially successful</em> (<img src="./images/partially_successful=20230317094545.webp" />): Some playbook actions executed successfully</p></li>
<li><p><em>Unsuccessful</em> (<img src="./images/unsuccessful=78851f4e-24ea-4fde-bbe4-370e3d55f811.webp" />): An error or time-out occurred, or a pending action was not approved within 24 hours of executing the playbook</p></li>
<li><p><em>Queued</em> (<img src="./images/queued=3df61664-4178-4a69-91d6-3d269379ee0c.webp" />): Playbook queued</p></li>
</ul></li>
<li><p><strong>Created</strong>: The time when the playbook was created</p></li>
<li><p><strong>Search</strong>: Provides partial matching for the <em>Execution ID</em> and <em>Playbook</em> fields</p></li>
</ul></td>
</tr>
<tr>
<td><p>Approve or reject pending actions</p></td>
<td><p>Click the number under <strong>Actions required</strong> to approve or reject pending actions in the playbook.</p>


:::note

<p>Pending actions expire if not approved within 24 hours of executing a playbook.</p>


:::

</td>
</tr>
<tr>
<td><p>View execution details of a user-defined playbook</p></td>
<td><p>Click the execution ID to open the <a href="trend-vision-one-execution-details">Execution details</a> screen, which provides detailed information about the playbook execution, including the status of each triggered action node.</p></td>
</tr>
<tr>
<td><p>Edit the playbook</p></td>
<td><p>Click the <strong>Edit playbook</strong> icon (<img src="./images/edit=6bab3fa2-ec74-4134-97fb-784f64900103.webp" />) to edit the playbook.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Execution details](execution-details.md "View the details of a playbook execution.")
