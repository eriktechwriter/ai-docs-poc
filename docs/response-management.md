---
slug: response-management
title: Response Management
---

The **Response Management** app allows you to take actions and track the actions you have taken on your environment using the Trend Vision One console.

The following table outlines the actions available on the **Task List** tab in **Response Management** (**Workflow and Automation → Response Management**).

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
<td><p>Filter response data</p></td>
<td><p>Use the <strong>Search</strong> field and drop-down lists to locate specific task data.</p>
<ul>
<li><p><strong>Task status</strong>: The current status of the command sent to the managing server</p>


:::warning[Important]

<p>The <em>Task status</em> indicates whether the managing server was able to successfully receive and execute the command. If the command target is a Security Agent, the <em>Task status</em> does not necessarily indicate whether the target Security Agent or object successfully executed the command.</p>


:::

</li>
<li><p><strong>Action</strong>: The command sent to the target</p>
<p>For more information, see <a href="trend-vision-one-response-actions-section">Response actions</a>.</p></li>
<li><p><strong>Target type</strong>: The type of target object</p></li>
<li><p><strong>Created by</strong>: The user that created the task</p></li>
<li><p><strong>Search</strong>: Provides partial matching for the <em>Task ID</em> and <em>Target</em> objects</p></li>
</ul></td>
</tr>
<tr>
<td><p>View task details</p></td>
<td><p>View the table to check the status of commands sent to targets.</p>
<p>For more information, see <a href="trend-vision-one-response-data">Response data</a>.</p></td>
</tr>
<tr>
<td><p>Approve or reject tasks</p></td>
<td><p>Select and approve or reject the tasks.</p>
<p>For more information, see <a href="trend-vision-one-approval-specified-actions">Require approval for specified response actions</a>.</p></td>
</tr>
<tr>
<td><p>Take additional action on a task</p></td>
<td><p>Depending on the command sent to a target, you may be able to take secondary or follow-up actions.</p>
<p>Select the check box next to a task to access additional action buttons above the table (if applicable).</p>
<p>For more information, see <a href="trend-vision-one-response-actions-section">Response actions</a>.</p></td>
</tr>
</tbody>
</table>

The following table outlines the actions available on the **Response Scripts** tab in **Response Management** (**Workflow and Automation → Response Management**).

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
<td><p>Add custom scripts</p></td>
<td><p>Under <strong>Custom Scripts</strong>, click <strong>Add script</strong> to upload custom Bash or PowerShell script files.</p>
<p>For more information, see <a href="trend-vision-one-run-remote-custom-script-task">Run Remote Custom Script task</a>.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Response actions](response-actions-section.md "Object-specific actions allow you to directly respond to threats without leaving the Trend Vision One console.")
- [Response data](response-data.md "Trend Vision One tracks and provides feedback on the actions taken on endpoints, email messages, and network events.")
- [Response Management settings](response-management-settings.md "Enable, disable, and configure settings for Response Management actions.")
