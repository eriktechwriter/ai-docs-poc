---
slug: trend-vision-one-reviewing-summary
title: Review the summary
---

The **Summary** displays the severity, number of detected internal hosts, number of indicators of compromise (IOCs), and attack patterns, as well as provides a high-level overview of the malicious activity of the correlated event.

### Procedure {#procedure}

1.  Review the severity, detection counts, attack patterns, and activity summary.

    <table>
    <colgroup>
    <col style="width: 17%" />
    <col style="width: 83%" />
    </colgroup>
    <tbody>
    <tr>
    <td><p>Severity</p></td>
    <td><p>The severity assigned by Deep Discovery Director - Network Analytics to the event and related correlations.</p>
    <p>Deep Discovery Director - Network Analytics uses a number of factors to assign severity, including proprietary analysis.</p></td>
    </tr>
    <tr>
    <td><p>Internal Hosts and Indicators of Compromise detection count</p></td>
    <td><p>The detection count numbers allow you to quickly determine the scope of the correlated event.</p></td>
    </tr>
    <tr>
    <td><p>Attack patterns</p></td>
    <td><p>The attack patterns for the suspicious object selected in Trend Vision One.</p></td>
    </tr>
    <tr>
    <td><p>Activity summary</p></td>
    <td><p>The activity summary is organized by attack pattern and provides the following information:</p>
    <ul>
    <li><p>Protocols on which activities were detected.</p></li>
    <li><p>Hosts involved in suspicious or malicious activity.</p>
    <p>Activity might be between internal hosts and external servers or might include lateral activity between internal hosts.</p>
    <p>Internal hosts defined by the <em>Network Groups</em> list.</p>
    

    :::note
    
    <p>Deep Discovery Director - Network Analytics treats any internet protocol (IP) address or range in the <em>Trusted Internal Networks</em> list as part of the trusted internal network.</p>
    <ul>
    <li><p>To provide an accurate analysis of correlation data, specify your internal networks and hosts in the <em>Network Groups</em> list.</p></li>
    <li><p>By default, private networks are considered trusted and set internally as trusted. You only need to add non-private internet protocol (IP) addresses to the <em>Network Groups</em> list.</p></li>
    </ul>
    

    :::

    </li>
    <li><p>Additional hosts that participated in the suspicious activity.</p></li>
    <li><p>Additional suspicious objects when viewing correlation data for suspicious objects.</p></li>
    </ul></td>
    </tr>
    </tbody>
    </table>

2.  Do any of the following actions for individual summary items:

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 75%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Item</p></th>
    <th><p>Action</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Internal Hosts detection number</p></td>
    <td><p>Click the detection number and then click <em>Copy to clipboard</em> (<img src="./images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp" />) to copy the list to your clipboard.</p></td>
    </tr>
    <tr>
    <td><p>Indicators of Compromise detection number</p></td>
    <td><p>Click the detection number and then click <em>Copy to clipboard</em> (<img src="./images/dddna_summary_detection_copy=GUID-4DE35BE5-57A5-4919-BF9C-5EC95F9CA8FD=1=en-us=Low.webp" />) to copy the value to your clipboard.</p></td>
    </tr>
    <tr>
    <td><p>Attack patterns</p></td>
    <td><p>Hover over an attack pattern to highlight only activities related to that attack pattern in the summary.</p></td>
    </tr>
    <tr>
    <td><p>IP addresses and domains</p></td>
    <td><p>Hover over <img src="./images/dddna_summary_ip_domain_button=GUID-45B7939C-DDB8-447B-8DEF-9F6055E5B75A=1=en-us=Low.webp" /> and select one of the following:</p>
    <ul>
    <li><p><strong>Focus</strong>: Focus on the item in the <em>Correlation Graph</em>.</p></li>
    <li><p><strong>Copy to clipboard</strong>: Copy the value to your clipboard.</p></li>
    <li><p><strong>Threat Connect</strong>: Open <em>Trend Micro Threat Connect</em> in a new browser tab with a query for this object.</p></li>
    <li><p><strong>DomainTools (WHOIS)</strong>: Open <em>DomainTools</em> in a new browser tab with a query for this IP address or domain.</p></li>
    <li><p><strong>VirusTotal</strong>: Open <em>VirusTotal</em> in a new browser tab with a query for this object.</p></li>
    </ul></td>
    </tr>
    </tbody>
    </table>

3.  Click **Export** and select one of the following options to export the correlation data of this correlated event.

    - **Printer-friendly**: Displays your system's printer dialog. Select the appropriate options then click **Print**.

    - **CSV**: Select a delimiter then click **Export** to export and download the correlation data of this correlated event to a CSV file with the chosen delimiter.

    :::note
    If you apply an advanced search filter, the exported file includes only the currently filtered correlation data.
    :::
