---
id: deleting-api-gateways-aws
title: Delete API gateways in AWS
sidebar_label: Delete API gateways in AWS
description: Delete API gateways in AWS
tags:
  - endpoint-security
  - trend-vision-one
---

 Delete API gateways in AWS You can delete an AWS API gateway or endpoint in the AWS Management Console, AWS CLI, or SDKs. Note Before deleting an API gateway or endpoint, consider the following: Check dependencies: Ensure that no resources depend on the API Gateway you plan to delete. Backup configuration: Before deleting, consider exporting the API configuration in case you need it later. Permissions: You need appropriate permissions to delete API gateways. Irreversible: Deletion is irreversible. After you delete an API gateway, you cannot recover it. Procedure Sign in to the AWS Management Console and open the AWS API Gateway console at https://console.aws.amazon.com/apigateway. Select the API gateway you want to delete. Click Delete. Confirm your deletion. Delete an endpoint path Procedure Sign in to the AWS Management Console and open the Amazon API Gateway console at https://console.aws.amazon.com/apigateway. In the left navigation pane, select the API that contains the endpoint you want to delete. Expand the resource tree and navigate to the endpoint you want to delete. Select the endpoint to view its details and methods. For each method on the endpoint: Select the method. In the Method Execution pane, click Delete. Confirm the deletion. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base