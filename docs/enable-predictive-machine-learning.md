---
id: enable-predictive-machine-learning
title: Enable Predictive Machine Learning in File Security SDK
sidebar_label: Enable Predictive Machine Learning in File Security SDK
description: Enable Predictive Machine Learning in File Security SDK
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Enable Predictive Machine Learning in File Security SDK You can enable Predictive Machine Learning (PML) for File Security SDK. When a file has been identified as possible malware by PML, the file name displays a percentage symbol (%) to indicate the probability that it is a malicious file. To enable PML for File Storage SDK: Procedure In the SDK that you deployed for File Security, enter the following command line parameters: Command Line Parameter Value pml True or false. Default value is false feedback True or false. Default value is false. The following example shows one file scanned using the Python SDK with the following parameters: File name: FILENAME V1 region: us-east-1 Turn on Trend PML: true Turn on Trend Smart Feedback: true API Key: API_KEY python3 client.py -f FILENAME -r us-east-1 --api_key API_KEY --pml true --feedback true © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base