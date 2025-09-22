---
id: bypass-url-list-for-windows-agent
title: Bypass URL list for the Windows agent
sidebar_label: Bypass URL list for the Windows agent
description: Bypass URL list for the Windows agent
tags:
  - endpoint-security
  - trend-vision-one
---

 Bypass URL list for the Windows agent The Zero Trust Secure Access agent for Windows automatically configures a URL bypass list. The list varies depending on whether your authentication method is module- or browser-based. The table below lists the URLs that are allowed to bypass the firewall for each method. Note If no proxy or service gateway is set in the Trend Vision One console, traffic goes directly to the internet. If configured, traffic follows PAC file rules to the specified proxy. Authorization type URLs automatically bypassed Module-based *.trendmicro.com *.trendnet.org *.trendmicro.co.jp Browser-based *.trendmicro.com *.trendnet.org *.trendmicro.co.jp login.microsoftonline.com *.okta.com *.mtls.okta.com *.oktapreview.com .mtls.oktapreview.com *.oktacdn.com *.okta-emea.com *.mtls.okta-emea.com *.duosecurity.com aadcdn.msftauth.net aadcdn.msauth.net aadcdn.msftauthimages.net secure.aadcdn.microsoftonline-p.com aadcdn.msauthimages.net autologon.microsoftazuread-sso.com *.telemetry.microsoft.com *.events.data.microsoft.com ceuswatcab*.blob.core.windows.net eaus2watcab*.blob.core.windows.net weus2watcab*.blob.core.windows.net *.gstatic.com accounts.google.com/ServiceLogin* accounts.google.com/InteractiveLogin* accounts.google.com/_/bscframe* accounts.google.co.* accounts.google.com/o/saml2/idp* accounts.google.com/favicon.ico www.googleapis.com/* lh*.googleusercontent.com/* www.google.com/recaptcha/ www.recaptcha.net accounts.youtube.com © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base