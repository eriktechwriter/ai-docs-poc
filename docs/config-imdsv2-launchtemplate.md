---
id: config-imdsv2-launchtemplate
title: Configure IMDSv2 from LaunchTemplate
sidebar_label: Configure IMDSv2 from LaunchTemplate
description: Configure IMDSv2 from LaunchTemplate
tags:
  - endpoint-security
  - trend-vision-one
---

 Configure IMDSv2 from LaunchTemplate Procedure Log into your AWS console. Go to AWS Marketplace → Manage subscriptions → Trend Vision One - Zero Trust Secure Access. Under Actions, select Launch CloudFormation Stack. Select: Fulfillment option: Private Access connectors with high availability Software version: the latest Zero Trust Secure Access - Private Access version Region: the appropriate region Click Continue to Launch. Click Launch to begin creating the CloudFormation Stack. Modify the template: Open the Infrastructure Composer. Open the LaunchTemplate component to display its Details. Under Resource Configuration, scroll to MetadataOptions. Change HttpTokens to “required" and click Save. Click Create template. Continue following the instructions for deploying the CloudFormation stack as per AWS CloudFormation stack instructions. The registration token used can be obtained in Trend Vision One under the Amazon Web Services Platform. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base