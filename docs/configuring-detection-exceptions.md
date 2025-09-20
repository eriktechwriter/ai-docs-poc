---
slug: configuring-detection-exceptions
title: Configuring Detection Exceptions
---

Configure new detection exceptions to prevent detections that match specified criteria from appearing in detection logs.

The **Detection Exceptions** tab displays all custom or imported exceptions and the corresponding criteria. Create new exceptions to prevent Network Sensor detections that match the exception criteria from appearing in detection logs.

### Procedure {#procedure}

1.  Click **Add**.

2.  In **Add Exceptions**, select whether to enable or disable the new exception.

3.  Add an optional description for the exception.

4.  Specify the criteria for the exception.

    1.  Select the desired exception criteria type from the drop-down list.

    2.  Select the desired operator to set the conditions for matching the criteria.

        - Contains: The detection must partially match the specified criteria values.

        - Equals: The detection must exactly match the specified criteria values.

        - Ends with: The detection must end with the specified criteria values.

    3.  Enter the desired criteria value.

        :::note
        Values are not case sensitive. Use hyphens (-) for ranges, and press ENTER or TAB to separate multiple values.
        :::

5.  Click + to add additional exception criteria.

    :::note
    A single exception may include no more than 10 criteria.
    :::

6.  Click **Add** to add the new exception to the detection exceptions list.

    :::note
    The detection exception list can contain no more than 1,000 exceptions.
    :::

7.  Click **Save** to save changes to the detection exceptions list.
