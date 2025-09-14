---
slug: trend-vision-one-platform-api-keys
title: API Keys
---

The API Keys app offers a centralized location to create and manage your API keys, which can be used to access the Trend Vision One public APIs or third-party app integrations, like Splunk or QRadar.

From the API Keys app, you can create API keys, which enable third-party applications to connect with Trend Vision One APIs. The API keys are not attached to specific accounts, so you do not need to enter your user account email to create a new API key.

:::note
API keys that were moved from the User Accounts app cannot be edited.
:::

The following table outlines the actions available in the **API Keys** screen (**Administration → API Keys**).

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
<td><p>Add an API key</p></td>
<td><p>Click <strong>Add API Key</strong> to create a new API key.</p></td>
</tr>
<tr>
<td><p>Edit an API key</p></td>
<td><p>Click an <strong>API Key</strong> to modify the details like the name and role and restrict API access to specified IPv4 addresses or IPv4 ranges in CIDR notation.</p>


:::note

<p>Private IP addresses and wildcards are not supported.</p>


:::


The expiration time cannot be edited after the API key is created. API keys that were moved from User Accounts app cannot be edited.</td>
</tr>
<tr>
<td><p>Enable or disable an API key</p></td>
<td><p>Click the toggle in the <strong>Status</strong> column to enable or disable an API key.</p></td>
</tr>
<tr>
<td>Delete an API key</td>
<td><p>Select one or more API keys and click <strong>Delete</strong> to remove the selected keys.</p></td>
</tr>
</tbody>
</table>

**Related information**

- [Obtaining API keys for third-party apps](api-keys-third-party-apps.md "API keys allow third-party applications to access your Trend Vision One environment through authorized accounts.")
- [Obtaining API keys for third-party auditors](obtain-api-keys-third-party.md "Authentication tokens (API keys) allow third parties to audit your Trend Vision One environment through authorized accounts.")
