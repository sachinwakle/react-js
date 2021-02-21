import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h1>Number Of Cakes: {props.numOfCakes}</h1>

      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (num) => dispatch(buyCake(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
