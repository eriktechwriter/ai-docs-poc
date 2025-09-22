---
id: configuring-f5-big-ip
title: Configuring F5 BIG-IP LTM as a load balancer for use with multiple Internet Access on-premises gateways
sidebar_label: Configuring F5 BIG-IP LTM as a load balancer for use with multiple Internet Access on-premises gateways
description: Configuring F5 BIG-IP LTM as a load balancer for use with multiple Internet Access on-premises gateways
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring F5 BIG-IP LTM as a load balancer for use with multiple Internet Access on-premises gateways Configure and deploy F5 BIG-IP LTM as your load balancer to support using multiple Internet Access on-premises gateways as the authentication proxy for single sign-on. Note The screens and instructions are valid as of July 17. 2024 using F5 BIG-IP LTM version 17.1.1. The instructions describe a single-NIC deployment. Procedure Create a pool. Go to Local Traffic → Pools → Pool List → New Pool.... Specify a name for the new pool. Choose tcp from available health monitors and move it to Active. Choose your preferred load balancing method or keep the default setting. In New Members, add the IP address and port or FQDN and port of the Services Gateways with the Internet Access on-premises gateway installed that you wish to use as the authentication proxy. Click Finished. Create a virtual server. Go to Local Traffic → Virtual Servers → Virtual Server List. Click Create and input the following values into the fields. Field Value Name The name of the server Destination Address/Mask BIG-IP VE IP address Service Port The listening port on in the load balancer to be used as the authentication proxy. Protocol TCP Protocol Profile (Client) TCP Protocol Profile (Server) The current client profile Source Address Translation Auto Map Default Pool The newly created pool Default Persistence Profile The persistence profile, for example source_addr Click Finished. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base