---
id: load-balancing-for-icap-scanners
title: Load balancing for containerized ICAP scanners
sidebar_label: Load balancing for containerized ICAP scanners
description: Load balancing for containerized ICAP scanners
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Load balancing for containerized ICAP scanners Implementing a load balancer for your Trend Vision One File Security Containerized Scanner provides several benefits: High Availability: Load balancers distribute traffic across multiple scanner instances, ensuring service continuity even if individual pods fail. Scalability: You can scale your scanner deployments while maintaining a single endpoint for clients. External Access: Load balancers provide a consistent external endpoint for ICAP clients outside your Kubernetes cluster. Traffic Management: You control how requests are distributed (for example round-robin, least connections) to optimize resource utilization. Deployment Options Trend has tested two deployment options: AWS Network Load Balancer (NLB): Ideal for EKS deployments Layer 4 (TCP) load balancing Handles millions of requests per second Preserves client source IP addresses Optional TLS termination for enhanced security MetalLB: Ideal for on-premises or self-managed Kubernetes clusters Works where cloud load balancers aren't available Provides true LoadBalancer services in bare-metal environments Simple configuration with IP address pool allocation Compatible with existing network infrastructure Related information Expose the ICAP service with AWS NLB Expose ICAP Service with MetalLB © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base