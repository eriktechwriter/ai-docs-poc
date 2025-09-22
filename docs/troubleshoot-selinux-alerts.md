---
id: troubleshoot-selinux-alerts
title: Troubleshoot SELinux alerts
sidebar_label: Troubleshoot SELinux alerts
description: Troubleshoot SELinux alerts
tags:
  - endpoint-security
  - trend-vision-one
---

 Troubleshoot SELinux alerts To check if SELinux is enabled, enter the following command: 'sestatus'. When the SELinux policy is set to enable and block ds_agent, the following alert sample might appear in the system log or SELinux log (/var/log/audit/audit.log or /var/log/audit.log): [TIMESTAMP] [HOSTNAME] python: SELinux is preventing [/PATH/BINARY] from 'read, write' accesses on the file/var/opt/ds_agent/dsa_core/ds_agent.db-shm. ***** Plugin leaks (86.2 confidence) suggests ***************************** If you want to ignore [BINARY] trying to read write access the ds_agent.db-shm file, because you believe it should not need this access. Then you should report this as a bug. You can generate a local policy module to dontaudit this access. Do ausearch -x [/PATH/BINARY] --raw | audit2allow -D -M [POLICYNAME] semodule -i POLICYNAME.pp To resolve the issue, create a custom SELinux policy with Audit2allow: Procedure Connect to the agent as a root user. Run the following commands to create a custom policy that will allow access to agent files: cd /tmp grep ds_agent /var/log/audit/audit\* | audit2allow -M ds_agent semodule -i ds_agent.pp Restart the ds_agent. Check the system messages and confirm that there are no alerts related to ds_agent. cat /var/log/messages | grep ds_agent If alerts are still occurring, run the commands from step 2 again. This will update the existing policy and re-apply it. Next steps To remove the SELinux policy, use the following command: semodule -r ds_agent. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base