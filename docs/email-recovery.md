---
id: email-recovery
title: Email Recovery
sidebar_label: Email Recovery
description: Email Recovery
tags:
  - endpoint-security
  - trend-vision-one
---

 Email Recovery Enable Cloud Email Gateway Protection to retain and restore emails that were previously marked for deletion. Cloud Email Gateway Protection provides Email Recovery to retain emails that were deleted due to policy rule matches. This allows for restoration of emails that were mistakenly deleted before they are permanently purged and become unrecoverable. With Email Recovery, Cloud Email Gateway Protection helps ensure your business continuity and reduce the risk of data loss. When enabled, Cloud Email Gateway Protection retains deleted emails for 14 days and manages the recovery process. Automatic email recovery may take place in instances where certain conditions, such as system updates, lead to a higher number of false positives. In such cases, Cloud Email Gateway Protection utilizes specialized tools to restore all affected emails. If you prefer not to have your email data retained in Cloud Email Gateway Protection, disable this feature. Important Only Cloud Email Gateway Protection can restore deleted emails. This functionality is not available at your discretion through the administrator console. If you wish to gain control over restoring emails, Trend Micro recommends that you change the action configured in your policies from Delete to Quarantine. Procedure Go to Administration → Other Settings → Email Recovery. Enable or disable Email Recovery. Click Save. Restored emails can be located in the mail tracking logs. In the Mail Tracking Details dialog of a restored email, the Policies Evaluated field indicates that the email was delivered by Trend Micro. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base