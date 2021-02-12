import React, { Component } from "react";
import "./Style.css";

class Stylesheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primary: true,
    };
  }

  render() {
    let header = this.state.primary ? "primary" : "";
    return <div className={header}>Stylesheet</div>;
  }
}

export default Stylesheet;
