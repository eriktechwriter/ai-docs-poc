---
slug: trend-vision-one-rapid7-nexpose-integration
title: Rapid7 - Nexpose integration
---

Integrate Rapid7 - Nexpose through a Service Gateway.

Configure the sharing of Nexpose data to gain deeper insight regarding the apps and devices your users access and the behaviors that contribute to users’ risk analysis.

Through Nexpose integration, you gain access to the following insightful reports:

- Operating systems containing CVEs

- Applications with containing CVEs

:::note
The integration workflow involves connecting to a Service Gateway with the Rapid7 - Nexpose service enabled.

For more information, see [Service Gateway Management](service-gateway-management.md).
:::

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration**.

2.  In the **Integration** column, click **Rapid7 - Nexpose**.

    The **Rapid7 - Nexpose** integration screen appears.

3.  Verify that at least one Service Gateway is available and that the Rapid7 - Nexpose service is enabled on the available Service Gateways by clicking the **Service Gateway Management** link.

    If no Service Gateways are available, you can deploy one on the **Service Gateway Management** app.

    For more information, see [Deployment guides](deployment-guides.md).

4.  Click **Connect**.

    The **Connection Settings** screen appears.

5.  Select a Service Gateway.

6.  Specify the URL of your Nexpose server and your Rapid7 Security Console credentials.

7.  Click **Connect**.

    :::note
    After connecting to the Service Gateway, the system automatically synchronizes data every 24 hours. To manually sync data, click the sync icon ( ![](/images/syncDataIcon=GUID-faeddf7f-b24a-4942-bcec-1e075bbbc2b0.webp) ).
    :::
