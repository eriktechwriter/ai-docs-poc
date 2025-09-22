---
id: deleting-matching-attachments
title: Deleting matching attachments
sidebar_label: Deleting matching attachments
description: Deleting matching attachments
tags:
  - endpoint-security
  - trend-vision-one
---

 Deleting matching attachments This action deletes any attachments that match the policy rule criteria. It is one of the Modify category of actions. Important The Delete matching attachments and Clean cleanable malware, delete those that cannot be cleaned actions cannot be used in the same policy rule. The Delete matching attachments action is invoked only when one or more of the following criteria trigger a policy rule: Message contains malware or malicious code Attachment is name or extension Attachment is MIME content-type Attachment is true file type Attachment is password protected Attachment size is Attachment content matches keyword expressions For example, if a Message size is policy rule (by default, greater than 10 MB) is triggered with an action of Delete matching attachments, all attachments will be deleted. To configure a policy rule action to delete attachments that match certain criteria: Procedure Select Delete matching attachments from the Modify section. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base