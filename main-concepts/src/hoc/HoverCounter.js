import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { counter, counterHandler } = this.props;
    return (
      <div>
        <h1 onMouseOver={counterHandler}>
          Hovered {counter} times by {this.props.name}
        </h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5);
