---
slug: trend-vision-one-using-regex-search-queries
title: Use regex in Search queries
---

Create Search queries that match specified patterns with regular expressions (regex).

The Search app allows up to five regex per query. To use regex, surround the pattern you want to query with forward slashes (/):

``` codeblock
endpointHostName: /^(W|m)/
```

- Search supports regex only for the *string* data type.

- General Search does not support regex .

- Use full match to search a file path. Using partial match for file path search generates an error.

- Add a space before and after forward slashes to avoid syntax errors.

**Syntax examples**

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 11%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr>
<th><p>Query</p></th>
<th><p>Result</p></th>
<th><p>Explanation</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><pre class="codeblock"><code>/^(this is a regex)/</code></pre></td>
<td><p>Error</p></td>
<td><p>Regex queries must include the field name. Free search is not supported.</p></td>
</tr>
<tr>
<td><pre class="codeblock"><code>endpointHostName: /^(W|m)/</code></pre></td>
<td><p>Returns results</p></td>
<td><p>Query has correct syntax.</p></td>
</tr>
<tr>
<td><pre class="codeblock"><code>filePath: /etc/pwd/config/aaa</code></pre></td>
<td><p>Error</p></td>
<td><p>Use a backslash (\) to escape each forward slash to avoid syntax errors.</p>
<pre class="codeblock"><code>filePath: /\/etc\/pwd\/config\/aaa/</code></pre>
<p>Use quotation marks and wildcards to avoid syntax errors.</p>
<pre class="codeblock"><code>filePath: &quot;*/etc/pwd/config/aaa*&quot;</code></pre>
<p>This example is not regex.</p></td>
</tr>
<tr>
<td><pre class="codeblock"><code>filePath: /\/etc\/pwd\/config\/aaa/</code></pre></td>
<td>Returns results</td>
<td><p>Query has backslashes (\) to escape forward slashes.</p></td>
</tr>
</tbody>
</table>
