---
id: fs-cs-resource-configurations
title: Resource configurations
sidebar_label: Resource configurations
description: Resource configurations
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Resource configurations The Helm chart includes default resource requests for each pod component that define the minimum resource requirements. The default values are set, based on typical workload requirements. However, they can be adjusted to meet your requirements. Current Default Resource Requests The following default resource requests are configured in values.yaml: Scanner Pod (scanner.resources.requests): CPU: 800m Memory: 2Gi Scan Cache Pod (scanCache.resources.requests): CPU: 250m Memory: 128Mi Backend Communicator Pod (backendCommunicator.resources.requests): CPU: 250m Memory: 128Mi Customize Resource Requests You can modify the resource requests during installation by using the --set flags. You can also modify the requests by overriding the values in your custom values.yaml file: # Example: Increase scanner resources for high-throughput scanningscanner: resources: requests: cpu: 1200mmemory: 4Gi # Example: Increase scan cache memory for larger cache requirementsscanCache: resources: requests: cpu: 500m memory: 512Mi Or by using the Helm command line: helm install my-release visionone-filesecurity/visionone-filesecurity \ -n visionone-filesecurity \ --set scanner.resources.requests.cpu=1200m \ --set scanner.resources.requests.memory=4Gi Trend Micro recommends that you only increase these resource requests from the defaults. Decreasing them below the minimum requirements may result in performance issues or pod failures. © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base