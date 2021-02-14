import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

class RenderProps extends Component {
  render() {
    return (
      <div>
        <Counter>
          {(counter, incrementHandler) => {
            return (
              <ClickCounter
                counter={counter}
                counterHandler={incrementHandler}
              />
            );
          }}
        </Counter>
        <Counter>
          {(counter, incrementHandler) => {
            return (
              <HoverCounter
                counter={counter}
                counterHandler={incrementHandler}
              />
            );
          }}
            </Counter>
      </div>
    );
  }
}

export default RenderProps;
