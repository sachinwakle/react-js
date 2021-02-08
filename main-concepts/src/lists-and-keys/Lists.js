import React, { Component } from "react";
import NumberList from "./NumberList";

class List extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5],
  };

  render() {
    return <NumberList numbers={this.state.numbers} />;
  }
}

export default List;
