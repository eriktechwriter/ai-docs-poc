---
id: ztsa-okta-integration-sso
title: Okta integration and SSO for Zero Trust Secure Access
sidebar_label: Okta integration and SSO for Zero Trust Secure Access
description: Okta integration and SSO for Zero Trust Secure Access
tags:
  - endpoint-security
  - trend-vision-one
---

 Okta integration and SSO for Zero Trust Secure Access Integrate with Okta to authenticate user access attempts and take action on risky account activity. Important You cannot configure single sign-on (SSO) from multiple IAMs. Ensure that you configure the necessary permissions and SSO on the IAM you want to use for Private Access and Internet Access authentication. Threat and Exposure Management and Zero Trust Secure Access both require data upload permission to ensure certain features function properly. Revoking data upload permission may prevent secure access policy enforcement and risk analysis. Integration requires an Okta user account with minimum administrator privileges based on the permission you want to enable. Permission Administrator Privileges Data upload permission API Access Management Admin Mobile Admin Read-Only Admin App Admin Org Admin Super Admin User enforcement permission Group Admin Org Admin Super Admin Procedure Go to Zero Trust Secure Access → Secure Access Configuration → Identity and Access Management. Click Grant permissions next to Okta. A new browser tab opens to the Third-Party Integration > Okta screen. Configure Okta integration by clicking Add Tenant. Configure Okta. Note Once you have configured Okta as your data source, data begins syncing after 10 minutes. When the full sync is complete, Okta syncs updates every 15 minutes. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base