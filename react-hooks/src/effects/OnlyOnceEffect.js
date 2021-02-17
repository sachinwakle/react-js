import React, { useState, useEffect } from "react";

function OnlyOnceEffect() {
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse moved");
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      <h1>Only Once useEffect Hook</h1>
      <h2>
        X: {x} Y: {y}
      </h2>
      <h3>Mouse Position</h3>
    </div>
  );
}

export default OnlyOnceEffect;
