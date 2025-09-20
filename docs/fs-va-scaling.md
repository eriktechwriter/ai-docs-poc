---
id: fs-va-scaling
title: Scaling and performance with Virtual Appliance
sidebar_label: Scaling and performance with Virtual Appliance
description: Scaling and performance with Virtual Appliance
tags:
  - endpoint-security
  - trend-vision-one
---

/*<![CDATA[*/ $('#title').html($('meta[name=map-description]').attr('content')); /*]]>*/ Scaling and performance with Virtual Appliance The below information details scaling and performance of File Security Virtual Appliance. Performance metrics Below are some results of how long a scan takes for various file types. The server used for testing had the following specifications: Compute instance: 16 vCPU, 32 GiB memory, up to 10 Gbps network File storage server: NFS v3 server File type - 30 popular file types mixed Typical throughput: File scanned per unit 100k median size 1MB median size 10MB median size Scanned per minute 50,000 16,000 2,500 Scanned per hour 3,000,000 960,000 150,000 Scanned per day 72,000,000 23,040,000 3,6000,000 Performance test Sample file category Sample size range Median sample size Per 100MB scan time - median (seconds) Scans per minute (estimate) Scans per minute (actual) 10s of KB 700B - 66KB 25.6KB 4.28 140,000 scans per minute (@10KB} 60,000 scans per minute (@25KB) 100s of KB 163KB - 925KB 344KB 1.15 50,000 scans per minute (@100KB) 15,000 scans per minute (@350KB) 1s of MB 1.1MB - 7.7 MB 3.1MB .38 16,000 scans per minute (@1MB) 7,000 scans per minute (@3MB) 10s of MB 10MB - 130MB 26MB .24 2,500 scans per minute (@10MB) 1,000 scans per minute (@26MB) © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base