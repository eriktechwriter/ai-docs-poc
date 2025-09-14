---
slug: trend-vision-one-identity-providers
title: Identity Providers (Foundation Services release)
---

Add an Identity Provider (IdP) before you configure SAML single sign-on to access the Trend Vision One console.

### Procedure {#procedure}

1.  On the Trend Vision One console, go to **Administration → Identity Providers**.

2.  Click **Download the metadata XML**.

    The Trend Vision One Service Provider metadata XML file downloads to your computer.

3.  Go to your IdP to configure the settings and download the IdP metadata XML file.

    For more information, see the topic below for your IdP.

    - [Configuring Active Directory Federation Services](configuring-adfs.md)

    - [Configuring Google Cloud Identity](config-google-cloud-saml.md)

    - [Configuring Microsoft Entra ID](configuring-saml-ad.md)

    - [Configuring Okta](configuring-okta-saml.md)

    - [Configuring OneLogin](configuring-onelogin.md)

    :::note
    If you have updated your IdP certificate, you must regenerate the IdP metadata XML file and download the new file. If you have already added the IdP to Trend Vision One, you must upload the new file in the **Identity Providers** app.
    :::

4.  On the Trend Vision One console, go back to **Administration → Identity Providers**.

5.  Click **Add Identity Provider**.

6.  Specify a **Name** and **Description** for the IdP.

7.  (Optional) Configure the IdP to support adding [IdP-Only SAML Group Account](adding-idp-only-saml-group-account.md) users by specifying attributes provided in the IdP system.

    1.  Select the **Support IdP-Only SAML Group Account** checkbox.

        Adding IdP-Only SAML Group Accounts does not require user and group synchronization from your IdP. Trend Vision One accepts assertions from the identity provider and uses them to authenticate users into the Trend Vision One console.

    2.  Specify the **Group attribute**, the attribute containing the identifiers of the user groups defined in the IdP.

    3.  (Optional) Specify the **User attribute**, the attribute containing the identifier of the user signing in through the IdP, allowing individual users to be distinguished.

    4.  (Optional) Specify the **User display name attribute**, the attribute determining the display name of the user in the SAML assertion.

        If the optional **User attribute** and **User display name attribute** are not specified, the default value used is the **NameID** of the user from the SAML assertion.

    ![](/images/IdPOnlySAMLGroup_attributes_screenshot=21b38109-9a0e-411b-ae88-1ea50671b75f.webp)

8.  Click **Upload** and select the metadata XML file that you downloaded from your IdP.

9.  Click **Save**.

10. Click **Close** to return to the **Identity Providers** screen, or click **Add SAML Users** to add SAML user accounts in **User Accounts**.

    For more information, see [Configuring accounts](configure-vision-accounts.md).

**Related information**

- [Configuring Active Directory Federation Services](configuring-adfs.md "Configure Active Directory Federation Services (AD FS) as a SAML (2.0) identity provider for Trend Vision One.")
- [Configuring Google Cloud Identity](config-google-cloud-saml.md "Configure Google Cloud Identity to serve as a SAML (2.0) identity provider for use by Trend Vision One.")
- [Configuring Microsoft Entra ID](configuring-saml-ad.md "Configure Microsoft Entra ID as a SAML (2.0) identity provider for Trend Vision One to use.")
- [Configuring Okta](configuring-okta-saml.md "Configure Okta as a SAML (2.0) identity provider for Trend Vision One to use.")
- [Configuring OneLogin](configuring-onelogin.md "Configure OneLogin as a SAML (2.0) identity provider for Trend Vision One.")
