---
id: adding-enrollment-certificate
title: Adding an enrollment certificate
sidebar_label: Adding an enrollment certificate
description: Adding an enrollment certificate
tags:
  - endpoint-security
  - trend-vision-one
---

 Adding an enrollment certificate Add an enrollment certificate to generate client certificates for Zero Trust Secure Access modules and connectors. An enrollment certificate is an SSL certificate in .pem format. Download the certificate signing request (CSR) file from Trend Vision One, and then generate the enrollment certificate from a certificate authority (CA). Zero Trust Secure Access supports the use of enrollment certificates on desktop and mobile devices. For your organization's Zero Trust Secure Access modules and connectors, you can use the default certificates provided by Trend Vision One or add an enrollment certificate to generate the required module and connector client certificates. Procedure From Secure Access Configuration → Private Access Configuration, on the Internal Applications tab, click Manage Certificates on the right side of the screen. On the Enrollment Certificates tab, click Add Certificate. The Add certificate panel appears. Specify a unique name and a description for the enrollment certificate. Add the common name. Note The common name will be used to generate the certificate signing request (CSR) and cannot be modified. Click Generate CSR. Click Download to download the Trend Micro generated CSR. Use the Trend Vision One CSR file to generate the enrollment certificate in .pem format from a certificate authority (CA). Click Select File and upload the enrollment certificate. Note After upload, the connector and module client certificates generate automatically. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base