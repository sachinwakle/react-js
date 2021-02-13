import React, { Component } from "react";
import PureCompo from "./PureCompo";
import RegComponent from "./RegComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sachin",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "sachin",
      });
    }, 2000);
  }

  render() {
    console.log("*************< Parent Component >************");
    return (
      <div>
        Parent Component
        <RegComponent />
        <PureCompo />
      </div>
    );
  }
}

export default ParentComponent;
