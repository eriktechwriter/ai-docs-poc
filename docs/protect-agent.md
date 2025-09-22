---
id: protect-agent
title: Protect the agent
sidebar_label: Protect the agent
description: Protect the agent
tags:
  - endpoint-security
  - trend-vision-one
---

 Protect the agent During agent activation, the agent can authenticate the identity of the Server & Workload Protection console by pinning the console's certificate to the agent. It does this by validating the connecting console's certificate path and ensuring it is signed by a trusted Certificate Authority (CA). If the certificate path is validated, the console authentication passes and activates the agents. This prevents agents from activating with a malicious server pretending to be Server & Workload Protection. To protect your agents, you must configure each agent so it can recognize its authorized manager before the agent tries to activate: Procedure Go to Sectigo Intermediate Certificates - RSA. Click Download under Root Certificates > SHA-2 Root : USERTrust RSA Certification Authority. On the agent computer, copy the downloaded certificate to the server and rename it to ds_agent_dsm_public_ca.crt Move the ds_agent_dsm_public_ca.crt file to one of these locations: On Windows: %ProgramData%\Trend Micro\Deep Security Agent\dsa_core On Linux or Unix: /var/opt/ds_agent/dsa_core Troubleshooting If you are activating agent version 20.0.1412+, the following error message appears upon activation, which indicates you have not pinned Server & Workload Protection's certificate to the agent: "[Warning/2] | SSLVerifyCallback() - verify error 20: unable to get local issuer certificate" Pinning a trusted certificate is optional, so you can ignore this error if it does not apply to you. However, to use a trusted certificate, follow the provided steps before activating the agent. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base