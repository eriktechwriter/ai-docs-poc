---
id: post-migration-checklist
title: Post-Migration Checklist
sidebar_label: Post-Migration Checklist
description: Post-Migration Checklist
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Post-Migration Checklist Verify that your InterScan Web Security Virtual Appliance settings correctly migrated to Trend Vision One and direct end user internet traffic to the Internet Access Gateway. As many InterScan Web Security Virtual Appliance settings are not directly migratable to Zero Trust Secure Access Internet Access, you should verify that your settings are correct after upgrading. For more information, see InterScan Web Security Features and Settings Migration. Procedure Configure your firewall exceptions to allow ports and FQDNs required by Zero Trust Secure Access services. Check whether your Secure Access Rules require additional configuration. Go to Zero Trust Secure Access → Secure Access Rules and click the Internet Access Control tab. If any of the rules has an adjacent warning icon (), hover over the icon. Follow the instructions in the tooltip. Deploy a CA certificate on your end users' browsers. Cross-sign your existing CA certificate. Deploy the built-in CA certificate. Determine how you want to direct end user internet traffic to the Internet Access Gateway. Deploy the Secure Access Module on endpoints Forward internet traffic without the Secure Access Module. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base