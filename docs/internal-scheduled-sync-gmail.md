---
id: internal-scheduled-sync-gmail
title: Internal domain scheduled synchronization failure for Gmail
sidebar_label: Internal domain scheduled synchronization failure for Gmail
description: Internal domain scheduled synchronization failure for Gmail
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Internal domain scheduled synchronization failure for Gmail Problem: An error message indicating the failure to synchronize internal domains in scheduled user data synchronization for Gmail. The possible reason is as follows: This occurs if your organization started to use the Gmail protection functionality in public preview. During that stage, Cloud Email and Collaboration Protection was not granted the domain read-only permission during access grant, and thus not able to synchronize the internal domains of your organization. Perform either of the following: Remove the Gmail service account that you used in public preview, and grant Cloud Email and Collaboration Protection access to Gmail again. Go to Advanced Threat Protection → Internal Domains or Administration → Global Settings → Internal Domains to manually add the internal domains of your organization. Repeat this every time there is a new domain created for your organization. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base