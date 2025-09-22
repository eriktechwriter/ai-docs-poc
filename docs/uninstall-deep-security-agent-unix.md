---
id: uninstall-deep-security-agent-unix
title: Manually uninstall the Deep Security agent from Unix platforms
sidebar_label: Manually uninstall the Deep Security agent from Unix platforms
description: Manually uninstall the Deep Security agent from Unix platforms
tags:
  - endpoint-security
  - trend-vision-one
---

 Manually uninstall the Deep Security agent from Unix platforms Uninstall connected Deep Security agents from Unix platforms. Note When uninstalling a Deep Security agent, the agent does not notify your Protection Managers when uninstalling. The affected endpoint appears on the Computers page with a status of "Managed (Offline)" or similar. To resolve the issue: Deactivate the agent before you uninstall Server & Workload Protection, or Delete the computer from the list after you uninstall Server & Workload Protection. The Trend Vision One Endpoint Security agent and Server & Workload Protection do not support Unix platforms at this time. However, depending on your environment, you might have Deep Security agents connected to your Protection Managers deployed to one of the following Unix platforms: AIX Solaris 10 Solaris 11 To manually remove the Deep Security agent, run the respective command for your Unix platform: Platform Command Notes AIX installp -u ds_agent Solaris 10 pkg uninstall ds-agent You might need to restart the system to complete the uninstall process. Solaris 11 pkgrm ds-agent You might need to restart the system to complete the uninstall process. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base