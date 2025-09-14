---
slug: trend-vision-one-configuring-okta-tenants
title: Configuring Okta tenants
---

Set up data sharing from Okta for risk assessments and remediation actions.

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration**.

2.  In the **Integration** column, click **Okta**.

3.  Configure the connection between Trend Vision One and your Okta tenant.

    1.  Click **Add Tenant** or click the **Edit** icon (![](/images/editIcon=6e8dd682-4c7a-4aaa-8aed-6c50cfa750b2.webp)) next to a tenant name.

    2.  Configure the connection settings in the **Permission Settings** panel.

        <table>
        <colgroup>
        <col style="width: 20%" />
        <col style="width: 80%" />
        </colgroup>
        <thead>
        <tr>
        <th><p>Setting</p></th>
        <th><p>Description</p></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><p><a href="trend-vision-one-okta-url-api-token">Okta URL domain</a></p></td>
        <td><p>URL of your Okta organization</p></td>
        </tr>
        <tr>
        <td><p><a href="trend-vision-one-okta-url-api-token">Data upload permission API token</a></p></td>
        <td><p>Grants Trend Micro permission to access the following data in Okta:</p>
        <ul>
        <li><p>User sign-in attempts</p></li>
        <li><p>Users</p></li>
        <li><p>Groups</p></li>
        <li><p>System log (system events)</p></li>
        </ul></td>
        </tr>
        <tr>
        <td><p><a href="trend-vision-one-okta-url-api-token">User enforcement permission API token (optional)</a></p></td>
        <td><p>Grants Trend Micro permission to perform the following user access actions:</p>
        <ul>
        <li><p>Disable User Account</p></li>
        <li><p>Enable User Account</p></li>
        <li><p>Force Sign Out</p></li>
        <li><p>Force Password Reset</p></li>
        </ul></td>
        </tr>
        </tbody>
        </table>

    3.  Click **Save**.

4.  Repeat the previous step to add multiple Okta tenants.
