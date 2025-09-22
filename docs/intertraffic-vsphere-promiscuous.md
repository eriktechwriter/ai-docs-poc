---
id: intertraffic-vsphere-promiscuous
title: Configure internal network traffic with the VMware vSphere Standard Switch (promiscuous mode)
sidebar_label: Configure internal network traffic with the VMware vSphere Standard Switch (promiscuous mode)
description: Configure internal network traffic with the VMware vSphere Standard Switch (promiscuous mode)
tags:
  - endpoint-security
  - trend-vision-one
---

 Configure internal network traffic with the VMware vSphere Standard Switch (promiscuous mode) Configure internal network traffic with the VMware vSphere Standard Switch in promiscuous mode to allow Virtual Network Sensor to monitor data. Important The following instructions are valid as of July 2023. Procedure Turn off your Virtual Network Sensor. On the VMware vCenter console, click the tab. Click the name of your virtual machine. Go to Configure → Virtual switches → ADD NETWORKING. On the Add Networking screen, select Virtual Machine Port Group for a Standard Switch and click NEXT. Select Select an existing standard switch and click NEXT. Type a name for your Network label, select All (4095) for the VLAN ID, and click NEXT. Click FINISH. Click on your port group and select Edit Settings. Click Security and then select Override and Accept for promiscuous mode. Select Reject for MAC address changes and forged transmits and click OK. Click the name of your Virtual Network Sensor and click . On the Edit Settings screen, click Network adapter 2 and select Browse... Select the port group you created and click OK. Turn on your Virtual Network Sensor. After configuring your network settings, access the Virtual Network Sensor console and use the command show traffic to verify the Virtual Network Sensor is receiving traffic. For more information about troubleshooting, see Virtual Network Sensor FAQ and Virtual Network Sensor CLI commands. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base