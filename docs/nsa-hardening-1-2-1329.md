---
id: nsa-hardening-1-2-1329
title: 1.3.29 - Ensure that the --encryption-provider-config argument is set as appropriate (Automated)
sidebar_label: 1.3.29 - Ensure that the --encryption-provider-config argument is set as appropriate (Automated)
description: 1.3.29 - Ensure that the --encryption-provider-config argument is set as appropriate (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ 1.3.29 - Ensure that the --encryption-provider-config argument is set as appropriate (Automated) Profile applicability: Level 1 Master Node Encrypt etcd key-value store. etcd is a highly available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive in nature and should be encrypted at rest to avoid any disclosures. Note By default, --encryption-provider-config is not set. Audit Run the following command on the Control Plane node: ps -ef | grep kube-apiserver Verify that the --encryption-provider-config argument is set to a EncryptionConfig file. Additionally, ensure that the EncryptionConfig file has all the desired resources covered especially any secrets. Remediation Follow the Kubernetes documentation and configure a EncryptionConfig file. Then, edit the API server pod specification file /etc/kubernetes/manifests/kube-apiserver.yaml on the master node and set the --encryption-provider-config parameter to the path of that file: --encryption-provider-config=</path/to/EncryptionConfig/File> © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base