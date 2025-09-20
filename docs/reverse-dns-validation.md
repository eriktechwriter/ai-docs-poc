---
id: reverse-dns-validation
title: Configuring reverse DNS validation settings
sidebar_label: Configuring reverse DNS validation settings
description: Configuring reverse DNS validation settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configuring reverse DNS validation settings Cloud Email Gateway Protection allows you to configure rules for reverse DNS validation based on the sender domain, namely the domain in the envelope address of the email sender. For each rule, Cloud Email Gateway Protection supports two levels of reverse DNS validation: Whether there is a PTR record for the email sending IP address If a PTR record exists, whether the PTR record for the email sending IP address has a matching Address record (A record) If the sender domain of an incoming message meets multiple rules, Cloud Email Gateway Protection uses the most matched rule. For example, if you have configured the following three rules: Rule 1 for subdomain.example.com Rule 2 for *.example.com Rule 3 for *.subdomain.example.com The match results for different incoming sender domains are as follows: Incoming Sender Domain Matched Rule subdomain.example.com Rule 1 a.example.com Rule 2 a.subdomain.example.com Rule 3 a.b.com Default rule Related information Adding reverse DNS validation settings Editing reverse DNS validation settings © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base