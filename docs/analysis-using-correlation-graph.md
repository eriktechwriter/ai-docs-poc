---
slug: analysis-using-correlation-graph
title: Analysis using the Correlation Graph
---

The **Correlation Graph** is a visual representation of correlations between the trigger object and other related objects.

### Procedure {#procedure}

- From the main screen, perform initial analysis:

  <table>
  <colgroup>
  <col style="width: 100%" />
  </colgroup>
  <thead>
  <tr>
  <th><p>Element in Correlation Graph</p></th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><figure>
  <img src="./images/Workbench_network_analytics_-_time_slider=GUID-E1354CE0-BE65-4002-99D4-6A8C555AD587=1=en-us=Low.webp" />
  <figcaption>Playback Bar / Time Slider</figcaption>
  </figure>
  <p>Click the playback bar to view the time line for the correlated events. Deep Discovery Director - Network Analytics draws the oldest correlation event first and continues through to the latest correlation.</p>
  <p>Use the time line sliders to view correlated events over a selected time frame. The graph displays only the correlations within the selected time frame.</p>
  <ul>
  <li><p>Adjust the time frame by clicking on the left and right grab bars on the time line and dragging them to the desired location.</p></li>
  <li><p>The correlations displayed in the graph (and resultant transaction details) change according to event data found within the selected time frame.</p></li>
  </ul></td>
  </tr>
  <tr>
  <td><p>Click <img src="./images/dddna_graph_filter=GUID-1A803C70-BBB6-4F2B-BF16-6B5CFFFAC409=1=en-us=Low.webp" /> next to the <em>Playback Bar</em> to display or hide the advanced search filter.</p>
  <p>Use the advanced search filter to create and apply customized searches.</p>
  <p>For details, see <a href="trend-vision-one-correlation-graph-advanced-search">Correlation Graph advanced search filter</a>.</p></td>
  </tr>
  <tr>
  <td><p><em>Correlation Line</em></p>
  <p>Each correlation graph contains one or more correlation lines that correlate malicious or suspicious activity between a source and destination.</p>
  <ul>
  <li><p>Each correlation line represents one or more transactions between two hosts.</p></li>
  <li><p>The thickness of the line is proportional to the number of transactions occurring between the hosts.</p></li>
  <li><p>Correlation lines can be between an internal host and external server or between two internal hosts (lateral movement).</p></li>
  <li><p>Each correlation line has a label with the protocols used in transactions between the hosts. An arrow within the correlation line indicates the direction of the transactions, from source to destination.</p>
  <p>Correlation lines involving email senders have the label <em>Suspicious Email Activity</em>.</p></li>
  </ul></td>
  </tr>
  <tr>
  <td><p><em>Internal hosts</em></p>
  <ul>
  <li><p>The graph identifies internal hosts by internet protocol (IP address) as well as host name and user are, if known.</p>
  <p>Icons representing relevant information might appear next to an internal host. For example, if the internal host is on the priority watch list or on a registered service list, the graph displays the appropriate icon.</p>
  

  :::note
  
  <ul>
  <li><p>The priority watch list consists of servers from your environment that you consider high-priority for event tracking and incident reporting.</p></li>
  <li><p>The registered service list consists of dedicated servers for specific services that your organization uses internally or considers trustworthy.</p></li>
  </ul>
  

  :::

  </li>
  <li><p>Hover over the downward triangle (<img src="./images/dddna_graph_icon_plus=GUID-674BF3B2-46AB-4463-AEB9-658F8598E69D=2=en-us=Low.webp" />) next to each internal host and external server to view a list of additional actions you can perform for that host.</p>
  <p><strong>Copy to clipboard</strong>: Copy the value to your clipboard.</p></li>
  </ul></td>
  </tr>
  <tr>
  <td><p><em>External servers</em></p>
  <ul>
  <li><p>External servers are identified by IP address; the domain name is also supplied if known.</p>
  <p>Email senders are identified by email address and are always displayed at the top of the <em>External Servers</em> side.</p>
  <p>Other relevant information might be displayed for external hosts.</p></li>
  <li><p>Hover over the downward triangle (<img src="./images/dddna_graph_icon_plus=GUID-674BF3B2-46AB-4463-AEB9-658F8598E69D=2=en-us=Low.webp" />) next to each external server to view a list of additional actions you can perform for that host.</p>
  <ul>
  <li><p><strong>Copy to clipboard</strong>: Copy the value to your clipboard.</p></li>
  <li><p><strong>Threat Connect</strong>: Open <em>Trend Micro Threat Connect</em> in a new browser tab with a query for this object.</p></li>
  <li><p><strong>DomainTools (WHOIS)</strong>: Open <em>DomainTools</em> in a new browser tab with a query for this IP address or domain.</p></li>
  <li><p><strong>VirusTotal</strong>: Open <em>VirusTotal</em> in a new browser tab with a query for this object.</p></li>
  </ul></li>
  </ul></td>
  </tr>
  <tr>
  <td><p><em>Activity Legend</em></p>
  <p>Identifies key activities for the internal host and external server participants in the graph.</p>
  <ul>
  <li><p>Activities vary for each specific correlation graph.</p></li>
  <li><p>Can include activities similar to the following: Brute Force Authentication, C&amp;C Callback, Data Exfiltration, Lateral Movement, Malicious Transfer, Other Malicious Activities, and Vulnerability Exploit.</p></li>
  <li><p>Some activities correspond to Reason in Deep Discovery Director logs.</p></li>
  </ul></td>
  </tr>
  <tr>
  <td><p><em>Participant Icons</em></p>
  <p>You can determine the activities in which each internal host or external server participated by checking the presence of an icon in the corresponding activity column.</p>
  <p>Hover over an internal host or external server to see the activities in which they are participants highlighted in blue.</p></td>
  </tr>
  </tbody>
  </table>

**Related information**

- [Correlation Graph advanced search filter](correlation-graph-advanced-search.md "Use the advanced search filter to create and apply customized searches.")
