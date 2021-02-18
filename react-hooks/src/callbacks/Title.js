import React from "react";

function Title() {
  console.log("Redering Title");
  return (
    <div>
      <h1 style={{ backgroundColor: "crimson", color: "#fff" }}>
        useCallback Hooks
      </h1>
    </div>
  );
}

export default React.memo(Title);
