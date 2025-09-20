---
id: enable-windows-amsi-protection
title: Enable Windows AMSI protection (real-time scans only)
sidebar_label: Enable Windows AMSI protection (real-time scans only)
description: Enable Windows AMSI protection (real-time scans only)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Enable Windows AMSI protection (real-time scans only) The Windows Antimalware Scan Interface (AMSI) is an interface provided by Microsoft in Windows 10 and later. Server & Workload Protection leverages AMSI to help detect malicious scripts. By default, this option is enabled in Server & Workload Protection malware scan configurations. Procedure Open the properties of the malware scan configuration. On the General tab, select Enable AMSI protection. Configure the settings for Detection level and Prevention level. Important Adjusting Detection and Prevention levels only supports agent version version 20.0.1.25770 and later. Unsupported versions use the default level of 2 - Moderate and cannot be changed. Higher levels provide greater sensitivity but might generate a large number of nonessential logs and impact endpoint performance. Trend Micro recommends selecting 2 - Moderate for more relevant data with minimal impact on your endpoints. The Prevention level must be the same or lower than Detection level. The Action to take selection might affect the prevention actions taken for the selected prevention level. For Action to take, choose the remediation action that you want Server & Workload Protection to take when it detects malware: Terminate (recommended): Stops execution or running of the detected process. Pass: Server & Workload Protection records an Anti-Malware Event without taking action on the process. Click OK. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base