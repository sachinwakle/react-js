import React, { Component } from "react";
import ModuleStyle from "./ModuleStyle";
import Stylesheet from "./Stylesheet";

class Inline extends Component {
  render() {
    let header = {
      color: "crimson",
      fontSize: "56px",
    };
    return (
      <div>
        <p style={{ ...header, fontWeight: "600" }}>Inline Style</p>
      </div>
    );
  }
}

export default Inline;
