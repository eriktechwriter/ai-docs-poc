---
id: configure-cpu-usage-control
title: Configure CPU usage control
sidebar_label: Configure CPU usage control
description: Configure CPU usage control
tags:
  - endpoint-security
  - trend-vision-one
---

 Configure CPU usage control Manage the impact on processing resources by Server & Workload Protection agent features. Important CPU usage control only supports Linux agents. Use the CPU Usage Control setting to manage the impact of the endpoint agent on the endpoint processing resources. Use the following steps to configure the setting: Procedure Open the details screen of the Computer you want to configure. Go to Settings → General. Locate the CPU Usage Control setting and select the CPU protection mode you want to use. The settings you choose impact the behavior of certain features. Review each setting to determine the best setting for your environment. Setting Anti-Malware Activity Monitoring Extremely Low Provides asynchronous deferred real-time scan for newly created and modified files. Disables Predictive Machine Learning and Behavior Monitoring. Loss of activity logs of the busiest events might occur if the CPU usage is higher than 10%. Low Provides sychronous real-time scan for newly created and modified files within a certain time period, as well as executable files. Loss of activity logs of the busiest events might occur if the CPU usage is higher than 40%. Unlimited Full protection via real-time scan (default). No loss of activity logs of busiest events. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base