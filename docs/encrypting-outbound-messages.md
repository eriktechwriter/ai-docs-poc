---
id: encrypting-outbound-messages
title: Encrypting outbound messages
sidebar_label: Encrypting outbound messages
description: Encrypting outbound messages
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Encrypting outbound messages The purpose of this policy rule action is to protect sensitive data in email messages sent by users in your organization. Note This action only applies to outbound policy rules. For outbound messages with DKIM signing enabled, if you also apply this encryption action which causes mail body change, these messages may not pass downstream DKIM authentication. Actions in this class encrypt the message and then queue it for delivery. This is a non-intercept action, but no other actions can be taken on the target message after this policy rule is triggered. This action has the lowest priority of all actions, but when triggered it is always the final policy rule run before the message is queued for delivery. If more than one policy rule in the policy rule set is triggered, the policy rule that uses the encrypt email action will always be triggered last. In most cases, a policy rule to encrypt email messages will be based on one of the following: Specific senders or recipients of the message (for example, a policy rule that encrypts all email sent from Human Resources or the Legal department) Specific content in the message body Sensitive data contained in the message Procedure From the Intercept section of the Action page, select Do not intercept messages From the Modify section of the page, select the Encrypt email action. Related information Reading an encrypted email message © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base