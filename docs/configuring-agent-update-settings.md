---
id: configuring-agent-update-settings
title: Configuring Agent Update Settings
sidebar_label: Configuring Agent Update Settings
description: Configuring Agent Update Settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configuring Agent Update Settings For a detailed explanation of agent updates, see Update Settings. Procedure Select Agents download updates from the Trend Micro ActiveUpdate server when unable to connect to the Apex One (Mac) server to allow agents to download updates from the Trend Micro ActiveUpdate server. Note If a Trend Vision One Endpoint Security agent only has an IPv6 address, read the IPv6 limitations for agent updates in Pure IPv6 Agent Limitations. Select Agents can update the components but not upgrade the agent program or install hot fixes to allow component updates to proceed but prevents agent upgrade. To set up scheduled updates, complete the following steps: Select Enable scheduled update. Configure the schedule. If you select Daily or Weekly, specify the time of the update and the time period the Apex One (Mac) server will notify Trend Vision One Endpoint Security agents to update components. For example, if the start time is 12pm and the time period is 2 hours, the server randomly notifies all online Trend Vision One Endpoint Security agents to update components from 12pm until 2pm. This setting prevents all online Trend Vision One Endpoint Security agents from simultaneously connecting to the server at the specified start time, significantly reducing the amount of traffic directed to the server. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base