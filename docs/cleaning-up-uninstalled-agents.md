---
slug: trend-vision-one-cleaning-up-uninstalled-agents
title: Cleaning Up Uninstalled Agents
---

Learn how to manually sync and remove endpoints from your Protection Managers after uninstalling the Trend Vision One agent.

If you used the uninstall tool to remove the Trend Vision One agent from your endpoint, some agents automatically sync with the Endpoint Inventory app to remove the endpoint from the inventory. The process might take some time to complete.

However, some endpoints might require you to manually sync your Product Managers or enable automatic cleanup settings. You might also need to manually sync the endpoint list in Zero Trust Secure Access.

### Procedure {#procedure}

1.  For sensor only endpoints, enable automatic removal of inactive endpoints.

    1.  On the Trend Vision One console, go to **Endpoint Security → Endpoint Inventory**.

    2.  Click the settings icon (![](/images/gear_icon=fc9a51ad-35af-4fe3-92c6-5e41b2dfc5d9.webp)) and go to **Global Settings**.

    3.  On the **Sensor Settings** tab, select **Automatically remove inactive Endpoint Sensor endpoints**.

    4.  Click **Save**.

2.  For Zero Trust Secure Access, manually refresh the endpoint list on the Secure Access Module screen.

    1.  On the Trend Vision One console, go to **Zero Trust Secure Access → Secure Access Configuration → Secure Access Module → Endpoints**.

    2.  Click the refresh icon (![](/images/refresh=5bd75452-c2fb-43ed-90e6-7b552fdc5dd2.webp)) to update the endpoint list.
