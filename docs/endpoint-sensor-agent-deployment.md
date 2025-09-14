---
slug: trend-vision-one-endpoint-sensor-agent-deployment
title: Endpoint Sensor Agent Deployment
---

Configure your Endpoint Sensor agent installation packages to ensure that your newly-deployed agents:

- Report to Endpoint Inventory

- Automatically apply the correct default settings

After installing on an endpoint, the agent automatically connects to the assigned Endpoint Group Manager and protection starts immediately. If your network includes virtual desktops, you can set up the [agent for VDI environments](create-golden-agent-image.md).

### Procedure {#procedure}

1.  Go to **Endpoint Security → Endpoint Inventory**.

2.  Click **Agent Installer**.

3.  Select your **Operating system**.

    - **Windows**

      - **32-bit** or **64-bit**

    - **macOS**

    - **Linux**

      - **Auto detect**: The installation package is light-weight, and downloads and installs additional components after detecting the operating system type (requires more network bandwidth)

      - **Full package**: The installation package contains all necessary components and automatically installs the correct components after detecting the operating system version

4.  Click the **Download installer** icon (![](/images/downloadInstaller=20230617123737.webp)).

5.  Run the installation package on your target endpoints.

    :::note
    For macOS endpoints, you must provide administrator credentials to complete the installation.
    :::
