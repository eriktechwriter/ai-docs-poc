---
id: prerequisites-for-data-migration
title: Prerequisites for data migration
sidebar_label: Prerequisites for data migration
description: Prerequisites for data migration
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Prerequisites for data migration Before migrating data from IMSS 9.1 or IMSVA 9.1, make sure the following has been done: Add, provision, and verify the domains you want to manage through Cloud Email Gateway Protection. For details, see Adding a domain. Synchronize with LDAP servers using the Directory Synchronization Tool if IMSS or IMSVA has enabled LDAP settings. The Directory Synchronization Tool is available under Administration → Other Settings → Directory Management. For details, refer to Directory Synchronization Tool User's Guide. Enable IMSS or IMSVA to support Cloud Email Gateway Protection migration by doing the following: On the IMSS or IMSVA management console, go to Administration → Updates → System & Applications and check the build number. If the build number does not meet the following requirements, install the latest service pack and hotfix. IMSS 9.1.0.1357 or later IMSVA 9.1.0.2011 or later Enable the hidden key in the IMSS or IMSVA admin database by running the following SQL statements: Note IMSS and IMSVA use the same configuration file imss.ini. insert into tb_global_setting (section, name, value, inifile) values ('imp_exp', 'enable_ems_migrate', '1', 'imss.ini'); Export configuration files from the IMSS or IMSVA management console under Administration → Import/Export. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base