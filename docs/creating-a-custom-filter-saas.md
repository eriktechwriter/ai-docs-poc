---
id: creating-a-custom-filter-saas
title: Creating a Custom Filter
sidebar_label: Creating a Custom Filter
description: Creating a Custom Filter
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Creating a Custom Filter Note Any Trend Micro Apex Central user account that has permission to create or modify custom tags, filters, or important labels in the User/Endpoint Directory can view or modify custom tags, filters, or important labels created by all other user accounts. Editing a tag, filter, or importance label on the User/Endpoint Directory screen also modifies the corresponding tag, filter, or importance label used by log queries and reports. For example, if the an endpoint is removed from a custom filter on the User/Endpoint Directory screen, then log queries and generated reports that use the filter will exclude data from the removed endpoint. Procedure Go to Directories → Users/Endpoints. Expand the Custom Filters node in the tree. For Users, expand Custom Filters. For Endpoints, expand Filters, and then expand Custom Filters. Click Add new filter. The Search area above the table changes to allow you to select the filter criteria. Filter users or endpoints based on the available criteria. The following example filters all users with "ja" in their name in the Finance department that report to "Mary" or "Bill" in the Active Directory domain "HR": For more information, see Advanced Search Categories. After creating a custom filter: Click the icon next to any custom filter to edit the filter name. Click the icon next to any custom filter to update the Boolean expressions. Click the icon next to any custom filter to delete the filter. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base