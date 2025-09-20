---
slug: eventid-eventsubid-mapping
title: eventId and eventSubId mapping
---

<table>
<colgroup>
<col style="width: 8%" />
<col style="width: 20%" />
<col style="width: 14%" />
<col style="width: 57%" />
</colgroup>
<thead>
<tr>
<th><p>eventId</p></th>
<th><p>Event Type</p></th>
<th>eventSubId</th>
<th><p>Event Sub-Type</p></th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="8" style="vertical-align: top"><p>1</p></td>
<td rowspan="8" style="vertical-align: top"><p>TELEMETRY_PROCESS</p></td>
<td><p>1</p></td>
<td><p>TELEMETRY_PROCESS_OPEN</p></td>
</tr>
<tr>
<td><p>2</p></td>
<td><p>TELEMETRY_PROCESS_CREATE</p></td>
</tr>
<tr>
<td><p>3</p></td>
<td><p>TELEMETRY_PROCESS_TERMINATE</p></td>
</tr>
<tr>
<td><p>4</p></td>
<td><p>TELEMETRY_PROCESS_LOAD_IMAGE</p></td>
</tr>
<tr>
<td><p>5</p></td>
<td><p>TELEMETRY_PROCESS_EXECUTE</p></td>
</tr>
<tr>
<td><p>6</p></td>
<td><p>TELEMETRY_PROCESS_CONNECT</p></td>
</tr>
<tr>
<td><p>7</p></td>
<td><p>TELEMETRY_PROCESS_TRACME</p></td>
</tr>
<tr>
<td><p>8</p></td>
<td><p>TELEMETRY_PROCESS_LOAD_KERNEL_IMAGE</p></td>
</tr>
<tr>
<td rowspan="11" style="vertical-align: top"><p>2</p></td>
<td rowspan="11" style="vertical-align: top"><p>TELEMETRY_FILE</p></td>
<td><p>101</p></td>
<td><p>TELEMETRY_FILE_CREATE</p></td>
</tr>
<tr>
<td><p>102</p></td>
<td><p>TELEMETRY_FILE_OPEN</p></td>
</tr>
<tr>
<td><p>103</p></td>
<td><p>TELEMETRY_FILE_DELETE</p></td>
</tr>
<tr>
<td><p>104</p></td>
<td><p>TELEMETRY_FILE_SET_SECURITY</p></td>
</tr>
<tr>
<td><p>105</p></td>
<td><p>TELEMETRY_FILE_COPY</p></td>
</tr>
<tr>
<td><p>106</p></td>
<td><p>TELEMETRY_FILE_MOVE</p></td>
</tr>
<tr>
<td><p>107</p></td>
<td><p>TELEMETRY_FILE_CLOSE</p></td>
</tr>
<tr>
<td><p>108</p></td>
<td><p>TELEMETRY_FILE_MODIFY_TIMESTAMP</p></td>
</tr>
<tr>
<td><p>109</p></td>
<td><p>TELEMETRY_FILE_MODIFY</p></td>
</tr>
<tr>
<td><p>110</p></td>
<td><p>TELEMETRY_FILE_SET_ATTRIBUTES</p></td>
</tr>
<tr>
<td><p>111</p></td>
<td><p>TELEMETRY_FILE_ENUMERATE</p></td>
</tr>
<tr>
<td rowspan="4" style="vertical-align: top"><p>3</p></td>
<td rowspan="4" style="vertical-align: top"><p>TELEMETRY_CONNECTION</p></td>
<td><p>201</p></td>
<td><p>TELEMETRY_CONNECTION_CONNECT</p></td>
</tr>
<tr>
<td><p>202</p></td>
<td><p>TELEMETRY_CONNECTION_LISTEN</p></td>
</tr>
<tr>
<td><p>203</p></td>
<td><p>TELEMETRY_CONNECTION_CONNECT_INBOUND</p></td>
</tr>
<tr>
<td><p>204</p></td>
<td><p>TELEMETRY_CONNECTION_CONNECT_OUTBOUND</p></td>
</tr>
<tr>
<td style="vertical-align: top"><p>4</p></td>
<td style="vertical-align: top"><p>TELEMETRY_DNS</p></td>
<td><p>301</p></td>
<td><p>TELEMETRY_DNS_QUERY</p></td>
</tr>
<tr>
<td rowspan="8" style="vertical-align: top"><p>5</p></td>
<td rowspan="8" style="vertical-align: top"><p>TELEMETRY_REGISTRY</p></td>
<td><p>401</p></td>
<td><p>TELEMETRY_REGISTRY_CREATE</p></td>
</tr>
<tr>
<td><p>402</p></td>
<td><p>TELEMETRY_REGISTRY_SET</p></td>
</tr>
<tr>
<td><p>403</p></td>
<td><p>TELEMETRY_REGISTRY_DELETE</p></td>
</tr>
<tr>
<td><p>404</p></td>
<td><p>TELEMETRY_REGISTRY_RENAME</p></td>
</tr>
<tr>
<td><p>405</p></td>
<td><p>TELEMETRY_REGISTRY_ENUMERATE</p></td>
</tr>
<tr>
<td><p>406</p></td>
<td><p>TELEMETRY_REGISTRY_ENUMERATEVALUE</p></td>
</tr>
<tr>
<td><p>407</p></td>
<td><p>TELEMETRY_REGISTRY_QUERYVALUE</p></td>
</tr>
<tr>
<td><p>408</p></td>
<td><p>TELEMETRY_REGISTRY_SAVE</p></td>
</tr>
<tr>
<td rowspan="4" style="vertical-align: top"><p>6</p></td>
<td rowspan="4" style="vertical-align: top"><p>TELEMETRY_ACCOUNT</p></td>
<td><p>501</p></td>
<td><p>TELEMETRY_ACCOUNT_ADD</p></td>
</tr>
<tr>
<td><p>502</p></td>
<td><p>TELEMETRY_ACCOUNT_DELETE</p></td>
</tr>
<tr>
<td><p>503</p></td>
<td><p>TELEMETRY_ACCOUNT_IMPERSONATE</p></td>
</tr>
<tr>
<td><p>504</p></td>
<td><p>TELEMETRY_ACCOUNT_MODIFY</p></td>
</tr>
<tr>
<td rowspan="3" style="vertical-align: top"><p>7</p></td>
<td rowspan="3" style="vertical-align: top"><p>TELEMETRY_INTERNET</p></td>
<td><p>601</p></td>
<td><p>TELEMETRY_INTERNET_OPEN</p></td>
</tr>
<tr>
<td><p>602</p></td>
<td><p>TELEMETRY_INTERNET_CONNECT</p></td>
</tr>
<tr>
<td><p>603</p></td>
<td><p>TELEMETRY_INTERNET_DOWNLOAD</p></td>
</tr>
<tr>
<td rowspan="5" style="vertical-align: top"><p>8</p></td>
<td rowspan="5" style="vertical-align: top"><p>TELEMETRY_MODIFIED_PROCESS</p></td>
<td><p>701</p></td>
<td><p>TELEMETRY_MODIFIED_PROCESS_CREATE_REMOTETHREAD</p></td>
</tr>
<tr>
<td><p>702</p></td>
<td><p>TELEMETRY_MODIFIED_PROCESS_WRITE_MEMORY</p></td>
</tr>
<tr>
<td><p>703</p></td>
<td><p>TELEMETRY_MODIFIED_PROCESS_WRITE_PROCESS</p></td>
</tr>
<tr>
<td><p>704</p></td>
<td><p>TELEMETRY_MODIFIED_PROCESS_READ_PROCESS</p></td>
</tr>
<tr>
<td><p>705</p></td>
<td><p>TELEMETRY_MODIFIED_PROCESS_WRITE_PROCESS_NAME</p></td>
</tr>
<tr>
<td style="vertical-align: top"><p>9</p></td>
<td style="vertical-align: top"><p>TELEMETRY_WINDOWS_HOOK</p></td>
<td><p>801</p></td>
<td><p>TELEMETRY_WINDOWS_HOOK_SET</p></td>
</tr>
<tr>
<td style="vertical-align: top"><p>10</p></td>
<td style="vertical-align: top"><p>TELEMETRY_WINDOWS_EVENT</p></td>
<td><p>0</p></td>
<td><p>TELEMETRY_NONE</p></td>
</tr>
<tr>
<td style="vertical-align: top"><p>11</p></td>
<td style="vertical-align: top"><p>TELEMETRY_AMSI</p></td>
<td><p>901</p></td>
<td><p>TELEMETRY_AMSI_EXECUTE</p></td>
</tr>
<tr>
<td style="vertical-align: top"><p>12</p></td>
<td style="vertical-align: top"><p>TELEMETRY_WMI</p></td>
<td><p>-</p></td>
<td><p>-</p></td>
</tr>
<tr>
<td rowspan="3" style="vertical-align: top"><p>13</p></td>
<td rowspan="3" style="vertical-align: top"><p>TELEMETRY_MEMORY</p></td>
<td><p>1001</p></td>
<td><p>TELEMETRY_MEMORY_MODIFY</p></td>
</tr>
<tr>
<td><p>1002</p></td>
<td><p>TELEMETRY_MEMORY_MODIFY_PERMISSION</p></td>
</tr>
<tr>
<td><p>1003</p></td>
<td><p>TELEMETRY_MEMORY_READ</p></td>
</tr>
<tr>
<td rowspan="2" style="vertical-align: top"><p>14</p></td>
<td rowspan="2" style="vertical-align: top"><p>TELEMETRY_BM</p></td>
<td><p>1101</p></td>
<td><p>TELEMETRY_BM_INVOKE</p></td>
</tr>
<tr>
<td><p>1102</p></td>
<td><p>TELEMETRY_BM_INVOKE_API</p></td>
</tr>
<tr>
<td rowspan="2" style="vertical-align: top"><p>17</p></td>
<td rowspan="2" style="vertical-align: top"><p>TELEMETRY_EVENT_PIPE</p></td>
<td><p>1401</p></td>
<td><p>TELEMETRY_PIPE_CREATE</p></td>
</tr>
<tr>
<td><p>1402</p></td>
<td><p>TELEMETRY_PIPE_CONNECT</p></td>
</tr>
</tbody>
</table>
