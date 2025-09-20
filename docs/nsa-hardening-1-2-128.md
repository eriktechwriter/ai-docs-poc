---
id: nsa-hardening-1-2-128
title: 1.2.8 - Ensure that the --authorization-mode argument includes Node (Automated)
sidebar_label: 1.2.8 - Ensure that the --authorization-mode argument includes Node (Automated)
description: 1.2.8 - Ensure that the --authorization-mode argument includes Node (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ 1.2.8 - Ensure that the --authorization-mode argument includes Node (Automated) Profile applicability: Level 1 - Master Node Restrict kubelet nodes to reading only objects associated with them. The Node authorization mode only allows kubelets to read Secret, ConfigMap, PersistentVolume, and PersistentVolumeClaim objects associated with their nodes. Note By default, Node authorization is not enabled. Audit Run the following command on the Control Plane node: ps -ef | grep kube-apiserver Verify that the --authorization-mode argument exists and is set to a value to include Node. Remediation Edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml on the Control Plane node and set the --authorization-mode parameter to a value that includes Node. --authorization-mode=Node,RBAC © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base