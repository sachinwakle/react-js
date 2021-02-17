import React, { useState, useEffect } from "react";

function IncorrectDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default IncorrectDependency;
