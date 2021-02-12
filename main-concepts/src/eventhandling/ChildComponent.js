import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greet("Child")}>greet</button>
    </div>
  );
}

export default ChildComponent;
