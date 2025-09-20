---
slug: greenbone-integration
title: Greenbone Integration
---

Integrate your Greenbone Enterprise Appliance with Trend Vision one through a Service Gateway to increase your visibility into vulnerabilities on your network.

Enable Trend Vision One to receive data from your Greenbone Enterprise Appliance to gain deeper insight into the apps and devices your users access and vulnerabilities they may contain.

Through Greenbone integration, you gain access to the following insightful reports:

- Operating systems containing CVEs

- Applications containing CVEs

:::note
At least one Service Gateway must be configured to enable integration.

For more information, see [Service Gateway Management](service-gateway-management.md).

Instructions involving the Greenbone OS were valid as of January 16, 2025.
:::

### Procedure {#procedure}

1.  Configure the Greenbone Management Protocol (GMP) on your Greenbone Enterprise Appliance.

    1.  Open the Greenbone OS administration menu.

    2.  Select **Setup** and press **Enter**.

    3.  Select **Services** and press **Enter**.

    4.  Select **GMP** and press **Enter**.

    5.  Press **Enter** to enable GMP.

    6.  Select **OK** and press **Enter** to save your changes.

        For more information, see the [Greenbone Enterprise Appliance documentation](https://docs.greenbone.net/GSM-Manual/gos-22.04/en/managing-gos.md).

2.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration**.

3.  In the **Integration** column, click **Greenbone**.

    The **Greenbone** integration screen appears.

4.  If no Service Gateway is available, click the **Service Gateway Management** link to [deploy a Service Gateway](deployment-guides.md) or enable the Greenbone Connector service on an existing Service Gateway.

5.  Click **Connect**.

    The **Connection Settings** screen appears.

6.  Select a Service Gateway.

7.  Configure the Greenbone server settings.

    :::note
    The supplied Greenbone username and password must be for a Greenbone user account with at least an Observer role.
    :::

8.  Click **Connect**.

    :::note
    After connecting to the Service Gateway, the system automatically synchronizes data every 24 hours. To manually sync data, click the sync icon ( ![](/images/syncDataIcon=GUID-faeddf7f-b24a-4942-bcec-1e075bbbc2b0.webp) ).
    :::
