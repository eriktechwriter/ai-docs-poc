---
id: proxy-settings
title: Proxy settings
sidebar_label: Proxy settings
description: Proxy settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Proxy settings You can configure proxies between various Trend Micro components. For details, see Configure proxies. Proxy server use To view and edit the list of available proxies, go to Administration → System Settings → Proxies. Allow agents to apply OS proxy when the configured proxy is inaccessible: This setting enables the agent to apply the operating system proxy settings when the default proxy is inaccessible, which is useful for roaming agents. This feature is available with agent version 20.0.0-3530+ on Windows and 20.0.0-167+ on macOS. Primary Component Update Proxy used by Agents, Appliances, and Relays: For information on this setting, see Connect to Trend Micro Update Server via proxy. Note that even though you can import and export proxies across different tenants, it is not recommended. If you choose to do so, you need to enter the proxy’s password again after importing. For example, if you export a proxy from tenant 1 and import this proxy into tenant 2, you have to enter your proxy password again in tenant 2. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base