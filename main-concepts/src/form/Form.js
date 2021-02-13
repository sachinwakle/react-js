import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      address: "",
      topic: "react",
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleAddress = (e) => {
    this.setState({ address: e.target.value });
  };

  handleTopic = (e) => {
    this.setState({ topic: e.target.value });
  };

  handleSubmit = (e) => {
    let { username, address, topic } = this.state;
    alert(`Details: ${username} ${address} ${topic}`);
    e.preventDefault();
  };

  render() {
    let { username, address, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleUsername}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            cols="30"
            rows="10"
            value={address}
            onChange={this.handleAddress}
          ></textarea>
        </div>
        <div>
          <label htmlFor="topic">Topic:</label>
          <select value={topic} id="topic" onChange={this.handleTopic}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="js">JS</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
