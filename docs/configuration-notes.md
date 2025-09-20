---
id: configuration-notes
title: Configuration Notes
sidebar_label: Configuration Notes
description: Configuration Notes
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configuration Notes After successfully setting up the Suspicious Object Hub and registering the Suspicious Object Node Apex Central servers, note the following configuration information. Note After unregistering a Node Apex Central server, all previously synchronized objects remain in the Node Apex Central server suspicious object lists. Configuration Hub Apex Central Node Apex Central Synchronization interval N/A 5 minutes (default) Suspicious Object list synchronization From the Hub Apex Central to Nodes: Virtual Analyzer list User-Defined list From a Node Apex Central to the Hub: Virtual Analyzer list Note The Hub Apex Central server does not send data from the Notes column of the User-Defined list or the Exception list to the Node Apex Central servers. When synchronizing lists, the User-Defined list has a higher priority than the Virtual Analyzer list. If an object is added to both the User-Defined list and the Virtual Analyzer list on the Hub Apex Central before the next synchronization, the Hub Apex Central server deploys both lists to the Node Apex Central servers. If an object in the Node Apex Central Virtual Analyzer list also exists in the Hub Apex Central User-Defined list, the suspicious object risk level changes to High on the Node Apex Central Virtual Analyzer list during the next synchronization. Configuring Suspicious Object settings Recommended Configuring Suspicious Objects through the Hub Apex Central ensures consistency across the registered Node Apex Central servers. N/A © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base