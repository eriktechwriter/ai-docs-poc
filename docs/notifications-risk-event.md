---
slug: notifications-risk-event
title: Configuring notifications for new risk event
---

Send Trend Vision One notifications about the **New risk event** alert by configuring email, webhook, and mobile app account lists.

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Administration → Notifications**.

2.  Click **New risk event** to open its settings panel.

3.  Enable the alert toggle in the panel.

4.  Click **Configure Watchlist** to set up notifications for the instances of risk events.

    :::note
    Recipients receive notifications about the instances of risk events based on the watchlist settings.
    :::

5.  In **Risk Event Watchlist**, select the risk events for which you want to receive notifications about related instances in your environment and click **Apply**.

    :::note
    The available risk events are categorized by risk factor. Only those associated with the following risk factors are available for selection:

    - Cloud app activity

    - System configuration

    - Threat detection

    - Vulnerability detection

    - XDR detection

    - Account compromise

    - Anomaly detection

    - Security configuration

    To receive notifications on risk event instances associated with XDR detection, configure notifications for [new Workbench alert](notifications-workbench-alerts.md).
    :::

6.  Select the notification **Frequency**.

    :::warning[Important]
    Changing the **Frequency** affects email notifications, webhook notifications, and mobile notifications.
    :::

7.  To send notifications to users by email, on the **Email** tab configure the **Recipients** list.

    1.  Specify email addresses or select from the list of Trend Vision One accounts.

        :::note
        Recently created Trend Vision One accounts may not immediately appear on the list.
        :::

    2.  Click **Send Test Message** to send a test notification. To send the test message only to emails you are adding to the recipient list, select **Send only to newly added recipients**. To send the test message to all recipients, select **Send to all recipients**.

        :::note
        You must wait a few minutes between sending test messages.
        :::

    3.  To send notifications to recipient groups based on risk event, enable **Notify recipients based on risk event**. Click **Create Group**, configure the **Recipient Group Settings**, and then click **Save**.

        :::note
        The **Recipient** list must contain at least one recipient before you create a group.

        Recipients not assigned to groups automatically receive all notifications.
        :::

8.  To send notifications to webhook channels, on the **Webhook** tab configure the **Webhooks** list.

    1.  Select webhooks from the managed **Webhook List**.

        :::note
        If your webhook is not listed, create a new webhook connection by [managing webhooks](managing-webhooks.md) in the **Webhook List**.
        :::

9.  To send notifications to users by the Trend Vision One mobile app, on the **Mobile** tab configure the **Accounts** list.

    1.  Specify the Trend Vision One accounts you want to send notifications to using the mobile app.

        :::note
        Recently created Trend Vision One accounts may not immediately appear on the list.
        :::

    2.  Click **Send Mobile App Installation Link** to send users an installation link for the mobile app. To send the installation link only to the accounts you are adding to the **Accounts** list, select **Send only to newly added accounts**. To send the installation link to all accounts, select **Send to all accounts**.

10. Click **Save**.
