---
id: ai-guard-curl-code-example
title: curl code example
sidebar_label: curl code example
description: curl code example
tags:
  - endpoint-security
  - trend-vision-one
---

 curl code example An example of curl code for the Trend Vision One AI Guard integration. The following is an example of how to integrate AI Guard with your application. # Basic request curl -X POST "<https://api.{region}.xdr.trendmicro.com/beta/aiSecurity>" \ -H "Authorization: Bearer $V1_API_KEY" \ -H "Content-Type: application/json" \ -d '{ "model": "us.meta.llama3-1-70b-instruct-v1:0", "messages": [ { "role": "user", "content": "Your prompt text here" } ] }' # With detailed response curl -X POST "<https://api.{region}.xdr.trendmicro.com/beta/aiSecurity/guard?detailedResponse=true>" \ -H "Authorization: Bearer YOUR_API_KEY" \ -H "Content-Type: application/json" \ -d '{ "guard": "Your prompt text here" }' © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base