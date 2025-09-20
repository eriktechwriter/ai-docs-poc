---
slug: alert-notifications
title: Alerts
---

View the alerts that generate notifications for new and ongoing security concerns.

When Trend Vision One triggers an alert, the alert generates a notification. The **Alerts** tab allows you to configure notification settings and manage recipient lists using email, webhook, and the Trend Vision One mobile app.

The following table describes the alerts available on Trend Vision One.

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 60%" />
</colgroup>
<thead>
<tr>
<th><p>Type</p></th>
<th><p>Related app</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Response task</p></td>
<td><p>Response Management</p></td>
<td><p>Sends a single email of the latest notifications when the status of a response task changes to a specified state</p>
<p>For more information, see <a href="trend-vision-one-response-management">Response Management</a>.</p></td>
</tr>
<tr>
<td><p>Watchlist match</p></td>
<td><p>Search</p></td>
<td><p>Sends a notification after matching data on a saved query watchlist</p>
<p>For more information, see <a href="trend-vision-one-saved-queries">Saved queries</a>.</p></td>
</tr>
<tr>
<td><p>New Workbench alert</p></td>
<td><p>Workbench</p></td>
<td><p>Sends a notification after creating a new alert</p>
<p>For more information, see <a href="trend-vision-one-all-alerts">All Alerts</a>.</p></td>
</tr>
<tr>
<td><p>Unusual product status</p></td>
<td><ul>
<li><p>Third-Party Integration</p></li>
<li><p>Service Gateway Management</p></li>
</ul></td>
<td><p>Sends a single email of the latest notifications when the status of connected products or sensors change to Unhealthy, Disconnected, or Inactive</p>
<p>The Audit Logs app creates notifications based on information from the Service Gateway Management, Network Inventory, Product Connector, and Zero Trust Secure Access apps.</p>
<p>For more information, see <a href="trend-vision-one-system-logs">System logs</a>.</p></td>
</tr>
<tr>
<td><p>New high-risk users/devices</p></td>
<td><p>Attack Surface Discovery</p></td>
<td><p>Sends a notification after detecting new users or devices classified as high-risk within the past 4 hours</p></td>
</tr>
<tr>
<td><p>Risk control rule match</p></td>
<td><p>Zero Trust Secure Access</p></td>
<td><p>Sends a single email of the latest notifications after detecting a secure access rule match</p></td>
</tr>
<tr>
<td><p>Private Access Connector status</p></td>
<td><p>Zero Trust Secure Access</p></td>
<td><p>Sends a single email of the latest notifications when the status of Private Access Connectors changes to Unhealthy or Disconnected</p></td>
</tr>
<tr>
<td><p>Internet Access On-Premises Gateway status</p></td>
<td><p>Zero Trust Secure Access</p></td>
<td><p>Send alerts when the status of Internet Access On-Premises Gateway changes to "Unhealthy", or when the on-premises gateway that serves as the authentication proxy for single sign-on is disconnected from your on-premises Active Directory server</p></td>
</tr>
<tr>
<td><p>Internet Access control rule detection</p></td>
<td><p>Zero Trust Secure Access</p></td>
<td><p>Sends a notification when any of the specified security detections occur based on an Internet Access control rule</p></td>
</tr>
<tr>
<td><p>Service Gateway critical service status or performance</p></td>
<td><p>Service Gateway Management</p></td>
<td><p>Sends alerts when a critical change in the performance or service status of a Service Gateway appliance occurs</p>
<p>For more information, see <a href="trend-vision-one-sg-appliance-configuration">Service Gateway appliance configuration</a>.</p></td>
</tr>
<tr>
<td><p>New risk event</p></td>
<td><p>Operations Dashboard</p></td>
<td><p>Sends alerts when any watchlisted risk events at the High or Medium risk level occur</p></td>
</tr>
<tr>
<td><p>Case update summary</p></td>
<td><p>Case Management</p></td>
<td><p>Sends a notification containing a summary of specified case updates based on the selected frequency</p>
<p>For more information, see <a href="trend-vision-one-notification-case-update-summary">Configure notifications for case update summary</a>.</p></td>
</tr>
<tr>
<td><p>Case update for owners</p></td>
<td><p>Case Management</p></td>
<td><p>Sends a notification every time a case update happens</p>
<p>For more information, see <a href="trend-vision-one-notifications-case-update-for-owner">Configure notifications for case update for owners</a>.</p></td>
</tr>
<tr>
<td><p>Newly discovered assets</p></td>
<td><p>Attack Surface Discovery</p></td>
<td>Sends alerts when any watchlisted assets are discovered in your environment</td>
</tr>
</tbody>
</table>
