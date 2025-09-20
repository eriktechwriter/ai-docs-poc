---
id: network-engine-status-windows
title: Network Engine Status (Windows)
sidebar_label: Network Engine Status (Windows)
description: Network Engine Status (Windows)
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Network Engine Status (Windows) What are Network Engine Status warnings Network Engine Status warnings are a collection of warnings/errors that might appear in the Status area of a computer. They appear when the agent raises an event about the Trend Micro LightWeight Filter Driver, and the Network Engine Status Check feature is enabled. If you get one of these warnings, network features might not function on that agent. Web Reputation Engine Disabled Firewall Engine Disabled Intrusion Prevention Engine Disabled Web Reputation Engine Working With Limited Functionality Firewall Engine Working With Limited Functionality Intrusion Prevention Engine Working With Limited Functionality Note Agents will display more security events for each affected network interface. See Driver-Related Events table for the list of agent events. Verify the driver status in Windows Procedure In Windows, go to Control Panel → Network and Internet → Network and Sharing Center. Select Change adapter settings in the left pane to open the Network Connections window. Open the context menu, and select Properties for each active network adapter. For Trend Micro LightWeight Filter Driver, verify that the checkbox is selected. Next steps Disable Network Engine Status warnings Procedure On the Server & Workload Protection console, go to Computers. Select the computer for which you want to disable the warning, and then click Details. (Alternatively, disable it in the policy.) In the computer details, go to Settings → Advanced → Network Engine Settings. For Network Engine Status Check, select Disabled. Next steps © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base