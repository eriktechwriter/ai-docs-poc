---
id: grant-access-onedrive-authorized
title: Granting access to OneDrive with an authorized account
sidebar_label: Granting access to OneDrive with an authorized account
description: Granting access to OneDrive with an authorized account
tags:
  - endpoint-security
  - trend-vision-one
---

 Granting access to OneDrive with an authorized account Cloud Email and Collaboration Protection supports using OAuth 2.0 to access OneDrive with a service account (Authorized Account). With the OAuth 2.0 framework, Cloud Email and Collaboration Protection uses an access token to obtain limited access on the Global Administrator's behalf to run advanced threat protection and data loss prevention scanning on files in the protected OneDrive sites of your organization. The steps outlined below detail how to grant access to OneDrive with an Authorized Account from Dashboard. Procedure Go to Dashboard → Service Status. Click Grant Access in the Action column for OneDrive. The Grant Access to OneDrive screen appears. Select the policy to enable automatically when the access grant is complete. Click Grant Permission. Specify your Microsoft 365 Global Administrator credentials and click Sign in. The Microsoft authorization screen appears. Click Accept to grant Cloud Email and Collaboration Protection necessary permissions to protect OneDrive sites. Wait until the process is completed. If the message "Successfully created a service account and synced data." appears on the screen, the access grant is successful. Next steps If for some reason the access token becomes invalid, go to Administration → Service Account to create a new access token for the service account. For more information, see Service account. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base