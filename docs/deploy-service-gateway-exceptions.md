---
slug: trend-vision-one-deploy-service-gateway-exceptions
title: Deploy a Service Gateway and Configure Firewall Exceptions
---

Service Gateway appliances provide multiple features to connect data from on-premises Trend Micro solutions and various third-party tools. Install a Service Gateway and enable the **Forward proxy** feature to minimize the overhead associated with configuring firewall exceptions. You can also set up backup proxy sources in your [Endpoint Inventory Global Settings](global-settings-endpoint-inventory.md) in the event that your Service Gateway connection is unavailable.

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Workflow and Automation → Service Gateway Management**.

2.  For customers that do not have an existing Service Gateway deployed, install a Service Gateway.

    <figure>
    <img src="./images/serviceGatewayImage=20220823104040.webp" />
    </figure>

    1.  Click **Download Virtual Appliance** to open the **Service Gateway Virtual Appliance** panel.

    2.  Select either **VMware ESXi (OVA)** or **Microsoft Hyper-V (VHD)** as the image type you want to use.

    3.  Select **I agree to the End User License Agreement** and click **Download Disk Image**.

    4.  Record the **Registration Token** that you need to apply during deployment.

    5.  Install the Service Gateway virtual appliance.

        For detailed deployment instructions, see:

        - [Deploying a Service Gateway Virtual Appliance with VMware ESXi](deploy-service-gateway-vmware-esxi.md)

        - [Deploying a Service Gateway Virtual Appliance with Microsoft Hyper-V](deploy-service-gateway-hyper-v.md)

        For a complete list of Service Gateway system requirements, see [Service Gateway Appliance System Requirements](service-gateway-sys-req.md).

3.  On the **Service Gateway Management** screen, click the Service Gateway name.

4.  Click **Manage Services**

5.  Click the install icon (![](/images/SG2_install_icon=GUID-feef28dd-2ddb-4093-b4e4-5455a0b110bb.webp)) to install the **Forward proxy** service.

6.  Configure your firewall exceptions for Trend Vision One Endpoint Security.

    :::note
    If you are enabling or using other Trend Vision One features, you may need to configure additional firewall exceptions. Refer to the [complete firewall exceptions lists](firewall-exception-requirements-for.md) to find out about other feature requirements.
    :::

    <table>
    <colgroup>
    <col style="width: 20%" />
    <col style="width: 80%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Region</p></th>
    <th><p>Required exceptions</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Australia</p></td>
    <td><p>xlogr-ase2.xdr.trendmicro.com</p>
    <p>sgi-iot.au.xdr.trendmicro.com</p>
    <p>api.au.xdr.trendmicro.com</p>
    <p>au.services.trendmicro.com</p>
    <p>ctapi.trendmicro.com</p></td>
    </tr>
    <tr>
    <td><p>Europe</p></td>
    <td><p>xlogr-ec1.xdr.trendmicro.com</p>
    <p>sgi-iot.eu.xdr.trendmicro.com</p>
    <p>api.eu.xdr.trendmicro.com</p>
    <p>eu.services.trendmicro.com</p>
    <p>ctapi.trendmicro.com</p></td>
    </tr>
    <tr>
    <td><p>India</p></td>
    <td><p>xlogr-as1.xdr.trendmicro.com</p>
    <p>sgi-iot.in.xdr.trendmicro.com</p>
    <p>api.in.xdr.trendmicro.com</p>
    <p>in.services.trendmicro.com</p>
    <p>ctapi.trendmicro.com</p></td>
    </tr>
    <tr>
    <td><p>Japan</p></td>
    <td><p>xlogr-ane1.xdr.trendmicro.com</p>
    <p>sgi-iot.xdr.trendmicro.co.jp</p>
    <p>api.xdr.trendmicro.co.jp</p>
    <p>jp.services.trendmicro.com</p>
    <p>ctapi.trendmicro.com</p></td>
    </tr>
    <tr>
    <td><p>Singapore</p></td>
    <td><p>xlogr-ase1.xdr.trendmicro.com</p>
    <p>sgi-iot.sg.xdr.trendmicro.com</p>
    <p>api.sg.xdr.trendmicro.com</p>
    <p>sg.services.trendmicro.com</p>
    <p>ctapi.trendmicro.com</p></td>
    </tr>
    <tr>
    <td><p>United States</p></td>
    <td><p>xlogr-ue1.xdr.trendmicro.com</p>
    <p>sgi-iot.xdr.trendmicro.com</p>
    <p>api.xdr.trendmicro.com</p>
    <p>us.services.trendmicro.com</p>
    <p>ctapi.trendmicro.com</p></td>
    </tr>
    </tbody>
    </table>

**Related information**

- [Service Gateway Appliance System Requirements](service-gateway-sys-req.md "View detailed Service Gateway system requirements based on service deployment")
- [Service Gateway sizing guide for endpoints](gateway-endpoint-sizing-guide.md "Select a Service Gateway appliance specification based on type and number of endpoints.")
- [Deploying a Service Gateway Virtual Appliance with VMware ESXi](deploy-service-gateway-vmware-esxi.md "Discover how to install the Service Gateway virtual appliance on VMware ESXi.")
- [Deploying a Service Gateway Virtual Appliance with Microsoft Hyper-V](deploy-service-gateway-hyper-v.md "Instructions on how to use the Command Line Interface (CLI) to deploy a Service Gateway virtual appliance with Microsoft Hyper-V.")
