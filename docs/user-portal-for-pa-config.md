---
id: user-portal-for-pa-config
title: User portal for Private Access configuration
sidebar_label: User portal for Private Access configuration
description: User portal for Private Access configuration
tags:
  - endpoint-security
  - trend-vision-one
---

 User portal for Private Access configuration Configure a web-based user portal to ensure that all user traffic is validated even when the Secure Access Module is not available. You may not always be able to install the Secure Access Module on all endpoints (for example, endpoints running unsupported operating systems or external contractor devices). Configure the user portal to provide your users an alternative method to access internal corporate applications and still ensure the enforcement of private access rules. Procedure Go to Zero Trust Secure Access → Secure Access Configuration → Private Access Configuration and click the Global Settings tab. Specify the Custom domain name you want to use for your organization's user portal. The User portal URL and Canonical name (CNAME) fields automatically populate. Trend Vision One uses this name to form a user portal URL and canonical name (CNAME) for configuring Browser Access-enabled internal applications. Important The custom domain name must start with a letter or number and can only contain letters, numbers, and dashes. The user portal URL only supports HTTPS protocol and requires that web browsers support TLS 1.2 or above. Click Save. Important You cannot modify the custom domain name after confirming the settings. To change the name after configuration, contact your support provider. Provide the user portal URL to your users. Use the CNAME when you configure an internal application that you allow your users to request access to via a web browser. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base