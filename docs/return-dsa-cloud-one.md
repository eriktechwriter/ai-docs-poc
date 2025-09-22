---
id: return-dsa-cloud-one
title: Returning Agents to Trend Cloud One - Endpoint & Workload Security
sidebar_label: Returning Agents to Trend Cloud One - Endpoint & Workload Security
description: Returning Agents to Trend Cloud One - Endpoint & Workload Security
tags:
  - endpoint-security
  - trend-vision-one
---

 Returning Agents to Trend Cloud One - Endpoint & Workload Security Move agents from Trend Vision One Endpoint Security. The following steps detail how to move agents from Trend Vision One Endpoint Security to Trend Cloud One - Endpoint & Workload Security. Before starting, you must deactivate the target agent you want to move. For information on how to deactivate agents, see the "Deactivate the agent" section in Activate the agent. You may also need to disable agent self-protection before you can deactivate the agent. For more information, see Enable or disable agent self-protection. Procedure In the Trend Cloud One - Endpoint & Workload Security console, go to Administration → Updates → Software → Local. Click Generate Deployment Scripts. Select the Platform and configure the other settings. Copy the activation command from the deployment script. The activation command is the line which includes the manager URL, port, tenantID, and token. Access the device where the target agent is installed. Run Command Prompt as an Administrator. Run the activation command you copied from the deployment script. After reactivating the agent, ensure the correct policies and configurations are applied. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base