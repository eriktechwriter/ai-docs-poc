---
id: distance-condition
title: Distance condition
sidebar_label: Distance condition
description: Distance condition
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Distance condition Some of the lists contain a “distance” condition to determine if a violation is present. “Distance” refers to the amount of characters between the first character of one keyword and the first character of another keyword. Consider the following entry: First Name:_John_ Last Name:_Smith_ The Forms - First Name, Last Name list has a “distance” condition of fifty (50) and the commonly used form fields of “First Name” and “Last Name”. In the example above, Data Loss Prevention triggers a violation as the number of characters between the “F” in First Name and the “L” in Last Name is equal to eighteen (18). For an example of an entry that does not trigger a violation, consider the following: The first name of our new employee from Switzerland is John. His last name is Smith. In this example, the number of characters between the “f” in “first name” and the “l” in “last name” is sixty-one (61). This exceeds the distance threshold and does not trigger a violation. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base