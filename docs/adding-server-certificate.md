---
id: adding-server-certificate
title: Adding a server certificate
sidebar_label: Adding a server certificate
description: Adding a server certificate
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Adding a server certificate Upload a server certificate for your organization's internal applications to facilitate browser access. For the servers that host your organization's internal applications, you can use the default self-signed certificate provided by Trend Vision One or upload your own server certificate. Complete the following steps to upload a server certificate. Note If you use the default certificate, the web browser displays a web server certificate error when users launch the app because the hostname of the app and the certificate do not match. Procedure On the Internal Applications tab, click Manage Certificates on the right side of the screen. Click Add Server Certificate. The Add Server Certificate screen appears. Specify a unique name and a description for the web server certificate. Next to Public key certificate, click Select File.... Navigate to the required certificate, and then upload the certificate. Make sure that you have selected a Base64 encoded X.509 certificate file in .crt or .pem format. Next to Private key, click Select File.... Navigate to the private key associated with the uploaded certificate, and then upload the private key. Make sure that the private key file is in .key or .pem format. Specify the passphrase if the private key is encrypted. Important Trend Micro uses the passphrase to decrypt the private key and does NOT store the passphrase. Click Add. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base