---
id: configuring-so-settings
title: Configuring suspicious object settings
sidebar_label: Configuring suspicious object settings
description: Configuring suspicious object settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configuring suspicious object settings A suspicious object is a known malicious or potentially malicious IP address, domain, URL, or SHA-1 value found in submitted samples. Cloud Email and Collaboration Protection can use the Suspicious Object lists synchronized from the Suspicious Object Management app during scanning. Note The Suspicious Object List feature is disabled by default. It applies to all ATP policies. Procedure In Cloud Email and Collaboration Protection, go to Policies → Global Settings → Other Settings → Suspicious Object Settings. On the Suspicious Object List screen that appears, enable or disable the use of the lists during scanning as necessary. Click Save. Cloud Email and Collaboration Protection utilizes the suspicious file list in Malware Scanning and the suspicious URL list in Web Reputation. When a URL or file matches an item in the list, Cloud Email and Collaboration Protection takes actions based on how you have configured Suspicious Object Management. Pass: Record the detection in a log and leave the scanned item unchanged. Block/Quarantine: Block the scanned item, or move the scanned item to a dedicated quarantine folder. Note The quarantine action does not apply to Gmail. Instead, Cloud Email and Collaboration Protection labels the email message as risky. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base