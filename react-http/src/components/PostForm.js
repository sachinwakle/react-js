import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <h1>HTTP Post Request</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="userId"
              placeholder="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              placeholder="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
