---
id: configuring-scan-exceptions
title: Configuring scan exceptions
sidebar_label: Configuring scan exceptions
description: Configuring scan exceptions
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring scan exceptions Under certain circumstances, you may want to prevent Cloud Email Gateway Protection from scanning certain types of messages that may pose security risks. For example, compressed files provide a number of special security concerns since they can harbor security risks or contain numerous compression layers. Scan exceptions are configured to instruct Cloud Email Gateway Protection to take actions on these messages. Note If an email message triggers the scan exception "Malformed messages", Cloud Email Gateway Protection stops scanning and takes the corresponding actions. If any other scan exception is triggered, Cloud Email Gateway Protection takes the specified actions and will not stop scanning until encountering a terminal scan action. For details about terminal actions, see intercept actions. Related information Scan exception list Configuring "scan exceptions" actions © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base