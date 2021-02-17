import React, { useState } from "react";

function StateObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function changeFirstName(e) {
    setName({ ...name, firstName: e.target.value });
  }

  function changeLastName(e) {
    setName({ ...name, lastName: e.target.value });
  }

  return (
    <div>
      <input type="text" onChange={changeFirstName} />
      <input type="text" onChange={changeLastName} />
      <h1>FirstName: {name.firstName}</h1>
      <h1>LastName: {name.lastName}</h1>
      <p>{JSON.stringify(name)}</p>
    </div>
  );
}

export default StateObject;
