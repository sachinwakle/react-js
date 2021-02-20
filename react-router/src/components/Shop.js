import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const fetchData = await fetch(
      `https://jsonplaceholder.typicode.com/photos`
    );

    const photoItems = await fetchData.json();
    setItems(photoItems.slice(0,20));
  };

  return (
    <div>
      <h1 style={{ color: "crimson", minHeight: "9vh" }}>Shop Page</h1>
      {items.map((item) => (
        <h3 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </h3>
      ))}
    </div>
  );
}

export default Shop;
