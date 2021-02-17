import React, { useContext } from "react";
import { CountContext } from "./GlobalState";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function ComponentD() {
  const counterContext = useContext(CountContext);
  return (
    <div>
      ComponentD: {counterContext.countState}
      <Button onClick={() => counterContext.dispatch("increment")}>
        Increment
      </Button>
      <Button onClick={() => counterContext.dispatch("decrement")}>
        Decrement
      </Button>
      <Button onClick={() => counterContext.dispatch("reset")}>Reset</Button>
    </div>
  );
}

export default ComponentD;
