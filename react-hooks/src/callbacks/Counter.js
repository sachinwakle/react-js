import React from "react";

function Counter({ text, count }) {
  console.log(`Redering from - ${text}`);
  return (
    <div>
      <h2>
        {text} - {count}
      </h2>
    </div>
  );
}

export default React.memo(Counter);
