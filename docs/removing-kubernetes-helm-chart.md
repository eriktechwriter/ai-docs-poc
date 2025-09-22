---
id: removing-kubernetes-helm-chart
title: Removing Container Security by uninstalling the Kubernetes Helm chart
sidebar_label: Removing Container Security by uninstalling the Kubernetes Helm chart
description: Removing Container Security by uninstalling the Kubernetes Helm chart
tags:
  - endpoint-security
  - trend-vision-one
---

 Removing Container Security by uninstalling the Kubernetes Helm chart You can delete all of the resources created by a helm chart using Helm's uninstall command: WARNING helm uninstall and kubectl delete namespace are destructive commands and will delete all associated resources.. helm uninstall trendmicro --namespace ${namespace} Use the helm list --all-namespaces command to list installed releases in all namespaces. If you created a trendmicro-system namespace during install, and do not have any other components in the trendmicro-system namespace, you can delete the namespace by running: kubectl delete namespace trendmicro-system. By default, Container Security continuous compliance creates a Kubernetes network policy for you. The created network policies is not be removed, even if the chart is uninstalled. To remove these policies, run: kubectl delete networkpolicy -l app.kubernetes.io/instance=trendmicro --all-namespaces If you have running Pods that are isolated by a network policy, removing the network policy restores network access. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base