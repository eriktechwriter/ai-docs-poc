---
id: condition-logical-operators
title: Condition statements and logical pperators
sidebar_label: Condition statements and logical pperators
description: Condition statements and logical pperators
tags:
  - endpoint-security
  - trend-vision-one
---

 Condition statements and logical pperators Apply conditions and operators to custom DLP templates. Data loss prevention evaluates condition statements from left to right. Use logical operators carefully when configuring condition statements. Incorrect usage leads to an erroneous condition statement that will likely produce unexpected results. See the examples in the following table. Sample condition statements Condition statement Interpretation and example [Data Identifier1] And [Data Identifier 2] Except [Data Identifier 3] A file must satisfy [Data Identifier 1] and [Data Identifier 2] but not [Data Identifier 3]. For example: A file must be [an Adobe PDF document] and must contain [an email address] but should not contain [all of the keywords in the keyword list]. [Data Identifier 1] Or [Data Identifier 2] A file must satisfy [Data Identifier 1] or [Data Identifier 2]. For example: A file must be [an Adobe PDF document] or [a Microsoft Word document]. Except [Data Identifier 1] A file must not satisfy [Data Identifier 1]. For example: A file must not be [a multimedia file]. As the last example in the table illustrates, the first data identifier in the condition statement can have the "Except" operator if a file must not satisfy all of the data identifiers in the statement. In most cases, however, the first data identifier does not have an operator. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base