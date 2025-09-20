---
slug: response-actions-section
title: Response actions
---

Object-specific actions allow you to directly respond to threats without leaving the Trend Vision One console.

You can take specific actions on events or objects found on the Trend Vision One console. After triggering a response, the Response Management app creates a task and sends the command to the target.

The following tables describe the actions you can take on containers, email messages, endpoints, networks, and user accounts.

:::warning[Important]
If you intend to take response actions on virtual machines, ensure that you follow the agent installer deployment instructions carefully. If you clone your own VDI machines, agent IDs are duplicated, and deployed agents cannot carry out response actions.
:::

**General**

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 50%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
<th><p>Supporting Services</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Add to Block List</p></td>
<td><p>Adds supported objects such as File SHA-1, URL, IP address, or domain objects to the User-Defined Suspicious Objects List, which blocks the objects on subsequent detections.</p>


:::note

<p>Adding an object to the User-Defined Suspicious Objects List does not terminate any active processes or connections to the object. To terminate active processes, ensure that you also trigger the <em>Terminate</em> response.</p>


:::


<p>For more information, see <a href="trend-vision-one-add-block-list-task">Add to Block List task</a>.</p></td>
<td><ul>
<li><p>Apex One as a Service</p>
<ul>
<li><p>Windows agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
</ul></li>
<li><p>Cloud App Security</p></li>
<li><p>Deep Discovery Inspector</p></li>
<li><p>Deep Security Software</p></li>
</ul></td>
</tr>
<tr>
<td><p>Collect File</p></td>
<td><p>Compresses the selected file detected by the network appliance in a password-protected archive and then sends the archive to Response Management.</p>
<p>For more information, see <a href="trend-vision-one-collect-file-task">Collect File task</a>.</p></td>
<td><ul>
<li><p>Trend Vision One</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
<li><p>Apex One as a Service</p>
<ul>
<li><p>Windows agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
<li><p>Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
<tr>
<td><p>Remove from Block List</p></td>
<td><p>Removes the File SHA-1, URL, IP address, or Domain object added to the User-Defined Suspicious Objects List through the Add to Block List response action.</p>
<p>For more information, see <a href="trend-vision-one-remove-block-list-task">Remove from Block List task</a>.</p></td>
<td><ul>
<li><p>Apex One as a Service</p>
<ul>
<li><p>Windows agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
</ul></li>
<li><p>Cloud App Security</p></li>
<li><p>Deep Discovery Inspector</p></li>
<li><p>Deep Security Software</p></li>
</ul></td>
</tr>
<tr>
<td><p>Submit for Sandbox Analysis</p></td>
<td><p>Submits the selected file objects for automated analysis in a sandbox, a secure virtual environment.</p>
<p>For more information, see <a href="trend-vision-one-submit-for-sandbox-analysis-task">Submit for Sandbox Analysis task</a>.</p></td>
<td><ul>
<li><p>Trend Vision One</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
<li><p>Apex One as a Service</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
<li><p>Deep Discovery Inspector</p></li>
<li><p>Virtual Network Sensor</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Endpoint**

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 50%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
<th><p>Supporting Services</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Dump Process Memory</p></td>
<td><p>Directly accesses an endpoint and executes remote shell commands to identify currently running processes that may be causing suspicious activity during an investigation.</p>


:::warning[Important]

<p>The Dump Process Memory action is only triggered by the <code>memdump</code> command through remote shell on endpoints running Windows or macOS.</p>
<p>For more information on supporting services and contexts for use, see <a href="trend-vision-one-start-remote-shell-session-task">Start Remote Shell Session task</a>.</p>


:::




:::note

<p>Use an external decompression program (such as 7-zip) to extract the file contents.</p>


:::

</td>
<td><ul>
<li><p>Trend Vision One</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
</ul></td>
</tr>
<tr>
<td><p>Isolate Endpoint</p></td>
<td><p>Disconnects the target endpoint from the network, except for communication with the managing Trend Micro server product.</p>
<p>For more information, see <a href="trend-vision-one-isolate-endpoint-task">Isolate Endpoint task</a>.</p></td>
<td><ul>
<li><p>Trend Vision One</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
<li><p>Apex One as a Service</p>
<ul>
<li><p>Windows agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
</ul></td>
</tr>
<tr>
<td><p>Restore Connection</p></td>
<td><p>Restores network connectivity to an endpoint that already applied the Isolate Endpoint action.</p>
<p>For more information, see <a href="trend-vision-one-restore-connection-task">Restore Connection task</a>.</p></td>
<td><ul>
<li><p>Trend Vision One</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
<li><p>Apex One as a Service</p>
<ul>
<li><p>Windows agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Linux agent</p></li>
<li><p>Mac agent</p></li>
</ul></li>
</ul></td>
</tr>
<tr>
<td><p>Run Remote Custom Script</p></td>
<td><p>Connects to a monitored endpoint and executes a previously uploaded PowerShell or Bash script file.</p>
<p>For more information, see <a href="trend-vision-one-run-remote-custom-script-task">Run Remote Custom Script task</a>.</p></td>
<td><ul>
<li><p>Trend Vision One</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Mac agent</p></li>
<li><p>Linux agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Mac agent</p></li>
<li><p>Linux agent</p></li>
</ul></li>
</ul></td>
</tr>
<tr>
<td><p>Scan for Malware</p></td>
<td><p>Performs a one-time scan on one or more endpoints for file-based threats such as viruses, spyware, and grayware.</p>
<p>For more information, see <a href="trend-vision-one-scan-for-malware-task">Scan for Malware task</a>.</p></td>
<td><ul>
<li><p>Trend Micro Apex One as a Service</p></li>
<li>Standard Endpoint Protection</li>
</ul></td>
</tr>
<tr>
<td><p>Start Remote Shell Session</p></td>
<td><p>Connects to a monitored endpoint and allows you to execute remote commands or a custom script file for investigation.</p>
<p>For more information, see <a href="trend-vision-one-start-remote-shell-session-task">Start Remote Shell Session task</a>.</p></td>
<td><ul>
<li><p>Trend Vision One</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Mac agent</p></li>
<li><p>Linux agent</p></li>
</ul></li>
<li><p>Trend Cloud One - Endpoint &amp; Workload Security</p>
<ul>
<li><p>Windows agent</p></li>
<li><p>Mac agent</p></li>
<li><p>Linux agent</p></li>
</ul></li>
</ul></td>
</tr>
<tr>
<td><p>Terminate Process</p></td>
<td><p>Terminates the active process and allows you to terminate the process on all affected endpoints.</p>
<p>For more information, see <a href="trend-vision-one-terminate-process-task">Terminate Process task</a>.</p>


:::note

<p>In certain cases, the remote shell <code>kill</code> command can be used to terminate a process, rather than using the Terminate Process task.</p>
<p>For more information on supporting services and contexts for use, see <a href="trend-vision-one-start-remote-shell-session-task">Start Remote Shell Session task</a>.</p>


:::

</td>
<td><ul>
<li><p>Apex One as a Service</p>
<ul>
<li><p>Windows agent</p></li>
</ul></li>
</ul></td>
</tr>
</tbody>
</table>

**Network**

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 50%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
<th><p>Supporting Services</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Collect Investigation Package</p></td>
<td><p>Compresses the selected investigation package that includes OpenIOC files describing Indicators of Compromise identified on the affected host or network in a password-protected archive and then sends the archive to Response Management.</p>


:::warning[Important]

<p>To execute the Collect Investigation Package action, you must first enable the <a href="https://docs.trendmicro.com/all/ent/ddi/v6.5/en-us/ddi_6.5_olh/virtualAnalyzer">Virtual Analyzer</a> in Deep Discovery Inspector.</p>


:::

</td>
<td><ul>
<li><p>Deep Discovery Inspector</p></li>
</ul></td>
</tr>
<tr>
<td><p>Collect Network Analysis Package</p></td>
<td><p>Compresses the selected network analysis package (including an investigation package, a PCAP file, and a selected file detected by the network appliance) in a password-protected archive and then sends the archive to Response Management.</p>


:::warning[Important]

<p>To execute the Collect Network Analysis Package task, you must first enable the <a href="https://docs.trendmicro.com/all/ent/ddi/v6.5/en-us/ddi_6.5_olh/virtualAnalyzer">Virtual Analyzer</a> and <a href="https://docs.trendmicro.com/all/ent/ddi/v6.5/en-us/ddi_6.5_olh/packetCapture">packet capture</a> function in Deep Discovery Inspector.</p>


:::




:::note

<p>The Collect PCAP File action only supports Deep Discovery Inspector 6.5 or above.</p>


:::


<p>For more information, see <a href="trend-vision-one-collect-network-analysis-package">Collect Network Analysis Package task</a>.</p></td>
<td><ul>
<li><p>Deep Discovery Inspector</p></li>
</ul></td>
</tr>
<tr>
<td><p>Collect PCAP File</p></td>
<td><p>Compresses the selected Packet Capture file in a password-protected archive and then sends the archive to Response Management.</p>


:::note

<p>The Collect PCAP File action only supports Deep Discovery Inspector 6.5 or above.</p>


:::




:::warning[Important]

<p>To execute the Collect PCAP File action, you must first enable the <a href="https://docs.trendmicro.com/all/ent/ddi/v6.5/en-us/ddi_6.5_olh/packetCapture">packet capture</a> function in Deep Discovery Inspector.</p>


:::

</td>
<td><ul>
<li><p>Deep Discovery Inspector</p></li>
</ul></td>
</tr>
</tbody>
</table>

**User Account / IAM**

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 50%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><p>Action</p></th>
<th><p>Description</p></th>
<th><p>Supporting Services</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>Disable User Account</p></td>
<td><p>Signs the user out of all active application and browser sessions of the user account. This task might take a few minutes to complete. Users are prevented from signing in any new session.</p>


:::note

&#10;

:::


<p>For more information, see <a href="trend-vision-one-disable-user-account-task">Disable User Account task</a>.</p></td>
<td><ul>
<li><p>Active Directory (on-premises)</p></li>
<li><p>OpenLDAP</p></li>
</ul></td>
</tr>
<tr>
<td><p>Enable User Account</p></td>
<td><p>Allows the user to sign in to new application and browser sessions. This task might take a few minutes to complete.</p>
<p>For more information, see <a href="trend-vision-one-enable-user-account-task">Enable User Account task</a>.</p></td>
<td><ul>
<li><p>Active Directory (on-premises)</p></li>
<li><p>OpenLDAP</p></li>
</ul></td>
</tr>
<tr>
<td><p>Force Password Reset</p></td>
<td><p>Signs the user out of all active application and browser sessions, and forces the user to create a new password during the next sign-in attempt. This task might take a few minutes to complete.</p>
<p>For more information, see <a href="trend-vision-one-force-password-reset-task">Force Password Reset task</a>.</p></td>
<td><ul>
<li><p>Active Directory (on-premises)</p></li>
<li><p>OpenLDAP</p></li>
</ul></td>
</tr>
</tbody>
</table>

**Related information**

- [Add to Block List task](add-block-list-task.md "Take preventive blocking measures on suspicious objects that may pose a security risk to your network using context menus on the Trend Vision One console.")
- [Collect File task](collect-file-task.md "After identifying a suspicious file object that you want to investigate in your local environment, you can collect the file in a password-protected archive and download the file from the Response Management app.")
- [Collect Network Analysis Package task](collect-network-analysis-package.md "After identifying a suspicious object that you want to investigate, you can collect the network analysis package (including an investigation package, a PCAP file, and a selected file detected by the network appliance) in a password-protected archive and download the file from the Response Management app.")
- [Disable User Account task](disable-user-account-task.md "After identifying a potentially compromised user account, you can disable the account.")
- [Enable User Account task](enable-user-account-task.md "After verifying the safety of a disabled user account, you can re-enable the account.")
- [Force Password Reset task](force-password-reset-task.md "After identifying a potentially compromised user account, you can force the user to create a new password.")
- [Isolate Endpoint task](isolate-endpoint-task.md "You can take preventive isolation measures on compromised endpoints that may pose a security risk to your network using context menus on the Trend Vision One console.")
- [Remove from Block List task](remove-block-list-task.md "After determining that a blocked object or sender is no longer a risk, you can remove the object from the applicable blocked list using the Response Management app.")
- [Restore Connection task](restore-connection-task.md "After resolving the security issue on an isolated endpoint, you can restore network connectivity using the Response Management app.")
- [Run Remote Custom Script task](run-remote-custom-script-task.md "Execute a PowerShell or Bash script on a target endpoint during an investigation.")
- [Scan for Malware task](scan-for-malware-task.md "Scan one or more endpoints for file-based threats such as viruses, spyware, and grayware.")
- [Start Remote Shell Session task](start-remote-shell-session-task.md "Directly access an endpoint and execute CLI commands or a custom script file during an investigation.")
- [Submit for Sandbox Analysis task](submit-for-sandbox-analysis-task.md "After identifying a suspicious file or URL object, you can submit the object for analysis in the Sandbox Analysis app using context menus on the Trend Vision One console.")
- [Terminate Process task](terminate-process-task.md "After identifying a suspicious or malicious process running on an endpoint, you can terminate the process using context menus on the Trend Vision One console.")
