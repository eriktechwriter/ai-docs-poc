---
slug: trend-vision-one-configure-trend-cloud-one
title: Configuring Trend Cloud One
---

Find out how to connect and configure your Trend Cloud One services to start sharing data with Trend Vision One.

To begin receiving data from Trend Cloud One, you must first connect Trend Cloud One from Product Instance and enable the services you require.

:::warning[Important]
The connection process

Trend Micro recommends that you disconnect any previous Trend Cloud One - Endpoint & Workload Security connections before connecting Trend Cloud One.

Trend Cloud One only transfers information related to the product instance and base agents, but not existing XDR Endpoint Sensors. Contact your support representative to find out how to move Endpoint Sensor agents and any limitations that might impact your network.

Trend Micro recommends transferring all product and base agent information before contacting support to ensure that XDR Endpoint Sensor agents can be properly associated with endpoints.

After connecting Trend Cloud One, Endpoint & Workload Security is no longer available in theTrend Cloud One environment and all endpoint management is transferred to Trend Vision One in the Server & Workload Protection and Endpoint Inventory apps.
:::

:::note
If you encounter any issues attempting to connect Trend Cloud One with Trend Vision One, check that you have the correct license provisioned. Contact your support provider for more information.
:::

### Procedure {#procedure}

1.  Copy the enrollment token used in the Trend Cloud One console to identify your Trend Vision One console.

    1.  In the Trend Vision One console, go to **Point Product Connection → Product Instance**.

    2.  Click **Add Existing Product**.

    3.  Select **Trend Cloud One**.

    4.  Click the **Click to generate the enrollment token** link.

    5.  Copy the enrollment token.

2.  Use the enrollment token to integrate your Trend Cloud One environment with Trend Vision One.

    1.  Open your Trend Cloud One console and click **Integrations** at the bottom of the screen.

        <figure>
        <img src="./images/trendMicroCloudOneIntegrations=20221018145151.webp" />
        </figure>

    2.  Click **Trend Vision One™** on the navigation bar.

    3.  In the **Enrollment Token** section, click **Register enrollment token**.

    4.  Paste the enrollment token and click **Register**.

        :::note
        After connecting Trend Cloud One, Endpoint & Workload Security is no longer available in the Trend Cloud One environment and all endpoint management is transferred to Trend Vision One in the Server & Workload Protection and Endpoint Inventory apps.
        :::

3.  In the Trend Vision One console, enable the connections to your Trend Cloud One services.

    1.  Go to **Point Product Connection → Product Connector**.

    2.  Click **Trend Cloud One**.

    3.  Enable the Trend Cloud One services you want to connect.

        - Application Security

        - Network Security

    4.  Click **Save**.
