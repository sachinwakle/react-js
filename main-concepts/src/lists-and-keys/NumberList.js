import React from "react";
import nanoid from "nanoid";

function NumberList(props) {
  let numbers = props.numbers;
  let list = numbers.map((number) => (
    <li key={nanoid()} id={nanoid()}>
      {number}
    </li>
  ));
  return <ul>{list}</ul>;
}

export default NumberList;
