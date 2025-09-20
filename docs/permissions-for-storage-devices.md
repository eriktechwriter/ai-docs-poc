---
id: permissions-for-storage-devices
title: Permissions for Storage Devices
sidebar_label: Permissions for Storage Devices
description: Permissions for Storage Devices
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Permissions for Storage Devices Device Control permissions for storage devices are used when you: Allow access to USB storage devices, CD/DVD, SD cards, network drives, and Thunderbolt SATA storage devices. You can grant full access to these devices or limit the level of access. Configure the list of approved USB storage devices. Device Control allows you to block access to all USB storage devices, except those that have been added to the list of approved devices. You can grant full access to the approved devices or limit the level of access. The following table lists the permissions for storage devices. Device Control Permissions for Storage Devices Permissions Files on the Device Incoming Files Full access Permitted operations: Copy, Move, Open, Save, Delete, Execute Permitted operations: Save, Move, Copy This means that a file can be saved, moved, and copied to the device. Read only Permitted operations: Copy, Open Prohibited operations: Save, Move, Delete, Execute Prohibited operations: Save, Move, Copy Block Prohibited operations: All operations The device and the files it contains are not visible to the user (for example, from Finder). Prohibited operations: Save, Move, Copy Note The read-only permission is not available for network drives. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base