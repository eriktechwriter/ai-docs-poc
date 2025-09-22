---
id: configuring-remote-support
title: Configuring remote support settings
sidebar_label: Configuring remote support settings
description: Configuring remote support settings
tags:
  - endpoint-security
  - trend-vision-one
---

 Configuring remote support settings Allow Trend Micro support engineers to execute remote support tasks in your Trend Vision One console. Procedure Go to Administration → Support Settings. Use the check boxes to enable the following remote support tasks: Allow Trend Micro support engineers to collect the diagnostic package from Endpoint Security. Allow Trend Micro support engineers to remotely deploy utilities to endpoint agents for troubleshooting and mitigation. Important There is a dependency between both remote support settings. Allowing Trend Micro support engineers to remotely deploy utilities to endpoint agents automatically enables diagnostic package collection from Endpoint Security. Disabling diagnostic package collection automatically disables remote utility deployment. Choose between Automatic approval and Manual approval for the enabled remote support tasks. Note If you select Manual approval, you can configure approval request notification recipients in Notifications. Review remote support requests or view automatically approved tasks. Go to Administration → Support Settings. Next to remote support requests with the status Waiting for approval, click Review. The Review approval request window appears. Confirm the description and details of the remote support task. Click Approve or Reject. You can click View details next to any approved task to view task information and any status updates. After Trend Micro executes an approved remote support task, you can click the value in the Endpoints column on the Remote Support Approval Requests screen to download a CSV file of task details. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base