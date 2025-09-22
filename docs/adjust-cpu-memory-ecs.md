---
id: adjust-cpu-memory-ecs
title: Adjust the CPU and memory allocations for ECS clusters
sidebar_label: Adjust the CPU and memory allocations for ECS clusters
description: Adjust the CPU and memory allocations for ECS clusters
tags:
  - endpoint-security
  - trend-vision-one
---

 Adjust the CPU and memory allocations for ECS clusters For Amazon EC2 Scout and Falco containers, Trend recommends allocating a minimum of 256 CPU units and 512MB memory (a total of 512 CPU and 1GB memory per cluster node). This allocation can be adjusted based on cluster node size and observed CPU and memory usage. Procedure Sign in to your AWS account. Navigate to Amazon Elastic Container Service → Task definitions → trendmicro-scout. Click Create new revision. Under Resource allocation limits, adjust the CPU and Memory hard limit fields. Click Create. Navigate to the ECS clusters page, and select trendmicro-scout for your cluster under Services. Under Deployment configuration, check Force new deployment. Under Task definition revision, select the revision that you just created (LATEST). Click Update. Repeat these steps if you make any updates to the Cloud Account Management stack. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base