import React, { Component } from "react";
import axios from "axios";

export class GetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          errorMsg: "Error retrieving posts!",
        });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>List of Posts</h1>

        {posts.length
          ? posts.map((post) => {
              return <p key={post.id}>{post.title}</p>;
            })
          : null}

        {errorMsg ? <h1>{errorMsg}</h1> : null}
      </div>
    );
  }
}

export default GetList;
