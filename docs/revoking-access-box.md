---
id: revoking-access-box
title: Revoking access to Box
sidebar_label: Revoking access to Box
description: Revoking access to Box
tags:
  - endpoint-security
  - trend-vision-one
---

 Revoking access to Box The steps outlined below detail how to revoke the access of Cloud Email and Collaboration Protection to Box. Procedure Choose Administration → Service Account. Select the Box service account and click Remove. Remove the Cloud Email and Collaboration Protection application for all of your users. Visit https://app.box.com/master/settings. Click Apps on the menu bar. In the Individual Application Controls section, search for the application named Cloud App Security. Hover over the app's row and click the Configure button displayed. Click Available and clear the Enforce event notifications settings on all users check box. Visit https://app.box.com/services/browse/my. Search for the Cloud App Security application and remove it from your applications. Remove the folders created by Cloud Email and Collaboration Protection from the Box administrator's root directory: Temporary folder: trendmicro_cas_temp__dont_change_or_delete Note Unshare the temporary folder and make the folder unavailable to others before removing it. Quarantine folder: trendmicro_cas_quarantine__dont_change_or_delete Note Back up the existing quarantined files if necessary. Delete the group created for temporary folder management from the Box admin console: Go to Admin Console → Users and Groups → Groups. Click group trendmicro_cas_temp__dont_change_or_delete, and then click Delete Group in the upper right of the screen. Manually remove the remaining data. For details, see Changes made under API-based protection. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base