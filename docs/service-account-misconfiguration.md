---
id: service-account-misconfiguration
title: Service account misconfigurations
sidebar_label: Service account misconfigurations
description: Service account misconfigurations
tags:
  - endpoint-security
  - trend-vision-one
---

 Service account misconfigurations Learn about service account misconfigurations and how to mitigate the risk the accounts pose. Inadequate management of service accounts can offer attackers an entry point to systems and sensitive data. To mitigate the risk, limit service account permissions to only permissions necessary for designated tasks. If a service account requires elevated permissions, such as Global Administrator access, assess the reasons for this level of access and minimize permissions wherever possible. Examples of high-privilege permissions: Application.ReadWrite.All Directory.ReadWrite.All Files.ReadWrite.All MailboxSettings.ReadWrite User.ReadWrite.All Note A service account should not have higher privileges than the managing regular user account. This can occur if the service account is managed by a regular account. In Active Directory, a regular account is not a member of Administrators, Domain Admins, or Enterprise Admins. Here are some best practices to follow: The permissions of the service account owner should be equal or greater than the service account. Use only the minimum required permissions for the service account to function. For more information, see Microsoft's guidance on the principle of least privileges. If the service account requires certain permissions, consider elevating the regular account's permissions or assigning another owner. Note "Service Account Misconfiguration" risks cannot be added to the exception list. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base