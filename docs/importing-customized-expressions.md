---
id: importing-customized-expressions
title: Importing Customized Expressions
sidebar_label: Importing Customized Expressions
description: Importing Customized Expressions
tags:
  - endpoint-security
  - trend-vision-one
---

 Importing Customized Expressions Use this option if you have a properly-formatted .xml file containing the expressions. You can generate the file by exporting the expressions from the Trend Vision One administrator console. Procedure Go to Policies → Policy Resources → DLP Data Identifiers. Click the Expression tab. Click Import and then locate the .xml file containing the expressions. Click Open. A message appears, informing you if the import was successful. Note Every customized expression is identified by its name field in the .xml file. This name is a unique internal name that does not display on the administrator console. If the file contains a customized expression that already exists, the existing expression is overwritten. If the file contains any predefined expression, the predefined expression is skipped during the import of the remaining customized expressions. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base