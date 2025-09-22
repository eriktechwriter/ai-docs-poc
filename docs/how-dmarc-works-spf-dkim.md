---
id: how-dmarc-works-spf-dkim
title: How DMARC works with SPF and DKIM
sidebar_label: How DMARC works with SPF and DKIM
description: How DMARC works with SPF and DKIM
tags:
  - endpoint-security
  - trend-vision-one
---

 How DMARC works with SPF and DKIM SPF, DKIM and DMARC are three independent features in Cloud Email Gateway Protection. You can enable or disable those features based on your requirements. The following are typical scenarios for your reference: DMARC enabled only Cloud Email Gateway Protection performs its own SPF check and DKIM signature check before alignment check. SPF check, DKIM verification and DMARC authentication enabled at the same time Cloud Email Gateway Protection checks the sender domain for each inbound email message. If a message does not pass the SPF check, the message will be deleted, quarantined or delivered depending on the action configured. If the message passes the SPF check, Cloud Email Gateway Protection verifies DKIM signatures in the message. If the message does not pass DKIM verification, the message will be deleted, quarantined or delivered depending on the action configured. If the message continues to the next step in the delivery process, Cloud Email Gateway Protection implements DMARC authentication on the message. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base