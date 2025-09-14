---
slug: trend-vision-one-receive-notifications-console
title: Receive notifications from the Trend Vision One console
---

Configure Trend Vision One to send notifications and alerts to the mobile app.

:::note
This is a “Pre-release” feature and is not considered an official release. Please review the [Pre-release disclaimer](pre-release-disclaimer.md) before using the feature.
:::

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Administration → Notifications**.

2.  Enable a notification type.

    1.  Click a notification type to open the **Alert Settings** panel.

    2.  For **Response task** notifications:

        Select the **Task status** and [Response action](response-actions-section.md) that you want recipients to receive notifications for.

        You can specify one or more task statuses or response actions. Trend Vision One sends the latest task status and response action notifications in a single message at the specified frequency.

    3.  For **New Workbench alert** notifications:

        - To send notifications to recipient groups based on alert severity, enable **Notify recipients based on alert severity**, configure the recipient group settings, and click **Save**.

        - To send notifications with detailed scope information, enable **Expanded impact scope details**.

        - To send notifications with highlighted objects associated with the alert, enable **Include highlighted objects**.

          The notification only displays the first 10 highlighted objects, ordered by alert severity

        :::warning[Important]
        Expanded details and highlighted objects might contain sensitive information about your environment.

        Add only emails and accounts with appropriate permissions to the recipient list.
        :::

    4.  For **Private Access Connector status** notifications:

        Select the conditions that trigger an alert:

        - Private Access Connector disconnected

        - CPU usage threshold reached

        - Memory usage threshold reached

        - Disk usage threshold reached

    5.  For notifications with frequency settings, select the notification frequency.

        Changing the **Frequency** affects email notifications, webhook notifications, and mobile notifications.

    6.  Go to the **Mobile** tab.

    7.  Specify the Trend Vision One accounts you want to send notifications to using the mobile app.

        :::warning[Important]
        Recently created Trend Vision One accounts may not immediately appear on the list.
        :::

    8.  Click **Send Mobile App Installation Link** to send users an installation link for the mobile app. To send the installation link only to the accounts you are adding to the **Accounts** list, select **Send only to newly added accounts**. To send the installation link to all accounts, select **Send to all accounts**.

    9.  Click **Save**.

3.  Repeat the previous step for every notification type you want to receive.

4.  Configure Trend Vision One Mobile:

    1.  In the Trend Vision One Mobile app, go to **Settings () → Notification**.

    2.  Enable the notifications you configured in the web console.

5.  In the settings app of your device, make sure Trend Vision One Mobile has permission to send notifications.
