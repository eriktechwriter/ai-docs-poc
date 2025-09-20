---
id: conf-app-blocked-url-lists
title: Configuring the Approved and Blocked URL Lists
sidebar_label: Configuring the Approved and Blocked URL Lists
description: Configuring the Approved and Blocked URL Lists
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configuring the Approved and Blocked URL Lists Add websites that you consider safe or dangerous to the approved or blocked list. When Apex One (Mac) detects access to any of these websites, it automatically allows or blocks the access and no longer sends a query to smart protection sources. Procedure Access the Apex One (Mac) web console. Navigate to Agents → Global Agent Settings → Web Reputation Approved/Blocked URL List. Specify a URL in the text box. You can add a wildcard character (*) anywhere on the URL. Examples: www.trendmicro.com/* means all pages on the www.trendmicro.com domain. *.trendmicro.com/* means all pages on any sub-domain of trendmicro.com. You can type URLs containing IP addresses. If a URL contains an IPv6 address, enclose the address in square brackets. Click Add to Approved List or Add to Blocked List. To delete an entry, select an option from the View drop-down list and click the icon next to a URL. Click Deploy. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base