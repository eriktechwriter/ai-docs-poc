---
id: filepath-example-usage
title: File Path Example Usage
sidebar_label: File Path Example Usage
description: File Path Example Usage
tags:
  - endpoint-security
  - trend-vision-one
---

 File Path Example Usage Goal Allow Rule Block Rule Results Monitor all users' Downloads folder - Enable assessment mode Any local storage String C:\Users\*\Downloads\* Logs all attempts to access applications in all users' Downloads folder. Monitors: C:\Users\john_doe\Downloads\start.exe C:\Users\Administrator\Downloads\start.exe Block all applications located in any folder under theMyApps subfolder of either Program Files directory - Program Files folders String \MyApps* Blocks: C:\Program Files(x86)\MyApps\start.exe C:\Program Files\MyApps\start.exe C:\Program Files(x86)\MyApps\bin\start.exe Allows: C:\Program Files(x86)\start.exe Allow all applications located in any folder under theMyApps subfolder of either Program Files directory but Block all other applications/folders Program Files folders String \MyApps* Any local storage String C:\Program Files\* AND Any local storage String C:\Program Files (x86)\* Blocks: C:\Program Files(x86)\start.exe Allows: C:\Program Files(x86)\MyApps\start.exe C:\Program Files\MyApps\start.exe C:\Program Files(x86)\MyApps\bin\start.exe Block only applications located in theMyApps subfolder of either Program Files directory but Allow all other applications/folders Allow the subfolders of the MyApps directory Program Files folders String \MyApps\*\* Program Files folders String \MyApps\* Blocks: C:\Program Files(x86)\MyApps\start.exe C:\Program Files\MyApps\start.exe Allows: C:\Program Files(x86)\start.exe C:\Program Files(x86)\MyApps\bin\start.exe Block a specific application file name in any folder - Specific path Regular expression (PCRE) .*\\(?i)test(?-i)\..* Blocks: C:\MyApps\test.exe C:\Users\guet\AppData\Local\Temp\test.exe C:\Program Files(x86)\MyApps\test.exe © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base