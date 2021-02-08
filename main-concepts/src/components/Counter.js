import React from "react";

class Counter extends React.Component {
  initialCount = 0;
  constructor() {
    super();
    this.state = {
      count: this.initialCount,
    };

    this.incrementHandler = this.incrementHandler.bind(this);
  }

  incrementHandler() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetHandler() {
    this.setState({ count: this.initialCount });
  }

  //   Different styles of eventhandling methods

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        {/* method binding */}
        <button type="button" onClick={this.incrementHandler}>
          increment
        </button>

        {/* arrow function */}
        <button type="button" onClick={this.decrementHandler}>
          decrement
        </button>

        {/* direct methos call inside arrow function */}
        <button type="button" onClick={() => this.resetHandler()}>
          reset
        </button>
      </div>
    );
  }
}

export { Counter };
