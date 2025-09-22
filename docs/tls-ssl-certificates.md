---
id: tls-ssl-certificates
title: TLS and SSL certificates
sidebar_label: TLS and SSL certificates
description: TLS and SSL certificates
tags:
  - endpoint-security
  - trend-vision-one
---

 TLS and SSL certificates Understand how the internet access service validates the TLS/SSL certificates of web servers in HTTPS inspection. The Transport Layer Security/Secure Socket Layer (TLS/SSL) certificate of an HTTPS web server is comprised of a chain of certificates that start from the server’s certificate and terminate with the root certificate. Server certificate: Contains the public key to be used to validate the actual digital signature. Intermediate Certification Authority (CA) certificates: Contain the public keys to validate the server certificate or another intermediate certificate in the chain. Root CA certificate: contains the public key used to validate the first intermediate CA certificate or the server certificate in the chain. The internet access service validates the certificate chain of a web server stored in the system certificate store. Based on the validation result, it determines whether to block access to the associated websites or decrypt the HTTPS traffic based on inspection rules for further access control. Related information Root and intermediate CA certificates Server certificates © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base