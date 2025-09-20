---
id: dac-channels-ntwk-targets
title: Defining Non-monitored and Monitored Targets
sidebar_label: Defining Non-monitored and Monitored Targets
description: Defining Non-monitored and Monitored Targets
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Defining Non-monitored and Monitored Targets Define the non-monitored and monitored targets based on the transmission scope configured on the Channel tab. For details on how to define non-monitored and monitored targets for All transmissions, see Transmission Scope: All Transmissions. For details on how to define non-monitored and monitored targets for Only transmissions outside the Local Area Network, see Transmission Scope: Only Transmissions Outside the Local Area Network. Follow these guidelines when defining monitored and non-monitored targets: Define each target by: IP address Host name FQDN Network address and subnet mask, such as 10.1.1.1/32 Note For the subnet mask, Data Loss Prevention only supports a classless inter-domain routing (CIDR) type port. That means that you can only type a number like 32 instead of 255.255.255.0. To target specific channels, include the default or company-defined port numbers for those channels. For example, port 21 is typically for FTP traffic, port 80 for HTTP, and port 443 for HTTPS. Use a colon to separate the target from the port numbers. You can also include port ranges. To include all ports, ignore the port range. Examples of targets with port numbers and port ranges: 10.1.1.1:80 host:5-20 host.domain.com:20 10.1.1.1/32:20 Separate targets with commas. Related information Transmission Scope: All Transmissions Transmission Scope: Only Transmissions Outside the Local Area Network © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base