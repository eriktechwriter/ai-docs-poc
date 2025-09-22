---
id: adding-keyword-expressions
title: Adding keyword expressions
sidebar_label: Adding keyword expressions
description: Adding keyword expressions
tags:
  - endpoint-security
  - trend-vision-one
---

 Adding keyword expressions New keyword expressions can be defined and saved, and then applied to a policy rule. Procedure Go to Administration → Policy Objects → Keywords and Expressions. Click Add. Type a name for the list of keyword expressions. Next to Match, select one of the following that specifies when Cloud Email Gateway Protection takes action: Select Any specified to match keywords based on a logical OR. Select All specified to match keywords based on a logical AND. Select Not the specified to apply the policy rule to messages that do not contain the keywords. Select Only when combined score reaches threshold to apply the policy rule to messages that contains one or more keywords whose combined score reaches a threshold. Next to Total message score to trigger action, specify a number that represents the maximum score for allowed keyword expressions. When you add an expression, you can set a value for Score. Create keyword expressions for the list. Click Add. Specify a keyword expression, set whether it is case sensitive, specify a description for the added keyword expression, and click Save. In the Test Area section, test the keyword expression against actual data. For example, if the expression is for a national ID, type a valid ID number in the Test data text box, click Test, and then check the result. Click Save if you are satisfied with the result. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base