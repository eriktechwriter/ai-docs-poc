---
slug: deploying-connector
title: Deploy the Trend Vision One connector
---

Deploy the connector in Microsoft Sentinel using Azure Functions to enable alert data collection from Trend Vision One.

Once the connector is successfully deployed, Microsoft Sentinel begins pulling newly created alert data from Trend Vision One.

### Procedure {#procedure}

1.  In your Microsoft Sentinel workspace, go to **Content management → Content hub (Preview)**.

2.  In the **Content hub** page, search for **Trend Vision One** and click **Install**.

3.  Choose your workspace and click **Start** to install.

4.  After installation finishes, go to **Configuration → Data connectors**.

5.  Search for **Trend Vision One (using Azure Function)** and click **Open connector page**.

6.  On the connector page, go to **Instructions**.

7.  Copy the **Workspace ID** and **Workspace Key**.

8.  Click **Deploy to Azure**.

    The **Custom deployment** page appears.

9.  Configure the settings on the **Custom deployment** page.

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 75%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Setting</p></th>
    <th><p>Configuration Notes</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Subscription</p></td>
    <td><p>Manages deployed resources</p></td>
    </tr>
    <tr>
    <td><p>Resource group</p></td>
    <td><p>Where to deploy the connector</p></td>
    </tr>
    <tr>
    <td><p>Function Name</p></td>
    <td><p>Must be a unique name</p></td>
    </tr>
    <tr>
    <td><p>Workspace ID and Workspace Key</p></td>
    <td><p>The information you copied from Instructions.</p>
    <p>You can also access the information from Log Analytics.</p>
    <ol>
    <li><p>Go to your Workspace in <strong>Log Analytics</strong>.</p></li>
    <li><p>Go to <strong>Settings → Agents management</strong>.</p></li>
    <li><p>The information is on <strong>Windows servers</strong>, under <strong>Download agent</strong>.</p></li>
    </ol></td>
    </tr>
    <tr>
    <td><p>API Key</p></td>
    <td><p><a href="trend-vision-one-api-keys-third-party-apps">An API key</a> from a Trend Vision One user account</p>
    

    :::note
    
    <p>The Microsoft Sentinel connector requires an API key from a Trend Vision One user account with the SIEM role or a user role with greater permissions. The user account access level must include APIs.</p>
    

    :::

    </td>
    </tr>
    <tr>
    <td><p>Region Code</p></td>
    <td><p>The region code that corresponds to the location of your Trend Vision One instance</p>
    <p>The following are valid values: <code>au</code>, <code>eu</code>, <code>in</code>, <code>jp</code>, <code>sg</code>, and <code>us</code>.</p></td>
    </tr>
    <tr>
    <td><p>Storage prefix</p></td>
    <td><p>The storage prefix must comply with Azure naming conventions</p></td>
    </tr>
    </tbody>
    </table>

10. Click **Review + create**.

    Once the connector is successfully deployed, Microsoft Sentinel begins pulling newly created alert data from Trend Vision One. The connector does not pull preexisting alert data.

11. Go to **Overview → Resources** and click your newly created function app in your resource group.

12. Go to **Configuration → General Settings**.

13. Select **Python 3.9** from the **Python Version** menu.

14. Click **Save**.
