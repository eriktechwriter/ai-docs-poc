---
id: run-scheduled-scans-not-accessible
title: Run scheduled scans when Server & Workload Protection is not accessible
sidebar_label: Run scheduled scans when Server & Workload Protection is not accessible
description: Run scheduled scans when Server & Workload Protection is not accessible
tags:
  - endpoint-security
  - trend-vision-one
---

 Run scheduled scans when Server & Workload Protection is not accessible Important This feature is supported with version 20.0.3445+ agents on Windows. Scheduled scans for malware are typically queued when the agent is offline. To have a scheduled scan run even when the agent is unable to connect to Server & Workload Protection: Procedure Go to the Computer or Policy editor. On the left, click Anti-Malware. On the General tab, for Scheduled Scan select Enable agent to trigger scheduled scan for malware. Note When the checkbox is selected: The Run Task Now button on the Scheduled Tasks page will be disabled for this agent. Server & Workload Protection manager will not proactively queue any scheduled scan task when agent is offline. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base