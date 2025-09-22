---
id: adding-domain-exception
title: Adding a domain exception
sidebar_label: Adding a domain exception
description: Adding a domain exception
tags:
  - endpoint-security
  - trend-vision-one
---

 Adding a domain exception Add a domain exception to allow HTTPS traffic from the matched domains to be automatically passed to users. Procedure Go to Zero Trust Secure Access → Secure Access Configuration → Internet Access Configuration. The Internet Access Configuration screen appears. Select Inspection Exceptions from the HTTPS Inspection drop-down list. Click Add. Specify a unique name and a description for the rule. Specify a domain. Trend Vision One uses domain match for adding inspection exceptions. If you input example.com, it only matches the domain https://example.com. It cannot match https://www.example.com or https://xxexample.com. If you wish to match the subdomains, you need to add wildcards to create the following pattern *.example.com. Tip Zero Trust Secure Access supports the following wildcard characters: * : Matches any number of characters ? : Matches a single character in a specific position (Optional) Select Exclude the following subdomains, add one or multiple domains in the text box, and then click Add. HTTPS traffic from the specified subdomains follows HTTPS inspection rules and is blocked when decryption fails. The added domain names appear in the area under the text box. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base