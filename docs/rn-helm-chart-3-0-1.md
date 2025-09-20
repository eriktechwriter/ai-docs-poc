---
id: rn-helm-chart-3-0-1
title: Helm Chart 3.0.1
sidebar_label: Helm Chart 3.0.1
description: Helm Chart 3.0.1
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Helm Chart 3.0.1 June 13, 2025—The 3.0.1 Helm Chart release includes a minor update to your Helm value overrides and firewall settings required when upgrading from cloudone-container-security-helm. See Upgrade Helm chart from Trend Cloud One to Trend Vision One for more information. Detailed release notes: Enhancements Malware scanning supports ARM64 architecture. Send Kubernetes events when authentication token is expired or invalid. Automatically clean up all Container Security custom resources when uninstalling Helm Chart. Support for installing container images in a registry with no "project". The images.defaults.project field is not handled correctly when empty. Upgrade instructions Sample upgrade command: helm upgrade \ --values overrides.yaml \ --namespace trendmicro-system \ trendmicro \ https://github.com/trendmicro/visionone-container-security-helm/archive/3.0.1.tar.gz References https://github.com/trendmicro/visionone-container-security-helm/releases/tag/3.0.1 © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base