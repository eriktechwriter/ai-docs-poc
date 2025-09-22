---
id: manual-scan-target-tab
title: "Manual Scan: Target Tab"
sidebar_label: "Manual Scan: Target Tab"
description: "Manual Scan: Target Tab"
tags:
  - endpoint-security
  - trend-vision-one
---

 Manual Scan: Target Tab Procedure In the Files to Scan section, select from the following: All scannable files: Includes all scannable files. Unscannable files are password protected files, encrypted files, or files that exceed the user-defined scanning restrictions. Note Scanning every file requires a lot of time and resources and might be redundant in some situations. Therefore, you might want to limit the amount of files the Trend Vision One Endpoint Security agent includes in the scan. Scan only Mach-O files: Only scan Mach-O files on endpoints. Apex One (Mac) Trend Vision One Endpoint Security agents do not scan other file types for malware. Note If you select this option, you must enable the smart scan feature to ensure protection against the latest malware attacks targeting OS X and macOS platforms. Under Scan Settings, select one or more from the following options: Scan compressed files: Scan individual files within an archive file For more information, see Supported Compressed File Types. Scan network drive: Scan directories physically located on other endpoints, but mapped to the local endpoint Scan Time Machine: Only scan files on Time Machine drives Note After enabling the Scan Time Machine option for Manual and Scheduled Scan, Apex One (Mac) can only detect malware threats but not take any action (clean, quarantine, or delete) due to a permission limitation in Mac OS. Configured scan actions display as unsuccessful in the product logs. In the CPU Usage section, configure the required settings. High: No pausing between scans Low: Pause between file scans if CPU consumption is higher than 20%, and do not pause if 20% or lower © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base