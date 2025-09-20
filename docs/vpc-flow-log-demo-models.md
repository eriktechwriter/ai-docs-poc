---
id: vpc-flow-log-demo-models
title: VPC Flow Log demo models
sidebar_label: VPC Flow Log demo models
description: VPC Flow Log demo models
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ VPC Flow Log demo models A list of demo models to trigger Workbench alerts for your cloud account. The following are a list of demonstration models used to test your XDR for Cloud - AWS VPC Flow Logs integration. Running the listed models creates an alert in the Workbench app. Related information Demo Model - Network connection to known suspicious IP address Demo Model - Network connection to known suspicious IP address Use these steps to trigger the detection model and create a Workbench alert. Procedure Create a batch file with the following command. ping 5.135.115.193 Sign in to the AWS account you want to use to test XDR for Cloud - VPC Flow Logs. Set up an EC2 instance. Connect to the EC2 instance and run the batch file. In the Trend Vision One console, go to Agentic SIEM & XDR → Workbench to view the generated alert. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base