---
id: global-settings-ztsa
title: Global settings
sidebar_label: Global settings
description: Global settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Global settings Configure the settings that apply to the Private Access service. Setting Description Custom Domain Name for Browser Access Specify a custom domain name for Trend Vision One to generate a unique user portal URL and CNAME for your organization’s users to access internal apps via web browser. For more information, see User portal for Private Access configuration. DNS Domain Search List Add DNS search domains to allow users to access internal applications using only their short names. The DNS search domains act as suffixes, which are appended to the short name to form a valid FQDN. For example, if multiple internal applications share the same domain suffix but have different CNAMEs (e.g., portal.example.com, docs.example.com), adding example.com to the list allows users to access these applications by simply typing portal or docs. You must ensure that these FQDNs have the corresponding internal apps set up. Note This feature is currently supported only Windows platforms. Related information User portal for Private Access configuration © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base