---
id: track-data-lineage
title: Track data lineage
sidebar_label: Track data lineage
description: Track data lineage
tags:
  - endpoint-security
  - trend-vision-one
---

 Track data lineage Data Lineage offers a visualization of how sensitive data has been transmitted between endpoints within your organization, and identifies potential data leakage points. You can investigate a Data Lineage graph to: determine the origin point of sensitive data view how sensitive data has been transmitted from one endpoint to another view detailed information about a specific file, including file type, file size, and the file's URI. If the file is a zip file, you can expand to see the compressed files. The following table describes the elements that comprise Data Lineage. Element Description Left panel Observed Attack Techniques Lists the individual events detected in your environment and related MITRE information. Endpoints Lists the affected endpoints and highlighted objects of the alert. Graph Chain view Visualizes how sensitive data has transmitted from one endpoint to another. Click any file node to view the detailed profile. Click any endpoint node to view data activity details for that endpoint. For example, you can expand an endpoint node to see if the file has been renamed, unzipped, or moved to a different file location on the endpoint. Legend () Displays a key to the icons used in a Data Lineage graph, explaining the meaning of each graphical element. Right panel Detailed Profile Displays the details applicable to the selected object. If the selected object is a zip file, the Detailed Profile panel displays an Original sensitive data list that you can expand to see the compressed files within. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base