---
id: find-uuid-linux
title: Find the UUID in Linux
sidebar_label: Find the UUID in Linux
description: Find the UUID in Linux
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Find the UUID in Linux Find the UUID for a Linux-based resource to assist with remediation when malware is detected by Agentless Vulnerability & Threat Detection. Universally unique identifiers (UUIDs) are used to help identify partitions related to malware detection by Agentless Vulnerability & Threat Detection. You may use the UUID to search for more information, such as the location of the malware, about the detection in XDR Data Explorer. To find the UUID for a Linux-based partition: Procedure Use the blkid command. Type sudo blkid to return a list of all available disk partitions on your Linux system and the associated attributes, including UUIDs when available. Note The sudo blkid command also returns information on loop devices. Type sudo blkid | grep UUID= to return information only on disk partitions on your Linux system that have available UUIDs. Use the lsblk command. Type sudo lsblk -f to return a structured view of all available disk partitions on your Linux system and the associated attributes, including UUIDs when available. Note The sudo lsblk -f command also returns information on loop devices. You must use the -f option with lsblk to return file system information. Type sudo lsblk -f | grep -v loop to return a structured view of only disk partitions on your Linux system that have available UUIDs. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base