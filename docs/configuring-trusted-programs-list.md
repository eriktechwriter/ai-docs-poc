---
id: configuring-trusted-programs-list
title: Configuring the Trusted Programs List
sidebar_label: Configuring the Trusted Programs List
description: Configuring the Trusted Programs List
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring the Trusted Programs List The Trusted Programs List excludes programs and all child processes called by the program from Application Control, Behavior Monitoring, Device Control, Endpoint Sensor, and Real-time Scan. Procedure When configuring a parent policy, specify how other users can configure child policies. Inherit from parent: Child policies must use the settings configured in the parent policy Extend from parent: Child policies can append additional settings to the settings inherited from the parent policy Note If your child policies Extend from parent, you can configure Child Policy Restrictions to prevent child policies from adding specified rules to the Rule Exceptions list. Type the full program path of the program to exclude from the list. Click Add to Trusted Program List. To remove a program from the list, click the Delete icon. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base