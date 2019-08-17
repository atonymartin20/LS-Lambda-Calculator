import React from "react";

const SpecialButton = () => {
  return (
    <>
      <button onClick={() => {
        props.addSpecial(props.text)
      }}>
        {props.text}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
