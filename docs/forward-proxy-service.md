---
slug: trend-vision-one-forward-proxy-service
title: Forward Proxy Service
---

Specify the Trend Micro services that your on-premises Trend Micro products can access through the Forward Proxy Service.

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Service Gateway Management**.

2.  Click the name of the Service Gateway appliance with **Forward Proxy Service** installed.

3.  In the **Installed Services** list, locate **Forward Proxy Service** and click the configure icon (![](/images/configure=GUID-657DB993-ADC7-4DEC-8C62-C8739D74760E.webp)).

4.  In the **Forward Proxy Service** panel, select whether you allow your on-premises Trend Micro products to access only specified Trend Micro services through the Forward Proxy Service.

    The Forward Proxy Service comes with a list of [predefined allowed Trend Micro services](predefined-allow-list.md) in "FQDN and port" pair, as well as services submitted via API. You can also add allowed services as needed.

5.  Click **Add**, and then specify the FQDN or IP address and the port number of an allowed Trend Micro service.

    You can only modify service information that is added manually or via API.

    :::warning[Important]
    Trend Micro recommends keeping the predefined allowed services. Deleting these services might interference with the normal operations of the associated Trend Vision One features and apps.
    :::

6.  Repeat step 5 to add more allowed services.

7.  Click **Submit**.

**Related information**

- [Predefined allow list for Trend Micro services](predefined-allow-list.md "A list of FQDNs and ports for Trend Micro services that are allowed to access through the forward proxy service.")
