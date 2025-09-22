---
id: configuring-so-email-security
title: Configuring suspicious object settings
sidebar_label: Configuring suspicious object settings
description: Configuring suspicious object settings
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring suspicious object settings Before you start, make sure you meet the following requirements: You have enabled virus policies. Suspicious file SHA-1/SHA-256 hashes apply during virus scanning. You have enabled spam policies with Web Reputation turned on. Suspicious URLs apply during Web Reputation scanning. Procedure Go to Administration → Other Settings → Service Integration. Click Threat Intelligence. Enable Check for suspicious files and URLs. For files or URLs that match the suspicious objects from both Trend Vision One and Trend Micro Apex Central, the settings for the suspicious objects from Trend Vision One take precedence. Enable Check for suspicious sender addresses. Cloud Email Gateway Protection synchronizes only the sender addresses configured with the “Block/Quarantine” action in Trend Vision One and blocks messages from these senders. Under Security Level for Files, specify the security level to determine whether to take actions on messages when suspicious files are detected during virus scanning. The actions to take are synchronized from Trend Vision One along with the suspicious objects. For Security Level for URLs, make sure your specify the security level for Web Reputation in your spam policy to determine whether to take actions on messages when suspicious URLs are detected during spam scanning. The actions to take are synchronized from Trend Vision One along with the suspicious objects. Check additional information about suspicious object synchronization from Trend Vision One. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base