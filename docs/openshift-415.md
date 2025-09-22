---
id: openshift-415
title: 4.1.5 - Ensure that the --kubeconfig kubelet.conf file permissions are set to 644 or more restrictive (Automated)
sidebar_label: 4.1.5 - Ensure that the --kubeconfig kubelet.conf file permissions are set to 644 or more restrictive (Automated)
description: 4.1.5 - Ensure that the --kubeconfig kubelet.conf file permissions are set to 644 or more restrictive (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.1.5 - Ensure that the --kubeconfig kubelet.conf file permissions are set to 644 or more restrictive (Automated) Profile applicability: Level 1 Ensure that the kubelet.conf file has permissions of 644 or more restrictive. The kubelet.conf file is the kubeconfig file for the node, and controls various parameters that set the behavior and identity of the worker node. You should restrict its file permissions to maintain the integrity of the file. The file should be writable by only the administrators on the system. Note By default, OpenShift sets the default permissions for the kubelet.conf to 644. Audit Run the following command to check the permissions of the kubelet.conf on each node: for node in $(oc get nodes -o jsonpath='{.items[*].metadata.name}') do oc debug node/${node} -- chroot /host stat -c %a /etc/kubernetes/kubelet.conf done Verify that the permissions are 644. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base