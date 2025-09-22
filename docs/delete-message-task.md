---
id: delete-message-task
title: Delete Message task
sidebar_label: Delete Message task
description: Delete Message task
tags:
  - endpoint-security
  - trend-vision-one
---

 Delete Message task Delete a suspicious email message from all supported mailboxes protected by Cloud App Security using context menus on the Trend Vision One console. This task is supported by the following services: Cloud App Security Procedure After identifying the suspicious email message, access the context or response menu and click Delete Message. The Delete Message Task screen appears. Confirm the targets of the response. Select the mailboxes that this task applies to. Important This task is only applicable on supported mailboxes protected by Cloud App Security. If the target message is not found in a supported mailbox protected by Cloud App Security or users have already deleted all instances of the message, you cannot create the task. Specify a Description for the response or event. Click Create. Click Delete Message to confirm the deletion task. Trend Vision One creates the task and displays the current task status in Response Management. Monitor the task status. Go to Workflow and Automation → Response Management . (Optional) Locate the task using the Search field or by selecting Delete Message from the Action drop-down list. View the task status. In progress (): Trend Vision One sent the command and is waiting for a response. Successful (): The command was successfully executed. Partially successful (): One or more commands was unsuccessful. Unsuccessful (): An error or time-out occurred when attempting to send the command to the managing server, the agent is offline for more than 24 hours, or the command execution timed out. Action taken by Cloud App Security(): The email message has already been deleted or quarantined by Cloud App Security. Go to Cloud App Security to learn more. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base