---
id: adding-custom-expression
title: Adding a custom expression
sidebar_label: Adding a custom expression
description: Adding a custom expression
tags:
  - endpoint-security
  - trend-vision-one
---

 Adding a custom expression Procedure On the Expressions tab, click Add. Type an expression name that does not exceed 256 characters. Type a description that does not exceed 256 characters. Define an expression and specify whether the expression is case-sensitive. Type the displayed data. For example, if you are creating an expression for ID numbers, type a sample ID number. This data is used for reference purposes only and will not appear elsewhere in the product. Choose one of the following criteria and configure additional settings for the chosen criteria (see Criteria for custom expressions): None Specific characters Suffix Single-character separator Select a validator for the expression. Note Data units follow semantic rules. Not every 9-digit number is a valid social security number and not every 15- or 16-digit number is a valid credit card number. To reduce false positives, expression validators check if the extracted data units follow these rules. Test the expression against an actual data. For example, if the expression is for a national ID, type a valid ID number in the Test data text box, click Test, and then check the result. Click Save if you are satisfied with the result. Note Save the settings only if the testing was successful. An expression that cannot detect any data wastes system resources and may impact performance. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base