---
slug: trend-vision-one-deploy-service-gateway-vmware-esxi
title: Deploying a Service Gateway Virtual Appliance with VMware ESXi
---

Discover how to install the Service Gateway virtual appliance on VMware ESXi.

Verify that system requirements are met. For more information, see [Service Gateway appliance system requirements](sg-sys-requirements.md).

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Service Gateway Management**.

2.  Click **Download Virtual Appliance**.

    The **Service Gateway Virtual Appliance** panel appears.

3.  Select **VMware ESXi (OVA)**.

4.  Select a virtual appliance specification and click **Download Disk Image** to download an OVA file.

    :::tip
    Copy the registration token for later steps. The registration token will expire within 24 hours if not used.
    :::

5.  Create a virtual machine.

    1.  On VMware ESXi, go to **Virtual Machines** and click **Create / Register VM**.

        <figure>
        <img src="./images/sg_vm_create=GUID-06736ADD-2404-4D11-91BB-BB00DA0DD3DA=1=en-us=Low.webp" />
        </figure>

    2.  Select **Deploy a virtual machine from an OVF or OVA file** and click **Next**.

        <figure>
        <img src="./images/sg_vm_select_ova=GUID-72369919-3141-4686-8F62-EFB0853F4318=1=en-us=Low.webp" />
        </figure>

    3.  Specify a name for the Service Gateway virtual appliance, select the OVA file, and click **Next**.

        <figure>
        <img src="./images/sg_vm_select_ova_2=GUID-8E57A89C-0244-4A07-BFFF-682E3774ACDB=1=en-us=Low.webp" />
        </figure>

    4.  Select the disk location and click **Next**.

        <figure>
        <img src="./images/sg_vm_select_storage=GUID-B13DF9B6-E3F6-4536-B466-D084D5FFA8DA=1=en-us=Low.webp" />
        </figure>

    5.  Specify deployment options and click **Next**.

        <figure>
        <img src="./images/sg_vm_deployment_options=GUID-08C567AB-E66C-4518-93ED-F8FCD8265316=1=en-us=Low.webp" />
        </figure>

    6.  Review the settings and click **Finish**.

        <figure>
        <img src="./images/sg_vm_complete=GUID-A088E072-4691-4457-812E-E4CA1B37257F=1=en-us=Low.webp" />
        </figure>

6.  Click **Power on** to start the virtual machine.

    Service installation during the first launch of the appliance takes approximately 10 minutes.

    <figure>
    <img src="./images/sg_vm_power_on=GUID-CBB4B415-9892-45E4-AACB-062CBC086899=1=en-us=Low.webp" />
    </figure>

7.  After the service installation has completed, press the `ENTER` key to open the Command Line Interface (CLI) of the Service Gateway virtual appliance.

8.  Sign in using the default credentials.

    User name: admin

    Password: V1SG@2021

9.  Change your password.

10. Type `enable` and press the `ENTER` key to enable administrative commands. Provide your password when asked.

    The command prompt changes from \> to \#.

11. Configure the required network settings using the following CLISH commands.

    `Configure network primary ipv4.static <interface> <ip_cidr> <gateway> <dns1> [dns2] [cni] `

    `Configure static IPv4 network settings for the primary network interface`

    `<interface>: Name of the network interface (for example, eth0)`

    `<ip_cidr>: IPv4 address of the network interface in CIDR notation`

    `<gateway>: Gateway router address`

    `<dns1>: Primary DNS server address`

    `[dns2]: Secondary DNS server address`

    `[cni]: Internal network address pool (IP address ending in .0.0)`

12. To register the Service Gateway virtual appliance to Trend Vision One, use an SSH tool, such as the latest version of PuTTY, and using an account with administrator privileges, type the following command.

    `register <registration_token>`

    You can obtain the token from the same screen you download the virtual appliance on Trend Vision One (step 3).

    :::warning[Important]
    The virtual appliance only supports UTC time. Ensure your hypervisor is correctly configured.
    :::

    :::note
    - If your environment uses a local Network Time Protocol (NTP) server, make sure the NTP server synchronizes with the local time for successful registration.

    - Trend Micro recommends using an SSH client to easily copy and paste the registration token.
    :::

13. Use the CLI to configure other settings, if required.

    For more information on available commands, see [Service Gateway CLI commands](service-gateway-cli-commands.md).

    For details on setting up a virtual appliance with two network cards, see [Service Gateway Virtual Appliance dual network card configuration](https://success.trendmicro.com/dcx/s/solution/000292296?language=en_US).
