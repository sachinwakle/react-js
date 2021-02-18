import React, { useState } from "react";
import useCounter from "./useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h2>CounterTwo = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
