---
id: firewall
title: About Firewall
sidebar_label: About Firewall
description: About Firewall
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ About Firewall The Firewall module provides bidirectional stateful inspection of incoming and outgoing traffic. Firewall rules define what actions to take on individual packets in that traffic. Packets can be filtered by IP and MAC address, port and packet flag across all IP-based protocols and frame types. The Firewall module can also help prevent denial of service attacks and detect and prevent reconnaissance scans. To enable and configure the Firewall, see Set up the Server & Workload Protection Firewall. Note For a list of operating systems where the Firewall is supported, see Supported features by platform. Firewall rules Firewall rules can process traffic using one of the following actions, listed in order of precedence: Bypass Log Only Force Allow Deny Allow Rules also have a priority level between 4 (highest priority) to 0 (lowest priority). Within a specific priority level rules are processed in order based on the precedence of the action type of the rule as listed above. This means that unlike what you may have experienced when configuring other firewalls, the Server & Workload Protection Firewall processes rules independently of their assignment order. For more information on how rule priorities and actions determine processing order, see Firewall rule actions and priorities. For more detailed information on how to create Firewall rules, see Create a Firewall rule. Note When creating your rules, make sure to test them using the Tap and Inline modes of the Firewall module before deploying them. For information on how to do so, see the "Test Firewall rules before deploying them" section of Set up the Server & Workload Protection Firewall. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base