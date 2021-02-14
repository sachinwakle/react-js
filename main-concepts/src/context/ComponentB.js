import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./UserContext";

class ComponentB extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        {this.context} from Component - B
        <ComponentC />
      </div>
    );
  }
}

// ComponentB.contextType = UserContext;
export default ComponentB;
