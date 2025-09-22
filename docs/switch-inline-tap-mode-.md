---
id: switch-inline-tap-mode-
title: Inline and Tap mode
sidebar_label: Inline and Tap mode
description: Inline and Tap mode
tags:
  - endpoint-security
  - trend-vision-one
---

 Inline and Tap mode Web Reputation uses the Server & Workload Protection Network Engine which can operate in one of two modes: Inline: Packet streams pass directly through the Server & Workload Protection network engine. All rules are applied to the network traffic before they proceed up the protocol stack. Tap mode: Packet streams are not modified. The traffic is still processed by Web Reputation, if it's enabled. However any issues detected do not result in packet or connection drops. When in Tap mode, Server & Workload Protection offers no protection beyond providing a record of events. In tap mode, the live stream is not modified. All operations are performed on the replicated stream. When in tap mode, Server & Workload Protection offers no protection beyond providing a record of events. To switch between inline and tap mode, open the Computer or Policy editor and go to Settings → Advanced → Network Engine Mode. For more on the network engine, see Test firewall rules before deploying them. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base