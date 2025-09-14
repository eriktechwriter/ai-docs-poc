---
slug: trend-vision-one-config-service-gateway-settings
title: Configuring Service Gateway settings
---

Configure update settings and manage the Service Gateway certificate.

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Service Gateway Management**.

2.  Find the Service Gateway you want to configure and click the **Configure settings** icon (![](/images/configure=GUID-657DB993-ADC7-4DEC-8C62-C8739D74760E.webp)).

    The **Service Gateway Settings** screen appears.

3.  On the **General** tab, configure the following settings based on your network requirements.

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
    <td><p>Service Gateway name</p></td>
    <td><p>Modify the Service Gateway hostname or FQDN</p>
    <p>Click the edit icon (<img src="./images/Edit=GUID-fbd72244-55f4-4c70-a5b0-e5caf4f0cc8e.webp" />) to modify the Service Gateway hostname or FQDN. The updated name appears on the Service Gateway Management screen as part of the Identifier.</p></td>
    </tr>
    <tr>
    <td><p>Automatic update</p></td>
    <td><p>Set the pattern and preferred time to update the Service Gateway</p>
    <p>Select one of the following update patterns:</p>
    <ul>
    <li><p>Update to the latest version</p></li>
    <li><p>Update to the latest version at least X days after its release:</p></li>
    </ul>
    

    :::note
    
    <p>The Service Gateway begins the update process at the next occurrence of the preferred update time, depending on your selected update pattern.</p>
    <p>If you select <strong>Update to the latest version</strong>, the Service Gateway begins the update process at the next occurrence of the preferred update time following the version release date. To update as soon as possible, select every day when specifying the preferred update time.</p>
    <p>If you select <strong>Update to the latest version at least X days after its release:</strong>, once the latest version is released and the specified number of days have passed, the Service Gateway updates to that version at the next occurrence of the preferred update time.</p>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>Direct Server Return</p></td>
    <td><p>Direct Server Return (DSR) allows data traveling from the Service Gateway to endpoints to bypass the network load balancer, which can improve network performance.</p></td>
    </tr>
    <tr>
    <td><p>Import certificate</p></td>
    <td><p>Upload a certificate to the Service Gateway</p>
    

    :::note
    
    <ul>
    <li><p>The certificate must contain both <code>RSA PRIVATE KEY</code> and <code>CERTIFICATE</code>.</p></li>
    <li><p>Only PKCS#1 certificates are supported.</p></li>
    </ul>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>Configure Cloud Service Extension</p></td>
    <td><p>Turn the cloud service extension feature on or off</p>
    <p>The cloud service extension facilitates routing traffic to Trend Micro services, reducing the number of firewall exceptions and configuration requirements.</p>
    

    :::note
    
    <p>This feature is not available in all regions.</p>
    <p>The cloud service extension cannot be enabled on Service Gateway appliances with the Zero Trust Secure Access - Internet Access On-premises Gateway service enabled. The cloud service extension might interfere with the normal operations of the on-premises gateway.</p>
    

    :::

    </td>
    </tr>
    </tbody>
    </table>

4.  On the **SNMP** tab, configure the following Simple Network Management Protocol (SNMP) settings.

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
    <td><p>Manager requests</p></td>
    <td><p>Enable manager devices to retrieve metrics from Service Gateway virtual appliances.</p>
    <ol>
    <li><p>Use the toggle to enable or disable <strong>Manager requests</strong>.</p></li>
    <li><p>In the <strong>Device location</strong> field, you can specify the IP address of the managed device to serve as the value of the SNMP object <code>system.sysLocation.0</code>.</p>
    <p>If you do not enter a value, the device location defaults to the IP address and host name of the Service Gateway appliance.</p></li>
    <li><p>In the <strong>Administrator contact</strong> field, you can specify the email address of the manager device administrator to serve as the value of the SNMP object <code>system.sysContact.0</code>.</p></li>
    <li><p>Select a <strong>Security model</strong> and create the required credentials for the selected model.</p>
    <ul>
    <li><p><strong>No authentication or privacy</strong>: Type a username.</p></li>
    <li><p><strong>Authenticated</strong>: Type a username and a password.</p></li>
    <li><p><strong>Authenticated with privacy</strong>: Type a username, a password, and a privacy passphrase.</p></li>
    </ul>
    

    :::note
    
    <p>Service Gateway supports the following object IDs in manager requests:</p>
    <ul>
    <li><p>HOST-RESOURCES-MIB (RFC 1514): <code>1.3.6.1.2.1.1</code></p></li>
    <li><p>HOST-RESOURCES-MIB (RFC 1514): <code>1.3.6.1.2.1.25</code></p></li>
    <li><p>UCD-SNMP-MIB: <code>1.3.6.1.4.1.2021</code></p></li>
    </ul>
    <p>Service Gateway uses SHA-1 authentication for passwords and AES-128 encryption for privacy passphrases for manager requests.</p>
    

    :::

    </li>
    </ol></td>
    </tr>
    <tr>
    <td><p>Trap messages</p></td>
    <td><p>Enable Service Gateway appliances to send trap messages to notify manager devices when certain conditions occur</p>
    <ol>
    <li><p>Use the toggle to enable or disable <strong>Trap messages</strong>.</p></li>
    <li><p>Specify the <strong>Server address</strong> of your configured trap receiver in IPv4 or FQDN format.</p></li>
    <li><p>Specify a <strong>Port</strong> between 0 and 65535 for the trap receiver.</p></li>
    <li><p>Select a <strong>Security model</strong> and create the required credentials for the selected model.</p>
    <ul>
    <li><p><strong>No authentication or privacy</strong>: Type a username.</p></li>
    <li><p><strong>Authenticated</strong>: Type a username and a password.</p></li>
    <li><p><strong>Authenticated with privacy</strong>: Type a username, a password, and a privacy passphrase.</p></li>
    </ul>
    

    :::note
    
    <p>Service Gateway sends trap messages with SHA authentication for passwords and AES encryption for privacy passphrases.</p>
    <p>Make sure that the username created for <strong>Manager requests</strong> is distinct from the username created for <strong>Trap messages</strong>.</p>
    

    :::

    </li>
    <li><p>In your configured SNMP trap receiver, specify the last part of the Service Gateway appliance ID as the value of the SNMP object <code>engineID</code>.</p>
    <p>For example, for a Service Gateway with the appliance ID of a288c507-dfbf-4b53-a05a-5cb7895218de, the SNMP <code>engineID</code> is 5cb7895218de.</p></li>
    </ol>
    <p>For more information, see <a href="trend-vision-one-snmp-defined-trap-messages">SNMP trap messages defined for Service Gateway</a>.</p></td>
    </tr>
    </tbody>
    </table>

5.  Click **Save**.

**Related information**

- [SNMP trap messages defined for Service Gateway](snmp-defined-trap-messages.md "View a list of trap messages defined for Service Gateway.")
