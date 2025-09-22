---
id: preparing-vswitch
title: Prepare a vSwitch
sidebar_label: Prepare a vSwitch
description: Prepare a vSwitch
tags:
  - endpoint-security
  - trend-vision-one
---

 Prepare a vSwitch Set up a vSwitch to prepare to apply recommended network settings. Note The following instructions are valid as of October 2023. Access Terminal in host machine and use the following commands to set up the vSwitch before applying the recommended network settings. The steps below use eth1 as an example. You can apply the settings to any network interface you require. Procedure Open Terminal. Check the current Open vSwitch status. ovs-vsctl show Add a vSwitch. ovs-vsctl add-br ovsbr Verify the current Open vSwitch status. ovs-vsctl show Assign a network inteface to the vSwitch. ovs-vsctl add-port ovsbr eth1 Verify the current Open vSwitch status. ovs-vsctl show Link virtual machines with the vSwitch. List virtual machines. virsh list --all Edit the network interface config file. virsh edit VM-1 The virtual machine config file opens. Locate the <interface> property and edit the parameters. <interface type='bridge'> <source bridge='ovsbr'/> <virtualport type='openvswitch'/> </interface> Save and close the config file. Repeat Step 7 for additional virtual machines, such as VM-2, VM-3, etc. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base