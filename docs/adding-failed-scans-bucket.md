---
id: adding-failed-scans-bucket
title: Add a failed scan bucket
sidebar_label: Add a failed scan bucket
description: Add a failed scan bucket
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Add a failed scan bucket Sometimes File Security Storage is unable to scan files. File Security Storage allows you to isolate these files in a separate bucket. They can then be rescanned later. The scan-failed files are placed in the FailureBucket. You specify it to be global, or by-region by entering a JSON script. in the FileSecurityStorageFailureBucket parameter when creating your CloudFormation template. If you have already set up your CloudFormation template and want to use FailureBucket, you need to re-deploy or update the CloudFormation template using Cloud Account Management. Use the one of the following JSON scripts in the FileSecurityStorageFailureBucket field when creating or updating your CloudFormation template. If you do not want to have an isolation bucket for the files, leave the field blank. To enable the bucket to be global, include the global key: {"global":"s3-global-failure-bucket-name"}All files are moved to the global bucket. To enable the bucket to be by-region, include the region ID keys:{"us-east-2":"s3-by-region-us-east-2-failure-bucket-name","ap-south-2":"s3-by-region-ap-south-2-failure-bucket-name"}The system checks if the current scanner region has a specified bucket: If the current scanner region has a specified bucket, the file is moved to that regional bucket. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base