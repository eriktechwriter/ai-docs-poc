---
id: configuring-nginx
title: Configuring Nginx as a load balancer for use with multiple Internet Access on-premises gateways
sidebar_label: Configuring Nginx as a load balancer for use with multiple Internet Access on-premises gateways
description: Configuring Nginx as a load balancer for use with multiple Internet Access on-premises gateways
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring Nginx as a load balancer for use with multiple Internet Access on-premises gateways Configure and deploy Nginx as your load balancer to support using multiple Internet Access on-premises gateways as the authentication proxy for single sign-on. Note These instructions are valid as of June 15, 2024 using Nginx versopon 1.20.1. Procedure On your Nginx server, ensure you have added the stream module to your Nginx configuration file. Note If the stream module has not been added, you must uninstall Nginx and then reinstall with the stream module added. Load the stream module using the following command: load_module /usr/lib64/nginx/modules/ngx_stream_module.so; Create a stream block to use for load balancing: stream { upstream auth_proxy { hash <hash>; server <IP/FQDN 1>:<port 1>; server <IP/FQDN 2>:<port 2>; ... server <IP/FQDN n>:<port n>; } server { listen <port>; proxy_pass auth_proxy; } } The following table explains the values you must specify in the placeholder fields in order to complete the configuration. Field Value Hash User-defined key for hash in load balancing. Use $remote_addr if mapping a client-server relationship based on the client’s IP address. IP/FQDN (1, 2, … ) IP or FQDN of a Service Gateway with the Internet Access on-premises gateway installed Port (1, 2, … ) Listening port on a Service Gateway used for the authentication proxy Port Listening port on the load balancer used as the authentication proxy © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base