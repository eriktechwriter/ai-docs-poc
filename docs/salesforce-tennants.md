---
slug: trend-vision-one-salesforce-tennants
title: Configuring Salesforce tenants
---

Connect Salesforce tenants to share Salesforce metadata and information on system misconfigurations with Trend Vision One.

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Third-Party Integration**.

2.  Click **Salesforce**.

3.  Click one of the following to connect a tenant:

    - Click **Add a production tenant**.

    - Click **Add a sandbox tenant**.

    An unconfigured tenant appears in the list.

4.  In the **Status** column, click **Grant permissions** to allow Trend Vision One access to Salesforce data managed by the tenant.

    :::note
    Click **Details** to view the associated apps and specific permissions for the tenant.
    :::

5.  On the Salesforce console, either sign in as an administrator or create a new user profile to grant access to Trend Vision One.

    - If you have access to a Salesforce administrator account, sign in and click **Allow** in the **Allow Access?** modal.

      <figure>
      <img src="./images/image_AllowAccess=3ea86fc5-83d5-47c7-a4b1-1a01287caa07.webp" />
      </figure>

    - If you do not have access to a Salesforce administrator account, follow the instructions to create a Salesforce user profile with permission to grant access.

    1.  Go to **Setup → Administration → Users → Profiles**.

    2.  Create a user profile with the following permissions enabled:

        - Manage Salesforce CRM Content

        - Apex REST Services

        - API Enabled

        - Customize Application

        - Manage Users

        - Manage Custom Permissions

        - View All Data

        - View All Custom Settings

        - View Event Log Files

        - View Health Check

        - View Roles and Role Hierarchy

        - View Setup and Configuration

        - View All Users

        - View All Profiles

        - Query All Files

        - Modify Metadata Through Metadata API Functions

    3.  Go to **Setup → Administration → Users**.

    4.  Create a new user with the following settings:

        - Specify your new user profile for **Profile**.

        - Enable **Salesforce CRM Content User**.

        <figure>
        <img src="./images/image_SalesforceUser=df10aa1e-f069-49ba-bcd7-20c566778eb1.webp" />
        </figure>

        :::warning[Important]
        Please note that if this user is ever deactivated in the Salesforce console, Trend Vision One can no longer synchronize Salesforce data.
        :::

    5.  Click **Allow** in the **Allow Access?** modal.

    - If permissions are granted successfully, the Salesforce tenant begins sharing data with Trend Vision One. The **Tenant name** and **Tenant ID** appear on the **Workflow and Automation → Third-Party Integration** screen.

    - If permissions are not granted, click **Grant Permissions** to try again.

6.  To connect additional tenants, click **Add Tenant**, select a tenant type, and repeat the previous step.

7.  If you decide to prevent associated Trend Vision One apps from accessing data managed by the tenant, block the access permissions.

    1.  Click **Block permissions** in the **Status** column of the tenant.

    2.  In the confirmation screen, click **Block**.

        Trend Vision One is blocked from accessing the Salesforce data managed by the tenant.

    :::note
    Blocking permissions for an individual Salesforce tenant does not remove Trend Vision One completely from Salesforce. To remove Trend Vision One completely, search for and block the related *Connected App* in the Salesforce console. For more information, see [Salesforce documentation](https://help.salesforce.com/s/articleView?id=sf.connected_app_manage_third_party.htm&type=5).
    :::
