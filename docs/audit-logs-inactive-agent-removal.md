---
id: audit-logs-inactive-agent-removal
title: Audit logs for computers removed by inactive agent removal
sidebar_label: Audit logs for computers removed by inactive agent removal
description: Audit logs for computers removed by inactive agent removal
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Audit logs for computers removed by inactive agent removal Check the audit trail for computers removed by an inactive cleanup job. When Trend Vision One removes inactive agents, Server & Workload Protection generates system events for those computers managed by the Protection Manager. You can use the Advanced Search in Events and Reports to track removed computers by searching for the event ID. The following table details the relevant events. For more information, see System events. ID Event Description 251 Computer Deleted Server & Workload Protection generates a separate event for each computer removed by inactive agent removal 716 Reactivation Attempted by Unknown Agent Server & Workload Protection generates the event when a removed computer attempts to reconnect Each reactivated computer also generates one or more of the following system events: 130 - Credentials Generated 250 - Computer Created 252 - Computer Updated 350 - Policy Created (if you enabled an event-based task that assigns a policy) 790 - Agent-Initiated Activation Requested 2953 Inactive Agent Cleanup Completed Successfully Server & Workload Protection generates the event after each successful completion of the cleanup task © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base