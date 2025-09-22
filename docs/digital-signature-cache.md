---
id: digital-signature-cache
title: Digital Signature Cache
sidebar_label: Digital Signature Cache
description: Digital Signature Cache
tags:
  - endpoint-security
  - trend-vision-one
---

 Digital Signature Cache The digital signature cache file is used during Manual Scan, Scheduled Scan, and Scan Now. Agents do not scan files whose signatures have been added to the digital signature cache file. The Trend Vision One Endpoint Security agent uses the same Digital Signature Pattern used for Behavior Monitoring to build the digital signature cache file. The Digital Signature Pattern contains a list of files that Trend Micro considers trustworthy and therefore can be excluded from scans. Note Behavior Monitoring is automatically disabled on Windows server platforms. If the digital signature cache is enabled, Trend Vision One Endpoint Security agents on these platforms download the Digital Signature Pattern for use in the cache and do not download the other Behavior Monitoring components. Agents build the digital signature cache file according to a schedule, which is configurable from the web console. Agents do this to: Add the signatures of new files that were introduced to the system since the last cache file was built Remove the signatures of files that have been modified or deleted from the system During the cache building process, agents check the following folders for trustworthy files and then adds the signatures of these files to the digital signature cache file: %PROGRAMFILES% %WINDIR% The cache building process does not affect the endpoint's performance because agents use minimal system resources during the process. Agents are also able to resume a cache building task that was interrupted for some reason (for example, when the host machine is powered off or when a wireless endpoint's AC adapter is unplugged). © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base