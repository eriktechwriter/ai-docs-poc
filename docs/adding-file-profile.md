---
id: adding-file-profile
title: Adding a file profile
sidebar_label: Adding a file profile
description: Adding a file profile
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Adding a file profile Specify files by media type, file name, or true file type to form a file profile. Procedure On the Secure Access Resources screen, click the File Profiles tab and then click Add. The File Profile Settings screen appears. Specify a unique name and a description for the profile. Configure the types of files. Media Types: Media type of a file standardized by the Internet Assigned Numbers Authority (IANA) File Names: Name of a file that contains one or more of the configured strings, regardless of the file name extension. Note Wildcards are supported. Comma is not supported. True File Types: File header rather than the file name to indicate the actual file type. This prevents users from trying to bypass the scan engines by changing the file extension or by some other form of file manipulation. If you configure Media Types, File Names, and True File Types, and then use the file profile in an internet access rule, the rule applies when the requested files match any of the configured types. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base