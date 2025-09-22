---
id: devices-id-inv
title: Device
sidebar_label: Device
description: Device
tags:
  - endpoint-security
  - trend-vision-one
---

 Device View information about the devices in your organization, including compliance and sync status. The Device tab allows you to view devices in your organization managed by your identity provider. Devices registered with your identity provider include desktops, laptops, printers, and mobile devices that use single-sign on (SSO) or have conditional access policies applied. The following table details the columns on the Device tab. Column name Description Device name Name of a device in your organization. Device ID Unique identifier of a device. Join type Join type of a device. Microsoft Entra registered: Registered to Microsoft Entra ID, requiring no organizational account to sign in to the device. This type supports bring-your-own devices or mobile devices. Microsoft Entra joined: Joined only to Microsoft Entra ID, requiring an organizational account to sign in to the device. This type of devices is generally owned by the organization. Microsoft Entra hybrid joined: Joined to your on-premises Active Directory and registered with Microsoft Entra ID, requiring an organizational account to sign in to the device None: The device does not have a join type. This happens for various reasons, such as device unregistration or configuration errors . Mobile policy compliant Indicates whether a devices is compliant with Mobile Device Management (MDM) policies. Last checked in Last time when a device was signed in to. Synced with Active Directory Indicates whether a device is synced from an on-premises directory. Devices synced with Active Directory are in the on-premises identity provider system as well as the cloud-based system. Trend Micro does not recommend syncing a device in both systems unless necessary due to an increased risk of intrusion or attack. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base