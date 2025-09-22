---
id: creating-amazon-ecs-policy
title: Creating an Amazon ECS policy
sidebar_label: Creating an Amazon ECS policy
description: Creating an Amazon ECS policy
tags:
  - endpoint-security
  - trend-vision-one
---

 Creating an Amazon ECS policy Container Protection policies for Amazon ECS clusters contain runtime rules that you can apply to entire clusters. Important Policy configuration for Kubernetes clusters differs greatly from a Amazon ECS environment. To properly configure Kubernetes protection policies, see Creating a Kubernetes protection policy. Procedure Go to Cloud Security → Container Security → Configuration. Click the Policy tab. Create a policy by clicking New. Specify a unique policy name. Note Policy names must not contain spaces and only support alphanumeric characters, underscores (_), and periods (.). You cannot modify the policy name after creating the policy. To provide more detail about the purpose for the policy, use the Description field. The description appears under the policy name in the policy list. To receive CREM Risk Insights, Workbench alerts, and use the Search app to investigate security threats throughout your network environment, turn on XDR Telemetry. Trend Vision One can correlate and assess XDR telemetry data across all configured data sources to provide insights into your network's security and risk posture. Amazon ECS policies do not support Deployment or Continuous policies. Define the cluster-wide rules that apply while a pod is running by clicking the Runtime tab. The runtime policy consists of the rulesets you create on the Rulesets tab. Click Add Ruleset. Select the checkbox of the ruleset you want to apply to the policy. Click Submit. Amazon ECS policies do not support namespace (NamespacedPolicyDefinition) policies. Click Create. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base