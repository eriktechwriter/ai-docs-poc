---
id: internal-traffic-hyper-v-host
title: Configure internal network traffic on Hyper-V host
sidebar_label: Configure internal network traffic on Hyper-V host
description: Configure internal network traffic on Hyper-V host
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configure internal network traffic on Hyper-V host Configure internal network traffic to allow Virtual Network Sensor to monitor data. Note The following instructions are valid as of March 2024. Procedure On the host machine, access the Hyper-V Manager. Set the Virtual Network Sensor as the traffic mirror target. Right-click the Virtual Network Sensor virtual machine, and select Settings... In the settings window, use the navigation bar to go to Network Adapter (Data Switch) → Advanced Features. Under the Port mirroring section, set Mirroring mode to Destination. Click Apply, then click OK. Locate the virtual machine you want to monitor and set it as the traffic mirror source. Right-click the source virtual machine, and select Settings... In the settings window, use the navigation bar to go to Network Adapter (Data Switch) → Advanced Features. Under the Port mirroring section, set Mirroring mode to Source. Click Apply, then click OK. Repeat step 3 for any additional virtual machines you want to monitor with the Virtual Network Sensor. After configuring your network settings, access the Virtual Network Sensor console and use the command show traffic to verify the Virtual Network Sensor is receiving traffic. For more information about troubleshooting, see Virtual Network Sensor FAQ and Virtual Network Sensor CLI commands. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base