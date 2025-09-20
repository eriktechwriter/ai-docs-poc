---
slug: syslog-connector-saas
title: Syslog connector (SaaS/cloud) configuration
---

Share XDR data with your syslog server by configuring the generic syslog connector.

The syslog connector is a generic SIEM connector, which allows you to send XDR data to your SaaS or cloud-based syslog server. The connector supports multiple syslog server connections.

For syslog CEF mapping, see [Syslog content mapping - CEF](syslog-content-mapping-cef.md).

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><p>Category</p></th>
<th><p>Vendor</p></th>
<th><p>Associated Apps</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>SIEM</p></td>
<td><p>Not applicable</p></td>
<td><ul>
<li><p>Workbench</p></li>
<li><p>Observed Attack Techniques</p></li>
<li><p>Audit Logs</p></li>
</ul></td>
</tr>
</tbody>
</table>

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration**.

2.  Click **Syslog Connector (SaaS/Cloud)**.

3.  In the **Syslog Connector (SaaS/Cloud)** screen, enable **Syslog Connector (SaaS/Cloud)** .

4.  Select the data to send to your syslog server(s).

    - **Workbench alerts**

    - **Observed Attack Techniques**

      If you select this data type, you can select one or more of the following event severity levels:

      - **Critical**

      - **High**

      - **Medium**

    - **Audit logs**

      If you select this data type, you can select one or more of the following log types:

      - **Account**

      - **System**

    :::note
    You must select at least one data type.
    :::

5.  Click **Connect Syslog Server**.

6.  In the **Syslog Server Connection** panel, configure the following settings.

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 75%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Setting</p></th>
    <th><p>Description</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Server address</p></td>
    <td><p>Specify the IP address or FQDN for your Syslog server.</p></td>
    </tr>
    <tr>
    <td><p>Syslog format</p></td>
    <td><p>Select the syslog format.</p>
    

    :::note
    
    <p>Syslog Connector (SaaS/Cloud) currently only supports Common Event Format (CEF).</p>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>Protocol</p></td>
    <td><p>Select the connection protocol.</p></td>
    </tr>
    <tr>
    <td><p>Port</p></td>
    <td><p>Specify the port.</p>
    <p>Default port settings:</p>
    <ul>
    <li><p>SSL/TLS: 6514</p></li>
    <li><p>TCP: 601</p></li>
    </ul></td>
    </tr>
    </tbody>
    </table>

7.  (Optional) Select **Use CA certificate** to upload a CA certificate to use when connecting to the syslog server.

8.  (Optional) If your syslog server requires authenticated connections, select **Server requires client authentication** to upload the client certificate.

9.  Click **Test Connection** to perform a connection test and verify settings.

10. Click **Connect** to test and save your connection settings.

11. In the **Syslog Connector (SaaS/Cloud)** screen, click **Save**.
