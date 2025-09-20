---
slug: custom-filters
title: Custom filters
---

Create, import, and manage filters to detect events in your environment.

:::warning[Important]
You can have up to 50 custom filters.
:::

**Custom Filters** (**XDR Threat Investigation → Detection Model Management → Custom Filters**) allows you to import and create custom filters that Trend Vision One can use to detect events in your environment and enable custom models to trigger **Workbench** alerts.

The following table outlines the actions available on the **Custom Filters** tab.

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
<td><p>Add a custom filter</p></td>
<td><p>Click <strong>Add</strong> to <a href="trend-vision-one-creating-custom-filter">create a custom filter</a>.</p></td>
</tr>
<tr>
<td><p>Import custom filters</p></td>
<td><p>Click <strong>Import Filters</strong> (<img src="./images/import_icon=94824c33-cb60-46ee-a9fd-27abd38ff0ed.webp" />) to import YAML files containing custom filters.</p>
<p>Imported YAML files must follow the <a href="trend-vision-one-trend-micro-sigma-specification">Trend Micro Sigma specification</a>. Each YAML file must contain one filter only.</p></td>
</tr>
<tr>
<td><p>Export select custom filters</p></td>
<td><p>Select one or more filters, then click <strong>Export Selected Filters</strong> to export your filters into a .zip file containing a YAML file for each selected custom filter.</p>
<p>When the export completes, click <img src="./images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp" /> in the <strong>Export Custom Filters</strong> window to copy the password needed to open the .zip file.</p></td>
</tr>
<tr>
<td><p>Export all custom filters</p></td>
<td><p>Click <img src="./images/export_button=GUID-C683DEEE-C19C-484D-A5B1-4CA9D1794756=1=en-us=Low.webp" /> to export all your filters into a .zip file containing a YAML file for each custom filter.</p>
<p>When the export completes, click <img src="./images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp" /> in the <strong>Export Custom Filters</strong> window to copy the password needed to open the .zip file.</p></td>
</tr>
<tr>
<td><p>Filter custom filter data</p></td>
<td><p>Use <strong>Search</strong> and filters to locate specific custom filters.</p>
<ul>
<li><p><strong>Severity</strong>: The user-defined severity of the filter</p></li>
<li><p><strong>Event type</strong>: The event type of the filter</p></li>
<li><p><strong>Last updated</strong>: The period of time when the detection model was last updated</p></li>
<li><p><strong>Search</strong>: Provides partial matching for event ID, name, vendor, or query</p></li>
</ul></td>
</tr>
<tr>
<td><p>See the details of a filter</p></td>
<td><p>Click a filter name to view <a href="trend-vision-one-custom-filter-data">detailed information about the custom filter</a>.</p>


:::warning[Important]

<p>An information icon (<img src="./images/disabled=6e5bd66a-4b63-4096-867e-128dce2c0ebf.webp" />) next to the filter name indicates the filter is disabled due to excessive execution time, which may negatively affect associated models.</p>
<p><a href="trend-vision-one-creating-custom-filter">Edit the query</a> in the filter event settings to enable the filter.</p>


:::

</td>
</tr>
<tr>
<td><p>Edit a custom filter</p></td>
<td><p>Click <img src="./images/edit_icon=GUID-1F1D1164-5310-4D6D-ACD0-6049C86960AF.webp" /> to edit a custom filter.</p>


:::danger[Warning]

<p>Changing a custom filter affects how any model that uses the filter triggers custom <strong>Workbench</strong> alerts.</p>


:::

</td>
</tr>
<tr>
<td><p>Delete a custom filter</p></td>
<td><p>Click <img src="./images/trash_icon=GUID-47cf6867-6315-438e-8670-86ff36f22a28.webp" /> to delete a custom filter.</p>
<p>You can only delete custom filters that are not included in any model.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Create a custom filter](creating-custom-filter.md "Use a query string to create a custom filter that detects events in your environment and enable custom models to trigger Workbench alerts.")
- [Filter query format](custom-filter-query-format.md "Format your query string using the same query language as the Search app.")
- [Custom filter data](custom-filter-data.md)
- [Trend Micro Sigma specification](trend-micro-sigma-specification.md)
