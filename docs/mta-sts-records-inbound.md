---
id: mta-sts-records-inbound
title: About mta-sts records for inbound protection
sidebar_label: About mta-sts records for inbound protection
description: About mta-sts records for inbound protection
tags:
  - endpoint-security
  - trend-vision-one
---

 About mta-sts records for inbound protection To use MTA-STS to protect SMTP connections sending emails to your domains, you need to add a DNS record and publish a policy for each of the domains. Optionally, you can add a TLS reporting DNS record for each domain to receive reports from TLS peers protected by MTA-STS. The following is an example of the DNS record for MTA-STS: _mta-sts.example.com. 3600 IN TXT v=STSv1; id=20220831012215; The following is an example of the MTA-STS policy for the "example.com" domain, which needs to be published at https://mta-sts.example.com/.well-known/mta-sts.txt: version: STSv1 mode: enforce mx: *.in.tmes.trendmicro.com mx: *.tmes.trendmicro.com max_age: 604800 Note Set mx based on your serving site. Serving Site mx Value North America, Latin America and Asia Pacific *.in.tmes.trendmicro.com *.tmes.trendmicro.com Europe and Africa *.in.tmes.trendmicro.eu *.tmes.trendmicro.eu Australia and New Zealand *.in.tmes-anz.trendmicro.com *.tmes-anz.trendmicro.com Japan *.in.tmems-jp.trendmicro.com *.tmems-jp.trendmicro.com Singapore *.in.tmes-sg.trendmicro.com *.tmes-sg.trendmicro.com India *.in.tmes-in.trendmicro.com *.tmes-in.trendmicro.com Middle East (UAE) *.in.tmes-uae.trendmicro.com *.tmes-uae.trendmicro.com The following is an example of the DNS record for TLS reporting: _smtp._tls.example.com. 3600 IN TXT v=TLSRPTv1;rua=mailto:reports@example.com © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base