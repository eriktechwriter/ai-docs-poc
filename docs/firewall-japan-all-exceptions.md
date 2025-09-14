---
slug: trend-vision-one-firewall-japan-all-exceptions
title: 'Firewall exceptions: Japan - all exceptions'
---

The following firewall exceptions apply to networks with:

- Service Gateway installed and cloud service extension turned off

- No Service Gateway installed

**Trend Vision One Authentication**

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>Region</p></th>
<th><p>Exceptions</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Trend Vision One</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>signin.v1.trendmicro.com</p></li>
<li><p>tm.login.trendmicro.com</p></li>
<li><p>iamservice.trendmicro.com</p></li>
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
</tr>
</tbody>
</table>

**Endpoint Security Exceptions**

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th><p>Service / Agent</p></th>
<th><p>Region</p></th>
<th><p>Exceptions</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Endpoint Sensor Agents</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>assessment-ap2.mgcp.trendmicro.com</p></li>
<li><p>release-us1.mgcp.trendmicro.com</p></li>
<li><p>api-ap2.xbc.trendmicro.com</p></li>
<li><p>http://cdn-api-ap2.xbc.trendmicro.com/</p></li>
<li><p>tgw-ap2.mgcp.trendmicro.com</p></li>
<li><p>support-connector-api.manage.trendmicro.com</p></li>
<li><p>supportconnectorpacks.manage.trendmicro.com</p></li>
<li><p>rpcollectedthings.manage.trendmicro.com</p></li>
<li><p>cloudendpoint-ap2.mgcp.trendmicro.com</p></li>
<li><p>er-ws-ane1.xdr.trendmicro.com</p></li>
<li><p>era-ane1.xdr.trendmicro.com</p></li>
<li><p>endpointpolicy-cdn-ap2.xbc.trendmicro.com</p></li>
<li><p>files.trendmicro.com</p></li>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
<li><p>api.xdr.trendmicro.co.jp</p></li>
<li><p>api-cert.xdr.trendmicro.co.jp</p></li>
<li><p>upload.xdr.trendmicro.co.jp</p></li>
<li><p>wsc-ap2.xbc.trendmicro.com</p></li>
<li><p>files.trendmicro.com</p></li>
<li><p>ipv6-iaus.trendmicro.com</p></li>
<li><p>ipv6-iaus.activeupdate.trendmicro.com</p></li>
<li><p>iaus.activeupdate.trendmicro.com</p></li>
<li><p>iaus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Endpoint Sensor Agents with Sandbox Analysis</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>sandbox-threatconnect.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Standard Endpoint Protection Agents</p>


:::warning[Important]

<p>If you enable endpoint sensor detection and response, you must also add the Endpoint Sensor Agents exceptions.</p>


:::

</td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>&lt;Apex One console_DNS&gt;.manage.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>asm01-nabu-prod.aot.trendmicro.com</p></li>
<li><p>api-nabu.aot.trendmicro.com</p></li>
<li><p>osce14-p.activeupdate.trendmicro.co.jp</p></li>
<li><p>tmsm35-p.activeupdate.trendmicro.co.jp</p></li>
<li><p>activeupdate.trendmicro.co.jp</p></li>
<li><p>osce14-jp.icrc.trendmicro.com</p></li>
<li><p>osce14-0-jp.url.trendmicro.com</p></li>
<li><p>osce140-jp.fbs25.trendmicro.com</p></li>
<li><p>osce14-jp.gfrbridge.trendmicro.com</p></li>
<li><p>osce14-jp-census.trendmicro.com</p></li>
<li><p>osce14bak-jp-census.trendmicro.com</p></li>
<li><p>osce140-jp-f.trx.trendmicro.com</p></li>
<li><p>oscecmp140-jp-f.trx.trendmicro.com</p></li>
<li><p>osce140-jp-b.trx.trendmicro.com</p></li>
<li><p>mcs.trendmicro.com</p></li>
<li><p>www.trendmicro.com/vinfo/jp/threat-encyclopedia/malware/</p></li>
<li><p>files.trendmicro.com</p></li>
<li><p>aurd-test2.activeupdate.trendmicro.com</p></li>
<li><p>support-connector-api.manage.trendmicro.com</p></li>
<li><p>support-connector-service.manage.trendmicro.com</p></li>
<li><p>supportconnectorpacks.manage.trendmicro.com</p></li>
<li><p>rpcollectedthings.blob.core.windows.net</p></li>
</ul></td>
</tr>
<tr>
<td><p>Server &amp; Workload Protection Agents</p>


:::warning[Important]

<p>If you enable endpoint sensor detection and response, you must also add the Endpoint Sensor Agents exceptions.</p>


:::

</td>
<td><ul>
<li><p>All regions</p></li>
</ul></td>
<td><ul>
<li><p>workload.jp-1.cloudone.trendmicro.com</p></li>
<li><p>agents.workload.jp-1.cloudone.trendmicro.com</p></li>
<li><p>&lt;agents-001 through agents-010&gt;.workload.jp-1.cloudone.trendmicro.com</p></li>
<li><p>agent-comm.workload.jp-1.cloudone.trendmicro.com</p></li>
<li><p>dsmim.workload.jp-1.cloudone.trendmicro.com</p></li>
<li><p>relay.workload.jp-1.cloudone.trendmicro.com</p></li>
<li><p>xdr-resp-ioc.workload.jp-1.cloudone.trendmicro.com</p></li>
<li><p>files.trendmicro.com</p></li>
<li><p>iaus.activeupdate.trendmicro.com</p></li>
<li><p>iaus.trendmicro.com</p></li>
<li><p>ipv6-iaus.trendmicro.com</p></li>
<li><p>ipv6-iaus.activeupdate.trendmicro.com</p></li>
<li><p>dsaas1100-en-census.trendmicro.com</p></li>
<li><p>ds200-en.fbs25.trendmicro.com</p></li>
<li><p>ds200-jp.fbs25.trendmicro.com</p></li>
<li><p>dsaas.icrc.trendmicro.com</p></li>
<li><p>dsaas-en-f.trx.trendmicro.com</p></li>
<li><p>dsaas-en-b.trx.trendmicro.com</p></li>
<li><p>deepsecaas11-en.gfrbridge.trendmicro.com</p></li>
<li><p>dsaas.url.trendmicro.com</p></li>
<li><p>gateway.workload.jp-1.cloudone.trendmicro.com</p></li>
<li><p>gateway-control.workload.jp-1.cloudone.trendmicro.com</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Zero Trust Secure Access Exceptions**

:::warning[Important]
You must also specify the exceptions for the Endpoint Sensor Agents. These exceptions are found at Endpoint Sensor Agents.
:::

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>Region</p></th>
<th><p>Exceptions</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Access Module</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>prod.ztsaagent.trendmicro.com</p></li>
<li><p>upload.xdr.trendmicro.co.jp</p></li>
<li><p>event-jp.ztsaagent.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Authentication</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>agent-jp-rel.ztna.trendmicro.com</p></li>
<li><p>signin.v1.trendmicro.com</p></li>
<li><p>tm.login.trendmicro.com</p></li>
<li><p>iamservice.trendmicro.com</p></li>
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
</tr>
<tr>
<td><p>Internet Access Service</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>auth.ztsa-iag.trendmicro.com</p></li>
<li><p>pac.jp.ztsa-iag.trendmicro.com</p></li>
<li><p>auth.jp.ztsa-iag.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Internet Access Cloud Gateway</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>proxy.ztsa-iag.trendmicro.com</p></li>
<li><p>proxy.jp.ztsa-iag.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Internet Access On-Premises Gateway with Smart Protection Network: Off</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
<li><p>api.ap-northeast-1.jp.ddcloud.trendmicro.com</p></li>
<li><p>iwsh30-en.url.trendmicro.com</p></li>
<li><p>api.crs.trendmicro.com</p></li>
<li><p>iwsh300-en.census.trendmicro.com</p></li>
<li><p>iwsaas30-en-f.trx.trendmicro.com</p></li>
<li><p>iwsh30-p.activeupdate.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Internet Access On-Premises Gateway with Smart Protection Network: On</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
<li><p>api.ap-northeast-1.jp.ddcloud.trendmicro.com</p></li>
<li><p>ctapi.trendmicro.com</p></li>
<li><p>iwsh30-p.activeupdate.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Private Access Connector</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>agent-jp-rel.ztna.trendmicro.com</p></li>
<li><p>saseztnaprodjpsagen2.blob.core.windows.net</p></li>
<li><p>saseztnaprodjpsa.blob.core.windows.net</p></li>
<li><p>sase-ztna-prod-jp-iothub-cntevt.azure-devices.net</p></li>
<li><p>speedtest.jp.ztna.trendmicro.com</p></li>
<li><p>ztnaextacr.azurecr.io</p></li>
<li><p>0.pool.ntp.org</p></li>
<li><p>1.pool.ntp.org</p></li>
<li><p>2.pool.ntp.org</p></li>
<li><p>3.pool.ntp.org</p></li>
</ul></td>
</tr>
<tr>
<td rowspan="8"><p>Private Access Connector</p>
<p>(if not using the Trend Cloud Proxy service)</p></td>
<td><p>Australia</p></td>
<td><ul>
<li><p>20.5.69.128/28</p></li>
</ul></td>
</tr>
<tr>
<td><p>Europe</p></td>
<td><ul>
<li><p>20.4.51.32/28</p></li>
</ul></td>
</tr>
<tr>
<td><p>India</p></td>
<td><ul>
<li><p>20.219.254.160/28</p></li>
</ul></td>
</tr>
<tr>
<td><p>Israel</p></td>
<td><ul>
<li><p>20.217.194.0/28</p></li>
</ul></td>
</tr>
<tr>
<td><p>Japan</p></td>
<td><ul>
<li><p>52.140.246.128/28</p></li>
</ul></td>
</tr>
<tr>
<td><p>Singapore</p></td>
<td><ul>
<li><p>52.187.118.64/28</p></li>
</ul></td>
</tr>
<tr>
<td><p>United States</p></td>
<td><ul>
<li><p>20.7.52.240/28</p></li>
</ul></td>
</tr>
<tr>
<td><p>Brazil</p></td>
<td><ul>
<li><p>4.228.193.144/28</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Service Gateway Exceptions**

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>Region</p></th>
<th><p>Exceptions</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Firmware</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>sgi-tunneling.jp.xdr.trendmicro.co.jp</p></li>
<li><p>sgi-iot.xdr.trendmicro.co.jp</p></li>
<li><p>api.xdr.trendmicro.co.jp</p></li>
<li><p>upload.xdr.trendmicro.co.jp</p></li>
</ul></td>
</tr>
<tr>
<td><p>Smart Protection Network proxy: On</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>ctapi.trendmicro.com</p></li>
<li><p>sg-tmsps10-p.activeupdate.trendmicro.com</p></li>
<li><p>activeupdate.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Smart Protection Network proxy: Off</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>sg-tmsps10-en.url.trendmicro.com</p></li>
<li><p>sg-tmsps10-en-wis.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-census.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-domaincensus.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>sg-tmsps10-en.gfrbridge.trendmicro.com</p></li>
<li><p>sg-tmsps10-p.activeupdate.trendmicro.com</p></li>
<li><p>sg-tmsps10-en-backup.url.trendmicro.com</p></li>
<li><p>activeupdate.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Local ActiveUpdate</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><p>Refer to ActiveUpdate session of each product/agent</p></td>
</tr>
</tbody>
</table>

**Trend Vision One Container Security**

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>Region</p></th>
<th><p>Exceptions</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Artifact Scanner</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>upload.artifactscan.jp-1.cloudone.trendmicro.com</p></li>
<li><p>report.artifactscan.jp-1.cloudone.trendmicro.com</p></li>
<li><p>artifactscan.jp-1.cloudone.trendmicro.com</p></li>
<li><p>cli.artifactscan.cloudone.trendmicro.com</p></li>
<li><p>antimalware.jp-1.cloudone.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Runtime Security</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>container.jp-1.cloudone.trendmicro.com</p></li>
<li><p>iot.container.jp-1.cloudone.trendmicro.com</p></li>
<li><p>vcs-iot-jp.xdr.trendmicro.com</p></li>
<li><p>vcs-storage-jp.xdr.trendmicro.com</p>


:::note

<pre class="codeblock"><code>vcs-storage-jp.xdr.trendmicro.com</code></pre>
is used by two services: Runtime Security and Inventory.


:::

</li>
</ul></td>
</tr>
<tr>
<td><p>Runtime Malware Scanning</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>activeupdate.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Inventory</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>container.jp-1.cloudone.trendmicro.com</p></li>
<li><p>vcs-storage-jp.xdr.trendmicro.com</p>


:::note

<pre class="codeblock"><code>vcs-storage-jp.xdr.trendmicro.com</code></pre>
is used by two services: Runtime Security and Inventory.


:::

</li>
</ul></td>
</tr>
<tr>
<td><p>Telemetry Collection</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>telemetry.deepsecurity.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Default Container Image Access</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>public.ecr.aws</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Intrusion Prevention Configuration Exceptions**

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>Region</p></th>
<th><p>Exceptions</p></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="6"><p>Intrusion Prevention Configuration</p></td>
<td><p>Australia</p></td>
<td><ul>
<li><p>a1mmnfkx71i3sj-ats.iot.ap-southeast-2.amazonaws.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Europe</p></td>
<td><ul>
<li><p>a1mmnfkx71i3sj-ats.iot.eu-central-1.amazonaws.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>India</p></td>
<td><ul>
<li><p>a1mmnfkx71i3sj-ats.iot.ap-south-1.amazonaws.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Japan</p></td>
<td><ul>
<li><p>a1mmnfkx71i3sj-ats.iot.ap-northeast-1.amazonaws.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Singapore</p></td>
<td><ul>
<li><p>a1mmnfkx71i3sj-ats.iot.ap-southeast-1.amazonaws.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>United States</p></td>
<td><ul>
<li><p>a1mmnfkx71i3sj-ats.iot.us-east-1.amazonaws.com</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Network Inventory**

<table>
<colgroup>
<col style="width: 23%" />
<col style="width: 15%" />
<col style="width: 62%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>Region</p></th>
<th><p>Exceptions</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Virtual Network Sensor</p></td>
<td><p>Japan</p></td>
<td><ul>
<li><p>xns-p.activeupdate.trendmicro.com</p></li>
<li><p>api.jp.xdr.nacloud.trendmicro.com</p></li>
<li><p>xns-en.fbs25.trendmicro.com</p></li>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
<li><p>api-ni.xdr.trendmicro.co.jp</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
</ul>
<p>For customers with "Send to Sandbox" enabled:</p>
<ul>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>api.ddcloud.trendmicro.com</p></li>
<li><p>api.in.ddcloud.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.7 or later with Smart Protection Network Proxy: On</p></td>
<td><p>Japan</p></td>
<td><ul>
<li><p>api-ni.xdr.trendmicro.com</p></li>
<li><p>portal-01.dddxdr.trendmicro.co.jp</p></li>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
<li><p>api.jp.xdr.nacloud.trendmicro.com</p></li>
<li><p>api.jp.ddcloud.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>ddaaas.trendmicro.com</p></li>
<li><p>ddi67-p.activeupdate.trendmicro.com/activeupdate/japan</p></li>
<li><p>ddi6-7-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi67-jp-f.trx.trendmicro.com</p></li>
<li><p>intelliconnect.trendmicro.com</p></li>
<li><p>ddi67.retroscan.trendmicro.com</p></li>
<li><p>gp.fbs.trendmicro.com</p></li>
<li><p>sg-tmsps10-en.url.trendmicro.com</p></li>
<li><p>sg-tmsps10-en-wis.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-census.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-domaincensus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.7 or later with Smart Protection Network Proxy: Off</p></td>
<td><p>Japan</p></td>
<td><ul>
<li><p>api-ni.xdr.trendmicro.com</p></li>
<li><p>portal-01.dddxdr.trendmicro.co.jp</p></li>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
<li><p>api.jp.xdr.nacloud.trendmicro.com</p></li>
<li><p>api.jp.ddcloud.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>ddaaas.trendmicro.com</p></li>
<li><p>ddi67-p.activeupdate.trendmicro.com/activeupdate/japan</p></li>
<li><p>ddi6-7-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi67-jp-f.trx.trendmicro.com</p></li>
<li><p>intelliconnect.trendmicro.com</p></li>
<li><p>ddi67.retroscan.trendmicro.com</p></li>
<li><p>gp.fbs.trendmicro.com</p></li>
<li><p>ddi6-7-jp.url.trendmicro.com</p></li>
<li><p>ddi6-7-jp-wis.trendmicro.com</p></li>
<li><p>ddi670-jp-census.trendmicro.com</p></li>
<li><p>ddi670-jp-domaincensus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.6 or earlier with Smart Protection Network Proxy: On</p></td>
<td><p>Japan</p></td>
<td><ul>
<li><p>api-ni.xdr.trendmicro.com</p></li>
<li><p>portal-01.dddxdr.trendmicro.co.jp</p></li>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
<li><p>api.jp.xdr.nacloud.trendmicro.com</p></li>
<li><p>api.jp.ddcloud.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>ddaaas.trendmicro.com</p></li>
<li><p>ddi66-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi65-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi62-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi60-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi58-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi57-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi6-6-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi6-5-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi6-2-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi6-0-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi5-8-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi5-7-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi66-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi65-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi62-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi60-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi58-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi57-jp-f.trx.trendmicro.com</p></li>
<li><p>intelliconnect.trendmicro.com</p></li>
<li><p>ddi66jp.retroscan.trendmicro.com</p></li>
<li><p>ddi65jp-retroscan.trendmicro.com</p></li>
<li><p>ddi62jp-retroscan.trendmicro.com</p></li>
<li><p>ddi60jp-retroscan.trendmicro.com</p></li>
<li><p>ddi58jp-retroscan.trendmicro.com</p></li>
<li><p>ddi57jp-retroscan.trendmicro.com</p></li>
<li><p>ddi660-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi650-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi620-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi600-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi580-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi570-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi660-en.fbs25.trendmicro.com</p></li>
<li><p>ddi650-en.fbs25.trendmicro.com</p></li>
<li><p>ddi620-en.fbs25.trendmicro.com</p></li>
<li><p>ddi600-en.fbs25.trendmicro.com</p></li>
<li><p>ddi580-en.fbs25.trendmicro.com</p></li>
<li><p>ddi570-en.fbs25.trendmicro.com</p></li>
<li><p>sg-tmsps10-en.url.trendmicro.com</p></li>
<li><p>sg-tmsps10-en-wis.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-census.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-domaincensus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.6 or earlier with Smart Protection Network Proxy: Off</p></td>
<td><p>Japan</p></td>
<td><ul>
<li><p>api-ni.xdr.trendmicro.com</p></li>
<li><p>portal-01.dddxdr.trendmicro.co.jp</p></li>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
<li><p>api.jp.xdr.nacloud.trendmicro.com</p></li>
<li><p>api.jp.ddcloud.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>ddaaas.trendmicro.com</p></li>
<li><p>ddi66-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi65-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi62-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi60-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi58-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi57-p.activeupdate.trendmicro.co.jp/activeupdate/japan</p></li>
<li><p>ddi660-jp-domaincensus.trendmicro.com</p></li>
<li><p>ddi650-jp-domaincensus.trendmicro.com</p></li>
<li><p>ddi620-jp-domaincensus.trendmicro.com</p></li>
<li><p>ddi600-jp-domaincensus.trendmicro.com</p></li>
<li><p>ddi580-jp-domaincensus.trendmicro.com</p></li>
<li><p>ddi570-jp-domaincensus.trendmicro.com</p></li>
<li><p>ddi660-jp-census.trendmicro.com</p></li>
<li><p>ddi650-jp-census.trendmicro.com</p></li>
<li><p>ddi620-jp-census.trendmicro.com</p></li>
<li><p>ddi600-jp-census.trendmicro.com</p></li>
<li><p>ddi580-jp-census.trendmicro.com</p></li>
<li><p>ddi570-jp-census.trendmicro.com</p></li>
<li><p>ddi6-6-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi6-5-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi6-2-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi6-0-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi5-8-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi5-7-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi66-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi65-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi62-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi60-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi58-jp-f.trx.trendmicro.com</p></li>
<li><p>ddi57-jp-f.trx.trendmicro.com</p></li>
<li><p>intelliconnect.trendmicro.com</p></li>
<li><p>ddi66jp.retroscan.trendmicro.com</p></li>
<li><p>ddi65jp-retroscan.trendmicro.com</p></li>
<li><p>ddi62jp-retroscan.trendmicro.com</p></li>
<li><p>ddi60jp-retroscan.trendmicro.com</p></li>
<li><p>ddi58jp-retroscan.trendmicro.com</p></li>
<li><p>ddi57jp-retroscan.trendmicro.com</p></li>
<li><p>ddi660-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi650-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi620-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi600-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi580-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi570-jp.fbs25.trendmicro.com</p></li>
<li><p>ddi660-en.fbs25.trendmicro.com</p></li>
<li><p>ddi650-en.fbs25.trendmicro.com</p></li>
<li><p>ddi620-en.fbs25.trendmicro.com</p></li>
<li><p>ddi600-en.fbs25.trendmicro.com</p></li>
<li><p>ddi580-en.fbs25.trendmicro.com</p></li>
<li><p>ddi570-en.fbs25.trendmicro.com</p></li>
<li><p>ddi6-6-jp-wis.trendmicro.com</p></li>
<li><p>ddi6-5-jp-wis.trendmicro.com</p></li>
<li><p>ddi6-2-jp-wis.trendmicro.com</p></li>
<li><p>ddi6-0-jp-wis.trendmicro.com</p></li>
<li><p>ddi5-8-jp-wis.trendmicro.com</p></li>
<li><p>ddi5-7-jp-wis.trendmicro.com</p></li>
<li><p>ddi6-6-jp.url.trendmicro.com</p></li>
<li><p>ddi6-5-jp.url.trendmicro.com</p></li>
<li><p>ddi6-2-jp.url.trendmicro.com</p></li>
<li><p>ddi6-0-jp.url.trendmicro.com</p></li>
<li><p>ddi5-8-jp.url.trendmicro.com</p></li>
<li><p>ddi5-7-jp.url.trendmicro.com</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Trend Vision One Agentless Vulnerability & Threat Detection Exceptions**

<table style="width:99%;">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><p>Service</p></th>
<th><p>Region</p></th>
<th>Exceptions</th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Agentless Vulnerability and Threat Detection</p></td>
<td><p>Japan</p></td>
<td><ul>
<li><p>sentry.jp-1.cloudone.trendmicro.com</p></li>
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
</ul></td>
</tr>
</tbody>
</table>
