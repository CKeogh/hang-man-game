import React from "react";

const BadGuesses = props => {
  return (
    <ul>
      {props.guesses.map(element => {
        return <li key={element}>{element}</li>;
      })}
    </ul>
  );
};
export default BadGuesses;
