---
id: file-attri
title: File Attributes
sidebar_label: File Attributes
description: File Attributes
tags:
  - endpoint-security
  - trend-vision-one
---

 File Attributes File attributes are specific properties of a file. You can use two file attributes when defining data identifiers, namely, file type and file size. For example, a software development company may want to limit the sharing of the company's software installer to the R&D department, whose members are responsible for the development and testing of the software. In this case, the Trend Vision One administrator can create a policy that blocks the transmission of executable files that are 10 to 40 MB in size to all departments except R&D. By themselves, file attributes are poor identifiers of sensitive files. Continuing the example in this topic, third-party software installers shared by other departments will most likely be blocked. Trend Micro therefore recommends combining file attributes with other DLP data identifiers for a more targeted detection of sensitive files. For a complete list of supported file types, see the Data Protection Lists document at http://docs.trendmicro.com/en-us/enterprise/data-protection-reference-documents.aspx. Related information Predefined file attributes list Creating a file attribute list Importing a file attribute list © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base