---
id: revoking-access-dropbox
title: Revoking access to Dropbox
sidebar_label: Revoking access to Dropbox
description: Revoking access to Dropbox
tags:
  - endpoint-security
  - trend-vision-one
---

 Revoking access to Dropbox The steps outlined below detail how to revoke the access of Cloud Email and Collaboration Protection to Dropbox. Procedure Choose Administration → Service Account. Select the Dropbox service account and click Remove. Remove the Cloud Email and Collaboration Protection application for all your team members. Visit https://www.dropbox.com/team/admin/settings/team_apps. Locate the application named Trend Micro Cloud Email and Collaboration Protection, and click the close button on the right side. Remove the folders created by Cloud Email and Collaboration Protection from the Dropbox administrator's root directory: Temporary folder: trendmicro_cas_temp__dont_change_or_delete Note Unshare the temporary folder and make the folder unavailable to others before removing it. Quarantine folder: trendmicro_cas_quarantine__dont_change_or_delete Note Back up the existing quarantined files if necessary. Manually remove the remaining data. For details, see Changes made under API-based protection. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base