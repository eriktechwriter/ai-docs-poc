---
id: '-pci-passthrough-kvm-host'
title: Configure external network traffic with PCI passthrough (KVM host)
sidebar_label: Configure external network traffic with PCI passthrough (KVM host)
description: Configure external network traffic with PCI passthrough (KVM host)
tags:
  - administration
  - configuration
  - beginner
  - end-user
  - troubleshooting
  - trend-vision-one
  - documentation
category: administration
audience: end-user
complexity: beginner
wordCount: 376
readingTime: 2
aiOptimized: true
optimizationScore: 0
qualityScore: 73
lastAnalyzed: '2025-09-18T23:37:14.380Z'
lastUpdated: '2025-09-18T23:37:14.383Z'
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configure external network traffic with PCI passthrough (KVM host) Configure external network traffic with a PCI passthrough to allow Virtual Network Sensor to monitor data. Note The following instructions are valid as of October 2023. These instructions are only for Virtual Network Sensors deployed on a KVM host machine. Before you begin, make sure you have prepared a vSwitch. Procedure Access Terminal on the host machine. Verify if IOMMU is turned on. You can use one of two methods to check if IOMMU is turned on or off. cat /proc/cmdline Example output if IOMMU is on: intel_iommu=on dmesg | grep -i mmu Example output if IOMMU is on: iommu: Default domain type: Passthrough If IOMMU is turned off, configure grub and reboot. Configure grub. sudo grubby --update-kernel ALL --args 'intel_iommu=on iommu=pt' Reboot the machine. sudo reboot After reboot completes, verify that IOMMU is turned on. cat /proc/cmdline or dmesg | grep -i mmu Check bus-info of the network interface you want to use for PCI passthrough. ethtool -i eth1 An example output is: bus-info: 0000:1b:00.0 Note The example code uses eth1 as the target network interface. You can choose the network interface that best suits the needs of your deployment. Find the iommu group of the PCI passthrough network interface. dmesg | grep '0000:1b:00.0' Get the PCI info of other iommu group members. For example, if the network interface is in group 8, use the command: dmesg | grep 'iommu group 8' Detach all iommu group members. sudo virsh nodedev-detach <pci-info> For example, to detach the eth1 port example used in these steps, use the command sudo virsh nodedev-detach pci_0000_1b_00_0 On the host machine, open the Virtual Machine Manager. Double-click your Virtual Network Sensor. Click Add Hardware. Go to PCI Host Device and select the position of the PCI passthrough. If you were using the example in the previous steps, you would need to locate and click on 0000:1b:00.0. Click Finish. After configuring your network settings, access the Virtual Network Sensor console and use the command show traffic to verify the Virtual Network Sensor is receiving traffic. For more information about troubleshooting, see Virtual Network Sensor FAQ and Virtual Network Sensor CLI commands. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base
