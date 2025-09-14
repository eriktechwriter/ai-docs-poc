---
slug: trend-vision-one-zscaler-private-access
title: Zscaler Private Access integration
---

Configure the Zscaler Private Access (ZPA) integration to add Trend Vision One users with a high risk exposure to Zscaler-defined restricted user groups and apply Zscaler policies to those groups.

:::warning[Important]
The following instructions and screen captures were valid as of August 13, 2024. For more information, see Zscaler documentation.
:::

### Procedure {#procedure}

1.  Create a user group in your selected IdP and sync the group to ZPA.

    :::note
    Trend Micro recommends creating a user group specifically for the Zscaler integration, rather than reusing an existing group.

    Make note of the name of the user group, and avoid modifying the name or other group settings once the integration is configured.
    :::

2.  Obtain the base URL, bearer token, and restricted user group from the Zscaler platform.

    1.  Sign in to the [Zscaler Private Access Admin Portal](https://admin.private.zscaler.com/).

    2.  Go to **Authentication → User Authentication → IdP Configuration**.

        Make sure you already have one or more identity providers configured with ZPA as the service provider in Zscaler. If you have not yet configured any identity providers, see [Zscaler documentation](https://help.zscaler.com/zpa/configuring-idp-single-sign) for instructions. For more information on specifying ZPA as the service provider for your IdP, see the documentation for your selected IdP.

    3.  Select an IdP and click the edit icon.

    4.  In the **Edit IdP Configuration** window, use the toggle to enable **SCIM Sync**.

    5.  Use the toggle to enable **SCIM Attributes for Policy**.

    6.  Copy and retain the **SCIM Service Provider Endpoint**.

    7.  Copy and retain the existing bearer token, or click **Generate New Token** and copy the new bearer token.

        ![](/images/ZscalerZPASettings=GUID-c1d875ea-bb82-473a-89c7-568ccd8291f2.webp)

    8.  Click **Save**

        For more information, see [Zscaler documentation](https://help.zscaler.com/zpa/enabling-scim-identity-management).

3.  In the Trend Vision One console, enable the integration and configure the settings.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  Click **Zscaler Private Access**.

    3.  Use the **Enable Zscaler Private Access integration** toggle to enable the service.

    4.  Click **+ Add Identity Provider**.

        The **Identity Provider Settings** window appears.

    5.  Paste in the **Base URL** and **Bearer token** obtained from the Zscaler platform.

    6.  Specify the **Restricted user group name** of the group you created in your IdP.

        For more information on creating and managing groups, see [Zscaler documentation](https://help.zscaler.com/zpa/about-scim-groups).

    7.  (Optional) Click **Test Connection** to authenticate the base URL, bearer token, and selected group.

    8.  Click **Save**.

        The **Add to Zscaler Restricted User Group** and **Remove from Zscaler Restricted User Group** response actions appear in the context menu in Cyber Risk Exposure Management.

    9.  (Optional) To modify or delete an IdP, use the ![](/images/edit_icon=GUID-1F1D1164-5310-4D6D-ACD0-6049C86960AF.webp) and ![](/images/trash_icon=GUID-47cf6867-6315-438e-8670-86ff36f22a28.webp) icons on the **Zscaler Private Access** screen.
