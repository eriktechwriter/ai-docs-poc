---
id: ip-reputation-order-evaluation
title: IP reputation order of evaluation
sidebar_label: IP reputation order of evaluation
description: IP reputation order of evaluation
tags:
  - endpoint-security
  - trend-vision-one
---

 IP reputation order of evaluation Message sender IP addresses go through IP reputation-based filtering. IP addresses are evaluated until the first match is found. Messages from approved sender IP addresses bypass IP reputation-based filtering at the MTA connection level. Messages from blocked sender IP addresses are blocked. Evaluation is done in the following order: IP addresses In the Approved IP Address list In the Blocked IP Address list Countries/regions In the Approved Country/Region list In the Blocked Country/Region list The Emerging Threat List (ETL) in the IP Reputation settings The Known Spam Source (KSS) in the IP Reputation settings The Dynamic User List (DUL) in the IP Reputation settings The Quick IP List (QIL) in the IP Reputation settings An IP address added to the Approved IP Address list will not be blocked even if that IP address is also in a CIDR block listed in the Blocked IP Address list. Furthermore, that IP address will not be blocked even if it is also in the Known Spam Source standard IP reputation database list. Important IP reputation-based filters use only IP address data to filter messages. You can also use sender email address and domain to filter incoming messages. Approved senders bypass IP reputation-based filtering at the MTA connection level. See Managing sender filter. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base