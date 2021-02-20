import React, { useEffect, useState } from "react";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [photo, setPhoto] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
    setPhoto(item);
  };
  return (
    <div>
      <h1 style={{ color: "crimson", minHeight: "9vh" }}>Details Page</h1>
      <h2>{photo.title}</h2>
      <img src={photo.thumbnailUrl} alt="item photo"/>
    </div>
  );
}

export default ItemDetail;
