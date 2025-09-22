---
id: scan-embedded-office-objects
title: Scan embedded Microsoft Office objects
sidebar_label: Scan embedded Microsoft Office objects
description: Scan embedded Microsoft Office objects
tags:
  - endpoint-security
  - trend-vision-one
---

 Scan embedded Microsoft Office objects Important For macOS agents, scanning embedded Microsoft Office objects is not supported. Certain versions of Microsoft Office use Object Linking and Embedding (OLE) to insert files and other objects into Office files. These embedded objects can contain malicious code. Specify the number of OLE layers to scan to detect objects that are embedded in other objects. To reduce the impact on performance, you can scan only a few layers of embedded objects within each file. Procedure Open the properties of the malware scan configuration. On the Advanced tab, select Scan Embedded Microsoft Office Objects. Specify the number of OLE layers to scan. Click OK. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base