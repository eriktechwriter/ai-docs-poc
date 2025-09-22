---
id: resource-cleanup
title: Resource cleanup
sidebar_label: Resource cleanup
description: Resource cleanup
tags:
  - endpoint-security
  - trend-vision-one
---

 Resource cleanup Policy resources in Kubernetes clusters are not deleted when you uninstall Container Security helm chart. Ensure that the custom resources are deleted before uninstalling Container Security helm chart disabling the policy operator in helm chart. The policy and ruleset resources that are owned by the cluster remain in the Trend Vision One console until the cluster object that owns these resources is deleted. Custom resource finalizers We recommend that the policy operator adds a finalizer to the custom resources to ensure that the policy and ruleset files are not deleted until the operator has removed the policy from Trend Vision One. The finalizer is removed after the policy is deleted from Trend Vision One. If the policy operator is disabled before the finalizer is removed, the finalizer can be removed manually to allow the custom resources to be deleted. To remove the finalizer, edit the custom resources and remove the finalizer from the metadata section: metadata: finalizers: - clusterpolicy.visionone.trendmicro.com/finalizer - runtimeruleset.visionone.trendmicro.com/finalizer The custom resource can also be patched to remove the finalizer by using the following: kubectl patch clusterpolicy <name> -p '{"metadata":{"finalizers":null}}' --type=merge © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base