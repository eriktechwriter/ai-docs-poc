---
id: email-collab-query-format
title: Query format for SharePoint and OneDrive file upload events
sidebar_label: Query format for SharePoint and OneDrive file upload events
description: Query format for SharePoint and OneDrive file upload events
tags:
  - endpoint-security
  - trend-vision-one
---

 Query format for SharePoint and OneDrive file upload events Learn how to format your queries for Microsoft SharePoint and OneDrive file upload events. Suggested search method and field/value pairs Search method: Email and Collaboration Activity Data eventName: COLLABORATION_ACTIVITY productCode: xca service: SharePoint OR service: OneDrive actionName: fileUploaded Note For more information about Microsoft actions (operations), see Audit log activities. Important fields in search results target: The full path name of the file accessed by the user. principalName: The user principal name of the user who performed the action. eventTime: The time of the file upload event. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base