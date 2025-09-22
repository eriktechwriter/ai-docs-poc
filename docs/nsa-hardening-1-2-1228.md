---
id: nsa-hardening-1-2-1228
title: 1.2.28 - Ensure that a minimal audit policy is created (Automated)
sidebar_label: 1.2.28 - Ensure that a minimal audit policy is created (Automated)
description: 1.2.28 - Ensure that a minimal audit policy is created (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 1.2.28 - Ensure that a minimal audit policy is created (Automated) Profile applicability: Level 1 Kubernetes can audit the details of requests made to the API server. The --audit-policy-file flag must be set for this logging to be enabled. Logging is an important detective control for all systems to detect potential unauthorized access. Note Unless the --audit-policy-file flag is specified, no auditing will be carried out. Impact Audit logs will be created on the master nodes, which consumes disk space. Care should be taken to avoid generating too large of volumes of log information as this could impact the available space of the cluster nodes. Audit Run the following command on one of the cluster master nodes: ps -ef | grep kube-apiserver Verify that the --audit-policy-file is set. Review the contents of the file specified and ensure that it contains a valid audit policy. Remediation Create an audit policy file for your cluster. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base