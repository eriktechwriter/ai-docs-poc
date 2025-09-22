---
id: wn-image-signature
title: Image Signature Verification for Admission Control
sidebar_label: Image Signature Verification for Admission Control
description: Image Signature Verification for Admission Control
tags:
  - endpoint-security
  - trend-vision-one
---

 Image Signature Verification for Admission Control July 10, 2025—Trend Vision One Container Security now helps you enforce software supply chain security with the new Image Signature Verification deployment rule. This rule, available in Kubernetes protection policies, validates that container images are signed by a trusted source using the Cosign tool before they are deployed to your cluster. You can create rules that automatically block or log any image that is not signed with one of your approved public keys, ensuring that only authentic and untampered images can run in your environment. Use conditions to apply this verification to specific image registries or repositories for granular control. Important To verify signatures for images stored in private registries, you must configure your Helm override file to allow the admission controller to access your registry. For more information, see the Trend Vision One Container Security Helm Chart public GitHub repository. Locate this feature: Cloud Security → Container Security → Container Protection. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base