---
id: inline-settings-exchange
title: Configuring inline protection settings for Exchange Online
sidebar_label: Configuring inline protection settings for Exchange Online
description: Configuring inline protection settings for Exchange Online
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring inline protection settings for Exchange Online Procedure In Cloud Email and Collaboration Protection, go to Policies → Global Settings → Other Settings → Inline Protection Settings for Exchange Online. To turn off Inline Protection for Exchange Online without revoking access to Exchange Online (Inline Mode), disable Inbound Protection and Outbound Protection under Inline Protection. To use the message header address for matching the approved or blocked sender lists in the ATP policy, select Message header address under Sender Address Match. The envelope address is always used for matching the lists. If you have also granted Cloud Email and Collaboration Protection access to Exchange Online, to avoid scanning an inbound message twice with the same security filters, enable Trust Scan. Trust Scan applies only to a security filter that is enabled for both Exchange Online and Exchange Online (Inline Mode) - Inbound Protection. Email Scanning by the Same Security Filter Protection Mode Scanning Time If Trust Scan Disabled If Trust Scan Enabled Exchange Online (Inline Mode) - Inbound Protection When email in transmission Scan Scan Exchange Online When email arriving at the mailbox Scan Not scan Note Trust Scan applies to real-time scanning only. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base