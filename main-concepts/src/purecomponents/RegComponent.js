import React from "react";

function RegComponent(props) {
  console.log("Regular Component");
  return <div>Regular Component {props.name}</div>;
}

export default RegComponent;
