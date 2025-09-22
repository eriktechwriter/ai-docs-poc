---
id: nsa-hardening-1-2-4511
title: 4.5.11 - Ensure SecurityContext is applied to the Pods and Containers (Automated)
sidebar_label: 4.5.11 - Ensure SecurityContext is applied to the Pods and Containers (Automated)
description: 4.5.11 - Ensure SecurityContext is applied to the Pods and Containers (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.5.11 - Ensure SecurityContext is applied to the Pods and Containers (Automated) Profile applicability: Level 1 SecurityContexts allow configuration of Kubernetes resource security settings. Audit Run the following command and verify the each pod and container has an applied SecurityContext: kubectl get pods --all-namespaces Remediation Follow the Kubernetes documentation and apply SecurityContexts to your Pods. For a suggested list of SecurityContexts, refer to the CIS Security Benchmark for Docker Containers. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base