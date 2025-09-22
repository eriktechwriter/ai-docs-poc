---
id: shorthand-meta-symbol
title: Shorthand and meta-symbol
sidebar_label: Shorthand and meta-symbol
description: Shorthand and meta-symbol
tags:
  - endpoint-security
  - trend-vision-one
---

 Shorthand and meta-symbol Cloud Email Gateway Protection provides the following shorthand for writing complicated regular expressions. Cloud Email Gateway Protection will pre-process expressions and translate the shorthand into regular expressions. For example, {D}+ would be translated to [0-9]+. If a shorthand expression is enclosed in brackets (example: {}) or double-quotes, then Cloud Email Gateway Protection will not translate that shorthand expression to a regular expression. SHORTHAND DESCRIPTION {D} [0-9] {L} [A-Za-z] {SP} [(),;\.\\<>@\[\]:] {NUMBER} [0-9]+ {WORD} [A-Za-z]+ {CR} \r {LF} \n {LWSP} [ \t] {CRLF} (\r\n) {WSP} [ \t\f]+ {ALLC} . Cloud Email Gateway Protection also provides the following meta-symbols. The difference between shorthand and meta-symbols is that meta-symbols can be within a bracket expression. META-SYMBOL DESCRIPTION \s [[:space:]] \S [^[:space:]] \d [[:digit:]] \D [^[:digit:]] \w [_[:alnum:]] \W [^_[:alnum:]] © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base