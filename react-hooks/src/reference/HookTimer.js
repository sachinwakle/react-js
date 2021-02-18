import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((preTimer) => preTimer + 1);
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div>
      <h1>Hook Timer with Ref: {timer}</h1>
      <button onClick={() => clearInterval(interval.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default HookTimer;
