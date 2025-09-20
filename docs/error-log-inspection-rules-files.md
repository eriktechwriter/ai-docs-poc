---
id: error-log-inspection-rules-files
title: "Error: Log Inspection Rules Require Log Files"
sidebar_label: "Error: Log Inspection Rules Require Log Files"
description: "Error: Log Inspection Rules Require Log Files"
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Error: Log Inspection Rules Require Log Files If a log inspection rule requires you to add the location of the files to be monitored, of if you add an unnecessary log inspection rule and the files do not exist on your machine, the following error will occur in the Computer or Policy editor: To resolve the error: Procedure Click on the Log Inspection Rules Require Log Files error. A window will open with more information about the error. Under Description, the name of the rule causing the error will be listed. In the Server & Workload Protection console, go to Policies → Common Objects → Rules → Log Inspection Rules and locate the rule that is causing the error. Double-click the rule. The rule's properties window will appear. Go to the Configuration tab. Next steps If the file's location is required Procedure Enter the location under Log Files to monitor and click Add. Click OK. Once the agent receives the policy, the error will clear. Next steps If the files listed do not exist on the protected machine Procedure Go to the Computer or Policy editor → Log Inspection. Click Assign/Unassign. Locate the unnecessary rule and uncheck the checkbox. Click OK. Once the agent receives the policy, the error will clear. Next steps To prevent this error, run a recommendation scan for suggested rules: In the Server & Workload Protection console, go to Computers. Right-click the computer you'd like to scan and click Actions → Scan for Recommendations. View the results on the General tab of the protection module in the Computer or Policy editor. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base