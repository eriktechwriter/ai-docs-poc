---
id: config-access-risky-users
title: Configuring conditional access policies for risky users
sidebar_label: Configuring conditional access policies for risky users
description: Configuring conditional access policies for risky users
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring conditional access policies for risky users By integrating with Microsoft Entra ID Conditional Access, Cloud Email and Collaboration Protection allows you to control risky users' access to resources by configuring conditional access policies. Cloud Email and Collaboration Protection synchronizes the policies to Microsoft Entra ID, which applies the corresponding actions on the users when they attempt to access apps. Important Before you proceed, make sure the following requirements are met: You have granted access to Microsoft Identity Protection. You have not enabled security defaults in Microsoft Entra ID. Microsoft does not support using Conditional Access and security defaults simultaneously. For more information, see Microsoft documentation. Procedure In Cloud Email and Collaboration Protection, go to Policies → Global Settings → Other Settings → Conditional Access Policies for Risky Users. Click a policy name. In the Available Targets area, select one or multiple targets, and add them to the Selected Targets area. By default, the Available Targets area displays Top Users with High Risk Events, which are all the users in the dashboard widget Top 5 Users with High Risk Events detected over the last 24 hours, last 7 days, and last 30 days. To search for other users, type an email address and click Search. Click Save. The policy will be synchronized to Microsoft Entra ID. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base