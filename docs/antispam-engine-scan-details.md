---
id: antispam-engine-scan-details
title: Antispam engine scan details
sidebar_label: Antispam engine scan details
description: Antispam engine scan details
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Antispam engine scan details Cloud Email Gateway Protection provides detailed information about email message scan by the Antispam Engine. To view the scan details, click the Antispam Engine Scan Details link in the Actions section on the Mail Tracking Details screen. Note This link is available if the message triggers scan by the Antispam Engine. Antispam Engine scan details Item Description Engine Version (X-TMASE-Version) The version of the Antispam Engine performing the scan. Scan Result (X-TMASE-Result) The scan result for the message. The value is formatted as <TrendType>-<Spam Score>-<Spam Threshold>. <TrendType>: Threat type. <Spam Score>: Spam score assigned by the Antispam Engine. A negative score may appear sometimes. For example, in the spam result 10--5.534000-4.000000, the score is -5.534. <Spam Threshold>: Spam level configured in the spam policy. For details, see Configuring spam criteria. Matched Rule ID (X-TMASE-MatchedRID) The Antispam Engine rule matched by the message during the scan. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base