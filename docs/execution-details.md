---
slug: trend-vision-one-execution-details
title: Execution details
---

View the details of a playbook execution.

In the **Execution Results** tab of **Security Playbooks**, clicking an execution ID provides details about the playbook execution and a visual representation of the playbook configuration.

The **Execution Details** section consists of the Workbench alert that triggered the playbook, the current status of the execution, the time and date when the execution was last updated, and a summary of the triggered action nodes.

There are six possible action node statuses:

- *Pending approval* (![](/images/pending_approval=7ad48a47-cb38-4fff-9dee-cceb77d9c5c1.webp)): Actions require approval to be performed

  :::note
  Pending actions expire if not approved within 24 hours of executing a playbook.
  :::

- *In progress...* (![](/images/in_progress=51020eba-8ed4-4fca-9bdd-73158770bb4d.webp)): Actions executing

- *Successful* (![](/images/successful=9cb8192f-f627-4fa2-b6dc-f77c09ac5d18.webp)): Actions executed successfully

- *Partially successful* (![](/images/partially_successful=20230317094545.webp)): Some actions executed successfully

- *Unsuccessful* (![](/images/unsuccessful=78851f4e-24ea-4fde-bbe4-370e3d55f811.webp)): An error occurred executing actions or pending approvals were not handled within 24 hours of executing the playbook

- *Queued* (![](/images/queued=3df61664-4178-4a69-91d6-3d269379ee0c.webp)): Actions queued

The **Action** section provides a hierarchical list of the action nodes that were triggered and their current status. The following table outlines the actions available within the section.

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
<td><p>Focus on a node</p></td>
<td><p>Click an action node in the list to focus the playbook visualization on the selected node.</p></td>
</tr>
<tr>
<td><p>Refresh the list</p></td>
<td><p>Click the <strong>Refresh list</strong> icon (<img src="./images/refresh_list=D76B2D4B-215D-4020-8E9E-1350944BD0D5.webp" />) to update the status of all listed action nodes.</p></td>
</tr>
<tr>
<td><p>Examine an action node</p></td>
<td><p>Click <strong>Check details</strong> to open the <a href="trend-vision-one-action-details">Action details</a> screen, which tallies and lists the status for each target of the selected node.</p>


:::note

<p><strong>Check details</strong> is only displayed if the selected node is configured to execute actions on targets.</p>


:::

</td>
</tr>
</tbody>
</table>

**Related information**

- [Action details](action-details.md "View the details of an action node in a playbook execution and approve or reject actions.")
