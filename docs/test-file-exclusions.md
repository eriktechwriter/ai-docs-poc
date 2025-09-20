---
id: test-file-exclusions
title: Test file exclusions
sidebar_label: Test file exclusions
description: Test file exclusions
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Test file exclusions Before continuing with further Anti-Malware configuration steps, test file exclusions to ensure they're working correctly: Note Before you begin, make sure the real-time scan is enabled and a configuration is selected. Procedure Go to Policies → Common Objects → Other → Malware Scan Configurations. Click New → New Real-time Scan Configuration. Go to the Exclusions tab, and select New from the directory list. Name the directory list. Under Directory(s) specify the path of the directory you want to exclude from the scan. For example, c:\Test Folder\. Click OK. Go to the General tab, name the manual scan, and click OK. Go to the EICAR site and download their anti-malware test file. Save the file in the folder specified in the previous step. The file should be saved and undetected by the Anti-Malware module. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base