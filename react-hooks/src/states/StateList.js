import React from "react";

function StateList() {
  return (
    <div>
      <button>Add an Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StateList;
