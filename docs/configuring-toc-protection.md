---
id: configuring-toc-protection
title: Configuring time-of-click protection settings
sidebar_label: Configuring time-of-click protection settings
description: Configuring time-of-click protection settings
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring time-of-click protection settings The Time-of-Click Protection feature allows taking actions based on the risk level to protect Exchange Online users against potential risks when users click URLs in incoming email messages. To achieve this, Cloud Email and Collaboration Protection rewrites suspicious URLs in incoming email messages to redirect the URLs to the Web Reputation Services. When the rewritten URL is clicked in the email message, the web browser queries the risk level of the URL from the Web Reputation Services, which then takes the action specified for that specific risk level. Note This feature is available only if you are using an Authorized Account for the Exchange Online service. Therefore, you may need to migrate to use an Authorized Account for Exchange Online if you are still using a Delegate Account. Procedure In Cloud Email and Collaboration Protection, go to Policies → Global Settings → Other Settings → Time-of-Click Protection Settings. Select an action from Block, Warn, and Allow for URLs at each risk level, and click Save. Note The Block action stops users from accessing the URL. The Allow action takes users to the destination page. The Warn action warns users about the risk but allows the user to decide whether to continue to access the URL. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base