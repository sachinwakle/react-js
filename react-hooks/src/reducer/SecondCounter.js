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

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incrementSecond":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementSecond":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "increment5":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement5":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function SecondCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2 style={{ color: "crimson" }}>First Counter: {state.firstCounter}</h2>
      <h2 style={{ color: "crimson" }}>
        Second Counter: {state.secondCounter}
      </h2>
      <Button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </Button>
      <Button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </Button>
      <Button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        Increment-By-5
      </Button>
      <Button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        Decrement-By-5
      </Button>
      <div>
        <Button onClick={() => dispatch({ type: "incrementSecond", value: 1 })}>
          Second Increment
        </Button>
        <Button onClick={() => dispatch({ type: "decrementSecond", value: 1 })}>
          Second Decrement
        </Button>
      </div>
      <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
    </div>
  );
}

export default SecondCounter;
