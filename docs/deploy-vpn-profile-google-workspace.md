---
id: deploy-vpn-profile-google-workspace
title: Deploy a VPN profile for Google Workspace
sidebar_label: Deploy a VPN profile for Google Workspace
description: Deploy a VPN profile for Google Workspace
tags:
  - endpoint-security
  - trend-vision-one
---

 Deploy a VPN profile for Google Workspace Set up a VPN profile on managed ChromeOS devices for protection through Web Reputation and Zero Trust Secure Access. Procedure Download gateway certificates in the Trend Vision One console. Go to Zero Trust Secure Access → Secure Access Configuration → Internet Access Configuration → HTTPS Inspection. Click to manage certificate settings. Under Cloud Gateway Certificate, click Download built-in certificate (provided by the Internet Access Service). Under On-Premises Gateway Certificate, click Download built-in certificate (provided by the Internet Access Service). Add certificates in the Google Admin console. Go to Devices → Networks → Certificates. Click the name of your organizational unit. Click ADD CERTIFICATE. On the Add certificate screen, click UPLOAD, select your Cloud Gateway Certificate, and select the required items for Certificate Authority. Click Add. On the Add certificate screen, click UPLOAD, select your On-Premises Gateway Certificate, and select the required items for Certificate Authority. Click Add. Configure the VPN settings in the Google Admin console. Go to Apps → Web and mobile apps → Mobile Security for Business → Settings. Select ON from the drop-down menu for Use as the always-on VPN app. Select Do not allow user to disconnect from a VPN manually. The VPN profile is deployed to managed ChromeOS devices for protection through Web Reputation and Zero Trust Secure Access. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base