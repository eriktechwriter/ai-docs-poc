---
slug: trend-vision-one-third-party-logs-mapping
title: Third-Party Logs
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
<li><p><code>deny</code></p></li>
<li><p><code>close</code></p></li>
<li><p><code>client-rst</code></p></li>
<li><p><code>permit</code></p></li>
<li><p><code>log-only</code></p></li>
<li><p><code>Accept</code></p></li>
<li><p><code>Drop</code></p></li>
<li><p><code>Key Install</code></p></li>
<li><p><code>Detect (Anti Malware)</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>actResult</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The result of an action</p></td>
<td><ul>
<li><p><code>failed</code></p></li>
<li><p><code>success</code></p></li>
<li><p><code>start</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>additionalEventData</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The additional event information that was not part of the request or response</p></td>
<td><ul>
<li><p><code>{"SignatureVersion":"SigV4","CipherSuite":"ECDHE-RSA-AES128-GCM-SHA256"}</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>apiVersion</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The API version associated with the AwsApiCall eventType value</p></td>
<td><ul>
<li><p><code>2012-08-10</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>DNS Response</code></p></li>
<li><p><code>TCP</code></p></li>
<li><p><code>HTTP</code></p></li>
<li><p><code>tcp</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>Microsoft Account</code></p></li>
<li><p><code>Microsoft Services</code></p></li>
<li><p><code>Office Online</code></p></li>
<li><p><code>update.googleapis.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>awsRegion</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The AWS region the request was made to</p></td>
<td><ul>
<li><p><code>us-east-1</code></p></li>
<li><p><code>us-east-2</code></p></li>
<li><p><code>us-west-1</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>category</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The event category</p></td>
<td><ul>
<li><p><code>Exploits</code></p></li>
<li><p><code>Reconnaissance</code></p></li>
<li><p><code>Vulnerabilities</code></p></li>
<li><p><code>Security Policy</code></p></li>
<li><p><code>utm:ips</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudTrailEventId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The GUID generated by AWS CloudTrail to identify events</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<td><p>The latest sign-in user of the destination</p></td>
<td><ul>
<li><p><code>N/A</code></p></li>
<li><p><code>empty</code></p></li>
<li><p><code>bob</code></p></li>
<li><p><code>sample_email@trendmicro.com</code></p></li>
<li><p><code>sip:service@10.10.10.10:5060</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>description</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The additional event details</p></td>
<td><ul>
<li><p><code>IPsec tunnel statistics</code></p></li>
<li><p><code> - </code></p></li>
<li><p><code>File is infected.</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>www.sample.org</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>direction</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The direction</p></td>
<td><ul>
<li><p><code>Incoming</code></p></li>
<li><p><code>Outgoing</code></p></li>
<li><p><code>Unknown</code></p></li>
<li><p><code>client-to-server</code></p></li>
<li><p><code>server-to-client</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>00:00:00:ff:ff:ff</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<td><p>The destination port</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>445</code></p></li>
<li><p><code>80</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<td><p>The destination IP address</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>dstZone</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The destination zone of the session</p></td>
<td><ul>
<li><p><code>wan</code></p></li>
<li><p><code>dmz</code></p></li>
<li><p><code>undefined</code></p></li>
<li><p><code>Internal</code></p></li>
<li><p><code>nat-trust</code></p></li>
<li><p><code>nat-untrust</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>bob</code></p></li>
<li><p><code>N/A</code></p></li>
<li><p><code>empty</code></p></li>
<li><p><code>sample_email@trendmicro.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>dvc</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The device IP</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>undefined</p></li>
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
<li><p><code>VLAB-PA440</code></p></li>
<li><p><code>FG-50E</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>errorCode</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The AWS service error code</p></td>
<td><ul>
<li><p><code>ThrottlingException</code></p></li>
<li><p><code>InvalidParameterValueException</code></p></li>
<li><p><code>NoSuchLifecycleConfiguration</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>errorMessage</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The error description</p></td>
<td><ul>
<li><p><code>The specified bucket does not have a website configuration</code></p></li>
<li><p><code>An unknown error occurred</code></p></li>
<li><p><code>The lifecycle configuration does not exist</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventCase</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The AWS service that the request was made to</p></td>
<td><ul>
<li><p><code>workspaces.amazonaws.com</code></p></li>
<li><p><code>sts.amazonaws.com</code></p></li>
<li><p><code>kms.amazonaws.com</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventCategory</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The event category used in LookupEvents calls</p></td>
<td><ul>
<li><p><code>Management</code></p></li>
<li><p><code>Data</code></p></li>
<li><p><code>Insight</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>200138</code></p></li>
<li><p><code>100119</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The log type</p></td>
<td><ul>
<li><p><code>FIREWALL_ACTIVITY_LOG</code></p></li>
<li><p><code>TRAFFIC</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventSource</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The AWS service the request was made to</p></td>
<td><ul>
<li><p><code>s3.amazonaws.com</code></p></li>
<li><p><code>dynamodb.amazonaws.com</code></p></li>
<li><p><code>xray.amazonaws.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>8 - EVENT_SOURCE_CONTAINER_ACTIVITY</code></p></li>
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
<td><p>The event type sub-name</p></td>
<td><ul>
<li><p><code>start</code></p></li>
<li><p><code>end</code></p></li>
<li><p><code>drop</code></p></li>
<li><p><code>deny</code></p></li>
<li><p><code>url</code></p></li>
<li><p><code>ml-virus</code></p></li>
<li><p><code>file</code></p></li>
<li><p><code>vulnerability</code></p></li>
<li><p><code>wildfire</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>1656324260000</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventTimeDT</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td></td>
<td><ul>
<li><p><code>2023-12-21T02:36:12.817Z</code></p></li>
</ul></td>
<td><ul>
<li><p>Search Data Lake</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The type of event that generated the event record</p></td>
<td><ul>
<li><p><code>AwsApiCall</code></p></li>
<li><p><code>AwsServiceEvent</code></p></li>
<li><p><code>AwsConsoleAction</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventVersion</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The log event format version</p></td>
<td><ul>
<li><p><code>1.08</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<td><p>The SHA-1 of the file</p></td>
<td><ul>
<li><p><code>DA39A3EE5E6B4B0D3255BFEF95601890AFD80709</code></p></li>
<li><p><code>89CE26EAD139D52B8A6B61BFFC6AF89AF246580F</code></p></li>
<li><p><code>3AD1F4E7CAA11E5199EE80B8983677ADDD065450</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileHashMd5</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileMD5</p></li>
</ul></td>
<td><p>The MD5 of the file</p></td>
<td><ul>
<li><p><code>d5120786925038601a77c2e1eB9a3a0a</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<td><p>The SHA-256 of the file</p></td>
<td><ul>
<li><p><code>6A6EB2D717CEA041B4444193B45EDFB6CA1287518203B7230B3C4B8FFB031EAB</code></p></li>
<li><p><code>BFF703FF836196644586014DA13A097C2EE9A08E4D596DFB7C8E0F685FE01294</code></p></li>
<li><p><code>12327F460AC9CBBC34D39EB3CF89C7FECCA37F08773A04566840F73F6ECC4104</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileName</p></li>
</ul></td>
<td><p>The file name</p></td>
<td><ul>
<li><p><code>csm-eicar.txt</code></p></li>
<li><p><code>csm-eicar.gif</code></p></li>
<li><p><code>eicar.com.txt</code></p></li>
<li><p><code>svcrestarttask</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>filePath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileFullPath</p></li>
</ul></td>
<td><p>The file path</p></td>
<td><ul>
<li><p><code>security</code></p></li>
<li><p><code>/var/log/audit/audit.log</code></p></li>
<li><p><code>application</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file size</p></td>
<td><ul>
<li><p><code>1209</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>fileType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file type</p></td>
<td><ul>
<li><p><code>EXE</code></p></li>
<li><p><code>LNK</code></p></li>
<li><p><code>MIME</code></p></li>
<li><p><code>linux</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>filterRiskLevel</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The top level filter risk of the event</p></td>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>flowId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The connection ID</p></td>
<td><ul>
<li><p><code>101766</code></p></li>
<li><p><code>440</code></p></li>
<li><p><code>20518968</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<td><p>groupName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The group name</p></td>
<td><ul>
<li><p><code>example.com</code></p></li>
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
<td><p>The hostname</p></td>
<td><ul>
<li><p><code>NJ-EFFY-ZHAO1</code></p></li>
<li><p><code>trendmicro.com</code></p></li>
<li><p><code>SMC User</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<td><p>The HTTP referer</p></td>
<td><ul>
<li><p><code>http://10.10.10.10/</code></p></li>
<li><p><code>http://fake/home/</code></p></li>
<li><p><code>http://fake.com/page/Test.jsp</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>httpRespContentType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The HTTP response data content type</p></td>
<td><ul>
<li><p><code>Application/json</code></p></li>
<li><p><code>application/octet-stream</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>Administrator Login</code></p></li>
<li><p><code>Administrator Logout</code></p></li>
<li><p><code>hello_world2</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>malName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the detected malware</p></td>
<td><ul>
<li><p><code>EICAR_TEST_FILE</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>managementEvent</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The management event</p></td>
<td><ul>
<li><p><code>true</code></p></li>
<li><p><code>false</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectCmd</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>CLICommand</p></li>
</ul></td>
<td><p>The command line entry of the target process</p></td>
<td><ul>
<li><p><code>ls</code></p></li>
<li><p><code>wc -l</code></p></li>
<li><p><code>runc init</code></p></li>
<li><p><code>docker-init --version</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>oldFileHash</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA1</p></li>
</ul></td>
<td><p>The old file hash</p></td>
<td><ul>
<li><p><code>DA39A3EE5E6B4B0D3255BFEF95601890AFD80709</code></p></li>
<li><p><code>89CE26EAD139D52B8A6B61BFFC6AF89AF246580F</code></p></li>
<li><p><code>57247B810B0EE61DD86CE24AC14097B9B5405EEC</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>pktDstCloudServiceName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The subset IP address range name for the cloud service destination IP (pkt-dst-aws-service)</p></td>
<td><ul>
<li><p><code>AMAZON</code></p></li>
<li><p><code>EC2</code></p></li>
<li><p><code>ROUTE53</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>pktSrcCloudServiceName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The subset IP address range name for the cloud service source IP (pkt-src-aws-service)</p></td>
<td><ul>
<li><p><code>AMAZON</code></p></li>
<li><p><code>EC2</code></p></li>
<li><p><code>ROUTE53</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>PAN-OS</code></p></li>
<li><p><code>Fortigate</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>TLC-to-nat-untrust</code></p></li>
<li><p><code>TLC-to-nat-trust</code></p></li>
<li><p><code>default</code></p></li>
<li><p><code>g-default</code></p></li>
<li><p><code>Unified-Policy</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>policyTreePath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The policy tree path</p></td>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>tlc</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>profile</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the triggered Threat Protection template or Data Loss Prevention profile</p></td>
<td><ul>
<li><p><code>default</code></p></li>
<li><p><code>g-default</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>proto</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The transport network protocol</p></td>
<td><ul>
<li><p><code>6</code></p></li>
<li><p><code>TCP</code></p></li>
<li><p><code>17</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>v6.0.3</code></p></li>
<li><p><code>10.1.12</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>rating</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The credibility level</p></td>
<td><ul>
<li><p><code>any</code></p></li>
<li><p><code>Unknown</code></p></li>
<li><p><code>Dangerous</code></p></li>
<li><p><code>computer-and-internet-info</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>readOnly</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Whether the operation is read-only</p></td>
<td><ul>
<li><p><code>true</code></p></li>
<li><p><code>false</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>recipientAccountId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Account ID that received the event</p></td>
<td><ul>
<li><p><code>123456789012</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>Firefox/126.0</code></p></li>
<li><p><code>Other: Wget/1.19.1 (mingw32)</code></p></li>
<li><p><code>MICROSOFT_DEVICE_METADATA_RETRIEVAL_CLIENT</code></p></li>
<li><p><code>LIBCURL</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestID</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The request ID generated by the service this value)</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>get</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>requestParameters</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The parameters sent with the request</p></td>
<td><ul>
<li><p><code>{"durationSeconds": 3600, "roleSessionName":"BackplaneAssumeRoleSession"}</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>resources</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The resources accessed in the event</p></td>
<td><ul>
<li><p><code>[{"type":"AWS::S3::Object","ARN":"arn:aws:s3:::your-bucket/file.txt"}]</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>responseElements</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The response elements for create, update, and delete actions</p></td>
<td><ul>
<li><p><code>{"user":{"createDate":"Mar 24, 2014 9:11:59 PM","userName":"Bob","arn":"arn:aws:iam::123456789012:user/Bob","path":"/","userId":"EXAMPLEUSERID"}}</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>ruleId</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The rule ID</p></td>
<td><ul>
<li><p><code>1002795</code></p></li>
<li><p><code>1003802</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>ruleName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the rule that triggered the event</p></td>
<td><ul>
<li><p><code>ETL_Access Rules_Web_Host</code></p></li>
<li><p><code>block_wiki_for_guest</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>sample_email@trendmicro.com</code></p></li>
<li><p><code>sip:sipp@10.10.10.10:5060</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>serviceEventDetails</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The service event details</p></td>
<td><ul>
<li><p><code>{"lifecycleEventPolicy":{"policyVersion":1,"policyId":"11111111-1111-1111-1111-111111111111"}}</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>sessionEnd</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The session end time (in seconds)</p></td>
<td><ul>
<li><p><code>1575462989</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>sessionStart</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The session start name (in seconds)</p></td>
<td><ul>
<li><p><code>1575462989</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>severity</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The severity of the event</p></td>
<td><ul>
<li><p><code>3</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>sharedEventID</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The AWS CloudTrail GUID (from the same AWS action sent to different AWS accounts) events (From the same AWS action that is sent to different AWS accounts)</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>WIN-FBUB1O9TU4U</code></p></li>
<li><p><code>TW-STEVENLIN</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>00:00:00:ff:ff:ff</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>sourceIPAddress</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The request IP address (for service console actions: the customer resource, for AWS services: the DNS name)</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
<li><p><code>apigateway.amazonaws.com</code></p></li>
<li><p><code>config.amazonaws.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<td><p>The source port</p></td>
<td><ul>
<li><p><code>53</code></p></li>
<li><p><code>0</code></p></li>
<li><p><code>7680</code></p></li>
<li><p><code>50006</code></p></li>
<li><p><code>52068</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<td><p>The source IP address</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>Reserved</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcZone</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source zone of the session</p></td>
<td><ul>
<li><p><code>wan</code></p></li>
<li><p><code>dmz</code></p></li>
<li><p><code>undefined</code></p></li>
<li><p><code>TLC</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<td><p>The username or mailbox</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>NT AUTHORITY\SYSTEM</code></p></li>
<li><p><code>sample_email@trendmicro.com</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p><code>sip:sipp@10.10.10.10:5060</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>tags</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>Technique</p></li>
<li><p>Tactic</p></li>
</ul></td>
<td><p>The detected technique ID based on the alert filter</p></td>
<td><ul>
<li><p><code>MITREV9.T1090</code></p></li>
<li><p><code>MITRE.T1071</code></p></li>
<li><p><code>MITREV9.T1059.001</code></p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>tlsDetails</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The TLS details</p></td>
<td><ul>
<li><p><code>{"tlsVersion":"TLSv1.2","cipherSuite":"ECDHE-RSA-AES128-GCM-SHA256"}</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>urlCat</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The requested URL category</p></td>
<td><ul>
<li><p><code>Untested</code></p></li>
<li><p><code>158</code></p></li>
<li><p><code>Web Advertisement</code></p></li>
<li><p><code>Malicious Websites</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>userAgent</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>CLICommand</p></li>
</ul></td>
<td><p>The user agent or the agent through which the request was made</p></td>
<td><ul>
<li><p><code>signin.amazonaws.com</code></p></li>
<li><p><code>console.amazonaws.com</code></p></li>
<li><p><code>aws-cli/1.3.23 Python/2.7.6 Linux/2.6.18-164.el5</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>userIdentity</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The information about a user who made a request</p></td>
<td><ul>
<li><p><code>{"type":"AWSService","invokedBy":"apigateway.amazonaws.com"}</code></p></li>
<li><p><code>{"type":"AWSService","invokedBy":"lambda.amazonaws.com"}</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>uuid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The unique key of the log entry</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>vendor</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The device vendor</p></td>
<td><ul>
<li><p><code>Fortinet</code></p></li>
<li><p><code>Check Point</code></p></li>
<li><p><code>Palo Alto Networks</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>vendorLogId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The vendor event log ID</p></td>
<td><ul>
<li><p><code>11</code></p></li>
<li><p><code>211008192</code></p></li>
<li><p><code>98</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>vendorParsed</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The normalized event log (JSON format)</p></td>
<td><pre class="codeblock"><code>{&quot;cefHeader&quot;: { &quot;cefVersion&quot;: &quot;0&quot;, &quot;deviceVendor&quot;: &quot;Palo Alto Networks&quot;,&quot;deviceProduct&quot;: &quot;PAN-OS&quot;,&quot;deviceEventClassId&quot;: &quot;Machine Learning found virus(599805)&quot;},&quot;cefExtension&quot;: &quot;rt&quot;:&quot;..&quot;}</code></pre></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>vendorRaw</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The original event log string</p></td>
<td><pre class="codeblock"><code>CEF:0|Palo Alto Networks|PAN-OS|10.2.9-h1|end|TRAFFIC|1|rt=Aug 12 2024 15:31:19 GMT deviceExternalId=021201072197 src=10.10.10.10 dst=10.10.10.11 sourceTranslatedAddress=0.0.0.0 destinationTranslatedAddress=0.0.0.0 cs1Label=Rule cs1=TLC-to-nat-trust suser= duser= app=ping cs3Label=Virtual System cs3=vsys1 cs4Label=Source Zone cs4=TLC cs5Label=Destination Zone cs5=nat-trust deviceInboundInterface=ethernet1/6 deviceOutboundInterface=ethernet1/8 cs6Label=LogProfile cs6=PA440_to_Panorama cn1Label=SessionID cn1=19120 cnt=1 spt=0 dpt=0 sourceTranslatedPort=0 destinationTranslatedPort=0 flexString1Label=Flags flexString1=0x100019 proto=icmp act=allow flexNumber1Label=Total bytes flexNumber1=98 in=98 out=0 cn2Label=Packets cn2=1</code></pre></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>vpcEndpointId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The VPC endpoint in which requests where made from a VPC to another AWS service</p></td>
<td><ul>
<li><p><code>vpce-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
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
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
<tr>
<td><p>vsysName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The virtual system of the session</p></td>
<td><ul>
<li><p><code>vsys1</code></p></li>
<li><p><code>root</code></p></li>
<li><p><code>vdom1</code></p></li>
</ul></td>
<td><ul>
<li><p>Third Party Log Collector</p></li>
</ul></td>
</tr>
</tbody>
</table>
