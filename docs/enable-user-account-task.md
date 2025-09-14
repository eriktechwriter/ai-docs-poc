---
slug: trend-vision-one-enable-user-account-task
title: Enable User Account task
---

After verifying the safety of a disabled user account, you can re-enable the account.

This task is supported by the following services:

- Microsoft Entra ID

- Active Directory (on-premises)

- Okta

- OpenLDAP

:::warning[Important]
The Enable User Account response action becomes available after you disable a user account and verify its safety.

You can re-enable a disabled user account by selecting **Enable User Account** from the options button (![](/images/options_icon=GUID-408062FA-DA13-4ECA-81EB-31A5B68355A1=1=en-us=Low.webp)) associated with the corresponding **Disable User Account** task. You can also trigger **Enable User Account** tasks via the context menu in **Attack Surface Discovery**, **Workbench**, **Observed Attack Techniques**, and the **Search** app.
:::

### Procedure {#procedure}

1.  After verifying the safety of a disabled user account, access the context or response menu and click **Enable User Account Task**.

    The **Enable User Account Task** screen appears.

2.  (Optional) Specify a description for the task.

3.  Click **Create**.

4.  Monitor the task status.

    1.  Open **Response Management**.

    2.  (Optional) Locate the task using the **Search** field or by selecting **Force Password Reset** from the **Action** drop-down list.

    3.  View the task status.

        - *In progress* (![](/images/in_progress=GUID-A55897DB-3DEA-4F5C-B7F9-70B3D7FB9EDE=1=en-us=Low.webp)): Trend Vision One sent the command and is waiting for a response.

        - *Successful* (![](/images/successful=GUID-1E31AD86-DE2E-48B5-85F7-7C78A3E8BB11=1=en-us=Low.webp)): The command was successfully executed.

        - *Partially successful* (![](/images/partially_successful_icon=GUID-20230103030733.webp)): The task was unsuccessful on one or more IAM service

        - *Unsuccessful* (![](/images/error=5cc21722-7ceb-480c-b9c2-a47d420cf1cc.webp)): The task was unsuccessful on all connected IAM services
