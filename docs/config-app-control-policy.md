---
id: config-app-control-policy
title: Configure Application Control for a policy
sidebar_label: Configure Application Control for a policy
description: Configure Application Control for a policy
tags:
  - endpoint-security
  - trend-vision-one
---

 Configure Application Control for a policy Configure the Application Control module to define its behavior for a policy. Generally, use the following steps to configure the module: Procedure Create an ApplicationControlPolicyExtension object and add the Ruleset IDs to use. Also configure the running state (on or off). Create an PolicySettings object to configure runtime settings of the module. Create a Policy object and add the ApplicationControlPolicyExtension and PolicySettings objects. Use a PoliciesApi object to add or update the policy on Server & Workload Protection. Next steps For more information about Application Control, see About Application Control. The following example creates an ApplicationControlPolicyExtension object and turns on application control. The object is added to a Policy object which is used to modify a policy on Server & Workload Protection. source # Get the policy policies_api = api.PoliciesApi(api.ApiClient(configuration)) # Turn on Application Control application_control_policy_extension = api.ApplicationControlPolicyExtension() application_control_policy_extension.state = "on" # Update the policy update_policy = api.Policy() update_policy.application_control = application_control_policy_extension # Modify the policy on Server & Workload Protection app_control_policy = policies_api.modify_policy(policy_id, update_policy, api_version, overrides=False) return app_control_policy Also see the Modify a Policy operation in the API Reference. For information about authenticating API calls, see Authenticate with Server & Workload Protection. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base