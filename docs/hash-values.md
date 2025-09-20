---
id: hash-values
title: Hash Values
sidebar_label: Hash Values
description: Hash Values
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Hash Values You can configure Application Control to match applications using SHA-1 or SHA-256 hash value formats. You can choose to manually specify hash values or import a list of generated values. Select your Input method and follow the on-screen instructions. Input Method Description Manual Allows you to manually specify up to 100 hash values (and descriptions) Import Allows you to import a ZIP package containing a properly formatted hash value list in CSV format You can choose to use the Hash Generator tool or manually create the CSV file using the CSV sample format. WARNING You can only import one file into each set of criteria. If you attempt to import a new hash value list into the criteria, Application Control completely overwrites the existing values. Hash Generator tool: Download and execute the tool on a target endpoint that you have installed with all necessary applications. The tool automatically creates a valid ZIP package containing the hash values of all applications found on the endpoint. CSV sample format: Download the sample file and follow the instructions to properly populate the hash value list. Once you have completed the list, compress the file in ZIP format before importing into the set of criteria. Important The hash value list cannot contain a mixture of SHA-1 and SHA-256 formats. You must create separate hash value files and separate Application Control criteria for each type of hash value format. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base