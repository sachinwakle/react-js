import React, { useState } from "react";

function CounterFunction() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);

  function decrementHandle() {
    setCount(count - 1);
  }

  function resetCount(e, resetValue) {
    console.log(e);
    setCount(resetValue);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrementHandle}>Decrement</button>
      <button onClick={(e) => resetCount(e, 10)}>Reset</button>
    </div>
  );
}

export default CounterFunction;
