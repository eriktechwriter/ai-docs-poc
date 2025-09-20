---
id: allow-cloud-email-collab
title: Allow Security Awareness in Cloud Email and Collaboration Protection
sidebar_label: Allow Security Awareness in Cloud Email and Collaboration Protection
description: Allow Security Awareness in Cloud Email and Collaboration Protection
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Allow Security Awareness in Cloud Email and Collaboration Protection Ensure users protected by Cloud Email and Collaboration Protection can receive phishing simulation emails from Security Awareness. Cloud Email and Collaboration Protection in Trend Vision One protects the users in your organization's cloud email and collaboration services, such as Gmail, Microsoft 365, and OneDrive. Security policies may block phishing simulation emails sent to protected cloud email accounts. You must configure Cloud Email and Collaboration Protection to allow phishing simulation emails. Procedure In the Trend Vision One console, go to Cyber Risk Exposure Management → Security Awareness → Phishing Simulations and click the settings icon (). Go to the Allow List Settings tab and copy the provided key and value. Go to Cloud Email and Collaboration Protection → Policies and select Approved/Blocked Lists. Choose the tab corresponding to your cloud email provider and enable Approved Header Field List. Paste the previously copied key into the Name field and the value into the Value field. Click Add. In Cloud Email and Collaboration Protection → Policies, select an active email protection policy or create a new one. Go to the Virtual Analyzer policy section and click the Approved Lists tab. Enable the Approved Sender List. Type *@mailrelaysrv.com in the provided field and click Add. Click Save.Phishing simulation emails now bypass quarantine and allow for the clicking and opening of simulation links. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base