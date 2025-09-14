---
slug: trend-vision-one-use-xdr-checker-cli
title: Using XDR Endpoint Checker from the command line
---

Use the XDR endpoint checker tool in endpoints that do not have a supported web browser.

### Procedure {#procedure}

1.  Download and deploy the XDR Endpoint Checker tool to the affected endpoint.

    1.  In the **Self-Diagnosis** app, click the **Tool Download** tab.

    2.  Under **XDR Endpoint Checker**, click the download button to download a zip archive containing the XDR Endpoint Checker tool.

        <figure>
        <img src="./images/download_xdr_check=71bbd2dc-afc5-4759-8cf4-8510fd612e0e.webp" />
        </figure>

    3.  Extract the archive file on the affected Windows endpoint.

2.  Execute XDR Endpoint Checker.

    1.  Open the command line with administrator rights.

    2.  Navigate to the folder where the XDR Endpoint Checker is located.

    3.  Execute the following command:

        ``` codeblock
        XDR_Endpoint_Checker.exe --func scan
        ```

        The tool generates a CSV file (*data_file.csv*) with the test results in the `Log` folder.

3.  If the tool detects the endpoint does not have the necessary certificates, execute the following command:

    ``` codeblock
    XDR_Endpoint_Checker.exe --func impcert
    ```
