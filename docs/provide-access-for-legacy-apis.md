---
id: provide-access-for-legacy-apis
title: Provide access for legacy APIs
sidebar_label: Provide access for legacy APIs
description: Provide access for legacy APIs
tags:
  - endpoint-security
  - trend-vision-one
---

 Provide access for legacy APIs To use the legacy SOAP and REST API, create a role that provides Web Service-only access, and assign it to a new user. You will use this use to authenticate your calls made with the legacy APIs. Procedure In the Server & Workload Protection console, go to Administration > User Management > Roles. Click New. Deselect the Allow Access to Workload Manager User Interface check box and select the Allow Access to Web Service API check box. When all other configuration is complete, click Save. Go to Administration User Management → Users and click New. Create a new user for use only with the Web Service API. Assign the new Role previously created to this user. Make note of the new user account user name and password. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base