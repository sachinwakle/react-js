import React from "react";

function NameList({ names }) {
  return names.map((name, index) => <li key={index}>{name}</li>);
}

export default NameList;
