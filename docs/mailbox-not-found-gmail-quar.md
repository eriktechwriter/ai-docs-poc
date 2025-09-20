---
id: mailbox-not-found-gmail-quar
title: Associated mailbox not found error upon configuring Gmail quarantine settings
sidebar_label: Associated mailbox not found error upon configuring Gmail quarantine settings
description: Associated mailbox not found error upon configuring Gmail quarantine settings
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Associated mailbox not found error upon configuring Gmail quarantine settings Problem: The error "Unable to find the associated mailbox %mailbox%. Specify an email address that has an associated mailbox in your organization." displays after you specify an email address for storing quarantined emails on the Quarantine Settings screen for Gmail. The possible causes are as follows: Possible cause 1: The specified email addresses does not have associated mailboxes in your organization. Make sure that the specified email addresses have associated mailboxes in your organization, and the mailbox is valid and managed by the Global Super Admin account that grants Cloud Email and Collaboration Protection access to Gmail. Possible cause 2: You have not granted the read-only, modify, and full access scopes to Cloud Email and Collaboration Protection. Grant the required permissions by performing the following steps: Log on to https://admin.google.com as a Google Super Admin. Go to Apps → Google Workspace Marketplace apps → Apps list and click Trend Micro Cloud App Security. Click Grant access in the Data Access section. The "Status: Granted" message appears on the screen. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base