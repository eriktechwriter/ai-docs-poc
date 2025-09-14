---
slug: trend-vision-one-search-identifier-element
title: The search-identifier element
---

`search-identifier` elements define the specific patterns Trend Vision One uses to detect events. A filter can contain up to 19 `search-identifier` elements.

- Components

- Guidelines

- Special field values

### Components {#components}

``` codeblock
{search-identifier key}:
    {List or object}
    {List or object}
    ....
    {List or object}
```

The following table outlines the components of search-identifier elements:

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Component</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Search-identifier key</p></td>
<td><p>Key of the search-identifier.</p></td>
</tr>
<tr>
<td><p>List</p></td>
<td><p>List of strings that the filter attempts to localize in the detection logs</p>
<p>All elements in a list are matched using the <code>OR</code> operator. Use the field names defined in the <a href="trend-vision-one-search-method-data-sources">search method data sources</a> to create lists.</p>
<pre class="codeblock"><code>eventSub:
    eventSubId:
        - TELEMETRY_CONNECTION_CONNECT_OUTBOUND
        - TELEMETRY_CONNECTION_CONNECT_INBOUND
       </code></pre></td>
</tr>
<tr>
<td>Object</td>
<td><p>Objects consist of key-value pairs. All elements in an object are matched using the <code>AND</code> operator.</p>
<p>Use the field names defined in the <a href="trend-vision-one-search-method-data-sources">search method data sources</a> to create objects.</p>
<pre class="codeblock"><code>detection:
    selection:
        dpt:
            - 5650
            - 5655
        processCmd: &#39;*-run_agent*&#39;
    condition: selection
       </code></pre></td>
</tr>
</tbody>
</table>

### Guidelines {#guidelines}

The following table outlines the guidelines to create search-identifier elements.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr>
<th><p>Section</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Strings</p></td>
<td><ul>
<li><p>Strings are case-insensitive.</p></li>
<li><p>Enclose strings with apostrophes (<code>'</code>).</p>
<p>Example: <code>eventName: 'GetParameter'</code></p></li>
<li><p>Use backslashes (<code>\</code>) to escape strings.</p></li>
<li><p>Escaping strings is only needed for the following characters:</p>
<ul>
<li><p>Apostrophes (<code>'</code>)</p>
<p>Example: <code>message: 'I don\'t know.'</code></p></li>
<li><p>Asterisks (<code>*</code>) when used as regular characters</p>
<p>Example: <code>string: '5 \* 2 = 10'</code></p></li>
<li><p>Backslashes (<code>\</code>) when used as regular characters</p>
<p>Example: <code>path: 'C:\\Windows\\notepad.exe'</code></p></li>
<li><p>Question marks (<code>?</code>)</p>
<p>Example: <code>url: 'https://www.google.com/search\?q=weather'</code></p></li>
</ul></li>
</ul></td>
</tr>
<tr>
<td><p>Wildcards</p></td>
<td><ul>
<li><p>Use an asterisk (<code>*</code>) as a wildcard for unknown parts of the string. Do not use multiple asterisks (<code>**</code>) as wildcards.</p></li>
<li><p>The <a href="trend-vision-one-trend-micro-sigma-specification">Trend Micro Sigma specification</a> allows the following special modifiers for searching strings:</p>
<ul>
<li><p>Check if a string ends with the specified characters: <code>*string</code></p></li>
<li><p>Check if a string starts with the specified characters: <code>string*</code></p></li>
<li><p>Check if a string contains the specified characters: <code>*string*</code></p></li>
</ul></li>
</ul>
<p><a href="trend-vision-one-search-method-data-sources">Fields</a> marked as <code>dynamic</code> only support the special modifier <code>*string*</code>. Dynamic fields do not support exact match strings.</p></td>
</tr>
<tr>
<td><p>Numeric values</p></td>
<td><p>Numeric values do not require apostrophes.</p></td>
</tr>
<tr>
<td><p>Value modifiers</p></td>
<td><p>Value modifiers are not allowed in custom filters.</p></td>
</tr>
</tbody>
</table>

### Special Field Values {#special-field-values}

- Avoid using the following special field values:

  - Empty values (`''`, `null`)

  - Single character wildcards (`?`)

- For the `eventId` and `eventSubId` fields, use the data field mapping value instead of the numeric value.

  ``` codeblock
  eventSubId: TELEMETRY_PROCESS_OPEN # Instead of eventSubId: 1
  ```
