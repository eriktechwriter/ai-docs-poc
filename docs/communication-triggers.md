---
id: communication-triggers
title: Communication triggers
sidebar_label: Communication triggers
description: Communication triggers
tags:
  - endpoint-security
  - trend-vision-one
---

 Communication triggers Communication triggers allows you to select criteria based on which Checks trigger automatic notifications to be sent via a communication channel that has been set up. You can filter the Checks that trigger notifications using check/rule attributes and compliance standards. By default, the filter is set to 'All checks', meaning that you will be notified of all the failing Checks across all the Categories and Risk Level. An alert consists of rule details including Account name, Risk Level, Region, Resource, Description, and Introduced by: "user name" (only for the RTPM Rules). The alerts also include ARN with an exception to Email and SMS communication channels. Note For SNS and PagerDuty's channels ARN is displayed as providerResourceId. For example, the alert generated below was sent to a user's Jira for the 'Rule S3 Configuration Changes': {.zoom} Note We recommended that you set up notifications for Extreme, Very High, and High-Risk Levels so your channel is not cluttered by all checks and your teams get notified on priority risks. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base