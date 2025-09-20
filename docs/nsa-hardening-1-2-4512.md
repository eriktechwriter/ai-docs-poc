---
id: nsa-hardening-1-2-4512
title: 4.5.12 - Restrict allowedHostPath to minimize access to the host file system (Automated)
sidebar_label: 4.5.12 - Restrict allowedHostPath to minimize access to the host file system (Automated)
description: 4.5.12 - Restrict allowedHostPath to minimize access to the host file system (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ 4.5.12 - Restrict allowedHostPath to minimize access to the host file system (Automated) Profile applicability: Level 1 Use allowedHostPath to deny a container feature frequently exploited to breakout. Audit Run the following command and review the namespace metadata annotations: kubectl get namespaces Verify that the annotations pod-security.kubernetes.io/enforce equal restricted and pod-security.kubernetes.io/allowedHostPath equal false. Remediation Add relevant annotations in namespaces to enforce restricted policies and configure allowedHostPath. Using Pod Security Admission (PSA), apply "restricted" security mode at the namespace level. Alternatively, create and apply a Kyverno policy to restrict hostPath usage, or use Open Policy Agent (OPA) Gatekeeper to create a constraint template for an allowed hostPath to enforce and apply the policy. For AWS EKS clusters, Kyverno or OPA Gatekeeper is recommended. For OpenShift, ensure that the Security Context Constraint (SCC) assigned to a user/group does not allow hostPath. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base