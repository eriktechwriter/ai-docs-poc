---
id: vpc-flow-logs-requirements
title: VPC Flow Logs recommendations and requirements
sidebar_label: VPC Flow Logs recommendations and requirements
description: VPC Flow Logs recommendations and requirements
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ VPC Flow Logs recommendations and requirements Review required and recommended configuration settings for using XDR for Cloud - AWS VPC Flow Logs. Before enabling XDR for Cloud - AWS VPC Flow Logs and deploying the stack template, review the following recommendations and requirements for the feature: XDR for Cloud - AWS VPC Flow Logs supports complete detection capabilities for VPC Flow Logs version 5 or later. For the most comprehensive threat detection coverage, use a custom format and add the following fields to your flow log records: action (default) tcpFlags pktDstAddr pktSrcAddr flowDirection For more information on creating custom flow log fields, see https://docs.aws.amazon.com/vpc/latest/userguide/flow-log-records.html. For more information on creating a custom flow log, see https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3-create-flow-log.html. You must use a destination S3 bucket in the same region as the VPC flow log source. For example, if the VPC flow log source is in us-east-2, the S3 bucket must also be located in us-east-2. This feature only supports server-side encryption with Amazon S3 managed keys (SSE-S3). This feature does not support any other encryption method. Trend Micro recommends using a 10-minute aggregation interval to help reduce lambda invocations and lower the cost impact of the feature. Trend Micro recommends using text format for your VPC flow logs to reduce lambda execution time and lower to cost impact of the feature. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base