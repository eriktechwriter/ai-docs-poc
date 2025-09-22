---
id: nvs-supported-products
title: Network Vulnerability Scanner supported products
sidebar_label: Network Vulnerability Scanner supported products
description: Network Vulnerability Scanner supported products
tags:
  - endpoint-security
  - trend-vision-one
---

 Network Vulnerability Scanner supported products Learn more about the products supported for vulnerability scanning by the Network Vulnerability Scanner service. Network Vulnerability Scanner supports the following products running supported operating system versions. When authentication credentials are required for the scan template, the account associated with the credentials must have the following permissions. Scans for each product run the following commands to obtain device information. To enable scanning for a particular product, ensure the Network Vulnerability Scanner service on your Service Gateway is updated to at least the required version. Product vendor Operating system Required account permissions Executed commands Required Network Vulnerability Scanner service version Cisco Cisco ASA 8 Cisco ASA 9 Privileged EXEC level or Privilege level 15 show version show clock show interface | include address 1.1.2 or later Cisco IOS 12 Cisco IOS 15 Privileged EXEC level or Privilege level 15 show version show clock show interfaces | i (.* address is) show inventory show running-config show privilege show file systems 1.0.0 or later Fortinet FortiOS 6 FortiOS 7 super_admin_readonly get system status get system performance status get system interface get hardware status get system global | grep timezone 1.0.3 or later Palo Alto Networks Pan-OS 8 Pan-OS 9 Pan-OS 10 Pan-OS 11 Device administrator (read-only) show system state filter cfg.product, show system info, show system state filter cfg.sys.time.zone, show interface management, show interface all, show system state filter cfg.platform.memory 1.1.0 or later © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base