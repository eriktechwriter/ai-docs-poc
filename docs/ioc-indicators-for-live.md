---
id: ioc-indicators-for-live
title: Supported IOC Indicators for Live Investigations
sidebar_label: Supported IOC Indicators for Live Investigations
description: Supported IOC Indicators for Live Investigations
tags:
  - endpoint-security
  - trend-vision-one
---

 Supported IOC Indicators for Live Investigations An OpenIOC file is an XML file which contains one or more Indicators of Compromise (IOCs). Verify that the OpenIOC file uses indicator terms supported by the type of investigation selected. The table below lists the IOC indicators supported in investigations. Important When choosing an IOC file, you must ensure that the IOC indicators include the location of the file to match (either "FileItem/FullPath" or "FileItem/FilePath"). Category Item Required Condition Notes FILEITEM FULLPATH IS Refers to a complete directory path, file name, and extension FILEPATH IS, CONTAINS, STARTS-WITH, ENDS-WITH Partial matching supported FILENAME IS, CONTAINS, STARTS-WITH, ENDS-WITH Partial matching supported MD5SUM IS SHA1SUM IS SHA256SUM IS SIZEINBYTES IS CREATED GREATER-THAN, LESS-THAN Required format (in UTC): yyyy-mm-ddThh:mm:ss MODIFIED GREATER-THAN, LESS-THAN Required format (in UTC): yyyy-mm-ddThh:mm:ss ACCESSED GREATER-THAN, LESS-THAN Required format (in UTC): yyyy-mm-ddThh:mm:ss Note After selection, Endpoint Sensor displays a preview of the OpenIOC file. Review the preview to verify if the OpenIOC file contains supported indicators and conditions. Unsupported combinations are formatted with a strike-through and are ignored during the investigation. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base