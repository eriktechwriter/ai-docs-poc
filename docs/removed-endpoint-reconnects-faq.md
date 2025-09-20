---
slug: removed-endpoint-reconnects-faq
title: What happens when a removed endpoint reconnects to Trend Vision One Endpoint Security?
---

Removing an endpoint from Endpoint Inventory does not uninstall the agent package, regardless if the endpoint was removed manually or automatically by the [inactive agent removal settings](sensor-settings.md). The behavior of removing and reconnecting depends on when the endpoint was removed.

For endpoints removed before March 25, 2024:

- After removal, Endpoint Inventory creates a command to disable the endpoint sensor.

- The next time the endpoint powers on, it receives the disable command and removes the endpoint sensor.

- The endpoint does not reappear in Endpoint Inventory. To reconnect and enable the sensor, you must [download and reinstall the agent package](deploy-agents.md).

For endpoints removed after March 25, 2024:

- After removal, Endpoint Inventory creates a command to disable the endpoint sensor.

- Additionally, Endpoint Inventory creates a reconnect request. The reconnect request expires after 365 days.

- The next time the endpoint powers on, it receives the disable command and removes the endpoint sensor.

- After the removal process completes, the endpoint receives the reconnect request and automatically reinstalls the agent package.

  The endpoint sensor applies the currently configured general and global settings.

- After the reinstallation process completes, the endpoint appears in the Endpoint Inventory.

  :::note
  When reconnecting endpoints managed by a Protection Manager, the endpoints might take longer to reestablish their connection to their Protection Manager. While the endpoint is connecting, the endpoint displays the **Sensor only** status. Allow some time to re-synch with the assigned Protection Manager.

  If the endpoint does not receive the reconnect request, (for example, the reconnect request expires), you must [download and reinstall the agent package](deploy-agents.md) to reconnect the endpoint.
  :::

If you removed an endpoint for the purpose of connecting the endpoint to a different company, you must completely uninstall the agent package before you can install the agent package for the new company. For more information, see [Uninstalling Agents](uninstalling-agents.md).
