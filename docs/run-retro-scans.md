---
id: run-retro-scans
title: Run retro scans on custom model data
sidebar_label: Run retro scans on custom model data
description: Run retro scans on custom model data
tags:
  - endpoint-security
  - trend-vision-one
---

 Run retro scans on custom model data Run retro scans on the historical data captured by existing custom detection models to identify past events that match your defined detection criteria. Important Retro scans analyze historical data up to 7 days in the past. The number of concurrent retro scan jobs is limited per company. If your company has reached the limit, you must wait for an ongoing job to complete before starting a new one. Retro scan might generate multiple Workbench alerts if matched events are found across different time intervals. Procedure Go to Agentic SIEM & XDR → Detection Model Management → Custom Models. Locate the custom model you want to scan historical data for and click the retro scan icon (). Select the time range from the drop-down menu. Click Run retro scan. Once the retro scan is complete, any matched events generate Workbench alerts according to the configurations of your selected models. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base