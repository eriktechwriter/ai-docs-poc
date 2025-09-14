---
slug: trend-vision-one-runtime-proxy-priority-behavior
title: Runtime Proxy priority behavior
---

Review how the Runtime Proxy policies and endpoint agents utilize priority to determine how to connect to Trend Vision One.

How an endpoint agent connects to Trend Vision One depends on a combination of priority and availability. Endpoints connect to whichever proxy is both available and has a higher priority.

Availability is determined through probing. Agents probe for a connection every 10 minutes. Once a successful connection to a proxy or Service Gateway is established, the agent maintains that connection for the next 10 minutes, even if the proxy or Service Gateway becomes unavailable during those 10 minutes.

A proxy or Service Gateways is considered unavailable if the agent connection times out or fails. The endpoint agent has a timeout setting of one (1) minute for each step of the HTTPS request: DNS look-up, TCP connection, HTTPS response. If a connection fails, the agent does not wait for the timeout before attempting to find another available proxy or Service Gateway. Connection failures are caused by events such as being unable to resolve the FQDN, any firewall blocks the request, or the proxy or Service Gateway is down.

Endpoint agents use the following priority when determining which proxy to connect to if more than one is available:

<figure>
<img src="./images/ProxyPriority-0709=GUID-fb08fe91-8b5a-4cda-b3ff-00069462975e.webp" />
<figcaption>Proxy Priority Behavior</figcaption>
</figure>

1.  Assigned proxy policy, highest priority criteria match

    1.  Service Gateway

    2.  Custom proxy (third party proxy)

    3.  System proxy (proxy set by the agent OS)

2.  Assigned proxy policy, next highest priority criteria match

    If an endpoint matches the criteria of more than one priority within a proxy policy, it applies the highest priority with a proxy available to connect.

3.  Command Line input proxy

    You can specify a proxy using the command line before or after installation by running the agent installer with the following command:

    `EndpointBasecamp.exe/proxy_server_port <address:port>`

    `<address:port>` is the proxy server IP address or FQDN and the connection port.

4.  Direct connection

5.  Last known usable

:::note
Endpoint groups can only be assigned to one proxy policy at a time. If an endpoint agent cannot connect using the assigned proxy policy, it does not use the Base Policy.
:::

Server & Workload Protection adds additional steps to the proxy priority. If an endpoint agent is not able to connect using a proxy policy or if the endpoint agent resolves to "direct connection" using the above priority list, it instead uses the following priority behavior:

1.  Server & Workload Protection agent proxy settings

2.  Server & Workload Protection server proxy settings

3.  Direct connection
