---
slug: firewall-japan-cloud-service
title: 'Firewall exceptions: Japan - cloud service extension'
---

The following firewall exceptions apply to networks with a Service Gateway installed and cloud service extension turned on.

:::warning[Important]
The cloud service extension reduces firewall exceptions but causes network latency.
:::

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
<li><p>xlogr-ane1.xdr.trendmicro.com</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Zero Trust Secure Access Exceptions**

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
<td rowspan="7"><p>Private Access Connector</p></td>
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
<li><p>sgi-iot.xdr.trendmicro.co.jp</p></li>
<li><p>api.xdr.trendmicro.co.jp</p></li>
<li><p>jp.services.trendmicro.com</p></li>
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
<li><p>api-ni.xdr.trendmicro.com.jp</p></li>
<li><p>licenseupdate.trendmicro.com</p></li>
<li><p>api.ddcloud.trendmicro.com</p></li>
<li><p>api.jp.ddcloud.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.7 or later with Smart Protection Network Proxy: On</p></td>
<td><p>Japan</p></td>
<td><ul>
<li><p>sg-tmsps10-en.url.trendmicro.com</p></li>
<li><p>sg-tmsps10-en-wis.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-census.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-domaincensus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.7 or later with Smart Protection Network Proxy: Off</p></td>
<td><p>Japan</p></td>
<td><p>Refer to Service Gateway Exceptions</p></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.6 or earlier with Smart Protection Network Proxy: On</p></td>
<td><p>Japan</p></td>
<td><ul>
<li><p>sg-tmsps10-en.url.trendmicro.com</p></li>
<li><p>sg-tmsps10-en-wis.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-census.trendmicro.com</p></li>
<li><p>sg-tmsps100-en-domaincensus.trendmicro.com</p></li>
</ul></td>
</tr>
<tr>
<td><p>Deep Discovery Inspector version 6.6 or earlier with Smart Protection Network Proxy: Off</p></td>
<td><p>Japan</p></td>
<td><p>Refer to Service Gateway Exceptions</p></td>
</tr>
</tbody>
</table>
