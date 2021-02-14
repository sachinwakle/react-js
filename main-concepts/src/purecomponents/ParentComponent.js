import React, { Component } from "react";
import MemoComp from "./MemoComp";
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
        Parent Component - {this.state.name}
        {/* <RegComponent name={this.state.name} /> */}
        {/* <PureCompo name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
