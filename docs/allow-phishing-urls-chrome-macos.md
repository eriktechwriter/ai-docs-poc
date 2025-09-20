---
id: allow-phishing-urls-chrome-macos
title: Allow phishing simulation URLs in Google Chrome via group policy for macOS
sidebar_label: Allow phishing simulation URLs in Google Chrome via group policy for macOS
description: Allow phishing simulation URLs in Google Chrome via group policy for macOS
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Allow phishing simulation URLs in Google Chrome via group policy for macOS Configure Google Chrome on macOS devices settings to stop phishing simulation URLs from triggering Safe Browsing warnings. Procedure Record the Security Awareness sending IP addresses. On the Trend Vision One console, go to Cyber Risk Exposure Management → Security Awareness → Phishing Simulations. Click Settings. Click Settings and copy the sending IP addresses and simulation URLs. Important The sending IP addresses change over time. Check the list before launching a training campaign or phishing simulation. Create a .plist file and open the file in your preferred editor. Edit the .plist file to include the URLs and IP addresses you copied from Security Awareness Training. Add each root domain as a string entry under the key SafeBrowsingAllowlistDomains in the array. Save the .plist file. Convert the .plist file into a system policy using the conversion tool of your choice. Deploy the policy to devices via your mobile device management (MDM) solution. Verify you installed the policy successfully by restarting Chrome and going tochrome://policy. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base