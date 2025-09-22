---
id: using-attachment-size-criteria
title: Using attachment size criteria
sidebar_label: Using attachment size criteria
description: Using attachment size criteria
tags:
  - endpoint-security
  - trend-vision-one
---

 Using attachment size criteria The Attachment size is criteria allows you to create policy rules that take actions on messages based on the size of any attachments to the message. Procedure On the Scanning Criteria tab, click Advanced. Select the Attachment size is criteria. Select > or <= from the comparison drop-down list. Select > to apply the policy rule to attachments that are larger than the specified size. Select <= to apply the policy rule to attachments that are smaller than or equal to the specified size. For example, <= 10 MB applies the policy rule to all messages that are equal to or smaller than 10 megabytes. Type a value for the size. Select a unit of measurement from the following choices: B: Bytes KB: Kilobytes MB: Megabytes Note The Attachment size is criteria is applied to the total size of each attachment. For example, if a message contained two attachments, one a 3 MB attachment and the other a 1 MB attachment, a policy rule that deletes attachments over 2 MB would delete only the 3 MB attachment. The other attachment would not be deleted. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base