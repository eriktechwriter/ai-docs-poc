---
id: cis-eks-453
title: 4.5.3 - The default namespace should not be used (Automated)
sidebar_label: 4.5.3 - The default namespace should not be used (Automated)
description: 4.5.3 - The default namespace should not be used (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ 4.5.3 - The default namespace should not be used (Automated) Profile applicability: Level 1 Kubernetes provides a default namespace, where objects are placed if no namespace is specified for them. Placing objects in this namespace makes application of RBAC and other controls more difficult. Resources in a Kubernetes cluster should be segregated by namespace to allow for security controls to be applied at that level and to make it easier to manage resources. Note Unless a namespace is specific on object creation, the default namespace will be used. Audit Option 1 Run this command to list objects in default namespace: kubectl get $(kubectl api-resources --verbs=list --namespaced=true -o name | paste -sd, -) --ignore-not-found -n default The only entries there should be system managed resources such as the kubernetes service. Option 2 kubectl get pods -n default Returning No resources found in default namespace. Remediation Ensure that namespaces are created to allow for appropriate segregation of Kubernetes resources and that all new resources are created in a specific namespace. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base