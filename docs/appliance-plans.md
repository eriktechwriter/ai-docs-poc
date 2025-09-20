---
slug: appliance-plans
title: Appliance Plans
---

Create and manage appliance plans to automate tasks such as hotfix and critical patch deployment.

Plans provide control over the scope and schedule of deployments to target Deep Discovery Inspector appliances. You can access the **Appliance Plans** screen from the Trend Vision One console by going to **Network Security → Network Inventory → Deep Discovery Inspector** and clicking **Manage**.

Each plan is created for a specific set of target appliances and is deployed on a on-time basis either immediately, or according to a custom schedule. Plans must match the product and language of the target appliances.

When a plan is deployed, **Network Security** sends instructions to the target appliances on when to download required files, and when to execute the plan.

:::note
**Network Security** only supports appliance plans for Deep Discovery Inspector version 6.5 Patch 1 or later. Upgrade your appliances to the latest version to ensure you can deploy plans through **Network Security**.
:::

You can perform the following actions on the **Appliance Plans** screen:

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 75%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Create a new plan</p></td>
<td><p>Add one of the following types of plans:</p>
<ul>
<li><p><a href="trend-vision-one-creating-hotfix-critical-patch-plan">Hotfix/Critical patch</a></p></li>
<li><p><a href="trend-vision-one-creating-firmware-update-plan">Firmware upgrade</a></p></li>
<li><p><a href="trend-vision-one-creating-replication-plan">Configuration replication</a></p></li>
<li><p><a href="trend-vision-one-vai-deployment-plan">Virtual Analyzer images</a></p></li>
</ul></td>
</tr>
<tr>
<td><p>View plan details</p></td>
<td><p>View the details of a plan and the execution status on target appliances</p>
<p>Click a plan name to <a href="trend-vision-one-plan-details">view details</a>.</p></td>
</tr>
<tr>
<td><p>Copy plans</p></td>
<td><p>Create a new plan by copying a previously created plan</p>
<p>Select a plan in the list and click <strong>Copy</strong>.</p>


:::note

<p>You can only copy one plan at a time.</p>


:::

</td>
</tr>
<tr>
<td><p>Delete plans</p></td>
<td><p>Permanently remove a plan from the Appliance Plans list</p>
<p>Select one or more plans in the list and click <strong>Delete</strong>.</p>


:::note

<p>Deleting a pending plan cancels all associated tasks. Deleted plans cannot be recovered.</p>
<p>You cannot delete plans with the <em>in progress</em> status.</p>


:::

</td>
</tr>
</tbody>
</table>

**Related information**

- [Plan Details](plan-details.md "Review information about your plans.")
- [Creating a hotfix/critical patch plan](creating-hotfix-critical-patch-plan.md "Create an appliance plan to deploy and install hotfix updates and patches.")
- [Creating a firmware update plan](creating-firmware-update-plan.md "Create an appliance plan to deploy and install firmware updates.")
- [Creating a configuration replication plan](creating-replication-plan.md "Create an appliance plan to replicate settings across deployed Deep Discovery Inspector appliances.")
- [Creating a Virtual Analyzer image deployment plan](vai-deployment-plan.md "Create an appliance plan to deploy prepared Virtual Analyzer images to Deep Discovery Inspector appliances.")
