---
id: gcp-integrat-sso-ztsa
title: Google Cloud Identity integration and SSO for Zero Trust Secure Access
sidebar_label: Google Cloud Identity integration and SSO for Zero Trust Secure Access
description: Google Cloud Identity integration and SSO for Zero Trust Secure Access
tags:
  - endpoint-security
  - trend-vision-one
---

 Google Cloud Identity integration and SSO for Zero Trust Secure Access Integrate with Google Cloud Identity to authenticate user access attempts and take action on risky account activity. Important You cannot configure single sign-on (SSO) from multiple IAMs. Ensure that you configure the necessary permissions and SSO on the IAM you want to use for Private Access and Internet Access authentication. Threat and Exposure Management and Zero Trust Secure Access both require data upload permission to ensure certain features function properly. Revoking data upload permission may prevent secure access policy enforcement and risk analysis. Integration requires access to the Google Admin console using a Google administrator account with super administrator privileges. Procedure Go to Zero Trust Secure Access → Secure Access Configuration → Identity and Access Management. Click Grant permissions under Google Cloud Identity. A new browser tab opens to Third Party Integration → Google Cloud Identity. Grant the relevant permissions associated with Zero Trust Secure Access by confirming the permissions in the Google Admin console. In the Google Admin console, Configure Google Cloud Identity. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base