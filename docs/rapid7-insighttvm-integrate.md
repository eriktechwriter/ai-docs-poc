---
slug: trend-vision-one-rapid7-insighttvm-integrate
title: Rapid7 - InsightVM integration
---

Gain insight into CVEs in your environment by connecting your Rapid7 - InsightVM data source with Trend Vision One.

Connect your Rapid7 Insight account to Trend Vision One to gain access to device information and CVE detections in order to enhance risk analyses in **Cyber Risk Exposure Management**.

### Procedure {#procedure}

1.  Sign in to the Insight platform using an account with the user role of Platform Admin.

2.  Go to the **API Keys** page and click **New User Key**.

    The **Generate New User Key** screen appears.

3.  Select an organization and provide a name for the new key.

4.  Click **Generate**.

    The generated key displays on a new screen.

5.  Copy the generated API key.

6.  Click **Create User**.

7.  Find the newly created user in **User Management** and click **Generate Token** under the **Status** column.

8.  Copy the generated API token.

9.  In your Insight documentation, find and copy the required base API URL with the appropriate region code for your region.

10. In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration** and click **Rapid7 - InsightVM**.

    You are directed to the Rapid7 - InsightVM data source drawer in **Cyber Risk Exposure Management → Data Sources**.

11. Turn on **Data upload permission**.

12. Paste your Insight API URL in the **Insight Platform URL** field.

13. Paste your Insight API key in the **Insight Platform API key** field.

14. Click **Save**.
