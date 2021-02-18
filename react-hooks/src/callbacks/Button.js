import React from "react";

function Button({ handleIncrement, children }) {
  console.log(`Rendering Button - ${children}`);
  return (
    <div>
      <button onClick={handleIncrement}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
