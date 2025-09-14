---
slug: trend-vision-one-simulations
title: Simulations
---

Use attack simulations to find out what Trend Vision One can uncover for you.

Running simulations is a proactive way to assess and improve your security posture. By simulating different types of attacks in a controlled manner, you can practice using Workbench and Observed Attack Techniques to analyze cyber threats.

Trend Vision One supports four main categories of simulations:

- **Endpoint attack simulations**: Simulate attacks on endpoint devices
- **Network attack simulations**: Simulate attacks targeting your network
- **Email attack simulations**: Simulate phishing attempts and other email-based threats
- **Cloud attack simulations**: Simulate threats to cloud workloads and other email-based threats

Depending on which simulation types you want to run, you may need to deploy additional sensors or configure specific policies in the related products. Use the following table to identify the configuration requirements for each simulation type:

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Simulation type</p></th>
<th><p>Configuration requirement</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Endpoint attack</p></td>
<td><ul>
<li><p><a href="trend-vision-one-running-simulations-endpoints-xdr">Deploy the Trend Vision One Endpoint Security agent and enable Endpoint detection and response</a></p></li>
<li><p><a href="trend-vision-one-simulations-endpoint-sensor">Deploy the Trend Vision One Endpoint Security agent to connected endpoint security products and enable Endpoint detection and response</a></p></li>
<li><p><a href="trend-vision-one-simulations-deep-security-agents">Enable Activity Monitoring on Deep Security Agents</a></p></li>
</ul></td>
</tr>
<tr>
<td><p>Network attack</p></td>
<td><ul>
<li><p><a href="trend-vision-one-network-sensor-attack-simulation">Deploy a Network Sensor appliance and prepare endpoint targets</a></p></li>
<li><p><a href="trend-vision-one-tippingpoint-network-attack-sim">Configure and connect a TippingPoint Security Management System</a></p></li>
</ul></td>
</tr>
</tbody>
</table>

**Related information**

- [Running simulations with Trend Vision One Endpoint Security agents](running-simulations-endpoints-xdr.md "Run attack simulation scripts on your endpoints with the Trend Vision One Endpoint Security agent.")
- [Running simulations on endpoints manged by connected endpoint protection products](simulations-endpoint-sensor.md "Run simulations with Trend Vision One Endpoint Security agents on endpoints managed by connected Trend Micro Apex One as a Service and Trend Cloud One - Endpoint & Workload Security instances.")
- [Running simulations on Deep Security Agents endpoints with Activity Monitoring](simulations-deep-security-agents.md "Run simulations on connected on Deep Security Agents with Activity Monitoring enabled, and view the results in Trend Vision One.")
- [Running the Network Sensor attack simulation](network-sensor-attack-simulation.md)
- [Running the TippingPoint network attack simulation](tippingpoint-network-attack-sim.md "Update the Digital Vaccine package on a TippingPoint Security Management System and run a simulated network attack in Trend Vision One.")
