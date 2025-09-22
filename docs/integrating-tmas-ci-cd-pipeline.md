---
id: integrating-tmas-ci-cd-pipeline
title: Integrate Trend Micro Artifact Scanner (TMAS) into a CI/CD pipeline
sidebar_label: Integrate Trend Micro Artifact Scanner (TMAS) into a CI/CD pipeline
description: Integrate Trend Micro Artifact Scanner (TMAS) into a CI/CD pipeline
tags:
  - endpoint-security
  - trend-vision-one
---

 Integrate Trend Micro Artifact Scanner (TMAS) into a CI/CD pipeline Trend Micro Artifact Scanner (TMAS) can be integrated into your continuous integration (CI) or continuous delivery (CD) pipeline. For example, Jenkins projects can automatically build, test, and push Docker images to a Docker registry. Once pushed, the image may be instantly available to run in an orchestration environment. If open source vulnerabilities exist in the image, then they are a risk when the image is run. Since images are intended to be immutable, images should be scanned before they're deployed to a cluster. TMAS scans artifacts inside your CI/CD pipelines. You can install the Trend Micro Artifact Scanner CLI into your CI/CD pipeline to perform scans before artifacts are deployed to production. For vulnerability scans, TMAS takes the artifact that you want to scan and generates a Software Bill of Materials (SBOM). It then uploads the SBOM to Trend Vision One for processing and returns a vulnerability report. Examples of artifacts that TMAS can scan include: Container Images Binary Files Directories with source code OCI Archives Related information System requirements Download and install TMAS Update to the latest version Obtain an API key Add the CLI to your PATH © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base