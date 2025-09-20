---
id: adding-sender-ip-match-settings
title: Adding sender IP match settings
sidebar_label: Adding sender IP match settings
description: Adding sender IP match settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Adding sender IP match settings To prevent sender forgery, you can specify a sender domain within the message header address and the allowed IP addresses for the domain. Note Cloud Email Gateway Protection provides a built-in default rule that has the lowest priority to ensure you receive a baseline level of protection. The default rule cannot be deleted. You can create only one single rule for each Managed Domain. The default rule will be applied if no other rules are matched based on the Managed Domain. Procedure Go to Inbound Protection → Domain-based Authentication → Sender IP Match. Click Add. The Add Sender IP Match Settings screen appears. Select a specific recipient domain from the Managed domain drop-down list. Select Enable Sender IP Match. Under Sender Domain-IP Paris, add one or multiple domain-IP pairs. Specify a sender domain using one of the following formats: example.com subdomain.example.com *.example.com Specify one or multiple IP addresses or IP/CIDR blocks to pair with the domain. Click Add. Under Intercept, specify the action to take if the sender IP address does not match the sender domain as you specified. Delete entire message Quarantine Under Notify, choose to send notifications and select at least one notification template. Click Add. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base