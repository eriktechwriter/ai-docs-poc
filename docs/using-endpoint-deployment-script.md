---
slug: trend-vision-one-using-endpoint-deployment-script
title: Using the Deployment Script
---

Use a deployment script to download and install the agent on your endpoints.

The deployment script feature allows you to download and install the agent package using the command line interface of the target endpoint. The deployment script is customized for your environment when you select the parameters in Endpoint Inventory. You can also use the deployment script with a software management system to quickly deploy to multiple endpoints.

:::warning[Important]
The deployment script is region specific based on your Trend Vision One account. The deployment script cannot be used to deploy agents across multiple regions.

Deployment script does not support Standard Endpoint Protection agents. Support is coming soon.
:::

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Endpoint Security → Endpoint Inventory**.

2.  Click **Agent Installer**.

3.  In the **Agent Installer** window, go to **Deployment Script**.

4.  Select the **Protection type**.

5.  Select the **Operating system** of the target endpoint.

6.  Select the **Proxy for deployment**.

    - **Direct connect**: The agent installer attempts to connect directly to Trend Vision One without using a proxy.

    - **Custom proxy**: The agent installer attempts to connect using a user-defined proxy.

      To use this option, you must provide values the following attributes in the custom script before attempting to deploy:

      - `PROXY_ADDR_PORT`: The IP address or FQDN and port of the proxy server. For example: `127.0.0.1:40`

      - `PROXY_USERNAME`: If the proxy server requires credentials, provide the username.

      - `PROXY_PASSWORD`: If the proxy server requires credentials, provide the password.

    - **Service Gateway**: The agent installer attempts to connect using a deployed Service Gateway with Forward Proxy Service enabled.

      This option requires a Service Gateway with Forward Proxy Service installed and enabled. For more information, see [Deploy a Service Gateway and Configure Firewall Exceptions](deploy-service-gateway-exceptions.md).

    :::warning[Important]
    The deployment script does not utilize the custom proxies defined in the [Agent Installer Proxy settings](agent-installer-proxy-settings.md). Agents adopt the [Runtime Proxy settings](runtime-proxy-settings.md) assigned to their endpoint group after installation and registration is successfully completed.
    :::

7.  To include TLS validation, select **Validate Trend Vision One server TLS certificate**.

    When enabled, the deployment script checks if the Trend Vision One download server is using a valid TLS certificate from a trusted certificate authority (CA). Trend Micro recommends enabling this feature to help prevent "man in the middle" attacks.

8.  To include signature validation, select **Validate the signature on the agent installer**.

    When enabled, the deployment script performs a digital signature check on the downloaded agent installer file. The installation process is stopped if the check fails.

9.  Review and obtain the deployment script.

    - Click the download icon (![](/images/downloadInstaller=20230617123737.webp)) to save the script.

      For Windows deployments, the script is saved as a PowerShell script (.PS1). For Linux deployments, the script is saved as a Bash script (.SH).

    - Click the copy icon (![](/images/blueCopyIcon=GUID-53510da9-60f5-42ce-a552-9c3962185077.webp)) to copy the script.

10. Copy or download the script to your target endpoint.

11. Run the script from the command line interface.

    Use the command which corresponds to your operating system and interface:

    - Windows

      - Command prompt: Run the command `powershell.exe -File scriptname.ps1`

      - PowerShell: Run the command `.\scriptname.ps1`

    - Linux terminal: Add the execute permission to the file and run `./scriptname.sh`

    The deployment script downloads the agent installer package to the endpoint and begins installation. After installation successfully completes, the agent registers to Trend Vision One and appears in the Endpoint Inventory. The agent automatically adopts any settings or policies assigned to the managing endpoint group.

**Related information**

- [Troubleshooting common errors when using the Deployment Script](troubleshooting-deployment-script.md "Review solutions to resolving typical issues that may arise when attempting to use the deployment script to deploy endpoint agents.")
