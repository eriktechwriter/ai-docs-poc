---
id: azure-server-cloud-connector
title: Why can't I add my Azure server using the Azure cloud connector?
sidebar_label: Why can't I add my Azure server using the Azure cloud connector?
description: Why can't I add my Azure server using the Azure cloud connector?
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Why can't I add my Azure server using the Azure cloud connector? If an Azure server loses connectivity to the Azure metadata service, Server & Workload Protection will no longer be able to identify it as an Azure server and you will be unable to add it using the Azure cloud connector. This situation can happen if the server's public or private IP address is changed outside of the Azure console. The Azure server relies on DHCP to communicate with the metadata service and changing the IP outside of the console disables DHCP. Microsoft recommends against changing the Azure VM's IP address from within its operating system, unless necessary, such as when assigning multiple IP addresses to a Windows VM. For details, see Create a virtual machine with a static public IP address using the Azure portal, Azure PowerShell, or Azure CLI. For information on how to check if your Azure server is able to connect to the Azure metadata service, see Troubleshoot Azure Windows VM Agent issues. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base