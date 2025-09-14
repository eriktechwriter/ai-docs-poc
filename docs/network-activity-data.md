---
slug: trend-vision-one-network-activity-data
title: Network activity data
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
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>action</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The traffic processing action</p></td>
<td><ul>
<li><p><code>ACCEPT</code></p></li>
<li><p><code>REJECT</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
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
<li><p>Virtual Network Sensor</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>archFiles</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file information extracted from detected files</p></td>
<td><ul>
<li><p><code> - </code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>authType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The authentication method</p></td>
<td><ul>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>azId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Availability Zone ID</p></td>
<td><ul>
<li><p><code>apse2-az3</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>bytes</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The number of transmitted data bytes</p></td>
<td><ul>
<li><p><code>15044</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>clientGroup</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The client IP network group</p></td>
<td><ul>
<li><p><code>myCompany</code></p></li>
<li><p><code>myGroup</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
</ul></td>
</tr>
<tr>
<td><p>clientHost</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The client IP host name</p></td>
<td><ul>
<li><p><code>sample.test.com</code></p></li>
<li><p><code>sample.tw.test.org</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>clientIp</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The endpoint IP address</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>clientMAC</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The client MAC address</p></td>
<td><ul>
<li><p><code>00-00-00-ff-ff-ff</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>clientPort</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><ul>
<li><p>Port</p></li>
</ul></td>
<td><p>The client port number</p></td>
<td><ul>
<li><p><code>5566</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>clientProtocol</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The client protocol</p></td>
<td><ul>
<li><p><code>HTTP/1.1</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>clientTls</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The transport layer security of the client</p></td>
<td><ul>
<li><p><code>TLS 1.2</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudAccountId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The owner AWS account ID of the source network interface (account-id)</p></td>
<td><ul>
<li><p><code>123456789012</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudAppCat</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The category of the event in Cloud Reputation Service</p></td>
<td><ul>
<li><p><code>All</code></p></li>
<li><p><code>Online Service</code></p></li>
<li><p><code>Application Suite</code></p></li>
<li><p><code>Business Intelligence and Analytics</code></p></li>
<li><p><code>Cloud Computing Platform</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
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
<td><p>companyName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The company name</p></td>
<td><ul>
<li><p><code>Trend Micro</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>contentEncoding</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The content encoding of the request or the response</p></td>
<td><ul>
<li><p><code>gzip</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
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
<li><p><code>dhr\m42svc</code></p></li>
<li><p><code>altsvc</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>detectionType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The traffic detection type</p></td>
<td><ul>
<li><p><code>No matched Zero Trust Secure Access rule</code></p></li>
<li><p><code>Missing or invalid client certificate</code></p></li>
<li><p><code>Untrusted server certificate</code></p></li>
<li><p><code>Zero Trust Secure Access</code></p></li>
<li><p><code>HTTPS inspection exception</code></p></li>
<li><p><code>HTTPS inspection failure</code></p></li>
<li><p><code>HTTPS bypass at inspection failure</code></p></li>
<li><p><code>Approved URLs</code></p></li>
<li><p><code>Blocked URLs</code></p></li>
<li><p><code>Private IP address access</code></p></li>
<li><p><code>Web Reputation</code></p></li>
<li><p><code>URL Filtering</code></p></li>
<li><p><code>Restricted file type</code></p></li>
<li><p><code>Restricted MIME type</code></p></li>
<li><p><code>Restricted file extension type</code></p></li>
<li><p><code>Anti-malware scan</code></p></li>
<li><p><code>File scan exception</code></p></li>
<li><p><code>Predictive Machine Learning</code></p></li>
<li><p><code>Botnet</code></p></li>
<li><p><code>Application Control</code></p></li>
<li><p><code>Virtual Analyzer submission</code></p></li>
<li><p><code>Tenancy Restriction</code></p></li>
<li><p><code>Suspicious Object Blocked List</code></p></li>
<li><p><code>Data Loss Prevention</code></p></li>
<li><p><code>Ransomware</code></p></li>
<li><p><code>Risk Control</code></p></li>
<li><p><code>AI Service Risk Control</code></p></li>
<li><p><code>Non-compliant device</code></p></li>
<li><p><code>AI Service Access</code></p></li>
<li><p><code>AI Service Sensitive Data Prevention</code></p></li>
<li><p><code>AI Service Prompt Injection</code></p></li>
<li><p><code>AI Service Improper Answer</code></p></li>
<li><p><code>AI Service Malicious URL Answer</code></p></li>
<li><p><code>AI Service File Upload Detection</code></p></li>
<li><p><code>AI Service Rate Limiting</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>deviceGUID</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The non-endpoint object such as a network appliance</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<li><p><code>sw_us-east-1c_10-124-21-139</code></p></li>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>direction</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object transfer direction</p></td>
<td><ul>
<li><p><code>Download</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<td><p>dnsQueryType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The record type requested by the DNS protocol</p></td>
<td><ul>
<li><p><code>A</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
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
<td><p>duration</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time it took the scanner to complete the scan, in milliseconds</p></td>
<td><ul>
<li><p><code>1599465660123</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>duser</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>EmailRecipient</p></li>
</ul></td>
<td><p>The email recipient</p></td>
<td><ul>
<li><p><code>sample_email@trendmicro.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>dvc</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The IP address of the Deep Discovery Inspector or Virtual Network Sensor appliance</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<li><p>Virtual Network Sensor</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>e2eLatency</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The end-to-end traffic latency time, in milliseconds</p></td>
<td><ul>
<li><p><code>10000</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>end</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time when the last data packet was received (in Unix seconds)</p></td>
<td><ul>
<li><p><code>1616729349</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>endpointGuid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>EndpointID</p></li>
</ul></td>
<td><p>The device GUID</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
<li><p><code>DSP84573ULLJHM5GK2R7</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>endpointHostName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>EndpointName</p></li>
</ul></td>
<td><p>The host name of the device on which the event was detected</p></td>
<td><ul>
<li><p><code>my_machine</code></p></li>
<li><p><code>jeremy-mbp</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
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
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
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
<li><p><code>SWG_ACTIVITY_LOG</code></p></li>
<li><p><code>FIREWALL_ACTIVITY_LOG</code></p></li>
<li><p><code>VPC_ACTIVITY_LOG</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
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
<li><p><code>start</code></p></li>
<li><p><code>end</code></p></li>
<li><p><code>drop</code></p></li>
<li><p><code>deny</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>failedHTTPSInspection</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>HTTPS traffic inspection failure</p></td>
<td><ul>
<li><p><code>true</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileHash</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA1</p></li>
</ul></td>
<td><p>The SHA-1 of the file that violated the policy</p></td>
<td><ul>
<li><p><code>1e15bf99022a9164708cebb3eace8fd61ad45cba</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileHashSha256</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA2</p></li>
</ul></td>
<td><p>The SHA-256 of the file that violated the policy</p></td>
<td><ul>
<li><p><code>ba9edecdd09de1307714564c24409bd25508e22fe11c768053a08f173f263e93</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileName</p></li>
<li><p>FileFullPath</p></li>
</ul></td>
<td><p>The name of the file that violated the policy</p></td>
<td><ul>
<li><p><code>word.doc</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The size of the file that is violating the policy</p></td>
<td><ul>
<li><p><code>12134</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The type of file which is violating the policy</p></td>
<td><ul>
<li><p><code>Microsoft Words</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
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
<td><p>flowDirection</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network interface traffic direction</p></td>
<td><ul>
<li><p><code>ingress</code></p></li>
<li><p><code>egress</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
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
<li><p>Virtual Network Sensor</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>flowType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The type of traffic (type)</p></td>
<td><ul>
<li><p><code>IPv4</code></p></li>
<li><p><code>IPv6</code></p></li>
<li><p><code>EFA</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>ftpTrans</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The transaction information of the FTP protocol</p></td>
<td><ul>
<li><p><code> - </code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
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
<td><p>hostName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>DomainName</p></li>
<li><p>HostDomain</p></li>
</ul></td>
<td><p>The host name</p></td>
<td><ul>
<li><p><code>NJ-EFFY-ZHAO1</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>httpLocation</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>URL</p></li>
</ul></td>
<td><p>The HTTP location header</p></td>
<td><ul>
<li><p><code>www.google.com.tw</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>httpReferer</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>URL</p></li>
</ul></td>
<td><p>The HTTP referrer header</p></td>
<td><ul>
<li><p><code>www.google.com.tw</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<li><p>Virtual Network Sensor</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>httpXForwardedForGroup</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The X-Forwarded-For IP network group</p></td>
<td><ul>
<li><p><code>myCompany</code></p></li>
<li><p><code>myGroup</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
</ul></td>
</tr>
<tr>
<td><p>httpXForwardedForHost</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The X-Forwarded-For IP host name</p></td>
<td><ul>
<li><p><code>sample.test.com</code></p></li>
<li><p><code>sample.tw.test.org</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>httpXForwardedForIp</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The x-forwarded-for IP used by the network appliance</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>httpXForwardedForPort</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The patched HTTP server port when the network appliance selects an x-forwarded-for IP address to use</p></td>
<td><ul>
<li><p><code>65535</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>instanceId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The instance ID</p></td>
<td><ul>
<li><p><code>i-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>ipProto</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The protocol number (protocol)</p></td>
<td><ul>
<li><p><code>6</code></p></li>
<li><p><code>17</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>isPrivateApp</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Whether the requested application is private</p></td>
<td><ul>
<li><p><code>true</code></p></li>
<li><p><code>false</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
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
<td><p>ja3Hash</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The JA3 hash</p></td>
<td><ul>
<li><p><code>478e74fad764c966f19c5232c7cdfc5a</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>ja3sHash</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The JA3S hash</p></td>
<td><ul>
<li><p><code>6d37fb1b3306d6e9f875650d8eb74b4f</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<td><p>logStatus</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The VPC Flow Log status</p></td>
<td><ul>
<li><p><code>OK</code></p></li>
<li><p><code>NODATA</code></p></li>
<li><p><code>SKIPDATA</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>mailMsgSubject</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>EmailSubject</p></li>
</ul></td>
<td><p>The email subject</p></td>
<td><ul>
<li><p><code>test</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>malName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the detected malware</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>mimeType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The MIME type or content type of the response body</p></td>
<td><ul>
<li><p><code>text/html</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>msgId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>EmailMessageID</p></li>
</ul></td>
<td><p>The service provider message ID</p></td>
<td><ul>
<li><p><code>&lt;sample_email@trendmicro.com&gt;</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>networkInterfaceId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network interface ID (interface-id)</p></td>
<td><ul>
<li><p><code>eni-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The UUID of the Zero Trust Secure Access private access application</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectIps</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The IP address resolved by the DNS protocol</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<td><p>osName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The host operating system name</p></td>
<td><ul>
<li><p><code>Windows 10</code></p></li>
<li><p><code>macos 12.1</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>overSsl</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>SSL protocol connection</p></td>
<td><ul>
<li><p><code>YES</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>packets</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The number of transmitted data packets</p></td>
<td><ul>
<li><p><code>14</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>pktDstAddr</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The packet level destination IP</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>pktDstCloudServiceName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The subset IP address range name for cloud service destination IP (pkt-dst-aws-service)</p></td>
<td><ul>
<li><p><code>AMAZON</code></p></li>
<li><p><code>EC2</code></p></li>
<li><p><code>ROUTE53</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>pktSrcAddr</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The packet level source IP</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>pktSrcCloudServiceName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The subset IP address range name for cloud service source IP (pkt-src-aws-service)</p></td>
<td><ul>
<li><p><code>AMAZON</code></p></li>
<li><p><code>EC2</code></p></li>
<li><p><code>ROUTE53</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
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
<td><p>policyTemplate</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Data Loss Prevention template name</p></td>
<td><ul>
<li><p><code>Australia, New Zealand: Healthcare Template,Germany: Banking and Financial Information</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>principalName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>UserAccount</p></li>
</ul></td>
<td><p>The User Principal Name</p></td>
<td><ul>
<li><p><code>sample_email@trendmicro.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
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
<li><p>All products</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>profile</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the triggered Threat Protection template or Data Loss Prevention profile triggered</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>rawDataStr</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The raw data string that contains additional information</p></td>
<td><ul>
<li><p><code>[{ "oid": "1.2.3.4", "value_type": 4, "value": "MANUFACTURER:SAMPLE\ nMODEL:SAMPLE C1234", "parse": 1}]</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>regionCode</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network interface AWS Region</p></td>
<td><ul>
<li><p><code>ap-southeast-2</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>reqAppVersion</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The client application version number</p></td>
<td><ul>
<li><p><code>SSH-2.0-OPENSSH_9.0</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
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
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>reqScannedBytes</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The data volume transmitted by the client (in bytes)</p></td>
<td><ul>
<li><p><code>4655</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>request</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>URL</p></li>
</ul></td>
<td><p>The destination URL that the user is accessing</p></td>
<td><ul>
<li><p><code>https://google.com/</code></p></li>
<li><p><code>https://api/example/v1/testit</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestBase</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>DomainName</p></li>
<li><p>HostDomain</p></li>
</ul></td>
<td><p>The URL domain</p></td>
<td><ul>
<li><p><code>www.facebook.com</code></p></li>
<li><p><code>gary.webserver64.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestClientApplication</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The HTTP user agent</p></td>
<td><ul>
<li><p><code>Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestDate</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The HTTP date header</p></td>
<td><ul>
<li><p><code>Fri, 20 Oct 2017 06:02:09 GMT</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestHeaders</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>All HTTP headers without sensitive information</p></td>
<td><ul>
<li><p><code>Host: 10.10.10.10:8080 User-Agent: curl/7.78.0 Accept: */* </code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestMethod</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network protocol request method</p></td>
<td><ul>
<li><p><code>POST</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestMimeType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The type of request content</p></td>
<td><ul>
<li><p><code>application/json; charset=utf-8</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The request length</p></td>
<td><ul>
<li><p><code>1324</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>requests</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>URL</p></li>
</ul></td>
<td><p>The URLs of the request</p></td>
<td><ul>
<li><p><code>www.google.com.tw</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>resolvedUrlGroup</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The IP address FQDN network group</p></td>
<td><ul>
<li><p><code>myCompany</code></p></li>
<li><p><code>myGroup</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
</ul></td>
</tr>
<tr>
<td><p>resolvedUrlIp</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The IP address of the FQDN</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>resolvedUrlPort</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><ul>
<li><p>Port</p></li>
</ul></td>
<td><p>The HTTP server port</p></td>
<td><ul>
<li><p><code>443</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respAppVersion</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The server application version number</p></td>
<td><ul>
<li><p><code>SSH-2.0-OPENSSH_8.7</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
</ul></td>
</tr>
<tr>
<td><p>respArchFiles</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file information extracted from files detected in response direction</p></td>
<td><ul>
<li><p><code> - </code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respCode</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network protocol response code</p></td>
<td><ul>
<li><p><code>200</code></p></li>
<li><p><code>25</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
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
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>respDate</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The HTTP response date header</p></td>
<td><ul>
<li><p><code>Fri, 20 Oct 2017 06:02:09 GMT</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respFileHash</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA1</p></li>
</ul></td>
<td><p>The SHA-1 of the file detected in the response direction</p></td>
<td><ul>
<li><p><code>f17d9c55dea88f9aec8f74363f01e918cffb4142</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respFileHashSha256</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA2</p></li>
</ul></td>
<td><p>The SHA-256 of the file detected in the response direction</p></td>
<td><ul>
<li><p><code>5ad4396d67f0c9d54572f051e28e9e62f4010c269a953d25259b17ad5fab4fd5</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respFileType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file type detected in the response direction</p></td>
<td><ul>
<li><p><code>PKZIP</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respHeaders</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>All HTTP response headers without sensitive information</p></td>
<td><ul>
<li><p><code>Accept-Ranges: bytes Content-Length: 68 Content-Type: - text/plain; charset=utf-8 Last-Modified: Thu, 19 Aug 2021 06:23:54 GMT Date: Thu, 19 Aug 2021 06:24:00 GMT </code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respMethod</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The response method</p></td>
<td><ul>
<li><p><code>KRB_ERROR</code></p></li>
<li><p><code>AS_REP</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>respScannedBytes</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The data volume transmitted by the server (in bytes)</p></td>
<td><ul>
<li><p><code>6654</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>responseSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The response length</p></td>
<td><ul>
<li><p><code>1324</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>rt</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The UTC timestamp</p></td>
<td><ul>
<li><p><code>1599465660</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>ruleName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the triggered cloud access rule</p></td>
<td><ul>
<li><p><code>ETL_Access Rules_Web_Host</code></p></li>
<li><p><code>block_wiki_for_guest</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>ruleType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The rule type which is applied to the traffic</p></td>
<td><ul>
<li><p><code>access</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>ruleUuid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The risk assessment and control design that is defined by Zero Trust Secure Access risk control rules</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
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
<td><p>score</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The WRS score</p></td>
<td><ul>
<li><p><code>81</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>sender</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Zero Trust Internet Access gateway location</p></td>
<td><ul>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>serverGroup</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The server IP network group</p></td>
<td><ul>
<li><p><code>myCompany</code></p></li>
<li><p><code>myGroup</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
</ul></td>
</tr>
<tr>
<td><p>serverHost</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The server IP host name</p></td>
<td><ul>
<li><p><code>sample.test.com</code></p></li>
<li><p><code>sample.tw.test.org</code></p></li>
</ul></td>
<td><ul>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>serverIp</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The server IP address</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>serverMAC</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The server MAC address</p></td>
<td><ul>
<li><p><code>00-00-00-ff-ff-ff</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>serverPort</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><ul>
<li><p>Port</p></li>
</ul></td>
<td><p>The server port number</p></td>
<td><ul>
<li><p><code>443</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>serverProtocol</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The version of the HTTP protocol between the Service Gateway and server/website</p></td>
<td><ul>
<li><p><code>HTTP/1.1</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>serverRespTime</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the server took to respond to the request, in milliseconds</p></td>
<td><ul>
<li><p><code>1599465660123</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>serverTls</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The TLS version between the Service Gateway and server/website</p></td>
<td><ul>
<li><p><code>TLS 1.2</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
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
<td><p>sessionEnd</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The session end time, in seconds</p></td>
<td><ul>
<li><p><code>1575462989</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
<li><p>Virtual Network Sensor</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
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
<td><p>sslCertCommonName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>DomainName</p></li>
<li><p>HostDomain</p></li>
</ul></td>
<td><p>The certificate common name</p></td>
<td><ul>
<li><p><code>*.www.sample.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>sslCertFingerprint</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The certificate fingerprint</p></td>
<td><ul>
<li><p><code>3914af80223c833f26df001cbf342eff8a31aba1</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>sslCertIssuer</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The issuer of the certificate</p></td>
<td><ul>
<li><p><code>/C=US/O=DigiCert Inc/OU=www.digicert.com/CN=DigiCert SHA2 High Assurance Server CA</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>sslCertSANs</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Subject Alternative Name of the certificate</p></td>
<td><ul>
<li><p><code>*.www.sample.com</code></p></li>
<li><p><code>add.my.sample.com</code></p></li>
<li><p><code>au.sample.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>sslCertSerialNumber</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The certificate serial number</p></td>
<td><ul>
<li><p><code>0888b1ad2a593310593f47565a5a5a4a</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>sslCertValidFrom</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The certificate validity start time</p></td>
<td><ul>
<li><p><code>2014-11-21T02:43:28</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>sslCertValidUntil</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The certificate validity end time</p></td>
<td><ul>
<li><p><code>2018-11-21T02:43:28</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>start</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time when the first data packet was received (in Unix seconds)</p></td>
<td><ul>
<li><p><code>1616729292</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>status</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network analysis flow session status</p></td>
<td><ul>
<li><p><code>2</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>subLocationId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sublocation ID</p></td>
<td><ul>
<li><p><code>lz-0abcd123efg4567h</code></p></li>
<li><p><code>op-0abcd123efg4567h</code></p></li>
<li><p><code>wz-0abcd123efg4567h</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>subLocationType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sublocation type</p></td>
<td><ul>
<li><p><code>wavelength</code></p></li>
<li><p><code>outpost</code></p></li>
<li><p><code>localzone</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>subnetId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The subnet ID</p></td>
<td><ul>
<li><p><code>subnet-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>suid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>UserAccount</p></li>
</ul></td>
<td><p>The user name or IP address (IPv4)</p></td>
<td><ul>
<li><p><code>Sample User Name</code></p></li>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>suser</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>EmailSender</p></li>
</ul></td>
<td><p>The email sender</p></td>
<td><ul>
<li><p><code>sample_email@trendmicro.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<td><p>tcpFlags</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The bitmask value of the FIN/SYN/RST/SYN-ACK TCP flags</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>2</code></p></li>
<li><p><code>4</code></p></li>
<li><p><code>18</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>tlsJA3Fingerprint</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The JA3 fingerprint</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>tlsJA3SFingerprint</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The raw JA3S</p></td>
<td><ul>
<li><p><code>771,157,65281-15</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>tlsSelectedCipher</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The selected cipher of the TLS protocol</p></td>
<td><ul>
<li><p><code>c02f</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>trafficPath</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The egress traffic path number</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>2</code></p></li>
<li><p><code>8</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>trafficType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Zero Trust Internet Access gateway service mode</p></td>
<td><ul>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
<li><p><code> - </code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
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
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Palo Alto Networks Next-Generation Firewalls</p></li>
</ul></td>
</tr>
<tr>
<td><p>userAgent</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user agent or the agent through which the request was made</p></td>
<td><ul>
<li><p><code>Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0)</code></p></li>
<li><p><code>Chrome/74.0.3729.108 Safari/537.36</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Vision One Zero Trust Secure Access Private Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>userDepartment</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user department request method</p></td>
<td><ul>
<li><p><code>Sales</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
</ul></td>
</tr>
<tr>
<td><p>userDomain</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>DomainName</p></li>
<li><p>AccountDomain</p></li>
</ul></td>
<td><p>Active directory domain, domain of username for logging in TMAS adminportal adminportal</p></td>
<td><ul>
<li><p><code>trendmicro.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Vision One Zero Trust Secure Access Internet Access</p></li>
<li><p>Trend Micro Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
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
<td><p>vpcFlowLogsVersion</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The VPC Flow Logs version (version)</p></td>
<td><ul>
<li><p><code>2</code></p></li>
<li><p><code>3</code></p></li>
<li><p><code>4</code></p></li>
<li><p><code>5</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
</ul></td>
</tr>
<tr>
<td><p>vpcId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The VPC ID</p></td>
<td><ul>
<li><p><code>vpc-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR for Cloud - AWS VPC Flow Logs</p></li>
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
