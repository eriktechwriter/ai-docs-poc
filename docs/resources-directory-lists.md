---
id: resources-directory-lists
title: Directory Lists
sidebar_label: Directory Lists
description: Directory Lists
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Directory Lists Configure a list of trusted paths and folders to exclude from Anti-Malware scans. Important If you are working on a policy, make sure to save your settings before leaving the screen. Leaving the screen without saving discards any changes. Directory lists are a policy resource you can use to define trusted and sensitive locations (paths, folders, and directories) on your endpoints to exclude from Anti-Malware scans. You can add up to 250 directory lists. Procedure Go to Endpoint Security → Endpoint Security Configuration → Policy Resources → Directory Lists. Create or edit a list. To create a new list, click Add directory list. To edit an existing list, click the list name and go to General Specify a name and description for the list. Specify a Directory. Directory paths must be complete and follow the formatting guidelines for the specified operating system. The following formatting rules apply to the directory lists: Entry length maximum is 256 characters. Entry must end with a slash (Linux, macOS / or Windows \). Wildcards (*) and environmental variables are allowed. Windows allows using ? as a wildcard. Entry cannot be a relative path. Folder names cannot contain certain special characters: Windows: \ / : " < > | , Linux: ? < > | // , & macOS: & = // To add more directories, click Add. You can specify up to 125 items per list. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base