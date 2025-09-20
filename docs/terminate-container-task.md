---
id: terminate-container-task
title: Terminate Container task
sidebar_label: Terminate Container task
description: Terminate Container task
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Terminate Container task Stop suspicious behavior of containers within a pod by terminating the pod using context menus on the Trend Vision One console. This task is supported by the following services: Trend Vision One Container Security Important Only currently running Kubernetes pods or ECS tasks are supported for the Terminate Container task. Terminating a pod destroys evidence of the suspicious behavior and does not prevent the behavior from happening again. If possible, run the Isolate Container task before deciding to terminate a container. The Terminate Container task allows you to stop the spread of suspicious behavior within a container by terminating the containing pod. Once terminated, a pod cannot be resumed. Start the task using context menus on the Trend Vision One console. Procedure After identifying the container to terminate, access the context or response menu and click Terminate Container. The Terminate Container Task screen appears. Confirm the target of the response. Specify a Description for the response or event. Click Create. Trend Vision One creates the task and displays the current task status in Response Management. Monitor the task status. Go to Workflow and Automation → Response Management . (Optional) Locate the task using the Search field or by selecting Terminate Container from the Action drop-down list. View the task status. In progress (): Trend Vision One sent the command and is waiting for a response. Successful (): The command was successfully executed. Unsuccessful (): An error or time-out occurred when attempting to send the command, or the specified pod no longer exists. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base