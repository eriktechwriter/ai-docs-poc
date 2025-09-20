---
id: auto-imp-recommendations
title: Automatically implement recommendations
sidebar_label: Automatically implement recommendations
description: Automatically implement recommendations
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Automatically implement recommendations You can configure Server & Workload Protection to automatically implement recommendation scan results except for the following rules: Rules that require configuration before being applied. Rules that are excluded from recommendation scans. Rules that have been automatically assigned or unassigned, but that a user has overridden. For example, if Server & Workload Protection automatically assigns a rule and then you unassign it, the next recommendation scan does not reassign that rule. Rules that have been assigned at a higher level in the policy hierarchy cannot be unassigned at a lower level. A rule assigned to a computer at the policy level must be unassigned at the policy level. Rules that Trend Micro has issued, but which may pose a risk of producing false positives. This is addressed in the rule description. Procedure On the Server & Workload Protection console, open the editor: For an individual Computer. For all computers that are using a Policy. Select the type you want to implement automatically: Intrusion Prevention Integrity Monitoring Log Inspection You can change the setting independently for each protection module. On the General tab, under Recommendations, choose one of the following: Yes Inherited (Yes) (See policies, inheritance, and overrides.) © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base