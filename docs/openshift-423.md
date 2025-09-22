---
id: openshift-423
title: 4.2.3 - Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)
sidebar_label: 4.2.3 - Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)
description: 4.2.3 - Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.2.3 - Ensure that the --authorization-mode argument is not set to AlwaysAllow (Automated) Profile applicability: Level 1 Do not allow all requests. Enable explicit authorization. Kubelets, by default, allow all authenticated requests (even anonymous ones) without needing explicit authorization checks from the API server. You should restrict this behavior and only allow explicitly authorized requests. Note By default, OpenShift uses Webhook authorization. Impact Unauthorized requests will be denied. Audit In OpenShift 4, the Kubernetes configuration file is managed by the Machine Config Operator. By default, OpenShift rejects unauthenticated and unauthorized users. You can verify that each node in the cluster is configured to only accept authenticated users with the following command: for node in $(oc get nodes -ojsonpath='{.items[*].metadata.name}'); do oc get --raw /api/v1/nodes/$node/proxy/configz | jq '.kubeletconfig.authorization.mode' done Verify none of the nodes return AlwaysAllow for the authorization mode. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base