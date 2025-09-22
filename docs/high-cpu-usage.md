---
id: high-cpu-usage
title: High CPU usage
sidebar_label: High CPU usage
description: High CPU usage
tags:
  - endpoint-security
  - trend-vision-one
---

 High CPU usage On a computer protected by an agent, you can use these steps to determine and resolve the cause of high CPU usage. Procedure Verify that the agent process (ds_agent.exe on Windows) has unusually high CPU usage. Method varies by operating system. Windows: Task Manager Linux: top Solaris: prstat AIX: topas Verify that the agent is updated to the latest version. Apply the best practices on Performance tips for anti-malware and Performance tips for intrusion prevention. If you have just enabled application control, wait until the initial baseline ruleset is complete. Time required varies by the number of files on the file system. The CPU usage should decrease. If a recommendation scan is being performed, try running scans during a time when the computer is less busy, or (if the computer is a VM) allocating more vCPUs. Temporarily disable each protection feature (anti-malware etc.), one at a time. Check CPU usage each time to determine if a specific module is the cause. If high CPU usage still continues, try temporarily stopping the agent. Verify that the issue stops when the agent is stopped. If it does, collect diagnostic information and give it to your support provider. Next steps © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base