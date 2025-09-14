---
slug: trend-vision-one-connect-exist-prod-instance
title: Connecting existing products to Product Instance
---

Connect your Trend Micro security products to enhance visibility of your environment from the Trend Vision One console.

Depending on the connection type, your existing products are able to connect to Trend Vision One automatically or by using an enrollment token. Some products require additional settings to ensure optimal performance. See the links in the table below for more information on each product.

:::warning[Important]
If the product instance you want to connect was previously connected to another Trend Vision One instance, you must disconnect the product from the other Trend Vision One console before connecting to your current console through the Product Instance app.
:::

### Procedure {#procedure}

1.  Go to **Service Management → Product Instance**.

2.  Click **Add Existing Product**.

    The **Product Connection** screen appears.

3.  For **Instance type**, select the product that you want to connect.

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 75%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Instance type (Product)</p></th>
    <th><p>Connection Settings</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Trend Micro Apex One SaaS</p></td>
    <td><p>Click the link to generate the enrollment token. Copy the token into the product console and configure the connection in the product console.</p>
    

    :::warning[Important]
    
    <p>Connecting your product automatically transfers all license information and relevant product data to Trend Vision One.</p>
    <p>The connection process only transfers information related to the product instance and base agents, but not existing XDR Endpoint Sensors. Contact your support representative to find out how to move Endpoint Sensor agents and any limitations that might impact your network.</p>
    <p>Trend Micro recommends transferring all product and base agent information before contacting support to ensure that XDR Endpoint Sensor agents can be properly associated with endpoints.</p>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>Trend Micro Deep Security</p></td>
    <td><p>Click the link to generate the enrollment token. Copy the token into the product console. Click <strong>Save</strong> to close the Product Connection screen.</p>
    <p>For steps on how to connect and configure the product console, see <a href="trend-vision-one-configure-deep-security-software">Configure Trend Micro Deep Security required settings</a></p></td>
    </tr>
    <tr>
    <td><p>Trend Micro Cloud App Security</p></td>
    <td><p>Connecting your organization is automatic based on your registered business ID. If you have multiple organizations, click the toggle next to each organization you want to connect. Specify a description and click <strong>Save</strong> to connect.</p>
    <p>For steps on how to connect and configure the product console, see <a href="trend-vision-one-configure-cloud-app-security">Configure Trend Micro Cloud App Security required settings</a></p>
    

    :::note
    
    <p>Cannot connect to product instances which have not provisioned any services.</p>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>Trend Micro Email Security</p></td>
    <td><p>Your Trend Micro Email Security instance connects automatically based on your registered business ID.</p>
    <p>Specify a description and click <strong>Save</strong>.</p></td>
    </tr>
    <tr>
    <td><p>Trend Micro Deep Discovery Email Inspector</p></td>
    <td><p>Click the link to generate the enrollment token. Copy the token into the product console. Click <strong>Save</strong> to close the Product Connection screen.</p></td>
    </tr>
    <tr>
    <td><p>Trend Micro Deep Discovery Analyzer</p></td>
    <td><p>Click the link to generate the enrollment token. Copy the token into the product console. Click <strong>Save</strong> to close the Product Connection screen.</p></td>
    </tr>
    <tr>
    <td><p>Trend Micro Deep Discovery Inspector</p></td>
    <td><p>Deep Discovery Inspector appliance connections are managed by the Network Inventory app.</p></td>
    </tr>
    <tr>
    <td><p>Trend Micro Web Security</p></td>
    <td><p>Your Trend Micro Email Security instance connects automatically based on your registered business ID.</p>
    <p>Specify a description and click <strong>Save</strong>.</p></td>
    </tr>
    <tr>
    <td><p>TippingPoint Security Management System</p></td>
    <td><p>Click the link to generate the enrollment token. Copy the token into the product console. Click <strong>Save</strong> to close the Product Connection screen.</p>
    <p>For steps on how to connect and configure the product console, see <a href="https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-getstartednetworkips">Getting Started with Network Intrusion Prevention</a>.</p></td>
    </tr>
    <tr>
    <td><p>Trend Micro Apex Central On-Premises</p></td>
    <td><ol>
    <li><p>Apply the latest software patches to Apex Central.</p></li>
    <li><p>Access the product console and register the enrollment token</p></li>
    </ol>
    <p>Click the link to generate the enrollment token. Copy the token into the product console. Click <strong>Save</strong> to close the Product Connection screen.</p>
    

    :::warning[Important]
    
    <p>The connection process only transfers information related to the product instance and base agents, but not existing XDR Endpoint Sensors. Contact your support representative to find out how to move Endpoint Sensor agents and any limitations that might impact your network.</p>
    <p>Trend Micro recommends transferring all product and base agent information before contacting support to ensure that XDR Endpoint Sensor agents can be properly associated with endpoints.</p>
    <p>Product Instance does not support hybrid environments. If you have connected both an on-premises and SaaS Apex One server to your on-premises Apex Central server, you must disconnect the SaaS server and connect it separately in Product Instance.</p>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>Trend Micro Apex One On-Premises</p></td>
    <td><p>Trend Vision One does not support a direct connection to an on-premises Trend Micro Apex One server. Connect your Apex One servers to Trend Vision One through a Trend Micro Apex Central management server that is connected to Trend Vision One.</p>
    <p>For steps on how to connect your Apex One server through Apex Central, see <a href="trend-vision-one-configuring-apex-one-onprem">Configuring Trend Micro Apex One On-Premises</a>.</p></td>
    </tr>
    <tr>
    <td><p>Trend Cloud One</p></td>
    <td><p>Click the link to generate the enrollment token. Copy the token into the product console. Click <strong>Save</strong> to close the Product Connection screen.</p>
    <p>For steps on how to connect and configure the product console, see <a href="trend-vision-one-configure-trend-cloud-one">configuring additional settings</a></p>
    

    :::warning[Important]
    
    <p>The connection process only transfers information related to the product instance and base agents, but not existing XDR Endpoint Sensors. Contact your support representative to find out how to move Endpoint Sensor agents and any limitations that might impact your network.</p>
    <p>Trend Micro recommends transferring all product and base agent information before contacting support to ensure that XDR Endpoint Sensor agents can be properly associated with endpoints.</p>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>TXOne EdgeOne</p></td>
    <td><p>Configure a Service Gateway virtual appliance in the Trend Vision One console and access the product console to configure the required settings</p>
    <p>Click the link to generate the enrollment token. Copy the token into the product console. Click <strong>Save</strong> to close the Product Connection screen.</p>
    <p>For steps on how to connect and configure the product console, see <a href="trend-vision-one-configure-txone-edgeone">Configuring TXOne EdgeOne</a></p></td>
    </tr>
    <tr>
    <td><p>TXOne StellarOne</p></td>
    <td><p>Configure a Service Gateway virtual appliance in the Trend Vision One console and access the product console to configure the required settings</p>
    <p>For steps on how to connect and configure the product console, see <a href="trend-vision-one-configure-txone-stellarone">Configuring TXOne StellarOne</a></p></td>
    </tr>
    </tbody>
    </table>

4.  Click **Save**.

**Related information**

- [Configuring Cloud App Security](configure-cloud-app-security.md "To begin receiving the required activity data from Trend Micro Cloud App Security, you must grant the necessary Microsoft Exchange permissions.")
- [Configuring Deep Security Software](configure-deep-security-software.md "To begin receiving the security events from your Deep Security software, you must first enroll your Deep Security software and configure specific product settings.")
- [Configuring Trend Micro Apex One On-Premises](configuring-apex-one-onprem.md "Connect your Trend Micro Apex One servers to Trend Vision One.")
- [Configuring Trend Cloud One](configure-trend-cloud-one.md "Find out how to connect and configure your Trend Cloud One services to start sharing data with Trend Vision One.")
- [Configuring TXOne StellarOne](configure-txone-stellarone.md "Find out how to connect and configure your TXOne StellarOne services to start sharing data with Trend Vision One.")
- [Configuring TXOne EdgeOne](configure-txone-edgeone.md "Find out how to connect and configure your TXOne EdgeOne services to start sharing data with Trend Vision One.")
