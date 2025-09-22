---
id: set-up-aws-config-rules
title: Set up AWS Config Rules
sidebar_label: Set up AWS Config Rules
description: Set up AWS Config Rules
tags:
  - endpoint-security
  - trend-vision-one
---

 Set up AWS Config Rules Server & Workload Protection supports the use of AWS Config Rules to query the status of your AWS instances. This can be especially useful if you want to have a centralized view into whether your instances meet certain compliance requirements. There are four Lambda functions available from the Deep Security AWS Config Rules Repository on GitHub: ds-IsInstanceProtectedByAntiMalware checks whether the current instance is protected by the Server & Workload Protection Anti-Malware module. ds-IsInstanceProtectedBy checks whether the current instance is protected by any of the Server & Workload Protection protection modules. This is a generic version of ds-IsInstanceProtectedByAntiMalware. ds-DoesInstanceHavePolicy checks whether the current instance is protected by a specific Server & Workload Protection policy. ds-IsInstanceClear checks whether the current instance has any warnings, alerts, or errors in Server & Workload Protection. For more information about AWS Config, see the AWS Config section of the Amazon AWS website. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base