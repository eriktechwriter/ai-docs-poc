---
id: oracle-required-granted-permissions
title: Oracle required and granted permissions
sidebar_label: Oracle required and granted permissions
description: Oracle required and granted permissions
tags:
  - endpoint-security
  - trend-vision-one
---

 Oracle required and granted permissions Review the permissions required to deploy resources and the permissions granted during the terraform process. The terraform process assigns certain permissions to itself to establish the connection with Cloud Accounts and Trend Vision One cloud security services. These permissions include enabling the Cloud Accounts app and security services to obtain temporary credentials and complete tasks within your Oracle cloud environment. Oracle Required Permissions Feature Permissions Core Features and Cyber Risk Exposure Management Allow group {user_group_for_deployment} to manage orm-stacks in compartment id {compartment_ID_where_stack_is_deployed} Allow group {user_group_for_deployment} to manage orm-jobs in compartment id {compartment_ID_where_stack_is_deployed} Allow group {user_group_for_deployment} to manage orm-config-source-providers in compartment id {compartment_ID_where_stack_is_deployed} Allow group {user_group_for_deployment} to inspect compartments in compartment id {compartment_ID_where_stack_is_deployed} Allow group {user_group_for_deployment} to manage policies in compartment id {compartment_ID_where_stack_is_deployed} Allow group {user_group_for_deployment} to manage users in compartment id {compartment_ID_of_your_identity_domain} Allow group {user_group_for_deployment} to read domains in compartment id {compartment_ID_of_your_identity_domain} Allow group {user_group_for_deployment} to manage groups in compartment id {compartment_ID_of_your_identity_domain} © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base