---
slug: endpoint-activity-data
title: Endpoint activity data sources
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
<td><p>additionalInfo</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The filter rule info</p></td>
<td><ul>
<li><p><code>Default</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>app</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The layer-7 network protocol being exploited protocol</p></td>
<td><ul>
<li><p><code>SMB</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>authId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The authorization ID</p></td>
<td><ul>
<li><p><code>999</code></p></li>
<li><p><code>996</code></p></li>
<li><p><code>997</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>azId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Avaliability Zone ID of the virtual machine that made the request</p></td>
<td><ul>
<li><p><code>us-east-1b</code></p></li>
<li><p><code>us-west-2a</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>channel</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Windows event channel</p></td>
<td><ul>
<li><p><code>Security</code></p></li>
<li><p><code>Microsoft-Windows-WMI-Activity/Trace</code></p></li>
<li><p><code>Microsoft-Windows-TaskScheduler/Operational</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudIdentityAccountId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Cloud Identity account ID used for authorization</p></td>
<td><ul>
<li><p><code>111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudIdentityId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Cloud Identity ID used for authorization</p></td>
<td><ul>
<li><p><code>arn:aws:sts::111111111111:assumed-role/eksctl-aws-test-nodegroup-ng-21d38-NodeInstanceRole-3wPxVEo4zHlK/i-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudIdentityName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Cloud Identity name used for authorization</p></td>
<td><ul>
<li><p><code>AWSsampleToken</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudProvider</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The service provider of the cloud asset</p></td>
<td><ul>
<li><p><code>aws</code></p></li>
<li><p><code>azure</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudServiceApiName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The cloud service API</p></td>
<td><ul>
<li><p><code>AssumeRole</code></p></li>
<li><p><code>GetCallerIdentity</code></p></li>
<li><p><code>ListBuckets</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>cloudServiceName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The cloud service</p></td>
<td><ul>
<li><p><code>s3.us-east-1.amazonaws.com</code></p></li>
<li><p><code>dynamodb.us-west-2.amazonaws.com</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>codeIntegrityOptionEnabled</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Whether the system enforced signed kernel loading according to DSE(driver signature enforcement)</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>codeIntegrityOptionTestsign</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Whether the system bypassed DSE(driver signature enforcement) checks and permitted loading of test-signed drivers</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>correlationData</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The data for correlation</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>deviceType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The disk drive type</p></td>
<td><ul>
<li><p><code>TELEMETRY_DEVICE_TYPE_UNKNOWN</code></p></li>
<li><p><code>TELEMETRY_DEVICE_TYPE_REMOVABLE</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
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
<td><p>The destination port number</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Data Detection and Response</p></li>
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
<li><p><code>::</code></p></li>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Data Detection and Response</p></li>
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
<td><p>Host GUID of the endpoint on which the event was detected</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
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
<td><p>The host name of the endpoint on which the event was detected</p></td>
<td><ul>
<li><p><code>PHILIPSIBE09</code></p></li>
<li><p><code>WHAM6WK8XG2</code></p></li>
<li><p><code>MacBook-Pro-del-Meno</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>endpointIp</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>IP address of the endpoint on which the event was detected</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
<li><p><code>::1</code></p></li>
<li><p><code>fe80::1</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>endpointMacAddress</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The host MAC address</p></td>
<td><ul>
<li><p><code>0-0-0-0-0-0-0-e0</code></p></li>
<li><p><code>00:00:00:ff:ff:ff</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataAccessList</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of requested access rights</p></td>
<td><ul>
<li><p><code>%%4416</code></p></li>
<li><p><code>%%4417</code></p></li>
<li><p><code>%%4418</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataAccessMask</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The hexadecimal value of the requested or used permissions during an access attempt</p></td>
<td><ul>
<li><p><code>16</code></p></li>
<li><p><code>2147483648</code></p></li>
<li><p><code>1048576</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataActionName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The action performed</p></td>
<td><ul>
<li><p><code>Language Components Installer</code></p></li>
<li><p><code>Group Policy Background Processing</code></p></li>
<li><p><code>C:\Program Files (x86)\Microsoft\EdgeUpdate\MicrosoftEdgeUpdate.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataAuthenticationPackageName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The authentication package name of the Windows event data</p></td>
<td><ul>
<li><p><code>NTLM</code></p></li>
<li><p><code>Negotiate</code></p></li>
<li><p><code>MICROSOFT_AUTHENTICATION_PACKAGE_V1_0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataConsumer</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The recipient of the reported event</p></td>
<td><ul>
<li><p><code>HealthDriverEventConsumer="Health Event Consumer"</code></p></li>
<li><p><code>MemoryEventConsumer="Memory Event Consumer"</code></p></li>
<li><p><code>SysEventConsumer="System Event Consumer"</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataElevatedToken</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Whether the session is elevated and has administrator privileges</p></td>
<td><ul>
<li><p><code>%%1842</code></p></li>
<li><p><code>%%1843</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataFullyQualifiedAssemblyName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The fully qualified .NET assembly name</p></td>
<td><ul>
<li><p><code>System.Runtime, Version=6.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a</code></p></li>
<li><p><code>System.Xml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</code></p></li>
<li><p><code>System.Diagnostics.Process, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataImpersonationLevel</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sign-in session impersonation level</p></td>
<td><ul>
<li><p><code>%%1830</code></p></li>
<li><p><code>%%1832</code></p></li>
<li><p><code>%%1833</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataIpAddress</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The IP address for Windows event 4624 which is "An account was successfully logged on"</p></td>
<td><ul>
<li><p><code>-</code></p></li>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataJobOwner</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the account that initiated the event</p></td>
<td><ul>
<li><p><code>BEI\holdej</code></p></li>
<li><p><code>NT AUTHORITY\SYSTEM</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataLogonProcessName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the Windows event sign in process name</p></td>
<td><ul>
<li><p><code>NtLmSsp </code></p></li>
<li><p><code>Advapi </code></p></li>
<li><p><code>Advapi</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataLogonType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The logon type for Windows event 4624 which is "An account was successfully logged on"</p></td>
<td><ul>
<li><p><code>3</code></p></li>
<li><p><code>5</code></p></li>
<li><p><code>2</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataModuleILPath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The CIL image path of the module or the dynamic module name</p></td>
<td><ul>
<li><p><code>C:\Program Files\Cymulate\Agent\System.Threading.dll</code></p></li>
<li><p><code>C:\windows\system32\tzsync.exe</code></p></li>
<li><p><code>C:\Program.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataObjectName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The identifying information about the object for which access was requested</p></td>
<td><ul>
<li><p><code>\Device\HarddiskVolume2\Windows\System32\lsass.exe</code></p></li>
<li><p><code>C:\Windows\System32\osk.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataObjectType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object type</p></td>
<td><ul>
<li><p><code>Process</code></p></li>
<li><p><code>File</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataOperation</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Windows event 11</p></td>
<td><ul>
<li><p><code>Start IWbemServices::ExecQuery - root\ccm : select * from SMS_Authority</code></p></li>
<li><p><code>Start IWbemServices::ExecQuery - root\cimv2 : select * from win32_process</code></p></li>
<li><p><code>Start IWbemServices::ExecQuery - root\ccm : SELECT * FROM SMS_Authority</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataPath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The path of the Windows event data</p></td>
<td><ul>
<li><p><code>C:\Program Files\Common Files\Microsoft Shared\ClickToRun\officesvcmgr.exe</code></p></li>
<li><p><code>taskhostw.exe</code></p></li>
<li><p><code>gpupdate.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataProcessPath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The process path that initiated the event</p></td>
<td><ul>
<li><p><code>C:\Program Files\Microsoft Office\Office15\OUTLOOK.EXE</code></p></li>
<li><p><code>C:\Program Files (x86)\Common Files\Adobe\ARM\1.0\AdobeARM.exe</code></p></li>
<li><p><code>C:\Program Files\Microsoft Office\root\Office16\OUTLOOK.EXE</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataProviderName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the Windows event data provider</p></td>
<td><ul>
<li><p><code>SmsClientMethodProvider</code></p></li>
<li><p><code>MS_NT_EVENTLOG_PROVIDER</code></p></li>
<li><p><code>RegProv</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataProviderPath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file path of the Windows event data provider</p></td>
<td><ul>
<li><p><code>%systemroot%\system32\wbem\ntevt.dll</code></p></li>
<li><p><code>%systemroot%\system32\wbem\stdprov.dll</code></p></li>
<li><p><code>C:\WINDOWS\CCM\smsclient.dll</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataScriptBlockText</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Windows event 4104, Creating Scriptblock text</p></td>
<td><ul>
<li><p><code>$global:?</code></p></li>
<li><p><code>0</code></p></li>
<li><p><code>{ Set-StrictMode -Version 1; $_.PSMessageDetails }</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataServiceFileName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The full file path of the service executable file</p></td>
<td><ul>
<li><p><code>%SystemRoot%\PSEXESVC.exe</code></p></li>
<li><p><code>C:\Windows\System32\svchost.exe -k WinSysRestoreGroup</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataServiceName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The service name</p></td>
<td><ul>
<li><p><code>PSEXESVC</code></p></li>
<li><p><code>WinResSvc</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataStatus</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Windows event data status</p></td>
<td><ul>
<li><p><code>0xc000006d</code></p></li>
<li><p><code>-1073741715</code></p></li>
<li><p><code>0xc000006e</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataSubStatus</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Windows event data sub status</p></td>
<td><ul>
<li><p><code>0xc0000064</code></p></li>
<li><p><code>0xc000006a</code></p></li>
<li><p><code>-1073741724</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataSubjectUserName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The account name</p></td>
<td><ul>
<li><p><code>dadmin</code></p></li>
<li><p><code>Alex</code></p></li>
<li><p><code>london$</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataTargetDomainName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The target sign-in account domain or computer name</p></td>
<td><ul>
<li><p><code>NT AUTHORITY</code></p></li>
<li><p><code>Builtin</code></p></li>
<li><p><code>SHOCKWAVE</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataTargetName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The service, application, or network resource name</p></td>
<td><ul>
<li><p><code>Microsoft_RssPlatform_*</code></p></li>
<li><p><code>WindowsLive:target=virtualapp/didlogical</code></p></li>
<li><p><code>MicrosoftOffice*</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataTargetUserName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user name of the Windows event data target</p></td>
<td><ul>
<li><p><code>Offer Remote Assistance Helpers</code></p></li>
<li><p><code>Administrators</code></p></li>
<li><p><code>Administradores</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataTaskName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The task name logged by the Windows event</p></td>
<td><ul>
<li><p><code>\Microsoft\Windows\LanguageComponentsInstaller\Installation</code></p></li>
<li><p><code>\Microsoft\Office\Office Serviceability Manager</code></p></li>
<li><p><code>\MicrosoftEdgeUpdateTaskMachineUA</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataTicketEncryptionType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The cryptographic suite used for the Kerberos TGS</p></td>
<td><ul>
<li><p><code>0x12</code></p></li>
<li><p><code>0x17</code></p></li>
<li><p><code>0x18</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataUserContext</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user context of the Windows event data</p></td>
<td><ul>
<li><p><code>MP\MPBSA179345$</code></p></li>
<li><p><code>MP\MPBSASPU179370$</code></p></li>
<li><p><code>MP\MPBSA4025625$</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventDataWorkstationName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the computer used in the sign-in attempt</p></td>
<td><ul>
<li><p><code>WIN-GG82ULGC9GO</code></p></li>
<li><p><code>DESKTOP-123ABC</code></p></li>
<li><p><code>CLIENT01</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The event hash ID</p></td>
<td><ul>
<li><p><code>-8406473586387535914</code></p></li>
<li><p><code>138486453338666581</code></p></li>
<li><p><code>-7909265752378976284</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Event type</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventMessage</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The event message</p></td>
<td><ul>
<li><p><code>[0x13bb4e2a0] activating connection: mach=true listener=false peer=false name=com.apple.airportd</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
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
<li><p><code>1 - EVENT_SOURCE_TELEMETRY</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventSubId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The access type</p></td>
<td><ul>
<li><p><code>2 - TELEMETRY_PROCESS_CREATE</code></p></li>
<li><p><code>101 - TELEMETRY_FILE_CREATE</code></p></li>
<li><p><code>204 - TELEMETRY_CONNECTION_CONNECT_OUTBOUND</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>eventTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the agent detected the event</p></td>
<td><ul>
<li><p><code>1657781088000</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>filterRiskLevel</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Top-level risk level of the event</p></td>
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
<td><p>firstSeen</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The first time the event was seen</p></td>
<td><ul>
<li><p><code>1656355418449</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
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
<td><p>hookId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The hook ID</p></td>
<td><ul>
<li><p><code>-1</code></p></li>
<li><p><code>5</code></p></li>
<li><p><code>4</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
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
<td><p>The domain name</p></td>
<td><ul>
<li><p><code>localhost</code></p></li>
<li><p><code>wpad</code></p></li>
<li><p><code>settings-win.data.microsoft.com</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
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
<td><p>The HTTP header referer</p></td>
<td><ul>
<li><p><code>http://10.10.10.10/</code></p></li>
<li><p><code>http://fake/home/</code></p></li>
<li><p><code>http://fake.com/page/Test.jsp</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>importTable</p></td>
<td><ul>
<li><p><code>object</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The imported table information</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>importTableFileName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The library file name which has imported functions</p></td>
<td><ul>
<li><p><code>KERNEL32.dll</code></p></li>
<li><p><code>ADVAPI32.dll</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>importTableFunctionName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The imported function file name</p></td>
<td><ul>
<li><p><code>SwitchToThread/GetSystemInfo</code></p></li>
<li><p><code>OpenProcessToken</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>instanceAccountId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The cloud account ID of the virtual machine that made the request</p></td>
<td><ul>
<li><p><code>111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>instanceId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The virtual machine instance ID on the cloud platform</p></td>
<td><ul>
<li><p><code>i-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>instanceName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The virtual machine that made the request</p></td>
<td><ul>
<li><p><code>ec2-123-124-0-12.us-west-2.compute.amazonaws.com</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>integrityLevel</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The integrity level of a process</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>lastSeen</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The last time the event was seen</p></td>
<td><ul>
<li><p><code>1656355418449</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
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
<td><p>logonUser</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>UserAccount</p></li>
</ul></td>
<td><p>The logon user name</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>SISTEMA</code></p></li>
<li><p><code>oracle</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>messageType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The message type</p></td>
<td><ul>
<li><p><code>Default</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>metaSrcExtra</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The meta for identifying the source of events</p></td>
<td><ul>
<li><p><code>[{'metaSrcUri': ...]</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>moduleName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The module where a hook procedure was set up</p></td>
<td><ul>
<li><p><code>c:\program files (x86)\desktopcentral_agent\bin\dcusbsummary.exe</code></p></li>
<li><p><code>c:\program files\common files\microsoft shared\clicktorun\officesvcmgr.exe</code></p></li>
<li><p><code>c:\program files (x86)\sharp\sharp pen software\prsnspttool.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>nativeDeviceCharacteristics</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Additional driver device information</p></td>
<td><ul>
<li><p><code>393217</code></p></li>
<li><p><code>131072</code></p></li>
<li><p><code>131088</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>nativeDeviceType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The underlying hardware type of the driver</p></td>
<td><ul>
<li><p><code>2</code></p></li>
<li><p><code>7</code></p></li>
<li><p><code>20</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>nativeStorageDeviceBusType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The bus type to which the device is connected</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>2</code></p></li>
<li><p><code>17</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>networkInterfaceId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The network interface of the virtual machine that made the request</p></td>
<td><ul>
<li><p><code>eni-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectApiHookNum</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The API hook number of the object</p></td>
<td><ul>
<li><p><code>1</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectApiName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the executed API</p></td>
<td><ul>
<li><p><code>GetIpNetTable</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectApiRvInNum</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The API telemetry return value</p></td>
<td><ul>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectAppName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Name of the app involved in the AMSI event</p></td>
<td><ul>
<li><p><code>Exchange Server 2016</code></p></li>
<li><p><code>PowerShell_C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe_10.0.19041.1</code></p></li>
<li><p><code>PowerShell_C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe_10.0.14393.0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectAuthId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object authorization ID</p></td>
<td><ul>
<li><p><code>999</code></p></li>
<li><p><code>996</code></p></li>
<li><p><code>997</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectBmData</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The data of BM event</p></td>
<td><ul>
<li><p><code>{"provider":"ORCA","schema_version":1,"data":[{"str":"Access /proc/&lt;pid&gt;/*"}]}</code></p></li>
<li><p><code>{"provider":"ORCA","schema_version":1,"data":[{"str":"source '/etc/profile.d/lang.sh'"}]}</code></p></li>
<li><p><code>{"provider":"ORCA","schema_version":1,"data":[{"str":"source '/etc/profile.d/bash_completion.sh'"}]}</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
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
<td><p>Command line entry of target process</p></td>
<td><ul>
<li><p><code>wc -l</code></p></li>
<li><p><code>runc init</code></p></li>
<li><p><code>docker-init --version</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectContentName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The AMSI object content name</p></td>
<td><ul>
<li><p><code>C:\Program Files\WindowsPowerShell\Modules\PowerShellGet\1.2\PowerShellGet.psd1</code></p></li>
<li><p><code>c:\synclog\BLAST_SCAN.vbs</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectCurrentFileSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Previous size of modified object file</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>59456</code></p></li>
<li><p><code>60</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectCurrentPosixPermission</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The new POSIX permission file used in file events and CHMOD events</p></td>
<td><ul>
<li><p><code>1050180</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileAttributes</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The new file attributes</p></td>
<td><ul>
<li><p><code>2</code></p></li>
<li><p><code>32</code></p></li>
<li><p><code>8192</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileAttributesHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The hash ID of the file attribute meta information</p></td>
<td><ul>
<li><p><code>1626660901647460000</code></p></li>
<li><p><code>-3744588546027070000</code></p></li>
<li><p><code>8709345175736065000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileCreation</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the object file was created</p></td>
<td><ul>
<li><p><code>1652131848000</code></p></li>
<li><p><code>1577865600000</code></p></li>
<li><p><code>1648279273000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileCurrentAttributes</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The original file attributes</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>34</code></p></li>
<li><p><code>8224</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileCurrentOwnerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The current owner name of the object file</p></td>
<td><ul>
<li><p><code>NT AUTHORITY\SYSTEM</code></p></li>
<li><p><code>BUILTIN\Administrators</code></p></li>
<li><p><code>BUILTIN\Administradores</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileCurrentOwnerSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The current security identifier owner of the object file</p></td>
<td><ul>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-32-544</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileDaclString</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The discretionary access control list of the object file</p></td>
<td><ul>
<li><p><code>D:(A;;FA;;;S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464)(A;;0x1200a9;;;BA)(A;;0x1200a9;;;SY)(A;;0x1200a9;;;BU)(A;;0x1200a9;;;AC)(A;;0x1200a9;;;S-1-15-2-2)</code></p></li>
<li><p><code>D:(A;OICI;GA;;;SY)(A;OICI;0xa0120000;;;WD)(A;OICI;GA;;;BA)</code></p></li>
<li><p><code>D:(A;ID;FA;;;SY)(A;ID;FA;;;BA)(A;ID;0x1200a9;;;BU)(A;ID;0x1200a9;;;AC)(A;ID;0x1200a9;;;S-1-15-2-2)</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileExtendedAttribute</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The extended attributes of the file</p></td>
<td><ul>
<li><p><code>com.apple.quarantine</code></p></li>
<li><p><code>com.apple.metadata:kMDItemWhereFroms</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileGroupName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object file user group name</p></td>
<td><ul>
<li><p><code>wheel</code></p></li>
<li><p><code>staff</code></p></li>
<li><p><code>admin</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileGroupSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The security identifier of the object file group</p></td>
<td><ul>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-21-397955417-626881126-188441444-513</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileHash</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The cryptographic hash of the target process image or file, with the specific hash algorithm to be determined</p></td>
<td><ul>
<li><p><code>1ca71017d2fa4775253670e1e55e26912bfdc156</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object file hash ID</p></td>
<td><ul>
<li><p><code>2141057820373638746</code></p></li>
<li><p><code>-6516669617381620295</code></p></li>
<li><p><code>-4912169863817247597</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileHashMd5</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileMD5</p></li>
</ul></td>
<td><p>The md5 hash of target process image or target file</p></td>
<td><ul>
<li><p><code>7ac47235c7bb452a03d3afd872f44c9e</code></p></li>
<li><p><code>c9873d83a969645a97f21adc1b164cc5</code></p></li>
<li><p><code>3b32b378c8b288de6f15e1607a8c2145</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileHashSha1</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA1</p></li>
</ul></td>
<td><p>The SHA1 hash of target process image or target file</p></td>
<td><ul>
<li><p><code>ded3833f145989fd86c1f4811b61497298ebc7fd</code></p></li>
<li><p><code>c4fa06404142f1994431f9eef3df2cbe0f1998f1</code></p></li>
<li><p><code>3c01d486ed5aa1ecc2d8f33dc24b0ed59b3e609e</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileHashSha256</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA2</p></li>
</ul></td>
<td><p>The SHA256 hash of target process image or target file</p></td>
<td><ul>
<li><p><code>39109eef00821658893b45634fe2f4664f880da9242712df907f1327d4ceefb8</code></p></li>
<li><p><code>49fa3e206abf6a1f4546417dbe09f3f06b38847866a4a66de75bd90f39cb6c1c</code></p></li>
<li><p><code>0969321ad5a0923f0f03896ad2c10e49290515c44b721d773942a37f62a24893</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileIsRemoteAccess</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The remote access to the object file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileModifiedTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the object file was modified</p></td>
<td><ul>
<li><p><code>1652131848000</code></p></li>
<li><p><code>1577865600000</code></p></li>
<li><p><code>1648279273000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileOriginalName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileName</p></li>
</ul></td>
<td><p>The original file name of the object image</p></td>
<td><ul>
<li><p><code>Taskmgr.exe</code></p></li>
<li><p><code>WINLOGON.EXE</code></p></li>
<li><p><code>svchost.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileOwnerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object file owner name</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>NT SERVICE\TrustedInstaller</code></p></li>
<li><p><code>BUILTIN\Administrators</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileOwnerSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The security identifier of the object file owner</p></td>
<td><ul>
<li><p><code>S-1-5-32-544</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFilePath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileFullPath</p></li>
<li><p>FileName</p></li>
</ul></td>
<td><p>The file path of the target process image or target file</p></td>
<td><ul>
<li><p><code>/usr/bin/bash</code></p></li>
<li><p><code>/bin/bash</code></p></li>
<li><p><code>/opt/folder1/probes/system/processes/processes</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileRemoteAccess</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The remote access for the object file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileSaclString</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The system access control list of the object file</p></td>
<td><ul>
<li><p><code>S:NO_ACCESS_CONTROL</code></p></li>
<li><p><code>S:(AU;SAFA;DCLCRPCRSDWDWO;;;WD)</code></p></li>
<li><p><code>S:(AU;SAFA;0x1f0116;;;WD)</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFileSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file size of the object file</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>59456</code></p></li>
<li><p><code>60</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectFirstSeen</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The first time the object was seen</p></td>
<td><ul>
<li><p><code>1656458063638</code></p></li>
<li><p><code>1656260547165</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object hash ID</p></td>
<td><ul>
<li><p><code>8576474808125313522</code></p></li>
<li><p><code>-599270888483415002</code></p></li>
<li><p><code>2177864258235728980</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectHostName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>DomainName</p></li>
</ul></td>
<td><p>Server name where Internet event was detected</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
<li><p><code>sample.test.org</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectIntegrityLevel</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Integrity level of target process</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectIp</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>IP address of internet event</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
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
<td><p>IP address list of internet event</p></td>
<td><ul>
<li><p><code>::1</code></p></li>
<li><p><code>10.10.10.10</code></p></li>
<li><p><code>::ffff:10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLastSeen</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The last time the object was seen</p></td>
<td><ul>
<li><p><code>1656458354730</code></p></li>
<li><p><code>1656260580722</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLaunchTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object launch time of the Windows event</p></td>
<td><ul>
<li><p><code>1616412892557</code></p></li>
<li><p><code>1620778597056</code></p></li>
<li><p><code>1616414113105</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLoginOutFailureMessage</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sign-in/sign-out error message</p></td>
<td><ul>
<li><p><code>Login incorrect</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLoginOutFirstSeen</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The first time the object sign-in/sign-out was seen</p></td>
<td><ul>
<li><p><code>1713903612</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLoginOutHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The FNV of the object sign-in/sign-out meta</p></td>
<td><ul>
<li><p><code>-8981232070268295000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLoginOutLastSeen</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The last time the object sign-in/sign-out was seen</p></td>
<td><ul>
<li><p><code>1713903612</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLoginOutMetaType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sign-in/sign-out meta</p></td>
<td><ul>
<li><p><code>1 - LOGIN_OUT_META_TYPE_OPENSSH</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLoginOutSessionId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sign-in/sign-out session ID</p></td>
<td><ul>
<li><p><code>260</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLoginOutSourceAddress</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sign-in/sign-out source IP</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectLoginOutStatus</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sign-in/sign-out status</p></td>
<td><ul>
<li><p><code>-1</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object name</p></td>
<td><ul>
<li><p><code>/usr/bin/bash</code></p></li>
<li><p><code>/bin/bash</code></p></li>
<li><p><code>/opt/folder1/probes/system/processes/processes</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectPid</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The PID of target process</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectPipeName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The named pipe of the event</p></td>
<td><ul>
<li><p><code>\\.\pipe\name1</code></p></li>
<li><p><code>\\serverHostName\pipe\name1</code></p></li>
<li><p><code>\\serverIp\pipe\name1</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectPort</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><ul>
<li><p>Port</p></li>
</ul></td>
<td><p>The port number used by internet event</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectPosixPermission</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The current POSIX permission for the file</p></td>
<td><ul>
<li><p><code>1050112</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectPosixPermissionHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The POSIX permission hash ID</p></td>
<td><ul>
<li><p><code>-8931783023607716000</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectProcessHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>FNV of target process</p></td>
<td><ul>
<li><p><code>1415699552492662761</code></p></li>
<li><p><code>-100650285065767982</code></p></li>
<li><p><code>-1139416698673814436</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectRawDataSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The raw data size of the Windows event object</p></td>
<td><ul>
<li><p><code>9</code></p></li>
<li><p><code>1</code></p></li>
<li><p><code>564</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectRawDataStr</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The data contents of the AMSI event</p></td>
<td><ul>
<li><p><code>$global:?</code></p></li>
<li><p><code>0</code></p></li>
<li><p><code>$servicename = "WinRM" $arrService = Get-Service $servicename if ($arrService.Status -ne "Running") { Restart-Service $servicename } </code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectRegType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Windows Registry Type ID</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>11</code></p></li>
<li><p><code>4</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectRegistryData</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>RegistryValueData</p></li>
</ul></td>
<td><p>The registry value data</p></td>
<td><ul>
<li><p><code>{11111111-1111-1111-1111-111111111111}</code></p></li>
<li><p><code>1</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectRegistryKeyHandle</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>RegistryKey</p></li>
</ul></td>
<td><p>The registry key</p></td>
<td><ul>
<li><p><code>HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters</code></p></li>
<li><p><code>HKLM\system\currentcontrolset\services\w32time\config</code></p></li>
<li><p><code>HKLM\system\currentcontrolset\services\tcpip\parameters</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectRegistryRoot</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Windows Registry Root ID</p></td>
<td><ul>
<li><p><code>3</code></p></li>
<li><p><code>1</code></p></li>
<li><p><code>2</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectRegistryValue</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>RegistryValue</p></li>
</ul></td>
<td><p>Registry value name</p></td>
<td><ul>
<li><p><code>lastknowngoodtime</code></p></li>
<li><p><code>threadingmodel</code></p></li>
<li><p><code>epoch</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectRunAsLocalAccount</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The "runas" command uses a local account</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>1</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectServiceType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Type of target file</p></td>
<td><ul>
<li><p><code>local</code></p></li>
<li><p><code>smb</code></p></li>
<li><p><code>web</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectSessionId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object session ID</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>1</code></p></li>
<li><p><code>2</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectSigner</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Certificate signer of object process or file</p></td>
<td><ul>
<li><p><code>Microsoft Windows</code></p></li>
<li><p><code>Software Signing;Apple Code Signing Certification Authority;Apple Root CA;</code></p></li>
<li><p><code>Microsoft Corporation</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectSignerFlagsAdhoc</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of object process or file signature adhoc flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectSignerFlagsLibValid</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of object process or file signature library validation flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectSignerFlagsRuntime</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of object process or file signature runtime flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectSignerValid</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Validity of certificate signer</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectSubTrueType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>File object's true sub-type</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>5000</code></p></li>
<li><p><code>18000</code></p></li>
<li><p><code>28001</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectThreadId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object process thread ID</p></td>
<td><ul>
<li><p><code>10196</code></p></li>
<li><p><code>10104</code></p></li>
<li><p><code>10004</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectTrueType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>File object's true major type</p></td>
<td><ul>
<li><p><code>7</code></p></li>
<li><p><code>5</code></p></li>
<li><p><code>18</code></p></li>
<li><p><code>4051</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectUri</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Path of target file</p></td>
<td><ul>
<li><p><code>C://path/of/file.txt</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectUser</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>UserAccount</p></li>
</ul></td>
<td><p>The owner name of the target process or the login user name</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>SYSTEM</code></p></li>
<li><p><code>oracle</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectUserDomain</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The object user domain</p></td>
<td><ul>
<li><p><code>NT AUTHORITY</code></p></li>
<li><p><code>AUTORIDADE NT</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectUserGroup</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user group name</p></td>
<td><ul>
<li><p><code>staff</code></p></li>
<li><p><code>_spotlight</code></p></li>
<li><p><code>wheel</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>objectUserGroupSids</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user group SIDs of the object</p></td>
<td><ul>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-21-3770350686-3666354711-3866293128-513</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>osDescription</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The OS version</p></td>
<td><ul>
<li><p><code>Windows 10 (64 bit)</code></p></li>
<li><p><code>Windows 10 Pro (64 bit) build 19044</code></p></li>
<li><p><code>Amazon Linux 2 (64 bit) (5.4.188-104.359.amzn2.x86_64)</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
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
<li><p><code>Windows</code></p></li>
<li><p><code>Linux</code></p></li>
<li><p><code>macOS</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>osType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The host operating system type</p></td>
<td><ul>
<li><p><code>0x00000030</code></p></li>
<li><p><code>4</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>osVer</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The version of the host operating system</p></td>
<td><ul>
<li><p><code>Amazon Linux 2</code></p></li>
<li><p><code>10.0.19044</code></p></li>
<li><p><code>10.0.19042</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentAuthId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The parent authorization ID</p></td>
<td><ul>
<li><p><code>999</code></p></li>
<li><p><code>996</code></p></li>
<li><p><code>997</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentCmd</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>CLICommand</p></li>
</ul></td>
<td><p>Command line entry of parent process</p></td>
<td><ul>
<li><p><code>C:\WINDOWS\system32\services.exe</code></p></li>
<li><p><code>C:\Windows\system32\services.exe</code></p></li>
<li><p><code>/sbin/launchd</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileCreation</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the parent file was created</p></td>
<td><ul>
<li><p><code>1652131848000</code></p></li>
<li><p><code>1577865600000</code></p></li>
<li><p><code>1635172968000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileCurrentOwnerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The current owner name of the parent file</p></td>
<td><ul>
<li><p><code>NT AUTHORITY\SYSTEM</code></p></li>
<li><p><code>BUILTIN\Administradores</code></p></li>
<li><p><code>BUILTIN\Administrators</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileCurrentOwnerSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The current security identifier owner of the parent file</p></td>
<td><ul>
<li><p><code>S-1-5-32-544</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileDaclString</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The discretionary access control list of the parent file</p></td>
<td><ul>
<li><p><code>D:(A;;FA;;;S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464)(A;;0x1200a9;;;BA)(A;;0x1200a9;;;SY)(A;;0x1200a9;;;BU)(A;;0x1200a9;;;AC)(A;;0x1200a9;;;S-1-15-2-2)</code></p></li>
<li><p><code>D:(A;OICI;GA;;;SY)(A;OICI;0xa0120000;;;WD)(A;OICI;GA;;;BA)</code></p></li>
<li><p><code>D:(A;ID;0x1200a9;;;AC)(A;ID;FA;;;SY)(A;ID;FA;;;BA)(A;ID;0x1200a9;;;BU)(A;ID;0x1200a9;;;S-1-15-2-2)</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileGroupName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the parent file user group</p></td>
<td><ul>
<li><p><code>wheel</code></p></li>
<li><p><code>admin</code></p></li>
<li><p><code>staff</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileGroupSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The security identifier of the parent process file group</p></td>
<td><ul>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-32-544</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The parent file hash ID</p></td>
<td><ul>
<li><p><code>-4092577940452904134</code></p></li>
<li><p><code>2141057820373638746</code></p></li>
<li><p><code>-821808160829839906</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileHashMd5</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileMD5</p></li>
</ul></td>
<td><p>The md5 hash of parent process</p></td>
<td><ul>
<li><p><code>d8e577bf078c45954f4531885478d5a9</code></p></li>
<li><p><code>cd10cb894be2128fca0bf0e2b0c27c16</code></p></li>
<li><p><code>cfd65bed18a1fae631091c3a4c4dd533</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileHashSha1</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA1</p></li>
</ul></td>
<td><p>The SHA1 hash of parent process</p></td>
<td><ul>
<li><p><code>d7a213f3cfee2a8a191769eb33847953be51de54</code></p></li>
<li><p><code>1f912d4bec338ef10b7c9f19976286f8acc4eb97</code></p></li>
<li><p><code>9ad737cbd8bbdddc96726156dbd3bc03936bf02f</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileHashSha256</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA2</p></li>
</ul></td>
<td><p>The SHA256 hash of parent process</p></td>
<td><ul>
<li><p><code>dfbea9e8c316d9bc118b454b0c722cd674c30d0a256340200e2c3a7480cba674</code></p></li>
<li><p><code>f3feb95e7bcfb0766a694d93fca29eda7e2ca977c2395b4be75242814eb6d881</code></p></li>
<li><p><code>00f8cbc5b3a6640af5ac18d01bc5a666f6f583b1379b9491e0bcc28ba78c92e9</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileModifiedTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the parent file was modified</p></td>
<td><ul>
<li><p><code>1652131848000</code></p></li>
<li><p><code>1577865600000</code></p></li>
<li><p><code>1635172968000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileOriginalName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileName</p></li>
</ul></td>
<td><p>The original file name of the parent image</p></td>
<td><ul>
<li><p><code>Taskmgr.exe</code></p></li>
<li><p><code>WINLOGON.EXE</code></p></li>
<li><p><code>svchost.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileOwnerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The owner name of the parent file</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>cit</code></p></li>
<li><p><code>BUILTIN\Administrators</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileOwnerSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The security identifier of the parent file owner</p></td>
<td><ul>
<li><p><code>S-1-5-32-544</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFilePath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileFullPath</p></li>
<li><p>FileName</p></li>
</ul></td>
<td><p>The file path of the parent process</p></td>
<td><ul>
<li><p><code>c:\windows\system32\services.exe</code></p></li>
<li><p><code>/usr/bin/bash</code></p></li>
<li><p><code>c:\windows\system32\svchost.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileRemoteAccess</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The remote access to the parent file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileSaclString</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The system access control list of the parent file</p></td>
<td><ul>
<li><p><code>S:(AU;SAFA;DCLCRPCRSDWDWO;;;WD)</code></p></li>
<li><p><code>S:NO_ACCESS_CONTROL</code></p></li>
<li><p><code>S:(AU;IDSAFA;DCLCRPSDWDWO;;;AU)</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentFileSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file size of the parent file</p></td>
<td><ul>
<li><p><code>714856</code></p></li>
<li><p><code>59952</code></p></li>
<li><p><code>5114880</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The parent hash ID</p></td>
<td><ul>
<li><p><code>-865367326691173681</code></p></li>
<li><p><code>-2903238741593506113</code></p></li>
<li><p><code>-4358168316031740439</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentIntegrityLevel</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The integrity level of a parent</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentLaunchTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time when the parent process was launched</p></td>
<td><ul>
<li><p><code>1653614773895</code></p></li>
<li><p><code>1656118625928</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The image name of the parent process</p></td>
<td><ul>
<li><p><code>c:\windows\system32\services.exe</code></p></li>
<li><p><code>/usr/bin/bash</code></p></li>
<li><p><code>c:\windows\system32\svchost.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentPid</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The PID of the parent process</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>976</code></p></li>
<li><p><code>920</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentSessionId</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The parent session ID</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentSigner</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The signer of the parent file</p></td>
<td><ul>
<li><p><code>Microsoft Windows Publisher</code></p></li>
<li><p><code>Microsoft Windows</code></p></li>
<li><p><code>Software Signing;Apple Code Signing Certification Authority;Apple Root CA;</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentSignerFlagsAdhoc</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of parent process signature adhoc flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentSignerFlagsLibValid</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of parent process signature library validation flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentSignerFlagsRuntime</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of parent process signature runtime flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentSignerValid</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The validity of the parent signer</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentSubTrueType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The true file subtype of the parent file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentTrueType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The true file type of the parent file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentUser</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The type of user that executed the parent process</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>SYSTEM</code></p></li>
<li><p><code>SISTEMA</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentUserDomain</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user domain of the parent process</p></td>
<td><ul>
<li><p><code>NT AUTHORITY</code></p></li>
<li><p><code>AUTORIDADE NT</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>parentUserGroupSids</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The SIDs of the parent user group</p></td>
<td><ul>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-21-3770350686-3666354711-3866293128-513</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>plang</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The product language</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>pname</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Internal product ID (Deprecated, use productCode)</p></td>
<td><ul>
<li><p><code>2200</code></p></li>
<li><p><code>751</code></p></li>
<li><p><code>533</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>policyIds</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The Ids of DDR’s data policy</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
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
<td><p>pplat</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The product platform</p></td>
<td><ul>
<li><p><code>5889</code></p></li>
<li><p><code>9217</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processCmd</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>CLICommand</p></li>
</ul></td>
<td><p>The command line entry of the subject process</p></td>
<td><ul>
<li><p><code>C:\Windows\system32\lsass.exe</code></p></li>
<li><p><code>C:\WINDOWS\system32\lsass.exe</code></p></li>
<li><p><code>nimbus(processes)</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileCreation</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the process file was created</p></td>
<td><ul>
<li><p><code>1652131848000</code></p></li>
<li><p><code>1577865600000</code></p></li>
<li><p><code>1635172906000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileCurrentOwnerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The current owner name of the process file</p></td>
<td><ul>
<li><p><code>NT AUTHORITY\SYSTEM</code></p></li>
<li><p><code>BUILTIN\Administrators</code></p></li>
<li><p><code>BUILTIN\Administradores</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileCurrentOwnerSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The owner of the process file current security identifier</p></td>
<td><ul>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-32-544</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileDaclString</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The discretionary access control list of the process file</p></td>
<td><ul>
<li><p><code>D:(A;ID;0x1200a9;;;AC)(A;ID;FA;;;SY)(A;ID;FA;;;BA)(A;ID;0x1200a9;;;BU)(A;ID;0x1200a9;;;S-1-15-2-2)</code></p></li>
<li><p><code>D:(A;ID;FA;;;SY)</code></p></li>
<li><p><code>D:(A;ID;FA;;;BA)(A;ID;FA;;;SY)</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileGroupName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the process file user group</p></td>
<td><ul>
<li><p><code>wheel</code></p></li>
<li><p><code>admin</code></p></li>
<li><p><code>staff</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileGroupSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The security identifier of the process file group</p></td>
<td><ul>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-32-544</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file hash of the process</p></td>
<td><ul>
<li><p><code>2141057820373638746</code></p></li>
<li><p><code>-821808160829839906</code></p></li>
<li><p><code>5222963427542927736</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileHashMd5</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileMD5</p></li>
</ul></td>
<td><p>The md5 hash of subject process image</p></td>
<td><ul>
<li><p><code>cd10cb894be2128fca0bf0e2b0c27c16</code></p></li>
<li><p><code>7ac47235c7bb452a03d3afd872f44c9e</code></p></li>
<li><p><code>cfd65bed18a1fae631091c3a4c4dd533</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileHashSha1</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA1</p></li>
</ul></td>
<td><p>The SHA1 hash of subject process image</p></td>
<td><ul>
<li><p><code>1f912d4bec338ef10b7c9f19976286f8acc4eb97</code></p></li>
<li><p><code>ded3833f145989fd86c1f4811b61497298ebc7fd</code></p></li>
<li><p><code>9ad737cbd8bbdddc96726156dbd3bc03936bf02f</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileHashSha256</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA2</p></li>
</ul></td>
<td><p>The SHA256 hash of subject process image</p></td>
<td><ul>
<li><p><code>f3feb95e7bcfb0766a694d93fca29eda7e2ca977c2395b4be75242814eb6d881</code></p></li>
<li><p><code>39109eef00821658893b45634fe2f4664f880da9242712df907f1327d4ceefb8</code></p></li>
<li><p><code>00f8cbc5b3a6640af5ac18d01bc5a666f6f583b1379b9491e0bcc28ba78c92e9</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileModifiedTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the process file was modified</p></td>
<td><ul>
<li><p><code>1652131848000</code></p></li>
<li><p><code>1633413236462</code></p></li>
<li><p><code>1414554708877</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileOriginalName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileName</p></li>
</ul></td>
<td><p>The original file name of the process image</p></td>
<td><ul>
<li><p><code>Taskmgr.exe</code></p></li>
<li><p><code>WINLOGON.EXE</code></p></li>
<li><p><code>svchost.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileOwnerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The process file owner name</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>cit</code></p></li>
<li><p><code>BUILTIN\Administrators</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileOwnerSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The security identifier of the process file owner</p></td>
<td><ul>
<li><p><code>S-1-5-32-544</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFilePath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>ProcessFullPath</p></li>
<li><p>ProcessName</p></li>
<li><p>FileFullPath</p></li>
<li><p>FileName</p></li>
</ul></td>
<td><p>The file path of the subject process</p></td>
<td><ul>
<li><p><code>/usr/bin/bash</code></p></li>
<li><p><code>c:\windows\system32\svchost.exe</code></p></li>
<li><p><code>c:\windows\system32\lsass.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileRemoteAccess</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The remote access to the process file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileSaclString</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The system access control list of the process file</p></td>
<td><ul>
<li><p><code>S:(AU;SAFA;DCLCRPCRSDWDWO;;;WD)</code></p></li>
<li><p><code>S:(AU;IDSAFA;DCLCRPSDWDWO;;;AU)</code></p></li>
<li><p><code>S:NO_ACCESS_CONTROL</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>processFileSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file size of the process file</p></td>
<td><ul>
<li><p><code>59952</code></p></li>
<li><p><code>59456</code></p></li>
<li><p><code>47024</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The FNV of subject process</p></td>
<td><ul>
<li><p><code>7114696589795796819</code></p></li>
<li><p><code>1307755369266815004</code></p></li>
<li><p><code>-5015325378148567246</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processLaunchTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the subject process was launched</p></td>
<td><ul>
<li><p><code>1653614775212</code></p></li>
<li><p><code>1656118626642</code></p></li>
<li><p><code>1652098160298</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>ProcessName</p></li>
</ul></td>
<td><p>The image name of the process that triggered the event</p></td>
<td><ul>
<li><p><code>/usr/bin/bash</code></p></li>
<li><p><code>c:\windows\system32\svchost.exe</code></p></li>
<li><p><code>c:\windows\system32\lsass.exe</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processPid</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The PID of the subject process</p></td>
<td><ul>
<li><p><code>4</code></p></li>
<li><p><code>1</code></p></li>
<li><p><code>784</code></p></li>
<li><p><code>792</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processSigner</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The process file signer</p></td>
<td><ul>
<li><p><code>Microsoft Windows</code></p></li>
<li><p><code>Microsoft Windows Publisher</code></p></li>
<li><p><code>Microsoft Corporation</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processSignerFlagsAdhoc</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of process signature adhoc flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processSignerFlagsLibValid</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of process signature library validation flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processSignerFlagsRuntime</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of process signature runtime flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processSignerValid</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The validity of the process signer</p></td>
<td><ul>
<li><p><code>1</code></p></li>
<li><p><code>0</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processSubTrueType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The true file subtype of the process</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processTrueType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The true file type of the process</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processUser</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>UserAccount</p></li>
</ul></td>
<td><p>The owner name of subject process image</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>SYSTEM</code></p></li>
<li><p><code>SISTEMA</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>processUserDomain</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The process user domain</p></td>
<td><ul>
<li><p><code>NT AUTHORITY</code></p></li>
<li><p><code>AUTORIDADE NT</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>processUserGroupSids</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user group SIDs of the process</p></td>
<td><ul>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-21-3770350686-3666354711-3866293128-513</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
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
<li><p><code>sds</code></p></li>
<li><p><code>xes</code></p></li>
<li><p><code>sao</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>proto</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The protocol type</p></td>
<td><ul>
<li><p><code>TELEMETRY_CONNECTION_TCP</code></p></li>
<li><p><code>TELEMETRY_CONNECTION_UDP</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>providerGUID</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The GUID of the Windows event provider</p></td>
<td><ul>
<li><p><code>{11111111-1111-1111-1111-111111111111}</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>providerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The name of the Windows event provider</p></td>
<td><ul>
<li><p><code>Microsoft-Windows-Security-Auditing</code></p></li>
<li><p><code>Microsoft-Windows-WMI-Activity</code></p></li>
<li><p><code>Microsoft-Windows-TaskScheduler</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>proxy</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The proxy address</p></td>
<td><ul>
<li><p><code>proxy.sample:8080</code></p></li>
<li><p><code>10.10.10.10:8080</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>publicSpt</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><ul>
<li><p>Port</p></li>
</ul></td>
<td><p>The public port of the endpoint making the request</p></td>
<td><ul>
<li><p><code>57163</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>publicSrc</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>IPv4</p></li>
<li><p>IPv6</p></li>
</ul></td>
<td><p>The public ip of the endpoint making the request</p></td>
<td><ul>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
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
<li><p><code>1.2.0.2752</code></p></li>
<li><p><code>1.0.345</code></p></li>
<li><p><code>1.2.0.2657</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>rawDataSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The size of the Windows event log</p></td>
<td><ul>
<li><p><code>1128</code></p></li>
<li><p><code>1129</code></p></li>
<li><p><code>1127</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>rawDataStr</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Windows event raw contents</p></td>
<td><ul>
<li><p><code>{ "EventData" : { "LogonType" : "", "TargetDomainName" : "", "TargetLogonId" : "", "TargetUserName" : "", "TargetUserSid" : "" } } </code></p></li>
<li><p><code>{ "EventData" : { "LogonType" : "10", "TargetDomainName" : "AFASADV", "TargetLogonId" : "14941011731", "TargetUserName" : "administrator", "TargetUserSid" : "S-1-5-21-1507008304-2416677881-2121376573-500" } } </code></p></li>
<li><p><code>{ "EventData" : { "LogonType" : "10", "TargetDomainName" : "AIS", "TargetLogonId" : "216921070", "TargetUserName" : "MWoodr01", "TargetUserSid" : "S-1-5-21-1873864278-1756520048-3043165120-15057" } } </code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>regionId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The cloud asset region</p></td>
<td><ul>
<li><p><code>US East (N. Virginia)</code></p></li>
<li><p><code>Europe (Frankfurt)</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
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
<td><p>Request URL</p></td>
<td><ul>
<li><p><code>http://10.10.10.10/fake/site</code></p></li>
<li><p><code>http:///fake/param.cgi?action=list&amp;group=Alarm.Status</code></p></li>
<li><p><code>http://fake.com/</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
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
<li><p><code>GET</code></p></li>
<li><p><code>POST</code></p></li>
<li><p><code>PUT</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>rt</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The event time</p></td>
<td><ul>
<li><p><code>1657781088000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
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
<li><p><code>1005566</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>sessionId</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The session ID</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>1</code></p></li>
<li><p><code>2</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>smbSharedName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The shared folder name for the server that contains the files</p></td>
<td><ul>
<li><p><code>sharedfolder</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
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
<td><p>The source port number</p></td>
<td><ul>
<li><p><code>53</code></p></li>
<li><p><code>5353</code></p></li>
<li><p><code>443</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Data Detection and Response</p></li>
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
<td><p>The source address</p></td>
<td><ul>
<li><p><code>::</code></p></li>
<li><p><code>10.10.10.10</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileCreation</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the source file was created</p></td>
<td><ul>
<li><p><code>1577865600000</code></p></li>
<li><p><code>1626201752000</code></p></li>
<li><p><code>1626201750000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileCurrentOwnerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The current owner name of the source file</p></td>
<td><ul>
<li><p><code>NT AUTHORITY\SYSTEM</code></p></li>
<li><p><code>BUILTIN\Administrators</code></p></li>
<li><p><code>AUTORIDADE NT\SISTEMA</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileCurrentOwnerSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The current security identifier owner of the source file</p></td>
<td><ul>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-32-544</code></p></li>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileDaclString</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The discretionary access control list of the source file</p></td>
<td><ul>
<li><p><code>D:(A;;FA;;;S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464)(A;;0x1200a9;;;BA)(A;;0x1200a9;;;SY)(A;;0x1200a9;;;BU)(A;;0x1200a9;;;AC)(A;;0x1200a9;;;S-1-15-2-2)</code></p></li>
<li><p><code>D:(A;ID;FA;;;SY)(A;ID;FA;;;BA)(A;ID;0x1200a9;;;BU)(A;ID;0x1200a9;;;AC)(A;ID;0x1200a9;;;S-1-15-2-2)</code></p></li>
<li><p><code>D:(A;ID;FA;;;SY)(A;ID;FA;;;BA)</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileGroupName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source file user group name</p></td>
<td><ul>
<li><p><code>wheel</code></p></li>
<li><p><code>staff</code></p></li>
<li><p><code>NT SERVICE\TrustedInstaller</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileGroupSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The security identifier of the source file group</p></td>
<td><ul>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-21-3770350686-3666354711-3866293128-513</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileHash</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The cryptographic hash of the source process image or file, with the specific hash algorithm to be determined.</p></td>
<td><ul>
<li><p><code>1ca71017d2fa4775253670e1e55e26912bfdc156</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source file hash ID</p></td>
<td><ul>
<li><p><code>1102079405020678318</code></p></li>
<li><p><code>-6926286289273504319</code></p></li>
<li><p><code>8528955148329941480</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileHashMd5</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileMD5</p></li>
</ul></td>
<td><p>The md5 hash of source file</p></td>
<td><ul>
<li><p><code>e5d5e9c1f65b8ec7aa5b7f1b1acdd731</code></p></li>
<li><p><code>a6779bf446db07e4c4ba3516b273c496</code></p></li>
<li><p><code>4bb7334fdadc6eccb8e6ab402aae013b</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileHashSha1</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA1</p></li>
</ul></td>
<td><p>The SHA1 hash of source file</p></td>
<td><ul>
<li><p><code>5d34902fecc1760138212ada36be1e742bda5e52</code></p></li>
<li><p><code>dbb14dcda6502ab1d23a7c77d405dafbcbeb439e</code></p></li>
<li><p><code>2292f8109cd756e790c068a52d50f1b0858f503b</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileHashSha256</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileSHA2</p></li>
</ul></td>
<td><p>The SHA256 hash of source file</p></td>
<td><ul>
<li><p><code>4eaa002225f4ea2dedcd19b7f1337d7c58ea7dd6d4571c12468dde95e6bcfdaf</code></p></li>
<li><p><code>e30508e2088bc16b2a84233ced64995f738deaef2366ac6c86b35c93bbcd9d80</code></p></li>
<li><p><code>16b20a3ad485b4fbbe3028c7e743b226db21ea93cacc8b3d7d7d4a731bf02333</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileIsRemoteAccess</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The remote access of the source file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileModifiedTime</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The time the source file was modified</p></td>
<td><ul>
<li><p><code>1626201752000</code></p></li>
<li><p><code>1626201750000</code></p></li>
<li><p><code>1577865600000</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileOwnerName</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source file owner name</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>NT SERVICE\TrustedInstaller</code></p></li>
<li><p><code>NT AUTHORITY\SYSTEM</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileOwnerSid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The security identifier of the source file owner</p></td>
<td><ul>
<li><p><code>S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464</code></p></li>
<li><p><code>S-1-5-18</code></p></li>
<li><p><code>S-1-5-32-544</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFilePath</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><ul>
<li><p>FileFullPath</p></li>
<li><p>FileName</p></li>
</ul></td>
<td><p>The source file path</p></td>
<td><ul>
<li><p><code>\\cnva-apps\megaclockprod\traveler\travelerprint.accdb</code></p></li>
<li><p><code>c:\program files\common files\microsoft shared\clicktorun\officesvcmgrschedule.xml</code></p></li>
<li><p><code>q:\a7_dbs\a4_pkg\a4_packaging.accde</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileSaclString</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The system access control list of the source file</p></td>
<td><ul>
<li><p><code>S:NO_ACCESS_CONTROL</code></p></li>
<li><p><code>S:(AU;SAFA;DCLCRPCRSDWDWO;;;WD)</code></p></li>
<li><p><code>S:(AU;IDSAFA;DCLCRPSDWDWO;;;AU)</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFileSize</p></td>
<td><ul>
<li><p><code>long</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The file size of the source file</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>131072</code></p></li>
<li><p><code>196608</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcFirstSeen</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The first time the source file was seen</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>1656355418449</code></p></li>
<li><p><code>1656714760440</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcHashId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The source hash ID</p></td>
<td><ul>
<li><p><code>4070054759888344851</code></p></li>
<li><p><code>2177864258235728980</code></p></li>
<li><p><code>3476454206648023552</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcLastSeen</p></td>
<td><ul>
<li><p><code>date</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The last time the source file was seen</p></td>
<td><ul>
<li><p><code>0</code></p></li>
<li><p><code>1656355418449</code></p></li>
<li><p><code>1656715147313</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcServiceType</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Type of source file</p></td>
<td><ul>
<li><p><code>local</code></p></li>
<li><p><code>smb</code></p></li>
<li><p><code>web</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcSigner</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The signer of the source file</p></td>
<td><ul>
<li><p><code>Microsoft Windows</code></p></li>
<li><p><code>Microsoft Corporation</code></p></li>
<li><p><code>Google LLC</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcSignerFlagsAdhoc</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of source file signature adhoc flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcSignerFlagsLibValid</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of source file signature library validation flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcSignerFlagsRuntime</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The list of source file signature runtime flags</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcSignerValid</p></td>
<td><ul>
<li><p><code>boolean</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The validity of the source file signer</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcSubTrueType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The true file subtype of the source file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcTrueType</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The true file type of the source file</p></td>
<td><p>-</p></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcUri</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Path of source file</p></td>
<td><ul>
<li><p><code>C://path/of/file.txt</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>srcUser</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The owner name of the source process or the login user name</p></td>
<td><ul>
<li><p><code>root</code></p></li>
<li><p><code>SYSTEM</code></p></li>
<li><p><code>oracle</code></p></li>
</ul></td>
<td><ul>
<li><p>Data Detection and Response</p></li>
</ul></td>
</tr>
<tr>
<td><p>status</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The HTTP response status code</p></td>
<td><ul>
<li><p><code>200</code></p></li>
<li><p><code>500</code></p></li>
<li><p><code>403</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
</ul></td>
</tr>
<tr>
<td><p>subSystem</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The sub system information</p></td>
<td><ul>
<li><p><code>com.apple.xpc</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>subnetId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The subnet ID of the virtual machine that made the request</p></td>
<td><ul>
<li><p><code>subnet-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
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
<td><p>timezone</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The host time zone</p></td>
<td><ul>
<li><p><code>UTC+00:00</code></p></li>
<li><p><code>UTC-05:00</code></p></li>
<li><p><code>UTC-03:00</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>userDomain</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The user domain name</p></td>
<td><ul>
<li><p><code>CORP</code></p></li>
<li><p><code>AUTORIDADE NT</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
<tr>
<td><p>uuid</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Unique key of the log</p></td>
<td><ul>
<li><p><code>11111111-1111-1111-1111-111111111111</code></p></li>
</ul></td>
<td><ul>
<li><p>All products</p></li>
</ul></td>
</tr>
<tr>
<td><p>vpcId</p></td>
<td><ul>
<li><p><code>keyword</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>The virtual private cloud that contains the cloud asset</p></td>
<td><ul>
<li><p><code>vpc-01234567890abcdef</code></p></li>
</ul></td>
<td><ul>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p></li>
<li><p>XDR Endpoint Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>winEventId</p></td>
<td><ul>
<li><p><code>integer</code></p></li>
</ul></td>
<td><p>-</p></td>
<td><p>Event ID of Windows event</p></td>
<td><ul>
<li><p><code>11</code></p></li>
<li><p><code>4624</code></p></li>
<li><p><code>4670</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Trend Micro Apex One as a Service</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Related information**

- [eventId and eventSubId mapping](eventid-eventsubid-mapping.md)
