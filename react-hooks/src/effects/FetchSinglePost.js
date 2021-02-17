import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchSinglePost() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((resp) => {
        console.log(resp);
        setPost(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[idFromButton]);

  const fetchPost = () => {
    setIdFromButton(id);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
      <button onClick={fetchPost}>Fetch Post</button>
      <ul>
          <li key={post.id}>{post.title}</li>
      </ul>
    </div>
  );
}

export default FetchSinglePost;
