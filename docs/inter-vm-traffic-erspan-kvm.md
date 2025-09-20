---
id: inter-vm-traffic-erspan-kvm
title: Configure external inter-VM traffic with ERSPAN (KVM host)
sidebar_label: Configure external inter-VM traffic with ERSPAN (KVM host)
description: Configure external inter-VM traffic with ERSPAN (KVM host)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configure external inter-VM traffic with ERSPAN (KVM host) Configure network settings to allow Virtual Network Sensor to monitor data. Note The following instructions are valid as of October 2023. These instructions are only for Virtual Network Sensors deployed on a KVM host machine. Before you begin, make sure you have prepared a vSwitch. Procedure On the Virtual Network Sensor CLI console, type show interface and choose a network interface that shows "Supported" for Encapsulated Remote Mirroring. Execute the enable command. Execute the configure interface <network_interface> command. Execute the ip-encap enable [xxx.xxx.xxx.xxx] command. Type # exit to return to basic commands and verify that the IP address is shown next to Encapsulated Remote Mirroring. After configuring your network settings, access the Virtual Network Sensor console and use the command show traffic to verify the Virtual Network Sensor is receiving traffic. For more information about troubleshooting, see Virtual Network Sensor FAQ and Virtual Network Sensor CLI commands. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base