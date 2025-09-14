---
slug: trend-vision-one-create-sg-config-profile
title: Creating Service Gateway configuration profiles
---

Create configuration profiles to synchronize settings to multiple Service Gateway virtual appliances.

### Procedure {#procedure}

1.  Go to **Workflow and Automation → Service Gateway Management**.

2.  Go to the **Configuration Profiles** tab.

3.  Click **Create**.

    The **Create a Configuration Profile** window appears.

4.  Specify a name and description for the configuration profile and click **Save**.

    :::note
    You can modify the configuration profile name and description from the **General Information** section of the **Profile Settings** tab.
    :::

    The configuration profile appears in the **Configuration Profiles** list.

5.  Configure settings for a configuration profile.

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 75%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Setting</p></th>
    <th><p>Description</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Service Gateway settings</p></td>
    <td><ol>
    <li><p>Select a configuration profile from the <strong>Configuration Profiles</strong> list.</p></li>
    <li><p>Click <strong>Service Gateway Settings</strong> on the <strong>Profile Settings</strong> tab.</p></li>
    <li><p>Select <strong>Enforce the settings on all target Service Gateways</strong> under <strong>Service Gateway Automatic Update</strong> and <strong>Direct Server Return</strong>.</p>
    

    :::note
    
    <p>If you choose not to select the check boxes, you need to configure the settings for each target Service Gateway individually.</p>
    

    :::

    </li>
    <li><p>Configure the automatic update and Direct Server Return settings and click <strong>Save</strong>.</p>
    <p>For information on the configuration steps, see <a href="trend-vision-one-config-service-gateway-settings">Configuring Service Gateway settings</a>.</p></li>
    </ol></td>
    </tr>
    <tr>
    <td><p>Service Gateway services</p></td>
    <td><ol>
    <li><p>Select a configuration profile from the <strong>Configuration Profiles</strong> list.</p></li>
    <li><p>Click <strong>Add Service</strong> on the <strong>Profile Settings</strong> tab.</p></li>
    <li><p>Select a service from the drop-down menu.</p></li>
    <li><p>Configure settings for the individual service and click <strong>Save</strong>.</p>
    

    :::note
    
    <p>For information on individual services, see <a href="https://docs.trendmicro.com/en-us/documentation/article/trend-vision-one-service-gateway-services">Service Gateway services</a>.</p>
    

    :::

    </li>
    <li>(Optional) To enable or disable services for the configuration profile, select a service from the list on the <strong>Profile Settings</strong> tab and use the toggle to enable or disable the service.</li>
    <li>(Optional) To remove a service from the configuration profile, hover over the service name on the <strong>Profile Settings</strong> tab and click <img src="./images/trash_icon=GUID-47cf6867-6315-438e-8670-86ff36f22a28.webp" />.</li>
    </ol></td>
    </tr>
    </tbody>
    </table>

6.  Add target service gateways to a configuration profile.

    :::note
    Adding a service gateway to a configuration profile overwrites any existing appliance settings with the settings of the configuration profile. Target service gateways removed from a configuration profile retain the settings of that profile until individually modified.
    :::

    1.  Select a configuration profile from the **Configuration Profiles** list.

    2.  Click **Add Targets** on the **Targets** tab.

        The **Add Targets** window appears.

    3.  Select one or more available service gateways and click **Add Targets**.

        :::note
        If adding certain appliances to a configuration profile might affect system performance or connections to other Trend Vision One apps or services, a confirmation window appears to confirm the action.
        :::

        The specified appliances appear in the **Targets** list.

    4.  (Optional) To remove target service gateways from a configuration profile, select one or more appliances from the **Targets** list and click **Remove Targets**.

7.  (Optional) To delete a configuration profile, select a profile from the list and click **Delete**.

    The configuration profile disappears from the **Configuration Profiles** list.
