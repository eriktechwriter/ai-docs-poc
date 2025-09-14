---
slug: trend-vision-one-configuring-integration
title: Configuring Microsoft Entra ID integration
---

Grant Trend Micro permission to access your Microsoft Entra ID data in one or multiple tenants for use in Trend Vision One apps.

### Procedure {#procedure}

1.  Open the **Microsoft Entra ID** screen from **Workflow and Automation → Third-Party Integration** or from a Trend Vision One app that requires Microsoft Entra ID permissions.

2.  Locate and view the permissions that are required by the associated app.

    :::note
    If there are more than one Microsoft Entra ID tenants with access permissions granted, make sure that you identify all the tenants that you want to grant permissions on by checking the **Tenant name** in the screen.
    :::

3.  Grant access permissions on a Microsoft Entra ID tenant by performing the following steps.

    1.  Click **Grant permissions** in the **Status** column corresponding to the associated app.

    2.  Sign in to a Microsoft Entra ID with a Global Administrator account that manages the Microsoft Entra ID tenant.

    3.  View and confirm the permissions required.

    4.  Click **Accept**.

        When permissions are successfully granted, the name and ID of the tenant appear in the **Microsoft Entra ID** screen.

4.  If you want to grant a different permission set on the same tenant for the corresponding Trend Vision One apps, repeat step 3.

5.  If you want the associated app to access data in more than one tenant that you own, grant access permissions on another Microsoft Entra ID tenant by performing the following steps.

    1.  Click **Add Tenant**.

    2.  Repeat steps 2 and 3.

        When permissions are successfully granted, the name and ID of the tenant appear in the **Microsoft Entra ID** screen. The **Third-Party Integration** app groups and displays permissions on different Microsoft Entra ID tenants in sections in the screen.

        :::note
        **Mobile Security** can access your Microsoft Entra ID data in one tenant only.
        :::
