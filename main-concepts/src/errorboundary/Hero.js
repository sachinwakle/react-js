import React from "react";

function Hero({ name }) {
  if (name === "Joker") {
    throw new Error("Not a Hero!!");
  }
  return <h1>{name}</h1>;
}

export default Hero;
