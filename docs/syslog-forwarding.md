---
id: syslog-forwarding
title: Syslog forwarding
sidebar_label: Syslog forwarding
description: Syslog forwarding
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Syslog forwarding Configure the syslog server where Cloud Email Gateway Protection forwards different types of logs. Procedure Go to Logs → Syslog Settings. The Syslog Forwarding tab appears by default. From the Detection logs drop-down list, select a syslog server for Cloud Email Gateway Protection to forward syslog messages on threat detections. Select from any of the following options: None: Select this option to disable syslog forwarding for this type of logs. New: Select this option to add a new syslog server. For details on syslog server profiles, see Syslog server profiles. Any syslog server profile: select any profile you configured for forwarding this type of logs. Select the Include spam detections check box if you want to include spam detection logs in syslog forwarding. From the Audit logs drop-down list, select a syslog server for Cloud Email Gateway Protection to forward syslog messages for audit logs. From the Mail tracking logs drop-down list, select a syslog server for Cloud Email Gateway Protection to forward syslog messages for mail tracking logs, which are related to the accepted traffic that passed through Cloud Email Gateway Protection. Note For details about the accepted traffic defined in mail tracking logs, see Understanding mail tracking. From the URL click tracking logs drop-down list, select a syslog server for Cloud Email Gateway Protection to forward syslog messages for URL click tracking logs. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base