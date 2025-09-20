---
id: helm-chart-314
title: Helm Chart 3.1.4
sidebar_label: Helm Chart 3.1.4
description: Helm Chart 3.1.4
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Helm Chart 3.1.4 August 18, 2025—The Helm Chart 3.1.4 release includes the following: Features Added a new environment variable LOG_LEVEL to configure logging levels for ECS Fargate in task definitions. Enhancements Added image version tags to task definitions to facilitate easier version comparison. Bug fixes Resolved issues with malware/secret scan timeouts and job creation failures. Upgrade instractions Sample upgrade command: helm upgrade \ --values overrides.yaml \ --namespace trendmicro-system \ trendmicro \ https://github.com/trendmicro/visionone-container-security-helm/archive/3.1.4.tar.gz References https://github.com/trendmicro/visionone-container-security-helm/releases/tag/3.1.4 © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base