---
id: helm-chart-313
title: Helm Chart 3.1.3
sidebar_label: Helm Chart 3.1.3
description: Helm Chart 3.1.3
tags:
  - endpoint-security
  - trend-vision-one
---

 Helm Chart 3.1.3 August 4, 2025—The 3.1.3 Helm Chart release includes the following: Bug fixes Applied a fix to ensure proper use of the latest TLS certificate. The scan-manager now restarts after TLS changes, ensuring that it always uses the latest certificate. Resolved an issue where self-signed certificates were not automatically added to Scout. This fix ensures proper integration of self-signed certificates, improving security and reducing manual configuration. Upgrade instractions Sample upgrade command: helm upgrade \ --values overrides.yaml \ --namespace trendmicro-system \ trendmicro \ https://github.com/trendmicro/visionone-container-security-helm/archive/3.1.3.tar.gz References https://github.com/trendmicro/visionone-container-security-helm/releases/tag/3.1.3 © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base