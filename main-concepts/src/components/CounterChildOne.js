import React, { Component } from "react";

class CounterChildOne extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.handleClick}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default CounterChildOne;
