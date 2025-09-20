---
slug: config-case-management-ticket
title: Configure ServiceNow ITSM to enable the Trend Vision One for ServiceNow Ticketing System
---

Configure ticket profiles to use when synchronizing tickets between ServiceNow ITSM and Trend Vision One apps.

To enable third-party ticketing synchronization between Trend Vision One apps and ServiceNow, you must configure required settings in the ServiceNow console.

:::warning[Important]
All ServiceNow instructions and links in this topic were valid as of December 2024. For further help, check your ServiceNow documentation.
:::

### Procedure {#procedure}

1.  In the ServiceNow console, install or update to the [Trend Vision One connector](https://store.servicenow.com/sn_appstore_store.do) version 2.2.0 or later.

2.  Create a non-interactive user restricted from directly signing in to the ServiceNow console.

    1.  Sign in to the ServiceNow instance with a user_admin or admin account.

    2.  Go to **All → User Administration → Users**.

    3.  Select an existing user or create a new user and then enable the **Web Service Access Only** check box.

        Suggested non-interactive user roles:

        - incident_manager

        - problem_manager

        - x_tremi_trend_micr.admin

        - x_tremi_trend_micr.cases_user

        - x_tremi_trend_micr.assets_user

        - x_tremi_trend_micr.events_users

    4.  Click **Update**.

    For more information, see the [ServiceNow documentation](https://docs.servicenow.com/bundle/tokyo-platform-administration/page/administer/users-and-groups/concept/c_NonInteractiveSessions.md) on creating non-interactive users.

3.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration** and select **Trend Vision One for ServiceNow Ticketing System**

4.  Click **Manage API Key** and copy the Trend Vision One API endpoint URL.

5.  Click **Generate Token**.

6.  Specify the API key settings including the role of the user you created in ServiceNow.

7.  Click **Add** and copy the generated authentication token.

8.  Configure the integration with Case Management in the ServiceNow console.

    1.  In the ServiceNow console, open the Trend Vision One Connector app.

    2.  Go to **Properties**.

    3.  Under **Trend Vision One API Configuration**, paste the Trend Vision One API endpoint URL.

    4.  Under **Case Management Integration**, paste the authentication token.

    5.  Select **Integrate with Case Management**.

        :::warning[Important]
        Trend Micro recommends enabling only one integration at a time (either Case Management or Workbench) to avoid generating duplicate incident tickets in ServiceNow.
        :::

    6.  Click **Save**.

9.  Enable the ServiceNow integration settings in the Trend Vision One console.

    1.  Go to **Workflow and Automation → Case Management**.

    2.  Click **Integration Settings**.

        The **Integration Settings** panel appears.

    3.  Enable Case Management to send tickets to ServiceNow.

        Once the connection is authenticated, Case Management can send cases to ServiceNow for management. All changes you make to a case in ServiceNow are synchronized with Trend Vision One.
