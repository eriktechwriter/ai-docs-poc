---
id: grant-sharepoint-failure-mfa
title: Access grant for Sharepoint Online/OneDrive failure when mfa is enabled
sidebar_label: Access grant for Sharepoint Online/OneDrive failure when mfa is enabled
description: Access grant for Sharepoint Online/OneDrive failure when mfa is enabled
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Access grant for Sharepoint Online/OneDrive failure when mfa is enabled Problem: Automatic/manual granting of access to SharePoint Online/OneDrive failed when multi-factor authentication (MFA) is enabled on the required account. If multi-factor authentication (MFA) is enabled on the Microsoft 365 Global Administrator account used for automatic access grant or on the SharePoint Online Delegate Account created for manual access grant, the access grant will fail because Cloud Email and Collaboration Protection cannot pass the access control on the Microsoft 365 service side. To complete access grant, perform either of the following: Automatic access grant: disable MFA on the GA account and enable MFA after the access grant as necessary. This does not apply to manual access grant because Cloud Email and Collaboration Protection needs to use the Delegate Account for subsequent proceeding after access grant. Automatic and manual access grant: use an app password. Create an app password for the account used for access grant. This gives Cloud Email and Collaboration Protection permission to access the Microsoft 365 account. For details, search for how to create a new app password on the Microsoft Support website. Wherever you're prompted for your password during access grant, paste the app password in the box. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base