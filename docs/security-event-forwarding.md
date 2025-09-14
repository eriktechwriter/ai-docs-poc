---
slug: trend-vision-one-security-event-forwarding
title: Security event forwarding
---

Enable sharing security event information from an on-premises Active Directory server with Cyber Risk Exposure Management.

Configuring security event forwarding allows Active Directory to share security event information (such as object access events, logon/logoff events, system events, and account management events) with Cyber Risk Exposure Management through a configured Service Gateway.

:::warning[Important]
- Before you begin, you must have at least one [Service Gateway virtual appliance](service-gateway-management.md) deployed and configured.

- Security Event Forwarding requires a [Service Gateway API key](service-gateway-management.md). To obtain the key, go to **Workflow and Automation → Service Gateway Management** and click **Manage API Key**.

- Changing the API key invalidates previously generated API keys.
:::

### Procedure {#procedure}

1.  Obtain the forwarding agent's installation package from the Trend Vision One console.

    1.  Go to **Workflow and Automation → Third-Party Integration → Active Directory (on-premises)**.

    2.  Use the toggle to enable or disable the integration.

    3.  In the **Security Event Forwarding** tab, click **Download Installation Package.**

        A tooltip with information about the installation package appears.

    4.  Click **Download Installer**.

2.  Install the agent on your Active Directory server.

    1.  Execute `trend-micro-vision-one-ad-connector.exe` with administrator rights.

    2.  Follow the on-screen wizard to configure the forwarding agent.

        :::warning[Important]
        If SSL certificates are imported, the certificates must be the same as the ones used in Service Gateways
        :::

3.  Repeat the previous step to install the agent in multiple Active Directory servers.

4.  In the Trend Vision One console, verify that the agent is connected and perform additional integration steps if necessary.

    :::note
    Any configuration changes on the Trend Vision One console take 5 minutes to reflect on the forwarding agent.
    :::

    1.  Go to **Workflow and Automation → Third-Party Integration → Active Directory (on-premises) → Security Event Forwarding**.

    2.  Verify that the forwarding agents appear in the agent list.

    3.  (Optional) Click on **Enable automatic updates**.

    :::warning[Important]
    If the forwarding agent user interface is open, the **automatic updates** process stops.
    :::
