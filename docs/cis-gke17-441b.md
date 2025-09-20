---
id: cis-gke17-441b
title: 4.4.1 - Prefer using secrets as files over secrets as environment variables (Automated)
sidebar_label: 4.4.1 - Prefer using secrets as files over secrets as environment variables (Automated)
description: 4.4.1 - Prefer using secrets as files over secrets as environment variables (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ 4.4.1 - Prefer using secrets as files over secrets as environment variables (Automated) Profile applicability: Level 2 Kubernetes supports mounting secrets as data volumes or as environment variables. Minimize the use of environment variable secrets. It is reasonably common for application code to log out its environment (particularly in the event of an error). This will include any secret values passed in as environment variables, so secrets can easily be exposed to any user or entity who has access to the logs. Note By default, secrets are not defined. Impact Application code which expects to read secrets in the form of environment variables would need modification. Audit Run the following command to find references to objects which use environment variables defined from secrets. kubectl get all -o jsonpath='{range .items[?(@..secretKeyRef)]} {.kind} {.metadata.name} {"\n"}{end}' -A Remediation If possible, rewrite application code to read secrets from mounted secret files, rather than from environment variables. Note Mounting secrets as volumes has the additional benefit that secret values can be updated without restarting the pod. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base