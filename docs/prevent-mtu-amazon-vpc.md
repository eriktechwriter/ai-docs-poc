---
id: prevent-mtu-amazon-vpc
title: Prevent MTU-related agent communication issues across Amazon Virtual Private Clouds (VPC)
sidebar_label: Prevent MTU-related agent communication issues across Amazon Virtual Private Clouds (VPC)
description: Prevent MTU-related agent communication issues across Amazon Virtual Private Clouds (VPC)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Prevent MTU-related agent communication issues across Amazon Virtual Private Clouds (VPC) Agents in different VPCs might experience problems when trying to communicate with Server & Workload Protection. This could be because the network maximum transmission unit (MTU) supported by Amazon Web Services is 1500 and agent communication traffic can exceed this, which results in fragmented and dropped packets. You can prevent this MTU-related communication issue from happening by adding a new firewall rule to all firewall policies. The key settings for this new firewall rule are shown in the image below. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base