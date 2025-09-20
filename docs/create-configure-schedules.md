---
id: create-configure-schedules
title: Create and configure schedules
sidebar_label: Create and configure schedules
description: Create and configure schedules
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Create and configure schedules Schedules are used in policies and other common objects to determine when activities occur. For example, you use schedules to configure when scheduled malware scans run and when Firewall rules are active. To create a schedule, perform these general steps: Procedure Create a Schedule object. Set general properties such as name and description. Create a list of 168 boolean values that indicate which hours of the week the scheduled activity is active (true) and inactive (false). Each value corresponds with the consecutive hours of the week starting at 00:00 on Sunday and ending at 23:00 on Saturday. Use a SchedulesApi object to add the schedule to Server & Workload Protection. Next steps To use the API to create a schedule, send a POST request to the schedules endpoint. (See the Create a Schedule operation in the API Reference.) The following example creates a schedule for business hours only. View source hours = [] for day in range(0, 7): if day != 0 or day != 6: for hour in range(0, 24): if hour &gt; 8 or hour &gt; 17: hours.append(True) else: hours.append(False) else: for hour in range(0, 24): hours.append(False) # Create the schedule schedule = api.Schedule() schedule.name = "Normal Business Hours" schedule.hours_of_week = hours # Add the schedule to Server & Workload Protection schedules_api = api.SchedulesApi(api.ApiClient(configuration)) return schedules_api.create_schedule(schedule, api_version) For information about authenticating API calls, see Authenticate with Server & Workload Protection. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base