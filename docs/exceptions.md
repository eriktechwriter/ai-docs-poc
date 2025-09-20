---
slug: exceptions
title: Exceptions
---

Exceptions exclude specified objects and events from detection models to help reduce false positives and alert fatigue.

There are two types of exceptions:

- [Custom exceptions](adding-custom-exception.md): Originate from **Detection Model Management**. Custom exceptions use target, event source, and match criteria to define the objects and events to exclude from detections.

- [Context menu exceptions](adding-exception-context-menu.md): Originate from the context menu in **Workbench** and **Observed Attack Techniques**. Context menu exceptions use the detection model filter and match criteria to define the objects and events to exclude from detections.

Exceptions contain the following information:

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Column</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Exception ID</p></td>
<td><p>The unique identifier of the exception</p></td>
</tr>
<tr>
<td><p>Name</p></td>
<td><p>The name of the exception</p>


:::note

<p>Context menu exceptions do not have names.</p>


:::

</td>
</tr>
<tr>
<td><p>Targets</p></td>
<td><p>The location of the objects or events you want to exclude from detections</p>
<p>For example, you can exclude objects on a specific endpoint using the globally unique identifier (GUID) of the endpoint.</p></td>
</tr>
<tr>
<td><p>Event source / Filter</p></td>
<td><ul>
<li><p>Event source: The types of events you want to exclude from detections</p>
<p>For example, you can exclude file creation events on endpoints using the <strong>ENDPOINT_ACTIVITY</strong> event type, the <strong>TELEMETRY_FILE</strong> event ID, and the <strong>TELEMETRY_FILE_CREATE</strong> event sub-ID.</p></li>
<li><p>Filter: The detection model filter that identified the object as a threat indicator (context menu exceptions)</p></li>
</ul></td>
</tr>
<tr>
<td><p>Match criteria</p></td>
<td><p>The objects or events excluded from detections</p>
<p>For example, you can exclude a specific file attachment using the <strong>file_sha1</strong> type, the <strong>attachmentFileHash</strong> field, and the SHA-1 of the file attachment.</p></td>
</tr>
<tr>
<td><p>Description</p></td>
<td><p>The additional information about the exception</p></td>
</tr>
<tr>
<td><p>Last updated</p></td>
<td><p>The date and time the exception was last updated</p></td>
</tr>
<tr>
<td><p>Created/Updated by</p></td>
<td><p>The user who created or last updated the exception</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Add a custom exception](adding-custom-exception.md "Create a custom exception to exclude specified objects or events from future detections.")
- [Add an exception from the context menu](adding-exception-context-menu.md "During alert investigation, you can exclude objects from future detections.")
- [Edit a custom exception](editing-custom-exception.md "Edit the settings of a custom exception.")
