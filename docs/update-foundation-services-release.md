---
slug: trend-vision-one-update-foundation-services-release
title: Updating Trend Vision One to the Foundation Services release
---

Update your Trend Vision One to experience enhanced account and identity management, strengthened centralized management capabilities, improved compliance, and newly updated services.

:::warning[Important]
The Foundation Services release became officially available on July 3, 2023.

Complete the update before January 31, 2025 to continue using Trend Vision One.
:::

The Trend Vision One Foundation Services release includes the following benefits:

- Enhanced identity management and role-based access control: Configure permissions for users, groups, and identity providers, and define custom asset visibility for users across all Trend Vision One apps and services in one centralized location.

  Specific identity and access management features include the following:

  - The Foundation Services release supports configuring [additional user account types](user-accounts-foundation-services.md).

  - Individual user accounts can belong to and switch between multiple businesses registered with Trend Vision One.

  - Individual user email addresses can be associated with one SAML Account and multiple SAML Group Accounts, enabling the user to switch between SAML accounts within the same Trend Vision One tenant.

  - Configure multiple identity providers to enable IdP-initiated SAML single sign-on (SSO), direct mapping to third-party IdP user groups, and mapping of multiple roles to the same user account.

  - Asset Visibility Management allows asset visibility scopes to be created and assigned to users to determine which Trend Vision One assets they can view.

- New centralized security capabilities: Take advantage of new security capabilities for email, cloud, network, mobile, identity, and data in the Trend Vision One platform.

  Features unique to the Foundation Services release include [Endpoint Security](get-start-endpoint-security.md) and Data Security.

- PCI DSS compliance: Adhere to Payment Card Industry (PCI) Security Standards to better secure transaction and credit card data.

- Be ready for future releases: Gain immediate access to newly released features, including those limited to customers who have updated to the Foundation Services release.

:::warning[Important]
Be aware of the [considerations for updating](foundation-update-consider.md) to the Foundation Services release and [potential impacts on your user accounts](foundation-services-update-impacts.md) before beginning the update.
:::

### Procedure {#procedure}

1.  Sign in to Trend Vision One using the Primary User Account for your registered business.

    :::note
    The owner of the Primary User Account (formerly "Trend Micro Account") has licensing rights to all Trend Micro solutions for your business. Only the Primary User Account owner can initiate the update to the Foundation Services release.
    :::

2.  Go to **Administration → Console Settings**.

3.  In the **System Update** section, click **Get Started**.

4.  Review the **System Update Notice**.

5.  Acknowledge that you understand the update notice by selecting **I understand how the update will affect my system and agree to start the process**.

6.  Clicking **Start the Update** to begin updating.

7.  If your Primary User Account does not use an email address to sign in, assign and verify an email address to use in accessing your update services.

    1.  Assign an email account to the Primary User Account and click **Verify Email**.

    2.  Check your email inbox and copy the verification code sent from Trend Micro.

    3.  Paste the verification code into the console and click **Submit**.

8.  Update the Primary User Account password.

9.  Sign in to Trend Vision One using the Primary User Account.

    :::note
    Your updated sign-in email address and password are also your sign-in credentials for the Customer Licensing Portal, replacing your previous root account credentials.
    :::

10. Allow some time for the activation process to complete.

**Related information**

- [Foundation Services update considerations](foundation-update-consider.md "Consider the impacts of updating Trend Vision One to the Foundation Services release.")
- [Impacts of migrating user accounts from other Trend Micro products](foundation-services-update-impacts.md "Consider the impacts of migrating your local and SAML accounts from other Trend Micro products to Trend Vision One after updating to the Foundation Services release.")
