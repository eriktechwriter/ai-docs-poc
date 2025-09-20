---
slug: sg-virtual-app-nutanix-ahv
title: Deploying a Service Gateway virtual appliance with Nutanix AHV
---

Instructions on how to use the Command Line Interface (CLI) to deploy a Service Gateway virtual appliance with Nutanix AHV cluster.

Verify that system requirements are met. For more information, see [Service Gateway appliance system requirements](sg-sys-requirements.md).

:::note
The following Nutanix AHV instructions and screen captures were valid as of September 20, 2024. For further help, check your Nutanix AHV documentation.
:::

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Service Gateway Management**.

2.  Click **Download Virtual Appliance**.

    The **Service Gateway Virtual Appliance** panel appears.

3.  Select **Nutanix AHV (QCOW2)**.

4.  Click **Download Disk Image** to download a QCOW2 file.

    :::tip
    Copy the registration token for later steps. The registration token will expire within 24 hours if not used.
    :::

5.  Upload the disk image to the Nutanix AHV cluster.

    1.  In your Nutanix Prism Web console, choose **Home → Settings** in the upper left corner.

        <figure>
        <img src="./images/sg_nutanix_5a_settings=38bb6a10-0ecd-444c-a732-49cfe1f46abb.webp" />
        </figure>

    2.  Click **Image Configuration** and click **Upload Image**.

        <figure>
        <img src="./images/sg_nutanix_5b_uploadimage=73cea27e-e132-487c-a02b-e8f81e6a17c0.webp" />
        </figure>

    3.  Specify the name of the image.

        <figure>
        <img src="./images/sg_nutanix_5c_imagename=a9316694-4af2-4aa1-91c6-d8bbd62e2afe.webp" />
        </figure>

    4.  Select **DISK** from the **Image Type** drop-down list.

        <figure>
        <img src="./images/sg_nutanix_5d_imagetype=7e947578-255f-4d32-a5e8-deb8a55fdfa6.webp" />
        </figure>

    5.  Select the container where you want to store your image.

        <figure>
        <img src="./images/sg_nutanix_5e_storagecontainer=8d181d85-a497-4774-b569-d94ec731addf.webp" />
        </figure>

    6.  Select **Upload a file**. Locate the downloaded QCOW2 file from your directory and click **Open**.

        <figure>
        <img src="./images/sg_nutanix_5f_open=453ded39-037c-48e7-9729-307a59a07151.webp" />
        </figure>

    7.  Click **Save**. Wait until the image is completely uploaded.

        It takes about 5 to 7 minutes to complete uploading the disk image.

        <figure>
        <img src="./images/sg_nutanix_5g_save=6b2c9aba-6bbe-46a9-bbdd-c0ecda18476a.webp" />
        </figure>

6.  Create a virtual machine.

    1.  Navigate to the **VM** section from **Settings** and click **Create VM**.

    2.  In the **General Configuration** area, specify the name and description of your virtual machine.

        <figure>
        <img src="./images/sg_nutanix_6b_createvm=21572a79-9070-410e-b39c-a12456e74d31.webp" />
        </figure>

    3.  In the **Compute Details** area, specify the desired configurations.

        - **vCPU**: 1
        - **Number Of Cores Per vCPU**: 8
        - **Memory**: 12 GB

        <figure>
        <img src="./images/sg_nutanix_6c_computedetails=1b1728b0-b206-4713-a2d9-d86e9d61e63f.webp" />
        </figure>

    4.  In the **Boot Configuration** area, keep the default **Legacy BIOS** for **Boot Configuration**.

    5.  In the **Disks** area, click **Add New Disk**. For **Operation**, select **Clone from Image Service**. Select **SCSI** for **Bus Type**, and select the uploaded QCOW2 image for **Image**. Click **Add** to save the settings.

        <figure>
        <img src="./images/sg_nutanix_6e1_addnewdisk=92005d38-ff93-4700-a2eb-e8fb22ca760c.webp" />
        </figure>

        <figure>
        <img src="./images/sg_nutanix_6e2_adddisk=8045ff68-aae3-4415-8451-38b400d3956d.webp" />
        </figure>

    6.  In the **Network Adapters (NIC)** area, click **Add New NIC**. Select the appropriate network subnet and click **Add** to save the settings.

        <figure>
        <img src="./images/sg_nutanix_6f1_addnewNIC=d4062e5d-8827-460e-a945-831c18a32ec0.webp" />
        </figure>

        <figure>
        <img src="./images/sg_nutanix_6f2_subnetname=c6515930-22f6-43b4-ae29-95e197e7c704.webp" />
        </figure>

    7.  Review the settings and click **Save**.

    8.  Right-click your virtual machine and click **Power on** to start the virtual machine.

        <figure>
        <img src="./images/sg_nutanix_6h_powneron=1740ea84-c26d-4788-97b2-a2ee9a83162c.webp" />
        </figure>

7.  On the Service Gateway virtual appliance, log on to the Command Line Interface (CLI) with the default credentials.

    User name: admin

    Password: V1SG@2021

8.  Change your password.

9.  Type `enable` and press the `ENTER` key to enable administrative commands. Provide your password when asked.

    The command prompt changes from \> to \#.

10. Configure the required network settings using the following CLISH commands.

    `Configure network primary ipv4.static <interface> <ip_cidr> <gateway> <dns1> [dns2] [cni]`

    `Configure static IPv4 network settings for the primary network interface`

    `<interface>: Name of the network interface (for example, eth0)`

    `<ip_cidr>: IPv4 address of the network interface in CIDR notation`

    `<gateway>: Gateway router address`

    `<dns1>: Primary DNS server address`

    `[dns2]: Secondary DNS server address`

    `[cni]: Internal network address pool (IP address ending in .0.0)`

11. To register the Service Gateway virtual appliance to Trend Vision One, use an SSH tool, such as the latest version of PuTTY, and using an account with administrator privileges, type the following command.

    `register <registration_token>`

    You can obtain the token from the same screen you download the virtual appliance on Trend Vision One (step 3).

    :::warning[Important]
    The virtual appliance only supports UTC time. Ensure your hypervisor is correctly configured.
    :::

    :::note
    - If your environment uses a local Network Time Protocol (NTP) server, make sure the NTP server synchronizes with the local time for successful registration.

    - Trend Micro recommends using an SSH client to easily copy and paste the registration token.
    :::

12. Use the CLI to configure other settings, if required.

    For more information on available commands, see [Service Gateway CLI commands](service-gateway-cli-commands.md).
