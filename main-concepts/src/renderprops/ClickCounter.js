import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    const { counter, counterHandler } = this.props;
    return (
      <div>
        <button onClick={counterHandler}>
          Clicked {counter} times by {this.props.name}
        </button>
      </div>
    );
  }
}

export default ClickCounter;
