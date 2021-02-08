import React, { Component } from "react";

const scaleNames = {
  c: "celsius",
  f: "fahrenheit",
};

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeTemp(e.target.value);
  }

  render() {
    let value = this.props.temp;
    let scale = this.props.scale;
    return (
      <div>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input type="text" value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Temperature;
