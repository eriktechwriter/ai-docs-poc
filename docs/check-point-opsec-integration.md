---
slug: trend-vision-one-check-point-opsec-integration
title: Check Point Open Platform for Security (OPSEC) integration
---

Trend Vision One enables sharing of suspicious object data with Check Point Open Platform for Security (OPSEC) through a Service Gateway.

Configure sharing of suspicious object data with this integration through a Service Gateway.

:::note
At least one [Service Gateway](deployment-guides.md) installed with the Suspicious Object Exchange Service must be configured to enable integration.

For more information, see [Service Gateway Management](service-gateway-management.md).
:::

### Procedure {#procedure}

1.  Configure settings on your integration.

    :::note
    The following steps were performed using version R80.10 of the Check Point SmartConsole.

    If you are using a different version, refer to the documentation for your version.
    :::

    1.  On the Check Point SmartConsole, go to **SECURITY POLICIES → Access Control → Policy**.

    2.  Click **Add rule above** to add a new rule.

    3.  To configure the new policy, right-click the action, and then change the action to **Accept**.

    4.  Right-click the source and select **Add new items...**.

    5.  Click **New → Address Ranges → Address Range...**.

        The **New Address Range** dialog appears.

    6.  In the **Enter Object Name** field, type `Trend Micro Vision One`.

    7.  In the **First IP address** and **Last IP address** fields, type the Trend Vision One Service Gateway IP address.

    8.  Click **OK**.

    9.  Right-click the destination and select **Add new items...**.

    10. Click **New → Address Ranges → Address Range...**.

        The **New Address Range** dialog appears.

    11. In the **Enter Object Name** field, type `Check Point`.

    12. In the **First IP address** and **Last IP address** fields, type your Check Point appliance IP address.

    13. Click **OK**.

    14. Click **Install Policy**.

        A confirmation dialog appears.

    15. Click **Publish & Install**.

    16. Click **Install**.

        Your Check Point appliance is configured to receive suspicious object data from the Trend Vision One Service Gateway.

2.  Configure settings on Trend Vision One.

    1.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration**.

    2.  In the **Integration** column, click **Check Point Open Platform for Security (OPSEC)**.

    3.  Use the toggle to enable or disable the integration.

    4.  Review the *Legal Statement* and click **Accept** or **Close** to continue.

    5.  Under **Data Transfer**, configure data sharing criteria and integration settings.

        1.  **Frequency**: Select the frequency at which suspicious object data is shared.

        2.  **Action**: Select what action Check Point Open Platform for Security (OPSEC) should apply.

        3.  **Frequency**: Select the frequency at which suspicious object data is shared.

        4.  **Batch size for processing**: Select the batch size for processing.

        5.  **Time before integration process timeout**: Select time before the integration process times out.

    6.  Under **Service Gateway Connection**, configure the connection between the Service Gateway and the integration.

        1.  Click **Connect**.

            The **Service Gateway Connection** panel appears.

        2.  Select a Service Gateway installed with the Suspicious Object Exchange Service.

        3.  Configure the integration server settings.

        4.  (Optional) Click **Test Connection** to verify if the settings are valid.

        5.  Click **Connect**.

            The connection configuration is added to the list.

        6.  (Optional) Click the **Distribute Now** icon (![](/images/GenerateNowIcon=GUID-60CE3573-F37D-4CD3-9E0A-74C7DCBF3525.webp)) to distribute suspicious object data to your Check Point appliance immediately.

    7.  Repeat the previous step to add multiple connection configurations for this integration.

    8.  Click **Save**.

3.  (Optional) To view the suspicious object data distributed by the Trend Vision One Service Gateway on the Check Point SmartConsole, do the following.

    1.  On the Check Point SmartConsole, click **Logs & Monitor** on the left pane, and then click the **New** icon to add a new tab.

    2.  On the new tab, click **Tunnel & User Monitoring**.

        The **SmartView Monitor** screen appears.

    3.  Click the **Launch Menu** icon, and then select **Tools → Suspicious Activity Rules...**.

        The **Enforced Suspicious Activity Rules** dialog appears.

    4.  At **Show On**, select your Check Point appliance.

    5.  Click **Refresh**.

        Suspicious object data distributed by the Trend Vision One Service Gateway is displayed.
