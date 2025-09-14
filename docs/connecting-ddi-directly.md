---
slug: trend-vision-one-connecting-ddi-directly
title: Connecting a Deep Discovery Inspector appliance directly
---

Connect a Deep Discover Inspector appliance using Network Inventory.

:::warning[Important]
- **Network Security** supports connecting with Deep Discovery Inspector version 5.7 Service Pack 3 or later. If your appliance is using a previous version (5.7 Service Pack 2 or prior), upgrade to the latest version to connect to **Network Security**.

- If you are connecting a Deep Discovery Inspector virtual appliance deployed using an image that is not company-specific, you must [activate the license](activate-ddi-clp.md) before connecting to **Network Security**.
:::

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Network Security → Network Inventory → Deep Discovery Inspector**.

2.  Click **Connect Appliance**.

3.  For **Product**, select **Deployed Deep Discovery Inspector**.

4.  Select your **Deep Discovery Inspector version.**

    1.  For versions **6.7 or later**, select **Direct connection** from the connection method list.

    :::note
    Make sure to verify your Deep Discovery Inspector version before connecting. Selecting the wrong version can cause the connection to fail.

    Deep Discovery Inspector version 5.7 Service Pack 2 and earlier are not supported. Upgrade to the latest version to connect to **Network Security**.
    :::

5.  Specify the Deep Discovery Inspector appliance IP address or FQDN.

    :::warning[Important]
    You can only access appliances that are part of your corporate network or that you can reach directly.
    :::

6.  Click **Go**.

    The Deep Discovery Inspector appliance console opens.

7.  On the Deep Discovery Inspector console, sign in with an administrator account.

8.  (Optional) Change the password.

9.  In the **Registering to Trend Vision One** dialog, click **Continue** to confirm the process.

10. In the Trend Vision One console, go to **Network Security → Network Inventory → Deep Discovery Inspector** to verify the connection status.
