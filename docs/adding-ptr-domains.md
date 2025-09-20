---
id: adding-ptr-domains
title: Adding PTR domains
sidebar_label: Adding PTR domains
description: Adding PTR domains
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Adding PTR domains Procedure Go to Inbound Protection → Connection Filtering → Reverse DNS Validation. Click the Blocked PTR Domains tab and click Add. On the Add Blocked PTR Domain screen, configure information about the PTR domain from which you want to block messages. Specify a domain name in one of the following formats: example.com subdomain.example.com *.example.com This format matches all the subdomains under the example.com domain, for example, a.example.com, a.b.example.com. Type a description for the domain. In the Exception(s) section, specify exceptions to the blocked PTR domain and click Add. The domains in the exception list must be subdomains of the blocked PTR domain. Cloud Email Gateway Protection does not block messages from these subdomains. To delete an exception, select the exception item and click Delete. Click Save. The blocked PTR domain appears in the blocked PTR domain list. Next steps To remove a blocked PTR domain, select a PTR domain and click Delete. You can also select the checkbox in the table heading row to select all rules. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base