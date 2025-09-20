---
id: adding-ip-address-group
title: Adding an IP address group
sidebar_label: Adding an IP address group
description: Adding an IP address group
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Adding an IP address group Create groups of IP addresses to define corporate networks and public or home networks. Procedure On the Secure Access Resources screen, click the IP Address Groups tab and then click Add. The IP Address Group Settings screen appears. Select the type of IP addresses you want to add. A private IP address group references a set of IP addresses or segments on the internal corporate network that share the same egress IP address. You can define a private IP address group to identify a sub-location within a corporate network location. You can then use these sub-locations to implement different internet access rules for the corporate network location, regardless of which users are accessing from these internal IP addresses. A public IP address group references a set of public IP addresses or segments outside your corporate networks, such as when users connect to public Wi-Fi networks or work from home. You can define a public IP address group and implement private access or internet access rules to determine whether users are allowed to access corporate resources or the internet from these IP addresses. Specify a unique name and a description for the group. This name appears in the Available Locations list when you configure internet access rules and HTTPS inspection rules. Specify at least one IP address or IP range of the corresponding IP type. Note IPv6 is not supported. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base