---
id: policies-exclusions
title: Exclusions
sidebar_label: Exclusions
description: Exclusions
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Exclusions Configure and manage the Exclusions module settings. Important Policies and the Exclusions module are "Pre-release" features and are not considered an official release. Please review the Pre-Release Disclaimer before using the feature. These features are not available in all regions. Exclusions uses program lists for configuring the Trusted programs list. Configure program lists in policy resources before configuring Exclusions. Configuring Exclusions impacts other security modules. Carefully review your settings before saving. The Endpoint Sensor does not support the Trusted programs list. Navigating between the security modules or leaving the Policy Settings screen discards any unsaved changes. To avoid losing your work, always click Save before leaving the current screen. The Exclusions module manages exceptions used across endpoint protection features. Exclusions prevents any specified rule ID or trusted program from security scans and monitoring detections. Procedure To exclude certain rules from security scans, configure the Rule exceptions. Click Add rule. Specify the Rule ID for the rule you want to exclude. Rule IDs can be located by viewing event logs and copying the following fields: For gray detection file-triggered logs, use the malName value. For gray detection behavior-triggered logs, use the ruleName value. For Behavior Monitoring, use the ruleId or ruleName value. To exclude programs you trust from scans and lockdown mode, select a Program list under Trusted programs list. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base