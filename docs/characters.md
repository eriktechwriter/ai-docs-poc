---
id: characters
title: Characters
sidebar_label: Characters
description: Characters
tags:
  - endpoint-security
  - trend-vision-one
---

 Characters REGULAR EXPRESSION DESCRIPTION . (dot) Any character (byte) except newline x The character 'x' \\ The character '\' \a The alert (bell) character (ASCII 0x07) \b If this meta-symbol is within square brackets [] or by itself, it will be treated as the backspace character (ASCII 0x08). For example, [\b] or \b If this meta-symbol is at the beginning (or end) of a regular expression, it means any matched string of the regular expression must check whether the left (or right) side of the matched string is a boundary. For example: \bluck > left side must be the boundary luck\b > right side must be the boundary \bluck\b > both sides must be the boundary If this meta-symbol appears in the middle of a regular expression, it will cause a syntax error. \f The form-feed character (ASCII 0x0C) \n The newline (line feed) character (ASCII 0x0A) \r The carriage-return character (ASCII 0x0D) \t The normal (horizontal) tab character (ASCII 0x09) \v The vertical tab character (ASCII 0x0B) \n The character with octal value 0n (0 <= n <= 7) \nn The character with octal value 0nn (0 <= n <= 7) \mnn The character with octal value 0mnn (0 <= m <= 3, 0 <= n <= 7) \xhh The character with a hexadecimal value 0xhh, for example, \x20 means the space character Tip If your expression includes the characters \ | ( ) { } [ ] . ^ $ * + or ?, you must escape them by using a \ immediately before the character. Otherwise, they will be assumed to be regular expression operators rather than literal characters. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base