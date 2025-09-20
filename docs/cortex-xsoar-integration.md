---
slug: cortex-xsoar-integration
title: Cortex XSOAR integration
---

Set up the Cortex XSOAR connector to view Workbench alerts and automate incident response in the Cortex XSOAR console.

The steps below provide instructions on how to create a new user account and which information is needed to complete setup in Cortex XSOAR.

:::note
Cortex XSOAR integration requires a user account with certain permissions including generating an *authentication token*. Trend Micro recommends creating a new user role and user account specifically for Cortex XSOAR integration.

For more information, see [Creating a User Role for Cortex XSOAR Integration](user-role-cortex-xsoar.md).
:::

### Procedure {#procedure}

1.  Download *Trend Micro Vision One* from the Cortex XSOAR Marketplace and open the app settings in the Cortex XSOAR console.

2.  Create a Trend Vision One user account to integrate with Cortex XSOAR:

    1.  In the Trend Vision One console, go to **Administration → User Accounts**.

    2.  Click **Add Account** to create a new user account.

        The **Add Account** panel opens.

    3.  Set **Role** to a user role configured with the recommended permissions for integration with Cortex XSOAR.

        For more information, see [Creating a User Role for Cortex XSOAR Integration](user-role-cortex-xsoar.md).

    4.  Set **Access level** to *APIs only*.

    5.  Click **Add**.

3.  Copy the user account *authentication token*:

    1.  Click the name of the user account you created.

        The **Edit Account** panel opens.

    2.  Click **Generate a new authentication token**.

    3.  Copy the *Authentication token* and paste into Cortex XSOAR.

4.  Go to **Workflow and Automation → Third-Party Integration** and click **Cortex XSOAR**.

5.  Copy the *Endpoint URL* and paste into Cortex XSOAR.

    Cortex XSOAR begins syncing with Trend Vision One.

    :::note
    After successfully installing the Cortex XSOAR connector, Cortex XSOAR begins pulling data from Trend Vision One. The add-on does not pull preexisting data. You may need to allow some time before new data starts to appear.
    :::

**Related information**

- [Creating a user role for Cortex XSOAR integration](user-role-cortex-xsoar.md "Create a custom user role to generate Authentication keys and enable integration with the Trend Micro Vision One for Cortex XSOAR app.")
