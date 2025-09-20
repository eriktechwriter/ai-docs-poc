---
id: troubleshoot-azure-code-signing
title: Troubleshoot Azure Code Signing
sidebar_label: Troubleshoot Azure Code Signing
description: Troubleshoot Azure Code Signing
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Troubleshoot Azure Code Signing Since Microsoft Windows Agent components are now signed with Azure Code Signing (ACS), computers running earlier versions of Windows need to be updated with the Microsoft KB5022661 patch to be able to identify Azure Code Signing certificates. If this patch has not been applied, the Deep Security Agent installation or upgrade is expected to fail and the Deep Security Manager will display a warning to that effect. The following is a part of the Deep Security Agent log produced during a failed upgrade: The following is a part of the Deep Security Manager system event log produced during a failed upgrade: For more information, see Trend Micro Server and Endpoint Protection Agent minimum Windows version requirements for updated binaries after February 2023. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base