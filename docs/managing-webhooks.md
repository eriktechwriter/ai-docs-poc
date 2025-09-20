---
slug: managing-webhooks
title: Managing webhooks
---

Manage webhooks to receive notifications from Trend Vision One.

### Procedure {#procedure}

1.  Go to **Administration → Notifications**, and then click **Webhook List**.

2.  Create or edit a webhook connection.

    - To create a new webhook connection:

      1.  Click **Connect**.

      2.  In the **Webhook Connection** panel, configure the following settings:

          - **Webhook name**: Type a unique name for this connection.

          - **URL**: Type the webhook URL.

          - **Verify webhook server certificate**: Enable to verify webhook server SSL certificate.

            :::danger[Warning]
            Disabling **Verify webhook server certificate** accepts any server certificate and makes communication vulnerable to machine-in-the-middle attacks.

            Trend Micro recommends keeping **Verify webhook server certificate** enabled at all times.
            :::

      3.  Click **Test Connection** to verify the webhook URL.

      4.  For webhooks other than Microsoft Teams or Slack, configure the following settings:

          - **Body**: Type the format of the notification body in JSON format.

            :::note
            You must type the webhook body as a JSON string with keys and values and must have at least one value containing "$payload$".

            For example, {"title";"$title$","type";"$type$","data";"$payload$"}
            :::

          - **Header**: (Optional) Type a header to appear at the start of notifications.

            :::note
            You must type the webhook header as a JSON string with keys and values.

            For example, {"key1";"value1","key2";"value2"}
            :::

      5.  Click **Save**.

    - To edit an existing webhook connection: the name of a webhook in the list.
