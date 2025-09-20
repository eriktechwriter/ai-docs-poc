---
id: ports-urls-used-network-sensor
title: Ports and URLs used by Virtual Network Sensor
sidebar_label: Ports and URLs used by Virtual Network Sensor
description: Ports and URLs used by Virtual Network Sensor
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Ports and URLs used by Virtual Network Sensor Use these settings to configure your firewall and connected products. In order for Virtual Network Sensor to send data to Network Security, configure your product with the ports and URLs listed below. To the full list of firewall and FQDN exceptions, see Firewall exception requirements for Trend Vision One. Listen Ports Port Purpose 22 CLISH console connection, log (if the Virtual Network Sensor is registered in SSH) 68 DHCP server responses 80 Debug log export Outbound Ports Port Purpose 53 DNS resolution 67 Requests to DHCP server if IP addresses are assigned dynamically 123 Connection to NTP server for time synchronization (default NTP server: pool.ntp.org) 137 IP address to host name resolution through NetBIOS 443 Smart Protection Network anonymous threat information sharing © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base