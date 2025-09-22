---
id: error-unable-connect-cloud-account
title: "Error: Unable to connect to the cloud account"
sidebar_label: "Error: Unable to connect to the cloud account"
description: "Error: Unable to connect to the cloud account"
tags:
  - endpoint-security
  - trend-vision-one
---

 Error: Unable to connect to the cloud account Important AWS Accounts in Trend Vision One are now managed by the Cloud Accounts app. To add new AWS accounts, see Adding an AWS account using CloudFormation. You can still use APIs to add new accounts to Server & Workload Protection. However, Trend Micro recommends using the Cloud Accounts app, which provides access to more advanced cloud security and XDR capabilities. This topic is for reference only. When adding an Amazon Cloud account, the error "Unable to connect to the cloud account" can occur. The cause can be: invalid key ID or secret incorrect permissions failed network connectivity Your AWS account access key ID or secret access key is invalid To resolve this: Verify the security credentials that you entered. The incorrect AWS IAM policy has been applied to the account being used by Server & Workload Protection To resolve this: Go to you your AWS account and review the IAM policy for that account. The AWS IAM policy must have these permissions: Effect: Allow AWS Service: Amazon EC2 Select the following Actions: DescribeImages DescribeInstances DescribeTags Amazon Resource Name (ARN) to: * NAT, proxy, or firewall ports are not open, or settings are incorrect Server & Workload Protection must be able to connect to Amazon Cloud, on the required port numbers. You may need to: configure NAT or port forwarding on a firewall or router between your AMI and the Internet get an external IP address for your AMI The network connection must also be reliable. If it is intermittent, this error message may occur sometimes (but not every time). © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base