---
id: cef-audit-logs
title: CEF audit logs
sidebar_label: CEF audit logs
description: CEF audit logs
tags:
  - endpoint-security
  - trend-vision-one
---

 CEF audit logs CEF Audit Logs CEF Key Description Value Header (logVer) CEF format version CEF: 0 Header (vendor) Appliance vendor Trend Micro Header (pname) Appliance product TMES Header (pver) Appliance version Example: 1.0.0.0 Header (eventid) Signature ID 300101 Header (eventName) Description AUDIT Header (severity) Email severity 4 rt Log generation time Example: 2018-06-28 03:22:31 cs1Label Account type accountType cs1 Account type end user admin suser Email sender Example: user1@example1.com cs2Label Event type eventType cs2 Event type Example: End-User Actions act Action in the event Example: User login to End User Console cs3Label Domain affected by the event affectedDomains cs3 Domain affected by the event Example: example1.com Log sample: CEF:0|Trend Micro|TMES|1.0.0.0|300101|AUDIT|4|rt=2018-06-28 03:22:31 cs1Label=accountType cs1=end user suser=user1@example1.com cs2Label=eventType cs2=End-User Actions act=User login to End User Console cs3Label=affectedDomains cs3= © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base