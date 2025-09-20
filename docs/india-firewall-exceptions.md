---
slug: india-firewall-exceptions
title: India - firewall exceptions
---

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 50%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>FQDN</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3"><p>Assessment Service</p></td>
<td><p><code>https://assessment-ap5.mgcp.trendmicro.com</code></p></td>
<td><p>Back-end server</p></td>
</tr>
<tr>
<td><p><code>https://release-us1.mgcp.trendmicro.com</code></p></td>
<td><p>Assessment tool download</p></td>
</tr>
<tr>
<td><p><code>https://cti-us1.mgcp.trendmicro.com</code></p></td>
<td><p>Windows CTI rules download</p></td>
</tr>
<tr>
<td><p>Download Center</p></td>
<td><p><code>download.xdr.trendmicro.com</code></p></td>
<td><p>Download center for XDR customer</p></td>
</tr>
<tr>
<td rowspan="7"><p>Endpoint Basecamp</p></td>
<td><p><code>api-ap5.xbc.trendmicro.com</code></p></td>
<td><p>Endpoint Basecamp API gateway</p></td>
</tr>
<tr>
<td><p><code>tgw-ap5.mgcp.trendmicro.com</code></p></td>
<td><p>Cloud endpoint telemetry agent API Gateway</p></td>
</tr>
<tr>
<td><p><code>release-us1.mgcp.trendmicro.com</code></p></td>
<td><p>Download center for endpoint release package</p></td>
</tr>
<tr>
<td><p><code>support-connector-api.manage.trendmicro.com</code></p></td>
<td><p>For SCP API connection</p></td>
</tr>
<tr>
<td><p><code>supportconnectorpacks.manage.trendmicro.com</code></p></td>
<td><p>Download center for SCP package</p></td>
</tr>
<tr>
<td><p><code>rpcollectedthings.manage.trendmicro.com</code></p></td>
<td><p>To upload SCP result</p></td>
</tr>
<tr>
<td><p><code>wsc-ap5.xbc.trendmicro.com</code></p></td>
<td><p>WSC persistent connection</p></td>
</tr>
<tr>
<td rowspan="3"><p>Endpoint Inventory</p></td>
<td><p><code>http://cloudendpoint-ap5.mgcp.trendmicro.com</code></p></td>
<td><p>Agent Portal API Gateway</p></td>
</tr>
<tr>
<td><p><code>release-us1.mgcp.trendmicro.com</code></p></td>
<td><p>Download center for endpoint release package</p></td>
</tr>
<tr>
<td><p><code>supportconnectorpacks.manage.trendmicro.com</code></p></td>
<td><p>Download center for iES tool and LogCounter</p></td>
</tr>
<tr>
<td rowspan="2"><p>Endpoint Response</p></td>
<td><p><code>er-ws-as1.xdr.trendmicro.com</code></p></td>
<td><p>API Gateway</p></td>
</tr>
<tr>
<td><p><code>era-as1.xdr.trendmicro.com</code></p></td>
<td><p>ELB FQDN</p></td>
</tr>
<tr>
<td><p>Endpoint Policies</p></td>
<td><p><code>endpointpolicy-cdn-ap5.xbc.trendmicro.com</code></p></td>
<td><p>Policy content download Cloudfront CDN</p></td>
</tr>
<tr>
<td><p>Endpoint Sensor</p></td>
<td><p><code>https://files.trendmicro.com</code></p></td>
<td><p>Download center for XDR Linux Sensor Kernel Module</p></td>
</tr>
<tr>
<td><p>Feedback Service</p></td>
<td><p><code>matomo.xdr.trendmicro.com</code></p></td>
<td><p>User feedback collection</p></td>
</tr>
<tr>
<td><p>IDP</p></td>
<td><p><code>tm.login.trendmicro.com</code></p>
<p><code>iamservice.trendmicro.com</code></p>
<p><code>www.google.com</code> (Google Recaptcha)</p>
<p><code>www.gstatic.com</code> (Google Recaptcha)</p></td>
<td><p>Trend Micro login service for Trend Vision One and Customer Licensing Portal</p></td>
</tr>
<tr>
<td><p>IDP (Legacy)</p></td>
<td><p><code>sso.in.xdr.trendmicro.com</code></p></td>
<td><p>SSO authentication service (Legacy, redirect to tm.login.trendmicro.com)</p></td>
</tr>
<tr>
<td><p>IDP (UIC)</p></td>
<td><p><code>login.in.xdr.trendmicro.com</code></p></td>
<td><p>SSO authentication service</p></td>
</tr>
<tr>
<td rowspan="2"><p>In-App Guides</p></td>
<td><p><code>data.analytics.trendmicro.com/</code></p></td>
<td><p>Provides in-app guides and customer feedback data</p></td>
</tr>
<tr>
<td><p><code>content.analytics.trendmicro.com</code></p></td>
<td><p>Guide content</p></td>
</tr>
<tr>
<td><p>Log Receiver</p></td>
<td><p><code>xlogr-as1.xdr.trendmicro.com</code></p></td>
<td><p>XDR log receiver service</p></td>
</tr>
<tr>
<td rowspan="3"><p>Mobile Security</p></td>
<td><p><code>rest-g.mars.trendmicro.com</code></p></td>
<td><p>Mobile application reputation smart query for mobile enterprise security</p></td>
</tr>
<tr>
<td><p><code>mint.mars.trendmicro.com</code></p></td>
<td><p>Mobile OS vulnerability query for mobile enterprise security</p></td>
</tr>
<tr>
<td><p><code>rest-g-au.mars.trendmicro.com</code></p></td>
<td><p>Mobile pattern update for mobile enterprise security</p></td>
</tr>
<tr>
<td><p>Network Inventory</p></td>
<td><p><code>api-ni-in.xdr.trendmicro.com</code></p></td>
<td><p>DDI registration to Network Inventory</p></td>
</tr>
<tr>
<td><p>Portal (UIC)</p></td>
<td><p><code>portal.in.xdr.trendmicro.com</code></p></td>
<td><p>Major portal access to XDR console</p></td>
</tr>
<tr>
<td><p>Risk Insights Log Receiver (Legacy)</p></td>
<td><p><code>ingestor-in.xdr.trendmicro.com</code></p></td>
<td><p>Log receiver for third-parties using the Trend Micro Risk Insights for Splunk app (migrating to unified log receiver)</p></td>
</tr>
<tr>
<td rowspan="2"><p>Sandbox Analysis</p></td>
<td><p><code>sandbox-threatconnect.trendmicro.com</code></p></td>
<td><p>Provides a web encyclopedia for threat objects</p></td>
</tr>
<tr>
<td><p><code>upload.in.xdr.trendmicro.com</code></p></td>
<td><p>Sandbox analysis package file download</p></td>
</tr>
<tr>
<td><p>Service Platform</p></td>
<td><p><code>api.in.xdr.trendmicro.com</code></p>
<p><code>api-cert.in.xdr.trendmicro.com</code></p></td>
<td><p>Public API and other connection services</p></td>
</tr>
<tr>
<td><p>Upload Center</p></td>
<td><p><code>upload.in.xdr.trendmicro.com</code></p></td>
<td><p>File collection or other services that operate by customer to upload files to XDR</p></td>
</tr>
</tbody>
</table>

**Apex One as a Service FQDNs**

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 67%" />
</colgroup>
<thead>
<tr>
<th><p>Description</p></th>
<th><p>FQDN</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Apex One SaaS console DNS (refer to license email)</p></td>
<td><p><code>&lt;console_DNS&gt;.manage.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>License server</p></td>
<td><p><code>licenseupdate.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>ActiveUpdate server: Windows</p></td>
<td><p><code>osce14-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>ActiveUpdate server: Mac</p></td>
<td><p><code>tmsm35-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>ActiveUpdate server: Toolbox</p></td>
<td><p><code>toolbox10-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>Apex One Telemetry Service</p></td>
<td><p><code>asm01-nabu-prod.aot.trendmicro.com</code></p>
<p><code>api-nabu.aot.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Global Smart Scan Server for Apex One Agent</p></td>
<td><p><code>osce14.icrc.trendmicro.com/tmcss</code></p></td>
</tr>
<tr>
<td><p>Web Rating Service for Apex One Agent</p></td>
<td><p><code>osce14-0-en.url.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Smart Feedback for Apex One Agent</p></td>
<td><p><code>osce140-en.fbs25.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Goodware File Reputation Service for Apex One Agent</p></td>
<td><p><code>osce14-en.gfrbridge.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Community File Reputation Service for Apex One Agent</p></td>
<td><p><code>osce14-en-census.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Predictive Machine Learning (File) for Apex One Agent</p></td>
<td><p><code>osce140-en-f.trx.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Predictive Machine Learning (Behavior) for Apex One Agent</p></td>
<td><p><code>osce140-en-b.trx.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>MacOS threat smart query</p></td>
<td><p><code>mcs.trendmicro.com</code></p></td>
</tr>
</tbody>
</table>

**Service Gateway FQDNs**

<table>
<colgroup>
<col style="width: 40%" />
<col style="width: 20%" />
<col style="width: 40%" />
</colgroup>
<thead>
<tr>
<th><p>Description</p></th>
<th><p>Service Gateway Version</p></th>
<th><p>FQDN</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Smart Protection Network (SPN) Proxy for Smart Protection Services</p></td>
<td><p>2.0 and later</p></td>
<td><p><code>ctapi.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Remote Shell for Troubleshooting Service Gateway</p></td>
<td><p>2.0 and later</p></td>
<td><p><code>sgi-tunneling.in.xdr.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Setting Synchronization for Service Gateway</p></td>
<td><p>2.0 and later</p></td>
<td><p><code>sgi-iot.in.xdr.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Web Reputation Service for Smart Protection Services</p></td>
<td><p>All versions</p></td>
<td><p><code>sg-tmsps10-en.url.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Web Inspection Service for Smart Protection Services</p></td>
<td><p>All versions</p></td>
<td><p><code>sg-tmsps10-en-wis.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Community File Reputation Service for Smart Protection Services</p></td>
<td><p>All versions</p></td>
<td><p><code>sg-tmsps100-en-census.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Community Domain/IP Reputation Service for Smart Protection Services</p></td>
<td><p>All versions</p></td>
<td><p><code>sg-tmsps100-en-domaincensus.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Certified Safe Software Service for Smart Protection Services</p></td>
<td><p>All versions</p></td>
<td><p><code>grid-global.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Mobile App Reputation Service for Smart Protection Services</p></td>
<td><p>All versions</p></td>
<td><p><code>rest.mars.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Goodware File Reputation Service for Smart Protection Services</p></td>
<td><p>All versions</p></td>
<td><p><code>sg-tmsps10-en.gfrbridge.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Service Gateway internal Smart Protection Server</p></td>
<td><p>All versions</p></td>
<td><p><code>sg-tmsps10-p.activeupdate.trendmicro.com/activeupdate/</code></p></td>
</tr>
<tr>
<td><p>Firmware update for Service Gateway virtual appliance</p></td>
<td><p>1.0</p></td>
<td><p><code>as1-external.asg.xdr.trendmicro.com</code></p></td>
</tr>
<tr>
<td><p>Services update for Service Gateway virtual appliance, such as Smart Protection Services, ActiveUpdate service, SO List synch service and Third-party intelligence sync service etc.</p></td>
<td><p>1.0</p></td>
<td><p><code>049597112809.dkr.ecr.ap-south-1.amazonaws.com</code></p></td>
</tr>
<tr>
<td><p>Notification/push channel for Service Gateway virtual appliance.</p></td>
<td><p>1.0</p></td>
<td><p><code>a1v3de23inj3up-ats.iot.ap-south-1.amazonaws.com</code></p></td>
</tr>
<tr>
<td><p>Debug log collection via CLI and firmware update package for Service Gateway virtual appliance.</p></td>
<td><p>1.0</p></td>
<td><p><code>in-v1-sg-cdt-log.s3.ap-south-1.amazonaws.com</code></p></td>
</tr>
</tbody>
</table>

**Global ActiveUpdate URLs for Service Gateway**

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 60%" />
</colgroup>
<thead>
<tr>
<th><p>Product/Service</p></th>
<th><p>Version</p></th>
<th><p>ActiveUpdate URL</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Apex One</p></td>
<td><p>All versions</p></td>
<td><p><code>osce14-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td rowspan="6"><p>Deep Discovery Inspector</p></td>
<td><p>For all versions, replace "&lt;version&gt;" in the FQDN with your Deep Discovery Inspector version number without the period.</p>
<p>For example, if your Deep Discovery Inspector version is 6.5, use the FQDN: <code>ddi65-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
<td><p><code>ddi&lt;version&gt;-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>6.2</p></td>
<td><p><code>ddi62-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>6.0</p></td>
<td><p><code>ddi60-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>5.8</p></td>
<td><p><code>ddi58-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>5.7</p></td>
<td><p><code>ddi57-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>5.6</p></td>
<td><p><code>ddi56-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>Deep Security</p></td>
<td><p>All versions</p></td>
<td><p><code>ipv6-iaus.trendmicro.com/iau_server.dll</code></p></td>
</tr>
<tr>
<td rowspan="2"><p>OfficeScan</p></td>
<td><p>XG</p></td>
<td><p><code>osce12-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
<tr>
<td><p>11.0</p></td>
<td><p><code>osce11-p.activeupdate.trendmicro.com/activeupdate</code></p></td>
</tr>
</tbody>
</table>

**Zero Trust Secure Access FQDNs/IP Addresses**

<table style="width:99%;">
<colgroup>
<col style="width: 22%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
<col style="width: 11%" />
</colgroup>
<thead>
<tr>
<th rowspan="2"><p>Description</p></th>
<th rowspan="2"><p>FQDN/IP Address</p></th>
<th rowspan="2"><p>Port</p></th>
<th colspan="5"><p>Used By</p></th>
</tr>
<tr>
<th><p>Internet Access - Client Access</p></th>
<th><p>Internet Access - PAC Mode</p></th>
<th><p>Private Access - Client Access</p></th>
<th><p>Private Access - Browser Access</p></th>
<th><p>Private Access Connector</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Secure Access Module download and upgrade</p></td>
<td><p><code>prod.ztsaagent.trendmicro.com</code></p></td>
<td><p>TCP: 443</p></td>
<td><p>√</p></td>
<td> </td>
<td><p>√</p></td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Secure Access Module User Behavior Tracking data feedback</p></td>
<td><p><code>event-in.ztsaagent.trendmicro.com</code></p></td>
<td><p>TCP: 443</p></td>
<td><p>√</p></td>
<td> </td>
<td><p>√</p></td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Secure Access Module debug log upload</p></td>
<td><p><code>upload.in.xdr.trendmicro.com</code></p></td>
<td><p>TCP: 443</p></td>
<td><p>√</p></td>
<td> </td>
<td><p>√</p></td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Internet Access Gateway Proxy Address</p></td>
<td><p><code>proxy.ztsa-iag.trendmicro.com</code></p>
<p><code>proxy.in.ztsa-iag.trendmicro.com</code></p></td>
<td><p>TCP: 80/443</p></td>
<td><p>√</p></td>
<td><p>√</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Internet Access On-Premises Gateway (via Service Gateway) Proxy Address</p></td>
<td><p>FQDN or IP address of the on-premise gateway</p></td>
<td><p>TCP: 8088</p></td>
<td><p>√</p></td>
<td><p>√</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Internet Access On-Premises Gateway (via Service Gateway) NTLM Auth Proxy Address</p></td>
<td><p>FQDN or IP address of the on-premise gateway</p></td>
<td><p>TCP: 8089</p></td>
<td><p>√</p></td>
<td><p>√</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Internet Access On-Premises Gateway (via Service Gateway) ICAP Service Address</p></td>
<td><p>FQDN or IP address of the on-premise gateway</p></td>
<td><p>TCP: 1344/11344</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Internet Access Gateway PAC file location</p></td>
<td><p><code>pac.in.ztsa-iag.trendmicro.com</code></p></td>
<td><p>TCP: 80/443</p></td>
<td><p>√</p></td>
<td><p>√</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>General authentication services</p></td>
<td><ul>
<li><p><code>signin.v1.trendmicro.com</code> (Foundation Services update)</p></li>
<li><p><code>tm.login.trendmicro.com</code></p></li>
<li><p><code>iamservice.trendmicro.com</code></p></li>
<li><p>Other custom IDP services</p></li>
</ul>
<p>Google reCAPTCHA:</p>
<ul>
<li><p>www.gstatic.com</p></li>
<li><p>fonts.gstatic.com</p></li>
<li><p>Plus one of the following:</p>
<ul>
<li><p>www.google.com (recommended)</p></li>
<li><p>www.recaptcha.net</p></li>
</ul></li>
</ul></td>
<td><p>TCP: 443</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Internet Access Gateway authentication service used for:</p>
<ul>
<li><p>Browser-based or agent-less authentication</p></li>
<li><p>Diagnostic services</p></li>
<li><p>Integration with Secure Access modules for retrieving PAC files and other necessary information</p></li>
</ul></td>
<td><p><code>auth.ztsa-iag.trendmicro.com</code></p>
<p><code>auth.in.ztsa-iag.trendmicro.com</code></p></td>
<td><p>TCP: 80/443</p></td>
<td> </td>
<td><p>√</p></td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Private Access service accessed by Secure Access Module and Private Access Connector</p></td>
<td><p><code>agent-in-rel.ztna.trendmicro.com</code></p></td>
<td><p>TCP: 443</p></td>
<td><p>√</p></td>
<td> </td>
<td><p>√</p></td>
<td><p>√</p></td>
<td><p>√</p></td>
</tr>
<tr>
<td><p>Private Access Connector download by users</p></td>
<td><p><code>download-in-rel.ztna.trendmicro.com</code></p></td>
<td><p>TCP: 443</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>
<tr>
<td><p>Private Access Connector CDT collect</p></td>
<td><p><code>saseztnaprodinsagen2.blob.core.windows.net</code></p></td>
<td><p>TCP: 443</p>
<p>UDP: 443</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td><p>√</p></td>
</tr>
<tr>
<td><p>Private Access Connector firmware upgrade</p></td>
<td><p><code>saseztnaprodinsa.blob.core.windows.net</code></p>
<p><code>ztnaextacr.azurecr.io</code></p></td>
<td><p>TCP: 443</p>
<p>UDP: 443</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td><p>√</p></td>
</tr>
<tr>
<td><p>Microsoft Azure IoT Hub</p></td>
<td><p><code>sase-ztna-prod-in-iothub-cntevt.azure-devices.net</code></p></td>
<td><p>TCP: 443</p>
<p>UDP: 443</p></td>
<td> </td>
<td> </td>
<td><p>√</p></td>
<td> </td>
<td><p>√</p></td>
</tr>
<tr>
<td><p>Speed test for Secure Access Module, Private Access Connector, and Private Access User Portal</p></td>
<td><p>Private Access Connector automatically selects the site that has the lowest network latency. If you have configured firewalls, Trend Micro recommends adding all of the following FQDNs:</p>
<ul>
<li><p><code>speedtest.anz.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.eu.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.in.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.jp.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.sg.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.us.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.br.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.mea.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.is.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.sa.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.uk.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.mx.ztna.trendmicro.com</code></p></li>
<li><p><code>speedtest.co.ztna.trendmicro.com</code></p></li>
</ul></td>
<td><p>TCP: 443</p></td>
<td> </td>
<td> </td>
<td><p>√</p></td>
<td><p>√</p></td>
<td><p>√</p></td>
</tr>
<tr>
<td><p>Private Access Static IP Pool of Cloud Relay Service</p></td>
<td><p>Private Access Connector automatically selects the site that has the lowest network latency. If you have configured firewalls, Trend Micro recommends adding all of the following IP pools:</p>
<ul>
<li><p><code>20.5.69.128/28 (for Australia)</code></p></li>
<li><p><code>20.4.51.32/28 (for Europe)</code></p></li>
<li><p><code>20.219.254.160/28 (for India)</code></p></li>
<li><p><code>52.140.246.128/28 (for Japan)</code></p></li>
<li><p><code>52.187.118.64/28 (for Singapore)</code></p></li>
<li><p><code>20.7.52.240/28 (for United States)</code></p></li>
<li><p><code>4.228.193.144/28 (for Brazil)</code></p></li>
<li><p><code>20.74.229.224/28 (for MEA)</code></p></li>
<li><p><code>20.217.194.0/28 (for Israel)</code></p></li>
<li><p><code>4.168.219.16/28 (for South Africa)</code></p></li>
<li><p><code>20.58.44.64/28 (for United Kingdom)</code></p></li>
<li><p><code>158.247.121.198 (for Colombia)</code></p></li>
<li><p><code>149.130.166.153 (for Colombia)</code></p></li>
<li><p><code>15.220.187.200 (for Mexico)</code></p></li>
<li><p><code>15.220.190.4 (for Mexico)</code></p></li>
</ul></td>
<td><p>TCP: 443</p>
<p>UDP: 443</p></td>
<td> </td>
<td> </td>
<td><p>√</p></td>
<td><p>√</p></td>
<td><p>√</p></td>
</tr>
<tr>
<td><p>Private Access Browser Access End User Portal</p></td>
<td><p><code>{Customer_Specified}.myapplications.in.ztna.trendmicro.com</code></p></td>
<td><p>TCP: 443</p></td>
<td> </td>
<td> </td>
<td> </td>
<td><p>√</p></td>
<td> </td>
</tr>
<tr>
<td><p>Private Access Browser Access Proxy</p></td>
<td><p><code>{Customer_Specified}.edge.in.ztna.trendmicro.com</code></p></td>
<td><p>TCP: 443</p>
<p>TCP: 80</p></td>
<td> </td>
<td> </td>
<td> </td>
<td><p>√</p></td>
<td> </td>
</tr>
<tr>
<td><p>Private Access Browser Access Proxy for Remote Desktop (RDP)</p></td>
<td><p><code>{Customer_Specified}.rdgw.in.ztna.trendmicro.com</code></p></td>
<td><p>TCP: 443</p>
<p>TCP: 80</p></td>
<td> </td>
<td> </td>
<td> </td>
<td><p>√</p></td>
<td> </td>
</tr>
<tr>
<td><p>Private Access Connector NTP server</p></td>
<td><p>Default NTP servers are listed as follows. You can configure your own NTP servers.</p>
<ul>
<li><p>0.pool.ntp.org</p></li>
<li><p>1.pool.ntp.org</p></li>
<li><p>2.pool.ntp.org</p></li>
<li><p>3.pool.ntp.org</p></li>
</ul></td>
<td><p>UDP: 123</p></td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td><p>√</p></td>
</tr>
<tr>
<td><p>P2P communication between Private Access Connector and Secure Access Module</p></td>
<td><p>Peer's internet IP address</p></td>
<td><p>UDP: random port number, greater than 10000</p></td>
<td> </td>
<td> </td>
<td><p>√</p></td>
<td> </td>
<td><p>√</p></td>
</tr>
</tbody>
</table>
