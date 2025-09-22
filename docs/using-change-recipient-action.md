---
id: using-change-recipient-action
title: Using the change recipient action
sidebar_label: Using the change recipient action
description: Using the change recipient action
tags:
  - endpoint-security
  - trend-vision-one
---

 Using the change recipient action The Change recipient action intercepts messages and sends them to a new recipient. This means that the original message recipient will not receive a copy of the message. It is one of the intercept class of actions. You can only select a recipient address that is in your domain. Note The Change recipient action does not change the recipient address in the message header. The message will be routed to the new address and the original recipient will not receive the message. The new recipient, however, will see the original recipient's address in the message header. To have a copy of the message sent to a different address while allowing the original message to go to the original recipient, select the BCC action. WARNING Redirected messages may contain viruses or malicious code. Trend Micro recommends against redirecting messages to external addresses unless you have configured an outbound virus policy. Procedure From the Intercept section of the Action page, select the Change recipient action. Type the email address of the recipient in the field. If you have more than one email address, enter them in the field separated by commas or semicolons. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base