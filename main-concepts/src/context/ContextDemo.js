import React, { Component } from "react";
import ComponentA from "./ComponentA";
import { UserProvider } from "./UserContext";

class ContextDemo extends Component {
  render() {
    return (
      <UserProvider value="sachin">
        <ComponentA />
      </UserProvider>
    );
  }
}

export default ContextDemo;
