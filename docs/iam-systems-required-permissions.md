---
id: iam-systems-required-permissions
title: Supported IAM systems and required permissions
sidebar_label: Supported IAM systems and required permissions
description: Supported IAM systems and required permissions
tags:
  - endpoint-security
  - trend-vision-one
---

 Supported IAM systems and required permissions Integrate a supported IAM system with Zero Trust Secure Access and grant the required permissions. Zero Trust Secure Access supports the following IAM systems: Microsoft Entra ID Okta Active Directory (on-premises) OpenLDAP Google Cloud Identity You must grant certain permissions within your IAM system to enable Zero Trust Secure Access to monitor user sign-in attempts, access user data, and perform actions on user accounts. To enable user authentication for Private Access and Internet Access, you must configure SAML-based single sign-on (SSO) for your IAM system. Note Zero Trust Secure Access only supports SSO for one IAM system at a time. Internet Access also supports NTLM v2-based SSO for your on-premises Active Directory. To ensure web access from public or home networks for users without the Secure Access Module, you must verify your authentication domain in Domain Verification. Domain verification is unnecessary when using NTLM v2 or Kerberos-based authentication. Permission Requirements Purpose Permission Data Upload Policy Enforcement Access user profiles and activity data for risk analysis Yes - Take direct action on user accounts that violate policy rules (for example, Disable User Account, Force Sign Out, Force Password Reset) Yes Yes Private Access authentication (SSO) Yes - Internet Access authentication (SSO) Yes - © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base