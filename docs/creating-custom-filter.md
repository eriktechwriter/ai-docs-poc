---
slug: creating-custom-filter
title: Create a custom filter
---

Use a query string to create a custom filter that detects events in your environment and enable custom models to trigger **Workbench** alerts.

Custom filters consist of basic information, event type, event ID or vendor, and a query string for detecting events in your environment. You can create a maximum of 50 custom filters. The event type and event ID or vendor define the type of data queried by the filter. For example, ENDPOINT_ACTIVITY queries endpoint data from endpoint-based data sources such as Endpoint Sensor. Selecting TELEMETRY_FILE, further refines the query to only file events within endpoint activity data. For more information about event types and data sources, see [Search method data sources](search-method-data-sources.md).

### Procedure {#procedure}

1.  Go to **XDR Threat Investigation → Detection Model Management → Custom Filters**.

2.  Click **Add**.

3.  Specify the **Filter name**.

4.  Type a **Description** of the filter.

5.  Specify the **Severity** associated with the event that this filter detects.

6.  Select the **Event type**.

    - For THIRD_PARTY_LOG, provide the **Vendor** associated with the event you want to match.
    - For all other event types, select **Event ID**.

7.  Specify a **Query** to locate the target events in the activity data.

    For more information about formatting filter queries, see [Filter query format](custom-filter-query-format.md) and [Use regex in custom filters](using-regex-custom-filters.md).

8.  Click **Validate Query** to validate your query string. If the query string is valid, you can click **Preview Search Results** to view a preview of what a search using your query returns.

9.  Specify up to 10 **Custom tags** to help you identify events detected by custom filters in **Workbench**, **Observed Attack Techniques**, and **Search**.

    Tag length cannot exceed 64 characters.

10. Click **Save**.
