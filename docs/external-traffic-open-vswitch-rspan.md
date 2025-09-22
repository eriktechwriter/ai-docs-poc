---
id: external-traffic-open-vswitch-rspan
title: Configure external network traffic with Open vSwitch (RSPAN)
sidebar_label: Configure external network traffic with Open vSwitch (RSPAN)
description: Configure external network traffic with Open vSwitch (RSPAN)
tags:
  - endpoint-security
  - trend-vision-one
---

 Configure external network traffic with Open vSwitch (RSPAN) Configure external network traffic with the Open vSwitch using RSPAN to allow Virtual Network Sensor to monitor data. Note The following instructions are valid as of October 2023. Before you begin, make sure you have prepared a vSwitch. Procedure Access Terminal on the host machine. Verify the name of the network interface you want to configure as the SPAN destination and source. List virtual machines. virsh list --all Check the name of the network interface for the virtual machines. virsh domiflist VM-1 Repeat for all other virtual machines (VM-2, VM-3, etc.). Clear mirror settings. ovs-vsctl clear bridge ovsbr mirrors Configure SPAN settings. ovs-vsctl \ -- set bridge ovsbr mirrors=@m \ -- --id=@s1 get port eth1 \ -- --id=@d get port vnet0 \ -- --id=@m create mirror name=m0 select-dst-port=@s1 select-src-port=@s1 output-port=@d select-all=true select-vlan=17 Note The example code uses vnet0 as the destination and the physical port eth1 as the source. You can change the port names to suit the needs of your deployment. Verify mirror settings. ovs-vsctl -- list bridge ovs-vsctl -- list mirror After configuring your network settings, access the Virtual Network Sensor console and use the command show traffic to verify the Virtual Network Sensor is receiving traffic. For more information about troubleshooting, see Virtual Network Sensor FAQ and Virtual Network Sensor CLI commands. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base