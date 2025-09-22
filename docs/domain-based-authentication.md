---
id: domain-based-authentication
title: Domain-based authentication
sidebar_label: Domain-based authentication
description: Domain-based authentication
tags:
  - endpoint-security
  - trend-vision-one
---

 Domain-based authentication Cloud Email Gateway Protection provides authentication methods such as Sender IP Match, Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM) verification, and Domain-based Message Authentication, Reporting & Conformance (DMARC) to protect against email spoofing. If all these methods are enabled, Cloud Email Gateway Protection evaluates email messages in the following order: Sender IP Match SPF check DKIM verification DMARC authentication Cloud Email Gateway Protection keeps evaluating and scanning an email message in the preceding order until encountering an Intercept action. If an email message passes the Sender IP Match check, Cloud Email Gateway Protection skips its own SPF check as well as the SPF check of DMARC authentication for this message. Note For details about intercept actions, see intercept actions. Related information Sender IP match Sender policy framework (SPF) Domainkeys identified mail (DKIM) Domain-based message authentication, reporting & conformance (DMARC) How DMARC works with SPF and DKIM © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base