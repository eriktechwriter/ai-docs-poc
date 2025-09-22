---
id: playbook-nodes
title: Playbook nodes
sidebar_label: Playbook nodes
description: Playbook nodes
tags:
  - endpoint-security
  - trend-vision-one
---

 Playbook nodes View a list of playbook nodes. The following table lists the nodes that may be available in playbook templates with a fixed workflow. Nodes in Playbook Templates with a Fixed Workflow Node Example Name Description Trigger node Circumstance or event that triggers the execution of the playbook Condition node Prerequisites that must be met before playbook actions are performed Path selection node Determines the logical path of the playbook Manual approval node Determines whether manual approval is required Loop node Repeats the specified action or series of actions Action node Executed actions triggered on the matched targets End End of the playbook Note To customize the node name, click the edit icon (). The following table lists the nodes that maybe available in customizable playbook templates and user-defined playbooks. Nodes in Customizable Playbook Templates and User-Defined Playbooks Node Example Name Description Start node Beginning of the playbook Trigger node Circumstance or event that triggers the execution of the playbook Target node Objects on which the actions will be taken Prerequisites that must be met before playbook actions are performed Note A condition can have an else-if condition or else action attached to it. When a condition is false, the playbook performs the else action or checks if its else-if condition is met. If the else-if condition is met, the playbook continues to perform the corresponding else action. Action node Executed actions triggered on the matched targets Add node Adds the following nodes in specific cases: Target nodes Condition nodes Action nodes © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base