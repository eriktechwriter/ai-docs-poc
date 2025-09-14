---
slug: trend-vision-one-configure-admin-notifications
title: Configuring notifications
---

Send notifications about Trend Vision One alerts by configuring email, webhook, and mobile app account lists.

Follow these steps to configure notification settings for all alert types except for the following.

- [Response task](notifications-response-tasks.md)

- [New Workbench alert](notifications-workbench-alerts.md)

- [Private Access Connector status](notification-private-access.md)

- [Service Gateway critical service status or performance](notifications-sg.md)

- [New risk event](notifications-risk-event.md)

- [Case update summary](notification-case-update-summary.md)

- [Case update for owners](notifications-case-update-for-owner.md)

- [Newly discovered assets](notifications-new-assets.md)

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Administration → Notifications**.

2.  Click a notification type to open the **Alert Settings** panel.

3.  Enable the alert toggle in the panel.

4.  If applicable, select the notification **Frequency**.

    :::warning[Important]
    Changing the **Frequency** affects email notifications, webhook notifications, and mobile notifications.
    :::

5.  To send notifications to users by email, on the **Email** tab configure the **Recipients** list.

    1.  Specify email addresses or select from the list of Trend Vision One accounts.

        :::note
        Recently created Trend Vision One accounts may not immediately appear on the list.
        :::

    2.  Click **Send Test Message** to send a test notification. To send the test message only to emails you are adding to the recipient list, select **Send only to newly added recipients**. To send the test message to all recipients, select **Send to all recipients**.

        :::note
        You must wait a few minutes between sending test messages.
        :::

6.  To send notifications to webhook channels, on the **Webhook** tab configure the **Webhooks** list.

    1.  Select webhooks from the managed **Webhook List**.

        If your webhook is not listed, create a new webhook connection by [managing webhooks](managing-webhooks.md) in the **Webhook List**.

7.  To send notifications to users by the Trend Vision One mobile app, on the **Mobile** tab configure the **Accounts** list.

    1.  Specify the Trend Vision One accounts you want to send notifications to using the mobile app.

        :::note
        Recently created Trend Vision One accounts may not immediately appear on the list.
        :::

    2.  Click **Send Mobile App Installation Link** to send users an installation link for the mobile app. To send the installation link only to the accounts you are adding to the **Accounts** list, select **Send only to newly added accounts**. To send the installation link to all accounts, select **Send to all accounts**.

8.  Click **Save**.

**Related information**

- [Configuring notifications for response tasks](notifications-response-tasks.md "Send Trend Vision One notifications about Response task alerts by configuring email, webhook, and mobile app account lists.")
- [Configuring notifications for new Workbench alert](notifications-workbench-alerts.md "Send Trend Vision One notifications about new workbench alerts by configuring email, webhook, and mobile app account lists.")
- [Configuring notifications for Private Access Connector status](notification-private-access.md "Send Trend Vision One notifications about Private Access Connector status alerts by configuring email, webhook, and mobile app account lists.")
- [Configuring notifications for Service Gateway critical service status or performance](notifications-sg.md "Send Trend Vision One notifications about Service Gateway critical service status or performance alerts by configuring email, webhook, and mobile app account lists.")
- [Configuring notifications for new risk event](notifications-risk-event.md "Send Trend Vision One notifications about the New risk event alert by configuring email, webhook, and mobile app account lists.")
- [Configure notifications for case update summary](notification-case-update-summary.md "Send Trend Vision One email notifications about Case update summary alerts.")
- [Configure notifications for case update for owners](notifications-case-update-for-owner.md "Send Trend Vision One email notifications about Case update for owners alerts.")
- [Configuring notifications for newly discovered assets](notifications-new-assets.md "Send Trend Vision One notifications about Newly discovered assets alerts by configuring email, webhook, and mobile app account lists.")
