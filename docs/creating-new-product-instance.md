---
slug: trend-vision-one-creating-new-product-instance
title: Creating a new product instance
---

To better manage your endpoint policies and regions, you can use the Product Instance app to provision new Protection Managers for your endpoint agents.

You can use the product instance app to provision new instances of Protection Managers, allowing you access to the advanced features of Trend Vision One Endpoint Security and Trend Vision One Email and Collaboration Security without needing to connect and update existing Trend Micro security solutions.

### Procedure {#procedure}

1.  Go to **Service Management → Product Instance**.

2.  Click **Create Product Instance**.

3.  Define your new Protection Manager by specifying the required information.

    1.  Select an **Instance Type**.

        You can create the following Protection Managers. Each type has certain limitations based on if you have already created instances or connected existing solutions.

        <table>
        <colgroup>
        <col style="width: 25%" />
        <col style="width: 25%" />
        <col style="width: 50%" />
        </colgroup>
        <thead>
        <tr>
        <th><p>Protection Manager</p></th>
        <th><p>Associated App</p></th>
        <th><p>Notes and Limitations</p></th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td><p>Standard Endpoint Protection</p></td>
        <td><p>Endpoint Security</p></td>
        <td><ul>
        <li><p>You can create up to five instances from Product Instance.</p></li>
        <li><p>Instances created by updating from pre-existing solutions do not count towards the limitation on created instances.</p></li>
        </ul></td>
        </tr>
        <tr>
        <td><p>Server &amp; Workload Protection</p></td>
        <td><p>Endpoint Security</p></td>
        <td><ul>
        <li><p>You can create up to five instances from Product Instance.</p></li>
        <li><p>Instances created by updating from pre-existing solutions do not count towards the limitation on created instances.</p></li>
        </ul></td>
        </tr>
        <tr>
        <td><p>Cloud Email and Collaboration Protection</p></td>
        <td><p>Email and Collaboration Security</p></td>
        <td><ul>
        <li><p>You can only have one instance.</p></li>
        </ul></td>
        </tr>
        <tr>
        <td><p>Cloud Email Gateway Protection</p></td>
        <td><p>Email and Collaboration Security</p></td>
        <td><ul>
        <li><p>You can only have one instance.</p></li>
        </ul></td>
        </tr>
        </tbody>
        </table>

    2.  Specify a unique **Display name** to identify the instance in the associate app.

    3.  Select the **Region** for the geographic location of the data center that hosts data being sent from endpoints to Trend Micro.

    4.  Specify a description of the instance.

4.  Click **Save**.

    The Product Instance app starts provisioning the new environment. This process might take a few minutes to complete. Once the process is finished, you can access and configure the Protection Managers from their respective applications.
