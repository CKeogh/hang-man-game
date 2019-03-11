import React from "react";

const GuessBox = props => {
  return (
    <input
      type="text"
      id="guess"
      maxLength="1"
      onChange={props.handleChange}
      onSubmit={() => {
        console.log("triggered");
      }}
    />
  );
};

export default GuessBox;
