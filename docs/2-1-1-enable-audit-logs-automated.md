---
id: 2-1-1-enable-audit-logs-automated
title: 2.1.1 - Enable audit logs (automated)
sidebar_label: 2.1.1 - Enable audit logs (automated)
description: 2.1.1 - Enable audit logs (automated)
tags:
  - endpoint-security
  - trend-vision-one
---

 2.1.1 - Enable audit logs (automated) Profile applicability: Level 1 - Cluster / Control Plane This recommendation emphasizes the importance of enabling audit logs for the EKS control plane to track all API server requests, whether they are accepted or rejected. Audit logs provide crucial visibility into the API server requests made by both authenticated and anonymous sources. Note By default, all control plane logging is disabled. Audit From the AWS console: Go to Amazon EKS → Clusters → cluster_name → Configuration → Logging. Check if the following options are set to 'Enabled': API server Audit Authenticator Controller manager Scheduler Repeat for each EKS Cluster in each region. From the CLI: Open your terminal. Run the following commands: export CLUSTER_NAME=<your cluster name> export REGION_CODE=<your region_code> aws eks describe-cluster --name ${CLUSTER_NAME} --region ${REGION_CODE} --query 'cluster.logging.clusterLogging' Repeat for each EKS Cluster in each region. Remediation From the AWS console: For each EKS Cluster in each region: Go to Amazon EKS → Clusters → CLUSTER_NAME → Configuration → Logging. Click Manage logging. Ensure the following options are toggled to 'Enabled': API server Audit Authenticator Controller manager Scheduler Click Save Changes. Repeat for each EKS Cluster in each region. From the CLI: Open your terminal. Run the following commands: aws eks update-cluster-config \ --region '${REGION_CODE}' \ --name '${CLUSTER_NAME}' \ --logging '{"clusterLogging":[{"types":["api","audit","authenticator","controllerManager","scheduler"],"enabled":true}]}' Repeat for each EKS Cluster in each region. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base