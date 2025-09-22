---
id: cegp-mail-tracking-logs-v1
title: Mail tracking logs for accepted traffic integrated with Trend Vision One
sidebar_label: Mail tracking logs for accepted traffic integrated with Trend Vision One
description: Mail tracking logs for accepted traffic integrated with Trend Vision One
tags:
  - endpoint-security
  - trend-vision-one
---

 Mail tracking logs for accepted traffic integrated with Trend Vision One June 17, 2025—Cloud Email Gateway Protection now supports uploading mail tracking logs for the accepted traffic type to Trend Vision One. This enhancement allows customers to: Query accepted traffic logs directly in the Search app Integrate these logs with third-party platforms via the Third-Party Integration app To query mail tracking logs in the Search app, you can use the following fields: scanType: gateway_realtime_accepted_mail_traffic pname: Cloud Email Gateway Protection, and then filter the search result by LogType: messaging msgUuid or mailMsgId Note that multiple records may share the same msgUuid or mailMsgId if an email undergoes several rounds of scans or actions based on the configured policy rules. Only newly generated accepted traffic logs are uploaded; historical logs are not migrated. Agentic SIEM & XDR → XDR Data Explorer © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base