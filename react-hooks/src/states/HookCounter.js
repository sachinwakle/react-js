import React, { useState } from "react";

function HookCounter() {
  // "Only call hooks at the top level"
  // "Only call hooks from React Functions"
  const [count, setCount] = useState(0);

  //   function handleClick() {
  //     setCount(count + 1);
  //   }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
    </div>
  );
}

export default HookCounter;
