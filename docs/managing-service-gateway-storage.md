---
id: managing-service-gateway-storage
title: Manage Service Gateway storage
sidebar_label: Manage Service Gateway storage
description: Manage Service Gateway storage
tags:
  - endpoint-security
  - trend-vision-one
---

 Manage Service Gateway storage View storage information and allocate storage to the Data and Service partitions on Service Gateway appliances. Service Gateway appliances allocate storage into three partitions: System, Data, and Service. Add unallocated drive space to the Data and Service partitions to meet storage requirements. Procedure Go to Workflow and Automation → Service Gateway Management. Click the name of the Service Gateway you want to manage. Click the settings icon () next to the storage information. In the Storage Settings screen that appears, view the following information: Total storage: The total amount of storage on the Service Gateway appliance Allocated storage: The amount of storage allocated to all partitions System: The amount of storage allocated to the System partition Note The System partition is reserved for the Service Gateway operating system. Data: The amount of storage allocated to the Data partition Note The Data partition holds data collected by installed services. If the Data partition is nearly full, you may want to increase the size of this partition. Services: The amount of storage allocated to the Service partition Note The Service partition holds the Service Gateway's installed services. If you want to install more services, you may want to increase the size of this partition. Unallocated: The amount of storage still available to be allocated Using whole numbers, type the amount of storage in GB to allocate to the Data and/or Service partitions. Note Partition sizes cannot be decreased. Click Increase Storage. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base