---
id: cef-url-click-tracking-logs
title: CEF URL click tracking logs
sidebar_label: CEF URL click tracking logs
description: CEF URL click tracking logs
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ CEF URL click tracking logs CEF URL Click Tracking Logs CEF Key Description Value Header (logVer) CEF format version CEF: 0 Header (vendor) Appliance vendor Trend Micro Header (pname) Appliance product TMES Header (pver) Appliance version Example: 1.0.0.0 Header (eventid) Signature ID 500101 Header (eventName) Description CTP_DETECTION Header (severity) Email severity 2: Safe 4: Suspicious 6: Highly suspicious 8: Dangerous rt Log generation time Example: 2021-02-18 04:05:32 cs1Label Unique message identifier messageId cs1 Unique message identifier Example: 202102181642138223747@trend.com cs2Label The time a URL was clicked timeOfClick cs2 The time a URL was clicked Example: 2021-02-03 23:00:00 request The URL that was clicked Example: http://example.com act Action taken on the URL blocked allowed warned and stopped warned but accessed msg Email subject Example: hello suser Email sender Example: user1@example1.com duser Email recipients Example: user2@example2.com Log sample: CEF:0|Trend Micro|TMES|1.0.0.0|500101|CTP_DETECTION|2|rt=2021-02-18 04:05:32 cs2Label=timeOfClick cs2=2021-02-03 23:00:00 request=http://example.com act=blocked msg=hello cs1Label=messageId cs1=<202102181642138223747@trend.com> suser=user1@example1.com duser=user2@example2.com © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base