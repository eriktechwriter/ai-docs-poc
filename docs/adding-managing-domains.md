---
slug: adding-managing-domains
title: Adding and managing domains
---

Add, verify, or delete domains to be used across the entire Trend Vision One platform.

Verifying your organization's domains with Trend Micro is required for the function of several Trend Vision One [apps and services](domain-verification.md).

### Procedure {#procedure}

1.  Go to **Administration → Domain Verification**.

2.  Click **Add Domain**.

3.  Enter your organization's domain name in the field and click **Add**.

    :::note
    Domain names can contain a maximum of 255 characters, including numbers, letters, hyphens (-), periods (.), or wildcards (\*).
    :::

    The domain name appears on the domain name list with the status **Not verified**.

4.  Select the domain you want to verify from the list to display the domain details.

5.  Copy the supplied TXT record and add the record to your organization's DNS server.

    The domain verification process begins.

    :::note
    After you add the TXT record to your DNS server, propagation might take some time. Only domains with fully propagated DNS records can be verified.
    :::

6.  Click **Verify domain**.

    The verified domain appears in the list.

    :::note
    Trend Vision One checks for fully propagated DNS records every 15 minutes. If you choose not to manually verify a domain after propagation completes, Trend Vision One automatically verifies the domain.
    :::

7.  To delete an added or verified domain from the domain list, select the box next to the domain name and click **Delete**, then click **Delete** in the confirmation window.
