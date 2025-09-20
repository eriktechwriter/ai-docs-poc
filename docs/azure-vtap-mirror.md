---
id: azure-vtap-mirror
title: Set up traffic mirroring with Azure virtual network TAP
sidebar_label: Set up traffic mirroring with Azure virtual network TAP
description: Set up traffic mirroring with Azure virtual network TAP
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Set up traffic mirroring with Azure virtual network TAP Learn how to configure traffic mirroring for your Virtual Network Sensor with Microsoft Azure virtual network TAP. Trend Micro recommends configuring traffic mirroring with Azure virtual network TAP. For more information, see the Azure documentation. You can also configure traffic mirroring with Gigamon VUE Cloud Suite for Azure. Gigamon is a third-party provider recommended by Microsoft for use in the Azure environment, and has been tested by Trend Micro for use with the Virtual Network Sensor. Example mapping of a Virtual Network Sensor deployment within the Azure environment Procedure On the Microsoft Azure console, go to Virtual network terminal access points. On the Virtual network terminal access points screen, click Create. On the Basics tab, select the subscription and resource group from the drop-down lists. Provide a name for the virtual network TAP. Select the region that your Virtual Network Sensor is in from the drop-down list. Specify the data port of your Virtual Network Sensor as the destination IP address. On the Review + create tab, review the settings and click Create. On the left navigation panel, click the name of the virtual network TAP that you just created. Go to Settings → Sources and click Add to add the virtual machine you want to monitor. Tip If you are unable to add a source successfully, turn off the virtual machine and wait for deallocation. After deallocation, turn on the virtual machine and try again. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base