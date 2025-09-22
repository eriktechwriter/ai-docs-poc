---
id: diagnose-agent-windows-deploy
title: Diagnose problems with agent deployment (Windows)
sidebar_label: Diagnose problems with agent deployment (Windows)
description: Diagnose problems with agent deployment (Windows)
tags:
  - endpoint-security
  - trend-vision-one
---

 Diagnose problems with agent deployment (Windows) If an agent on Windows fails to install or activate, look in the deployment logs to find the cause and troubleshoot it. Procedure Log in to the computer where you were trying to install the agent. Go to %appdata%\Trend Micro\Deep Security Agent\installer. Examine: dsa_deploy.txt - Log from the PowerShell script. Contains agent activation issues. dsa_install.txt - Log from the MSI installer. Contains agent installation issues. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base