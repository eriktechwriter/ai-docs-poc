---
id: sps-disconnected-errors
title: Troubleshoot \"Smart Protection Server disconnected\" errors
sidebar_label: Troubleshoot \"Smart Protection Server disconnected\" errors
description: Troubleshoot \"Smart Protection Server disconnected\" errors
tags:
  - endpoint-security
  - trend-vision-one
---

 Troubleshoot "Smart Protection Server disconnected" errors If you are using the Anti-Malware or Web Reputation modules, you may see either a "Smart Protection Server Disconnected for Smart Scan" or "Smart Protection Server Disconnected for Web Reputation" error in the Server & Workload Protection console. To fix the error, try the following troubleshooting tips. Check the error details Double-click the error message to display more detailed information, including the URL that the server is trying to contact. The error may include: Timeout was reached Couldn't resolve hostname From a command prompt, use nslookup to check whether the DNS name resolves to an IP address. If the URL doesn't resolve, then there is a DNS issue on the local server. Use a telnet client to test connectivity to the URL on ports 80 and 443. If you can't connect, check that all of your firewalls, security groups, etc. are allowing outbound communication to the URL on those ports. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base