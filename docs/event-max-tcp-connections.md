---
id: event-max-tcp-connections
title: "Event: Max TCP connections"
sidebar_label: "Event: Max TCP connections"
description: "Event: Max TCP connections"
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Event: Max TCP connections Server & Workload Protection is configured to allow a maximum number of TCP connections to protected computers. When the number of connections exceeds the maximum, network traffic is dropped and Max TCP Connections firewall events occur. To prevent dropped connections, increase the maximum allowed TCP connections on the computer where the Max TCP Connection event occurs. Note The intrusion protection module enables the network engine which enforces the allowed number of TCP connections. Procedure In the Server & Workload Protection console, click Policies. Determine which policy to configure to affect the computer in question. See Policies, inheritance, and overrides. To open the policy that you want to configure, double-click the policy. In the left-hand pane, click Settings and then click the Advanced tab. In the Advanced Network Engine Settings area, if Inherit is selected clear the checkbox to enable changes. Increase the value of the Maximum TCP Connections property to 1000000. Note Starting February 9, 2021, the default value for new tenants is 1000000. For tenants created before this date, the value needs to be updated manually. Click Save. Next steps © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base