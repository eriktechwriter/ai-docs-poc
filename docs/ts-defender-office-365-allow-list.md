---
id: ts-defender-office-365-allow-list
title: Troubleshooting the Microsoft Defender for Office 365 Allow List
sidebar_label: Troubleshooting the Microsoft Defender for Office 365 Allow List
description: Troubleshooting the Microsoft Defender for Office 365 Allow List
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Troubleshooting the Microsoft Defender for Office 365 Allow List Troubleshoot the allow list settings for Microsoft Defender for Office 365 to allow Phishing Simulation Assessment to successfully send phishing simulation emails to the employees in your organization. Procedure Configure the IP allow list for Microsoft Defender for Office 365. On the Trend Vision One console, locate and copy the Phishing Simulation Assessment sending IP address by going to Phishing Simulation Assessment → Step 3 Delivery → Settings. In the Microsoft Defender for Office 365 portal, go to Email & collaboration → Policies & rules → Threat policies → Anti-spam policies delivery. Go to Connection-filter policy (Default) → Edit connection filter policy. Under Always allow messages from the following IP addresses or address range, add the Phishing Simulation Assessment sending IP address, and then click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base