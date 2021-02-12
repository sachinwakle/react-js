import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //     console.log(this);
  //     this.setState({
  //         message: 'Goodbye!'
  //     });
  // }

  handleClick = () => {
    this.setState({
      message: "Good Bye!",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.handleClick()}>Click</button> */}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default EventBind;
