---
id: cis-aks17-463
title: 4.6.3 - The default namespace should not be used (Automated)
sidebar_label: 4.6.3 - The default namespace should not be used (Automated)
description: 4.6.3 - The default namespace should not be used (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ 4.6.3 - The default namespace should not be used (Automated) Profile Applicability: Level 2 Kubernetes provides a default namespace, where objects are placed if no namespace is specified for them. Placing objects in this namespace makes application of RBAC and other controls more difficult. Resources in a Kubernetes cluster should be segregated by namespace, to allow for security controls to be applied at that level and to make it easier to manage resources. Note Unless a namespace is specific on object creation, the default namespace will be used. Audit Run this command to list objects in default namespace: kubectl get all -n default The only entries there should be system managed resources such as the kubernetes service. Remediation Ensure that namespaces are created to allow for appropriate segregation of Kubernetes resources and that all new resources are created in a specific namespace. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base