---
id: configure-proxy-ECS-instances
title: Configure a proxy for ECS instances
sidebar_label: Configure a proxy for ECS instances
description: Configure a proxy for ECS instances
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configure a proxy for ECS instances Add a proxy server for Cloud Security to connect with your EC2 and AWS Fargate clusters. Important If your instance contains Fargate clusters, you must also modify the Task Definition file in your AWS account. For more information, see Set up connected Amazon ECS Fargate clusters. You can set up proxy connections for individual clusters in your AWS ECS instances. Procedure On the Inventory/Overview page, select the ECS cluster you want to configure.The Cluster Details page opens. Ensure that Runtime Security is on. Important In order to create, use, or modify a proxy, you must have Runtime security enabled. Click Proxy settings. If your ECS instance contains Fargate clusters, you must update the Task Definition file using the -p flag. For more information, see Set up connected Amazon ECS Fargate clusters. If your ECS instance contains EC2 clusters, the Proxy Settings window appears. Configure the settings shown for your EC2 clusters. Turn on Use proxy. Select the proxy protocol. Specify the Proxy address. Specify the Port number. If your proxy requires authentication, select Require authentication credentials, then specify the Account and Password credentials. Click OK. On the Cluster Details page, click Save. Important You must click Save on the cluster details page in order for the proxy settings take effect. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base