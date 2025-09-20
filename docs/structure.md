---
slug: structure
title: Structure
---

The structure of filters is as follows:

<figure>
<pre class="codeblock"><code>title
description [optional]
tags [optional]
logsource
   category
   product [optional]
   definition [optional]
detection
   {search-identifier}
      {List or object}
   ...
   condition
level
taxonomy</code></pre>
</figure>

The following table outlines the components supported in the Trend Micro Sigma specification.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 80%" />
</colgroup>
<thead>
<tr>
<th><p>Component</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><code>title</code></p></td>
<td><p>The brief description of the filter (max. 256 characters)</p></td>
</tr>
<tr>
<td><p><code>description</code></p></td>
<td><p>The detailed description of the filter (max. 1024 characters)</p></td>
</tr>
<tr>
<td><p><code>tags</code></p></td>
<td><p>The tags to categorize a filter</p>
<ul>
<li><p>A filter can have up to 10 tags.</p></li>
<li><p>A tag can be up to 64 characters long.</p></li>
<li><p>Tags cannot have spaces.</p></li>
<li><p>Tags can have namespaces. Use dots (<code>.</code>) to separate the namespaces.</p>
<p>Example:</p>
<p><code>network.attack.123</code>.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>logsource</code></p></td>
<td><p>The origin or type of data which the filter applies to</p>
<p>This section consists of three attributes:</p>
<ul>
<li><em>Category</em>: The data source</li>
<li><em>Product</em>: The platform that collects the information</li>
<li><em>Definition</em>: The event type</li>
</ul></td>
</tr>
<tr>
<td><p><code>category</code></p></td>
<td><p>The type of data the filter queries</p>
<p>Supported values:</p>
<ul>
<li><code>CLOUD_ACTIVITY</code></li>
<li><code>CONTAINER_ACTIVITY</code></li>
<li><code>DETECTION</code></li>
<li><code>ENDPOINT_ACTIVITY</code></li>
<li><code>MESSAGE_ACTIVITY</code></li>
<li><code>MOBILE_ACTIVITY</code></li>
<li><code>NETWORK_ACTIVITY</code></li>
<li><code>IDENTITY_ACTIVITY</code></li>
<li><code>THIRD_PARTY_LOG</code></li>
</ul></td>
</tr>
<tr>
<td><p><code>product</code></p></td>
<td><p>The platforms from which the data originates</p>
<p>Supported values:</p>
<ul>
<li><p><code>ENDPOINT_ACTIVITY</code>: <code>windows</code>, <code>linux</code>, <code>mac</code>, <code>unix</code></p></li>
<li><p><code>MOBILE_ACTIVITY</code>: <code>android</code>, <code>ios</code>, <code>chromeos</code></p></li>
<li><p><code>CLOUD_ACTIVITY</code>: <code>aws</code></p></li>
<li><p><code>CONTAINER_ACTIVITY</code>: <code>linux</code></p></li>
<li><p><code>THIRD_PARTY_LOG</code>: Specify the third-party log vendors to detect corresponding third-party log events.</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>definition</code></p></td>
<td><p><a href="trend-vision-one-available-data-subtypes">The specific subtype of data</a> the filter queries</p>


:::danger[Warning]

<p>To match <code>AMAZON_SECURITY_LAKE</code> events, you must specify the definition as <code>AMAZON_SECURITY_LAKE</code>.</p>


:::

</td>
</tr>
<tr>
<td><p><code>detection</code></p></td>
<td><p>Consists of multiple <code>search-identifier</code> elements and a <code>condition</code> element</p>
<p>A filter can have up to 19 <code>search-identifier</code> elements.</p></td>
</tr>
<tr>
<td><p><a href="trend-vision-one-search-identifier-element">search-identifier</a></p></td>
<td><p>The specific patterns to detect events</p></td>
</tr>
<tr>
<td><p><code>condition</code></p></td>
<td><p>The logical operators and symbols that define how Trend Vision One processes the <code>search-identifier</code> elements</p>
<p>Supported operators:</p>
<ul>
<li><p>Logical operators AND/OR</p>
<p><code>keyword1 or keyword2</code></p>
<p><code>keyword1 and keyword2</code></p></li>
<li><p>Negation with NOT</p>
<p><code>keyword and not keyword 2</code></p></li>
<li><p>Select a single (<code>1 of them</code>) or all (<code>all of them</code>) of the defined search-identifier elements.</p></li>
<li><p>Select 1 or all of the specified elements.</p>
<p><code>all of selection*</code></p>
<p><code>1 of selection* and keywords</code></p>
<p><code>1 of selection* and not 1 of filter*</code></p></li>
<li><p>Brackets <code>()</code></p>
<p><code>selection1 and (keywords1 or keywords2)</code></p></li>
</ul></td>
</tr>
<tr>
<td><p><code>level</code></p></td>
<td><p>The severity associated with the event that this filter detects</p>
<p>Supported values:</p>
<ul>
<li><p><code>info</code></p></li>
<li><p><code>low</code></p></li>
<li><p><code>medium</code></p></li>
<li><p><code>high</code></p></li>
<li><p><code>critical</code></p></li>
</ul></td>
</tr>
<tr>
<td><code>taxonomy</code></td>
<td><p>The taxonomy of the Sigma rule</p>


:::warning[Important]

<p><code>tm-v1</code> is the only supported value for taxonomy.</p>


:::

</td>
</tr>
</tbody>
</table>
