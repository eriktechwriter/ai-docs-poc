---
slug: configuring-adfs
title: Configuring Active Directory Federation Services
---

Configure Active Directory Federation Services (AD FS) as a SAML (2.0) identity provider for Trend Vision One.

:::note
The steps below are only for reference and may vary depending on your version. See your AD FS documentation for more details.
:::

### Procedure {#procedure}

1.  Go to **Start → All Programs → Administrative Tools** to open the AD FS management console.

2.  Click **AD FS** in the left navigation, and under the **Action** area on the right, click **Add Relying Party Trust...**.

3.  Complete settings on each tab of the **Add Relying Party Trust Wizard** screen.

    1.  On the **Welcome** tab, click **Start**.

    2.  On the **Select Data Source** tab, select **Import data about the relying party from a file**, click **Browse** to select the metadata file you obtain from Trend Vision One; then, click **Next**.

    3.  On the **Specify Display Name** tab, specify a display name for Trend Vision One, for example, "Trend Vision One", and click **Next**.

    4.  On the **Configure Multi-factor Authentication Now?** tab, leave **Multifactor Authentication** at default and click **Next**.

    5.  On the **Choose Issuance Authorization Rules** tab, select **Permit all users to access this relying party** and click **Next**.

    6.  On the **Ready to Add Trust** tab, click **Next**.

    7.  On the **Finish** tab, select **Open the Edit Claim Rules dialog for this relying party trust when the wizard closes** and click **Close**.

        The **Edit Claim Rules** screen appears.

4.  On the **Issuance Transform Rules** tab, click **Add Rule...**.

5.  Complete settings on each tab of the **Add Transform Claim Rule Wizard** screen.

    1.  On the **Choose Rule Type** tab, select **Send LDAP Attributes as Claims** from the **Claim rule template** drop-down list, and click **Next**.

    2.  On the **Configure Claim Rule** tab, specify a claim rule name in the **Claim rule name** text box, and select **Active Directory** from the **Attribute store** drop-down list.

    3.  Select the following LDAP attributes and specify an outgoing claim type for each attribute: select **E-Mail-Addresses** and set it to **E-Mail-Address**; select **User-Principal-Name** and set it to **Name**.

    4.  Click **Finish**.

6.  Click **Add Rule...**.

7.  Complete settings on each tab of the **Add Transform Claim Rule Wizard** screen.

    1.  On the **Choose Rule Type** tab, select **Transform an Incoming Claim** from the **Claim rule template** drop-down list, and click **Next**.

    2.  On the **Configure Claim Rule** tab, specify a claim rule name in the **Claim rule name** text box, and select or type **E-Mail Address** for **Incoming claim type**, **Name ID** for **Outgoing claim type**, and **Email** for **Outgoing name ID format**.

    3.  Select **Pass through all claim values**, and click **Finish**.

8.  Click **Apply** and then click **OK**.

9.  Collect the single sign-on URL and export the Identity Provider metadata for AD FS.

    1.  On the AD FS management console, go to **AD FS → Service → Endpoints**.

    2.  In the right pane, under **Endpoints → Metadata**, in the **Federation Metadata** row, copy the URL path.

    3.  Add the host name of the AD FS computer to the URL path that you copied.

        For example, `https://hostname/FederationMetadata/2007-06/FederationMetadata.xml`

    4.  To retrieve the Identity Provider metadata, use a web browser to navigate to the complete URL that you obtained in the previous step.

    5.  Save the Identity Provider metadata file as an XML file.

        :::note
        Import this metadata file to Trend Vision One.
        :::
