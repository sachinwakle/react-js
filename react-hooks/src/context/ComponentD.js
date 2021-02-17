import React, { useContext } from "react";
import { LocationContext, UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);
  const location = useContext(LocationContext);
  return (
    <div>
      From Component-D: Hello {user} from {location}
    </div>
  );
}

export default ComponentD;
