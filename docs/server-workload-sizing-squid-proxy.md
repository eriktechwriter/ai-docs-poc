---
id: server-workload-sizing-squid-proxy
title: Server & Workload Protection sizing for Squid Proxy
sidebar_label: Server & Workload Protection sizing for Squid Proxy
description: Server & Workload Protection sizing for Squid Proxy
tags:
  - endpoint-security
  - trend-vision-one
---

 Server & Workload Protection sizing for Squid Proxy Review bandwidth and connection details to determine the appropriate requirements for using Squid Proxy. The information in this guide provides an estimation of how many Server & Workload Protection agent connections a Squid Proxy server can support with a given set of specifications. This number is based on testing performed by Trend Micro and the information detailed in Server & Workload Protection bandwidth sizing. Important The information below contains estimations calculated based on testing done by Trend Micro. While the information can be used to guide your deployment decisions, you should always perform your own testing to ensure your Squid Proxy server can support your agent connection needs. Squid Server Specifications Tested Agent Count / Connections Resource Usage Recommended Maximum Agent Support OS: Ubuntu 20.0.04 SKU: Azure Standard_DS1_v2 vCPU: 1 (Intel™ Xeon® CPU E5-2673 v3 @ 2.40 GHz) RAM: 3.5 GB Storage disk: 64 GB - IOPS 240, max throughput 50 Mbps 204 agents / 500-850 connections CPU: 1.1% RAM: 2.4% 8500 to 15000 agents based on the following estimations: Est max CPU support: 18,545 Est max RAM support: 8,500 Est network connection support: 15,728 © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base