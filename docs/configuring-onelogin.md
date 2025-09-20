---
slug: configuring-onelogin
title: Configuring OneLogin
---

Configure OneLogin as a SAML (2.0) identity provider for Trend Vision One.

OneLogin is a cloud-based identity and access management (IAM) provider.

To use OneLogin as an identity provider (IdP), you must have a valid OneLogin subscription that handles the sign-in process and provides authentication credentials to Trend Vision One.

### Procedure {#procedure}

1.  Add the **SAML Custom Connector (Advanced)** application in OneLogin.

    1.  Sign into the [OneLogin portal](https://tmdl.onelogin.com/portal).

    2.  Go **Applications → Applications**.

    3.  Click **Add App**.

    4.  Search for and select **SAML Custom Connector (Advanced)**.

    5.  Type a **Display Name**.

    6.  Upload icons for the application.

    7.  Type an optional **Description**.

    8.  Click **Save**.

2.  Set up the **Configuration** for the application.

    1.  Click the **Configuration** tab.

    2.  Provide the following information to link OneLogin and Trend Vision One:

        - **RelayState**: Leave field empty

        - **Audience (EntityID)**: [`https://signin.v1.trendmicro.com/saml`](https://signin.v1.trendmicro.com/saml)

        - **Recipient**: [`https://signin.v1.trendmicro.com/saml/idpresponse`](https://signin.v1.trendmicro.com/saml/idpresponse)

        - **ACS (Consumer) URL Validator**: `^https:\/\/signin\.v1\.trendmicro\.com\/saml\/idpresponse\/$`

        - **ACS (Consumer) URL**: [`https://signin.v1.trendmicro.com/saml/idpresponse`](https://signin.v1.trendmicro.com/saml/idpresponse)

        - **Single Logout URL**: Leave field empty

        - **Login URL**: Leave field empty

        - **SAML not valid before**: `3`

        - **SAML not valid on or after**: `3`

        - **SAML initiator**: `OneLogin`

        - **SAML nameID format**: `Email`

        - **SAML issuer type**: `Specific`

        - **SAML signature element**: `Response`

        - **Encrypt assertion**: Leave unselected

        - **SAML encryption method**: `TRIPLEDES-CBC`

        - **Send NameID Format in SLO Request**: Leave unselected

        - **Generate AttributeValue tag for empty values**: Leave unselected

        - **Sign SLO Request**: Leave unselected

        - **Sign SLO Response**: Leave unselected

        - **SAML sessionNotOnOrAfter**: `1440`

    3.  Click **Save**.

3.  Configure the **Parameters** for the application.

    1.  Click the **Parameters** tab.

    2.  Keep **Configured by admin** selected.

    3.  Make sure that the default value **Email** is selected for the **NameID value** field.

        If not, click **NameID value** to open the **Edit Field NameID value** window, select **Email** from the drop-down menu, and click **Save**.

    4.  Click **Save**.

4.  In the **More Actions** drop-down menu, click **SAML Metadata** to download the OneLogin metadata XML file.

5.  Add OneLogin as an IdP in the Trend Vision One **Identity Providers** app.

    1.  Go to **Administration → Identity Providers**.

    2.  Click **Add Identity Provider**.

        The **Add Identity Provider** window appears.

    3.  Type a **Name** and a **Description** for the IdP.

    4.  Click **Upload** and select the metadata XML file downloaded from the OneLogin platform.

    5.  Click **Save**.

        OneLogin is added as an IdP in Trend Vision One.

        [Added SAML users](adding-saml-account.md) receive an account verification email from Trend Vision One. After clicking **Verify Email** in the email, users can sign in to Trend Vision One using their OneLogin credentials.
