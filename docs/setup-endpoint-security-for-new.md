---
slug: setup-endpoint-security-for-new
title: Setting up Endpoint Security for new Trend Micro customers
---

Provision and set up your Endpoint Security environment to begin using Trend Vision One security features.

:::warning[Important]
This guide is for customers who have never used a Trend Micro endpoint security product.
:::

Before you begin, make sure you have accessed your Trend Vision One console. For more information, see [Getting started with Trend Vision One](getting-started-trend-vision.md).

### Procedure {#procedure}

1.  In your Trend Vision One console, go to **Endpoint Security → Endpoint Inventory**.

    The first time you visit Endpoint Inventory, Trend Vision One provisions the app. Once the process is complete, Endpoint Inventory opens and the **Get Started with Endpoint Inventory** screen appears. You can review the steps or close the screen.

2.  Configure a proxy connection and review the firewall requirements.

    Trend Micro recommends deploying a Service Gateway with the Forward Proxy Service to help reduce and manage agent bandwidth usage within your security network.

    Otherwise, configure your proxy settings for installation and runtime in the [Global Settings menu](global-settings-endpoint-inventory.md) to ensure your agents can connect to Trend Vision One if a Service Gateway is not available.

    - Configure your [Agent Installer Proxy Settings](agent-installer-proxy-settings.md) to allow the agent installer package to download components and register to Trend Vision One. If a Service Gateway with the Forward Proxy Service is available, the agents use the Service Gateway instead.

    - Configure your [Runtime Proxy Policies](runtime-proxy-settings.md) to manage how endpoints connect to Trend Vision One after installation and registration successfully completes.

    The Endpoint Inventory app automatically adds the Service Gateway information and proxy settings to the agent installer package.

    To ensure your agents can communicate with Trend Vision One, review the [Firewall exception requirements for Trend Vision One](firewall-exception-requirements-for.md).

3.  Deploy agents to your endpoints.

    For detailed instructions, see [Deploy Agents](deploy-agents.md).
