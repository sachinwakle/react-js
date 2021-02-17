import React from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <div>
              <h2>Hello {user} from Component-C</h2>
              <ComponentD />
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentC;
