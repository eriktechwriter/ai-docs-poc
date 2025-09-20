---
id: internal-traffic-open-vswitch-span
title: Configure internal network traffic with Open vSwitch (SPAN)
sidebar_label: Configure internal network traffic with Open vSwitch (SPAN)
description: Configure internal network traffic with Open vSwitch (SPAN)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configure internal network traffic with Open vSwitch (SPAN) Configure internal network traffic with the Open vSwitch using to allow Virtual Network Sensor to monitor data. Note The following instructions are valid as of October 2023. Before you begin, make sure you have prepared a vSwitch. Procedure Access Terminal on the host machine. Verify the name of the network interface you want to configure as the SPAN destination and source. List virtual machines. virsh list --all Check the name of the network interface for the virtual machines. virsh domiflist VM-1 Repeat for all other virtual machines (VM-2, VM-3, etc.). Clear mirror settings. ovs-vsctl clear bridge ovsbr mirrors Configure SPAN settings. ovs-vsctl \ -- set bridge ovsbr mirrors=@m \ -- --id=@s1 get port vnet1 \ -- --id=@s2 get port vnet2 \ -- --id=@d get port vnet0 \ -- --id=@m create mirror name=m0 select-dst-port=@s1,@s2 select-src-port=@s1,@s2 output-port=@d select-all=true Note The example code uses vnet0 as the destination and vnet1, vnet2 as the source. You can change the port names to suit the needs of your deployment. Verify mirror settings. ovs-vsctl -- list bridge ovs-vsctl -- list mirror After configuring your network settings, access the Virtual Network Sensor console and use the command show traffic to verify the Virtual Network Sensor is receiving traffic. For more information about troubleshooting, see Virtual Network Sensor FAQ and Virtual Network Sensor CLI commands. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base