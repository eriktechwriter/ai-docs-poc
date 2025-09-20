---
id: configuring-file-password-analysis
title: Configuring file password analysis
sidebar_label: Configuring file password analysis
description: Configuring file password analysis
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configuring file password analysis Procedure Choose Inbound Protection → Virus Scan → File Password Analysis. In the File Password Analysis Settings section, select Enable file password analysis. Optionally select Hold on a message to associate later messages for password analysis and specify a certain amount of time for Analysis timeout. Note This step is required if you want Cloud Email Gateway Protection to associate later email messages to further analyze the file password for the current email message. The current message will not be released for delivery during the analysis timeout period. Click Save. To help Cloud Email Gateway Protection crack file passwords more efficiently, you can add or import passwords that are commonly used by your organization as the user-defined passwords. Cloud Email Gateway Protection will try the user-defined passwords first before any other ways to extract or open files. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base