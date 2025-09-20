---
id: external-pci-passthrough-rspan
title: Configure external network traffic with PCI passthrough (SPAN/RSPAN)
sidebar_label: Configure external network traffic with PCI passthrough (SPAN/RSPAN)
description: Configure external network traffic with PCI passthrough (SPAN/RSPAN)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configure external network traffic with PCI passthrough (SPAN/RSPAN) Configure external network traffic with a PCI passthrough using SPAN or RSPAN to allow Virtual Network Sensor to monitor data. Important The following instructions are valid as of July 2023. Note You must use a vCenter administrator account. Procedure Turn off your Virtual Network Sensor. On the vCenter console, configure the SPAN or RSPAN protocol for the network traffic you want to monitor. Click the tab, and then click Configure. Go to Hardware → PCI Devices and click ALL PCI DEVICES. Select your port from the list and click TOGGLE PASSTHROUGH. Click the tab and then click the name of your virtual appliance. Click . On the Edit Settings screen, click ADD NEW DEVICE and select PCI Device. Select DirecPath IO and the port you chose before. Click OK. Turn on your Virtual Network Sensor. After configuring your network settings, access the Virtual Network Sensor console and use the command show traffic to verify the Virtual Network Sensor is receiving traffic. For more information about troubleshooting, see Virtual Network Sensor FAQ and Virtual Network Sensor CLI commands. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base