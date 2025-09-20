---
slug: uninstalling-agents
title: Uninstalling Agents
---

Learn how to remove the Trend Vision One agent and components from your endpoint.

The Endpoint Inventory app provides an uninstall tool which removes the Trend Vision One agent and any associated components from your endpoint. Trend Vision One agent components contain functions for apps including Cyber Risk Assessment, Zero Trust Secure Access, and Endpoint Security.

To use the uninstall tool, you must have administrator access on the endpoint, and root privileges for macOS. Follow the steps for your endpoint operating system to uninstall the Trend Vision One agent:

- For Windows agents, uninstalling from a single endpoint or using Microsoft Endpoint Configuration Manager, see [Uninstall Windows Agents with the Tool](uninstall-windows-agents-tool.md).

- For Windows agents, uninstalling using Microsoft Intune, see [Uninstall Windows Agents with Microsoft Intune](uninstall-agents-intune.md).

- For macOS agents, see [Uninstall macOS Agents with the Tool](uninstall-macos-agents-tool.md).

The uninstaller tool currently does not support uninstalling agents from Linux endpoints. To uninstall Trend Vision One agents from your Linux endpoint:

- For all other agent types, contact your support provider.

After you finish uninstalling the agent, the Endpoint Inventory app might take some time to update. However, some endpoints may require you to manually sync the inventory or enable cleanup settings. For more information, see [Cleaning Up Uninstalled Agents](cleaning-up-uninstalled-agents.md).

**Related information**

- [Uninstall Windows Agents with the Tool](uninstall-windows-agents-tool.md "Use the uninstall tool to remove agents from Windows endpoints.")
- [Uninstall Windows Agents with Microsoft Intune](uninstall-agents-intune.md "Create a Microsoft Intune app to deploy the uninstall tool and remove the agent program for your endpoints.")
- [Uninstall macOS Agents with the Tool](uninstall-macos-agents-tool.md "Use the uninstall tool to remove agents from macOS endpoints.")
- [Cleaning Up Uninstalled Agents](cleaning-up-uninstalled-agents.md "Learn how to manually sync and remove endpoints from your Protection Managers after uninstalling the Trend Vision One agent.")
