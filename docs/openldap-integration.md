---
slug: openldap-integration
title: OpenLDAP integration
---

Synchronize data from OpenLDAP servers through a Service Gateway.

Synchronize data from on-premises OpenLDAP servers for risk assessments. This integration supports OpenLDAP 2.4 and above.

:::warning[Important]
At least one [Service Gateway](service-gateway-management.md) (version 2.0 and above) must be configured to enable integration.
:::

### Procedure {#procedure}

1.  Configure settings on Trend Vision One.

    1.  In the Trend Vision One console, go to **Workflow and Automation → Third-Party Integration**.

    2.  In the **Integration** column, click **OpenLDAP**.

    3.  Use the toggle to enable or disable the integration.

    4.  Under **Data Synchronization & User Access Control**, configure object sharing criteria.

        **Frequency**: Select the frequency at which data is shared.

    5.  Configure the connection between the Service Gateway and the integration.

        1.  Click **Connect OpenLDAP Server**

            The **Connection Settings** panel appears

        2.  Configure the integration server settings.

        3.  Select a Service Gateway.

        4.  (Optional) Click **Test Connection** to verify if the settings are valid.

        5.  Click **Connect**.

    6.  Repeat the previous step to add multiple connection configurations for this integration.

    7.  Click **Save**.
