---
id: phishing-simulation-cegp
title: Phishing Simulation
sidebar_label: Phishing Simulation
description: Phishing Simulation
tags:
  - endpoint-security
  - trend-vision-one
---

 Phishing Simulation Decide whether to bypass inbound protection scans for Trend Micro and third-party phishing simulation emails. Trend Micro provides phishing simulations to enhance information security awareness of your employees against the latest threats and educate them to quickly and efficiently spot attacks. Trend Micro phishing simulations enable you to test what could happen to your organization before the hackers try. You can also let Cloud Email Gateway Protection skip scans for incoming emails sent from third-party phishing simulation services by adding their IP addresses to the list. Note A maximum of 10 third-party phishing simulation services is supported. Procedure Go to Administration → Other Settings → Service Integration and click Phishing Simulation. In the Trend Micro phishing simulation section, enable the Bypass scans for Trend Micro phishing simulations toggle to let Cloud Email Gateway Protection skip scans for incoming emails sent from Trend Micro phishing simulation IP addresses. Note You can check the Trend Micro phishing simulation IP addresses in the screen. In the Third-party phishing simulation section, add the IP addresses of each service provider that you want to skip email scanning. Click Add. In the Add Phishing Simulation Settings dialog, set Status to Enabled to have Cloud Email Gateway Protection apply phishing simulation email scan skipping to this service provider. Specify a unique name for this service provider setting. Add at least one and up to 10 IP addresses or CIDR blocks. Provide a description to help identify the setting among other settings. Click Save. To delete the settings that are no longer needed, select the settings and click Delete. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base