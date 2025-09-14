---
slug: trend-vision-one-deploying-ddi-appliance-aws
title: Deploying a Deep Discovery Inspector virtual appliance on AWS
---

Learn how to connect a Deep Discovery Inspector virtual appliance deployed on AWS.

:::note
- In order to access and use the Deep Discovery Inspector virtual appliance in AWS, you must already have and continually maintain an active AWS Account on the AWS Marketplace and you are responsible for purchasing and maintaining through such AWS Account, your use of the Amazon Web Service platform/infrastructure that is required for your deployment of a Deep Discovery Inspector virtual appliance.

- The following instructions are current as of December 1, 2020. The AWS settings may be different if you are using a newer release of AWS. Refer to the AWS documentation for specific information related to your release.
:::

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Network Security → Network Inventory → Deep Discovery Inspector**, then click **Connect Appliance**.

2.  For **Product**, select **New appliance**.

3.  Under **Option: Deploy a virtual appliance on AWS**, click **Get AMI on Marketplace** to open the AWS Marketplace and deploy Deep Discovery Inspector.

    The Amazon EC2 console opens.

4.  Initiate the instance launch.

    1.  In the navigation bar at the top of the screen, select a Region for the instance that meets your needs.

    2.  From the **Amazon EC2** console dashboard, select **Launch instance**.

        <figure>
        <img src="./images/launch_instance=GUID-E7F18380-8EBE-41B6-9D05-12B496D6AADA=1=en-us=Low.webp" />
        </figure>

5.  Choose the AMI for Deep Discovery Inspector.

    1.  On the **Choose an Amazon Machine Image (AMI)** screen, select **AWS Marketplace** in the left pane.

    2.  In the search box, search for `Trend Micro Deep Discovery Inspector`.

        <figure>
        <img src="./images/aws_marketplace=GUID-48CEC453-F116-421E-9FF3-BD7FE8B08D5E=1=en-us=Low.webp" />
        </figure>

    3.  After the search results appear, click **Select** for **Trend Micro Deep Discovery Inspector \<version\>**.

6.  Choose an Instance Type.

    1.  On the **Choose an Instance Type** screen, choose an instance type that meets the minimum specifications based on your licensed model's throughput.

        For details, see the Deep Discovery Inspector AWS Deployment Guide.

    2.  Choose **Next: Configure Instance Details** to configure your instance further.

        <figure>
        <img src="./images/aws_deployment_process_2=GUID-021A56B3-5B85-41FB-9FC7-9E4D88795C80=1=en-us=Low.webp" />
        </figure>

7.  Configure the Instance Details.

    1.  On the **Configure Instance Details** screen, change the follow settings.

        - **Network**: Select the VPC.

        - **Subnet**: Select the subnet into which to launch your instance. Select a subnet that is planned for the data port subnet.

        - **Auto-assign Public IP**: Select **Disable**. Trend Micro recommends that you deploy the Deep Discovery Inspector virtual appliance behind an AWS NAT gateway.

          <figure>
          <img src="./images/aws_deployment_process_3=GUID-5E89CD12-65E9-4364-A281-DA7BE9EC7D32=1=en-us=Low.webp" />
          </figure>

        - **Network interfaces**: Add a secondary network interface for the Deep Discovery Inspector virtual appliance instance by choosing **Add Device**.

          :::warning[Important]
          The management port for Deep Discovery Inspector on-premises is fixed at the first NIC port (eth0 in Deep Discovery Inspector). In order to adapt into the AWS environment, the Deep Discovery Inspector virtual appliance has swapped port enumeration for the management port to port 1 (eth1) and data port to port 0 (eth0).
          :::

        - Device eth0:

          - **Subnet**: The subnet has been configured in a previous step.

          - **Primary IP**: Type a private IPv4 address from the range of your subnet, or leave **Auto-assign** to let AWS choose a private IPv4 address for you.

        - Device eth1:

          - **Subnet**: Select a subnet that is planned for the management port subnet.

          - **Primary IP**: Type a private IPv4 address from the range of your subnet, or leave **Auto-assign** to let AWS choose a private IPv4 address for you.

          - **IPv6 IPs**: (Optional) Click **Add IP** and type an IPv6 address from the range of the subnet, or leave **Auto-assign** to let AWS choose an IPv6 address for you.

        <figure>
        <img src="./images/aws_deployment_process_4=GUID-D1CBEBD9-2DCA-4219-A21D-0AA3CD6CE03C=1=en-us=Low.webp" />
        </figure>

    2.  Click **Next: Add Storage** to specify the root volume size of your instance

8.  Add Storage.

    1.  Specify the following settings on the **Add Storage** screen.

        - **Size**: The storage size should meet the minimum specifications based on your licensed model's throughput.

          For details, see the Deep Discovery Inspector AWS Deployment Guide.

          :::note
          To enlarge the storage size, specify the storage size of the **Volume Type: Root**. The Deep Discovery Inspector virtual appliance only partitions the storage when the **Volume Type** is **Root**. The extra storage will not be used.
          :::

        - **Volume Type**: Use the default value, **General Purpose SSD (gp2)**.

          <figure>
          <img src="./images/aws_deployment_process_5=GUID-A8176AA5-E54D-47B9-B098-EA31C8B169C2=1=en-us=Low.webp" />
          </figure>

    2.  Click **Next: Add Tags** to add some custom tags.

9.  Add Tags.

    1.  On the **Add Tags** screen, specify tags by providing the key and value combinations.

        For example, for **Key** type `Name` and for **Value** type `vDDI-demo`.

    2.  Click **Next: Configure Security Group**.

        <figure>
        <img src="./images/config_sec_group=GUID-EC249964-4D1F-45BE-9A3B-7B76164355D6=1=en-us=Low.webp" />
        </figure>

10. Configure Security Group.

    1.  On the **Configure Security Group** screen, use a security group to define firewall rules for the Deep Discovery Inspector virtual appliance instance.

        - To use existing security group, select **Select an existing security group**, and select your security group.

        - To create a new security group, select **Create a new security group**.

    2.  Verify that your selected security group contains the following rules:

        **Inbound Rules**

        <table>
        <colgroup>
        <col style="width: 13%" />
        <col style="width: 13%" />
        <col style="width: 13%" />
        <col style="width: 25%" />
        <col style="width: 38%" />
        </colgroup>
        <thead>
        <tr>
        <th><p>Type</p></th>
        <th><p>Protocol</p></th>
        <th><p>Port Range</p></th>
        <th><p>Source</p></th>
        <th><p>Reason</p></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><p>SSH</p></td>
        <td><p>TCP</p></td>
        <td><p>22</p></td>
        <td><p>CIDR that can reach your instance</p></td>
        <td><p>For accessing Deep Discovery Inspector virtual appliance Pre-Configuration console</p></td>
        </tr>
        <tr>
        <td><p>HTTPS</p></td>
        <td><p>TCP</p></td>
        <td><p>443</p></td>
        <td><p>CIDR that can reach your instance</p></td>
        <td><p>For accessing Deep Discovery Inspector virtual appliance management console</p></td>
        </tr>
        <tr>
        <td><p>Custom UDP</p></td>
        <td><p>UDP</p></td>
        <td><p>4789</p></td>
        <td><p>CIDR of your mirror source or the NLB</p></td>
        <td><p>For VXLAN traffic required by AWS traffic mirror</p></td>
        </tr>
        <tr>
        <td><p>Custom TCP</p></td>
        <td><p>TCP</p></td>
        <td><p>14789</p></td>
        <td><p>CIDR of NLB</p></td>
        <td><p>Implemented by the Deep Discovery Inspector virtual appliance for answering NLB health check</p></td>
        </tr>
        </tbody>
        </table>

        :::note
        Outbound Rules: Rules in default security group allow all traffic. The Deep Discovery Inspector virtual appliance works well with default outbound rules. The following exceptions may occur:

        - For some organizations, whose policies may need more specific protocols and port numbers, see Chapter 2: About Your System \> Ports Used by the Appliance in the Deep Discovery Inspector Installation and Deployment Guide.

        - For some organizations, whose infrastructures may need an outbound proxy with domains allowed to access the internet, see Deep Discovery Inspector Administrator's Guide for detailed addresses.
        :::

    3.  Click **Review and Launch**.

11. Review Instance Launch and select key pair.

    1.  On the **Review Instance Launch** screen, check the details of your instance, and make any necessary changes by choosing the appropriate **Edit** link.

    2.  Click **Launch**.

    3.  In the **Select an existing key pair or create a new key pair** dialog box, select **Proceed without a key pair**.

    4.  To launch your instance, select the acknowledgment check box, then click **Launch Instances**.

        <figure>
        <img src="./images/aws_deployment_process_6=GUID-B7E036E2-9875-4AF4-93C2-318458A9F3F5=1=en-us=Low.webp" />
        </figure>

12. Wait for the Deep Discovery Inspector virtual appliance to become ready.

    :::note
    The Deep Discovery Inspector virtual appliance takes about 15 minutes to become ready.
    :::

    1.  View the Deep Discovery Inspector installation progress by using the following steps:

        1.  In the left navigation page, click **Instances**.

        2.  Select the Deep Discovery Inspector virtual appliance instance.

        3.  Select **Actions → Instance Settings → Get Instance Screenshot**.

            <figure>
            <img src="./images/aws_deployment_process_7=GUID-08336E8B-07E9-4373-ABA0-43CD9467644D=1=en-us=Low.webp" />
            </figure>

        For more information, see [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.md).

    2.  When the Deep Discovery Inspector virtual appliance preconfiguration console appears, then Deep Discovery Inspector is ready.

        <figure>
        <img src="./images/aws_deployment_process_8=GUID-0CC989DD-1BEE-46C3-9FBA-4C4617D783B6=1=en-us=Low.webp" />
        </figure>

13. View or configure the Deep Discovery Inspector network settings.

    1.  Open the Amazon EC2 console at <https://console.aws.amazon.com/ec2/>.

    2.  In the navigation pane, select **Instances**.

    3.  Select the Deep Discovery Inspector virtual appliance.

    4.  Select **Actions → Networking → Manage IP Addresses**.

    5.  Expand **eth1**. The **Private IP Address** is the IP address of the management console for the Deep Discovery Inspector virtual appliance.

14. Connect the Deep Discovery Inspector appliance to Trend Vision One.

    - To connect directly, see [Connecting a Deep Discovery Inspector appliance directly](connecting-ddi-directly.md).

    - To connect using a Service Gateway as a proxy, see [Connecting a Deep Discovery Inspector appliance using Service Gateway as a proxy](ddi-connect-service-gateway.md).

15. Configure the Deep Discovery Inspector virtual appliance.

    Once the virtual appliance has connected, review the following to further configure and integrate the Deep Discovery Inspector virtual appliance.

    - Review [sandbox options](sandbox-deep-discovery-inspector.md) for collecting and analyzing suspicious objects.

    - [Manage settings from Network Inventory](deep-discovery-inspector-appliances.md) such as enabling the Network Sensor and connecting to a Service Gateway.

    - Click **Access** to open the Deep Discovery Inspector management console.

      At <https://docs.trendmicro.com/en-us/enterprise/deep-discovery-inspector.aspx>, see the Deep Discovery Inspector AWS Deployment Guide for different deployment options and see the Deep Discovery Inspector Administrator's Guide for details about configuring and administering Deep Discovery Inspector.
