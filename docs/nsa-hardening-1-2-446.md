---
id: nsa-hardening-1-2-446
title: 4.4.6 - Ensure that Service Account Tokens are only mounted where necessary (Automated)
sidebar_label: 4.4.6 - Ensure that Service Account Tokens are only mounted where necessary (Automated)
description: 4.4.6 - Ensure that Service Account Tokens are only mounted where necessary (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.4.6 - Ensure that Service Account Tokens are only mounted where necessary (Automated) Profile applicability: Level 1 Service accounts tokens should not be mounted in pods except where the workload running in the pod explicitly needs to communicate with the API server. Mounting service account tokens inside pods can provide an avenue for privilege escalation attacks where an attacker is able to compromise a single pod in the cluster. Avoiding mounting these tokens removes this attack avenue. Note By default, all pods get a service account token mounted in them. Impact Pods mounted without service account tokens will not be able to communicate with the API server, except where the resource is available to unauthenticated principals. Audit Review pod and service account objects in the cluster and ensure that the option below is set, unless the resource explicitly requires this access. automountServiceAccountToken: false Remediation Modify the definition of pods and service accounts which do not need to mount service account tokens to disable it. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base