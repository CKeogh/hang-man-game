import React from 'react';

const Image = (props) => {
    if (props.won) return <img onChange={props.handleChange} src={props.wonImage} alt="hangman"></img>
    else return <img onChange={props.handleChange} src={props.image} alt="hangman"></img>
}

export default Image;