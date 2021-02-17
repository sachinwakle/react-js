import React, { useReducer } from "react";
import styled from "styled-components";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

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

export const CountContext = React.createContext();

function GlobalState() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ countState: count, dispatch: dispatch }}>
      <div>
        <h1>GlobalState::Counter: {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default GlobalState;
