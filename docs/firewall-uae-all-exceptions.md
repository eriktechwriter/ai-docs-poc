---
slug: trend-vision-one-firewall-uae-all-exceptions
title: 'Firewall exceptions: Middle East and Africa - all exceptions'
---

The following firewall exceptions apply to networks with:

- Service Gateway installed and cloud service extension turned off

- No Service Gateway installed

**Trend Vision One Exceptions**

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
<td><p>Authentication</p></td>
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
<li><p>UAE</p></li>
</ul></td>
<td><ul>
<li><p>assessment-mea.mgcp.trendmicro.com</p></li>
<li><p>release-us1.mgcp.trendmicro.com</p></li>
<li><p>cti-us1.mgcp.trendmicro.com</p></li>
<li><p>api-mea.xbc.trendmicro.com</p></li>
<li><p>tgw-mea.mgcp.trendmicro.com</p></li>
<li><p>support-connector-api.manage.trendmicro.com</p></li>
<li><p>supportconnectorpacks.manage.trendmicro.com</p></li>
<li><p>rpcollectedthings.manage.trendmicro.com</p></li>
<li><p>cloudendpoint-mea.mgcp.trendmicro.com</p></li>
<li><p>er-ws-ase1.xdr.trendmicro.com</p></li>
<li><p>era-mea.xdr.trendmicro.com</p></li>
<li><p>endpointpolicy-cdn-mea.xbc.trendmicro.com</p></li>
<li><p>files.trendmicro.com</p></li>
<li><p>xlogr-mea.xdr.trendmicro.com</p></li>
<li><p>api.mea.xdr.trendmicro.com</p></li>
<li><p>api-cert.mea.xdr.trendmicro.com</p></li>
<li><p>upload.mea.xdr.trendmicro.com</p></li>
<li><p>wsc-mea.xbc.trendmicro.com</p></li>
<li><p>files.trendmicro.com</p></li>
<li><p>ipv6-iaus.trendmicro.com</p></li>
<li><p>ipv6-iaus.activeupdate.trendmicro.com</p></li>
<li><p>iaus.activeupdate.trendmicro.com</p></li>
<li><p>iaus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Standard Endpoint Protection Agents</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>&lt;Apex One console_DNS&gt;.manage.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>asm01-nabu-prod.aot.trendmicro.com</p></li>
<li><p>api-nabu.aot.trendmicro.com</p></li>
<li><p>osce14-p.activeupdate.trendmicro.com</p></li>
<li><p>tmsm35-p.activeupdate.trendmicro.com</p></li>
<li><p>activeupdate.trendmicro.com</p></li>
<li><p>osce14.icrc.trendmicro.com</p></li>
<li><p>osce14-0-en.url.trendmicro.com</p></li>
<li><p>osce140-en.fbs25.trendmicro.com</p></li>
<li><p>osce14-en.gfrbridge.trendmicro.com</p></li>
<li><p>osce14-en-census.trendmicro.com</p></li>
<li><p>osce14bak-en-census.trendmicro.com</p></li>
<li><p>osce140-en-f.trx.trendmicro.com</p></li>
<li><p>oscecmp140-en-f.trx.trendmicro.com</p></li>
<li><p>osce140-en-b.trx.trendmicro.com</p></li>
<li><p>mcs.trendmicro.com</p></li>
<li><p>www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/</p></li>
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
<li><p>UAE</p></li>
</ul></td>
<td><ul>
<li><p>workload.ae-1.cloudone.trendmicro.com</p></li>
<li><p>agents.workload.ae-1.cloudone.trendmicro.com</p></li>
<li><p>&lt;agents-001 through agents-010&gt;.workload.ae-1.cloudone.trendmicro.com</p></li>
<li><p>agent-comm.workload.ae-1.cloudone.trendmicro.com</p></li>
<li><p>dsmim.workload.ae-1.cloudone.trendmicro.com</p></li>
<li><p>relay.workload.ae-1.cloudone.trendmicro.com</p></li>
<li><p>xdr-resp-ioc.workload.ae-1.cloudone.trendmicro.com</p></li>
<li><p>gateway.workload.ae-1.cloudone.trendmicro.com</p></li>
<li><p>gateway-control.workload.ae-1.cloudone.trendmicro.com</p></li>
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
<col style="width: 24%" />
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
<td><p>Authentication</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>agent-mea-rel.ztna.trendmicro.com</p></li>
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
<td rowspan="2"><p>Internet Access Service</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>auth.ztsa-iag.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>UAE</p></li>
</ul></td>
<td><ul>
<li><p>pac.mea.ztsa-iag.trendmicro.com</p></li>
<li><p>auth.mea.ztsa-iag.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td rowspan="2"><p>Internet Access Cloud Gateway</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>proxy.ztsa-iag.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>UAE</p></li>
</ul></td>
<td><ul>
<li><p>proxy.mea.ztsa-iag.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td rowspan="6"><p>Internet Access On-premises Gateway with SPN proxy: Off</p></td>
<td><ul>
<li><p>UAE (with Log Receiver)</p></li>
</ul></td>
<td><ul>
<li><p>xlogr-mea.xdr.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with Sandbox Analysis)</p></li>
</ul></td>
<td><ul>
<li><p>api.me-central-1.uae.ddcloud.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with Web Reputation Service)</p></li>
</ul></td>
<td><ul>
<li><p>iwsh30-en.url.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with Cloud Reputation Service)</p></li>
</ul></td>
<td><ul>
<li><p>api-eu-central-1.crs.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with Predictive Machine Learning)</p></li>
</ul></td>
<td><ul>
<li><p>iwsh300-en.census.trendmicro.com</p></li>
<li><p>iwsaas30-en-f.trx.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with ActiveUpdate)</p></li>
</ul></td>
<td><ul>
<li><p>iwsh30-p.activeupdate.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td rowspan="6"><p>Internet Access On-premises Gateway with SPN proxy: On</p></td>
<td><ul>
<li><p>UAE (with Log Receiver)</p></li>
</ul></td>
<td><ul>
<li><p>xlogr-mea.xdr.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with Sandbox Analysis)</p></li>
</ul></td>
<td><ul>
<li><p>api.me-central-1.uae.ddcloud.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with Web Reputation Service)</p></li>
</ul></td>
<td><ul>
<li><p>ctapi.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with Cloud Reputation Service)</p></li>
</ul></td>
<td><ul>
<li><p>ctapi.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with Predictive Machine Learning)</p></li>
</ul></td>
<td><ul>
<li><p>ctapi.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li><p>All (with ActiveUpdate)</p></li>
</ul></td>
<td><ul>
<li><p>iwsh30-p.activeupdate.trendmicro.com</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Forensics and Analysis**

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
<td><p>IR Tool Download for Agent</p></td>
<td><ul>
<li><p>UAE</p></li>
</ul></td>
<td><ul>
<li><p>resources.prod-me-central-1.irs.trendmicro.com</p></li>
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
<th><p>Service / Agent</p></th>
<th><p>Region</p></th>
<th><p>Exceptions</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Virtual Network Sensor</p></td>
<td><ul>
<li><p>UAE</p></li>
</ul></td>
<td><ul>
<li><p>xns-p.activeupdate.trendmicro.com</p></li>
<li><p>api.mea.xdr.nacloud.trendmicro.com</p></li>
<li><p>xns-en.fbs25.trendmicro.com</p></li>
<li><p>xlogr-mea.xdr.trendmicro.com</p></li>
<li><p>api-ni-mea.xdr.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
</ul>
<p>For customers with "Send to Sandbox" enabled:</p>
<ul>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>api.ddcloud.trendmicro.com</p></li>
<li><p>api.me-central-1.uae.ddcloud.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.7 or later with Smart Protection Network Proxy: On</p></td>
<td><ul>
<li>All</li>
</ul></td>
<td><ul>
<li><p>api-ni-mea.xdr.trendmicro.com</p></li>
<li><p>xlogr-ue1.xdr.trendmicro.com</p></li>
<li><p>api.mea.xdr.nacloud.trendmicro.com</p></li>
<li><p>api.mea.ddcloud.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>ddaaas.trendmicro.com</p></li>
<li><p>ddi67-p.activeupdate.trendmicro.com/activeupdate/japan</p></li>
<li><p>ddi6-7-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi67-jp-f.trx.trendmicro.com</p></li>
<li><p>intelliconnect.trendmicro.com</p></li>
<li><p>ddi67.retroscan.trendmicro.com</p></li>
<li><p>gd.fbs.trendmicro.com</p></li>
<li><p>sg-tmsps10-en.url.trendmicro.com</p></li>
<li><p>sg-tmsps10-en-wis.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-census.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-domaincensus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.7 or later with Smart Protection Network Proxy: Off</p></td>
<td><ul>
<li>All</li>
</ul></td>
<td><ul>
<li><p>api-ni-mea.xdr.trendmicro.com</p></li>
<li><p>xlogr-ue1.xdr.trendmicro.com</p></li>
<li><p>api.mea.xdr.nacloud.trendmicro.com</p></li>
<li><p>api.mea.ddcloud.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>ddaaas.trendmicro.com</p></li>
<li><p>ddi67-p.activeupdate.trendmicro.com/activeupdate/japan</p></li>
<li><p>ddi6-7-jp-t0.url.trendmicro.com</p></li>
<li><p>ddi67-jp-f.trx.trendmicro.com</p></li>
<li><p>intelliconnect.trendmicro.com</p></li>
<li><p>ddi67.retroscan.trendmicro.com</p></li>
<li><p>gd.fbs.trendmicro.com</p></li>
<li><p>ddi6-7-jp.url.trendmicro.com</p></li>
<li><p>ddi6-7-jp-wis.trendmicro.com</p></li>
<li><p>ddi670-jp-census.trendmicro.com</p></li>
<li><p>ddi670-jp-domaincensus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.6 or earlier with Smart Protection Network Proxy: On</p></td>
<td><ul>
<li>All</li>
</ul></td>
<td><ul>
<li><p>api-ni-mea.xdr.trendmicro.com</p></li>
<li><p>xlogr-ase2.xdr.trendmicro.com</p></li>
<li><p>api.mea.xdr.nacloud.trendmicro.com</p></li>
<li><p>api.en.ddcloud.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>ddaaas.trendmicro.com</p></li>
<li><p>ddi66-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi65-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi62-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi60-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi58-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi57-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi6-6-en-t0.url.trendmicro.com</p></li>
<li><p>ddi6-5-en-t0.url.trendmicro.com</p></li>
<li><p>ddi6-2-en-t0.url.trendmicro.com</p></li>
<li><p>ddi6-0-en-t0.url.trendmicro.com</p></li>
<li><p>ddi5-8-en-t0.url.trendmicro.com</p></li>
<li><p>ddi5-7-en-t0.url.trendmicro.com</p></li>
<li><p>ddi66-en-f.trx.trendmicro.com</p></li>
<li><p>ddi65-en-f.trx.trendmicro.com</p></li>
<li><p>ddi62-en-f.trx.trendmicro.com</p></li>
<li><p>ddi60-en-f.trx.trendmicro.com</p></li>
<li><p>ddi58-en-f.trx.trendmicro.com</p></li>
<li><p>ddi57-en-f.trx.trendmicro.com</p></li>
<li><p>intelliconnect.trendmicro.com</p></li>
<li><p>ddi66.retroscan.trendmicro.com</p></li>
<li><p>ddi65-retroscan.trendmicro.com</p></li>
<li><p>ddi62-retroscan.trendmicro.com</p></li>
<li><p>ddi60-retroscan.trendmicro.com</p></li>
<li><p>ddi58-retroscan.trendmicro.com</p></li>
<li><p>ddi57-retroscan.trendmicro.com</p></li>
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
<td><ul>
<li>All</li>
</ul></td>
<td><ul>
<li><p>api-ni-mea.xdr.trendmicro.co</p></li>
<li><p>xlogr-ase2.xdr.trendmicro.com</p></li>
<li><p>api.mea.xdr.nacloud.trendmicro.com</p></li>
<li><p>api.en.ddcloud.trendmicro.com</p></li>
<li><p>grid-global.trendmicro.com</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>rest.mars.trendmicro.com</p></li>
<li><p>ddaaas.trendmicro.com</p></li>
<li><p>ddi66-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi65-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi62-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi60-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi58-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi57-p.activeupdate.trendmicro.com/activeupdate</p></li>
<li><p>ddi660-en-domaincensus.trendmicro.com</p></li>
<li><p>ddi650-en-domaincensus.trendmicro.com</p></li>
<li><p>ddi620-en-domaincensus.trendmicro.com</p></li>
<li><p>ddi600-en-domaincensus.trendmicro.com</p></li>
<li><p>ddi580-en-domaincensus.trendmicro.com</p></li>
<li><p>ddi570-en-domaincensus.trendmicro.com</p></li>
<li><p>ddi660-en-census.trendmicro.com</p></li>
<li><p>ddi650-en-census.trendmicro.com</p></li>
<li><p>ddi620-en-census.trendmicro.com</p></li>
<li><p>ddi600-en-census.trendmicro.com</p></li>
<li><p>ddi580-en-census.trendmicro.com</p></li>
<li><p>ddi570-en-census.trendmicro.com</p></li>
<li><p>ddi6-6-en-t0.url.trendmicro.com</p></li>
<li><p>ddi6-5-en-t0.url.trendmicro.com</p></li>
<li><p>ddi6-2-en-t0.url.trendmicro.com</p></li>
<li><p>ddi6-0-en-t0.url.trendmicro.com</p></li>
<li><p>ddi5-8-en-t0.url.trendmicro.com</p></li>
<li><p>ddi5-7-en-t0.url.trendmicro.com</p></li>
<li><p>ddi66-en-f.trx.trendmicro.com</p></li>
<li><p>ddi65-en-f.trx.trendmicro.com</p></li>
<li><p>ddi62-en-f.trx.trendmicro.com</p></li>
<li><p>ddi60-en-f.trx.trendmicro.com</p></li>
<li><p>ddi58-en-f.trx.trendmicro.com</p></li>
<li><p>ddi57-en-f.trx.trendmicro.com</p></li>
<li><p>intelliconnect.trendmicro.com</p></li>
<li><p>ddi66.retroscan.trendmicro.com</p></li>
<li><p>ddi65-retroscan.trendmicro.com</p></li>
<li><p>ddi62-retroscan.trendmicro.com</p></li>
<li><p>ddi60-retroscan.trendmicro.com</p></li>
<li><p>ddi58-retroscan.trendmicro.com</p></li>
<li><p>ddi57-retroscan.trendmicro.com</p></li>
<li><p>ddi660-en.fbs25.trendmicro.com</p></li>
<li><p>ddi650-en.fbs25.trendmicro.com</p></li>
<li><p>ddi620-en.fbs25.trendmicro.com</p></li>
<li><p>ddi600-en.fbs25.trendmicro.com</p></li>
<li><p>ddi580-en.fbs25.trendmicro.com</p></li>
<li><p>ddi570-en.fbs25.trendmicro.com</p></li>
<li><p>ddi6-6-en-wis.trendmicro.com</p></li>
<li><p>ddi6-5-en-wis.trendmicro.com</p></li>
<li><p>ddi6-2-en-wis.trendmicro.com</p></li>
<li><p>ddi6-0-en-wis.trendmicro.com</p></li>
<li><p>ddi5-8-en-wis.trendmicro.com</p></li>
<li><p>ddi5-7-en-wis.trendmicro.com</p></li>
<li><p>ddi6-6-en.url.trendmicro.com</p></li>
<li><p>ddi6-5-en.url.trendmicro.com</p></li>
<li><p>ddi6-2-en.url.trendmicro.com</p></li>
<li><p>ddi6-0-en.url.trendmicro.com</p></li>
<li><p>ddi5-8-en.url.trendmicro.com</p></li>
<li><p>ddi5-7-en.url.trendmicro.com</p></li>
</ul></td>
</tr>
</tbody>
</table>

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
<td><p>Log Receiver</p></td>
<td><ul>
<li><p>UAE</p></li>
</ul></td>
<td><ul>
<li><p>xlogr-mea.xdr.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Sandbox Analysis</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>api.me-central-1.uae.ddcloud.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Web Reputation Service</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>iwsh30-en.url.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Cloud Reputation Service</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>api-eu-central-1.crs.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Predictive Machine Learning</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>iwsh300-en.census.trendmicro.com</p></li>
<li><p>iwsaas30-en-f.trx.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>ActiveUpdate server</p></td>
<td><ul>
<li><p>All</p></li>
</ul></td>
<td><ul>
<li><p>iwsh30-p.activeupdate.trendmicro.com</p></li>
</ul></td>
</tr>
</tbody>
</table>
