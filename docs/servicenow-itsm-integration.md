---
slug: servicenow-itsm-integration
title: ServiceNow ITSM integration (for Workbench)
---

The ServiceNow ITSM connector allows you to manage Trend Vision One Workbench alerts directly in ServiceNow.

### Procedure {#procedure}

1.  On the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration** and click **ServiceNow ITSM**.

2.  Use the copy icons (![](/images/copyicon=GUID-BD854E6D-5EB9-4181-BE68-D5F743237995=1=en-us=Low.webp)) to obtain the following settings:

    - **Management IP address or hostname**

    - **Authentication token**

3.  On the ServiceNow console, go to **System Applications → All Available Applications → All**.

4.  Click **Find in Store**. The ServiceNow store opens.

5.  Find the `Trend Vision One Connector` add-on using the search bar. Click the app.

6.  Click **Get**.

    The Trend Vision One Connector add-on is installed on your instance.

7.  On the ServiceNow console, locate the **Trend Vision One Connector** add-on using the *Application Navigator*.

8.  Click **Properties**.

9.  Configure the add-on settings.

    1.  **Trend Vision One API endpoint address (required field)**: Paste the **Management IP address or hostname** that you obtained from the Trend Vision One console.

    2.  **Trend Vision One API authentication token (required field)**: Paste the **Authentication token** that you obtained from the Trend Vision One console.

10. Configure the rest of the settings as desired.

11. Click **Save**.

    ServiceNow begins syncing Workbench alerts from Trend Vision One.

    :::warning[Important]
    After successfully installing the add-on, ServiceNow begins syncing Workbench alerts from Trend Vision One. The initial synchronization pulls only Workbench alerts created within the past hour. You may need to allow some time before Workbench alerts start to appear.
    :::
