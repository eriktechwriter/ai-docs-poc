---
slug: trend-vision-one-microsoft-power-bi-integration
title: Microsoft Power BI integration
---

Allow Power BI to access and analyze data directly from the Trend Vision One platform via APIs.

Before configuring the integration settings, make sure you have an active subscription to Microsoft Power BI and verify that Python scripting is enabled in your Power BI settings.

### Procedure {#procedure}

1.  Configure the settings in the Trend Vision One console.

    1.  Go to **Workflow and Automation → Third-Party Integration**.

    2.  In the **Integration** column, click **Microsoft Power BI**.

    3.  Specify the data that Power BI can access.

        <table>
        <colgroup>
        <col style="width: 25%" />
        <col style="width: 25%" />
        <col style="width: 50%" />
        </colgroup>
        <thead>
        <tr>
        <th><p>Category</p></th>
        <th><p>Data</p></th>
        <th><p>Description</p></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><p>Endpoint Security</p></td>
        <td><p>Endpoints</p></td>
        <td><p>A detailed list of your endpoints.</p></td>
        </tr>
        <tr>
        <td rowspan="6"><p>Cyber Risk Exposure Management</p></td>
        <td><p>Discovered devices</p></td>
        <td><p>Devices Attack Surface Discovery found in your environment.</p></td>
        </tr>
        <tr>
        <td><p>Cloud assets</p></td>
        <td><p>Cloud assets Attack Surface Discovery found in your environment.</p></td>
        </tr>
        <tr>
        <td><p>At-risk devices</p></td>
        <td><p>At-risk devices that match specified criteria.</p></td>
        </tr>
        <tr>
        <td><p>Detected CVEs in a device</p></td>
        <td><p>All the highly-exploitable CVEs found in a device.</p></td>
        </tr>
        <tr>
        <td><p>At-risk users</p></td>
        <td><p>At-risk users that match specified criteria.</p></td>
        </tr>
        <tr>
        <td><p>Account compromise indicators</p></td>
        <td><p>Events on user accounts that:</p>
        <ul>
        <li><p>Display unusual activity</p></li>
        <li><p>Have been detected on the dark web</p></li>
        <li><p>Have been targeted by malicious email campaigns</p></li>
        </ul></td>
        </tr>
        </tbody>
        </table>

    4.  Click **Download Script** to download the Python script.

    5.  Click **Generate** to create a new API authentication token and copy the **Authentication token**.

2.  In Power BI Desktop, configure and run the downloaded Python script to import data.

    When running the downloaded Python script in your Power BI Desktop, replace 'TOKEN' with the authentication token obtained in the previous step.

    For more information on running Python scripts, see [Microsoft Power BI documentation](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-python-scripts).
