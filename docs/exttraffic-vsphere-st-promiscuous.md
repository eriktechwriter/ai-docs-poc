---
id: exttraffic-vsphere-st-promiscuous
title: Configure External Network Traffic with the VMware vSphere Standard Switch (Promiscuous Mode)
sidebar_label: Configure External Network Traffic with the VMware vSphere Standard Switch (Promiscuous Mode)
description: Configure External Network Traffic with the VMware vSphere Standard Switch (Promiscuous Mode)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configure External Network Traffic with the VMware vSphere Standard Switch (Promiscuous Mode) Configure network settings in VMware ESXi to allow Virtual Network Sensor to monitor data. Important The following instructions are valid as of June 2023. Procedure On the VMware ESXi console, go to Networking → Virtual switches. Click Add standard virtual switch, and specify the following settings: Type Data Network in the vSwitch name field. Type 1600 in the MTU field. Select the NIC for the data network from the Uplink 1 dropdown. Click Security to expand the settings, and select Reject for Promiscuous mode, MAC address changes, and Forged transmits. Note Send the network traffic you want to scan to the data port. The following instructions use promiscuous mode to enable Virtual Network Sensor to scan your network traffic. Click Add. Go to the Port groups tab. Click Add port group, and specify the following settings: Type Data Port Group in the Name field. Type 4095 in the VLAN ID field. Select Data Network from the Virtual switch dropdown. Click Security to expand the settings, and select Accept for promiscuous mode. Select Inherit from vSwitch for both MAC address changes and forged transmits. Click Add. On the Port groups tab, click Data port group and verify the connection to Data Network. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base