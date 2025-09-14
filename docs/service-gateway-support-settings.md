---
slug: trend-vision-one-service-gateway-support-settings
title: Service Gateway support settings
---

Collect service logs or enable remote support when troubleshooting your Service Gateway with the support provider.

If requested by your support provider, perform the following steps to generate and download service logs or enable Service Gateway Remote Support.

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Service Gateway Management**.

2.  Click the name of the Service Gateway you want to troubleshoot.

3.  On the **Service Gateway** screen that appears, click **Service Gateway Support Settings** in the upper right.

4.  If your support provider requests service logs, configure the log collection settings to generate and download desired logs.

    1.  Select the period of logs you want to collect.

    2.  Select the services that you want to collect logs from.

        :::note
        Only enabled Service Gateway services display in the list.
        :::

    3.  Click **Generate Log File** to create a log file.

        :::note
        Allow some time before the logs are available to download.

        If an error occurs during the log generation, you can manually collect all logs by logging on to the CLI with your account credentials on the Service Gateway virtual appliance and running the `log collect` command.
        :::

    4.  Download the ZIP file by clicking the notification center icon ![](/images/notification_center=a1ddbf57-dc0d-4035-8ad1-5947cb3d9af1.webp) in the upper-right corner and locating "Successful log collection" on the **Tasks** tab.

5.  If your support provider requests remote access to your Service Gateway virtual appliance to collect information, turn on **Service Gateway Remote Support**.

    :::note
    After enabled, Service Gateway Remote Support automatically disables after 3 days.
    :::
