---
slug: trend-vision-one-qradar-xdr-integration
title: QRadar XDR integration
---

Install the add-on to share and view XDR data in QRadar including Workbench alerts, Observed Attack Techniques, and Trend Micro product detections.

:::warning[Important]
Before installation, ensure that your QRadar is running correctly to enable the transmission of XDR data to QRadar.
:::

:::note
The following instructions for installation is based on QRadar versions 7.3.3FP6+ and 7.4.1FP2+. Settings may vary for other versions of QRadar. Refer to the QRadar documentation for specific information related to your version.
:::

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration**.

2.  Click **QRadar XDR**.

3.  Copy the following information:

    - **Server FQDN**

    - **Authentication token**

4.  In the QRadar console, install the Trend Vision One for QRadar (XDR) add-on.

5.  In the QRadar console, go to **Admin → User Services → Authorized Services**.

6.  Copy the **QRadar Authentication token**.

7.  Go to **Admin → Apps → Trend Micro Vision One for QRadar (XDR)**.

8.  Paste the following information:

    - **Server FQDN**

    - **Authentication Token**

    - **QRadar Authentication Token**

9.  Configure the following settings:

    - **Proxy**: Select if you want to use the QRadar proxy settings or not.

    - **Data scope**: Select which data sources to pull from Trend Vision One.

      :::note
      The add-on requires selecting at least one data source. Workbench alerts is the default selection.
      :::

10. Click **Save**.

    QRadar begins pulling XDR data from Trend Vision One.

    :::warning[Important]
    After successfully installing the QRadar add-on, QRadar begins pulling XDR data from Trend Vision One. The add-on does not pull preexisting XDR data. You may need to allow some time before new XDR data starts to appear.
    :::
