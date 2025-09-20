---
slug: notifications-new-assets
title: Configuring notifications for newly discovered assets
---

Send Trend Vision One notifications about **Newly discovered assets** alerts by configuring email, webhook, and mobile app account lists.

New assets detected in your environment might pose significant risks. Configure notifications to stay informed about the newly detected assets.

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Administration → Notifications**.

2.  Click **Newly discovered assets** to open its settings panel.

3.  Enable the alert toggle in the panel.

4.  Click **Configure Watchlist** to set up notifications for new assets based on their asset types.

    :::note
    Recipients receive notifications for newly discovered assets based on the watchlist settings.
    :::

5.  In **Asset Watchlist**, select asset types and asset information to receive notifications about new detections in your environment and click **Apply**.

    <table>
    <colgroup>
    <col style="width: 33%" />
    <col style="width: 67%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Asset Type</p></th>
    <th><p>Asset Information</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Unmanaged devices</p></td>
    <td><ul>
    <li><p>Device name</p></li>
    <li><p>Device type</p></li>
    <li><p>Operating system</p></li>
    <li><p>IP address</p></li>
    <li><p>Discovered by</p></li>
    <li><p>First seen</p></li>
    </ul></td>
    </tr>
    <tr>
    <td><p>Domains</p></td>
    <td><ul>
    <li><p>Host</p></li>
    <li><p>Public IPs</p></li>
    <li><p>Host provider</p></li>
    <li><p>Services</p></li>
    <li><p>Ports</p></li>
    <li><p>Discovered by</p></li>
    </ul></td>
    </tr>
    <tr>
    <td><p>Public IPs</p></td>
    <td><ul>
    <li><p>Public IP</p></li>
    <li><p>Host</p></li>
    <li><p>Location</p></li>
    <li><p>Host provider</p></li>
    <li><p>Services</p></li>
    <li><p>Ports</p></li>
    <li><p>Discovered</p></li>
    </ul></td>
    </tr>
    </tbody>
    </table>

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

    3.  To send notifications to recipient groups based on asset type, enable **Notify recipients based on asset type**. Click **Create Group**, configure the **Recipient Group Settings**, and then click **Save**.

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
