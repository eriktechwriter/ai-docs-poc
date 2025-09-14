---
slug: trend-vision-one-submitting-objects-for-analysis
title: Submitting objects for analysis
---

Submit files and URLs to the sandbox and view the analysis results in Trend Vision One.

:::warning[Important]
- The daily reserve limits the number of objects you can analyze per day. Objects with a "Not analyzed" risk level do not count toward the daily reserve.

- The sandbox detects objects identical to previous submissions. Identical objects are not re-analyzed and do not count toward the daily reserve.
:::

### Procedure {#procedure}

1.  Go to **Threat Intelligence → Sandbox Analysis**.

2.  Click **Submit Object**.

    The **Submit Object** panel appears.

3.  Select the object type.

    - **File**

      1.  Click **Select** and locate a file for submission.

          :::warning[Important]
          - The sandbox only analyzes [supported file types](supported-file-types.md).

          - The total file size cannot exceed 100 MB, including extracted objects.
          :::

      2.  (Optional) Specify the command line arguments that are used when the sandbox runs the submitted file object.

          A maximum of 1,024 characters can be entered. Arguments apply only to Portable Executable (PE) files and script files.

      3.  Specify the password for password-protected files.

          :::note
          The sandbox uses `virus` and `infected` as default passwords. If the submitted object uses either one as a password, you do not need to specify any passwords here.
          :::

    - **URLs**

      1.  Specify a URL with a maximum of 2,048 characters and then press **ENTER**.

          :::warning[Important]
          - You can submit up to 10 URLs to the sandbox. Each URL counts as a separate object toward the daily reserve.

          - The sandbox can only analyze HTTP and HTTPS addresses.

          - Domain names must use Punycode (RFC-3492) format.

            URL paths and query strings must use percent-encoding (RFC-3986) format.

            Examples of converting URLs to Punycode and percent-encoding:

            - Original: `https://www.großliet.com/DOWNLOAD/MANUAL/PC Für Manual 4th Ed.xml`

              Punycode and percent-encoding: `https://www.grossliet.com/DOWNLOAD/MANUAL/PC%20F%C3%BCr%20Manual%204th%20Ed.xml`

            - Original: `http://名がドメイン.com/wiki/国際化ドメイン名`

              Punycode and percent-encoding: `http://xn--v8jxj3d1dzdz08w.com/wiki/%E5%9B%BD%E9%9A%9B%E5%8C%96%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E5%90%8D`
          :::

      2.  (Optional) Click a URL to edit the link.

4.  Click **Submit Object**.

    The **Sandbox Analysis** screen displays the status of submitted objects.

    :::note
    The sandbox may not be able to analyze an object for [various reasons](reasons-for-analysis-failure.md).
    :::
