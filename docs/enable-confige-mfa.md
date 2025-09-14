---
slug: trend-vision-one-enable-confige-mfa
title: Enabling and configuring multi-factor authentication
---

Enforce multi-factor authentication (MFA) to enhance account security and prevent attackers from exploiting critical actions for malicious activities.

Enabling MFA for all users is only available to Master Administrator users. Once MFA is enabled, all users are required to configure MFA settings on their devices before they can authenticate with Trend Vision One. This configuration is a one-time requirement.

### Procedure {#procedure}

1.  Go to **Administration → User Accounts**.

2.  Click **Multi-factor authentication**.

3.  In the **Multi-Factor Authentication Settings** panel, click the toggle to enable MFA.

4.  Select the operations for which you want MFA to be enforced before execution, and click **Save**.

    The following table provides a list of operations where MFA can be implemented.

    <table>
    <colgroup>
    <col style="width: 33%" />
    <col style="width: 67%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Category</p></th>
    <th><p>Operation</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td rowspan="3"><p>Identity and access management operations</p></td>
    <td><p>Configure API Keys settings</p></td>
    </tr>
    <tr>
    <td><p>Configure identity providers</p></td>
    </tr>
    <tr>
    <td><p>Configure user roles, user accounts, and asset visibility scopes</p></td>
    </tr>
    <tr>
    <td rowspan="8"><p>Response actions</p></td>
    <td><p>Add custom scripts</p></td>
    </tr>
    <tr>
    <td><p>Collect Evidence task</p></td>
    </tr>
    <tr>
    <td><p>Collect File task</p></td>
    </tr>
    <tr>
    <td><p>Run YARA rules task</p></td>
    </tr>
    <tr>
    <td><p>Run Remote Custom Script task</p></td>
    </tr>
    <tr>
    <td><p>Run osquery task</p></td>
    </tr>
    <tr>
    <td><p>Start Remote Shell Session task</p></td>
    </tr>
    <tr>
    <td><p>Submit for Sandbox Analysis task</p></td>
    </tr>
    <tr>
    <td rowspan="4"><p>Security playbook operations</p></td>
    <td><p>Create, edit, or delete playbooks</p></td>
    </tr>
    <tr>
    <td><p>Approve or reject pending actions</p></td>
    </tr>
    <tr>
    <td><p>Upload a new custom script</p></td>
    </tr>
    <tr>
    <td><p>Manually execute playbooks in Security Playbooks or from Workbench</p></td>
    </tr>
    </tbody>
    </table>

    :::warning[Important]
    MFA is not required in the following circumstances:

    - MFA settings do not apply to response actions taken by the Managed Services operations team.

    - Response actions in automatically triggered security playbooks do not require MFA.

    - MFA is not required when retrying a timed-out action.

    - MFA is not supported for SAML Account or SAML Group Account users to sign in to Trend Vision One.
    :::

5.  Configure MFA settings.

    1.  Review the information in the **Enable Multi-Factor Authentication (MFA)** screen that appears when signing in to the Trend Vision One console or performing specified operations.

        - For users with the Master Administrator role, you can require MFA for all users in your business each time they sign in by clicking **Enable MFA**.

        - For users with other roles, you can configure MFA for your own user account by clicking **Enable MFA**.

        :::tip
        You can also configure MFA in advance. To do this, access the **Account Settings** screen using your profile picture in the upper-right corner of the Trend Vision One console, and then click the **Multi-factor authentication** toggle.
        :::

    2.  Install a compatible virtual MFA application (such as Google Authenticator) on your smartphone, PC, or other device.

    3.  Configure MFA on your device by scanning the QR code or using the secret key.

    4.  Enter the one-time password provided by the MFA application and click **Next**.

    5.  Record the reset code, click **I have stored my reset code in a safe location.**, and click **Done**.

    - Local accounts need to provide a verification code from your authenticator app to sign in to Trend Vision One.

    - All accounts need to provide a verification code from your authenticator app to do the specified operations in Trend Vision One.

    :::note
    - To ensure security, the verification code generated is valid for only 30 seconds. If the code is not used within this time frame, a new one must be requested.

    - Once authenticated, MFA sessions remain valid for 15 minutes. The users do not need to do MFA again to initiate critical actions during this period.
    :::
