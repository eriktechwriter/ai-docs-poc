---
id: uninstall-deep-security-agent-macos
title: Manually uninstall the Deep Security agent from macOS
sidebar_label: Manually uninstall the Deep Security agent from macOS
description: Manually uninstall the Deep Security agent from macOS
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Manually uninstall the Deep Security agent from macOS Uninstall connected Deep Security agents from macOS. Note When uninstalling a Deep Security agent, the agent does not notify your Protection Managers when uninstalling. The affected endpoint appears on the Computers page with a status of "Managed (Offline)" or similar. To resolve the issue: Deactivate the agent before you uninstall Server & Workload Protection, or Delete the computer from the list after you uninstall Server & Workload Protection. The Trend Vision One Endpoint Security agent does not support deployment to macOS with Server & Workload Protection features at this time. If you do need to uninstall the Trend Vision One Endpoint Security agent from a macOS endpoint, see Uninstall macOS Agents with the Tool. However, depending on your environment, you might have Deep Security agents connected to your Protection Managers deployed to a macOS endpoint. Procedure Disable self-protection. To disable self-protection from Server & Workload Protection, see Configure self-protection through the Server & Workload Protection console. Otherwise, use the following steps to disable directly from the endpoint: Access Terminal. To access the agent folder, run the command cd /Library/Application Support/com.trendmicro.DSAgent To disable self-protection, run the command sudo ./dsa_control -s 0 Uninstall the Deep Security agent. In Terminal, run the following command: sudo /opt/dsa/DSAUninstaller © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base