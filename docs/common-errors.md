---
id: common-errors
title: Common errors
sidebar_label: Common errors
description: Common errors
tags:
  - endpoint-security
  - trend-vision-one
---

 Common errors Common errors encountered when using the Node.js SDK for Trend Vision One™ File Security The error messages in the following table may vary depending on your environment. Common Errors Sample message Description and handling Error: Name resolution failed for target dns:{server_address} There is a network issue. Please verify the network connection to AMaaS server, and make sure the server address specified in the AmaasGrpcClient is correct. Error: Failed to create scan client. Could not parse target name "". The AMaaS server address is not set or is empty. Please make sure the server address specified in the AmaasGrpcClient is correct. Error: You are not authenticated. Invalid token or API key. The API key is invalid. Please make sure to use a valid Trend Vision One API key. Error: Failed to open file. ENOENT: no such file or directory, stat {file_path} The {file_path} specified in scanFile cannot be found. Please make sure the file exists and {file_path} specified is correct. Error: Failed to open file. EACCES: permission denied, open {file_path} There is a file access permission issue. Please ensure the SDK has read permission of the {file_path}. Error: Invalid region. {region} The region is invalid. Please verify you are using the correct region. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base