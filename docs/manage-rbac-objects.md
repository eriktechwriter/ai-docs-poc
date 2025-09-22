---
id: manage-rbac-objects
title: Manage role-based access control for common objects
sidebar_label: Manage role-based access control for common objects
description: Manage role-based access control for common objects
tags:
  - endpoint-security
  - trend-vision-one
---

 Manage role-based access control for common objects When you set up access control for your policies, all common objects of the same type share the same access. This can cause problems when common objects have their child objects split across different groups and users, but their access is shared. For example, this can be a malware scan configuration that uses the child object's directory, file extension, or file lists, or can be a policy that uses malware scan configs. This shared access can create issues if users modify objects that they can access but technically belong to a different group. Role-based access control (RBAC) for common objects allows your administrator to control the access scope of each role for the following common objects: Malware scan configurations Directory lists File extension lists File lists You can set up user roles and asset visibility scope by accessing the User Roles screen and applying roles in the User Accounts screen. For roles with access to “Selected Objects”, you can allow view-only permissions for other objects. This allows roles without view-only permissions to have full or custom access to specific objects, but retain view-only access for the rest. It also ensures that edit access to a specific object belongs only to the role that requires it. Note Permissions applied to an object will also apply to other objects of the same type. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base