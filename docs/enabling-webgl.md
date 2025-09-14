---
slug: trend-vision-one-enabling-webgl
title: Enable WebGL
---

Enable WebGL in your browser to properly show the Execution Profile.

:::note
Trend Vision One supports the newest version and most recent previous version of the following browsers:

- Google Chrome™

- Mozilla® Firefox®

- Microsoft Edge™ (Chromium-based)
:::

The following table outlines the steps to enable WebGL in supported browsers.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><p>Browser</p></th>
<th><p>Steps</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Google Chrome™</p></td>
<td><ol>
<li><p>Open a browser window and type <code>chrome://settings/system</code> in the address bar.</p></li>
<li><p>In the <strong>System</strong> section, turn on <strong>Use hardware acceleration when available</strong>.</p>
<p>You need to relaunch your browser for the change to take effect.</p></li>
<li><p>Type <code>chrome://gpu</code> in the address bar.</p></li>
<li><p>Under <strong>Graphics Feature Status</strong>, search for WebGL and check its status.</p>
<p>If the message <strong>Hardware accelerated</strong> appears, it indicates WebGL is running on the graphics card.</p></li>
</ol></td>
</tr>
<tr>
<td><p>Mozilla® Firefox®</p></td>
<td><ol>
<li><p>Open a browser window and type <code>about:config</code> in the address bar.</p></li>
<li><p>In the search box, type <code>webgl.disabled</code>.</p>
<p>If the value <strong>false</strong> appears, it indicates WebGL is enabled.</p></li>
</ol></td>
</tr>
<tr>
<td><p>Microsoft Edge™ (Chromium-based)</p></td>
<td><ol>
<li><p>Open a browser window and type <code>edge://settings/system</code> in the address bar.</p></li>
<li><p>In the <strong>System</strong> section, turn on <strong>Use hardware acceleration when available</strong>.</p>
<p>Relaunch your browser for the change to take effect.</p></li>
<li><p>Type <code>edge://gpu</code> in the address bar.</p></li>
<li><p>Under <strong>Graphics Feature Status</strong>, search for WebGL and review its status.</p>
<p>The message <strong>Hardware accelerated</strong> indicates WebGL is running on the graphics card.</p></li>
</ol></td>
</tr>
</tbody>
</table>
