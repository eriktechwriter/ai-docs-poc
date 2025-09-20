---
slug: remote-shell-mac-endpoints
title: Remote Shell Commands for Mac Endpoints
---

Use the available remote shell commands to investigate Mac endpoints.

:::note
When specifying a file location, be aware that UNC paths are not supported.
:::

<table>
<colgroup>
<col style="width: 14%" />
<col style="width: 14%" />
<col style="width: 28%" />
<col style="width: 28%" />
<col style="width: 14%" />
</colgroup>
<thead>
<tr>
<th><p>Command</p></th>
<th><p>Description</p></th>
<th><p>Syntax</p></th>
<th><p>Example</p></th>
<th><p>Supported on</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><code>cat</code></p></td>
<td><p>Output the content of the selected file (max size 1MB)</p></td>
<td><p><code>cat &lt;file_location&gt;</code></p></td>
<td><ul>
<li><p>To output the content of the <code>example.txt</code> file located in the current directory (<code>/Users/admin/Downloads</code>):</p>
<p>Downloads&gt;<code>cat example.txt</code></p></li>
<li><p>To output the content of the <code>example.txt</code> file located in the <code>/tmp</code> directory:</p>
<p>Downloads&gt;<code>cat /tmp/example.txt</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>cd</code></p></td>
<td><p>Change the current working directory</p></td>
<td><p><code>cd [path]</code></p>


:::note

<p>For the <code>&lt;path&gt;</code>, specify the absolute or relative path.</p>


:::

</td>
<td><p><code>cd /Users</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>clear</code></p></td>
<td><p>Clear screen</p></td>
<td><p><code>clear</code></p></td>
<td><p><code>clear</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>cp</code></p></td>
<td><p>Copy a file or directory to specific destination</p></td>
<td><p><code>cp &lt;source_object&gt; &lt;destination_object&gt; [--force]</code></p></td>
<td><ul>
<li><p>To copy the <code>Finances</code> directory in the current directory <code>/Users/admin/Downloads</code> to <code>/tmp</code> and overwrite the existing directory:</p>
<p>Downloads&gt;<code>cp Finances /tmp --force</code></p></li>
<li><p>To copy the <code>example.txt</code> file in the directory <code>/var</code> to <code>/tmp</code> and overwrite the existing <code>example.txt</code> file:</p>
<p>Downloads&gt;<code>cp /var/example.txt /tmp --force</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>env</code></p></td>
<td><p>List environment variables</p></td>
<td><p><code>env</code></p></td>
<td><p><code>env</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>fileinfo</code></p></td>
<td><p>List detailed file properties</p></td>
<td><p><code>fileinfo &lt;file_location_and_extension&gt;</code></p></td>
<td><ul>
<li><p>To list the file properties of the <code>example.txt</code> file in the current directory <code>/Users/admin/Downloads</code> :</p>
<p>Downloads&gt;<code>fileinfo example.txt</code></p></li>
<li><p>To list the file properties of the <code>example.txt</code> file located in the <code>/tmp</code> directory:</p>
<p>Downloads&gt;<code>fileinfo /tmp/example.txt</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>get</code></p></td>
<td><p>Collect a specific file and upload to Trend Vision One</p>
<p>Maximum file size: 4 GB</p></td>
<td><p><code>get &lt;file_location_and_extension&gt;</code></p></td>
<td><ul>
<li><p>To collect the file <code>example.txt</code> file in the current directory <code>/Users/admin/Downloads</code> :</p>
<p>Downloads&gt;<code>get example.txt</code></p></li>
<li><p>To collect the file <code>example.txt</code> file located in the <code>/tmp</code> directory:</p>
<p>Downloads&gt;<code>get /tmp/example.txt </code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>help</code></p></td>
<td><p>Display help information</p></td>
<td><p><code>help</code></p></td>
<td><p><code>help</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>ipconfig</code></p></td>
<td><p>Display network configuration information</p></td>
<td><p><code>ipconfig</code></p></td>
<td><p><code>ipconfig</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>kill</code></p></td>
<td><p>Terminate a running process</p></td>
<td><p><code>kill &lt;PID&gt;</code></p></td>
<td><p><code>kill 1234</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>ls</code></p></td>
<td><p>List contents of the directory</p></td>
<td><p><code>ls [path]</code></p>


:::note

<p>For the <code>&lt;path&gt;</code>, specify the absolute or relative path.</p>


:::

</td>
<td><p><code>ls</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>memdump</code></p></td>
<td><p>Create a process memory dump available as an encrypted archive from the Trend Vision One console</p></td>
<td><p><code>memdump --pid &lt;pid&gt;</code></p></td>
<td><p><code>memdump --pid 1234</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>mkdir</code></p></td>
<td><p>Create a new directory</p></td>
<td><p><code>mkdir &lt;path&gt;</code></p></td>
<td><ul>
<li><p>To create the <code>Finances</code> directory in the current directory <code>/Users/admin/Downloads</code> :</p>
<p>Downloads&gt;<code>mkdir Finances</code></p></li>
<li><p>To create the <code>Finances</code> directory in the <code>/tmp</code> directory:</p>
<p>Downloads&gt;<code>mkdir /tmp/Finances</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>mv</code></p></td>
<td><p>Move a file or directory to specific destination</p></td>
<td><p><code>mv &lt;source_object&gt; &lt;destination_object&gt; [--force]</code></p></td>
<td><ul>
<li><p>To move the <code>Finances</code> directory in the current directory <code>/Users/admin/Downloads</code> to <code>/tmp</code> and overwrite the existing directory:</p>
<p>Downloads&gt;<code>mv Finances /tmp --force</code></p></li>
<li><p>To move the <code>example.txt</code> file in the directory <code>/var</code> to <code>/tmp</code> and overwrite the existing <code>example.txt</code> file:</p>
<p>Downloads&gt;<code>mv /var/example.txt /tmp --force</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>netstat</code></p></td>
<td><p>List network statistics and active connections</p></td>
<td><p><code>netstat</code></p></td>
<td><p><code>netstat</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>ps</code></p></td>
<td><p>List running process information</p></td>
<td><p><code>ps</code></p></td>
<td><p><code>ps</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>pwd</code></p></td>
<td><p>Display current directory</p></td>
<td><p><code>pwd</code></p></td>
<td><p><code>pwd</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>rm</code></p></td>
<td><p>Delete a file or directory (and all sub-directories)</p></td>
<td><p><code>rm &lt;source_object&gt; [--force]</code></p></td>
<td><ul>
<li><p>To delete the <code>Finances</code> directory in the current directory <code>/Users/admin/Downloads</code> :</p>
<p>Downloads&gt;<code>rm Finances</code></p></li>
<li><p>To delete the <code>example.txt</code> file in the directory <code>/var</code> :</p>
<p>Downloads&gt;<code>rm /var/example.txt</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>run</code></p></td>
<td><p>Execute a previously uploaded script</p></td>
<td><p><code>run &lt;script_name_and_extension&gt; [arguments]</code></p></td>
<td><p><code>run demo.sh 1 "22 33" 44</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>service list</code></p></td>
<td><p>List service information</p></td>
<td><p><code>service list</code></p></td>
<td><p><code>service list</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>systeminfo</code></p></td>
<td><p>List system information</p></td>
<td><p><code>systeminfo</code></p></td>
<td><p><code>systeminfo</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>taskstatus</code></p></td>
<td><p>List status of response tasks created in the current session</p></td>
<td><p><code>taskstatus [--id=&lt;task_id&gt;]</code></p>
<p><code>&lt;task_id&gt;</code>: Optional parameter to specify the identifier of the response task.</p></td>
<td><p><code>taskstatus [--id=RM-20241207-00025]</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>user info</code></p></td>
<td><p>List account properties</p></td>
<td><p><code>user info &lt;username&gt;</code></p></td>
<td><p><code>user info john_doe</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>user list</code></p></td>
<td><p>List local user accounts</p></td>
<td><p><code>user list</code></p></td>
<td><p><code>user list</code></p></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
<tr>
<td><p><code>zip</code></p></td>
<td><p>Compress a file or directory in a zip archive and optionally encrypt the archive with a password</p></td>
<td><p><code>zip &lt;source_object1&gt; [&lt;source_object2...&gt; &lt;source_objectn&gt;] &lt;destination_object&gt; [--password &lt;password&gt;] [--force]</code></p></td>
<td><ul>
<li><p>To zip the contents of the <code>Finances</code> directory in the current directory <code>/Users/admin/Downloads</code> to <code>/tmp/directoryArchive.zip</code> , set password to "P@ssw0rd" and overwrite the existing file:</p>
<p>Downloads&gt;<code>zip Finances /tmp/directoryArchive.zip --password P@ssw0rd --force</code></p></li>
<li><p>To zip the <code>example.txt</code> file in the directory <code>/var</code> to <code>/tmp/exampleArchive.zip</code> and overwrite the existing file:</p>
<p>Downloads&gt;<code>zip /var/example.txt /tmp/exampleArchive.zip --force</code></p></li>
</ul></td>
<td><ul>
<li><p>XDR Endpoint Sensor</p></li>
<li><p>Deep Security Agent (managed by Trend Cloud One - Endpoint &amp; Workload Security)</p></li>
</ul></td>
</tr>
</tbody>
</table>
