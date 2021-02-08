import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sachin",
    };
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <h3>Good Evening {this.props.name}</h3>
      </div>
    );
  }
}

export default Greeting;
