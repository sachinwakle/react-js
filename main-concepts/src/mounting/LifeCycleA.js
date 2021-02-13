import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "LifeCycle A",
    };

    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleA shouldComponentUpdate");
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifeCycleA componentDidUpdate");
  }

  handleUpdate = () => {
    this.setState({
      name: "name updated",
    });
  };

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        <div>{this.state.name}</div>
        <button onClick={this.handleUpdate}>Update State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
