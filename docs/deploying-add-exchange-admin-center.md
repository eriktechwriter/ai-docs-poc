---
id: deploying-add-exchange-admin-center
title: Deploying the add-in in the Exchange admin center
sidebar_label: Deploying the add-in in the Exchange admin center
description: Deploying the add-in in the Exchange admin center
tags:
  - endpoint-security
  - trend-vision-one
---

 Deploying the add-in in the Exchange admin center Procedure Log on to the Cloud Email Gateway Protection console, go to Administration → Other Settings → Email Reporting Add-in for Outlook, and copy the Link to manifest file. The link uploads the add-in in the Exchange admin center. Log on to the Exchange admin center with an administrator account. Go to organization → add-ins. Click the add icon (+) and click Add from URL. In the URL text box on the Add from URL dialog box, paste the link you copied in step 1, and click install. In the add-in list on the add-ins screen, double-click Report Email. On the Report Email dialog box, select Make this add-in available to users in your organization, and then specify user defaults. Optional, enabled by default: Enable the add-in by default and allow your users to turn off the add-in. Optional, disabled by default: Disable the add-in by default and allow your users to turn on the add-in. Mandatory, always enabled. Users can't disable this add-in: Enable the add-in by default and do not allow your users to turn off the add-in. Click Save. According to Microsoft, it can take up to 72 hours for a newly deployed add-in to appear on the app ribbon in your users' Outlook mailboxes. Your users may need to relaunch Office to view the add-in icon on the app ribbon. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base