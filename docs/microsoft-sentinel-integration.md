---
slug: trend-vision-one-microsoft-sentinel-integration
title: Microsoft Sentinel integration
---

Configure the integration to view Trend Vision One Workbench alerts and Observed Attack Techniques events directly in the Microsoft Sentinel platform.

The connector includes the following resources to enhance your monitoring and investigation capabilities:

- Workbook that provides insights into alert trends and impacted hosts

- Rule templates to create incidents for alerts based on severity

### Procedure {#procedure}

1.  Create a Microsoft Sentinel workspace.

    For more information, see <https://docs.microsoft.com/en-us/learn/modules/create-manage-azure-sentinel-workspaces/>.

2.  Configure and deploy the connector.

    For more information, see [Deploy the Trend Vision One connector](deploying-connector.md).

3.  View the ingested data in your Log Analytics workspace.

    For more information, see [View the ingested data in Log Analytics workspaces](ingested-log-analytics-workspaces.md).

**Related information**

- [Deploy the Trend Vision One connector](deploying-connector.md "Deploy the connector in Microsoft Sentinel using Azure Functions to enable alert data collection from Trend Vision One.")
- [View the ingested data in Log Analytics workspaces](ingested-log-analytics-workspaces.md "Verify successful data ingestion by checking your Log Analytics workspace and running queries to view alert data.")
