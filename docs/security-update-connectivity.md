---
id: security-update-connectivity
title: Component update connectivity
sidebar_label: Component update connectivity
description: Component update connectivity
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Component update connectivity Verify the connectivity between the relay server and its Active Update source or proxy server. Procedure To verify that both a route exists and that the relay port number is open, enter the command: telnet [relay IP] [port number] If the telnet fails, verify that a route exists and that firewall policies (if any) allow the traffic by pinging or using traceroute. Also verify that the port number is open, and doesn't have a port conflict. To verify that the DNS server can resolve the domain name of the relay, enter the command: nslookup [relay domain name] If the test fails, verify that the agent is using the correct DNS proxy or server (internal domain names can't be resolved by a public DNS server such as Google or your ISP). If you are using Server & Workload Protection, you might not be using your own relays; instead, you will be using the relays that are built into the service: relay.deepsecurity.trendmicro.com. If you use a proxy server, in Server & Workload Protection, confirm that the proxy settings are correct. To determine if your Server & Workload Protection settings are blocking connectivity, unassign the current policy. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base