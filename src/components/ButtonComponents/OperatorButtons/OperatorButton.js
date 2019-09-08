import React from "react";

/* Display a button element rendering the data being passed down from the parent container on props */
const OperatorButton = (props) => {
  return (
    <button onClick={() => 
      props.addOperator(props.text.value)
    } className="operator-button">
      {props.text.char}
    </button>
  );
};

export default OperatorButton;