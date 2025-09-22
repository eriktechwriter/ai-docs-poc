---
id: vpn-profile-devices-managed-config
title: Deploy a VPN profile to devices using managed configuration
sidebar_label: Deploy a VPN profile to devices using managed configuration
description: Deploy a VPN profile to devices using managed configuration
tags:
  - endpoint-security
  - trend-vision-one
---

 Deploy a VPN profile to devices using managed configuration Allow your users to take advantage of the security features of Zero Trust Secure Access by deploying a VPN profile to your managed mobile devices. Devices enrolled in Mobile Security using a solution other than Intune integration or Mobile Device Director may still use Zero Trust Secure Access Internet Access and Private Access features, including web reputation, internal app access, and protected internet access. Zero Trust Secure Access requires other managed mobile devices to have the Mobile Agent installed, VPN enforcement enabled, and the necessary certificates deployed. VPN profiles are configured within your MDM solution. Procedure In your MDM solution, find the settings that allow you to create new configuration profiles, and choose VPN as the profile type. In the profile configuration settings, make sure to configure the VPN as "always on" or "on-demand." Configure the following settings if required. Setting Value Connection type Custom VPN VPN server address 127.0.0.1 Authentication method Username and password Split tunneling Disabled Push the newly created VPN profile to your managed mobile devices according to your MDM solution. Note Depending on the MDM solution you use, you may need to remind end users to approve the VPN profile before the profile can be enabled on user devices. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base