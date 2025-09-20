---
slug: force-password-reset-task
title: Force Password Reset task
---

After identifying a potentially compromised user account, you can force the user to create a new password.

This task is supported by the following services:

- Microsoft Entra ID

- Active Directory (on-premises)

- Okta

- OpenLDAP

:::warning[Important]
To perform this action using Microsoft Entra ID, the Trend Vision One application in Microsoft Entra ID must be assigned the password administrator role.

For more information, see [Assigning the Password administrator role](assigning-password-admin-role.md).
:::

### Procedure {#procedure}

1.  After identifying the potentially compromised user account, access the context or response menu and click **Force Password Reset**.

    The **Force Password Reset Task** screen appears.

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
