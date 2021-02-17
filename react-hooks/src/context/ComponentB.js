import React from "react";
import { LocationContext, UserContext } from "./ComponentA";
import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <LocationContext.Consumer>
              {(location) => {
                return (
                  <div>
                    hello {user} from {location} - Component-B
                    <ComponentC />
                  </div>
                );
              }}
            </LocationContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentB;
