---
id: adding-https-inspection-rule
title: Adding an HTTPS inspection rule
sidebar_label: Adding an HTTPS inspection rule
description: Adding an HTTPS inspection rule
tags:
  - endpoint-security
  - trend-vision-one
---

 Adding an HTTPS inspection rule Create an HTTPS inspection rule to decrypt content of specified URL categories, and apply the rule to selected locations. Procedure Go to Zero Trust Secure Access → Secure Access Configuration → Internet Access Configuration. Click the HTTPS Inspection tab. Click Add. Specify a Rule name and a Description. Automatically activate the HTTPS inspection rule by enabling the Status toggle. Configure Locations by selecting one of the following: All locations: The rule affects users from all gateways, IP addresses, and geographic locations. Selected locations: The rule only affects users located at specified corporate network locations or public/home network locations with specified IP addresses or geographic regions. For more information, see Internet Access gateways and corporate network locations. Select the URLs that the rule applies to. (Optional) Click Add Custom URL Category to specify new Custom URL categories. (Optional) Click Manage Inspection Exceptions to exclude HTTPS requests towards certain domains from being inspected by the Internet Access Gateway.For more information, see Inspection exceptions. Click the Certificate tab. The default CA certificate configured for the Internet Access Cloud and On-Premises Gateway on the Manage Default Certificate screen automatically loads. (Optional) If you want to use another CA certificate in the current rule, perform the following steps: Click Custom certificate under the desired gateway type. Cross-sign your CA certificate with the CSR file specific for the gateway type. Click Upload Custom Certificate and upload the cross-signed CA certificate to the console. Click Save. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base