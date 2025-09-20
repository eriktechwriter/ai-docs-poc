---
id: wildcard-exceptions
title: Wildcard Exceptions
sidebar_label: Wildcard Exceptions
description: Wildcard Exceptions
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Wildcard Exceptions Scan exclusion lists for files and directories support the use of wildcard characters. Use the "?" character to replace one character and "*" to replace several characters. Use wildcard characters cautiously. Using the wrong character might exclude incorrect files or directories. For example, adding C:\* to the Scan Exclusion List (Files) would exclude the entire C:\ drive. Scan Exclusions Using Wildcard Characters Value Excluded Not Excluded c:\director*\fil\*.txt c:\directory\fil\doc.txt c:\directories\fil\files\document.txt c:\directory\file\ c:\directories\files\ c:\directory\file\doc.txt c:\directories\files\document.txt c:\director?\file\*.txt c:\directory\file\doc.txt c:\directories\file\document.txt c:\director?\file\?.txt c:\directory\file\1.txt c:\directory\file\doc.txt c:\directories\file\document.txt c:\*.txt All .txt files in the C:\ directory All other file types in the C:\ directory [] Not supported Not supported © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base