---
id: phishing-simulation-settings
title: Phishing simulation settings
sidebar_label: Phishing simulation settings
description: Phishing simulation settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Phishing simulation settings Configure global settings for phishing simulations to ensure your simulation emails can be successfully sent to recipients. You can configure settings that apply to all phishing simulations by clicking Settings. The following table describes the options available in Settings. Settings option Details Domain verification Add and verify your organization's domains to demonstrate you have adequate permissions to send phishing simulation emails within your organization. Click Verify domains to go to Administration → Domain Verification and add your domains. Important You must verify your Trend Vision One sign-in account domain in order to send phishing simulation emails. You cannot select simulation email recipients if you are not signed in to Trend Vision One with a verified domain. Allow list settings View the current sending domains, sending IPs, and simulation URLS for use when setting up allow lists in your email provider. To learn more, see Set up allow lists for Security Awareness. IP exceptions Add up to 20 IP addresses or ranges to the exception list if false positives frequently come from the IP addresses during simulations. Simulation failures from IP addresses on the exception list are not recorded in the simulation results. Supported formats: IPv4 addresses and ranges IPv6 addresses and ranges IP addresses in CIDR notation IP addresses with asterisk (*) wildcards © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base