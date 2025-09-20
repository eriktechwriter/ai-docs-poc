---
id: performance-troubleshooting
title: Performance troubleshooting
sidebar_label: Performance troubleshooting
description: Performance troubleshooting
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Performance troubleshooting Troubleshooting options for performance issues Issue Resolution or Cause Cloud Risk Management Scan has caused my account to reach its rate limit Manage performance issues by increasing the delay between Cloud Risk Management Scan runs API throttling Cloud Risk Management has optimised the platform to avoid unnecessary API calls. Examples of performance optimisation:1. when Cloud Risk Management calls the AWS API for S3 bucket list, the bot does not do repetitive calls, instead, the bot checks for changes only.2. Cloud Risk Management supports partial inventory. i.e. using partial lists of resources from AWS so the system is capable of dealing with partial calls e.g. S3 bucket list - secondary IP calls - if the bot fails to call second API calls, the rule engine will still work.3. Support for exponential backoff API. If you experience any other issues, please let our team know via Cloud Risk Management support. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base