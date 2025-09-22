---
id: resources-file-lists
title: File Lists
sidebar_label: File Lists
description: File Lists
tags:
  - endpoint-security
  - trend-vision-one
---

 File Lists Configure a list of trusted files to exclude from Anti-Malware scans. Important If you are working on a policy, make sure to save your settings before leaving the screen. Leaving the screen without saving discards any changes. File lists are a policy resource you can use to define trusted files on your endpoints to exclude from Anti-Malware scans. You can add up to 250 file lists. Procedure Go to Endpoint Security → Endpoint Security Configuration → Policy Resources → File Lists. Create or edit a list. To create a new list, click Add file list. To edit an existing list, click the list name and go to General Specify a name and description for the list. Click the operating system you want to specify files for. Important You must specify at least one file per list. For example, specifying one file for Windows and not specifying a file for macOS or Linux is a valid list. You can specify files for more than one operating system per list. For example, specifying one file each for Windows, macOS, and Linux is a valid list. You can specify up to a total of 125 items per list. Specify a file. File paths must be complete and follow the formatting guidelines for the specified operating system. The following formatting rules apply to the file lists: Entry length maximum is 256 characters. Entry cannot end with a slash (/ or \). Wildcards (*) and environmental variables are allowed. Windows allows using ? as a wildcard. Entry cannot be a relative path. Folder and file names cannot contain certain special characters: Windows: \ / : " < > | , Linux: ? < > | // , & macOS: & = // To add more files, click Add. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base