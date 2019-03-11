import React from "react";

const GuessBox = props => {
  return (<form onSubmit={props.handleSubmit}>
    <input
      type="text"
      id="guess"
      maxLength="1"
    />
  </form >
  );
};

export default GuessBox;
