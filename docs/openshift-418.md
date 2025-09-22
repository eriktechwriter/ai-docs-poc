---
id: openshift-418
title: 4.1.8 - Ensure that the client certificate authorities file ownership is set to root:root (Automated)
sidebar_label: 4.1.8 - Ensure that the client certificate authorities file ownership is set to root:root (Automated)
description: 4.1.8 - Ensure that the client certificate authorities file ownership is set to root:root (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.1.8 - Ensure that the client certificate authorities file ownership is set to root:root (Automated) Profile applicability: Level 1 Ensure that the certificate authorities file ownership is set to root:root. The certificate authorities file controls the authorities used to validate API requests. You should set its file ownership to maintain the integrity of the file. The file should be owned by root:root. Note By default, in OpenShift 4, the --client-ca-file is set to /etc/kubernetes/kubelet-ca.crt with ownership root:root. Audit The Client CA location for the kubelet is defined in /etc/kubernetes/kubelet.conf and is /etc/kubernetes/kubelet-ca.crt by default. Run the following command to view the user and group ownership: for node in $(oc get nodes -o jsonpath='{.items[*].metadata.name}') do oc debug node/${node} -- chroot /host stat -c %U:%G /etc/kubernetes/kubelet-ca.crt done Verify that the ownership is set to root:root. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base