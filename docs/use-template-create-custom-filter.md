---
id: use-template-create-custom-filter
title: Use a template to create a custom filter
sidebar_label: Use a template to create a custom filter
description: Use a template to create a custom filter
tags:
  - endpoint-security
  - trend-vision-one
---

 Use a template to create a custom filter Use one of the pre-built filter templates to create a custom filter to detect events in your environment. Procedure Go to Agentic SIEM & XDR → Detection Model Management → Custom Filters → Use a template. Browse the filter templates catalog, then select a template.Detection Model Management displays the custom filter in YAML format. Click Next. Adjust the general settings of the filter to your needs: Filter name Description Severity A severity of medium, high, or critical affects the Cyber Risk Index on the Cyber Risk Overview and Threat and Exposure Management. When testing or tuning a model, select low to avoid affecting indexes. Adjust the event settings of the filter to your needs: Validate the query by clicking Validate Query. If the query is valid, you can click Preview Search Results to see the search results your query returns. Specify up to 10 custom tags. Custom tags help you identify events detected by custom filters in Workbench, Observed Attack Techniques, and XDR Data Explorer. Tags can be up to 64 characters long. Click Save. Trend Vision One saves and enables the custom filter. This action might require a few minutes before taking effect. Tip You can use custom filters to create detection models that generate Workbench alerts based on your detections. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base