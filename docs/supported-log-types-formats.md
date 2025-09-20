---
id: supported-log-types-formats
title: Supported Log Types and Formats
sidebar_label: Supported Log Types and Formats
description: Supported Log Types and Formats
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Supported Log Types and Formats Trend Micro Apex Central can forward logs to a syslog server in the following log formats: CEF: Uses the standard Common Event Format (CEF) for log messages Apex Central format: Sets the syslog Facility code to "Local0" and the Severity code to "Notice" The following tables outline the formats supported by each log type. Security Logs Log Type CEF Apex Central Format Application Control Yes No Attack Discovery Yes No Behavior Monitoring Yes Yes C&C Callbacks Yes No Content Violations Yes No Data Loss Prevention Yes Yes Device Control Yes Yes Intrusion Prevention Yes No Network Content Inspection Yes No Predictive Machine Learning Yes No Spyware/Grayware Yes No Suspicious Files Yes No Virtual Analyzer Yes No Virus/Malware Yes No Web Violations Yes No Product Information Log Type CEF Apex Central Format Engine Update Status Yes Yes Product Auditing Events Yes No Pattern Update Status Yes Yes For information about mapping syslog content between CEF and Apex Central formats, see Syslog Content Mapping - CEF. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base