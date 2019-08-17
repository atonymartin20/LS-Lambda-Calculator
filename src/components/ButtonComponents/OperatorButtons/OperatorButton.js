import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button onClick={() => {
        props.addOperator(props.text)
      }}>
        {props.text}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
