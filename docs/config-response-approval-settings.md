---
id: config-response-approval-settings
title: Configure response approval settings
sidebar_label: Configure response approval settings
description: Configure response approval settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configure response approval settings Enable auto approval and specify response actions and endpoints that support auto approval. Procedure Go to Agentic SIEM & XDR → Managed Services. Select Enable auto approval to automatically approve certain response actions the Managed Services team can execute. WARNING Disabling auto approval means you must manually approval every response action. Trend Vision One sends email notifications for each response action to request manual approval before execution. Select Critical and Recommended for the available actions. Note Only a subset of actions in Trend Vision One apps are available for auto approval. Select either All endpoints in your environment or Selected endpoints and import a CSV file smaller than 256 KB that contains the exceptions or list of selected endpoints. Use the hostname to specify exceptions and selected endpoints. Specify the notification recipients (Trend Vision One accounts) for approval. You can also specify additional email addresses for notification only. Trend Vision One sends email notifications to request manual approval or to notify recipients of the auto approved response actions. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base