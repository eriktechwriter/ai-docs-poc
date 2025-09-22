---
id: obtaining-api-key
title: Obtain an API key
sidebar_label: Obtain an API key
description: Obtain an API key
tags:
  - endpoint-security
  - trend-vision-one
---

 Obtain an API key The Trend Micro Artifact Scanner (TMAS) requires that you obtain an API key from Trend Vision One. Ensure that you create an API key specifically for the endpoint you are calling (for example, create an API Key for the “us-east-1” region if you are planning to call the “us-east-1” endpoint to ensure proper authorization). Refer to the region flags to see a list of supported regions associated with the respective API key. You must add the API key account to a role with the correct permission. Select Run artifact scan for Code Security and Run container image scan for Container Security. Note The "Run artifact scan" permission in Code Security and the "Run container image scan" permission in Container Protection share the same settings. If one of these permissions is selected, then the other is also enabled. Only administrators with the necessary permissions can access the API Keys and User Roles screens. Contact your Trend Vision One administrator to obtain an API key and Configure a custom user role. After receiving a valid Trend Vision One API key, store the key in an environment variable. Add the API key associated with the region that you wish to call as an environment variable named TMAS_API_KEY. Examples: export TMAS_API_KEY=<your_trend_vision_one_api_key> © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base