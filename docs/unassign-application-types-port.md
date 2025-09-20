---
id: unassign-application-types-port
title: Unassign application types from a single port
sidebar_label: Unassign application types from a single port
description: Unassign application types from a single port
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Unassign application types from a single port The Intrusion Prevention Rule Compilation Failed error can occur when a policy or computer assigns too may application types to a single port. Currently, a port can only support assigning up to eight application types. To resolve the issue, remove an assigned application type from a port. Procedure To determine which rule encountered the issue, double-click the error to open the Event Viewer. Go to Computers. Right-click the computer with the misconfigured Intrusion Prevention rule and select Details. Go to Intrusion Prevention. Click Assign/Unassign. Search for the name of the misconfigured rule. Right-click the rule and select Application Type Properties. Clear the Inherited selection. Delete the port and specify a new one. Click Apply, then OK. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base