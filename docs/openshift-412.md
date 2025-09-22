---
id: openshift-412
title: 4.1.2 - Ensure that the kubelet service file ownership is set to root:root (Automated)
sidebar_label: 4.1.2 - Ensure that the kubelet service file ownership is set to root:root (Automated)
description: 4.1.2 - Ensure that the kubelet service file ownership is set to root:root (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.1.2 - Ensure that the kubelet service file ownership is set to root:root (Automated) Profile applicability: Level 1 Ensure that the kubelet service file ownership is set to root:root. The kubelet service file controls various parameters that set the behavior of the kubelet service in the worker node. You should set its file ownership to maintain the integrity of the file. The file should be owned by root:root. Note By default, OpenShift sets the default user and group for the kubelet.service file to root:root. Audit Run the following command to list the user and group for the kubelet.service file on each node: for node in $(oc get nodes -o jsonpath='{.items[*].metadata.name}') do oc debug node/${node} -- chroot /host stat -c %U:%G /etc/systemd/system/kubelet.service done Verify that the ownership is set to root:root. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base