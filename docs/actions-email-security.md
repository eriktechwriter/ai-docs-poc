---
id: actions-email-security
title: modify actions
sidebar_label: modify actions
description: modify actions
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ modify actions Modify actions change the message or its attachments. The original sender will still receive the modified message, assuming that the message does not trigger other policy rules with Intercept actions. Note Note that the "Modify" actions may destroy the existing DKIM signatures in email messages. If this occurs, the messages cannot pass DKIM verification by the downstream mail server. For more information about specific Modify actions, select from the following: Clean cleanable Viruses, delete those that cannot be cleaned Action See Cleaning Cleanable Viruses. Delete matching attachments Action See Deleting matching attachments. Sanitize attachments Action See Sanitizing attachments. Insert X-Header Action See Inserting an X-Header. Insert stamp in body Action See Inserting a stamp. Tag subject Action See Tagging the Subject Line. Related information Cleaning cleanable malware Deleting matching attachments Sanitizing attachments Inserting an X-Header Inserting a stamp Tagging the subject line Tokens © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base