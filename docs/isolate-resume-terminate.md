---
id: isolate-resume-terminate
title: Container response actions (Isolate/Resume, Terminate)
sidebar_label: Container response actions (Isolate/Resume, Terminate)
description: Container response actions (Isolate/Resume, Terminate)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Container response actions (Isolate/Resume, Terminate) Through integration with the Response Management app, you can isolate, restore connection, and terminate containers throughout the Trend Vision One console using the context menu. Depending on the type of container, direct response actions are available throughout the Trend Vision One console (for example, on the Workbench, Observed Attack Techniques, and Search apps) that you can then track using Response Management. Important Before Kubernetes isolation is available, you must ensure that you have a network policy deployed on your cluster. By default, Container Security continuous compliance creates a Kubernetes network policy but you can manually create a Kubernetes network policy for continuous compliance. Supported response actions Container type Isolate/Resume Container Terminate Container Microsoft AKS Supported Important Requires the Calico network policy. Supported Google GKE Supported Important Requires the Calico network policy. Supported Amazon EKS (without Fargate) Supported Supported Amazon EKS (with Fargate) Not supported Supported Amazon ECS (with and without Fargate) Not supported Supported Red Hat OpenShift Supported Supported OKD Supported Supported For more information on each task, refer to the following: Isolate Container task Resume Container task Terminate Container task © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base