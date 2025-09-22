---
id: openshift-417
title: 4.1.7 - Ensure that the certificate authorities file permissions are set to 644 or more restrictive (Automated)
sidebar_label: 4.1.7 - Ensure that the certificate authorities file permissions are set to 644 or more restrictive (Automated)
description: 4.1.7 - Ensure that the certificate authorities file permissions are set to 644 or more restrictive (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.1.7 - Ensure that the certificate authorities file permissions are set to 644 or more restrictive (Automated) Profile applicability: Level 1 Ensure that the certificate authorities file has permissions of 644 or more restrictive. The certificate authorities file controls the authorities used to validate API requests. You should restrict its file permissions to maintain the integrity of the file. The file should be writable by only the administrators on the system. Note By default, in OpenShift 4, the /etc/kubernetes/kubelet-ca.crt file has permissions set to 644. Audit Use the following command to check the clientCAFile for each node in the cluster: for node in $(oc get nodes -ojsonpath='{.items[*].metadata.name}') do oc get --raw /api/v1/nodes/$node/proxy/configz | jq '.kubeletconfig.authentication.x509.clientCAFile' done The output should look like the following: /etc/kubernetes/kubelet-ca.crt Check the file permissions on each node: for node in $(oc get nodes -o jsonpath='{.items[*].metadata.name}') do oc debug node/${node} -- chroot /host stat -c %a /etc/kubernetes/kubelet-ca.crt done Verify that the permissions are 644. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base