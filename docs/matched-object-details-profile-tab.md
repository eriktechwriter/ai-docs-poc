---
id: matched-object-details-profile-tab
title: "Object Details: Profile Tab"
sidebar_label: "Object Details: Profile Tab"
description: "Object Details: Profile Tab"
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Object Details: Profile Tab The Profile tab shows the details applicable for the selected object type. Some objects may show only a limited set of details, or may not have any details available at the time of execution. Note You can further examine objects with Malicious ratings in Threat Connect or VirusTotal. The tab may also display additional options for Matched Objects and Noteworthy Objects. Option Description Terminate Object Terminates all running instances of the object only on the target endpoint's current state Note This action is available only for unrated, malicious, and suspicious process type objects. To verify if the command was successful, go to Administration → Command Tracking. Add to Suspicious Objects List Terminates all running instances of the object only on the target endpoint's current state, and then adds the object to the User-Defined Suspicious Object list Note If Application Control is enabled, processes that match the hash value of objects added to the User-Defined Suspicious Object list are not allowed to run on all endpoints. Endpoint Sensor also terminates process type objects before adding them to the list, and Application Control prevents them from starting again. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base