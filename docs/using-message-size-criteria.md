---
id: using-message-size-criteria
title: Using message size criteria
sidebar_label: Using message size criteria
description: Using message size criteria
tags:
  - endpoint-security
  - trend-vision-one
---

 Using message size criteria Procedure On the Scanning Criteria tab, click Advanced. Select Message size is in the criteria list. Select > or <= from the comparison drop-down list. Select > to apply the policy rule to messages that are larger than the specified size. Select <= to apply the policy rule to messages that are smaller than or equal to the specified size. For example, <= 10 MB applies the policy rule to all messages that are smaller than or equal to 10 megabytes. Type a number for the size. Select a unit of measurement from the following choices: KB: Kilobytes MB: Megabytes Note The Message size is criteria is applied to the total size of a message, including any attachments it might contain. For example, if a message contained two attachments, one a 3 MB attachment and the other a 1 MB attachment, a policy rule that deletes messages over 2 MB would delete the entire message, including both attachments. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base