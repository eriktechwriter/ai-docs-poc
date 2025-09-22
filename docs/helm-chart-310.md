---
id: helm-chart-310
title: Helm Chart 3.1.0
sidebar_label: Helm Chart 3.1.0
description: Helm Chart 3.1.0
tags:
  - endpoint-security
  - trend-vision-one
---

 Helm Chart 3.1.0 July 14, 2025—The 3.1.0 Helm Chart release includes support for Image Support Verification rules in admission controller, and for managing attestors using policy as code. This release also supports custom rules with one Falco container. Enhancements Containerd upgraded to 1.7.27. Kubectl upgraded to 1.33.2. Switch event delivery using http. Batch event handling and retry mechanism. Load policy, ruleset, and rules into configMap. Download ebpf drivers using http. Scout running in ECS to directly use Trend Vision One endpoint. Use oc command when kubectl is not available. Bug fixes Fixed an issue in which runtime events for excluded namespaces were incorrectly sent to Trend Vision One. Fixed an issue in which enabling the malware scan caused the scan-manager to crash. Fixed an issue in which the k8s.pod.id was empty in OpenShift environments. Added crio.sock and containerd.sock to prevent container information from going missing from runtime security events in OpenShift environments. Upgrade instructions Sample upgrade command: helm upgrade \ --values overrides.yaml \ --namespace trendmicro-system \ trendmicro\ https://github.com/trendmicro/visionone-container-security-helm/archive/3.1.0.tar.gz References https://github.com/trendmicro/visionone-container-security-helm/releases/tag/3.1.0 © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base