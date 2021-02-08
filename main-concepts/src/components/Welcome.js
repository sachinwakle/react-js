import React, { useState } from "react";

function Welcome(props) {
  const [name] = useState("Sachin");
  return (
    <div>
      <h1>
        Welcome {name} from {props.location} - {props.pincode}
      </h1>
    </div>
  );
}

export default Welcome;
