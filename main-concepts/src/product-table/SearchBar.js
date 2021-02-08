import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    let stocked = this.props.inStockOnly;
    let filterText = this.props.filerText;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
        <p>
          <input
            type="checkbox"
            checked={stocked}
            onChange={this.props.handleCheck}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
