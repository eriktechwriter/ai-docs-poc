---
id: vm-traffic-erspan-hyper-v
title: Configure external inter-VM traffic with ERSPAN (Hyper-V host)
sidebar_label: Configure external inter-VM traffic with ERSPAN (Hyper-V host)
description: Configure external inter-VM traffic with ERSPAN (Hyper-V host)
tags:
  - endpoint-security
  - trend-vision-one
---

 Configure external inter-VM traffic with ERSPAN (Hyper-V host) Configure network settings to allow Virtual Network Sensor to monitor data. Note The following instructions are valid as of March 2024. These instructions are only for Virtual Network Sensors deployed on a Hyper-V host machine. Before you begin, make sure the virtual switch the Data Port connects to can connect to the internet. Procedure On the Virtual Network Sensor CLI console, type show interface and choose a network interface that shows "Supported" for Encapsulated Remote Mirroring. Execute the enable command. Execute the configure interface <network_interface> command. Execute the ip-encap enable [xxx.xxx.xxx.xxx] command. Type # exit to return to basic commands and verify that the IP address is shown next to Encapsulated Remote Mirroring. After configuring your network settings, access the Virtual Network Sensor console and use the command show traffic to verify the Virtual Network Sensor is receiving traffic. For more information about troubleshooting, see Virtual Network Sensor FAQ and Virtual Network Sensor CLI commands. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base