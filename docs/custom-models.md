---
slug: trend-vision-one-custom-models
title: Custom models
---

Trigger Workbench alerts based on user-defined event filters.

**Custom Models** (**XDR Threat Investigation → Detection Model Management → Custom Models**) lists your organization's custom detection models.

Custom models consist of:

- Basic information
- A user-defined custom filter
- The number of events required to trigger an alert
- How often to apply the filter query to activity data
- Other parameters

The following table outlines the actions available on **Custom Models**:

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
<td><p>Add a custom model</p></td>
<td><p>Click <strong>Add</strong> to <a href="trend-vision-one-configuring-custom-model">create a custom model</a>.</p>


:::warning[Important]

<p>You can create a maximum of 50 custom models.</p>


:::

</td>
</tr>
<tr>
<td><p>Filter custom models</p></td>
<td><p>Use the <strong>Search</strong> filters to locate specific detection models.</p>
<ul>
<li><p><strong>Severity</strong>: The severity level of the detection model</p></li>
<li><p><strong>Status</strong>: The status of the detection model</p></li>
<li><p><strong>Last updated</strong>: The period of time when the detection model was last updated</p></li>
<li><p><strong>Search</strong>: Provides partial matching for the model ID, name, or filters</p></li>
</ul></td>
</tr>
<tr>
<td><p>Enable or disable a model</p></td>
<td><p>Toggle to enable or disable the detection model</p></td>
</tr>
<tr>
<td><p>Edit a custom model</p></td>
<td><p>Click the edit icon (<img src="./images/edit_icon=GUID-1F1D1164-5310-4D6D-ACD0-6049C86960AF.webp" />) for the model.</p>


:::warning[Important]

<p>Workbench alerts previously triggered by a custom model do not reflect changes to the model's name or description.</p>


:::

</td>
</tr>
<tr>
<td><p>Delete custom models</p></td>
<td><p>Select the models and click <strong>Delete</strong>.</p>
<p>Deleting a custom model does not delete the custom filter used by the model.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Custom model data](custom-model-data.md)
- [Configure a custom model](configuring-custom-model.md "Create a custom model to define the specific events that trigger Workbench alerts.")
