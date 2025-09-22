---
id: openshift-422
title: 4.2.2 - Ensure that the --anonymous-auth argument is set to false (Automated)
sidebar_label: 4.2.2 - Ensure that the --anonymous-auth argument is set to false (Automated)
description: 4.2.2 - Ensure that the --anonymous-auth argument is set to false (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 4.2.2 - Ensure that the --anonymous-auth argument is set to false (Automated) Profile applicability: Level 1 Disable anonymous requests to the Kubelet server. When enabled, requests that are not rejected by other configured authentication methods are treated as anonymous requests. These requests are then served by the Kubelet server. You should rely on authentication to authorize access and disallow anonymous requests. Note By default, anonymous access is set to false. Impact Anonymous requests will be rejected. Audit In OpenShift 4, the Kubernetes configuration file is managed by the Machine Config Operator and anonymous-auth is set to false by default. Run the following command on each node to the configuration of anonymous authentication: for node in $(oc get nodes -ojsonpath='{.items[*].metadata.name}'); do oc get --raw /api/v1/nodes/$node/proxy/configz | jq '.kubeletconfig.authentication.anonymous.enabled' done Verify that the configuration for each node returns false. Remediation Create a kubeletconfig to explicitly disable anonymous authentication. Examples of how to do this can be found in the OpenShift documentation. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base