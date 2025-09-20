---
id: clean-up-temporary-files
title: Clean up temporary files
sidebar_label: Clean up temporary files
description: Clean up temporary files
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Clean up temporary files Each scan initiated against a registry image using the Trend Micro Artifact Scanner (TMAS) generates a new temporary directory under $TMPDIR to download and analyze the image. For version 1.35.0 and later, this tool automatically removes those temporary files after scan execution. To clean up existing temporary files that were generated with prior versions or by an interrupted scan, use the following commands (or its platform equivalent) under your discretion: echo $TMPDIR ls $TMPDIR | grep "stereoscope-" cd $TMPDIR && rm -rf ./stereoscope-* ls $TMPDIR | grep "stereoscope-" © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base