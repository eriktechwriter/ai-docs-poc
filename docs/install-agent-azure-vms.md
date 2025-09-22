---
id: install-agent-azure-vms
title: Install the agent on Azure VMs
sidebar_label: Install the agent on Azure VMs
description: Install the agent on Azure VMs
tags:
  - endpoint-security
  - trend-vision-one
---

 Install the agent on Azure VMs Important To deploy the Trend Vision One Endpoint Security agent with Server & Workload Protection features using a deployment script, configure and download the deployment script in Endpoint Inventory. For more information, see Run the deployment script. The following steps are no longer considered valid and are included for reference use only. To install the agent on VM instances running in the Microsoft Azure cloud, you need to deploy agents to them. You can do this in multiple ways: You can generate deployment scripts for automatically deploying agents using deployment tools such as RightScale, Chef, Puppet, and SSH. For more information on how to do so, see Use deployment scripts to add and protect computers. You can add a custom script extension to an existing virtual machine to deploy and activate the agent. To do this, navigate to your existing virtual machine in the Azure management portal and follow the steps below to upload and execute the deployment script on your Azure VM. To add a custom script extension to an existing virtual machine: Procedure Log in to the Azure portal. Switch to the preview portal, and then click the virtual machine that you want to add the custom script to. In the Settings blade, click Extensions, in the Extensions blade, click Add extension, in the New Resource blade, select Custom Script, and then click Create. In the Add Extension blade under Script File (required), click upload, select the saved .ps1 deployment script, and then click OK. Next steps © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base