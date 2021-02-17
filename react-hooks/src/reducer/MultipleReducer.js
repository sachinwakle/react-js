import React, { useReducer } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MultipleReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1 style={{ backgroundColor: "crimson", color: "#fff" }}>
          CounterOne: {count}
        </h1>
        <Button onClick={() => dispatch("increment")}>Increment</Button>
        <Button onClick={() => dispatch("decrement")}>Decrement</Button>
        <Button onClick={() => dispatch("reset")}>Reset</Button>
      </div>
      <div>
        <h1 style={{ backgroundColor: "crimson", color: "#fff" }}>
          CounterTwo: {countTwo}
        </h1>
        <Button onClick={() => dispatchTwo("increment")}>Increment</Button>
        <Button onClick={() => dispatchTwo("decrement")}>Decrement</Button>
        <Button onClick={() => dispatchTwo("reset")}>Reset</Button>
      </div>
    </div>
  );
}

export default MultipleReducer;
