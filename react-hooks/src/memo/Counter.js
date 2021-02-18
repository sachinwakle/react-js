import React, { useState, useMemo } from "react";

function Counter() {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return firstCounter % 2 === 0;
  }, [firstCounter]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstCounter(firstCounter + 1)}>
          Counter One: {firstCounter}
        </button>{" "}
        &nbsp;
        {isEven ? <span>EVEN</span> : <span>ODD</span>}
      </div>
      <button onClick={() => setSecondCounter(secondCounter + 1)}>
        Counter Two: {secondCounter}
      </button>
    </div>
  );
}

export default Counter;
