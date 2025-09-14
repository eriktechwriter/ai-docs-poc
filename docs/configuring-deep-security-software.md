---
slug: trend-vision-one-configuring-deep-security-software
title: Configuring Deep Security Software
---

To begin receiving the security events from your Deep Security software, you must first enroll your Deep Security software and configure specific product settings.

:::warning[Important]
If you encounter any issues attempting to enroll your Deep Security software with Trend Vision One, check that you have the correct license provisioned. Contact your support provider for more information.
:::

### Procedure {#procedure}

1.  Copy the enrollment token from the Trend Vision One console.

    1.  On the Trend Vision One console, go to **Administration → Product Connector**.

    2.  Click **Connect**.

    3.  Select **Deep Security Software**.

    4.  Click the **Click to generate the enrollment token** link.

    5.  Copy the enrollment token.

2.  Paste the enrollment token to the Deep Security software.

    1.  On the Deep Security software console, go to **Administration → System Settings → Trend Vision One**

    2.  Under **Registration**, click **Registration enrollment token**.

    3.  In the dialog that appears, paste the enrollment token and click **Register**.

        After successful registration, your Deep Security software automatically enables **Forward security events to Trend Vision One** and changes the *Enrollment status* to "Registered".
