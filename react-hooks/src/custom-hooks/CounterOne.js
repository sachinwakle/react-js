import React, { useState } from "react";
import useCounter from "./useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(2,6);

  return (
    <div>
      <h2>CounterOne = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
