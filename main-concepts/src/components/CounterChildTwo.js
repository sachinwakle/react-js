import React, { Component } from "react";

class CounterChildTwo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>ChildTwo - {this.props.counter}</h1>
        <button type="button" onClick={this.props.handleIncrement}>
          INC
        </button>
        <button type="button" onClick={this.props.handleDecrement}>
          DEC
        </button>
      </div>
    );
  }
}

export default CounterChildTwo;
