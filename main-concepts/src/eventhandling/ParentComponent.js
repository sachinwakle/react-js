import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greet: "Parent",
    };
    this.handleGreet = this.handleGreet.bind(this);
  }

  handleGreet(greeter) {
    alert(`Hello ${this.state.greet} from ${greeter}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greet={this.handleGreet} />
      </div>
    );
  }
}

export default ParentComponent;
