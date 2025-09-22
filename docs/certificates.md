---
id: certificates
title: Certificates
sidebar_label: Certificates
description: Certificates
tags:
  - endpoint-security
  - trend-vision-one
---

 Certificates You can configure Application Control to specifically target applications based on the trust level of a certificate and that contain specific certificate attributes. Select the type of certificate trust level and then specify the required certificate Issuer or Subject information. Note Application Control supports the use of the asterisk (*) wildcard when specifying Certificate attributes, although you must use the wildcard in conjunction with other characters to limit the scope. For example, you cannot use only the wildcard character in any field. The following table describes the different trust types. Type Description Trusted (valid) You must have included the certificate in the trusted certificates list and the certificate must not have expired Trusted (expired) You must have added the certificate in the trusted certificates list but the certificate has already expired Untrusted The certificate is unknown or you did not add the certificate to the trusted certificates list Note The trust level combinations for Allow and Block criteria differ. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base