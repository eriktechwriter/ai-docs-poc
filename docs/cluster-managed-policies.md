---
id: cluster-managed-policies
title: Cluster-managed policies
sidebar_label: Cluster-managed policies
description: Cluster-managed policies
tags:
  - endpoint-security
  - trend-vision-one
---

 Cluster-managed policies With cluster-managed policies, you can define the Container Security policies and runtime rulesets as custom resources in a yaml file. These custom resources can be managed with version control and deployed to the cluster with the CI/CD or GitOps workflow with other Kubernetes manifest files. Cluster-managed policies are defined in their source code as Container Security policy and ruleset custom resources and are read-only to users in the Trend Vision One console after being created. Note Allow policy drift enables you to modify the policy rules for your cluster-managed policies, which could potentially lead to policy inconsistencies. This option can only be enabled in the Trend Vision One console and should primarily be used in situations when an immediate policy adjustment is required. Enable Allow policy drift in Cloud Security → Container Security → Inventory/Overview → Kubernetes → [cluster name]. To use cluster-managed policies, create the cluster policy and runtime ruleset custom resources in your cluster. To disable cluster-managed policies, delete the cluster policy and runtime ruleset custom resources. Only the helm chart policy operator can create or disable cluster-managed policies, which simplifies policy management and ruleset assignment. For more information, see Enabling cluster-managed policies. Related information Enabling cluster-managed policies Custom resources for cluster-managed policies Resource cleanup © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base