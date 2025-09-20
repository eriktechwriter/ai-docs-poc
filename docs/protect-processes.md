---
id: protect-processes
title: Protect Security Agent Processes
sidebar_label: Protect Security Agent Processes
description: Protect Security Agent Processes
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Protect Security Agent Processes The Trend Vision One Endpoint Security agent blocks all attempts to terminate the processes in the following table. Process Description TmListen.exe Receives commands and notifications from the Apex One server and facilitates communication from the Trend Vision One Endpoint Security agent to the server NTRtScan.exe Performs Real-time, Scheduled, and Manual Scan on Trend Vision One Endpoint Security agents TmPfw.exe Provides packet level firewall, network virus scanning, and intrusion detection capabilities TMBMSRV.exe Regulates access to external storage devices and prevents unauthorized changes to registry keys and processes DSAgent.exe Monitors the transmission of sensitive data and controls access to devices PccNTMon.exe This process is responsible for starting the Trend Vision One Endpoint Security agent console TmCCSF.exe Performs Browser Exploit Prevention and memory scanning The Trend Vision One Endpoint Security agent can also protect against the addition of processes in the Microsoft Software Restriction Policies (SRP). Software Restriction Policies prevent the listed applications from running on the endpoint. To prevent the addition of Trend Vision One Endpoint Security agent processes in the Software Restriction Policies list: Enable Protect Security Agent processes. Enable the Unauthorized Change Prevention Service. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base