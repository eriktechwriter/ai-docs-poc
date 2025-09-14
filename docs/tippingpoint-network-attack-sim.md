---
slug: trend-vision-one-tippingpoint-network-attack-sim
title: Running the TippingPoint network attack simulation
---

Update the Digital Vaccine package on a TippingPoint Security Management System and run a simulated network attack in Trend Vision One.

The TippingPoint network attack simulation requires a TippingPoint Security Management System (SMS) 6.2.0 or later connected to Trend Vision One and TippingPoint devices connected and protection enabled. Refer to the **Environmental requirements** instructions provided in the simulation description.

### Procedure {#procedure}

1.  Update the Digital Vaccine package on the TippingPoint SMS.

    1.  On the TippingPoint SMS web management console, go to **Profiles → Digital Vaccines**.

    2.  Click **Download from TMC**.

    3.  Select the latest Digital Vaccine package to download the package.

    4.  Select the package from the inventory and click **Activate**.

    Your TippingPoint SMS has downloaded and activated the latest Digital Vaccine package.

2.  Start the simulation.

    1.  On the Trend Vision One console, click the **Resource Center** icon (![](/images/resourceCenter=73b1d431-813b-467c-8098-62f12bb6e2af.webp)).

    2.  Click **Simulations**.

    3.  Click **Network Attack**.

        The **Network Attack Simulations** window appears.

    4.  Click the right arrow (![](/images/simulationsRightArrow=20220525102311.webp)) to select the **TippingPoint** simulation.

    5.  Click **Trigger Simulation Traffic**.

    The TippingPoint SMS triggers ghost traffic.

3.  Wait 5-10 minutes and then view the results.

    - In **Workbench**:

      1.  On the Trend Vision One console, go to **XDR Threat Investigation → Workbench**.

      2.  Click **Data source / processor**.

      3.  Click **Clear all** to deselect all sources, then select **TippingPoint Security Management System**.

      4.  Click outside of the **Data source / processor** menu to filter the results.

    - In **Observed Attack Techniques**:

      1.  On the Trend Vision One console, go to **XDR Threat Investigation → Observed Attack Techniques**.

      2.  Click **Data source / processor**.

      3.  Click **Unselect all** to deselect all sources, then select **TippingPoint Security Management System** in the **Network** section.

      4.  Click **Apply** to filter the results.
