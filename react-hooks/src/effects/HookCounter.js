import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `Clicked ${count} many times!!`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((preCount) => preCount + 1)}>
        Clicked {count} times!!
      </button>
    </div>
  );
}

export default HookCounter;
