---
id: add-global-rules
title: Add Global Rules
sidebar_label: Add Global Rules
description: Add Global Rules
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Add Global Rules Global rules allow you to enforce and track block rules that have a global scope over all protected computers in your network. Currently, this feature is only available for block rules. Generally, use the following steps to create global rules: Procedure Create and configure an ApplicationControlGlobalRule object. Use an ApplicationControlGlobalRuleApi object to create the global rule on Server & Workload Protection. Next steps Also see the Create and add new global rules operation in the API Reference. For more information about global rules, see the Use the API to create shared and global rulesets . The following example adds software to the Global Rules. source # Create the rules new_rules = [] for sha256 in sha256_list: new_rule = api.ApplicationControlGlobalRule() new_rule.sha256 = sha256 new_rules.append(new_rule) # Add the rules global_rules_api = api.GlobalRulesApi(api.ApiClient(configuration)) rules_list = api.ApplicationControlGlobalRules() rules_list.application_control_global_rules = new_rules return global_rules_api.add_global_rules(rules_list, api_version) © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base