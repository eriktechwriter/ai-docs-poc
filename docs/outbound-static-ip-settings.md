---
id: outbound-static-ip-settings
title: Outbound static IP settings
sidebar_label: Outbound static IP settings
description: Outbound static IP settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Outbound static IP settings Configure outbound static IP settings to forward outbound web traffic through static IP addresses provisioned via the Internet Access Cloud Gateway. Unmanaged devices cannot use the static outbound IP from public or home networks. To use this feature, the user must either: Deploy the Secure Access Module to all endpoints, or Add the Internet Access Cloud gateway with their corporate public IP address. If outbound static IP settings are enabled, Trend Vision One provisions your organization with two fixed-bandwidth static IP addresses based in a chosen regional point-of-presence (PoP). Selected outbound web traffic is forwarded through the provisioned static IP addresses rather than dynamically assigned IP addresses, allowing access to web resources that only accept static IP address requests. Related information Configure an outbound static IP pair Modify an outbound static IP pair Delete an outbound static IP pair Bandwidth usage chart The Outbound Static IP page also contains a usage graph of the bandwidth usage. Select the region and time range whose data you want to see, and the bandwidth usage for each of the IPs is displayed. The bandwidth usage value is the average value for the specified interval period. Note that the bandwidth usage includes internal health check traffic. Note You can only view one region at a time. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base