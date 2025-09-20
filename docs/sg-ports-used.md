---
slug: sg-ports-used
title: Service Gateway virtual appliance communication ports
---

Configure your firewall and connected products to allow inbound communication to the Service Gateway.

Use the following settings to configure your firewall or open the necessary ports on your virtual host to allow internal, inbound communication from connected products and third-party applications to the Service Gateway.

:::warning[Important]
These ports are strictly for internal network traffic and the Service Gateway does not require any external inbound ports to be opened.
:::

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 73%" />
</colgroup>
<thead>
<tr>
<th><p>Listening Port</p></th>
<th><p>Purpose</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>22</p></td>
<td><p>Secure Shell (SSH) communication, which allows users to remotely access the Service Gateway and execute commands</p></td>
</tr>
<tr>
<td><p>80</p></td>
<td><p>Service enabled queries for on-premises Active Directory servers, connected Trend Micro products (such as endpoint agents), Predictive Machine Learning, File Reputation Services, or Third-Party Integration</p>
<p>Port 80 is opened for HTTP traffic.</p></td>
</tr>
<tr>
<td><p>443</p></td>
<td><p>Service enabled queries for on-premises Active Directory servers, connected Trend Micro products (such as endpoint agents), Predictive Machine Learning, File Reputation Services, or Third-Party Integration</p>
<p>Port 443 is opened for HTTPS traffic.</p></td>
</tr>
<tr>
<td><p>5274</p></td>
<td><p>Web Reputation Services or Web Inspection Service queries</p>
<p>Port 5274 is opened for HTTP traffic.</p></td>
</tr>
<tr>
<td><p>5275</p></td>
<td><p>Web Reputation Services or Web Inspection Service queries</p>
<p>Port 5275 is opened for HTTPS traffic.</p></td>
</tr>
<tr>
<td><p>8080</p></td>
<td><p>Forward Proxy Service listening port for connection</p></td>
</tr>
<tr>
<td><p>8088</p></td>
<td><p>Zero Trust Secure Access On-Premises Gateway listening port for connection</p></td>
</tr>
<tr>
<td><p>8089</p></td>
<td><p>Zero Trust Secure Access On-Premises Gateway user authentication listening port for connection</p></td>
</tr>
<tr>
<td><p>1344</p></td>
<td><p>Zero Trust Secure Access On-Premises Gateway ICAP listening port for connection</p></td>
</tr>
<tr>
<td><p>11344</p></td>
<td><p>Zero Trust Secure Access On-Premises Gateway ICAPS listening port for connection</p></td>
</tr>
</tbody>
</table>

Firewall requirements for Service Gateway virtual appliance outbound traffic differ depending on your Trend Vision One environment. Refer to [Firewall exception requirements for Trend Vision One](firewall-exception-requirements-for.md) to ensure you configure the correct "Allow" rules.

:::note
Port 443 (HTTPS) is the only outbound port required for the Service Gateway exceptions listed in [Firewall exception requirements for Trend Vision One](firewall-exception-requirements-for.md).
:::
