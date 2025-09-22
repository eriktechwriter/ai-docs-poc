---
id: creating-a-keyword-list
title: Creating a Keyword List
sidebar_label: Creating a Keyword List
description: Creating a Keyword List
tags:
  - endpoint-security
  - trend-vision-one
---

 Creating a Keyword List Procedure Go to Policies → Policy Resources → DLP Data Identifiers. Click the Keyword tab. Click Add. A new screen displays. Type a name for the keyword list. The name must not exceed 100 bytes in length and cannot contain the following characters: > < * ^ | & ? \ / Type a description that does not exceed 256 bytes in length. Choose one of the following criteria and configure additional settings for the chosen criteria: Any keyword All keywords All keywords within <x> characters Combined score for keywords exceeds threshold To manually add keywords to the list: Type a keyword that is 3 to 40 bytes in length and specify whether it is case-sensitive. Click Add. To add keywords by using the "import" option: Note Use this option if you have a properly-formatted .csv file containing the keywords. You can generate the file by exporting the keywords from either the server you are currently accessing or from another server. Click Import and then locate the .csv file containing the keywords. Click Open. A message appears, informing you if the import was successful. If a keyword to be imported already exists in the list, it will be skipped. To delete keywords, select the keywords and click Delete. To export keywords: Note Use the "export" feature to back up the keywords or to import them to another server. All keywords in the keyword list will be exported. It is not possible to export individual keywords. Click Export. Save the resulting .csv file to your preferred location. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base