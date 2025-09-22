---
id: actions
title: intercept actions
sidebar_label: intercept actions
description: intercept actions
tags:
  - endpoint-security
  - trend-vision-one
---

 intercept actions Intercept actions prevent a message from being delivered to the mailbox of the original recipient. Instead, the message is deleted, quarantined, or sent to a different recipient. Intercept actions are "terminal" actions. Once a terminal action executes, processing of that policy rule stops and no further action takes place for that policy rule. Terminal actions execute following a strict priority order: Delete the entire message. Deliver the message now. WARNING The Deliver now action is not recommended for use as the only action. If you choose Deliver now as the only action for Spam mail, for example, all of that mail will simply be delivered to your recipients, as if there were no spam filter in place. If you use Deliver now with a virus policy rule, ensure that you also have a Delete action for the virus policy rule. Only the Delete action takes higher priority than Deliver now and so would be processed before it (and then terminate the processing of that policy rule). If you chose Deliver now as the only action for a virus policy rule, mail containing viruses would leak through unblocked. Quarantine the message. Change recipient. Related information Using the delete action Using the deliver now action Using the quarantine action Using the change recipient action © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base