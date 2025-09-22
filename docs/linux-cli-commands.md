---
id: linux-cli-commands
title: Linux CLI commands
sidebar_label: Linux CLI commands
description: Linux CLI commands
tags:
  - endpoint-security
  - trend-vision-one
---

 Linux CLI commands Trend Vision One provides CLI commands when installing or uninstalling the Endpoint Basecamp XDR sensor and Linux endpoint sensor on a Linux endpoint. Important The listed CLI commands require root privileges to run. Command or Parameter Description Example install Installs Endpoint Basecamp # ./tmxbc install config set --proxyURL <proxy_server_URL> Configures the Endpoint Basecamp program to use the specified proxy server Important Endpoint Basecamp does not support the use of proxy credentials. # ./tmxbc config set --proxyURL http://10.1.1.1:80 # ./tmxbc config set --proxyURL http://[fe80::340a:7671:64e7:14cc]:80 # ./tmxbc config set --proxyURL "" Removes the proxy server from the configuration -v, --version Displays the Endpoint Basecamp version # ./tmxbc -v # ./tmxbc --version -h, --help Displays help information # ./tmxbc -h # ./tmxbc config --help uninstall Uninstalls Endpoint Basecamp # ./tmxbc uninstall © 2025 Trend Micro Incorporated. All rights reserved.Search Knowledge Base