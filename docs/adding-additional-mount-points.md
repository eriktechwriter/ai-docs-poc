---
id: adding-additional-mount-points
title: Add a mount point
sidebar_label: Add a mount point
description: Add a mount point
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Add a mount point When you add the Trend Micro File Security Virtual Appliance to your Service Gateway, the Service Gateway appears on the File Security Inventory page. Virtual appliances can have multiple servers, and servers can have multiple mount points with a scanner on each mount point. From this page you can add, modify, remove, or turn off servers and mount points for a specific Virtual Appliance. Virtual Appliance can be used with the following file systems: NFS3, NFS4 SMB 3.0, SMB 3.1 Note SMB requires Service Gateway 3.0.19 or higher. Procedure In Trend Vision One go to Cloud Security → File Security. Click Inventory. Click the Virtual Appliance node. Under Actions, click the Modify Mount Point (pen) icon for the Service Gateway that you want to add the mount point.The Add Mount Point drawer opens. Click Add. Select the Protocol. Note Depending on your protocol, you may need to enter the Username and Password to access the folder. Enter the Server IP. Enter the Server folder path. Enable Scanning.You can enable scanning later if you want. If you want to enable Predictive Machine Learning. If you want to quarantine suspicious files: Enable Quarantine. Enter the name of the folder in which the files are to be quarantined in the Quarantine destination field. Important The Quarantine destination folder must be a subfolder of the Server folder path that you entered in step 9 and have write access enabled. Click Add. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base