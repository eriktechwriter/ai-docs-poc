---
slug: trend-vision-one-firewall-uae-cloud-service
title: 'Firewall exceptions: Middle East and Africa - cloud service extension'
---

The following firewall exceptions apply to networks with a Service Gateway installed and cloud service extension turned on.

:::warning[Important]
The cloud service extension reduces firewall exceptions but causes network latency.
:::

**Zero Trust Secure Access Exceptions**

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
<td rowspan="3"><p>Authentication</p></td>
<td><ul>
<li>All (without Foundation Services update)</li>
</ul></td>
<td><ul>
<li><p>tm.login.trendmicro.com</p></li>
<li><p>iamservice.trendmicro.com</p></li>
<li><p>www.gstatic.com (Google reCAPTCHA)</p></li>
<li><p>www.recaptcha.net (Google reCAPTCHA)</p></li>
<li><p>Other custom IDP services</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li>All (with Foundation Services update)</li>
</ul></td>
<td><ul>
<li><p>signin.v1.trendmicro.com</p></li>
<li><p>www.gstatic.com (Google reCAPTCHA)</p></li>
<li><p>www.recaptcha.net (Google reCAPTCHA)</p></li>
<li><p>Other custom IDP services</p></li>
</ul></td>
</tr>
<tr>
<td><ul>
<li>UAE</li>
</ul></td>
<td><ul>
<li><p>agent-mea-rel.ztna.trendmicro.com</p></li>
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
</tbody>
</table>
