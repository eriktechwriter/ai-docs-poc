---
id: amazon-eks-fargate-sys-reqs
title: Amazon EKS Fargate system requirements
sidebar_label: Amazon EKS Fargate system requirements
description: Amazon EKS Fargate system requirements
tags:
  - endpoint-security
  - trend-vision-one
---

 Amazon EKS Fargate system requirements You can deploy Container Security along with AWS Fargate to your Amazon EKS cluster. You need to add a cluster with Runtime Security enabled, and have the Helm chart deploy the "fargate-injector" into the Amazon EKS cluster. trendmicro-security runs as a sidecar and attaches to the application like a debugger in order to monitor suspicious events. As a result, the business application might be affected in the Fargate environment when trendmicro-security stops. When deploying Container Security with EKS Fargate, you should be aware of the following: The container must have internet access. Each Fargate node uses 8MB shared memory, and each Fargate node has a limit of 64MB Container Security uses ptrace to inspect the containers. If you are also using ptrace, the monitoring may not work. Monitored programs SUID and SGID have no effect. Additional CPU resources are required for the following: CPU: An extra 1 for each container Memory: +32MiB for each container The injected sidecar requires 1 vCPU and 1024MiB memory Mitigation of runtime rulesets only supports "Log" and "Terminate". Note "Isolate" requires Calico CNI to be installed, but Fargate with EKS currently does not support Calico. For more information, see Installing the Calico network policy engine add-on © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base