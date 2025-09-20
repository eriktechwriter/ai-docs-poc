---
id: configuring-haproxy
title: Configuring HAProxy as a load balancer for use with multiple Internet Access on-premises gateways
sidebar_label: Configuring HAProxy as a load balancer for use with multiple Internet Access on-premises gateways
description: Configuring HAProxy as a load balancer for use with multiple Internet Access on-premises gateways
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Configuring HAProxy as a load balancer for use with multiple Internet Access on-premises gateways Configure and deploy HAProxy as your load balancer to support using multiple Internet Access on-premises gateways as the authentication proxy for single sign-on. Note These instructions are valid as of June 15, 2024 using HAProxy 1.5.18 Procedure Open the configuration file located at /etc/haproxy/haproxy.cfg. In the defaults section, set the mode to tcp. Complete the configuration to be used in load balancing. defaults mode tcp ... frontend main bind *:<port> default_backend auth_proxy backend auth_proxy balance <balance> server app1 <IP/FQDN 1>:<port 1> check server app2 <IP/FQDN 2>:<port 2> check ... server appN <IP/FQDN n>:<port n> check The following table explains the values you must specify in the placeholder fields in order to complete the configuration. Field Value Port Listening port on the load balancer used as the authentication proxy Balance The desired load balancing algorithm. Use source if you are mapping a client-server relationship based on the client’s IP address. IP/FQDN (1, 2, … ) IP or FQDN of a Service Gateway with the Internet Access on-premises gateway installed Port (1, 2, … ) Listening port on a Service Gateway used for the authentication proxy © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base