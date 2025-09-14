---
slug: trend-vision-one-investigating-alert
title: Investigate an alert
---

After a detection model triggers an alert, you can begin an in-depth investigation by drilling into the alert details.

### Procedure {#procedure}

1.  In the **Workbench** app, go to **All Alerts**.

2.  Click the *Workbench ID* for the alert you want to investigate.

3.  In the alert details screen, inspect and analyze the provided [alert information](alert-details.md).

    1.  In the **Summary** section, perform any of the following actions:

        - Check the information about the matched model.

        - Learn details about the entities that the alert affects by clicking each icon next to **Impact scope**.

        - Change the status of the alert or investigation by clicking the status icon.

        - Add notes to the current alert or investigation or check the existing notes by clicking the **Notes** icon (![](/images/alert_notes=GUID-0F4792BD-6D33-4FBE-9A89-E6AF94A17C5F=1=en-us=Low.webp)).

        - Execute Automated Response playbooks for the alert by clicking **Execute playbook**.

          :::warning[Important]
          To initiate automated response for an alert, [configure Automated Response Playbooks](create-automated-response-playbooks.md) first.
          :::

    2.  In the **Highlights** section, perform any of the following actions:

        The **Highlights** section lists the specific detection filters that triggered the alert. Detection models use filters to detect suspicious behaviors that match MITRE techniques and reported threat indicators. Every event in the **Highlights** section starts with the name of a triggered detection filter.

        - To learn more about a MITRE technique, click the related link next to the technique.

        - To learn about an event and the relationship among objects, click any of the events to highlight the specific objects in the **Observable Graph** section.

        - To create a new search query with the event UUID in the **Search** app, click **Search Event UUID**.

        - To open the context menu, right-click an object and select any of the available actions.

          For details, see Step 3.

          :::note
          The context menu varies according to the object you select and only shows the available tasks for the selected object.
          :::

    3.  In the **Observable Graph** section, perform any of the following actions:

        - Click ![](/images/newCompanionIcon=GUID-20240819112525.webp) to start a conversation with Trend Companion.

          During alert investigations, Trend Companion can explain the alert displayed on your screen. You can use prompts such as "Provide an explanation of this Workbench alert" to ask Trend Companion to explain a Workbench alert.

          :::tip
          Click **Add to Note** to add a response to the alert notes.
          :::

        - To check the related nodes of a single node, click the node you are interested in.

        - To check the association and all the objects included in a node group, click the node marked with the total number of grouped objects and view the details on the side panel that appears.

          :::note
          Objects of the same type are grouped together only when they share the same association.
          :::

        - To move a node to your preferred direction, drag the node around in the graph.

        - To zoom in or zoom out, click the icons in the lower-right corner.

4.  After identifying an object of interest, right-click the object to access the context menu in **Highlights** or **Observable Graph**, which allows you to perform advanced analysis or take direct action, if available.

    For more information, see [Context menu](context-menu.md) and [Advanced Analysis actions](advanced-analysis-actions.md).

    :::note
    The context menu varies according to the object you select and only shows the available tasks for the selected object.
    :::

**Related information**

- [Context menu](context-menu-2.md "Trend Vision One provides a context menu to quickly access additional actions directly related to the console location and object type.")
- [Advanced Analysis actions](advanced-analysis-actions.md "You can further investigate workbench data using the context menu to access execution profiles and network analytics reports.")
