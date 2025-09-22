---
id: cache-settings-for-scans-mac
title: Cache Settings for Scans
sidebar_label: Cache Settings for Scans
description: Cache Settings for Scans
tags:
  - endpoint-security
  - trend-vision-one
---

 Cache Settings for Scans Each time scanning runs, the agent checks the modified files cache to see if a file has been modified since the last agent startup. If a file has been modified, the agent scans the file and adds it to the scanned files cache. If a file has not been modified, the agent checks if the file is in the scanned files cache. If the file is in the scanned files cache, the agent skips scanning the file. If the file is not in the scanned files cache, the agent checks the approved files cache. Note The approved files cache contains files that Apex One (Mac) deems trustworthy. Trustworthy files have been scanned by successive versions of the pattern and declared threat-free each time, or threat-free files that have remained unmodified for an extended period of time. If the file is in the approved files cache, the agent skips scanning the file. If the file is not in the approved files cache, the agent scans the file and adds it to the scanned files cache. All or some of the caches are cleared whenever the scan engine or pattern is updated. If scans are run frequently and many files hit the caches, the scanning time reduces significantly. If scans are seldom run, disable the caches so that files can be checked for threats with each scan. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base