import { useState } from "react";

function useCounter(initialCount = 0, value = 1) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + value);
  };

  const decrement = () => {
    setCount(count - value);
  };

  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
