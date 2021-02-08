import React, { Component } from "react";
import ProductRow from "./ProductRow";
import ProductCategory from "./ProductCategory";

class ProductTable extends Component {
  render() {
    const rows = [];
    const products = this.props.product;
    let lastCategory = null;
    let filterText = this.props.filterText;
    let inStockOnly = this.props.inStockOnly;

    products.forEach((product) => {
      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategory key={product.category} category={product.category} />
        );
      }
      rows.push(<ProductRow key={product.name} product={product} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
