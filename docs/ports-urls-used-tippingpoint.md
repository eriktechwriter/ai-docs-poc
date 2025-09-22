---
id: ports-urls-used-tippingpoint
title: Ports and URLs used by TippingPoint
sidebar_label: Ports and URLs used by TippingPoint
description: Ports and URLs used by TippingPoint
tags:
  - endpoint-security
  - trend-vision-one
---

 Ports and URLs used by TippingPoint Review settings to configure your firewall and connected products. In order for TippingPoint to send data to Network Security, you must configure your firewall to allow communication with certain ports and FQDNs. To connect TippingPoint only, configure the FQDN exceptions for Intrusion Prevention Configuration listed in Firewall exception requirements for Trend Vision One. To enable the Network Sensor on your TippingPoint devices, configure the FQDN exceptions for Intrusion Prevention Configuration and Virtual Network Sensor listed in Firewall exception requirements for Trend Vision One. Additionally, configure the following ports. Listen Ports Port Purpose 22 CLISH console connection, log (if the Virtual Network Sensor is registered in SSH) 68 DHCP server responses 80 Debug log export Outbound Ports Port Purpose 53 DNS resolution 67 Requests to DHCP server if IP addresses are assigned dynamically 123 Connection to NTP server for time synchronization (default NTP server: pool.ntp.org) 137 IP address to host name resolution through NetBIOS 443 Smart Protection Network anonymous threat information sharing © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base