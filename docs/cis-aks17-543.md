---
id: cis-aks17-543
title: 5.4.3 - Ensure clusters are created with Private Nodes (Automated)
sidebar_label: 5.4.3 - Ensure clusters are created with Private Nodes (Automated)
description: 5.4.3 - Ensure clusters are created with Private Nodes (Automated)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ 5.4.3 - Ensure clusters are created with Private Nodes (Automated) Profile Applicability: Level 1 Disable public IP addresses for cluster nodes, so that they only have private IP addresses. Private Nodes are nodes with no public IP addresses. Disabling public IP addresses on cluster nodes restricts access to only internal networks, forcing attackers to obtain local network access before attempting to compromise the underlying Kubernetes hosts. Impact To enable Private Nodes, the cluster has to also be configured with a private master IP range and IP Aliasing enabled. Private Nodes do not have outbound access to the public internet. If you want to provide outbound Internet access for your private nodes, you can use Cloud NAT or you can manage your own NAT gateway. Audit Check for the following to be 'enabled: true': export CLUSTER_NAME=<your cluster name> export RESOURCE_GROUP=<your resource group name> az aks show --name ${CLUSTER_NAME} --resource-group ${RESOURCE_GROUP} --query "apiServerAccessProfile.enablePrivateCluster" Remediation az aks create \ --resource-group <private-cluster-resource-group> \ --name <private-cluster-name> \ --load-balancer-sku standard \ --enable-private-cluster \ --network-plugin azure \ --vnet-subnet-id <subnet-id> \ --docker-bridge-address \ --dns-service-ip \ --service-cidr Where --enable-private-cluster is a mandatory flag for a private cluster. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base