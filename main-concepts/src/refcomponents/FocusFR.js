import React, { Component, createRef } from "react";
import FRInput from "./FRInput";

class FocusFR extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
  }

  handleFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.handleFocus}>Foucs Input</button>
      </div>
    );
  }
}

export default FocusFR;
