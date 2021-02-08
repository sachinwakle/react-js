import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import Temperature from "./Temperature";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      scale: "c",
    };

    this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
    this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
  }

  handleChangeCelsius(temp) {
    this.setState({ scale: "c", temp });
  }

  handleChangeFahrenheit(temp) {
    this.setState({ scale: "f", temp });
  }

  render() {
    let temperature = this.state.temp;
    let scale = this.state.scale;
    let celsiusValue =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    let fahrenheitValue =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <Temperature
          scale="c"
          temp={celsiusValue}
          onChangeTemp={this.handleChangeCelsius}
        />
        <Temperature
          scale="f"
          temp={fahrenheitValue}
          onChangeTemp={this.handleChangeFahrenheit}
        />
        <BoilingVerdict celsius={parseFloat(celsiusValue)} />
      </>
    );
  }
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default Calculator;
