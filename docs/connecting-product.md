---
slug: connecting-product
title: Connecting a product
---

Use the Product Connector app to manage and register additional products and services to Trend Vision One.

Depending on how you obtained your license, Trend Vision One may have automatically registered your related services to the Trend Vision One console. For example, if you purchased a license that included Apex One as a Service and Cloud App Security, these services should already appear in the Product Connector app.

:::warning[Important]
Connecting a product to Trend Vision One does not guarantee that the target products can send the necessary data to the Trend Micro data lakes. You must configure specific features or policies on the related product console to facilitate the transfer of data.

Ensure that you provision the consoles of your other products before attempting to connect to Trend Vision One.

For detailed instructions about how to properly register and configure specific products, see [Required settings on supported products](req-setting-supported-product.md).
:::

### Procedure {#procedure}

1.  Go to **Service Management → Product Connector**.

2.  Click **Connect**.

3.  Select a product from the **Product** drop-down list that appears.

    Product connection methods differ depending on the type of product.

    <table>
    <colgroup>
    <col style="width: 25%" />
    <col style="width: 75%" />
    </colgroup>
    <thead>
    <tr>
    <th><p>Product Type</p></th>
    <th><p>Registration Method</p></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><p>Deep Discovery</p></td>
    <td><p>Uses the Network Inventory app to connect and enable Deep Discovery Inspector appliances as network sensors.</p>
    <p>For detailed instructions about how to manage network sensors, see <a href="trend-vision-one-network-inventory">Network Inventory</a>.</p></td>
    </tr>
    <tr>
    <td><p>Products licensed using a Trend Micro Account</p></td>
    <td><p>Registration to Trend Vision One is automatic after selecting the product from the drop-down list</p></td>
    </tr>
    <tr>
    <td><p>Products licensed without a Trend Micro Account</p></td>
    <td><p>Registration to Trend Vision One requires the use of an enrollment token</p>
    <ol>
    <li><p>Click the link to generate an enrollment token.</p></li>
    <li><p>Access the product console and register the enrollment token on the Trend Vision One settings.</p></li>
    </ol></td>
    </tr>
    </tbody>
    </table>

4.  Click **Save**.

    :::warning[Important]
    Connecting a product to Trend Vision One does not guarantee that the target products can send the necessary data to the Trend Micro data lakes. You must configure specific features or policies on the related product console to facilitate the transfer of data.

    Ensure that you provision the consoles of your other products before attempting to connect to Trend Vision One.

    For detailed instructions about how to properly register and configure specific products, see [Required settings on supported products](req-setting-supported-product.md).
    :::
