---
id: configure-ai-scanner-scan-settings
title: Configure scan settings
sidebar_label: Configure scan settings
description: Configure scan settings
tags:
  - endpoint-security
  - trend-vision-one
---

 Configure scan settings Specify a target model and select the attack objective, technique, and modifier to scan for in the CLI. Procedure Create an API key for your AI model. Go to Administration → API Keys. Click Add API Key to create a new API key. Specify a name, user role, and expiration time for the API key. Important When adding the API key, you must select a Role with permission to run scans in AI Scanner. If your organization does not have an existing user role with the necessary permissions, create a custom role or contact your administrator. For more information, see API Keys. Click Add. Copy and retain the API key. Download and install the Trend Micro Artifact Scanner CLI. Configure the scan settings in the CLI. Open the Trend Micro Artifact Scanner CLI. Follow the instructions to paste in the target API endpoint and the new API key. Type the name of the target LLM for the scan. Select one or more attack objectives, techniques, and modifiers from the provided options. Click Yes to save the scan configuration and specify a file name. When the scan completes, go back to AI Scanner to view the full results. View the results of the scan in AI Scanner. For more information on the results available in AI Scanner, see AI Scanner scan results. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base