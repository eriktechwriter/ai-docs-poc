---
id: log-repositories
title: Log repositories
sidebar_label: Log repositories
description: Log repositories
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Log repositories Use log repositories to organize and manage your third-party log data according to specified ingestion and retention settings. Log repositories ingest and retain third-party log data received by connected collectors. You may configure specific ingestion and retention settings for each log repository to efficiently organize your third-party log data. Available ingestion and retention settings include: Ingestion types Analytic: Ingests log data for analysis, correlation, and threat hunting Supports both analytic and archival retention Archival: Ingests log data for infrequent queries or to meet compliance requirements Only supports archival retention Important To ingest log data, you must allocate credits to Agentic SIEM. You cannot change the ingestion type for a log repository after you create the repository. Retention types: Analytic: Allows for frequent retrieval of log data for analysis, correlation, and threat hunting. Default retention period: 30 days Archival: Stores data for compliance purposes or infrequent queries Note Retention of data beyond the default period requires additional credits in Agentic SIEM. To ingest log data, you must add collectors. All connected collectors collect log data according to the log repository ingestion and retention settings. To collect data according to different settings, create a new log repository. Related information Create a log repository © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base