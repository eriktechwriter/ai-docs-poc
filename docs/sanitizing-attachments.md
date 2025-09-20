---
id: sanitizing-attachments
title: Sanitizing attachments
sidebar_label: Sanitizing attachments
description: Sanitizing attachments
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Sanitizing attachments This action removes active content from attachments in PDF files and Microsoft Word, Excel, and PowerPoint documents that match the policy rule criteria. If the active content cannot be removed, you can configure whether to delete the attachment containing the active content. Sanitize attachments is one of the Modify category of actions. Important The Sanitize attachments action is only available in policies with the target criteria of Attachment contains active content. If the Sanitize attachments action is used in the policy rule, and the email attachment contains active content, the active content will be removed. To configure a policy rule action to remove active content from the attachments that match certain criteria: Procedure Select Sanitize attachments from the Modify section, and optionally select Delete attachment if unable to remove active content. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base