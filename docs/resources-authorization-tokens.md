---
id: resources-authorization-tokens
title: Authorization tokens
sidebar_label: Authorization tokens
description: Authorization tokens
tags:
  - endpoint-security
  - trend-vision-one
---

 Authorization tokens Create authorization tokens to allow end users to terminate the Trend Vision One Endpoint Security agent. Authorization tokens are a policy resource used for enabling endpoint users to terminate the Trend Vision One Endpoint Security agent. To use the authorization token, you must enable the Agent Interface and select Allow users to shut down the agent using an authorization token. For more information, see Agent Interface. Authorization tokens do not have a limit on number of users or uses as long as the token is valid. You can have up to 10 authorization tokens. Note Trend Vision One does not automatically delete expired authorization tokens. Use the delete action to remove expired tokens. Authorization tokens actions Action Description Add a token Generate an authorization token from the list view. Select the Token validity period. Specify the Description. Click Generate token. Copy the token value. Important You cannot retrieve the token value after closing the New authorization token window. Make sure to copy and save the value to a safe location before you click Close. Delete a token Select one or more tokens and click Delete. Important Deleting a token immediately invalidates the token and permanently removes any associated date from Trend Vision One. Endpoint users cannot use deleted tokens to terminate the Trend Vision One Endpoint Security agent © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base