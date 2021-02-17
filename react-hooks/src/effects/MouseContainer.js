import React, { useState } from "react";
import OnlyOnceEffect from "./OnlyOnceEffect";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggel Mouse</button>
      {display && <OnlyOnceEffect />}
    </div>
  );
}

export default MouseContainer;
