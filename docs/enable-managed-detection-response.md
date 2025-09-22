---
id: enable-managed-detection-response
title: Enable Managed Detection and Response
sidebar_label: Enable Managed Detection and Response
description: Enable Managed Detection and Response
tags:
  - endpoint-security
  - trend-vision-one
---

 Enable Managed Detection and Response This feature is now GA and being rolled out to Server & Workload Protection customers. If it’s not available in your account yet, it will be soon. { .preview } Trend Micro Managed Detection and Response (MDR) detects and responds to threats across email, servers, cloud workloads and networks. Server & Workload Protection can send server activity metadata and Integrity Monitoring data to the MDR server for correlation and visibility across physical, virtual, and cloud workloads. For more information about MDR, see XDR - Managed Detection and Response Service. To enable Managed Detection and Response: Procedure Obtain the following information from your Threat Investigation Center administrator: Threat Investigation Center Server URL Company GUID Data Source GUID (Optional) Proxy server address In the Server & Workload Protection console, go to Administration → Managed Detection and Response. Click Enable the MDR service and fill in the following information: Server URL (for example: "https://[server]/"): The Threat Investigation Center Server URL Company GUID Data Source GUID If required, you can choose to use a proxy to access MDR. Select When accessing MDR server, use proxy and click Edit to specify the proxy server address provided by your Threat Investigation Center administrator. Before saving, click Test Connection to make sure Server & Workload Protection is connected to TIC. If the connection fails, double-check that all the information entered is correct. If the connection passes, click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base