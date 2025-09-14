---
slug: trend-vision-one-splunk-hec-connector-configuration
title: Splunk HEC connector configuration
---

Configure the connector to enable sharing Trend Vision One XDR data with Splunk Cloud.

The Splunk HEC connector utilizes the HTTP Event Collector to send XDR data to Splunk Cloud. The connector supports connections to multiple Splunk Cloud instances.

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration**.

2.  Click **Splunk HEC Connector (SaaS/Cloud)**.

3.  Click **+ Connect Splunk HEC Server**.

    The **Splunk HEC Server Connection** window appears.

4.  Configure the connection settings in the **Splunk HEC Server Connection** panel.

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
    <td><p>Firewall exceptions</p></td>
    <td><p>To make sure that Trend Vision One can communicate with your Splunk HEC server, add any FQDN/IP addresses displayed in the <strong>Splunk HEC Server Connection</strong> window to your firewall exceptions.</p></td>
    </tr>
    <tr>
    <td><p>Server address</p></td>
    <td><p>Specify the IP address or FQDN for your Splunk HEC server.</p></td>
    </tr>
    <tr>
    <td><p>Format</p></td>
    <td><p>Specify a format for the transferred data.</p>
    

    :::note
    
    <p>Splunk HEC Connector (SaaS/Cloud) only supports JSON format.</p>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>Protocol</p></td>
    <td><p>Select a connection protocol from the list.</p></td>
    </tr>
    <tr>
    <td><p>Port</p></td>
    <td><p>Select a port for the connection.</p>
    <p>Default port settings:</p>
    <ul>
    <li><p>HTTP: 8088</p></li>
    <li><p>HTTPS: 8088</p></li>
    </ul></td>
    </tr>
    <tr>
    <td><p>HEC token</p></td>
    <td><p>Specify the Splunk HTTP Event Collector token.</p></td>
    </tr>
    <tr>
    <td><p>Use CA certificate</p></td>
    <td><p>To use a CA certificate to connect to your Splunk HEC server, you can select <strong>Use CA certificate</strong>.</p></td>
    </tr>
    <tr>
    <td><p>Server requires client authentication</p></td>
    <td><p>To require a client authentication certificate, you can select <strong>Server requires client authentication</strong>.</p></td>
    </tr>
    </tbody>
    </table>

5.  Configure the scope of data to send to Splunk Cloud by selecting from the following:

    - Workbench alerts

    - Events

      - Observed Attack Techniques (requires specifying event severity)

      - All detections

    - Container vulnerabilities

    - Activity data (requires specifying scope)

6.  Click **Test Connection** to verify if the settings are valid.

7.  Click **Connect**.

    The Splunk HEC server appears on the **Splunk HEC Connector (SaaS/Cloud)** screen.

8.  You can repeat the previous steps to add multiple Splunk HEC servers with their own data source configurations.

9.  You can use the ![](/images/edit_icon=GUID-1F1D1164-5310-4D6D-ACD0-6049C86960AF.webp) or ![](/images/trash_icon=GUID-47cf6867-6315-438e-8670-86ff36f22a28.webp) icons to modify or delete a server from the **Splunk HEC Connector (SaaS/Cloud)** screen.
