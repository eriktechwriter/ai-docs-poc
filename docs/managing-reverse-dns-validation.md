---
id: managing-reverse-dns-validation
title: Managing reverse DNS validation
sidebar_label: Managing reverse DNS validation
description: Managing reverse DNS validation
tags:
  - endpoint-security
  - trend-vision-one
---

 Managing reverse DNS validation Cloud Email Gateway Protection adds a layer of protection by validating the reverse DNS (rDNS) records for inbound email messages. With the reverse DNS validation feature, an administrator can configure the following: Validation settings: whether to reject an email message when the corresponding PTR record is missing or invalid Block list: a list of PTR domains for message blocking During the SMTP connection setup stage, Cloud Email Gateway Protection uses the email sending IP address to perform rDNS lookup. If the query result matches the criteria in any rDNS validation settings or the PTR domain block list, Cloud Email Gateway Protection rejects the email message before the message body is sent over. Note If the IP address sending an email message matches the Approved IP address list of IP reputation, the email message bypasses revere DNS validation. Related information Configuring reverse DNS validation settings Configuring the blocked PTR domain list © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base