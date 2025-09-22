---
id: inbound-message-flow
title: Inbound message flow
sidebar_label: Inbound message flow
description: Inbound message flow
tags:
  - endpoint-security
  - trend-vision-one
---

 Inbound message flow Cloud Email Gateway Protection will first scan incoming email messages before final delivery to the example.com Inbound Server. The flow of messaging traffic from the Internet, through the Cloud Email Gateway Protection, and then to the example.com Inbound Server, or local MTA. Evaluation is done in the following order: The originating MTA performs a Domain Name Service (DNS) lookup of the MX record for example.com to determine the location of the example.com domain. The MX record for example.com points to the IP address of the Cloud Email Gateway Protection instead of the original example.com Inbound Server. The originating MTA routes messages to Cloud Email Gateway Protection. The Cloud Email Gateway Protection accepts the connection from the originating mail server. Cloud Email Gateway Protection performs connection-based filtering at the MTA connection level to decide on an action to take. Actions include the following: Cloud Email Gateway Protection terminates the connection, rejecting the messages. Cloud Email Gateway Protection accepts the messages and filters them using content-based policy filtering. Cloud Email Gateway Protection examines the message contents to determine whether the message contains malware or any other threats. Assuming that a message is slated for delivery according to the policies, the Cloud Email Gateway Protection routes the message to the original example.com Inbound Server. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base