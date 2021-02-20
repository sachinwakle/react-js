import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function User() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const fetchData = await fetch(
      `https://jsonplaceholder.typicode.com/users/`
    );

    const userItem = await fetchData.json();
    setItems(userItem);
  };

  return (
    <div>
      <h1 style={{ color: "crimson", minHeight: "9vh" }}> User Page</h1>
      {items.map((item) => (
        <h3 key={item.id}>
          <Link to={`/user/${item.id}`}>{item.username}</Link>
        </h3>
      ))}
    </div>
  );
}

export default User;
