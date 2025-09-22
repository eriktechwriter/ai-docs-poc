---
id: cis-eks-412
title: 4.1.2 - Minimize access to secrets (Automated)
sidebar_label: 4.1.2 - Minimize access to secrets (Automated)
description: 4.1.2 - Minimize access to secrets (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.1.2 - Minimize access to secrets (Automated) Profile applicability: Level 1 The Kubernetes API stores secrets, which may be service account tokens for the Kubernetes API or credentials used by workloads in the cluster. Access to these secrets should be restricted to the smallest possible group of users to reduce the risk of privilege escalation. Inappropriate access to secrets stored within the Kubernetes cluster can allow for an attacker to gain additional access to the Kubernetes cluster or external resources whose credentials are stored as secrets. Note By default, the following list of principals have get privileges on secret objects: CLUSTERROLEBINDING SUBJECT TYPE SA-NAMESPACE cluster-admin system:masters Group system:controller:clusterrole-aggregation-controller clusterrole- aggregation-controller ServiceAccount kube-system system:controller:expand-controller expand-controller ServiceAccount kube-system system:controller:generic-garbage-collector generic-garbage- collector ServiceAccount kube-system system:controller:namespace-controller namespace-controller ServiceAccount kube-system system:controller:persistent-volume-binder persistent-volume- binder ServiceAccount kube-system system:kube-controller-manager system:kube-controller- manager User Impact Care should be taken not to remove access to secrets to system components which require this for their operation. Audit Review the users who have get, list or watch access to secrets objects in the Kubernetes API. Remediation Where possible, remove get, list and watch access to secret objects in the cluster. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base