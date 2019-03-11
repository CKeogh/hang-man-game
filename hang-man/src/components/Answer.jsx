import React from "react";

const Answer = props => {
  console.log(props);
  return (
    <div>
      {props.word.map((object, index) => (
        <span key={index}>{object.hidden ? "_ " : object.letter}</span>
      ))}
    </div>
  );
};

export default Answer;
