---
id: traffic-forwarding-internet-access
title: Traffic forwarding options for Internet Access and AI Service Access
sidebar_label: Traffic forwarding options for Internet Access and AI Service Access
description: Traffic forwarding options for Internet Access and AI Service Access
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Traffic forwarding options for Internet Access and AI Service Access Learn about alternative methods that ensure internet traffic is directed to the Internet Access Gateway without installing the Secure Access Module. Note You can use PAC files and proxy chaining concurrently. Option When to Use Pros Cons Proxy auto-configuration (PAC) files When your organization already has a proxy configured and you support users that often work outside the network You can configure and deploy PAC files to the Secure Access Module or the system proxy settings for traffic forwarding. Easily deployed through Active Directory Supported by major browsers Works on internal and external networks Users with admin rights can bypass using non-standard browsers Users can bypass by manually changing to "no proxy" Proxy chaining When your organization already has a proxy configured and you do not need to support users that often work outside the network Easy to set up Multiple rules offer full redundancy Supported by most web proxies Users cannot bypass Only internal network users are protected Port forwarding Not recommended due to the manual configuration involved Easy to set up Supported by major browsers Users cannot bypass Supports HTTP and HTTPS traffic Requires manual changes if primary gateway is unavailable Only internal network users are protected © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base