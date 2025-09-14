---
slug: trend-vision-one-rescana-integration
title: Rescana integration
---

Gain visibility into your internet-facing assets and assess your external attack surface by connecting your Rescana data source with Trend Vision One.

The Rescana data source allows Trend Vision One to discover your internet-facing assets, allowing you to visualize your external attack surface in **Cyber Risk Exposure Management**. If you choose not to enable the Trend Micro solution for internet-facing asset discovery, you must configure Rescana as your data source.

:::warning[Important]
This is a pre-release sub-feature and is not part of the existing features of an official commercial or general release. Please review the [Pre-release sub-feature disclaimer](pre-release-sub-feature-disclaimer.md) before using the sub-feature.
:::

### Procedure {#procedure}

1.  Sign in to the Rescana console.

2.  Add the appropriate Trend Vision One regional IP addresses to the list of trusted IP addresses in the Rescana console.

3.  Create and configure a new API token for use with Trend Vision One. For information on how to create a new API token in Rescana, refer to your Rescana documentation.

4.  Copy the API token.

5.  Copy the required URL from your Rescana documentation.

6.  In the Trend Vision One console, access the Rescana data source settings through one of the following methods:

    - Go to **Cyber Risk Exposure Management → Attack Surface Discovery** and click the **Internet-Facing Assets** tab, then click **Enable Third-Party Solution - Rescana**.

    - Go to **Workflow and Automation → Third-Party Integration** and click **Rescana**.

    - Click **Data Sources** from within **Cyber Risk Exposure Management** and then click **Rescana**.

7.  Paste the previously copied URL and API token into the corresponding fields.

8.  Click **Test Connection** to ensure the provided information is valid and Trend Vision One can access the Rescana data source.

    After the connection is verified, the **Connect** button is enabled.

9.  Click **Connect**.

    After connecting Rescana, allow up to 24 hours for your discovered public domains and IP addresses to display. If you disable the Rescana data source and have never enabled the Trend Micro solution, you must enable the Trend Micro solution to continue monitoring internet-facing assets in **Cyber Risk Exposure Management**.
