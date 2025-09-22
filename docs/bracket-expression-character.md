---
id: bracket-expression-character
title: Bracket expression and character classes
sidebar_label: Bracket expression and character classes
description: Bracket expression and character classes
tags:
  - endpoint-security
  - trend-vision-one
---

 Bracket expression and character classes Bracket expressions are a list of characters and/or character classes enclosed in brackets []. Use bracket expressions to match single characters in a list, or a range of characters in a list. If the first character of the list is the carat ^ then it matches characters that are not in the list. For example: EXPRESSION MATCHES [abc] a, b, or c [a-z] a through z [^abc] Any character except a, b, or c [[:alpha:]] Any alphabetic character (see below) The following character classes must be within a bracket expression or it will be treated as a common expression. CHARACTER CLASS DESCRIPTION [:alpha:] Alphabetic characters [:digit:] Digits [:alnum:] Alphabetic characters and numeric characters [:cntrl:] Control character [:blank:] Space and tab [:space:] All white space characters [:graph:] Non-blank (not spaces, control characters, or the like) [:print:] Like [:graph:], but includes the space character [:punct:] Punctuation characters [:lower:] Lowercase alphabetic character [:upper:] Uppercase alphabetic character [:xdigit:] Digits allowed in a hexadecimal number (0-9a-fA-F) For example: a[[:digit:]]b matches "a0b", "a1b", ..., "a9b". a[:digit:]b matches "a:b", "adb", …, "atb". [[:digit:]abc] matches any digit or any of "a", "b", and "c". [abc[:digit:]] matches any digit or any of "a", "b", and "c". For a case-insensitive expression, [:lower:] and [:upper:] are equivalent to [:alpha:]. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base