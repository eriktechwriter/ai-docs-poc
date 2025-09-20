---
slug: creating-replication-plan
title: Creating a configuration replication plan
---

Create an appliance plan to replicate settings across deployed Deep Discovery Inspector appliances.

Configuration replication plans allow you to copy the settings from one source appliance and apply them to one or more target appliance.

Configuration replication plans can only be deployed to compatible appliances. If you are unable to select the target appliance you want to deploy the plan to, verify that the version and language of the target appliance matches the source appliance.

For information on which settings are replicated, refer to the appendix **Settings Replicated by Deep Discovery Director** in the Deep Discovery Inspector Administrator's Guide.

:::note
**Network Security** only supports appliance plans for Deep Discovery Inspector version 6.5 Patch 1 or later. Upgrade your appliances to the latest version to ensure you can deploy plans through **Network Security**.
:::

### Procedure {#procedure}

1.  Go to **Network Security → Network Inventory → Deep Discovery Inspector**.

2.  Click **Manage** and select **Appliance plans**.

3.  Create a plan.

    - To create a new plan, click **Add Plan** and select **Configuration replication**.

    - To copy a plan, select the plan you want to duplicate and click **Copy**.

4.  Specify a unique **Plan name**.

5.  Select a source appliance for the **Replication source**.

6.  Select one or more **Target appliances**.

    :::note
    The target appliance list only displays compatible Deep Discovery Inspector appliances. If the appliance you want to deploy the plan to does not appear on the list, you might need to update the appliance or review the system settings.
    :::

7.  Select whether or not to **Restart appliances**.

    :::note
    Configurations which require the target appliance to restart do not execute if set to **Do not restart appliances**.

    Changing the packet capture or TLS 1.2 settings requires appliances to restart.
    :::

8.  Select the **Deployment schedule**.

    - **Immediate**: The plan begins deployment after saving.

    - **Custom**: The plan begins deployment at a specified time.

    If you select **Custom**, configure the deployment schedule settings to prevent the plan from executing at an unexpected time.

    - **Date**: The date to begin plan deployment.

    - **Package download period**: The time period when the target appliance can download the plan package.

    - **Execution start time**: When the target appliance executes the plan.

    :::note
    - Custom deployment schedules deploy based on the appliance system clock.

    - Plans are always deployed at 12:00 am (00:00) of the selected date.

    - If the download period includes 12:00 am (00:00) within the specified range - for example, if you set the download period to 8:00 pm (20:00) to 4:00 am (04:00) - the target appliance downloads as soon as the plan deploys. To prevent the download from occurring immediately, set the end time of the period to 11:59 pm (23:59).
    :::

9.  (Optional) Specify a **Description** of the plan.

10. Click **Save**.
