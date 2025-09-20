---
id: oracle-cloud-resource-update
title: Resource Update
sidebar_label: Resource Update
description: Resource Update
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Resource Update Update deployed resources in your Oracle Cloud compartment to the latest version. The Resource Update tab in the Compartment Settings screen allows you to update the Trend Vision One resources deployed to your compartment. This may be required as support for new features or functions are added to Cloud Accounts. Make sure you have the required permissions to update the compartment. Procedure Sign in to the Trend Vision One console. In a new tab in the same browser session, log in to the Oracle Cloud Console. In the Trend Vision One console, go to Cloud Security → Cloud Accounts → Oracle. Click the name of the compartment you want to update. In the Compartment Settings screen, navigate to the Resource Update tab. Click Download Terraform Template Package to download the template to your local machine. In the Oracle Cloud Console, open the navigation menu and select Developer Services. In the Resource Manager area click Stacks In the List Scope area, select the compartment you want to update and select the stack that was created in the connection process.The stack is named using the following format: Vision-One-Cloud-Account-Management-{compartment id}-{hash}, where {compartment id} is the OCID, and {hash} is a randomly-generated hash. Select Upload to upload the template that you downloaded in step 6. Click Next, and then click Run apply. Click Save Changes. In the Trend Vision One console, in the Compartment Settings screen, click Save Changes.The update process might take a few moments to complete. You can refresh the Cloud Accounts screen to check the status of your update. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base