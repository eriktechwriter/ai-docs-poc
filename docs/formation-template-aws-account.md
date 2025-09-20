---
id: formation-template-aws-account
title: What does the Cloud Formation template do when I add an AWS account?
sidebar_label: What does the Cloud Formation template do when I add an AWS account?
description: What does the Cloud Formation template do when I add an AWS account?
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ What does the Cloud Formation template do when I add an AWS account? The AWS Cloud Formation template creates a cross-account role that has both a unique external ID and a policy that allows Server & Workload Protection to access your AWS resources. To accomplish this, the template first creates a temporary role with the necessary Server & Workload Protection permissions. Using this role, it starts Lambda functions that perform the following actions: Procedure Creates the cross-account role for Server & Workload Protection. Obtains the Amazon Resource Name (ARN) of the cross-account role. Sends the ARN to the Server & Workload Protection API. Next steps Note The Lambda functions cannot delete the original temporary role: after your AWS account has been added to Server & Workload Protection, you must remove it by deleting the Cloud Formation stack. For more details, you can view the content of the Cloud Formation template directly in AWS by editing it during the template selection process. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base