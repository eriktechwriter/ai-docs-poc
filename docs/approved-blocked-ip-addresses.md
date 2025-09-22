---
id: approved-blocked-ip-addresses
title: About approved and blocked IP addresses
sidebar_label: About approved and blocked IP addresses
description: About approved and blocked IP addresses
tags:
  - endpoint-security
  - trend-vision-one
---

 About approved and blocked IP addresses To manually override IP reputation-based filtering at the MTA connection level: Configure the Approved IP Address list Configure the Blocked IP Address list Configure the Approved Country/Region list Configure the Blocked Country/Region list Tip The Approved IP Address and Blocked IP Address lists support both IP addresses and Classless Inter-Domain Routing (CIDR) blocks. To add a CIDR block to the list, type the IPv4 address / CIDR block. The following is the only valid format: x.x.x.x/z These lists override the Quick IP List and Standard IP Reputation Settings and allow for customization of which addresses are subjected to IP reputation-based filtering. The IP addresses in the approved lists bypass other IP reputation-based filtering as well as reverse DNS validation. This list is useful for ensuring all messages from a partner company or other MTA are allowed, no matter their status with the standard IP reputation databases or with the Trend Micro Email Reputation Services (ERS) dynamic IP reputation database. When using the IP reputation approved lists, you may experience lower overall spam catch rates. The IP addresses in the blocked lists are not subject to other IP reputation-based filtering. Cloud Email Gateway Protection permanently rejects connection attempts from such IP addresses by responding with a 550 error (a rejection of the requested connection). Related information Managing approved and blocked IP addresses © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base