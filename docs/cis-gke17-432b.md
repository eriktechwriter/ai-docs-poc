---
id: cis-gke17-432b
title: 4.3.2 - Ensure that all Namespaces have Network Policies defined (Automated)
sidebar_label: 4.3.2 - Ensure that all Namespaces have Network Policies defined (Automated)
description: 4.3.2 - Ensure that all Namespaces have Network Policies defined (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ 4.3.2 - Ensure that all Namespaces have Network Policies defined (Automated) Profile applicability: Level 2 Use network policies to isolate traffic in the cluster network. Running different applications on the same Kubernetes cluster creates a risk of one compromised application attacking a neighboring application. Network segmentation is important to ensure that containers can communicate only with those they are supposed to. A network policy is a specification of how selections of pods are allowed to communicate with each other and other network endpoints. Network Policies are namespace scoped. When a network policy is introduced to a given namespace, all traffic not allowed by the policy is denied. However, if there are no network policies in a namespace all traffic will be allowed into and out of the pods in that namespace. Note By default, network policies are not created. Impact Once network policies are in use within a given namespace, traffic not explicitly allowed by a network policy will be denied. As such it is important to ensure that, when introducing network policies, legitimate traffic is not blocked. Audit Run the below command and review the NetworkPolicy objects created in the cluster. kubectl get networkpolicy --all-namespaces ensure that each namespace defined in the cluster has at least one Network Policy. Remediation Follow the documentation and create NetworkPolicy objects as needed. See the Kubernetes documentation for more information. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base