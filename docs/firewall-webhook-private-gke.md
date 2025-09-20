---
id: firewall-webhook-private-gke
title: Adding a firewall rule for admission-webhook in private GKE clusters
sidebar_label: Adding a firewall rule for admission-webhook in private GKE clusters
description: Adding a firewall rule for admission-webhook in private GKE clusters
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Adding a firewall rule for admission-webhook in private GKE clusters Private GKE clusters require an additional VPC network firewall rule for the admission-webhook to work. Follow the instructions in Google Cloud Documentation (Adding firewall rules for specific use cases) to add a firewall rule allowing traffic from your master’s source IP range to the trendmicro-admission-controller pod. When creating the rule, you need to specify the port that allows traffic. The trendmicro-admission-controller pod has port 8443 enabled. The following is an example of the gcloud command for adding the firewall rule: gcloud compute firewall-rules create "allow-apiserver-to-admission-webhook-8443" \ --action ALLOW \ --direction INGRESS \ --source-ranges ${CONTROL_PLANE_RANGE} \ --rules tcp:8443 \ --description="Allow apiserver access to admission webhook pod on port 8443" \ --target-tags ${TARGET} © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base