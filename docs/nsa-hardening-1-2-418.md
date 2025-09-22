---
id: nsa-hardening-1-2-418
title: 4.1.8 - Ensure the SELinux context of the container is set (Automated)
sidebar_label: 4.1.8 - Ensure the SELinux context of the container is set (Automated)
description: 4.1.8 - Ensure the SELinux context of the container is set (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.1.8 - Ensure the SELinux context of the container is set (Automated) Profile applicability: Level 1 In Kubernetes, you can set an SELinux label in the securityContext field of your manifest. The specified labels are assigned to those processes. If you have configured security policies that affect those labels, the host OS kernel enforces these policies. Audit Run the following command and review the securityContext of each pod: kubectl get pods --all-namespaces Ensure each pod has the SELinux context set. Remediation To assign SELinux labels to a Container, include the seLinuxOptions field in the securityContext section of your Pod or Container manifest. The seLinuxOptions field is an SELinuxOptions object. Here's an example that applies an SELinux level: ... securityContext: seLinuxOptions: level: "s0:c123,c456" See the Kubernetes documentation for more information about assigning SELinux labels to a container. Note To assign SELinux labels, the SELinux security module must be loaded on the host operating system. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base