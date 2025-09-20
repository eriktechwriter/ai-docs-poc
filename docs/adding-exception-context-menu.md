---
slug: adding-exception-context-menu
title: Add an exception from the context menu
---

During alert investigation, you can exclude objects from future detections.

Adding an object to the exception list excludes the object from detection by the current filter. You can add exceptions using the context menu in **Workbench** or **Observed Attack Techniques**. This task uses an object in **Workbench** to illustrate how to add an exception using the context menu.

:::note
New exceptions might require a few minutes before taking effect.
:::

You can add a maximum of 10,000 exceptions. To add exceptions for a single filter, be aware that:

- If using wildcards, you can add a maximum of three object values associated with the same data field as exceptions.

- If not using wildcards, you can add a maximum of 100 object values associated with the same data field as exceptions.

For more information, see [Exceptions](exceptions.md).

### Procedure {#procedure}

1.  In the **Workbench** app, go to **All Alerts**.

2.  Click the *Workbench ID* for the alert you want to investigate.

3.  In the **Highlights** panel, examine the objects involved in each event and choose an object to add as an exception.

    An event has two types of objects:

    - Highlighted objects that triggered the current filter

      You can only add highlighted objects to exceptions.

    - Entities included in the impact scope

      Because impact scope entities are not the alert trigger criteria, you cannot add them as exceptions.

4.  Right-click an object to exclude from detection then choose **Add to Exceptions**.

    **Add to Exceptions** shows the current detection filter and the selected object value.

5.  To replace certain parts of the object with wildcards, select **Edit using wildcards**.

    The object value supports the following elements:

    - `.*`: Multiple character substitute

    - `\`: Escape character

      If the object value contains any of the following characters, use the escape character, backslash (\\, to indicate an ordinary characters that has no special meaning:

      \\ { } ( ) \[ \] . + \* ? ^ $ |

    Example 1: To match all `.exe` files in `C:\Users\Temp`, type `C:\\Users\\Temp\\.*\.exe`.

    Example 2: To match all uniform resource locators (URLs) starting with `https://example.com/`, type `https://example\.com/.*`.

6.  Type any additional information in the **Description**.

7.  Click **Add**.
