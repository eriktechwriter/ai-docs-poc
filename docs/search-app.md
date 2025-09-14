---
slug: trend-vision-one-search-app
title: Search app
---

Construct powerful query strings to pinpoint the data or objects in your environment that you want to examine.

The Search app provides various search methods and filters along with a query language to efficiently identify, categorize, and retrieve search results. You can automate the search process by [saving search queries, configuring the Watchlist](saved-queries.md), and [configuring email notifications](notifications.md) when you find new data.

The following table outlines the actions available in the **Search** app (**XDR Threat Investigation → Search**).

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
<td><p>Enable the new Search</p></td>
<td><p>Turn on the toggle to use the new Search to query a variety of data sources for expanded search results.</p></td>
</tr>
<tr>
<td><p>Search for predefined threat hunting queries</p></td>
<td><p>Click <strong>Threat Hunting Queries</strong> to <a href="trend-vision-one-executing-threat-hunting-queries">search for predefined threat hunting queries</a> from Trend Micro and Cyborg Security based on known threats to aid you in constructing powerful search queries in your own environment.</p></td>
</tr>
<tr>
<td><p>View search history</p></td>
<td><p>Click <strong>Query History</strong> to display a list of previous search queries.</p>
<p>Click search (<img src="./images/search=GUID-6FF43673-2DC5-4AF4-9DB1-22D4BB64FDDE=1=en-us=Low.webp" />) to load criteria from a previous search or begin a new search. Trend Micro recommends saving search criteria that you may want to use for future queries.</p></td>
</tr>
<tr>
<td><p>Perform a search</p></td>
<td><p>Select a search method, specify criteria, and click <strong>Search</strong> to search for data.</p>
<ul>
<li><p><strong>General</strong>: Allows you to search all data from your connected products using normalized search criteria</p>


:::tip

<p>Try different search criteria and options to locate the exact data you want.</p>


:::

</li>
<li><p><strong>Advanced</strong>: Allows you to select the exact source of the data that you want to search</p>


:::note

<ul>
<li><p>Some search methods have prerequisite settings that enable the Trend Vision One console to access data necessary for search. Hover over each data source item to view the instructions.</p></li>
<li><p>The search field criteria that automatically populates, are a direct representation of the database fields for the chosen data source.</p></li>
</ul>


:::

</li>
</ul></td>
</tr>
<tr>
<td><p>Chat with Trend Companion</p></td>
<td><p>Click <img src="./images/newCompanionIcon=GUID-20240819112525.webp" /> to start a conversation with Trend Companion.</p>
<p>Begin your prompts with "Search for" or "Search in" to have Trend Companion create search queries.</p>
<ul>
<li><p>Click <strong>Add to Search Query</strong> to add the generated search query to the search box.</p></li>
<li><p>Trend Companion automatically selects the suggested search method when adding queries to the search box.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Save search query</p></td>
<td><p>After performing a search, click <strong>Save Query</strong>, specify a name, and click <strong>Save</strong> to save the current search query.</p>
<ul>
<li><p>Saved queries only contain search criteria, not search results.</p></li>
<li><p>You can only have up to 200 saved queries.</p></li>
</ul></td>
</tr>
<tr>
<td><p>View saved search queries</p></td>
<td><p>Click <strong>Saved Queries</strong> to view <a href="trend-vision-one-saved-queries">saved queries</a>.</p></td>
</tr>
<tr>
<td><p>View queries in the Watchlist</p></td>
<td><p>Click <img src="./images/watchlist_button=ed41c963-d16b-4c34-8e1a-7b5926521ac7.webp" /> to see all saved queries included in the <a href="trend-vision-one-saved-queries">Watchlist</a>.</p></td>
</tr>
<tr>
<td><p>Select or modify search result views</p></td>
<td><p>Click <strong>View</strong> to select how the search results are displayed.</p>
<p>For more information, see <a href="trend-vision-one-custom-view-search-results">Create a custom view for search results</a>.</p></td>
</tr>
<tr>
<td><p>Import search views</p></td>
<td><p>Click <strong>View</strong> and select <strong>Import Views</strong> to import one or more JSON files containing search views.</p></td>
</tr>
<tr>
<td><p>Export search views</p></td>
<td><p>Click <img src="./images/export_button=GUID-C683DEEE-C19C-484D-A5B1-4CA9D1794756=1=en-us=Low.webp" /> to export the search view to a JSON file.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Search for and execute threat-hunting queries](executing-threat-hunting-queries.md "Search for predefined threat-hunting queries from Trend Micro and Cyborg Security based on known threats, tactics, and techniques to aid you in constructing powerful search queries in your own environment.")
- [Search actions from the context menu](search-actions-context-menu.md "The Trend Vision One context menu provides additional search options that you can access during an investigation after encountering objects or data that you want to further explore.")
- [Search syntax](search-syntax.md "The Search app allows you to query data and detections.")
- [Saved queries](saved-queries.md "Save queries to quickly find data, share search criteria with your team, and add queries to the Watchlist.")
- [Search results](search-results.md "Learn about the actions available for your search results.")
- [Search method data sources](search-method-data-sources.md "Connect the required data sources for various search methods.")
