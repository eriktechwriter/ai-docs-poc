---
slug: configuring-runtime-proxy-policies
title: Configuring Runtime Proxy policies
---

Edit and create proxy policies for your endpoint agents.

:::warning[Important]
Runtime Proxy Settings only supports the Trend Vision One Endpoint Security agent installed from Endpoint Inventory.

Sensor-only endpoints and Trend Vision One Endpoint Security agents deployed to endpoints managed by a connected endpoint security product only apply the Sensor Policy in Runtime Proxy Settings. You cannot add or remove target groups from the Sensor Policy.

You must update the agent to use this feature. Runtime Proxy Settings supports the following versions:

- Standard Endpoint Protection (Windows) version 14.0.13139 or later

- Server and Workload Protection (Windows/Linux ) version 20.0.1.9400 or later

- Trend Vision One Endpoint Security agent package June 2024 release or later

Runtime Proxy Settings do not apply to connected endpoint security agents. The settings only apply to the Trend Vision One Endpoint Security agent deployed to those endpoints. You must configure the proxy settings for your connected agents through the respective product consoles.
:::

Create or edit runtime proxy policies to assign proxy settings to your Trend Vision One Endpoint Security agents. Agents aapply runtime proxy policies after successfully registering to Trend Vision One.

Trend Micro recommends reviewing the following before configuring new proxy policies:

- Endpoint groups not assigned to any policy default to the Base Policy. Sensor-only endpoints and Trend Vision One Endpoint Security agents deployed to endpoints managed by a connected endpoint security product only apply the Sensor Policy. Trend Micro recommends reviewing and configuring the Sensor Policy and Base Policy before adding any new proxy policies.

- If you want to use a Service Gateway as a proxy, make sure to deploy and configure a Service Gateway with the Forward Proxy Service enabled. For more information, see [Deploy a Service Gateway and Configure Firewall Exceptions](deploy-service-gateway-exceptions.md).

- The Base Policy defaults to using all available Service Gateways. If you do not want to use a Service Gateway, you can either modify the Base Policy or create a new policy with no Service Gateways selected. Read the steps below for more information.

- The endpoint name criteria uses a partial match to apply the criteria to target endpoints. You can use the search function in Endpoint Inventory to test values to ensure the endpoints you want to target are included.

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Endpoint Security → Endpoint Inventory**

2.  Click the **Default and Global Settings** icon (![](/images/Global_Settings=GUID-1E10BFBD-3AFF-46DD-B853-0438EC2FD3F9.webp)) and then click **Global settings**.

3.  Go to the **Runtime Proxy Settings** tab.

4.  Click **Add Policy** to create a new policy, or click a policy name to edit.

    The **Runtime Proxy Policy Settings** window appears.

5.  Configure the **General Settings**.

    1.  Specify the **Policy name**.

    2.  To select the target endpoint groups, click the edit icon (![](/images/proxyConfigIcon=20230614160101.webp)).

    3.  In the window that appears, select one or more endpoint groups to target.

        Selecting a parent group automatically selects all child groups, and includes any child groups added later. You can clear the selection for specific child groups you do not want included in the policy. You can select a child group even if the parent group is already targeted by another policy.

        :::warning[Important]
        Endpoint groups which are not assigned to a policy apply the Base Policy.
        :::

    4.  Click **Select**.

6.  To add a priority, click the add icon (![](/images/add_icon=cf892c2f-1a1f-4d22-848f-023067e4a507.webp)).

    The **Runtime Proxy Policy Settings** window displays each priority as a tab in order of priority from left to right with the **Base priority** tab always on the right. New priorities are always added as the highest priority. You can rearrange priorities by clicking and dragging. You can delete a priority by clicking the remove icon (![](/images/xmark_icon=773fb77a-7552-4201-85f7-8d8bfb8f3251.webp)). You cannot delete the Base priority tab.

7.  Set the priority criteria.

    <table>
    <colgroup>
    <col style="width: 20%" />
    <col style="width: 40%" />
    <col style="width: 40%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Criteria type</p></th>
    <th><p>Description</p></th>
    <th><p>Input method</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p><strong>All</strong></p></td>
    <td><p>The priority rule applies to all endpoints in the selected endpoint groups</p>
    <p>The Base priority is set to <strong>All</strong> and cannot be changed.</p></td>
    <td><p>No input method, the rule applies to all endpoints.</p></td>
    </tr>
    <tr>
    <td><p><strong>Operating system</strong></p></td>
    <td><p>The priority rule applies to any endpoint with the specified operating system</p></td>
    <td><p>Click the edit icon (<img src="./images/proxyConfigIcon=20230614160101.webp" />) to select the OS family or a specific OS version.</p></td>
    </tr>
    <tr>
    <td><p><strong>Endpoint name</strong></p></td>
    <td><p>The priority rule applies to any endpoint containing at least one specified value in the endpoint name</p>
    <p>For example, if you specify <code>Test</code>, the priority rule applies to the endpoint <code>Test01</code>.</p></td>
    <td><p>Specify a value and either type a comma (,) or press ENTER to separate values.</p></td>
    </tr>
    <tr>
    <td><p><strong>IP range</strong></p></td>
    <td><p>The priority rule applies to any endpoint with an IP address within one of the specified ranges</p></td>
    <td><p>Specify an IP range in either IPv4 or IPv6 format. Click the add icon (<img src="./images/add_icon=cf892c2f-1a1f-4d22-848f-023067e4a507.webp" />) to add up to 3 IP ranges.</p></td>
    </tr>
    </tbody>
    </table>

    :::warning[Important]
    Endpoints must connect to Trend Vision One to receive the proxy information. If you choose to use the IP range criteria and a targeted endpoint IP Address changes, make sure the endpoint can access Trend Vision One with the new IP address.

    For example, if you move an endpoint to a new location, causing the IP address to change, the endpoint must connect to Trend Vision One to retrieve the proxy settings for the new location.
    :::

8.  Specify the Service Gateway policy.

    :::warning[Important]
    You must have at least one Service Gateway with Forward Proxy Service enabled to connect using this method.
    :::

    - Click **Use selected Service Gateways** to specify which Service Gateway appliances to connect

      After selecting this option, a drop-down appears. Select one or more Service Gateway appliances. Hover over the info icon (![](/images/infoIcon=5ca285cd-10f2-43bc-bcd6-147fcbd4db5a.webp)) to view the associated IPv4 address and enabled services.

    - Click **Use all available Service Gateways** to allow the endpoint agent to connect to any Service Gateway based on availability

    - Do not select anything and leave the settings blank if you do not want the targeted endpoints to connect to a Service Gateway appliance

9.  Specify the **Primary Custom Proxy Settings**.

    Leave the settings blank if you do not want the targeted endpoints to use a proxy server to connect to Trend Vision One.

    - **Proxy address**: The IPv4 address or FQDN of the proxy server

    - **Port**: The connection port for the proxy server

    - If the proxy server requires credentials, select **Require authentication credentials**, and provide the **Account** and **Password**.

10. Specify the **Default System Proxy Settings**.

    :::warning[Important]
    Linux agents do not support using the default system proxy.

    Server & Workload Protection agents do not support connecting with a default system proxy that requires authentication credentials.
    :::

    - If your endpoint system proxy requires authentication credentials, select **Require authentication credentials**, and provide the **Account** and **Password**.

    - Otherwise, leave blank.

11. After you have configured your priority settings, click **Save**.

    The policy appears on the Runtime Proxy Settings list. Target endpoints apply the proxy settings the next time they connect with Trend Vision One.
