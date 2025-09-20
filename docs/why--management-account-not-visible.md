---
id: why--management-account-not-visible
title: Why is my management account not visible after connecting my AWS organization?
sidebar_label: Why is my management account not visible after connecting my AWS organization?
description: Why is my management account not visible after connecting my AWS organization?
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Why is my management account not visible after connecting my AWS organization? This is a limitation of AWS when deploying a CloudFormation stack to your organization. According to the help topic DeploymentTargets - AWS CloudFormation: StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization. You can still add your management account separately by following the steps in Adding an AWS account using CloudFormation. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base