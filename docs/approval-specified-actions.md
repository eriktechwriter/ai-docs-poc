---
slug: trend-vision-one-approval-specified-actions
title: Require approval for specified response actions
---

Ensure critical actions are verified before execution by configuring manual approval settings.

Critical response actions like **Isolate Endpoint** may have significant impact on the targets. Make sure these actions are verified and approved by specified users before execution.

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Response Management** and click the **Settings** tab.

2.  Enable **Approval settings** and click **Edit settings**.

    :::note
    If you see **View settings**, you lack the necessary permissions to edit the settings.
    :::

3.  Choose a response action from the **Response action** drop-down list.

    :::note
    For the **Start Remote Shell Session** action, select a remote shell approval duration from the drop-down list.

    Once approved, remote shell access will remain valid for the duration you specify.
    :::

4.  Click the edit (![](/images/modify_connector=d7163417-a1d8-4a5a-8e4b-a8babe128751.webp)) icon under **Recipients** to select recipients to approve the action.

    1.  Select individual accounts or all accounts from the list of available accounts.

        Only accounts that have approval permissions are listed.

        The accounts move to the **Selected Recipients** tab.

    2.  Click **Save** to save the selected accounts as a group of recipients.

5.  To copy the group of recipients to a new approval setting, click the copy (![](/images/duplicate=e79af1b6-17af-40ad-b942-53ffb9e796d2.webp)) icon and choose a new response action.

6.  To add a new approval setting, click **Add Action**.

    :::warning[Important]
    Pending actions expire after 7 days and cannot be performed.

    The approval settings you configure in the Response Management app do not affect those configured in the Managed Services or Security Playbooks app.
    :::

7.  Choose whether to activate the setting after saving the setting configuration.

8.  Click **Save** to save and return to **Response Management** settings.

    The response action will be executed upon approval.
