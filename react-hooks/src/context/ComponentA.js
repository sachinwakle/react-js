import React from "react";
import ComponentB from "./ComponentB";

export const UserContext = React.createContext();
export const LocationContext = React.createContext();
function ComponentA() {
  return (
    <div>
      <UserContext.Provider value="sachin">
        <LocationContext.Provider value="pune">
          Component=A
          <ComponentB />
        </LocationContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
