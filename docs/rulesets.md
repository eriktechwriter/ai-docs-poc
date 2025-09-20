---
id: rulesets
title: Object management
sidebar_label: Object management
description: Object management
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Object management Define Container Security rulesets to ensure protection for your containers during Runtime Security scanning. Runtime security provides visibility into container activity that violates a customizable set of rules. Currently, runtime security includes a set of predefined rules that provide visibility into MITRE ATT&CK framework tactics for containers, as well as container drift detection. Container Security can automatically mitigate problems detected by the runtime security feature. If a pod violates any rule during runtime, the issue is mitigated by terminating or isolating the pod based on the ruleset assigned to its Container Security policy. Note Rulesets are compatible with Kubernetes and support Amazon EKS, Microsoft Azure AKS, Google GKE, and OpenShift running supported Linux kernels. Options Description Create a ruleset Create a new ruleset (New) or copy the rules from an existing ruleset (Duplicate) as the basis for a new ruleset Manage rulesets Modify a ruleset Select any existing ruleset in the list to modify the ruleset settings Manage rulesets Delete a ruleset Hover over the unneeded ruleset in the list and click the trash can icon that appears next to the ruleset name Important You cannot delete active ruleset. You must remove the ruleset from all policies before you can delete it from the list. Related information Manage rulesets Manage attestors © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base