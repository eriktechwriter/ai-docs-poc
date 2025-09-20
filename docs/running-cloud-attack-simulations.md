---
id: running-cloud-attack-simulations
title: Running Cloud Attack Simulations with Container Security
sidebar_label: Running Cloud Attack Simulations with Container Security
description: Running Cloud Attack Simulations with Container Security
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Running Cloud Attack Simulations with Container Security Run simulated attacks on your cloud workloads to test your defenses and practice using Workbench and Observed Attack Techniques to analyze network threats. To run cloud attack simulations, you need to enable Trend Vision One Container Security and configure the T1552.001 ruleset. Then you can execute a command in a Linux container to trigger the simulated attack and review the results. Procedure Enable Trend Vision One Container Security Learn how to enable and configure Container Security Configure the T1552.001 rulesetLearn more about configuring rulesets in Container Security Run the cloud attack simulation by executing the following command in a Linux container monitored by Container Security: find / -name "credentials" -path "*/.aws/credentials" 2>/dev/null Review the simulation results: In the Trend Vision One console, go to the Workbench or Observed Attack Techniques page. Look for detections related to the T1552.001 attack technique. Analyze the alerts to see how Container Security identified and responded to the simulated attack. Note It may take a few minutes after running the simulation script for the results to appear in the console. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base