---
id: testing-vpc-flow-log-integration
title: Testing VPC Flow Log integration for XDR for Cloud
sidebar_label: Testing VPC Flow Log integration for XDR for Cloud
description: Testing VPC Flow Log integration for XDR for Cloud
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Testing VPC Flow Log integration for XDR for Cloud Test XDR for Cloud - AWS VPC Flow Log integration in your AWS cloud environment. Important XDR for Cloud currently only supports AWS cloud accounts. Support for additional cloud providers is coming soon. Enabling XDR for Cloud - AWS VPC Flow Logs requires allocating credits. For information about estimating credit usage with XDR for Cloud, see Estimating and monitoring XDR for Cloud usage. XDR for Cloud - AWS VPC Flow Logs integration allows Trend Vision One to access and monitor your AWS VPC Flow Logs to detected potential threats. The following steps provide a guide on how to test the feature within your environment. Procedure Sign in to the AWS account you want to use to test XDR for Cloud - AWS VPC Flow Logs. Review the VPC Flow Logs recommendations and requirements. Add your AWS account to Trend Vision One cloud accounts app. Follow the steps in Adding an AWS account using CloudFormation and enable the following features and permissions: Core Features XDR for Cloud - AWS VPC Flow Logs Note If you want to test integration with an AWS organization account, see Adding an AWS Organization. After your account successfully connects, use XDR Data Explorer to verify data is being sent. Use one of the following demo attacks to trigger a Workbench alert. Demo: Model - Network Connection to Known Suspicious IP Address You can also run a Threat Intelligence sweeping test to generate an alert using demo data. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base