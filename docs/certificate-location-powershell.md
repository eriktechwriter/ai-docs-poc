---
id: certificate-location-powershell
title: Getting the certificate location using PowerShell
sidebar_label: Getting the certificate location using PowerShell
description: Getting the certificate location using PowerShell
tags:
  - endpoint-security
  - trend-vision-one
---

 Getting the certificate location using PowerShell Obtain the location information of your company CA certificate and client certificate by running PowerShell commands. Procedure Open a PowerShell prompt. Run one of the following commands. Get-ChildItem -path 'Cert:\*' -Recurse | where Subject -like "*<certificate name>*" certificate name: The name of the target certificate or part of the certificate name ls -path 'Cert:\*' -Recurse | where Thumbprint -eq "<thumbprint>" thumbprint: The thumbprint of the target certificate You can find the certificate location information in the PSParentPath field of the execution result. For example, Microsoft.PowerShell.Security\Certificate::CurrentUser\Root Specify the location in the following format in the corresponding field of the Add Device Posture Profile screen in the Trend Vision One console. \CurrentUser\Root © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base