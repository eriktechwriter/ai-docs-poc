---
id: automatically-create-subfolders
title: Automatically create sub-folders
sidebar_label: Automatically create sub-folders
description: Automatically create sub-folders
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Automatically create sub-folders Configure your smart folders to automatically create sub-folders based on AWS, Azure, or Google Cloud tags and labels. Instead of manually creating child folders, you can automatically create sub-folders for each value of an AWS tag, Azure tag, or GCP label that's assigned to an Amazon EC2 instance, Amazon Workspace, Azure VM, or GCP VM instance. For information on how to apply tag/labels to your computers, refer to the documentation from your cloud provider: Amazon: Tag your Amazon EC2 resources, Tag WorkSpaces Resources Azure: Use tags to organize your Azure resources and management hierarchy Google Cloude: Labeling resources. Tag- and label-based sub-folders replace any existing manually created child folders under the parent folder. Procedure In the Server & Workload Protection console, right-click a smart folder and select Smart Folder Properties. In the main pane, near the bottom, select the Automatically create sub-folders for each value of a specific tag or label key check box. Select either the AWS, Azure, or GCP cloud vendor. Type the name of the AWS tag, Azure tag, or GCP label key. Sub-folders are automatically created for each of the tag or label values. Click Save. Note Empty sub-folders can appear if an AWS tag or GCP label value is not being used anymore. To remove them, right-click the smart folder and select Synchronize Smart Folder. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base