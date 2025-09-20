---
id: custom-scan-actions
title: Custom Scan Actions
sidebar_label: Custom Scan Actions
description: Custom Scan Actions
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Custom Scan Actions Action Description Delete Deletes the infected file. Quarantine Renames and then moves the infected file to a temporary quarantine directory on the endpoint. The Trend Vision One Endpoint Security agent then sends quarantined files to the designated quarantine directory, which is on the managing server by default. The Trend Vision One Endpoint Security agent encrypts quarantined files sent to this directory. For more information, see Quarantine Directory. Clean Cleans the infected file before allowing full access to the file. If the file is uncleanable, the Trend Vision One Endpoint Security agent performs a second action, which can be one of the following actions: Quarantine, Delete, Rename, and Pass. This action can be performed on all types of security threats except probable virus/malware. Note Some files are uncleanable. For details, see Uncleanable Files. Rename Changes the infected file's extension to vir. Users cannot open the renamed file initially, but can do so if they associate the file with a certain application. The virus/malware may execute when opening the renamed infected file. Pass Performs no action on detected threats but records the detection in the logs. Deny Access When the Trend Vision One Endpoint Security agent detects an attempt to open or execute an infected file, it immediately blocks the operation. Users can manually delete the infected file. Related information Quarantine Directory © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base