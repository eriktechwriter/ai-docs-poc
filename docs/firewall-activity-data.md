---
slug: trend-vision-one-firewall-activity-data
title: Firewall activity data sources
---

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 17%" />
<col style="width: 17%" />
<col style="width: 17%" />
<col style="width: 17%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th><p>Field Name</p></th>
<th><p>Type</p></th>
<th><p>General Field</p></th>
<th><p>Description</p></th>
<th><p>Example</p></th>
<th><p>Products</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>act</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The action</p></td>
<td><ul>
<li><p><code>Allow</code></p></li>
<li><p><code>Block</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>app</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network protocol</p></td>
<td><ul>
<li><p><code>HTTP</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>application</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the requested application</p></td>
<td><ul>
<li><p><code>Facebook</code></p></li>
<li><p><code>wiki</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>cnt</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The total number of logs</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>2</code></p></li>
<li><p><code>3</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>dOSName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The destination OS</p></td>
<td><ul>
<li><p><code>Windows</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>dUser1</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>UserAccount</p></li>
</ul></td>
<td><p>The latest logon user of the destination</p></td>
<td><ul>
<li><p><code>altsvc</code></p></li>
<li><p><code>dhr\m42svc</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>dhost</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>DomainName</p></li>
</ul></td>
<td><p>The destination hostname</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
<li><p><code>sw_us-east-1c_10-124-21-139</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>dmac</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The destination MAC address</p></td>
<td><ul>
<li><p><code>00-00-00-ff-ff-ff</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>dpt</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><ul>
<li><p>Port</p></li>
</ul></td>
<td><p>The service destination port of the private application server (dstport)</p></td>
<td><ul>
<li><p><code>443</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>dst</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The destination IP address (dstaddr)</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>dstLocation</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The destination country</p></td>
<td><ul>
<li><p><code>Japan</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>dstZone</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The destination zone of the Palo Alto Networks firewall session</p></td>
<td><ul>
<li><p><code>LAB-Small</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>dvchost</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network device hostname</p></td>
<td><ul>
<li><p><code>my-company-xns</code></p></li>
<li><p><code>my-ddi</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The event ID</p></td>
<td><ul>
<li><p><code>200139</code></p></li>
<li><p><code>200140</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the log event</p></td>
<td><ul>
<li><p><code>FIREWALL_ACTIVITY_LOG</code></p></li>
<li><p><code>SWG_ACTIVITY_LOG</code></p></li>
<li><p><code>VPC_ACTIVITY_LOG</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventSourceType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The event source type</p></td>
<td><ul>
<li><p><code>6 - EVENT_SOURCE_NETWORK_ACTIVITY</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventSubName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Zero Trust Secure Access - Internet Access cloud app action or the Palo Alto Networks firewall log sub-type</p></td>
<td><ul>
<li><p><code>OneDrive download file</code></p></li>
<li><p><code>deny</code></p></li>
<li><p><code>drop</code></p></li>
<li><p><code>end</code></p></li>
<li><p><code>start</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the agent or product detected the event</p></td>
<td><ul>
<li><p><code>1657135700000</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>filterRiskLevel</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The top-level risk level of the event</p></td>
<td><ul>
<li><p><code>info</code></p></li>
<li><p><code>low</code></p></li>
<li><p><code>medium</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>flowId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network analysis flow ID</p></td>
<td><ul>
<li><p><code>6837014561409730558</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>groupId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The group ID for the management scope filter</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>httpXForwardedFor</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The HTTP X-Forwarded-For header</p></td>
<td><ul>
<li><p><code>10.10.10.10, 10.10.10.11, 10.10.10.12</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>isRetroScan</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Whether the event matches the Security Analytics Engine filter</p></td>
<td><ul>
<li><p><code>true</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>logReceivedTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time when the XDR log was received</p></td>
<td><ul>
<li><p><code>1656324260000</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>originEventSourceType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source type of the original event which matches the Security Analytics Engine filter</p></td>
<td><ul>
<li><p><code>EVENT_SOURCE_NETWORK_ACTIVITY</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>originUUID</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The UUID of the original event which matches the Security Analytics Engine filter</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>pname</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The product name</p></td>
<td><ul>
<li><p><code>Secure Web Gateway</code></p></li>
<li><p><code>XDR for Cloud - AWS VPC Flow Logs</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>policyName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the triggered policy</p></td>
<td><ul>
<li><p><code>lab-to-dns</code></p></li>
<li><p><code>small-lab-http-out</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>policyTreePath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The policy tree path (endpoint only)</p></td>
<td><ul>
<li><p><code>policyname1/policyname2/policyname3</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>policyUuid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The policy UUID</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>productCode</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The internal product code</p></td>
<td><ul>
<li><p><code>sig</code></p></li>
<li><p><code>szn</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>pver</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The product version</p></td>
<td><ul>
<li><p><code>1</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>reqDataSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The data volume transmitted over the transport layer by the client (in bytes)</p></td>
<td><ul>
<li><p><code>15688</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respDataSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The data volume transmitted over the transport layer by the server (in bytes)</p></td>
<td><ul>
<li><p><code>7856</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>sOSName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source OS</p></td>
<td><ul>
<li><p><code>Windows 10</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>sUser1</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>UserAccount</p></li>
</ul></td>
<td><p>The latest sign-in user of the source</p></td>
<td><ul>
<li><p><code>000c29edef58</code></p></li>
<li><p><code>sample.com\ser-desktopcentral</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>sessionElapsedTime</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The elapsed time of the session (in seconds)</p></td>
<td><ul>
<li><p><code>33</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>sessionEndReason</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The reason why a session was terminated</p></td>
<td><ul>
<li><p><code>tcp-fin</code></p></li>
<li><p><code>tcp-rst-from-server</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>sessionStart</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The session start time (in seconds)</p></td>
<td><ul>
<li><p><code>1575462989</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>shost</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>DomainName</p></li>
</ul></td>
<td><p>The source hostname</p></td>
<td><ul>
<li><p><code>sw_us-east-1a_10-124-17-69</code></p></li>
<li><p><code>sw_us-east-1c_10-124-21-139</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>smac</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source MAC address</p></td>
<td><ul>
<li><p><code>00-00-00-ff-ff-ff</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>spt</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><ul>
<li><p>Port</p></li>
</ul></td>
<td><p>The virtual port of the source assigned to the Secure Access Module (srcport)</p></td>
<td><ul>
<li><p><code>57763</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>src</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The source IP address (srcaddr)</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcLocation</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source country</p></td>
<td><ul>
<li><p><code>Japan</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcZone</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source zone of the Palo Alto Networks firewall session</p></td>
<td><ul>
<li><p><code>LAB-Small</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>tags</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>Technique</p></li>
</ul></td>
<td><p>The detected technique ID based on the alert filter</p></td>
<td><ul>
<li><p><code>MITREV9.T1057</code></p></li>
<li><p><code>MITREV9.T1059.003</code></p></li>
<li><p><code>XSAE.F2924</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>urlCat</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The URL category</p></td>
<td><ul>
<li><p><code>Social Networking</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>uuid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The unique key of the log</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>vsysName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Palo Alto Networks virtual system of the session</p></td>
<td><ul>
<li><p><code>vsys1</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
</tbody>
</table>
