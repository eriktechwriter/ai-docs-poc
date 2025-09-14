---
slug: trend-vision-one-using-regex-custom-filters
title: Use regex in custom filters
---

Create and import custom filters containing queries that match specified patterns with regular expressions (regex).

- Custom filters support regex in English and for the *string* data type.

- Escape (type a backslash before) these characters:

  - backslashes (\\
  - forward slashes (/)
  - quotation marks (")

- Custom filters do not support character class escape including Unicode and ASCII (American Standard Code for Information Interchange).

- For more information, see [Use regex in Search queries](using-regex-search-queries.md).

**Syntax examples**

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 34%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Example</p></th>
<th><p>Explanation</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Create custom filter</p></td>
<td><pre class="codeblock"><code>endpointHostName: /^(W|m)/</code></pre></td>
<td><ul>
<li><p>To use regex when creating a custom filter, enclose the pattern you want to query with forward slashes (/). Add a space before and after forward slashes to avoid syntax errors.</p></li>
<li><p>You can include up to 5 regex per query.</p></li>
</ul></td>
</tr>
<tr>
<td><p>Import custom filter</p></td>
<td><pre class="codeblock"><code># imported yaml file
detection:
    selection:
        CommandLine|re: &#39;([0-9]|[1-9][0-9]|[1-4][0-9]{2})&#39;
    </code></pre></td>
<td><ul>
<li><p>To use regex in imported custom filters, add <code>|re</code> after the field name.</p></li>
</ul></td>
</tr>
</tbody>
</table>
