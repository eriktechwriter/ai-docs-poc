---
slug: notifications-case-update-for-owner
title: Configure notifications for case update for owners
---

Send Trend Vision One email notifications about **Case update for owners** alerts.

The alert sends an email notification to case owners when any of the following updates are made to Trend Vision One cases, including Workbench cases, Forensics cases, Risk Event cases, and other cases.

<table>
<colgroup>
<col style="width: 35%" />
<col style="width: 65%" />
</colgroup>
<thead>
<tr>
<th><p>Category</p></th>
<th><p>Case Update</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Case information updates</p></td>
<td><ul>
<li><p>Case opened</p></li>
<li><p>Case name updated</p></li>
<li><p>Case description updated</p></li>
<li><p>Case owner updated</p></li>
<li><p>Case status updated</p>


:::note

<p>The updated case status includes manually closed cases and cases closed automatically due to inactivity.</p>


:::

</li>
<li><p>Case findings updated</p></li>
<li><p>Case priority updated</p></li>
</ul></td>
</tr>
<tr>
<td><p>Case content updates</p></td>
<td><ul>
<li><p>Alerts added to an insight</p></li>
<li><p>Alerts removed from an insight</p></li>
<li><p>Insights merged due to correlation</p></li>
<li><p>Comment updated</p></li>
<li><p>Note added</p></li>
<li><p>Note added with attachments</p></li>
<li><p>Note updated with attachments</p></li>
<li><p>Note deleted</p></li>
<li><p>Observed Attack Techniques event added</p></li>
<li><p>Observed Attack Techniques event removed</p></li>
<li><p>Case updated from ServiceNow</p></li>
<li><p>Forensics workspace created</p></li>
<li><p>Forensics workspace renamed</p></li>
<li><p>Forensics workspace updated</p></li>
<li><p>Forensics workspace closed</p></li>
<li><p>Forensics workspace expired</p></li>
<li><p>Forensics workspace deleted</p></li>
<li><p>Forensics timeline added</p></li>
<li><p>Case progress summarized</p></li>
<li><p>Investigation report generated</p></li>
<li><p>Asset added</p></li>
<li><p>Asset moved</p></li>
<li><p>Asset removed</p></li>
<li><p>Risk events status changed</p></li>
</ul></td>
</tr>
</tbody>
</table>

### Procedure {#procedure}

1.  In the Trend Vision One console, go to **Administration → Notifications**.

2.  Click **Case update for owners** to open its settings panel.

3.  Enable the alert toggle in the panel.

4.  Review the alert settings.

    :::warning[Important]
    The alert settings only apply to Trend Vision One cases in Case Management. Email notifications for MDR case updates are sent via the Business Success Portal.
    :::

    :::note
    For security reasons, email notifications are not supported for IdP-Only SAML Group Account users.
    :::

5.  Click **Save**.
