---
id: greedy-quantifiers
title: Greedy quantifiers
sidebar_label: Greedy quantifiers
description: Greedy quantifiers
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Greedy quantifiers EXPRESSION DESCRIPTION R? Matches R, once or not at all R* Matches R, zero or more times R+ Matches R, one or more times R{n} Matches R, exactly n times R{n,} Matches R, at least n times R{n,m} Matches R, at least n but no more than m times R is a regular expression. Trend Micro does not recommend using ".*" in a regular expression. ".*" matches any length of letters and the large number of matches may increase memory usage and affect performance. For example: If the content is 123456abc, the regular expression ".*abc" match results are: 12345abc 23455abc 3456abc 456abc 56abc 6abc abc In this example, replace ".*abc" with "abc" to prevent excessive use of resources. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base