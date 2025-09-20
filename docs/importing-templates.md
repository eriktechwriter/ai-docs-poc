---
id: importing-templates
title: Importing Templates
sidebar_label: Importing Templates
description: Importing Templates
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Importing Templates Use this option if you have a properly-formatted .xml file containing the templates. You can generate the file by exporting the templates from the Trend Vision One administrator console. Procedure Go to Administration → Policy Objects → DLP Compliance Templates. Click Import and then locate the .xml file containing the templates. Click Open. A message appears, informing you if the import was successful. Note Every customized template is identified by its name field in the .xml file. This name is a unique internal name that does not display on the management console. If the file contains a customized template that already exists, the existing template is overwritten. If the file contains any predefined template, the predefined template is skipped during the import of the remaining customized templates. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base