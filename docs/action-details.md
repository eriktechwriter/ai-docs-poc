---
slug: trend-vision-one-action-details
title: Action details
---

View the details of an action node in a playbook execution and approve or reject actions.

In the **Actions** section of the [Execution details](execution-details.md) screen, clicking **Check details** in a listed node opens the **Action Details** screen, which tallies and lists the status of the action for each target of the selected node.

There are six possible action statuses:

- *Pending approval* (![](/images/pending_approval=7ad48a47-cb38-4fff-9dee-cceb77d9c5c1.webp)): Action requires approval to execute on the specified target

  :::note
  Pending actions expire if not approved within 24 hours of executing a playbook.
  :::

- *In progress...* (![](/images/in_progress=51020eba-8ed4-4fca-9bdd-73158770bb4d.webp)): Action executing on the specified target

- *Successful* (![](/images/successful=9cb8192f-f627-4fa2-b6dc-f77c09ac5d18.webp)): Action executed successfully

- *Unsuccessful* (![](/images/unsuccessful=78851f4e-24ea-4fde-bbe4-370e3d55f811.webp)): An error occurred executing the action on the specified target

- *Expired* (![](/images/expired=83F80B9E-6F02-4C2B-8E6C-6A69E8C78A93.webp)): Approval not given to execute the action on the specified target

- *No action taken* (![](/images/no_action_taken=AD5719B0-ABF6-4759-8A6B-510DFAF4B908.webp)): Action not executed because the specified endpoint is outside the asset visibility scope of the user who started the playbook execution

The following table outlines the actions available in the **Action Details** screen.

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
<td><p>Filter actions</p></td>
<td><p>Use the <strong>Search</strong> field and the <strong>Status</strong> drop-down list to locate specific actions</p>


:::note

<p>The <strong>Search</strong> field is only displayed if there are searchable targets.</p>


:::

</td>
</tr>
<tr>
<td><p>Approve or reject all pending actions</p></td>
<td><p>Click <strong>Approve/Reject → Approve All Pending</strong> or <strong>Approve/Reject → Reject All Pending</strong></p>


:::warning[Important]

<p>For customers that have updated to the <a href="trend-vision-one-update-foundation-services-release">Foundation Services release</a>, the ability to approve or reject actions for certain endpoints depends on the asset visibility scope of the current user.</p>


:::




:::note

<p><strong>Approve/Reject</strong> is only displayed if there are actions that require approval for execution.</p>


:::

</td>
</tr>
<tr>
<td><p>Approve or reject some pending actions</p></td>
<td><p>Select <strong>Pending approval</strong> actions and click <strong>Approve Selected</strong> or <strong>Reject Selected</strong></p></td>
</tr>
<tr>
<td><p>View all response actions taken on the target</p></td>
<td><p>Click the options button (<img src="./images/options_btn=068b1512-4150-419b-9cba-6569fc5fd92c.webp" />) associated with the target and click <strong>View All Actions on the Target</strong>.</p>
<p>You will be taken to the Response Management app, with the response tasks filtered by the target.</p>


:::note

<p>This feature is available only when the action initiated from Security Playbooks is <em>In progress...</em>, <em>Successful</em>, or <em>Unsuccessful</em> and the target is within your asset visibility scope.</p>


:::

</td>
</tr>
</tbody>
</table>
