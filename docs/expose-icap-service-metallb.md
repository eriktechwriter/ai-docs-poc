---
id: expose-icap-service-metallb
title: Expose ICAP Service with MetalLB
sidebar_label: Expose ICAP Service with MetalLB
description: Expose ICAP Service with MetalLB
tags:
  - endpoint-security
  - trend-vision-one
---

 Expose ICAP Service with MetalLB If you are using a bare-metal Kubernetes cluster or a cloud provider that does not support LoadBalancer services, you can use MetalLB to expose your ICAP service. Procedure Install MetalLB in MicroK8s # Enable MetalLB with an appropriate IP range for your network # Replace the IP range with one suitable for your network microk8s enable metallb:192.168.1.200-192.168.1.220 Note When choosing the IP range: Ensure it is within your local subnet Avoid conflicts with your DHCP server's range Choose IPs that are not already assigned to other devices Update my-values.yaml with the following content: scanner: # Other scanner settings remain unchanged externalService: enabled: true type: LoadBalancer # This creates an NLB annotations: {} icapPort: 1344 Update the deployment with MetalLB configuration: Run the following: helm upgrade my-release visionone-filesecurity/visionone-filesecurity \ -n visionone-filesecurity \ -f my-values.yaml Verify the MetalLB deployment: # Check the service status kubectl get service -n visionone-filesecurity | grep scanner-lb # Get the external IP assigned by MetalLB EXTERNAL_IP=$(kubectl get service -n visionone-filesecurity my-release-visionone-filesecurity-scanner-lb -o jsonpath='{.status.loadBalancer.ingress[0].ip}') echo "Your MetalLB external IP is: $EXTERNAL_IP" Install and use the c-icap-client to test your connection: # Install c-icap-client sudo apt-get install c-icap # Test with file scanning c-icap-client -i $EXTERNAL_IP -s scan -p 1344 -f sample.txt -x "X-scan-file-name: sample.txt" © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base