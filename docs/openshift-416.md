---
id: openshift-416
title: 4.1.6 - Ensure that the --kubeconfig kubelet.conf file ownership is set to root:root (Automated)
sidebar_label: 4.1.6 - Ensure that the --kubeconfig kubelet.conf file ownership is set to root:root (Automated)
description: 4.1.6 - Ensure that the --kubeconfig kubelet.conf file ownership is set to root:root (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.1.6 - Ensure that the --kubeconfig kubelet.conf file ownership is set to root:root (Automated) Profile applicability: Level 1 Ensure that the kubelet.conf file ownership is set to root:root. The kubelet.conf file is the Kubernetes configuration file for the node, and controls various parameters that set the behavior and identity of the worker node. You should set its file ownership to maintain the integrity of the file. The file should be owned by root:root. Note By default, kubelet.conf file ownership is set to root:root. Audit Run the following command to view the user and group ownership of the kubelet.conf file: for node in $(oc get nodes -o jsonpath='{.items[*].metadata.name}') do oc debug node/${node} -- chroot /host stat -c %U:%G /etc/kubernetes/kubelet.conf done Verify that the ownership is set to root:root. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base