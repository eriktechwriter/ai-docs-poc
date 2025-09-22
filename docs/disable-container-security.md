---
id: disable-container-security
title: Disabling Container Security
sidebar_label: Disabling Container Security
description: Disabling Container Security
tags:
  - endpoint-security
  - trend-vision-one
---

 Disabling Container Security You can easily disable Container Security on a cluster if you no longer require protection. Disabling Container Security on Kubernetes and Amazon ECS clusters is a straightforward task. For Kubernetes clusters, you can also uninstall the Helm chart to remove Container Security. For Amazon ECS clusters, there are other methods available if you want to remove protection at the account level. Note Disabling Container Security on a cluster does not delete existing data received by Trend Vision One. Procedure To disable Container Security on a Kubernetes cluster: Go to Cloud Security → Container Security → Inventory/Overview. Select the Kubernetes node in the tree. Select the radio button next to the necessary cluster. Click Remove Cluster. To disable Container Security on an Amazon ECS cluster: Go to Cloud Security → Container Security → Inventory/Overview. Select the Amazon ECS node in the tree. Click the necessary cluster name. Turn off Runtime Security. Turn off Runtime Scanning. Click Save. Related information Removing Container Security by uninstalling the Kubernetes Helm chart Removing Container Security from your AWS account © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base