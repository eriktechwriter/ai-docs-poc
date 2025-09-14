---
slug: trend-vision-one-custom-filter-query-format
title: Filter query format
---

Format your query string using the same query language as the **Search** app.

### Filter query limitations {#filter-query-limitations}

Although custom filter queries use the same query language as Search app queries, custom filter queries have a few additional limitations:

- All queries must contain at least one field name and value pair. For example, `endpointHostName:endpoint-123`

- Query strings must contain at least one defined value. You can use the asterisk wildcard (\*) in compound queries if at least one value is defined. (For example, `endpointHostName:endpoint-123 AND fileName:*`)

To learn more about Search app query syntax and regex in custom filters, see [Search syntax](search-syntax.md) and [Use regex in custom filters](using-regex-custom-filters.md).

### Filter query format tips {#filter-query-format-tips}

To improve query performance and avoid lengthy execution time, consider the following:

- Put simple search criteria in the front of the query string.

- Put fields that return a large volume of data (such as **objectRawDataStr** or **rawDataStr**) at the end of the query string.

- Avoid using too many wildcards, or put wildcards at the end of the query string.

- Use only one or two tactics, techniques, and procedures per filter.

- Use as few operators as possible in a filter.

- Put the **eventSubId** at the beginning of the filter conditions to quickly narrow down the dataset.

- Use **processName** instead of **processCmd** to streamline filtering and reduce complexity.

- Put a simple subset pattern before a complicated pattern (such as complex regex or middle wildcards).

  Example: For `objectRawDataStr:'*(abcd -UseBasicParsing)*' AND (objectRawDataStr: '* abcd *' OR objectRawDataStr: '* efgh *')`, extract the longest plain sub-string, which is `objectRawDataStr: '*-UseBasicParsing*'`. Then add another filter that checks `objectRawDataStr: '*-UseBasicParsing*'` first.

- Use full match with exact values instead of partial match. For example, `objectFileHashMd5: "d41d8cd98f00b204e9800998ecf8427e" ``objectFileHashMd5: "d41d8cd98f00b204e9800998ecf8427e"`.
