import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

class FilterableProductTable extends Component {
  constructor() {
    super();

    this.state = {
      filterText: "",
      inStockOnly: false,
    };
  }

  handleFilterText = (value) => {
    this.setState({ filterText: value });
  };

  handleCheck = (event) => this.setState({ inStockOnly: event.target.checked });

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          handleChange={this.handleFilterText}
          handleCheck={this.handleCheck}
        />
        <ProductTable
          product={PRODUCT}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

const PRODUCT = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];
export default FilterableProductTable;
