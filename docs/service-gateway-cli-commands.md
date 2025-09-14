---
slug: trend-vision-one-service-gateway-cli-commands
title: Service Gateway CLI commands
---

A list of available CLI commands for managing the Service Gateway virtual appliance.

To access the CLI, connect to VMware ESXi (either directly or through SSH) and open the Service Gateway virtual appliance. Log on to the CLI with your account credentials.

:::note
Make sure you disable the `Scroll Lock` key on your keyboard when using HyperTerminal.
:::

To view basic information of the Service Gateway, such as network settings and service status, run the `show` command. For example, use `show ipv4 address` to check the network address. For a list of available commands, type `show` and then press the `?` key.

To view a list of tasks you can perform and enable administrative commands, run the `enable` command. Enabling administrative commands changes the command prompt from \> to \#. The following tables list out the administrative commands you can use to manage the Service Gateway virtual appliance.

- Basic Commands

- Configure Commands for Multiple Network Interfaces

**Basic Commands**

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 35%" />
<col style="width: 38%" />
</colgroup>
<thead>
<tr>
<th><p>Command</p></th>
<th><p>Syntax</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><code>configure endpoint</code></p></td>
<td><p><code>configure endpoint &lt;hostname&gt;</code></p></td>
<td><p>Configure the endpoint name</p>
<p><code>&lt;hostname&gt;</code>: Endpoint name or FQDN</p></td>
</tr>
<tr>
<td><p><code>configure time</code></p></td>
<td><p><code>configure time &lt;HH:MI:SS&gt;</code></p></td>
<td><p>Configure the time for the Service Gateway virtual appliance</p></td>
</tr>
<tr>
<td><p><code>configure data purge</code></p></td>
<td><p><code>configure data purge</code></p></td>
<td><p>Delete unused service files and service logs to free up space on the data partition.</p></td>
</tr>
<tr>
<td><p><code>configure image delete</code></p></td>
<td><p><code>configure image delete</code></p></td>
<td><p>Delete inactive service images</p>
<p>The service partition typically stores up to three versions of images for each installed service. Executing this command deletes the older, inactive images to free up space on the service partition.</p></td>
</tr>
<tr>
<td><p><code>configure network</code></p></td>
<td><p><code>configure network primary ipv4.static &lt;interface&gt; &lt;ip_cidr&gt; &lt;gateway&gt; &lt;dns1&gt; [dns2] [cni]</code></p></td>
<td><p>Configure static IPv4 network settings for the primary network interface</p>
<p><code>&lt;interface&gt;</code>: Name of the network interface (for example, eth0)</p>
<p><code>&lt;ip_cidr&gt;</code>: IPv4 address of the network interface in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: Gateway router address</p>
<p><code>&lt;dns1&gt;</code>: Primary DNS server address</p>
<p><code>[dns2]</code>: Secondary DNS server address</p>
<p><code>[cni]</code>: Internal network address pool (IP address ending in .0.0)</p></td>
</tr>
<tr>
<td><p><code>configure ntp</code></p></td>
<td><p><code>configure ntp &lt;ntp_addr1&gt; [ntp_addr2] [ntp_addr3] [ntp_addr4] [ntp_addr5]</code></p></td>
<td><p>Configure NTP servers</p>
<p>Up to 5 NTP servers supported</p>
<p><code>&lt;ntp_addr1&gt;</code>: FQDN or IPv4 address of the first NTP server</p>
<p><code>&lt;ntp_addr2&gt;</code>: FQDN or IPv4 address of the second NTP server</p>
<p><code>&lt;ntp_addr3&gt;</code>: FQDN or IPv4 address of the third NTP server</p>
<p><code>&lt;ntp_addr4&gt;</code>: FQDN or IPv4 address of the fourth NTP server</p>
<p><code>&lt;ntp_addr5&gt;</code>: FQDN or IPv4 address of the fifth NTP server</p></td>
</tr>
<tr>
<td><p><code>configure password </code></p></td>
<td><p><code>configure password</code></p></td>
<td><p>Configure the account password</p></td>
</tr>
<tr>
<td><p><code>configure port list</code></p></td>
<td><p><code>configure port list</code></p></td>
<td><p>List the ports used by the Service Gateway virtual appliance</p></td>
</tr>
<tr>
<td><p><code>configure port enable</code></p></td>
<td><p><code>configure port enable &lt;port&gt;</code></p></td>
<td><p>Enable a port used by the Service Gateway virtual appliance</p>
<p><code>&lt;port&gt;</code>: Port number. Example: 80</p></td>
</tr>
<tr>
<td><p><code>configure port disable</code></p></td>
<td><p><code>configure port disable &lt;port&gt;</code></p></td>
<td><p>Disable a port used by the Service Gateway virtual appliance</p>
<p><code>&lt;port&gt;</code>: Port number. Example: 80</p></td>
</tr>
<tr>
<td rowspan="2"><p><code>configure proxy</code></p></td>
<td><p><code>configure proxy delete</code></p></td>
<td><p>Delete proxy settings</p></td>
</tr>
<tr>
<td><p><code>configure proxy set http &lt;addr&gt;</code></p></td>
<td><p>Configure the proxy server for the Service Gateway virtual appliance</p>
<p><code>&lt;addr&gt;</code>: Specify proxy settings as follows:</p>
<ul>
<li><p><code>&lt;ADDRESS&gt;:&lt;PORT&gt;</code>: IP address and port of proxy (no authentication required)</p></li>
<li><p><code>&lt;USER&gt;:&lt;PASSWORD&gt;@&lt;ADDRESS&gt;:&lt;PORT&gt;</code>: Account credentials with IP address and port of proxy (BASIC authentication required)</p></li>
</ul></td>
</tr>
<tr>
<td rowspan="4"><p><code>configure storage</code></p></td>
<td><p><code>configure storage add</code></p></td>
<td><p>Add additional storage to the Data and Service partitions of the virtual appliance</p></td>
</tr>
<tr>
<td><p><code>configure storage extend data [size]</code></p></td>
<td><p>Extend data file system storage</p>
<p><code>[size]</code>: Storage size for extension in GB. If not specified, all free space available on device is used.</p></td>
</tr>
<tr>
<td><p><code>configure storage extend image [size]</code></p></td>
<td><p>Extend image file system storage</p>
<p><code>[size]</code>: Storage size for extension in GB. If not specified, all free space available on device is used.</p></td>
</tr>
<tr>
<td><p><code>configure storage status</code></p></td>
<td><p>Show storage status</p></td>
</tr>
<tr>
<td rowspan="8"><p><code>configure verify</code></p></td>
<td><p><code>configure verify cli</code></p></td>
<td><p>Verify the command line status of the Service Gateway virtual appliance</p></td>
</tr>
<tr>
<td><p><code>configure verify dns</code></p></td>
<td><p>Verify DNS server configuration</p>
<p><code>[domain]</code>: Domain used to verify DNS server (default: www.google.com)</p></td>
</tr>
<tr>
<td><p><code>configure verify images</code></p></td>
<td><p>Verify the Service Gateway virtual appliance images</p></td>
</tr>
<tr>
<td><p><code>configure verify iot</code></p></td>
<td><p>Verify the AWS server IOT settings</p></td>
</tr>
<tr>
<td><p><code>configure verify ntp</code></p></td>
<td><p>Verify NTP server settings</p></td>
</tr>
<tr>
<td><p><code>configure verify os</code></p></td>
<td><p>Verify the operating system status of the Service Gateway virtual appliance</p></td>
</tr>
<tr>
<td><p><code>configure verify plat</code></p></td>
<td><p>Verify the platform status of the Service Gateway virtual appliance</p></td>
</tr>
<tr>
<td><p><code>configure verify curl &lt;URL&gt;</code></p></td>
<td><p>Verify the HTTP request status of the Service Gateway virtual appliance</p></td>
</tr>
<tr>
<td><p><code>configure swglb set</code></p></td>
<td><p><code>configure swglb set &lt;port number&gt;</code></p></td>
<td><p>Redirect 80/443 traffic to the specified port</p>


:::warning[Important]

<p>This command applies exclusively to the Internet Access load balancing settings. Ensure that only Internet Access services are enabled when using this command.</p>


:::

</td>
</tr>
<tr>
<td><p><code>configure swglb delete</code></p></td>
<td><p><code>configure swglb delete</code></p></td>
<td><p>Remove traffic redirection, allowing 80/443 traffic to be sent to the original port</p></td>
</tr>
<tr>
<td><p><code>connect</code></p></td>
<td><p><code>connect</code></p></td>
<td><p>Test connection to Service Gateway Management</p></td>
</tr>
<tr>
<td><p><code>exit</code></p></td>
<td><p><code>exit</code></p></td>
<td><p>Exit the CLI</p></td>
</tr>
<tr>
<td><p><code>help</code></p></td>
<td><p><code>help</code></p></td>
<td><p>Display the CLI syntax</p></td>
</tr>
<tr>
<td><p><code>history</code></p></td>
<td><p><code>history [limit]</code></p></td>
<td><p>Display the session's command history</p>
<p><code>[limit]</code>: The number of CLI commands to display</p></td>
</tr>
<tr>
<td><p><code>log collect</code></p></td>
<td><p><code>log collect</code></p></td>
<td><p>Collect Service Gateway debugging data for troubleshooting</p></td>
</tr>
<tr>
<td><p><code>logout</code></p></td>
<td><p><code>logout</code></p></td>
<td><p>Sign out of the CLI</p></td>
</tr>
<tr>
<td><p><code>ping</code></p></td>
<td><p><code>ping &lt;address&gt;</code></p></td>
<td><p>Check the connection to a specific address</p></td>
</tr>
<tr>
<td><p><code>reboot</code></p></td>
<td><p><code>reboot [time]</code></p></td>
<td><p>Restart the Service Gateway after a specified delay or immediately</p>
<p><code>[time]</code>: Delay in minutes</p></td>
</tr>
<tr>
<td><p><code>register</code></p></td>
<td><p><code>register &lt;regiatration_token&gt;</code></p></td>
<td><p>Register the Service Gateway to Trend Vision One</p></td>
</tr>
<tr>
<td><p><code>shutdown</code></p></td>
<td><p><code>shutdown [time]</code></p></td>
<td><p>Shut down the Service Gateway after a specified delay or immediately</p>
<p><code>[time]</code>: Delay in minutes</p></td>
</tr>
<tr>
<td><p><code>rollback</code></p></td>
<td><p><code>rollback</code></p></td>
<td><p>Roll back the Service Gateway to the last version</p></td>
</tr>
</tbody>
</table>

**Configure Commands for Multiple Network Interfaces**

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 35%" />
<col style="width: 38%" />
</colgroup>
<thead>
<tr>
<th>Command</th>
<th>Syntax</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="7"><p><code>configure network</code></p></td>
<td><p><code>configure network additional ipv4.delete</code></p></td>
<td><p>Delete IPv4 network settings for the additional network interface</p></td>
</tr>
<tr>
<td><p><code>configure network additional ipv4.static &lt;interface&gt; &lt;ip_cidr&gt; &lt;gateway&gt; &lt;dns1&gt; [dns2]</code></p></td>
<td><p>Configure static IPv4 network settings for the additional network interface</p>
<p><code>&lt;interface&gt;</code>: Name of the network interface (for example, eth1)</p>
<p><code>&lt;ip_cidr&gt;</code>: IPv4 address of the network interface in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: Gateway router address</p>
<p><code>&lt;dns1&gt;</code>: Primary DNS server address</p>
<p><code>[dns2]</code>: Secondary DNS server address</p></td>
</tr>
<tr>
<td><p><code>configure network primary ipv4.static &lt;interface&gt; &lt;ip_cidr&gt; &lt;gateway&gt; &lt;dns1&gt; [dns2] [cni]</code></p></td>
<td><p>Configure static IPv4 network settings for the primary network interface</p>
<p><code>&lt;interface&gt;</code>: Name of the network interface (for example, eth0)</p>
<p><code>&lt;ip_cidr&gt;</code>: IPv4 address of the network interface in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: Gateway router address</p>
<p><code>&lt;dns1&gt;</code>: Primary DNS server address</p>
<p><code>[dns2]</code>: Secondary DNS server address</p>
<p><code>[cni]</code>: Internal network address pool (IP address ending in .0.0)</p></td>
</tr>
<tr>
<td><p><code>configure network additional ipv6.delete</code></p></td>
<td><p>Delete IPv6 network settings for the additional network interface</p></td>
</tr>
<tr>
<td><p><code>configure network additional ipv6.static &lt;ipl&gt; &lt;gateway&gt; &lt;dns1&gt; [dns2]</code></p></td>
<td><p>Configure static IPv6 network settings for the additional network interface</p>
<p><code>&lt;interface&gt;</code>: Name of the network interface (for example, eth1)</p>
<p><code>&lt;ipl&gt;</code>: IPv6 address of the network interface in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: Gateway router address</p>
<p><code>&lt;dns1&gt;</code>: Primary DNS server address</p>
<p><code>[dns2]</code>: Secondary DNS server address</p></td>
</tr>
<tr>
<td><p><code>configure network primary ipv6.delete</code></p></td>
<td><p>Delete IPv6 network settings for the primary network interface</p></td>
</tr>
<tr>
<td><p><code>configure network primary ipv6.static &lt;ipl&gt; &lt;gateway&gt; &lt;dns1&gt; [dns2]</code></p></td>
<td><p>Configure static IPv6 network settings for the primary network interface</p>
<p><code>&lt;interface&gt;</code>: Name of the network interface (for example, eth1)</p>
<p><code>&lt;ipl&gt;</code>: IPv6 address of the network interface in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: Gateway router address</p>
<p><code>&lt;dns1&gt;</code>: Primary DNS server address</p>
<p><code>[dns2]</code>: Secondary DNS server address</p></td>
</tr>
<tr>
<td rowspan="12"><p><code>configure route</code></p></td>
<td><p><code>configure route additional ipv4.add &lt;destination&gt; &lt;gateway&gt;</code></p></td>
<td><p>Add a new IPv4 route for the additional network interface</p>
<p><code>&lt;destination&gt;</code>: Destination IPv4 addresses in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: IPv4 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route additional ipv4.delete &lt;destination&gt; &lt;gateway&gt;</code></p></td>
<td><p>Delete an IPv4 route of the additional network interface</p>
<p><code>&lt;destination&gt;</code>: Destination IPv4 addresses in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: IPv4 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route primary ipv4.add &lt;destination&gt; &lt;gateway&gt;</code></p></td>
<td><p>Add a new IPv4 route for the primary network interface</p>
<p><code>&lt;destination&gt;</code>: Destination IPv4 addresses in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: IPv4 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route primary ipv4.delete &lt;destination&gt; &lt;gateway&gt;</code></p></td>
<td><p>Delete an IPv4 route of the primary network interface</p>
<p><code>&lt;destination&gt;</code>: Destination IPv4 addresses in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: IPv4 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route ipv4.default additional &lt;gateway&gt;</code></p></td>
<td><p>Configure the additional network interface as the default IPv4 route for the Service Gateway virtual appliance</p>
<p><code>&lt;gateway&gt;</code>: IPv4 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route ipv4.default primary &lt;gateway&gt;</code></p></td>
<td><p>Configure the primary network interface as the default IPv4 route for the Service Gateway virtual appliance</p>
<p><code>&lt;gateway&gt;</code>: IPv4 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route additional ipv6.add &lt;destination&gt; &lt;gateway&gt;</code></p></td>
<td><p>Add a new IPv6 route for the additional network interface</p>
<p><code>&lt;destination&gt;</code>: Destination IPv4 addresses in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: IPv6 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route additional ipv6.delete &lt;destination&gt; &lt;gateway&gt;</code></p></td>
<td><p>Delete an IPv6 route of the additional network interface</p>
<p><code>&lt;destination&gt;</code>: Destination IPv4 addresses in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: IPv6 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route primary ipv6.add &lt;destination&gt; &lt;gateway&gt;</code></p></td>
<td><p>Add a new IPv6 route for the primary network interface</p>
<p><code>&lt;destination&gt;</code>: Destination IPv6 addresses in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: IPv6 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route primary ipv6.delete &lt;destination&gt; &lt;gateway&gt;</code></p></td>
<td><p>Delete an IPv6 route of the primary network interface</p>
<p><code>&lt;destination&gt;</code>: Destination IPv6 addresses in CIDR notation</p>
<p><code>&lt;gateway&gt;</code>: IPv6 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route ipv6.default additional &lt;gateway&gt;</code></p></td>
<td><p>Configure the additional network interface as the default IPv6 route for the Service Gateway virtual appliance</p>
<p><code>&lt;gateway&gt;</code>: IPv6 address of the gateway</p></td>
</tr>
<tr>
<td><p><code>configure route ipv6.default primary &lt;gateway&gt;</code></p></td>
<td><p>Configure the primary network interface as the default IPv6 route for the Service Gateway virtual appliance</p>
<p><code>&lt;gateway&gt;</code>: IPv6 address of the gateway</p></td>
</tr>
</tbody>
</table>
