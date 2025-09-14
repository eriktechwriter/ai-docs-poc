---
slug: trend-vision-one-analysis-transaction-ioc-details
title: Analysis using the Transaction and IOC Details
---

The **Transaction and IOC Details** section provides information about transactions and indicators of compromise (IOCs) from the **Correlation Graph**.

The oldest transactions appear first. Trend Vision One lists the IOCs by highest risk level first and then by first seen time.

### Procedure {#procedure}

- Scroll through the *Transactions* and *IOCs* to identify information useful for analysis.

- Click a correlation line in the **Correlation Graph** to display a summary as well as filter and limit the transactions and IOCs to ones that are directly related to the selected correlation line.

  - Click empty space in the **Correlation Graph** to remove the filter.

- Click an internal host, external server, or email sender in the **Correlation Graph** section to display details about the selected internal host, external server, or email sender in the **Transaction and IOC Details** section.

  - Click empty space in the **Correlation Graph** to revert the **Transaction and IOC Details** back to the default.

- Perform one of the following actions on items in the **Transaction and IOC Details** section:

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
  <td><p>IP addresses, domains, uniform resource locators (URLs), and hash values</p></td>
  <td><p>Hover over <img src="./images/dddna_summary_ip_domain_button=GUID-45B7939C-DDB8-447B-8DEF-9F6055E5B75A=1=en-us=Low.webp" /> and select one of the following:</p>
  

  :::note
  
  <p>Depending on the location of the item on the screen, not all actions may be available.</p>
  

  :::

  
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
