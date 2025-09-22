---
id: pure-ipv6-agent-limitations
title: Pure IPv6 Agent Limitations
sidebar_label: Pure IPv6 Agent Limitations
description: Pure IPv6 Agent Limitations
tags:
  - endpoint-security
  - trend-vision-one
---

 Pure IPv6 Agent Limitations The following table lists the limitations when Trend Vision One Endpoint Security agents only have an IPv6 address. Pure IPv6 Agent Limitations Item Limitation Parent server Pure IPv6 agents cannot be managed by a pure IPv4 server. Updates A pure IPv6 agent cannot update from pure IPv4 update sources, such as: Trend Micro ActiveUpdate Server A pure IPv4 Apex One (Mac) server Web Reputation queries A pure IPv6 agent cannot send Web Reputation queries to Trend Micro Smart Protection Network. Proxy connection A pure IPv6 agent cannot connect through a pure IPv4 proxy server. Agent deployment Apple Remote Desktop is unable to deploy the agent to pure IPv6 endpoints because these endpoints always appear as offline. Most of these limitations can be overcome by setting up a dual-stack proxy server that can convert between IPv4 and IPv6 addresses (such as DeleGate). Position the proxy server between the agents and the entities to which they connect. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base