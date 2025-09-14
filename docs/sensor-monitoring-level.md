---
slug: trend-vision-one-sensor-monitoring-level
title: About Monitoring Level
---

Adjust the strictness and sensitivity of enabled endpoint sensors on your Trend Vision One Endpoint Security agent.

:::warning[Important]
- Monitoring level only supports Windows endpoints.

- Some components used by higher monitoring levels are not available on all platforms.
:::

The **Monitoring level** setting allows you to set the sensitivity of the endpoint sensor on your managed Trend Vision One Endpoint Security agents and the strictness applied when responding to potential threats. Higher levels allow for more strict monitoring to help with situations like on-going threat investigations, but might generate a large number of nonessential logs and impact endpoint performance. Additionally, certain agent components are only used when you configure higher monitoring levels.

Because of the potential impact on endpoint performance and the generation of additional detection logs, Trend Micro recommends using the default setting of **2 - Moderate** for your deployed agents. Only use the higher levels if you are investigating an on-going threat, or if instructed by your support provider.
