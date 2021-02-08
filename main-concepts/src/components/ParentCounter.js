import React, { Component } from "react";
import CounterChildOne from "./CounterChildOne";
// import CounterChildTwo from './CounterChildTwo';

class ParentCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <CounterChildOne handleClick={this.handleIncrement} children="INC" />
        <CounterChildOne handleClick={this.handleDecrement} children="DEC" />
      </div>
    );
  }
}

export default ParentCounter;
