---
slug: config-google-cloud-saml
title: Configuring Google Cloud Identity
---

Configure Google Cloud Identity to serve as a SAML (2.0) identity provider for use by Trend Vision One.

:::note
This feature is not available in all regions.
:::

Google Cloud Identity is a unified identity and device management platform that provides SSO and multi-factor authentication services as well as device management.

To use Google Cloud Identity as an identity provider, you must have a valid Google Workspace subscription or Cloud Identity account (free or premium). Configuration is only possible through the Google Admin console using an admin account with super administrator privileges enabled.

### Procedure {#procedure}

1.  Sign in to the [Google Admin console](https://admin.google.com) using your administrator account.

2.  In the Google Admin console, go to **Apps → Web and mobile apps**.

3.  From the **Add app** drop-down menu, select **Add custom SAML app**.

4.  Enter a name for your custom SAML app and click **Continue**.

5.  Download the metadata file provided.

6.  In the Trend Vision One console, import the metadata file you downloaded from the Google Admin console.

    - If you have upgraded to the Foundation Services release:
      1.  Go to **Administration → Identity Providers** and click **Add Identity Provider**.

      2.  Enter the name you chose for your custom SAML app and an optional description.

      3.  Upload the metadata file.

      4.  Click **Save**.
    - If you have not upgraded to the Foundation Services release:
      1.  Go to **Administration → Identity Providers**.

      2.  Enable SAML (2.0) single sign-on.

      3.  Upload the metadata file.

      4.  Click **Save**.

7.  In the Google Admin console, configure the service provider details using the following values.

    - ACS URL: `https://signin.v1.trendmicro.com/saml/idpresponse`

    - Entity ID: `https://signin.v1.trendmicro.com/saml`

    - Name ID format: Select **EMAIL**.

    - Name ID: Select **Basic Information → Primary email**.

8.  Click **Continue**.

9.  In the settings for your new custom SAML app, click the arrow icon on the **User access** panel to choose users to authenticate to Trend Vision One.

10. Set the service status to **ON for everyone**.

11. Click **Save**.
