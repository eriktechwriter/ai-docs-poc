---
slug: trend-vision-one-overview-network-analytics-report
title: Overview of the network analytics report
---

The network analytics report consists of three main sections: Summary, Correlation Graph, and Transaction and IoC Details.

### Summary {#summary}

The **Summary** includes the following information:

- Severity
- Number of detected internal hosts and indicators of compromise (IOCs)
- Attack patterns
- High-level overview of the malicious activity of the correlated event

To export the correlation data of this correlated event, click **Export** then select **Printer-friendly** or **CSV**.

Click the up carat (![](/images/dddna_summary_collapse=GUID-30E62BCB-0E12-4C53-967D-71834FAF56FD=1=en-us=Low.webp)) to collapse and down carat (![](/images/dddna_summary_expand=GUID-CA101720-956C-4123-A237-5A030D727B17=1=en-us=Low.webp)) to expand the **Summary** section.

See [Review the summary](reviewing-summary.md).

### Correlation Graph {#correlation-graph}

The **Correlation Graph** provides a visual representation of correlations made between the selected suspicious object and other related objects.

Click ![](/images/dddna_graph_filter=GUID-1A803C70-BBB6-4F2B-BF16-6B5CFFFAC409=1=en-us=Low.webp) next to the *Playback Bar* to display or hide the advanced search filter.

See [Analysis using the Correlation Graph](analysis-using-correlation-graph.md).

### Transaction and IOC Details {#transaction-and-ioc-details}

The **Transaction and IOC Details** section provides details about each transaction represented in the correlation graph and each detected Indicator of Compromise (IOC).

The report lists transactions from oldest to most recent. Listed transactions might have occurred in a single day or span several months, depending on the correlations found by Deep Discovery Director - Network Analytics. The report lists IOCs from oldest to most recent.

Use on the right carat (![](/images/dddna_trans_iocs_collapse=GUID-90155883-8966-4D26-B6AC-D0918BEC3089=1=en-us=Low.webp)) to collapse and left carat to expand (![](/images/dddna_trans_iocs_expand=GUID-ACD57F7E-4D64-4EAF-B624-D22B51459C24=1=en-us=Low.webp)) the **Transaction and IOC Details** section.

See [Analysis using the Transaction and IOC Details](analysis-transaction-ioc-details.md).
